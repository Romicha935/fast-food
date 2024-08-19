import React, { useState } from 'react'
import Banner from './Banner'
import TopFood from './TopFood'
import Popup from './Popup'

const Home = () => {
  const [order,setOrder] = useState(false)

  const handleOrder = () => {
    setOrder(!order)
  }
  return (
    <div>
    <Banner handleOrder={handleOrder}/>
    <Popup order={order} setOrder={setOrder}></Popup>
    <TopFood handleOrder={handleOrder}/>
    </div>
  )
}

export default Home