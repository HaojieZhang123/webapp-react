import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../components/Header'

import GlobalContext from '../context/globalContext'
import { useContext } from 'react'
import Loader from '../components/Loader'

const DefaultLayout = () => {

  const { isLoading } = useContext(GlobalContext)
  // console.log(isLoading)

  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        {/* all pages details go in here */}
        <Outlet />
      </main>

      {isLoading && <Loader />}
    </>
  )
}

export default DefaultLayout