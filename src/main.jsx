import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import  'bootstrap/dist/css/bootstrap.min.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './pages/about.jsx'
import Accessories from './pages/accessories.jsx'
import Contact from './pages/contact.jsx'
import Jewelry from './pages/jewelry.jsx'
import Women from './pages/women.jsx'
import Checkout from './Checkout.jsx'
import Main from './pages/mainPage.jsx'
import { Provider } from 'react-redux'
import { Store } from './store.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/",
        element:<Main/>
      },
      {
        path:"/accesories",
        element:<Accessories/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/jewelry",
        element:<Jewelry/>
      },
      {
        path:"/women",
        element:<Women/>
      },  
      {
        path: "/checkout",
        element: <Checkout />,
    },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
     <RouterProvider router={router}/>
  </Provider>
)
