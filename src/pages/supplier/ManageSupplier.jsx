import React, { useEffect, useState } from "react";
import axios from "axios";

const ManageSupplier = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const baseurl = "https://devaslam.xyz/Laravel_POS_for_ReactApi/public";

  useEffect(() => {
    fetchSuppliers();
  }, []);

  const fetchSuppliers = () => {
    axios.get(`${baseurl}/api/supplier`)
      .then((res) => {
        setSuppliers(res.data.supplier);
      })
      .catch((error) => {
        console.error("Error fetching suppliers:", error);
      });
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentSuppliers = suppliers.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(suppliers.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-4">
      <h2>Supplier List</h2>
      <a className="btn btn-primary mb-3" href="/supplier/create">Register Supplier</a>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Photo</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentSuppliers.length > 0 ? (
            currentSuppliers.map((supplier) => (
              <tr key={supplier.id}>
                <td>{supplier.id}</td>
                <td>{supplier.name}</td>
                <td>
                  <img
                    src={`${baseurl}/photo/${supplier.photo}`}
                    width="50"
                    height="50"
                    alt={supplier.name}
                  />
                </td>
                <td>{supplier.phone}</td>
                <td>{supplier.email}</td>
                <td>{supplier.address}</td>
                <td>
                  <a className="btn btn-info btn-sm" href={`/supplier/${supplier.id}`}>
                    <i className="fa fa-eye"></i>
                  </a>
                  <a className="btn btn-primary btn-sm mx-2" href={`/supplier/${supplier.id}/edit`}>
                    <i className="fa fa-pencil-alt"></i>
                  </a>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(supplier.id)}
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No data found</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="d-flex justify-content-center mt-3">
        <button className="btn btn-secondary mx-1" onClick={prevPage} disabled={currentPage === 1}>
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`btn mx-1 ${currentPage === i + 1 ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => paginate(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button className="btn btn-secondary mx-1" onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ManageSupplier;
