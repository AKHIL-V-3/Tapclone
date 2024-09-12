import { useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Homepage from './Pages/Homepage'


const router = createBrowserRouter([

  {
    path: "/",
    element: <Homepage />
  },
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
