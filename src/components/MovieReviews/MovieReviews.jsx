import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewById } from "../../services/api";

const MovieReviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchReviewById(movieId);
        setReviews(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [movieId]);

  return (
    <ul>
      {reviews.map((review) => (
        <li key={review.id}>
          <h4>Author: {review.author} </h4>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieReviews;
