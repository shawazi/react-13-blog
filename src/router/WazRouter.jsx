import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Main from '../pages/Main'

const WazRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' Component={Main} />
        </Routes>
    </Router>
  )
}

export default WazRouter