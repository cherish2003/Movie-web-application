import React, { useEffect, useState } from "react";
import { Route, Link, BrowserRouter } from "react-router-dom";

const Ticket = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  useEffect(() => {
    const userName = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const number = localStorage.getItem("number");
    setEmail(email);
    setName(userName);
    setNumber(number);
  }, []);
  return (
    <div className="Ticket_booked">
      <div className="Booked_heading">Thank You!</div>
      <div className="Booked_content">
        Dear {name} you have sucessfully booked the ticket for the movie{" "}
        {props.MovieName}
      </div>
      <div className="Contact_info">
        Your ticket will be recieved to the number <span>{number}</span> and to
        the mail : <span>{email}</span>
      </div>
      <div className="Menu_link">
        <Link to="/" >
          Back to Menu
        </Link>
      </div>
    </div>
  );
};

export default Ticket;
