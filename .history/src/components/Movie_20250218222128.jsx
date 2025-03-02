import React from "react";

const Movie = ({ title, poster_path, overview, vote_average }) => {
  return (
    <div className="movie">
      <img src={IMG_API + poster_path} alt={title} />
    </div>
  );
};

export default Movie;
