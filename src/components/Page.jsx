import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import IndexPages from './IndexPages'
import { Outlet } from 'react-router-dom'

const Page = () => {
  return (
    <>
      <Header />
      <Sidebar />


      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <Outlet />
          </div>
        </div>


        <Footer />
      </div>


    </>
  )
}

export default Page