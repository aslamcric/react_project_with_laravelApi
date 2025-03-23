import React, { useState } from 'react';

const CreateCustomer = () => {
  const baseurl = "https://devaslam.xyz/Laravel_POS_for_ReactApi/public";
  const [formData, setFormData] = useState({
    name: '',
    photo: null,
    phone: '',
    email: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('address', formData.address);
    formDataToSend.append('photo', formData.photo);

    try {
      const response = await fetch(`${baseurl}/api/find_customer`, {
        method: 'POST',
        body: formDataToSend
      });
      if (response.ok) {
        // Handle successful form submission
        alert("Customer created successfully!");
      } else {
        // Handle error
        alert("Error creating customer.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error processing your request.");
    }
  };

  return (
    <div>
      <a className='btn btn-success' href="/customer">Manage</a>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="row mb-3">
          <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="photo" className="col-sm-2 col-form-label">Photo</label>
          <div className="col-sm-10">
            <input
              type="file"
              className="form-control"
              name="photo"
              id="photo"
              onChange={handleFileChange}
              placeholder="Photo"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="phone" className="col-sm-2 col-form-label">Phone</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="address" className="col-sm-2 col-form-label">Address</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              name="address"
              id="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    </div>
  );
};

export default CreateCustomer;
