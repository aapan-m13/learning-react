import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movieList, setMovieList] = useState([]);

  const fetchMovies = async () => {
    const movies = await fetch("https://swapi.dev/api/films");
    const data = await movies.json();
    const movieData = data.results.map((data) => {
      return {
        id: data.episode_id,
        title: data.title,
        releaseDate: data.release_date,
        openingText: data.opening_crawl,
      };
    });
    setMovieList(movieData);
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movieList} />
      </section>
    </React.Fragment>
  );
}

export default App;
