import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import Movies from "../../Components/Movies";
const Home = () => {
  const [Moviesdata, setMoviesdata] = useState([]);
  const fetchData = async () => {
    const url = "https://api.tvmaze.com/search/shows?q=all";
    try {
      const response = await fetch(url);
      const responseJson = await response.json();
      setMoviesdata(responseJson);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
    localStorage.clear();
  }, []);
  return (
    <div className="container">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <div className="col justify-content-center">
          <h1>Movie app</h1>
        </div>
      </div>
      <div className="row">
        {Moviesdata.map((movie, index) =>
          movie.show.image ? (
            <Movies
              image={movie.show.image}
              title={movie.show.name}
              genres={movie.show.genres}
              date={movie.show.premiered}
              Data={movie.show}
              key={index}
            />
          ) : null
        )}
      </div>
    </div>
  );
};

export default Home;
