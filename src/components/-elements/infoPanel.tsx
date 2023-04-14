// React | Three Imports
import { useFrame, extend } from '@react-three/fiber'
import { useContext, useState} from "react";
import * as THREE from 'three'
import { Html} from '@react-three/drei'
extend({ Html, useFrame, THREE })

import PropTypes from 'prop-types'

import {
  Collapse,
  initTE,
} from "tw-elements";


// Context
import { CamContext } from '../-main-x';
import { PageInfo } from './prj-data'

//
let i:number = 0;
//
export function InfoPanel() {

      const camera = useContext(CamContext);
      let vec = new THREE.Vector3
      let vec2 = new THREE.Vector3
      // let mainB: { name: string; 
      //     link: string; 
      //     description: string; 
      //     scene: string;
      //     position: number[];}[]
      let next: { name: string; 
        link: string; 
        description: string; 
        scene: string;
        position: number[];} = PageInfo[0]

        

        // Initialization for ES Users

        initTE({ Collapse });
        //&& i < PageInfo.length

// Select Full View
        function ChangePage() {
          console.log(camera?.scenes)

            i++
            if (camera?.scenes) {
              console.log("SCENE ONCLICK")
              console.log("G " + i)
              
              console.log("H " + i)
              next = PageInfo[i]
              // console.log("NEXT  " + next.scene)
              camera?.setScene(next.scene)
              
              camera?.setCam(vec2.set(next.position[0], next.position[1], next.position[2]))
              // console.log(camera.scenes)
              console.log("I " + i)
            } else {
              //camera?.setScene()
              console.log(camera?.scenes)
              console.log("there is no scene set yet")
            }

          console.log("J " + i)
        }

// Upon Selection, change camera position
        useFrame(state => {
          if ( camera?.fullmap === false ) {
            state.camera.lookAt(vec.set(next.position[0], next.position[1], next.position[2]))
            state.camera.position.lerp(vec.set(next.position[0], next.position[1], next.position[2] + 5), .01)
            camera.setCam(vec.set( next.position[0], next.position[1], next.position[2] + 5 ))
            state.camera.updateProjectionMatrix()
          }

        })
        console.log(PageInfo)


  return(
    <Html zIndexRange={6000000}>
      {
        (camera?.scenes === "Aria") ?
            <Panel text={PageInfo[0]} changePage={ChangePage} /> :
        (camera?.scenes === "Volcap") ?
            <Panel text={PageInfo[1]} changePage={ChangePage} /> :
        (camera?.scenes === "VR") ?
            <Panel text={PageInfo[2]} changePage={ChangePage} /> :
        null
        }
      </Html>
  )



}
interface PanelProps {
  text: { name: string; 
    link: string; 
    description: string; 
    scene: string;
    position: number[];};
  changePage: () => any;
}

function Panel({text, changePage}: PanelProps) { 
  let ChangePage = changePage
  const main = text
  const [active, setActive] = useState(true)
  function Collapse() {
      setActive(!active)
  }
  return (

<div id="panelContainer">
<div id="panel"
  className="rounded-t-lg">
    <h5 id="heading">
    <button
      className="bg-transparent border-none active flex justify-between"
      type="button"
      aria-expanded="true"
      aria-controls="collapseGroup"
      onClick={() => Collapse()}>
      {main.name}
      <img id="more" alt="Expand and Read more" src="/arrow-forward.png" />
    </button>
    </h5>
  <div
    id="collapseGroup"
    className=""
    aria-labelledby="heading">
      <div className="px-4 py-3">
            <p className={`${active ? "active" : "inactive" }`}>{main.description}</p>

            <a type="button" href={main.link} id="learnMore" className="rounded-full p-3 m-2">
                  <p className="m-0">learn more</p>
            </a>
            <a type="button" href="#" id="next" className="rounded-full p-3 m-2" onClick={() => ChangePage()}> 
                  <p className="m-0">next</p>
            </a>
      </div>
  </div>
</div>

</div>
)
}

Panel.propTypes = {  
  text: PropTypes.shape({
    name: PropTypes.string, 
      link: PropTypes.string,  
      description: PropTypes.string, 
      scene: PropTypes.string, 
      position: PropTypes.arrayOf(PropTypes.number)
  }),
}
