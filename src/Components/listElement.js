import React from "react";

const MovieList = (props) => {
  return (
    <div>
      <h2>{props.m.title}</h2>
      <img src={props.m.img} alt={props.m.id} />
    </div>
  );
};

export default MovieList;
