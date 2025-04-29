import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import SearchBar from "../../components/SearchBar/SearchBar";
import s from "./MoviesPage.module.css";
import { fetchSearchMovies } from "../../services/api";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  // const [searchValue, setSearchValue] = useState("");
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const query = searchParams.get("query") ?? "";
  const handleChangeQuery = (newValue) => {
    // setSearchValue(newValue);
    if (!newValue) {
      searchParams.delete("query");
      return setSearchParams(searchParams);
    }
    searchParams.set("query", newValue);
    setSearchParams(searchParams);
    setSearchMovies([]);
    setPage(1);
  };

  useEffect(() => {
    const abortController = new AbortController();
    const getData = async () => {
      try {
        const movies = await fetchSearchMovies(
          query,
          page,
          abortController.signal
        );
        setSearchMovies((prev) => [...prev, ...movies.results]);
        setTotalPages(movies.total_pages);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    return () => {
      abortController.abort();
    };
  }, [query, page]);

  return (
    <div className={s.wrapper}>
      <SearchBar handleChangeQuery={handleChangeQuery} />
      <MovieList data={searchMovies} />

      {page < totalPages && (
        <button
          className={s.btnLoadMore}
          type="button"
          onClick={() => setPage(page + 1)}
        >
          Load more
        </button>
      )}
    </div>
  );
};

export default MoviesPage;
