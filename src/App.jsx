import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Banner from './Components/Home/Banner'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Home/Footer'
import Popup from './Components/Home/Popup'

const App = () => {
  const [order,setOrder] = useState(false)

  const handleOrder = () => {
    setOrder(!order)
  }
  return (
    <div>
      <Navbar handleOrder={handleOrder} />
  
      <Outlet handleOrder={handleOrder}/>
      <Footer/>
    <Popup order={order} setOrder={setOrder}></Popup>
    </div>
  )
}

export default App