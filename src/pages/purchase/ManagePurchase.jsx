import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ManagePurchases = () => {
  const [purchases, setPurchases] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const purchasesPerPage = 5;

  useEffect(() => {
    fetchPurchases();
  }, []);

  const fetchPurchases = async () => {
    try {
      const response = await axios.get(
        "http://localhost/Laravel/Laravel_POS/public/api/purchase"
      );
      // Ensure the correct extraction of the 'purchases' array from the response
      setPurchases(response.data.purchase || []);
      console.log("Fetched purchases:", response.data.purchase); // Debugging line
    } catch (error) {
      console.error("Error fetching purchases:", error);
    }
  };

  const handleDelete = async (purchaseId) => {
    if (window.confirm("Are you sure you want to delete this purchase?")) {
      try {
        const response = await axios.delete(
          `http://localhost/Laravel/Laravel_POS/public/api/purchases/${purchaseId}`
        );
        console.log("Delete response:", response); // Debugging line
        setPurchases(purchases.filter((purchase) => purchase.id !== purchaseId));
      } catch (error) {
        console.error("Error deleting purchase:", error);
      }
    }
  };

  // Pagination Logic
  const indexOfLastPurchase = currentPage * purchasesPerPage;
  const indexOfFirstPurchase = indexOfLastPurchase - purchasesPerPage;
  const currentPurchases = purchases.slice(indexOfFirstPurchase, indexOfLastPurchase);

  const totalPages = Math.ceil(purchases.length / purchasesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Manage Purchases</h2>
        <Link to="/createPurchase" className="btn btn-primary">
          New Purchase
        </Link>
      </div>

      <table className="table table-hover text-nowrap">
        <thead>
          <tr>
            <th>Id</th>
            <th>Supplier</th>
            <th>Payment Status</th>
            <th>Order Total</th>
            <th>Paid Amount</th>
            <th>Discount</th>
            <th>Vat</th>
            <th>Date</th>
            {/* <th>Shipping Address</th> */}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentPurchases.map((purchase) => (
            <tr key={purchase.id}>
              <td>{purchase.id}</td>
              <td>{purchase.supplier.name || "N/A"}</td>
              <td>{purchase.payment_status.name || "N/A"}</td>
              <td>{purchase.order_total}</td>
              <td>{purchase.paid_amount}</td>
              <td>{purchase.discount}</td>
              <td>{purchase.vat}</td>
              <td>{purchase.date}</td>
              {/* <td>{purchase.shipping_address || "N/A"}</td> */}
              <td>
                <Link className="btn btn-primary me-2" to={`/purchases/${purchase.id}`}>
                  View
                </Link>
                <Link className="btn btn-success me-2" to={`/purchases/edit/${purchase.id}`}>
                  Edit
                </Link>
                <button className="btn btn-danger" onClick={() => handleDelete(purchase.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <nav>
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>
              Previous
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
              <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </button>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ManagePurchases;
