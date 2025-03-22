import React, { useEffect, useState } from "react";
import axios from "axios";

const ManageProduct = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const baseurl = "http://localhost/Laravel/Laravel_POS/public";

  const fetchProducts = () => {
    axios.get(`${baseurl}/api/product`)
      .then((res) => {
        console.log(res);
        setProducts(res.data.product);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(products.length / itemsPerPage);

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
      <h2>Manage Products</h2>
      <table className="table table-hover text-nowrap">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Photo</th>
            <th>Price</th>
            <th>Offer Price</th>
            <th>Category</th>
            <th>Size</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts?.map((product, i) => (
            <tr key={i}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td><img src={`${baseurl}/img/${product.photo}`} width="100" alt={product.name} /></td>
              <td>{product.price}</td>
              <td>{product.offer_price}</td>
              <td>{product.categories.name || "N/A"}</td>
              <td>{product.size}</td>
              <td>
                <button className='btn btn-primary mx-1'>View</button>
                <button className='btn btn-success mx-1'>Edit</button>
                <button className='btn btn-danger mx-1'>Delete</button>
              </td>
            </tr>
          ))}
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

export default ManageProduct;
