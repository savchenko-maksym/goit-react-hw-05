import { useEffect, useState } from "react";
import { fetchMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import s from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const abortController = new AbortController();
    const getData = async () => {
      try {
        const movies = await fetchMovies(page, abortController.signal);
        setMovies((prevMovies) => [...prevMovies, ...movies]);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    return () => {
      abortController.abort();
    };
  }, [page]);

  return (
    <div className={s.wrapper}>
      <h2>Trending today</h2>
      <MovieList data={movies} />
      <button
        className={s.btnLoadMore}
        type="button"
        onClick={() => setPage(page + 1)}
      >
        Load more
      </button>
    </div>
  );
};

export default HomePage;
