import { useState, useEffect } from "react";
import "./App.css";

import Movie from "./components/Movie";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e18f09df8fb4b137c0094d91ccd95a8c&page=1";

const IMG_API =
  "https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=e18f09df8fb4b137c0094d91ccd95a8c&query=";
function App() {
  const [movies, setMovies] = useState([]);

  useEffect(async () => {
    const moviesResp = await fetch(FEATURED_API);
    const movies = await moviesResp.json();
  }, []);

  return (
    <div>
      {movies.map((movie, index) => (
        <Movie key={index} title={movie} />
      ))}
    </div>
  );
}

export default App;
