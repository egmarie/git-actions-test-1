//import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import { AppFiber } from './components/-main-x'

import Footer from './components/reusable/footer'
import Nav from './components/reusable/nav'
import './styles/App.css'



    
function App() {
  //const [data, setData] = useState()
  // let location = useLocation();
   
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppFiber />
    }

  ]);

  return (
    <div className="App">

      <Nav />

      <main id="main" className="mt-12 lg:mt-32 px-6 md:px-12">
      <RouterProvider router={router}/>
      </main>
      <Footer />
      
    </div>
  )
}

export default App
