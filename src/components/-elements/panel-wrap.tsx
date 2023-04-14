// React | Three Imports
import { useFrame, extend } from '@react-three/fiber'
import { useContext } from "react";
import * as THREE from 'three'
import { Html} from '@react-three/drei'
extend({ Html, useFrame, THREE })


// Context
import { CamContext } from '../-main-x';
import { PageInfo } from './prj-data'
import { Panel } from './panel'

//
//
let i:number = 0;

export function PanelWrapper() {

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
              camera?.setScene(next.scene)
              
              camera?.setCam(vec2.set(next.position[0], next.position[1], next.position[2]))
              console.log(PageInfo)
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
          // if ( camera?.fullmap === false ) {
            if ( camera?.scenes === "Aria" ) {
            state.camera.lookAt(vec.set(PageInfo[0].position[0], PageInfo[0].position[1], PageInfo[0].position[2]))
            state.camera.position.lerp(vec.set(PageInfo[0].position[0], PageInfo[0].position[1], PageInfo[0].position[2] + 5), .01)
            camera.setCam(vec.set( PageInfo[0].position[0], PageInfo[0].position[1], PageInfo[0].position[2] + 5 ))
            state.camera.updateProjectionMatrix()
          } else if ( camera?.scenes === "Volcap" ) {
            state.camera.lookAt(vec.set(PageInfo[1].position[0], PageInfo[1].position[1], PageInfo[1].position[2]))
            state.camera.position.lerp(vec.set(PageInfo[1].position[0], PageInfo[1].position[1], PageInfo[1].position[2] + 5), .01)
            camera.setCam(vec.set( PageInfo[1].position[0], PageInfo[1].position[1], PageInfo[1].position[2] + 5 ))
            state.camera.updateProjectionMatrix()
          } else if ( camera?.scenes === "VR" ) {
            state.camera.lookAt(vec.set(PageInfo[2].position[0], PageInfo[2].position[1], PageInfo[2].position[2]))
            state.camera.position.lerp(vec.set(PageInfo[2].position[0], PageInfo[2].position[1], PageInfo[2].position[2] + 5), .01)
            camera.setCam(vec.set( PageInfo[2].position[0], PageInfo[2].position[1], PageInfo[2].position[2] + 5 ))
            state.camera.updateProjectionMatrix()
          }
        }
        // }
        )


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



