import { useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { fetchMoviesById } from "../../services/api";
import s from "./MovieDetailsPage.module.css";
import clsx from "clsx";
import { TiArrowBackOutline } from "react-icons/ti";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const goBackRef = useRef(location.state?.from ?? "/");

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchMoviesById(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [movieId]);

  const setActiveClass = ({ isActive }) => {
    return clsx(s.navItem, isActive && s.active);
  };

  return (
    <div>
      <Link to={goBackRef.current} className={s.backBtn}>
        <TiArrowBackOutline className={s.icon} />
        Go back
      </Link>
      <div className={s.wrapper}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.original_title}
          className={s.poster}
        />
        <div className={s.info}>
          <h3>{movie.original_title}</h3>
          <div>
            <p>
              User Score: {movie.vote_average} (vote count: {movie.vote_count})
            </p>
            <p>Release Date: {movie.release_date}</p>
            <h4>Overview </h4>
            <p>{movie.overview}</p>
            <h4>Genres</h4>
            <p>
              {movie.genres && movie.genres.length > 0
                ? movie.genres.map((genre) => genre.name).join(", ")
                : "No genres available"}
            </p>
          </div>
        </div>
      </div>
      <div>
        <h4>Aditional information</h4>
        <nav className={s.navList}>
          <NavLink to="cast" className={setActiveClass}>
            Cast
          </NavLink>
          <NavLink to="reviews" className={setActiveClass}>
            Reviews
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
