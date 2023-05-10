import React, { useState, useEffect } from "react";
import Ticket from "./Ticket";

const BookingForm = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [ticket, setTicket] = useState();
  const saveUserDetails = () => {
    localStorage.setItem("email", email);
    localStorage.setItem("name", name);
    localStorage.setItem("number", number);
    localStorage.setItem("TicketBooked", true);
    setTicket(true);
  };
  useEffect(() => {
    if (localStorage.getItem("TicketBooked")) {
      setTicket(true);
    } else {
      setTicket(false);
    }
  }, []);
  return (
    <>
      {ticket ? (
        <Ticket MovieName={props.title} />
      ) : (
        <div className="form-box ">
          <h1>Book Ticket</h1>
          <form className="BookForm">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                className="form-control"
                id="name"
                type="text"
                name="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className="form-control"
                id="email"
                type="email"
                name="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Phone Number</label>
              <input
                className="form-control"
                id="number"
                type="text"
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="Buttons_div">
              <button
                type="button"
                className="btn btn-dark"
                onClick={() => props.HandleCancel()}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-dark"
                onClick={() => saveUserDetails()}
              >
                Book
              </button>
              
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default BookingForm;
