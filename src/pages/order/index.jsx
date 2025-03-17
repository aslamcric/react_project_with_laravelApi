import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
    //   const response = await axios.get('/api/orders'); // Adjust API endpoint as needed
      const response = await axios.get('http://localhost/Laravel/Laravel_POS/public/api/orders'); // Adjust API endpoint as needed
      setOrders(response.data.orders);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleDelete = async (orderId) => {
    if (window.confirm('Are you sure you want to delete this order?')) {
      try {
        await axios.delete(`/api/orders/${orderId}`);
        setOrders(orders.filter(order => order.id !== orderId));
      } catch (error) {
        console.error('Error deleting order:', error);
      }
    }
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Manage Orders</h2>
        <Link to="/createOrder" className="btn btn-primary">New Order</Link>
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
            <th>Vat</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customers?.name || 'N/A'}</td>
              <td>{order.order_total}</td>
              <td>{order.discount}</td>
              <td>{order.paid_amount}</td>
              <td>{order.order_status?.name || 'N/A'}</td>
              <td>{order.order_date}</td>
              <td>{order.delivery_date}</td>
              <td>{order.vat}</td>
              <td>
                <Link className="btn btn-primary me-2" to={`/orders/${order.id}`}>View</Link>
                <Link className="btn btn-success me-2" to={`/orders/edit/${order.id}`}>Edit</Link>
                <button className="btn btn-danger" onClick={() => handleDelete(order.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageOrders;
