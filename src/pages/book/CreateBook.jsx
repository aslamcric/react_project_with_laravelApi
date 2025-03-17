// import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api, { photoBaseUrl } from '../../api/api'

const CreateBook = () => {
    const navigation = useNavigate();
    const [book, setBook] = useState({
        title: "",
        author: "",
        publication: "",
        category_id: "",
        isbn: "",
        shelf_id: "",
        photo: ""
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;

        if (type === 'file') {
            setBook((prev) => ({
                ...prev,
                [name]: files[0],
            }));
        } else {
            setBook((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const bookFormData = new FormData();
        bookFormData.append("title", book.title);
        bookFormData.append("author", book.author);
        bookFormData.append("publication", book.publication);
        bookFormData.append("category_id", book.category_id);
        bookFormData.append("isbn", book.isbn);
        bookFormData.append("shelf_id", book.shelf_id);
        bookFormData.append("photo", book.photo);


        api.post("/book/save", bookFormData)
            .then((res) => {
                console.log(res);
                navigation("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Create a New Book</h2>
            <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="title"
                        className="form-control"
                        placeholder="Enter book title"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="author" className="form-label">Author</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="author"
                        className="form-control"
                        placeholder="Enter author name"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="publication" className="form-label">Publication</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="publication"
                        className="form-control"
                        placeholder="Enter publication"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="category_id" className="form-label">Category</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="category_id"
                        className="form-control"
                        placeholder="Enter category ID"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="isbn" className="form-label">ISBN</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="isbn"
                        className="form-control"
                        placeholder="Enter ISBN"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="shelf_id" className="form-label">Shelf</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="shelf_id"
                        className="form-control"
                        placeholder="Enter shelf ID"
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
                    Create Book
                </button>
            </form>
        </div>
    );
};

export default CreateBook;
