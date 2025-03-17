import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import api, { photoBaseUrl } from '../../api/api'


const UpdateBook = () => {

  const { id } = useParams()
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

  const FetchBook = () => {
    api.get(`/book/find/${id}`)
      .then((res) => {
        console.log(res.data);
        setBook(res.data.book)
      })
  }
  useEffect(() => {
    FetchBook()
  }, [])


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



  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData();

    formData.append("id", id)
    formData.append("title", book.title)
    formData.append("author", book.author)
    formData.append("publication", book.publication)
    formData.append("category_id", book.category_id)
    formData.append("isbn", book.isbn)
    formData.append("shelf_id", book.shelf_id)
    formData.append("photo", book.photo)

    api.post("/book/update", formData)
      .then(result => {
        console.log(result)
        if (result.status == 200) {
          navigation("/book");
        }
      })
  }







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
            value={book.title}
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
            value={book.author}
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
            value={book.publication}
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
            value={book.category_id}
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
            value={book.isbn}
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
            value={book.shelf_id}
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
          Update Book
        </button>
      </form>
    </div>


  )
}

export default UpdateBook