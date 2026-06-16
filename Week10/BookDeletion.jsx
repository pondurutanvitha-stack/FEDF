import { useState } from "react";
import "./App.css";

function BookDeletion() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [message, setMessage] = useState("");

  const [books, setBooks] = useState([
    {
      id: 1,
      title: "FEDF",
      author: "Keerthi",
      isbn: "894562235623",
    },
    {
      id: 2,
      title: "FEDF",
      author: "Greeshma",
      isbn: "9652186321545",
    },
    {
      id: 3,
      title: "DSA",
      author: "Keerthana",
      isbn: "963852741456",
    },
  ]);

  const addBook = (e) => {
    e.preventDefault();

    if (!title || !author || !isbn) {
      alert("Please fill all fields");
      return;
    }

    const newBook = {
      id: Date.now(),
      title,
      author,
      isbn,
    };

    setBooks([...books, newBook]);

    setTitle("");
    setAuthor("");
    setIsbn("");

    setMessage("✅ Book Added Successfully!");
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div className="container">
      <h1>📚 Library Management System</h1>

      <form className="book-form" onSubmit={addBook}>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <input
          type="text"
          placeholder="ISBN"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
        />

        <button type="submit">Add Book</button>
      </form>

      {message && <div className="success">{message}</div>}

      <h2>📖 Book List</h2>

      <div className="book-grid">
        {books.map((book) => (
          <div className="card" key={book.id}>
            <h3>{book.title}</h3>

            <p>👤 {book.author}</p>

            <p>🔢 {book.isbn}</p>

            <button
              className="delete-btn"
              onClick={() => deleteBook(book.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookDeletion;
