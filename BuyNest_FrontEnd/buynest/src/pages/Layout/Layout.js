import React from 'react'
import Navbar from '../../Components/NavBar/Navbar'
import Categories from '../../Components/categories/Categories'
import Footer from '../../Components/Footer/Footer'

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Categories />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
