import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  const baseurl = "http://localhost/Laravel/Laravel_POS/public";

  const fetchCustomers = () => {
    axios.get(`${baseurl}/api/find_customer`)
      .then((res) => {
        console.log(res);

        setCustomers(res.data.customer);
      })
      .catch((error) => {
        console.log(error);

      })
  }

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Manage Customers</h2>
      <Link to="/customers/create" className="btn btn-primary mb-3">
        New Customer
      </Link>

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
          {
            customers?.map((data, i) => {
              return (
                <tr key={i}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>
                    <img
                      src={`${baseurl}/img/${data.photo}`}
                      alt={data.name}
                      width="100"
                    />
                  </td>
                  <td>{data.phone}</td>
                  <td>{data.email}</td>
                  <td>{data.address}</td>


                  <td>
                    <Link to={`/customers/${data.id}`} className="btn btn-primary me-2">
                      View
                    </Link>
                    <Link to={`/customers/edit/${data.id}`} className="btn btn-success me-2">
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(data.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            })
          }

        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;
