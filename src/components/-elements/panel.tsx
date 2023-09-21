// React | Three Imports
import { useFrame, extend } from '@react-three/fiber'
// import { useState} from "react";
import * as THREE from 'three'
import { Html} from '@react-three/drei'
extend({ Html, useFrame, THREE })
import { useSelector } from 'react-redux'
import type { RootState } from '../redux/store'
import { useEffect } from 'react'

//
//
interface PanelProps {
  text: { name: string; 
    link: string; 
    description: string; 
    scene: string;
    panelPos: number[];
    position: number[];} [];
  next: () => any;
  back: () => any;
}
interface text {
    name: string; 
    link: string; 
    description: string; 
    scene: string;
    panelPos: number[];
    position: number[];
}


export function Panel({text, next, back }: PanelProps) { 
  const { current } = useSelector((state: RootState) => state.current)
  const Next = next
  const Back = back
  let x : text | undefined 

  useEffect(() => {
    console.log("CURRENT")
    console.log(current)
    console.log("TEXT")
    console.log(x?.description)
    console.log(text)
    console.log("X")
    console.log(text.find((x) => x.scene === current))
    x = text.find((x) => x.scene === current)
  }, [current])


  return (
    <div id="panelContainer" className='d-flex align-items-center'>
        <div id="panel" className="rounded">
          <div className="d-flex flex-column justify-content-center align-items-start mb-3">
            <h5 id="heading" className="m-0">{x?.name}</h5>
            <p className='m-0'>{x?.description}</p>
          </div>
          <div className="d-flex justify-content-between justify-content-sm-between justify-content-md-between justify-content-lg-around justify-content-xl-around align-items-center mb-1 mb-sm-1 mb-md-1 mb-lg-3 mb-xl-3 mb-xxl-3">
                  <a type="button" href="#" id="back" className="rounded-pill pnl-btns py-1 px-3 me-sm-auto me-md-auto me-lg-auto me-xl-auto me-xxl-auto" onClick={() => Back()}> 
                          { current === 'loomo' ? '' : <p className="m-0">back</p>}
                        </a>
                        <a type="button" href={x?.link} id="learnMore" className="pnl-btns d-flex justify-content-center rounded-pill px-3 py-1 m-1">
                            <p className="m-0">learn more</p>
                        </a>
                        <a type="button" href="#" id="next" className="rounded-pill pnl-btns px-3 py-1 m-1" onClick={() => Next()}> 
                        { current === 'aria' ? <p className="m-0">return home</p> : <p className="m-0">next</p> }
                        </a>
          </div>
        </div>

    </div> 

)
}