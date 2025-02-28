import { useState } from "react";
import "./App.css";

import Movie from "./components/Movie";

function App() {
  const movies = ["1", "2", "3"];

  return (
    <div>
      {movies.map((movies) => (
        <Movie />
      ))}
    </div>
  );
}

export default App;
