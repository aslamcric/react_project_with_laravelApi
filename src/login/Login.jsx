import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Login = () => {
  const navigate = useNavigate()
  const [login, setlogin] = useState({
    username: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setlogin((prev) => ({
      ...prev,
      [name]: value
    }))
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(login);

    axios.post("http://localhost/Library_Exam/admin/api/auth/login", login)
      .then(res => {
        console.log(res.data.token);
        localStorage.setItem("token", res.data.token);
        navigate('/')

      })
      .catch(err => {
        console.log(err);

      })

  }



  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-6">
          
            <form onSubmit={handleSubmit} className=''>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input onChange={handleChange} type="text" className="form-control" name="username" placeholder="Enter username" />

              </div>
              <div className="form-group mb-2">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input onChange={handleChange} type="text" className="form-control" id="exampleInputPassword1" name='password' placeholder="Password" />
              </div>

              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>



    </>
  )
}

export default Login