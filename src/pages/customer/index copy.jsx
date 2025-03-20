import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const baseurl = "http://localhost/Laravel/Laravel_POS/public";

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get(`${baseurl}/api/find_customer`);
      console.log("API Response:", response.data); // Debugging

      // Ensure response is an array before setting the state
      if (Array.isArray(response.data)) {
        setCustomers(response.data);
      } else if (response.data && Array.isArray(response.data.customers)) {
        setCustomers(response.data.customer);
      } else {
        console.error("Unexpected response format:", response.data);
        setError("Invalid API response format");
      }
    } catch (error) {
      console.error("Error fetching customers:", error);
      setError("Failed to fetch customers. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this customer?")) {
      try {
        await axios.delete(`${baseurl}/api/customers/${id}`);
        setCustomers((prevCustomers) =>
          prevCustomers.filter((customer) => customer.id !== id)
        );
      } catch (error) {
        console.error("Error deleting customer:", error);
        alert("Failed to delete customer. Please try again.");
      }
    }
  };

  return (
    <div className="container mt-4">
      <h2>Manage Customers</h2>

      <Link to="/customers/create" className="btn btn-primary mb-3">
        New Customer
      </Link>

      {loading && <p>Loading customers...</p>}
      {error && <p className="text-danger">{error}</p>}

      <table className="table table-hover text-nowrap">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Photo</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(customers) && customers.length > 0 ? (
            customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>
                  <img
                    src={`${baseurl}/img/${customer.photo}`}
                    alt={customer.name}
                    width="100"
                  />
                </td>
                <td>{customer.phone}</td>
                <td>{customer.email}</td>
                <td>{customer.address}</td>
                <td>
                  <Link to={`/customers/${customer.id}`} className="btn btn-primary me-2">
                    View
                  </Link>
                  <Link to={`/customers/edit/${customer.id}`} className="btn btn-success me-2">
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(customer.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">
                No customers found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;
