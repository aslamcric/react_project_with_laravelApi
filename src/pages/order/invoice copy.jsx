import React from "react";

const Invoice = () => {
  const order = {
    id: 12345,
    customers: {
      name: "John Doe",
      address: "123 Main Street, City, Country",
      email: "johndoe@example.com",
    },
  };

  const orderDetails = [
    { id: 1, products: { name: "Product A" }, qty: 2, price: 50, discount: 5 },
    { id: 2, products: { name: "Product B" }, qty: 1, price: 30, discount: 3 },
    { id: 3, products: { name: "Product C" }, qty: 3, price: 20, discount: 2 },
  ];

  const total = orderDetails.reduce(
    (acc, item) => acc + item.price * item.qty - item.discount,
    0
  );
  const totalDiscount = orderDetails.reduce((acc, item) => acc + item.discount, 0);
  const tax = total * 0.05;
  const grandTotal = total + tax - totalDiscount;

  const printInvoice = () => {
    const printButton = document.getElementById("printButton");
    printButton.style.display = "none";
    window.print();
    setTimeout(() => {
      printButton.style.display = "block";
    }, 1000);
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card shadow-sm border-0">
          <div className="card-body p-4">
            <div className="invoice-wrap" id="invoice">
              <div className="row">
                <div className="col-md-6">
                  <div className="invoice-address mb-4">
                    <h6 className="fw-bold mb-2 text-primary">Order Invoice From:</h6>
                    <ul className="list-unstyled">
                      <li>Invoice: NO-100{order.id}</li>
                      <li>Phone: 01793 956 777</li>
                      <li>Email: mdaslamcric@gmail.com</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="invoice-address text-start mb-4">
                    <h6 className="fw-bold mb-2 text-primary">Invoice To:</h6>
                    <ul className="list-unstyled mb-0">
                      <li className="mb-2">Customer Name: {order.customers.name}</li>
                      <li>Address: {order.customers.address}</li>
                      <li>Email: {order.customers.email}</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="table-responsive mt-2">
                <table className="table table-bordered">
                  <thead className="table-light text-white bg-primary">
                    <tr>
                      <th>SL</th>
                      <th>Product</th>
                      <th>Qty</th>
                      <th>Price</th>
                      <th>Discount</th>
                      <th>Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderDetails.map((item, index) => {
                      const subtotal = item.price * item.qty - item.discount;
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{item.products.name}</td>
                          <td>{item.qty}</td>
                          <td>{item.price.toFixed(2)}</td>
                          <td>{item.discount.toFixed(2)}</td>
                          <td>{subtotal.toFixed(2)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="5" className="text-end">Total</td>
                      <td>{total.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td colSpan="5" className="text-end">Tax (5%)</td>
                      <td>{tax.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td colSpan="5" className="text-end">Total Discount</td>
                      <td>{totalDiscount.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td colSpan="5" className="text-end fw-bold">Grand Total</td>
                      <td className="fw-bold">{grandTotal.toFixed(2)}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              <div className="d-flex justify-content-end mt-4">
                <button id="printButton" className="btn btn-success me-2" onClick={printInvoice}>
                  Print
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;