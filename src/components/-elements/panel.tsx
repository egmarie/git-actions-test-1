// React | Three Imports
import { useFrame, extend } from '@react-three/fiber'
// import { useState} from "react";
import { Link } from 'react-router-dom'
import * as THREE from 'three'
import { Html} from '@react-three/drei'
extend({ Html, useFrame, THREE })
import { useSelector } from 'react-redux'
import type { RootState } from '../redux/store'
import { useEffect } from 'react'

//
//
interface PanelProps {
  next: () => any;
  back: () => any;
}


export function Panel({ next, back }: PanelProps) { 
  
  const { name, link, description, sceneA } = useSelector((state: RootState) => state.current)
  const Next = next
  const Back = back
  console.log("Panel CURRENT")
  console.log(sceneA)
  return (
    <div id="panelContainer" className='d-flex align-items-center'>
        <div id="panel" className="rounded">
          <div className="d-flex flex-column justify-content-center align-items-start mb-3">
            <h5 id="heading" className="m-0">{name}</h5>
            <p className='m-0'>{description}</p>
          </div>
          <div className="d-flex justify-content-between justify-content-sm-between justify-content-md-between justify-content-lg-around justify-content-xl-around align-items-center mb-1 mb-sm-1 mb-md-1 mb-lg-3 mb-xl-3 mb-xxl-3">
                    { sceneA === 'Loomo' ? '' : <a type="button" href="#" id="back" className="rounded-pill pnl-btns py-1 px-3 me-sm-auto me-md-auto me-lg-auto me-xl-auto me-xxl-auto" onClick={() => Back()}> 
                           <p className="m-0">back</p>
                        </a>}

                        <a type="button" href={link} id="learnMore" className="pnl-btns d-flex justify-content-center rounded-pill px-3 py-1 m-1">
                            <p className="m-0">learn more</p>
                        </a>
                        { sceneA === 'Aria' ? 
                        <Link to='/' id="next" className="rounded-pill pnl-btns px-3 py-1 m-1"> 
                        <p className="m-0">home</p>
                      </Link>
                        : 
                        <a type="button" href="#" id="next" className="rounded-pill pnl-btns px-3 py-1 m-1" onClick={() => Next()}> 
                        <p className="m-0">next</p> 
                     </a>
                        }
          </div>
        </div>

    </div> 

)
}