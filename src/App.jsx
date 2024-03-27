import './App.css'
import Navi from './Navi'
import './Products.css'
import "./Sidebar.css"
import "./Checkout.css"
import Footer from './Footer'
import "./Footer.css"
import { Outlet } from 'react-router-dom'

import "./Error.css"


function App() {

  return (
    <>
    <Navi/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App


