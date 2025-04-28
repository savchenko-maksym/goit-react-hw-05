import { useEffect, useState } from "react";
import { fetchMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import s from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const movies = await fetchMovies();
        setMovies(movies);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [movies]);

  return (
    <div className={s.wrapper}>
      <h2>Trending today</h2>
      <MovieList data={movies} />
    </div>
  );
};

export default HomePage;
