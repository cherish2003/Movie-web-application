import React from "react";
import { Route, Link, BrowserRouter } from "react-router-dom";

const Movies = (props) => {
  const { image, title, genres, date, Data } = props;
  return (
    <>
      <div className="Movie_card ">
        <div className="Movie_div">
          <div className="Img_src">
            <img src={image.medium} alt="movie" />
          </div>
          <div className="Card_content">
            <h2 className="Card_title">{title}</h2>
            <h3 className="Card_date">{date}</h3>
            <div className="Movie_genres">
              <span className="genre">{genres[0]}</span>
            </div>
          </div>
          <div className="Card_link">
            <Link to="/Content" state={{ info: Data }}>
              View More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movies;
