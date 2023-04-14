// React | Three Imports
import { useFrame, extend } from '@react-three/fiber'
import { useState } from "react";
import { useContext } from "react";
import * as THREE from 'three'
import { Html} from '@react-three/drei'
extend({ Html, useFrame, THREE })

// Context
import { CamContext } from '../-main-x';

// Style
// import '../../styles/App.css'
// import '../../styles/index.css'

//
//
export function Buttons() {


      const camera = useContext(CamContext);
      const [ clicked, setClicked ] = useState(false)   
      let vec = new THREE.Vector3

// Select Full View
        function changePos() {
          camera?.setMap(true)
          setClicked(true)
        }

// Upon Selection, change camera position
        useFrame(state => {
          if (camera?.fullmap === true && clicked === true) {
            camera.setCam(vec)
            state.camera.position.lerp(vec.set(0, 0, 15), .01)
            state.camera.updateProjectionMatrix()
          }
        })

  return (
      <Html zIndexRange={5000000}>
        <div id="btnContainer">
            <button type="button" id="full" className="rounded-full" onClick={() => changePos()}>
              <img id="fullmap-icon" alt="Fullscreen button" src="/icon-fullscreen.png" />
            </button>
          </div>
      </Html>
)
}