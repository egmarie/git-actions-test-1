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
import '../../styles/App.css'
import '../../styles/index.css'

//
//
export default function Buttons() {


      const camera = useContext(CamContext);
      const [ clicked, setClicked ] = useState(false)   
      let vec = new THREE.Vector3

// Select Full View
        function changePos() {
          camera.setMap(true)
          setClicked(true)
        }

// Upon Selection, change camera position
        useFrame(state => {
          if (camera.fullmap === true && clicked === true) {
            camera.setCam(vec)
            state.camera.position.lerp(vec.set(0, 0, 10), .01)
            state.camera.updateProjectionMatrix()
          }
        })

  return (
      <Html>
        <div className="btnContainer">
            <button type="button" id="full" className="rounded-full" onClick={() => changePos()}>
              <img id="fullmap-icon" alt="Fullscreen button" src="/icon-fullscreen.png" />
            </button>
            {/* <button type="button" id="vr" className="m-2 p-2">VR</button>
            <button type="button" id="vc" className="m-2 p-2">Volumetric Capture</button>
            <button type="button" id="aria" className="m-2 p-2">ARIA</button> */}
          </div>
      </Html>
)
}