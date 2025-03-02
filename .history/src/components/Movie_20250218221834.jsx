import React from "react";

const IMG_API =
  "https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg";

const Movie = ({ title, poster_path, overview, vote_average }) => {
  <div className="movie">
    <img src={IMG_API + poster_path} alt={title} />
  </div>;
};

export default Movie;
