import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Content.css";
import MovieTitle from "../../Components/MovieImg";
import MovieInfo from "../../Components/MovieInfo";
import BookingForm from "../../Components/BookingForm";

export const Content = () => {
  const location = useLocation();
  const { info } = location.state;
  const [bookTicket, seTbookTicket] = useState();
  let bookStatus;
  useEffect(() => {
    if (localStorage.getItem("bookStatus")) {
      seTbookTicket(true);
    } else {
      seTbookTicket(false);
    }
  }, []);
  const onClickhandle = () => {
    localStorage.setItem("bookStatus", true);
    seTbookTicket(true);
  };
  const handleCancel = () => {
    console.log("hey bitch");
    localStorage.setItem("bookStatus", false);
    seTbookTicket(false);
  };

  return (
    <div className="container  ">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <div className="row justify-content-center">
          <h1>Movie Details</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <MovieTitle data={info} />
        </div>
        <div className="col-md-6 ">
          {bookTicket ? (
            <BookingForm HandleCancel={handleCancel} title={info.name} />
          ) : (
            <MovieInfo data={info} HandleClick={onClickhandle} />
          )}
        </div>
      </div>
    </div>
  );
};
