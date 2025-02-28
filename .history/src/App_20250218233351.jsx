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

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getMovies = async () => {
      const moviesResp = await fetch(FEATURED_API);
      const data = await moviesResp.json();
      setMovies(data.results); // Extract the results array
      console.log(data);
    };

    getMovies();
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    useEffect(() => {
      const getMovies = async () => {
        const moviesResp = await fetch(FEATURED_API);
        const data = await moviesResp.json();
        setMovies(data.results); // Extract the results array
        console.log(data);
      };
  
      getMovies();)
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <header>
        <form onSbmit={handleOnSubmit}>
          <input
            className="search"
            type="search"
            placeholder="Search"
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </>
  );
}

export default App;
