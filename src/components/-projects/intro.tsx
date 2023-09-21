// React | Three Imports
import { useFrame, extend } from '@react-three/fiber'
import * as THREE from 'three'
import { Html} from '@react-three/drei'
// import { useContext } from "react";
import { Link } from 'react-router-dom'
import type { AppDispatch } from '../redux/store'
import { useDispatch } from 'react-redux'

extend({ Html, THREE, useFrame })


// Context
// import { CamContext } from '../-main-x';
import { PageInfo } from '../-elements/prj-data'
// Slices
import { setCurrent } from '../redux/current-slice'


//
//
export default function Intro1() { 
    // const camera = useContext(CamContext);
    const dispatch: AppDispatch = useDispatch()
    // const { current } = useSelector((state: RootState) => state.current)
    // const { previous } = useSelector((state: RootState)=> state.previous)

    function Begin() {

        // camera?.setScene(PageInfo[0].scene)
        dispatch(setCurrent(PageInfo[0].scene))

    }
  return (

        <div id="introContainer" className="">
            <div id="intro" className="p-3 m-7">
                <h4>Welcome to Blue Sky Innovations</h4>
                <div className="p-2">
                    <h6>We specialize in emerging tech that solves problems and improves customer experiences.</h6>
                </div>
                <Link type="button" to="/innovate">
                    <button type="button" onClick={() => Begin()}>Learn more in 3D</button>
                </Link>
                   
            </div>

        </div>

)
}