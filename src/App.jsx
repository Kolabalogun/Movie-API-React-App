import React from "react";
import "./App.css";
import MovieCard from "./MovieCard";

const App = () => {
  // movie state
  const [movies, moviesF] = React.useState([]);

  //   search state
  const [search, searchF] = React.useState("");

  //get array

  const API = "http://www.omdbapi.com/?i=tt3896198&apikey=be0ca939";

  const SearchMovies = async (title) => {
    const res = await fetch(`${API}&s=${title}`);
    const data = await res.json();

    moviesF(data.Search);
  };

  // get api to run on refresh or start

  React.useEffect(() => {
    SearchMovies("Spider");
  }, []);

  //   update search state
  function handleChange(e) {
    searchF(e.target.value);
  }

  //  function to run array
  function handleClick(params) {
    SearchMovies(search);
  }


  

  return (
    <div className="app">
      <h1>Movie Bank</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search for Movies"
          value={search}
          onChange={handleChange}
        />
        <img src="magnifying-glass-solid.svg" alt="" onClick={handleClick} />
      </div>

      {movies.length === 0 ? (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      ) : (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie1={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
