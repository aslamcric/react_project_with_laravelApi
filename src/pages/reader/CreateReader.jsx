import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";

const CreateReader = () => {
  const navigation = useNavigate();
  const [reader, setReader] = useState({
    name: "",
    photo: "",
    email: "",
    phone: "",
    gender: "",
    address: "",
    date_of_birth: "",
    membership_start: "",
    membership_end: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      setReader((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    } else {
      setReader((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const readerFormData = new FormData();
    readerFormData.append("name", reader.name);
    readerFormData.append("email", reader.email);
    readerFormData.append("phone", reader.phone);
    readerFormData.append("gender", reader.gender);
    readerFormData.append("address", reader.address);
    readerFormData.append("date_of_birth", reader.date_of_birth);
    readerFormData.append("membership_start", reader.membership_start);
    readerFormData.append("membership_end", reader.membership_end);
    readerFormData.append("photo", reader.photo);

    api
      .post("/reader/save", readerFormData)
      .then((res) => {
        console.log(res);
        navigation("/reader");
      })
      .catch((err) => {
        console.log(err);
        alert("Error creating reader. Please try again.");
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Create a New Reader</h2>
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter reader's name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter reader's email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input
            onChange={handleChange}
            type="text"
            name="phone"
            className="form-control"
            placeholder="Enter reader's phone"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">Gender</label>
          <select
            onChange={handleChange}
            name="gender"
            className="form-control"
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input
            onChange={handleChange}
            type="text"
            name="address"
            className="form-control"
            placeholder="Enter reader's address"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date_of_birth" className="form-label">Date of Birth</label>
          <input
            onChange={handleChange}
            type="date"
            name="date_of_birth"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="membership_start" className="form-label">Membership Start</label>
          <input
            onChange={handleChange}
            type="date"
            name="membership_start"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="membership_end" className="form-label">Membership End</label>
          <input
            onChange={handleChange}
            type="date"
            name="membership_end"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="photo" className="form-label">Photo</label>
          <input
            onChange={handleChange}
            type="file"
            name="photo"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Create Reader
        </button>
      </form>
    </div>
  );
};

export default CreateReader;
