import React, { useEffect, useState } from "react";
import axios from "axios";

const ManageStock = () => {
  const [stocks, setStocks] = useState([]);

  const baseurl = "https://devaslam.xyz/Laravel_POS_for_ReactApi/public";

  const fetchStocks = () => {
    axios
      .get(`${baseurl}/api/stock`)
      .then((res) => {
        console.log(res);
        // Assuming the response has an array of stocks in `res.data.stock`
        setStocks(res.data.stock);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchStocks();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Stock of Products</h2>
      <table className="table table-hover text-nowrap">
        <thead>
          <tr>
            <th>Id</th>
            <th>Product Name</th>
            <th>Qty</th>
          </tr>
        </thead>
        <tbody>
          {stocks?.map((stock, i) => (
            <tr key={i}>
              <td>{stock.id}</td>
              <td>{stock.name}</td> {/* Make sure the product has a name property */}
              <td>{stock.qty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageStock;
