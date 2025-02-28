import { useState } from "react";
import "./App.css";

import Movie from "./components/Movie";

images : https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg
const IMG_API = "";
const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e18f09df8fb4b137c0094d91ccd95a8c&page=1";

function App() {
  const movies = ["1", "2", "3"];

  return (
    <div>
      {movies.map((movie, index) => (
        <Movie key={index} title={movie} />
      ))}
    </div>
  );
}

export default App;
