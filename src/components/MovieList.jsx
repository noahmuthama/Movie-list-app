import MovieItem from "./MovieItem";

function MovieList({ movies, onDelete }) {
  if (movies.length === 0) {
    return <p className="empty">No movies yet. Add one above!</p>;
  }

  return (
    <ul className="movie-list">
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default MovieList;