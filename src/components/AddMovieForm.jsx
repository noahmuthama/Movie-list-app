import { useState } from "react";

function AddMovieForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !year || !genre.trim()) return;

    onAdd({ title, year: Number(year), genre });
    setTitle("");
    setYear("");
    setGenre("");
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default AddMovieForm;