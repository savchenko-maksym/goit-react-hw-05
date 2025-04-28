import axios from "axios";

export const fetchMovies = async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2U0ZWQxZmIwNTgxMTA0YjYwM2JkNmY0NGVjMTM0NiIsIm5iZiI6MTc0NTc4MTU5Ni4xOTIsInN1YiI6IjY4MGU4MzVjZjk3ZjVjYjZiOGViMGE1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uJoI9_4Ssu2BkIFIbsvbpuh0_dpXRBR7EapkidKhVWo",
      },
    }
  );
  return response.data.results;
};

export const fetchMoviesById = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2U0ZWQxZmIwNTgxMTA0YjYwM2JkNmY0NGVjMTM0NiIsIm5iZiI6MTc0NTc4MTU5Ni4xOTIsInN1YiI6IjY4MGU4MzVjZjk3ZjVjYjZiOGViMGE1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uJoI9_4Ssu2BkIFIbsvbpuh0_dpXRBR7EapkidKhVWo",
      },
    }
  );
  return response.data;
};
