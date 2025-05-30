// hooks, package and other necessary tools
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// layout
import DefaultLayout from './layouts/DefaultLayout'

// pages to fit into layout's outlet
import Homepage from './pages/Homepage'
import MovieDetail from './pages/MovieDetail'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />} >
            <Route path="/" element={<Homepage />} />
            <Route path="/movies/:id" element={<MovieDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
