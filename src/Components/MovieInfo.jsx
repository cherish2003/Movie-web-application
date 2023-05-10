import React from "react";
import parse from "html-react-parser";

const MovieInfo = (props) => {
  const str = props.data.summary;
  return (
    <div className="info_div ">
      <div className="Movie_title">{props.data.name}</div>
      <div className="Movie_summary ">
        <p>{parse(str)}</p>
      </div>
      {props.data.rating.average ? (
        <div className="Movie_Rating">
          Rating : {props.data.rating.average}/10
        </div>
      ) : null}

      {props.data.schedule.time ? (
        <div className="Movie_timing">Timings: {props.data.schedule.time}</div>
      ) : null}

      <div className="language">language: {props.data.language}</div>
      <button
        type="button"
        className="btn btn-dark"
        onClick={() => props.HandleClick()}
      >
        Book Now
      </button>
    </div>
  );
};

export default MovieInfo;
