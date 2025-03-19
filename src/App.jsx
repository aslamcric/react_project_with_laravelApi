import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import IndexPages from './components/IndexPages'
import Login from './login/Login'
import Page from './components/Page'
import Book from './pages/book/Book'
import CreateBook from './pages/book/CreateBook'
import UpdateBook from './pages/book/UpdateBook'
import CreateBorrow from './pages/borrow/CreateBorrow'
import AllBorrow from './pages/borrow/AllBorrow'
import BorrowReceipt from './pages/borrow/BorrowReceipt'
import Reader from './pages/reader/Reader'
import CreateReader from './pages/reader/CreateReader'
import UpdateReader from './pages/reader/UpdateReader'
import ManageBookReturn from './pages/return/ManageBookReturn'
import ManageOrders from './pages/order'
import OrderInvoice from './pages/order/create'



const App = () => {
  return (
    <>

      <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login />} />
          <Route element={<Page />}>
            <Route index element={< IndexPages />} />
            <Route path='/book' element={<Book />} />
            <Route path='/create' element={<CreateBook />} />
            <Route path='/update/:id' element={<UpdateBook />} />
            <Route path='/borrow' element={<CreateBorrow />} />
            <Route path='/allborrow' element={<AllBorrow />} />
            <Route path='/borrowReceipt' element={<BorrowReceipt />} />
            {/* <Route path='/borrowReceipt/:id' element={<BorrowReceipt />} /> */}
            <Route path='/reader' element={<Reader />} />
            <Route path='/createReader' element={<CreateReader />} />
            <Route path='/updateReader/:id' element={<UpdateReader />} />
            <Route path='/return' element={<ManageBookReturn />} />


            <Route path='/order' element={<ManageOrders />} />
            <Route path='/createOrder' element={<OrderInvoice />} />

            

          </Route>
        </Routes>
      </BrowserRouter>




    </>
  )
}

export default App