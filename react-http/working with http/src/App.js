import React, { useState, useEffect, useCallback } from "react";
import AddMovie from "./components/AddMovie";
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [postData, setpostData] = useState(false);
  const [error, setError] = useState("");

  const fetchMovies = useCallback(async () => {
    setError("");

    try {
      setIsLoading(true);

      const response = await fetch(
        "https://react-http-bfa65-default-rtdb.firebaseio.com/data.json"
      );

      if (!response.ok) throw new Error("Something Went Wrong..");

      const data = await response.json();

      const fetchedMovieData = [];

      if (data) {
        for (let key in data) {
          fetchedMovieData.push({
            id: key,
            title: data[key].title,
            releaseDate: data[key].date,
            openingText: data[key].openingText,
          });
        }
      }

      setMovieList(fetchedMovieData);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }, []);

  const addMovieHandler = async (movie) => {
    await fetch(
      "https://react-http-bfa65-default-rtdb.firebaseio.com/data.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setpostData(true);
  };

  useEffect(() => {
    fetchMovies();
    setpostData(false);
  }, [fetchMovies, setpostData, postData]);

  let content;

  if (error.length === 0 && !isLoading && movieList.length > 0)
    content = <MoviesList movies={movieList} />;
  else if (error.length === 0 && !isLoading && movieList.length === 0)
    content = <p>No movies found</p>;
  else if (isLoading) content = <p>Loading...</p>;
  else if (error.length > 0 && !isLoading) content = error;

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler}></AddMovie>
        {/* <button onClick={fetchMovies}>Fetch Movies</button> */}
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
