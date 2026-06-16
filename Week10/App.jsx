import { useState } from "react";
import "./App.css";

function App() {
  const [books, setBooks] = useState([
    {
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      isbn: "9781612680194",
    },
    {
      title: "The Psychology of Money",
      author: "Morgan Housel",
      isbn: "9780857197689",
    },
    {
      title: "Ikigai",
      author: "Hector Garcia",
      isbn: "9781786330895",
    },
    {
      title: "Deep Work",
      author: "Cal Newport",
      isbn: "9781455586691",
    },
    {
      title: "Think and Grow Rich",
      author: "Napoleon Hill",
      isbn: "9781585424337",
    },
    {
      title: "Zero to One",
      author: "Peter Thiel",
      isbn: "9780804139298",
    },
    {
      title: "The Intelligent Investor",
      author: "Benjamin Graham",
      isbn: "9780060555665",
    },
    {
      title: "Can't Hurt Me",
      author: "David Goggins",
      isbn: "9781544512280",
    },
  ]);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [search, setSearch] = useState("");
  const [showBooks, setShowBooks] = useState(true);

  const addBook = () => {
    if (!title || !author || !isbn) {
      alert("Please fill all fields");
      return;
    }

    const newBook = {
      title,
      author,
      isbn,
    };

    setBooks([...books, newBook]);

    setTitle("");
    setAuthor("");
    setIsbn("");
  };

  const deleteBook = (isbn) => {
    setBooks(books.filter((book) => book.isbn !== isbn));
  };

  const clearBooks = () => {
    setBooks([]);
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase()) ||
      book.isbn.includes(search)
  );

  return (
    <div className="container">
      <h1>Library Management System</h1>

      <label>Book Title</label>
      <input
        type="text"
        placeholder="Enter book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label>Author Name</label>
      <input
        type="text"
        placeholder="Enter author name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <label>ISBN Number</label>
      <input
        type="text"
        placeholder="Enter ISBN number"
        value={isbn}
        onChange={(e) => setIsbn(e.target.value)}
      />

      <button className="add-btn" onClick={addBook}>
        Add Book
      </button>

      <h2>Total Books : {books.length}</h2>

      <div className="controls">
        <input
          type="text"
          className="search-box"
          placeholder="🔍 Search Book"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          className="dark-btn"
          onClick={() => setShowBooks(!showBooks)}
        >
          {showBooks ? "Hide Books" : "Show Books"}
        </button>

        <button className="dark-btn" onClick={clearBooks}>
          Clear All Books
        </button>
      </div>

      {showBooks && (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>ISBN</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredBooks.map((book, index) => (
              <tr key={index}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.isbn}</td>
                <td>
                  <button className="edit-btn">Edit</button>

                  <button
                    className="delete-btn"
                    onClick={() => deleteBook(book.isbn)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
