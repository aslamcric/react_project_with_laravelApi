import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const OrderInvoice = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productQty, setProductQty] = useState(1);
  const [productDiscount, setProductDiscount] = useState(0);
  const [cart, setCart] = useState([]);
  const [lastOrder, setLastOrder] = useState({});

  // Fetch customers and products data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const customerResponse = await axios.get(
          "https://devaslam.xyz/Laravel_POS_for_ReactApi/public/api/find_customer"
        );
        setCustomers(customerResponse.data.customer);
        setLastOrder(customerResponse.data.order[0]);

        const productResponse = await axios.get(
          "https://devaslam.xyz/Laravel_POS_for_ReactApi/public/api/find_product"
        );
        setProducts(productResponse.data.product);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleCustomerChange = (e) => {
    const customerId = e.target.value;
    const customer = customers.find(
      (customer) => customer.id === parseInt(customerId)
    );
    setSelectedCustomer(customer);
  };

  const handleProductChange = (e) => {
    const productId = e.target.value;
    const product = products.find(
      (product) => product.id === parseInt(productId)
    );
    setSelectedProduct(product);
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      const totalDiscount = parseFloat(productDiscount);
      const subtotal = selectedProduct.price * productQty - totalDiscount;

      setCart((prevCart) => [
        ...prevCart,
        {
          ...selectedProduct,
          qty: productQty,
          discount: productDiscount,
          subtotal,
        },
      ]);

      setProductQty(1);
      setProductDiscount(0);
      setSelectedProduct(null);
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.subtotal, 0);
  };

  const getTax = () => {
    return getTotal() * 0.05; // 5% tax
  };

  const getGrandTotal = () => {
    return getTotal() + getTax();
  };

  const handleProcessOrder = async () => {
    if (!selectedCustomer) {
      alert("Please select a customer.");
      return;
    }
    if (cart.length === 0) {
      alert("Cart is empty. Please add products to the cart.");
      return;
    }

    try {
      const orderData = {
        customer_id: selectedCustomer.id,
        items: cart.map((item) => ({
          product_id: item.id,
          quantity: item.qty,
          price: item.price,
          discount: item.discount,
          subtotal: item.subtotal,
        })),
        total: getGrandTotal(),
        tax: getTax(),
        discount: cart.reduce((acc, item) => acc + parseFloat(item.discount), 0),
      };

      const response = await axios.post(
        "https://devaslam.xyz/Laravel_POS_for_ReactApi/public/api/orders/store_react",
        orderData
      );

      console.log("Order processed successfully:", response.data);
      alert("Order processed successfully!");

      // Clear the cart and reset the selected customer
      setCart([]);
      setSelectedCustomer(null);

      // Redirect to /order after successful order processing
      navigate("/order");
    } catch (error) {
      console.error("Error processing order:", error);
      alert("Failed to process order. Please try again.");
    }
  };

  return (
    <div className="container py-4">
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="invoice-address">
            <h5 className="fw-bold mb-2 text-primary">Order Invoice From:</h5>
            <ul className="list-unstyled">
              <li><strong>Company Name:</strong> Laravel POS</li>
              <li><strong>Address:</strong> Dhaka, Bangladesh</li>
              <li><strong>Phone:</strong> 01793 956 777</li>
              <li><strong>Email:</strong> mdaslamcric@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="col-md-6">
          <div className="invoice-address">
            <h5 className="fw-bold mb-2 text-primary">Invoice To:</h5>
            <p>Invoice No: INV-{lastOrder.id + 1}</p>
            <select className="form-select mb-3" onChange={handleCustomerChange}>
              <option value="">Select Customer</option>
              {customers.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.name}
                </option>
              ))}
            </select>
            {selectedCustomer && (
              <ul className="list-unstyled">
                <li><strong>Address:</strong> {selectedCustomer.address}</li>
                <li><strong>Email:</strong> {selectedCustomer.email}</li>
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-light text-white bg-primary">
            <tr>
              <th>Product</th>
              <th>Description</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Discount</th>
              <th>Subtotal</th>
              <th><button className="btn btn-danger btn-sm" onClick={handleClearCart}>Clear All</button></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <select className="form-select" onChange={handleProductChange}>
                  <option value="">Select Product</option>
                  {products.map((product) => (
                    <option key={product.id} value={product.id}>
                      {product.name}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <textarea className="form-control" value={selectedProduct ? selectedProduct.description : ''} readOnly />
              </td>
              <td>
                <input type="text" className="form-control" value={selectedProduct ? selectedProduct.price : ''} readOnly />
              </td>
              <td>
                <input type="number" className="form-control" value={productQty} onChange={(e) => setProductQty(e.target.value)} />
              </td>
              <td>
                <input type="text" className="form-control" value={productDiscount} onChange={(e) => setProductDiscount(e.target.value)} />
              </td>
              <td>
                <input type="text" className="form-control" value={(selectedProduct ? selectedProduct.price * productQty - productDiscount : 0).toFixed(2)} readOnly />
              </td>
              <td><button className="btn btn-success" onClick={handleAddToCart}>Add</button></td>
            </tr>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>${item.price}</td>
                <td>{item.qty}</td>
                <td>${item.discount}</td>
                <td>${item.subtotal}</td>
                <td><button className="btn btn-danger btn-sm" onClick={() => handleRemoveFromCart(item.id)}>Remove</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="d-flex justify-content-end">
        <button className="btn btn-success btn-lg" onClick={handleProcessOrder}>Process</button>
      </div>
    </div>
  );
};

export default OrderInvoice;
