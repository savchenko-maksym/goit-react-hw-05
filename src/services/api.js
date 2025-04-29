import axios from "axios";

export const fetchMovies = async (page, signal) => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2U0ZWQxZmIwNTgxMTA0YjYwM2JkNmY0NGVjMTM0NiIsIm5iZiI6MTc0NTc4MTU5Ni4xOTIsInN1YiI6IjY4MGU4MzVjZjk3ZjVjYjZiOGViMGE1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uJoI9_4Ssu2BkIFIbsvbpuh0_dpXRBR7EapkidKhVWo",
      },
      params: {
        page: page,
      },
      signal,
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

export const fetchReviewById = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2U0ZWQxZmIwNTgxMTA0YjYwM2JkNmY0NGVjMTM0NiIsIm5iZiI6MTc0NTc4MTU5Ni4xOTIsInN1YiI6IjY4MGU4MzVjZjk3ZjVjYjZiOGViMGE1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uJoI9_4Ssu2BkIFIbsvbpuh0_dpXRBR7EapkidKhVWo",
      },
    }
  );
  return response.data.results;
};

export const fetchCastById = async (movieId) => {
  const response = await axios.get(
    `
https://api.themoviedb.org/3/movie/${movieId}/credits`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2U0ZWQxZmIwNTgxMTA0YjYwM2JkNmY0NGVjMTM0NiIsIm5iZiI6MTc0NTc4MTU5Ni4xOTIsInN1YiI6IjY4MGU4MzVjZjk3ZjVjYjZiOGViMGE1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uJoI9_4Ssu2BkIFIbsvbpuh0_dpXRBR7EapkidKhVWo",
      },
    }
  );
  return response.data.cast;
};

export const fetchSearchMovies = async (query = "", page, signal) => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2U0ZWQxZmIwNTgxMTA0YjYwM2JkNmY0NGVjMTM0NiIsIm5iZiI6MTc0NTc4MTU5Ni4xOTIsInN1YiI6IjY4MGU4MzVjZjk3ZjVjYjZiOGViMGE1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uJoI9_4Ssu2BkIFIbsvbpuh0_dpXRBR7EapkidKhVWo",
      },
      params: { query: query, page: page },
      signal,
    }
  );
  return response.data;
};
