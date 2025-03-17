import React from "react";

const BorrowReceipt = () => {
  // Sample data for demonstration
  const borrow = {
    reader_id: 101,
    borrow_date: "2025-01-15",
    return_date: "2025-01-30",
  };

  const reader = {
    name: "John Doe",
    phone: "123-456-7890",
  };

  const staff = {
    name: "Jane Smith",
  };

  const borrowDetails = [
    {
      book: { title: "React for Beginners", author: "John Smith" },
      category: { name: "Programming" },
    },
    {
      book: { title: "Advanced CSS", author: "Jane Doe" },
      category: { name: "Web Design" },
    },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container mt-2">
      {/* Receipt */}
      <div className="receipt bg-white border rounded shadow-sm p-4">
        {/* Receipt Header */}
        <div className="text-center mb-4">
          <h1 className="h4">Village Library Movement</h1>
          <p className="text-muted">
            Book Receipt
            <hr />
          </p>
        </div>

        {/* Borrower Details */}
        <table className="table table-borderless mb-4">
          <tbody>
            <tr>
              <th className="text-start">Reader Name:</th>
              <td>{reader?.name}</td>
            </tr>
            <tr>
              <th className="text-start">Membership ID:</th>
              <td>#{borrow?.reader_id}</td>
            </tr>
            <tr>
              <th className="text-start">Contact:</th>
              <td>{reader?.phone}</td>
            </tr>
            <tr>
              <th className="text-start">Issue Date:</th>
              <td>{borrow?.borrow_date}</td>
            </tr>
            <tr>
              <th className="text-start">Return Date:</th>
              <td>{borrow?.return_date}</td>
            </tr>
            <tr>
              <th className="text-start">Librarian:</th>
              <td>{staff?.name}</td>
            </tr>
          </tbody>
        </table>

        {/* Borrowed Books Table */}
        <table className="table table-striped table-bordered text-center">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Book Title</th>
              <th>Author</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {borrowDetails.map((detail, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{detail.book.title}</td>
                <td>{detail.book.author}</td>
                <td>{detail.category.name || ""}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Print Button */}
        <div className="text-end mt-3">
          <button onClick={handlePrint} className="btn btn-primary btn-print">
            Print Receipt
          </button>
        </div>

        {/* Footer */}
        <div className="text-center mt-4 text-secondary">
          <p className="mb-0">Thank you for using the library!</p>
          <p>Contact us: mdaslamcric@gmail.com</p>
        </div>
      </div>

      {/* Inline Print Styles */}
      <style>{`
        @media print {
          .btn-print {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default BorrowReceipt;
