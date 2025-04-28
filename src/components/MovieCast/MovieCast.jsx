import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCastById } from "../../services/api";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchCastById(movieId);
        setCasts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [movieId]);

  return (
    <ul>
      {casts.map((cast) => (
        <li key={cast.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
            alt={cast.name}
            className={s.imgCast}
          />
          <h4>{cast.name}</h4>
          <p>Character: {cast.character}</p>
        </li>
      ))}
    </ul>
  );
};
export default MovieCast;
