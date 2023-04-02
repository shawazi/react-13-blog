import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Main from '../pages/Main'
import Login from '../pages/Login'
import Register from '../pages/Register'


const WazRouter = () => {
  return (
    <Router basename='/'>
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    </Router>
  )
}

export default WazRouter