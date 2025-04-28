import { Link } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ data }) => {
  return (
    <div>
      <ul className={s.list}>
        {data.map((item) => (
          <li key={item.id}>
            <Link className={s.item} to={item.id.toString()}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MovieList;
