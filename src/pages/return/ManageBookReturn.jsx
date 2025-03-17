import React, { useState, useEffect } from "react";
import axios from "axios";

const ManageBookReturn = () => {
  const [readerId, setReaderId] = useState("");
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  const baseUrl = "http://localhost/Library_Exam/admin"; // Replace with your base URL

  // Fetch borrowed books by reader ID
  const fetchBorrowedBooks = async (id) => {
    try {
      const response = await axios.get(`${baseUrl}/api/borrow/filter_books`, {
        params: { reader_id: id },
      });
      setBorrowedBooks(response.data.borrowed_books || []);
    } catch (error) {
      console.error("Error fetching borrowed books:", error);
    }
  };

  // Handle book return
  const handleReturnBook = async (borrowId) => {
    try {
      await axios.get(`${baseUrl}/api/borrow/return`, {
        params: { id: borrowId },
      });
      setBorrowedBooks((prevBooks) =>
        prevBooks.filter((book) => book.id !== borrowId)
      );
      alert("Book returned successfully!");
    } catch (error) {
      console.error("Error returning book:", error);
      alert("Failed to return the book.");
    }
  };

  // Handle search input change
  const handleSearchChange = (event) => {
    const id = event.target.value;
    setReaderId(id);
    if (id) {
      fetchBorrowedBooks(id);
    } else {
      setBorrowedBooks([]);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="h3">Manage Book Return</h1>

      {/* Search Form */}
      <div className="app-search mt-3" style={{ width: "30%" }}>
        <form>
          <div
            className="input-group"
            style={{ border: "1px solid blue", borderRadius: "30px" }}
          >
            <input
              type="search"
              className="form-control"
              value={readerId}
              onChange={handleSearchChange}
              placeholder="Search with Reader ID..."
            />
          </div>
        </form>
      </div>

      <hr />

      {/* Borrowed Books Table */}
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Reader Name</th>
            <th>Book Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {borrowedBooks.length > 0 ? (
            borrowedBooks.map((book, index) => (
              <tr key={book.id}>
                <td>{index + 1}</td>
                <td>{book.name}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.category}</td>
                <td>
                  <span className="badge bg-warning">{book.status}</span>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleReturnBook(book.id)}
                  >
                    Return
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">
                No borrowed books found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBookReturn;
