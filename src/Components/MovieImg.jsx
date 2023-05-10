import React from "react";

const MovieTitle = (props) => {
  return (
    <div className="Movie_details">
      <img src={props.data.image.original} alt="" />
    </div>
  );
};

export default MovieTitle;
