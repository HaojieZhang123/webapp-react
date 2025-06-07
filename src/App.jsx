// hooks, package and other necessary tools
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// context
import GlobalContext from './context/globalContext'

// layout
import DefaultLayout from './layouts/DefaultLayout'

// pages to fit into layout's outlet
import Homepage from './pages/Homepage'
import MovieDetail from './pages/MovieDetail'

function App() {

  const [isLoading, setIsLoading] = useState(false)

  return (
    <>
      <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />} >
              <Route path="/" element={<Homepage />} />
              <Route path="/movies/:id" element={<MovieDetail />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  )
}

export default App
