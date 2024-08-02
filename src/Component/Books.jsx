import React, { useState } from "react";
import SearchFilter from "./SearchFilter";
import Book from "./Book";
import "./Books.css";

const Books = () => {
  const initialBooks = [
    {
      title: "Introduction to Algorithms",
      author: "Thomas H. Cormen",
      dueDate: "2023-10-01",
      status: "Checked Out",
    },
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      dueDate: "2024-01-15",
      status: "Checked Out",
    },
    {
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt",
      dueDate: "",
      status: "Available",
    },
    {
      title: "Design Patterns",
      author: "Erich Gamma",
      dueDate: "2024-02-20",
      status: "Checked Out",
    },
    {
      title: "You Don't Know JS",
      author: "Kyle Simpson",
      dueDate: "",
      status: "Available",
    },
    {
      title: "JavaScript: The Good Parts",
      author: "Douglas Crockford",
      dueDate: "2024-03-15",
      status: "Checked Out",
    },
    {
      title: "Eloquent JavaScript",
      author: "Marijn Haverbeke",
      dueDate: "",
      status: "Available",
    },
    {
      title: "Effective Java",
      author: "Joshua Bloch",
      dueDate: "2024-04-01",
      status: "Checked Out",
    },
    {
      title: "Code Complete",
      author: "Steve McConnell",
      dueDate: "",
      status: "Available",
    },
    {
      title: "Refactoring",
      author: "Martin Fowler",
      dueDate: "2024-05-10",
      status: "Checked Out",
    },
  ];

  const [books, setBooks] = useState(initialBooks);
  const [searchQuery, setSearchQuery] = useState("");

  const handleToggleStatus = (index) => {
    const updatedBooks = books.map((book, i) => {
      if (i === index) {
        return {
          ...book,
          status: book.status === "Checked Out" ? "Available" : "Checked Out",
          dueDate:
            book.status === "Checked Out"
              ? ""
              : new Date(Date.now() + 14 * 24 * 60 * 60 * 1000)
                  .toISOString()
                  .split("T")[0],
        };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="books-container">
      <SearchFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <table className="books-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Title</th>
            <th>Author</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((book, index) => (
            <Book
              key={index}
              index={index}
              book={book}
              handleToggleStatus={handleToggleStatus}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Books;
