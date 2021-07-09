import React from "react";

const MovieList = (props) => {
  return (
    <div>
      <h2>{props.movieItem.title}</h2>
      <img src={props.movieItem.img} alt={props.movieItem.id} />
    </div>
  );
};

export default MovieList;
