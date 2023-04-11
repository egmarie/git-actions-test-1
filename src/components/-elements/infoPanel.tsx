// React | Three Imports
import { useFrame, extend } from '@react-three/fiber'
import { useState } from "react";
import { useContext } from "react";
import * as THREE from 'three'
import { Html} from '@react-three/drei'
extend({ Html, useFrame, THREE })

import {
  Collapse,
  initTE,
} from "tw-elements";


// Context
import { CamContext } from '../-main-x';
import { PageInfo } from './prj-data'
// Style
// import '../../styles/App.css'
// import '../../styles/index.css'

//
//
export function InfoPanel() {

      const camera = useContext(CamContext);
      const [ clicked, setClicked ] = useState(false)   
      let vec = new THREE.Vector3
      let main: { name: string; 
        link: string; 
        description: string; 
        scene: string;
        position: number[];} = PageInfo[0]
      let nextNum: { name: string; 
        link: string; 
        description: string; 
        scene: string;
        position: number[];}

        let i:number = 0;

        // Initialization for ES Users

initTE({ Collapse });

// Select Full View
        function ChangePage() {
            camera.setMap(true)
            setClicked(true)
          if (clicked === true) {
            console.log("SCENE ONCLICK")
            PageInfo.map((p) => {
              
              console.log(camera.scenes)
              console.log(i)
              if (p.scene === camera.scenes && i++ < PageInfo.length) {
                    console.log("correct position")
                    nextNum = PageInfo[i++]
                    // console.log(camera.scenes)
                    camera.setScene(nextNum.scene)
                    console.log(camera.scenes)
                    main = p
                    i++
                
              } else if (i >= PageInfo.length) {
                console.log("return to the first position")
                  i = 0
                  camera.setScene(PageInfo[i].scene)
                  console.log("over length " + camera.scenes)
                  
              } else {
                console.log("could not find the next scene")
              }
              
            })
            setClicked(false) 
            console.log(typeof nextNum)
            console.log(nextNum.scene)
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
  <div id="panel"
    className="rounded-t-lg border border-neutral-200">
      <button
        className="flex group relative w-full items-center rounded-t-[15px] border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] bg-transparent"
        type="button"
        data-te-collapse-init
        data-te-target="#collapseGroup"
        aria-expanded="false"
        aria-controls="collapseGroup">
        <h5 id="heading">{main.name}</h5>
        <img id="more" alt="Expand and Read more" src="/arrow-forward.png" />
      </button>
    <div
      id="collapseGroup"
      className="!visible"
      data-te-collapse-item
      data-te-collapse-show
      aria-labelledby="heading"
      data-te-parent="#panelContainer">
      <div className="px-5 py-4">
            <p>{main.description}</p>
            <a type="button" href="#" id="learnMore" className="rounded-full p-3 m-2">
                  <p>learn more</p>
              </a>
            <a type="button" href="#" id="next" className="rounded-full p-3 m-2" onClick={() => ChangePage()}>
                  <p>next</p>
            </a>
      </div>
    </div>
  </div>

</div>
          
      </Html>
)
}