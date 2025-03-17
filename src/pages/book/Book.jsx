import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api, { photoBaseUrl } from '../../api/api'


const Book = () => {
  const [books, setBooks] = useState([])
  const token = localStorage.getItem("token");
  const FetchBooks = () => {
    
    api.get("/book/")
    .then((res) => {
      console.log(res);
      setBooks(res.data.books)

    })
  }
  
  useEffect(() => {
    FetchBooks()
    
    
  }, [])


  // delete function 
  const handleDelete = (id) => {
    const confirmation = confirm('Are you sure you want to delete this book?');
    if (!confirmation) return;

    api.get("/book/delete/" + id)
      .then(res => {
        console.log(res);
        FetchBooks()
      })

      .catch(err => {
        console.log(err)
      })
  }


  return (
    <>
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>Books List</h2>
          <a href="/create" className="btn btn-primary ms-auto">
            Create Book
          </a>
        </div>

        <table className="table table-striped table-bordered table-hover container mt-2">
          <thead className="table-primary">
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Photo</th>
              <th>Author</th>
              <th>Publication</th>
              <th>Category</th>
              <th>ISBN</th>
              <th>Shelf</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {books?.map((data, i) => (
              <tr key={i}>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>
                  <img src={photoBaseUrl + `${data.photo}`}
                    att={data.name || "Book Photo"}
                    onError={(e) => e.target.src = photoBaseUrl + "sonar-bangla.png"}
                    height={100} />

                </td>
                <td>{data.author}</td>
                <td>{data.publication}</td>
                <td>{data.category_id}</td>
                <td>{data.isbn}</td>
                <td>{data.shelf_id}</td>


                <td >
                  <Link className='btn btn-primary' to={`/update/${data.id}`} >Edit</Link>
                  <Link to={`Show/${data.id}`} className="btn btn-secondary" >View</Link>
                  <Link onClick={() => handleDelete(data.id)} className="btn btn-danger">Delete</Link>

                </td>


              </tr>
            ))}
          </tbody>
        </table>


      </div>
    </>
  )
}

export default Book