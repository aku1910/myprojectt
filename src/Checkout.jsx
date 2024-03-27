import React from 'react'
import "./Checkout.css"
import { useSelector } from 'react-redux';

const Checkout = () => {
  const total= useSelector(state=>state.basket.total)
  return (

<p>Total: {total}</p>
  )
}

export default Checkout