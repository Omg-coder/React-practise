import { useState } from 'react'
import Navbar from './components/Navbar'
import Layouts from './components/Layouts'
import Login from './components/Login'
import Feedback from './components/Feedback'
import About from './components/About'
import Contact from './components/Contact'
import Features from './components/Features'
import Home from './components/Home'
import { createBrowserRouter, parsePath, RouterProvider } from 'react-router-dom'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layouts />, 
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/features',
          element: <Features />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/feedback',
          element: <Feedback />
        }
      ]
    },
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
