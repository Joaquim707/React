import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w500";

const Movie = ({ title, poster_path, overview, vote_average }) => {
  return (
    <div className="movie">
      <div className="movie-header">
        <img src={IMG_API + poster_path} alt={title} />
      </div>
    </div>
  );
};

export default Movie;
