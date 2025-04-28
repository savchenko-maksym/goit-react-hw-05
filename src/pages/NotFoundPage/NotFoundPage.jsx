import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div>
      <h2>404 Page is not found... 404</h2>
      <Link className={s.linkNotFound} to="/">
        Back to main menu
      </Link>
    </div>
  );
};

export default NotFoundPage;
