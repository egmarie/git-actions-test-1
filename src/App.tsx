//import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { AppFiber } from './components/-main-x'

import Footer from './components/nav/footer'
import Nav from './components/nav/nav'



    
function App() {
   
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppFiber />
    }
  ]);

  return (
    <div className="App">

      <Nav />
      <RouterProvider router={router}/>
      <Footer />
      
    </div>
  )
}

export default App
