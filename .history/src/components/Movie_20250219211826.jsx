import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w500";

const setVoteColor = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "orange";
  } else {
    return "red";
  }
};

const Movie = ({ title, poster_path, overview, vote_average }) => {
  return (
    <div className="movie">
      <img
        src={poster_path(
          IMG_API + poster_path
            ? poster_path
            : "https://plus.unsplash.com/premium_photo-1710961232986-36cead00da3c?q=80&w=968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        )}
        alt={title}
      />

      <div className="movie-info">
        <h3>{title}</h3>
        <span className={`tag ${setVoteColor(vote_average)}`}>
          {vote_average}
        </span>
      </div>

      <div className="movie-over">
        <h2>Overview:</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default Movie;
