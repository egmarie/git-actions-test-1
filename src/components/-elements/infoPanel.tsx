// React | Three Imports
import { useFrame, extend } from '@react-three/fiber'
import { useState } from "react";
import { useContext } from "react";
import * as THREE from 'three'
import { Html} from '@react-three/drei'
extend({ Html, useFrame, THREE })


// Context
import { CamContext } from '../-main-x';
import { PageInfo } from './prj-page'
// Style
// import '../../styles/App.css'
// import '../../styles/index.css'

//
//
export default function InfoPanel() {

      const camera = useContext(CamContext);
      const [ clicked, setClicked ] = useState(false)   
      let vec = new THREE.Vector3
      let next:number
      let main: { name: string; 
        link: string; 
        description: string; 
        scene: string;
        position: number[];} = PageInfo[0].description
      let nextNum: { name: string; 
        link: string; 
        description: string; 
        scene: string;
        position: number[];}
// Select Full View
        function ChangePage() {
            camera.setMap(true)
            setClicked(true)
          if (clicked === true) {
            PageInfo.map((p) => {
              if (p.scene === camera.scenes && (PageInfo.indexOf(p) + 1) < PageInfo.length) {
 
                    nextNum = PageInfo[PageInfo.indexOf(p) + 1]
                    console.log(camera.scenes)
                    camera.setScene(nextNum.scene)
                    console.log(camera.scenes)
                    console.log("correct position")
                    main = PageInfo.filter(sce => sce.scene === camera.scenes)
                
              } else if (p.scene === camera.scenes && (PageInfo.indexOf(p) + 1) > PageInfo.length) {
                  console.log("return to the first position")
                    next = PageInfo[0]
                    camera.setScene(next.scene)
                    console.log(camera.scenes)
              } else if (p.scene === camera.scenes && (PageInfo.indexOf(p) + 1) < PageInfo.length) {
                    console.log("scenes don't match")
                    console.log(camera.scenes)
              }
            }) 
            console.log(nextNum.position)
          } else {
            console.log("there is no scene set yet")
          }
        }

// Upon Selection, change camera position
        useFrame(state => {
          if ( camera.fullmap === false && clicked === true ) {
            state.camera.lookAt(vec.set(nextNum.position[0], nextNum.position[1], nextNum.position[2]))
            state.camera.position.lerp(vec.set(nextNum.position[0], nextNum.position[1], nextNum.position[2] + 5), .01)
            camera.setCam(vec.set( nextNum.position[0], nextNum.position[1], nextNum.position[2] + 5 ))
            state.camera.updateProjectionMatrix()
          }

        })
        console.log(PageInfo)

  return (
      <Html zIndexRange={6000000}>
        <div id="panelContainer">
            <button type="button" id="panel" className="rounded-full" onClick={() => ChangePage()}>
              <img id="more" alt="Read more" src="/arrow-forward.png" />
              <p>{main.description}</p>
            </button>
          </div>
      </Html>
)
}