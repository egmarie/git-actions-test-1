// React | Three Imports
import { useFrame, extend } from '@react-three/fiber'
import * as THREE from 'three'
import { Link } from 'react-router-dom'
import { Html} from '@react-three/drei'
extend({ Html, useFrame, THREE })

// Context

// Style
// import '../../styles/App.css'
// import '../../styles/index.css'

//
//
export default function Intro1() {

  return (

        <div id="introContainer" className="">
            <div id="intro" className="p-3 m-7">
                    <h4>Welcome to Blue Sky Innovations</h4>
                    <div className="p-2">
                        <h6>We specialize in emerging tech that solves problems and imporves customer experiments.</h6>
                    </div>
                    <Link type="button" to="/innovate">Learn more in 3D</Link>
                   
            </div>

        </div>

)
}