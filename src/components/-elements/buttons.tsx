// React | Three Imports
import { useFrame, extend } from '@react-three/fiber'
import { useState } from "react";
import { useContext } from "react";
import * as THREE from 'three'
import { Html} from '@react-three/drei'
extend({ Html, useFrame, THREE })

// Context
import { CamContext } from '../-main-x';


//
//
export function Buttons() {
      const camera = useContext(CamContext);
      const [ clicked, setClicked ] = useState(false)   
      let vec = new THREE.Vector3

// Select Full View
        function changePos() {
          camera?.setMap(!camera.fullmap)
          setClicked(true)

        }

// Upon Selection, change camera position
        useFrame(state => {
          if (camera?.fullmap === true && clicked === true) {
            camera.setCam(vec)
            state.camera.position.lerp(vec.set(0, 2, 30), .01)
            camera.setCam(vec.set(4, 2, 30))
            state.camera.updateProjectionMatrix()
          } else if (camera?.fullmap === false && clicked === true) {
            camera.setCam(vec)
            state.camera.position.lerp(vec.set(0, 2, 60), .01)
            camera.setCam(vec.set(0, 4, 60))
            state.camera.updateProjectionMatrix()
          } 
        })
        const fullCont = document.getElementById("full")
        if (fullCont) {
          fullCont.style.top = "100px"
          fullCont.style.left = "400px"
        }


  return (
      <Html zIndexRange={[9000000]}>
            <button type="button" id="full" className="rounded-full" onClick={() => changePos()}>
              <img id="fullmap-icon" alt="Fullscreen button" src="/icon-fullscreen.png" />
            </button>
      </Html>
)
}