import { useState } from "react";
import "./App.css";

import Movie from "./components/Movie";

function App() {
  const FEATURED_API = "";

  return (
    <div>
      {movies.map((movie, index) => (
        <Movie key={index} title={movie} />
      ))}
    </div>
  );
}

export default App;
