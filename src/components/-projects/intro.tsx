// React | Three Imports
import { useFrame, extend } from '@react-three/fiber'
import * as THREE from 'three'
import { Html} from '@react-three/drei'
import { useContext } from "react";
import { Link } from 'react-router-dom'


extend({ Html, THREE, useFrame })


// Context
import { CamContext } from '../-main-x';
import { PageInfo } from '../-elements/prj-data'

//
//
export default function Intro1() {
    //const [ clicked, setClicked ] = useState(false) 
    const camera = useContext(CamContext);
    let vec = new THREE.Vector3
    function Begin() {
        // console.log(camera.scenes)
        
        console.log(PageInfo[0])
        camera?.setScene(PageInfo[0].scene)
        //setClicked(true)
        
        console.log(camera?.scenes)
        camera?.setCam(vec)
        camera?.setCam(vec.set(PageInfo[0].position[0], PageInfo[0].position[1], PageInfo[0].position[2]))
    }
  return (

        <div id="introContainer" className="">
            <div id="intro" className="p-3 m-7">
                    <h4>Welcome to Blue Sky Innovations</h4>
                    <div className="p-2">
                        <h6>We specialize in emerging tech that solves problems and imporves customer experiments.</h6>
                    </div>
                    <Link type="button" to="/innovate">
                        <button type="button" onClick={() => Begin()}>Learn more in 3D</button>
                        </Link>
                   
            </div>

        </div>

)
}