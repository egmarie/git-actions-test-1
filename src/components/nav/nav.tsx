// React Imports
//import { useState } from 'react'

// Styles
// import '../../styles/App.css'

//
//
function Nav() {
  // const [active, setActive] = useState(window.location.href)
  console.log(window.location.href)
  // const base = "http://localhost:5173"
  return (

    <>
      {/* <header className="content-start text-center w-full"> */}
          {/* Replace with Logo */}
          {/* <h1>Blue Sky Innovations</h1>
          <nav className="flex p-6 m-0 w-full gap-0 items-center justify-center">
              {[
                  ['React Fiber', '/'],
              ].map(([title, url]) => (
              <a onChange={() => setActive(window.location.href)} href={url} key={title} id={title} className={`navs m-3 p-3 ${ active === base + url ? "active" : ""}`}>{title}</a>
              ))}

          </nav>
      </header> */}
    </>
  )
}

export default Nav