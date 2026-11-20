import { useState } from "react";
import MovieList from "./components/MovieList";
import AddMovieForm from "./components/AddMovieForm";
import "./App.css";

const initialMovies = [
  { id: 1, title: "Inception", year: 2010, genre: "Sci-Fi" },
  { id: 2, title: "The Dark Knight", year: 2008, genre: "Action" },
  { id: 3, title: "Interstellar", year: 2014, genre: "Sci-Fi" },
  { id: 4, title: "Parasite", year: 2019, genre: "Thriller" },
];

function App() {
  const [movies, setMovies] = useState(initialMovies);

  const addMovie = (newMovie) => {
    setMovies([...movies, { ...newMovie, id: Date.now() }]);
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  return (
    <div className="app">
      <h1>🎬 My Movie List</h1>
      <AddMovieForm onAdd={addMovie} />
      <MovieList movies={movies} onDelete={deleteMovie} />
    </div>
  );
}

export default App;