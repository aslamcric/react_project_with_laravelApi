import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api, { photoBaseUrl } from '../../api/api';

const UpdateReader = () => {
  const { id } = useParams();
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
    created_at: "",
  });

  // Fetch reader details by id
  const fetchReader = () => {
    api.get(`/reader/find/${id}`)
      .then((res) => {
        setReader(res.data.reader);
      })
      .catch((err) => {
        console.log(err);
        // Handle errors (e.g., reader not found)
      });
  };

  useEffect(() => {
    fetchReader();
  }, [id]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === 'file') {
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

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("id", id);
    formData.append("name", reader.name);
    formData.append("email", reader.email);
    formData.append("phone", reader.phone);
    formData.append("gender", reader.gender);
    formData.append("address", reader.address);
    formData.append("date_of_birth", reader.date_of_birth);
    formData.append("membership_start", reader.membership_start);
    formData.append("membership_end", reader.membership_end);
    formData.append("created_at", reader.created_at);
    formData.append("photo", reader.photo);

    api.post("/reader/update", formData)
      .then((result) => {
        console.log(result);
        if (result.status === 200) {
          navigation("/reader");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Error updating reader. Please try again.");
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Update Reader Details</h2>
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            value={reader.name}
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
            value={reader.email}
            className="form-control"
            placeholder="Enter email address"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input
            onChange={handleChange}
            type="text"
            name="phone"
            value={reader.phone}
            className="form-control"
            placeholder="Enter phone number"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="gender" className="form-label">Gender</label>
          <input
            onChange={handleChange}
            type="text"
            name="gender"
            value={reader.gender}
            className="form-control"
            placeholder="Enter gender"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input
            onChange={handleChange}
            type="text"
            name="address"
            value={reader.address}
            className="form-control"
            placeholder="Enter address"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="date_of_birth" className="form-label">Date of Birth</label>
          <input
            onChange={handleChange}
            type="date"
            name="date_of_birth"
            value={reader.date_of_birth}
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
            value={reader.membership_start}
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
            value={reader.membership_end}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="created_at" className="form-label">Created At</label>
          <input
            onChange={handleChange}
            type="text"
            name="created_at"
            value={reader.created_at}
            className="form-control"
            placeholder="Enter created date"
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
          {reader.photo && <img src={`${photoBaseUrl}${reader.photo}`} alt="Reader Photo" className="mt-3" style={{ width: "100px" }} />}
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Update Reader
        </button>
      </form>
    </div>
  );
};

export default UpdateReader;
