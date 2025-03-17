import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api, { photoBaseUrl } from "../../api/api";

const Reader = () => {
  const [readers, setReaders] = useState([]);
  const token = localStorage.getItem("token");

  // Fetch readers
  const fetchReaders = () => {
    api
      .get("/reader/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setReaders(res.data.readers);
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to fetch the reader list. Please try again later.");
      });
  };

  // Delete reader
  const handleDelete = (id) => {
    const confirmation = confirm("Are you sure you want to delete this reader?");
    if (!confirmation) return;
    api.get(`/reader/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        setReaders((prevReaders) => prevReaders.filter((reader) => reader.id !== id));
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to delete the reader. Please try again later.");
      });
  };

  useEffect(() => {
    fetchReaders();
  }, []);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Reader List</h2>
        <Link to="/createReader" className="btn btn-primary ms-auto">
          Add Reader
        </Link>
      </div>
      <table className="table table-striped table-bordered table-hover">
        <thead className="table-primary">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Photo</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Date of Birth</th>
            {/* <th>Membership Start</th>
            <th>Membership End</th>
            <th>Created At</th> */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {readers.map((reader) => (
            <tr key={reader.id}>
              <td>{reader.id}</td>
              <td>{reader.name}</td>
              <td>
                <img
                  src={`${photoBaseUrl}${reader.photo}`}
                  alt={reader.name || "Reader Photo"}
                  onError={(e) => (e.target.src = `${photoBaseUrl}default-photo.png`)}
                  height={50}
                  width={50}
                  style={{ objectFit: "cover", borderRadius: "50%" }}
                />
              </td>
              <td>{reader.email || "N/A"}</td>
              <td>{reader.phone || "N/A"}</td>
              <td>{reader.gender || "N/A"}</td>
              <td>{reader.address || "N/A"}</td>
              <td>{reader.date_of_birth || "N/A"}</td>
              {/* <td>{reader.membership_start || "N/A"}</td>
              <td>{reader.membership_end || "N/A"}</td>
              <td>{reader.created_at || "N/A"}</td> */}
              <td>
                <Link to={`/updateReader/${reader.id}`} className="btn btn-primary">
                  Edit
                </Link>
                <Link to={`/show-reader/${reader.id}`} className="btn btn-secondary mx-2">
                  View
                </Link>
                <button
                  onClick={() => handleDelete(reader.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reader;
