function MovieItem({ movie, onDelete }) {
  return (
    <li className="movie-item">
      <div>
        <h3>{movie.title}</h3>
        <p>
          {movie.year} • {movie.genre}
        </p>
      </div>
      <button onClick={() => onDelete(movie.id)}>Delete</button>
    </li>
  );
}

export default MovieItem;