import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ data }) => {
  const location = useLocation();
  return (
    <div>
      <ul className={s.list}>
        {data.map((item) => (
          <li key={item.id} className={s.posterItem}>
            <Link
              state={location}
              className={s.itemLink}
              to={item.id.toString()}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                alt={item.title}
                className={s.posterImg}
              />
              <p className={s.posterText}>{item.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MovieList;
