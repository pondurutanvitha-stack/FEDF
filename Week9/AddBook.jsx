import { useState } from "react";

function AddBook() {
  const [bookTitle, setBookTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage(
      `Book Added Successfully!
Title: ${bookTitle}
Author: ${author}
ISBN: ${isbn}`
    );

    setBookTitle("");
    setAuthor("");
    setIsbn("");
  };

  return (
    <div>
      <h2>Add New Book</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Book Title:</label>
        <br />
        <input
          id="title"
          type="text"
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
          required
          aria-label="Book Title"
        />

        <br /><br />

        <label htmlFor="author">Author:</label>
        <br />
        <input
          id="author"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
          aria-label="Author"
        />

        <br /><br />

        <label htmlFor="isbn">ISBN:</label>
        <br />
        <input
          id="isbn"
          type="text"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
          required
          aria-label="ISBN"
        />

        <br /><br />

        <button type="submit">Add Book</button>
      </form>

      {message && (
        <div style={{ marginTop: "20px" }}>
          <pre>{message}</pre>
        </div>
      )}
    </div>
  );
}

export default AddBook;
