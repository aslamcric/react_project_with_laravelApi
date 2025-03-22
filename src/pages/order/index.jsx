import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5; 

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(
        "http://localhost/Laravel/Laravel_POS/public/api/orders"
      );
      setOrders(response.data.orders);
      console.log(response.data.orders);
      
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const handleDelete = async (orderId) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      try {
        await axios.delete(`/api/orders/${orderId}`);
        setOrders(orders.filter((order) => order.id !== orderId));
      } catch (error) {
        console.error("Error deleting order:", error);
      }
    }
  };

  // Pagination Logic
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  const totalPages = Math.ceil(orders.length / ordersPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Manage Orders</h2>
        <Link to="/createOrder" className="btn btn-primary">
          New Order
        </Link>
      </div>

      <table className="table table-hover text-nowrap">
        <thead>
          <tr>
            <th>Id</th>
            <th>Customer Name</th>
            <th>Order Total</th>
            <th>Discount</th>
            <th>Paid Amount</th>
            <th>Status</th>
            <th>Order Date</th>
            <th>Delivery Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentOrders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customers.name}</td>
              <td>{order.order_total}</td>
              <td>{order.discount}</td>
              <td>{order.paid_amount}</td>
              <td>{order.orter_status.name || "N/A"}</td>
              <td>{order.order_date}</td>
              <td>{order.delivery_date}</td>
              <td>
                <Link className="btn btn-primary me-2" to={`/orders/${order.id}`}>
                  View
                </Link>
                <Link className="btn btn-success me-2" to={`/orders/edit/${order.id}`}>
                  Edit
                </Link>
                <button className="btn btn-danger" onClick={() => handleDelete(order.id)}>
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

export default ManageOrders;
