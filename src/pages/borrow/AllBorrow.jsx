import React, { useEffect, useState } from 'react';
import { data, Link } from 'react-router-dom';
import api from '../../api/api';

const AllBorrow = () => {
  const [borrows, setBorrows] = useState([]);
  

  const fetchBorrowRecords = () => {
    api.get('/borrow/')
      .then((res) => {
        console.log(res);
        setBorrows(res.data.borrows);
      })
  };

  useEffect(() => {
    fetchBorrowRecords();
  }, []);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>All Borrow Books</h2>
        <Link to="/borrow/" className="btn btn-primary ms-auto">
          Create Borrow
        </Link>
      </div>

      <table className="table table-striped table-bordered table-hover container mt-2">
        <thead className="table-primary">
          <tr>
            <th>#</th>
            <th>Reader Name</th>
            <th>Staff</th>
            <th>Borrow Date</th>
            <th>Due Date</th>
            <th>Return Date</th>
            {/* <th>Status</th> */}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {borrows?.map((data, i) => (
            <tr key={i}>
              <td>{data.id}</td>
              <td>{data.reader_id}</td>
              <td>{data.staff_id}</td>
              <td>{data.borrow_date}</td>
              <td>{data.due_date}</td>
              <td>{data.return_date}</td>
              {/* <td>{data.stauts}</td> */}
              <td>
                {/* <Link className='btn btn-primary' to={`/borrowReceipt/${data.id}`} > */}
                <Link className='btn btn-primary' to={`/borrowReceipt`} >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="text-center mt-4 text-secondary">
        <p className="mb-0">Thank you for using the library!</p>
        <p>Contact us: mdaslamcric@gmail.com</p>
      </div>
    </div>
  );
};

export default AllBorrow;
