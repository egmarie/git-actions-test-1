// React | Three Imports
import { useFrame, extend} from '@react-three/fiber'
import { useContext } from "react";
import * as THREE from 'three'
import { Html } from '@react-three/drei'
extend({ Html, useFrame, THREE })


// Context
import { CamContext } from '../-main-x';
import { PageInfo } from './prj-data'
import { Panel } from './panel'

//
//
let i:number = 0;

export function PanelWrapper() {
// Definitions
      const camera = useContext(CamContext);
      let vec = new THREE.Vector3
      let vec2 = new THREE.Vector3

      let page2: { name: string; 
        link: string; 
        description: string; 
        scene: string;
        panelPos: number[];
        position: number[];}[];
      let page: { name: string; 
        link: string; 
        description: string; 
        scene: string;
        panelPos: number[];
        position: number[];} = PageInfo[0]
      let next: { name: string; 
        link: string; 
        description: string; 
        scene: string;
        panelPos: number[];
        position: number[];} = PageInfo[0]

      const panelCont = document.getElementById("panelContainer")
      const windowWidth = window.document.body.clientWidth
      const windowHeight = window.document.body.clientHeight


// Next Topic
        function Next() {
          console.log(camera?.scenes)

            i++
            if (camera?.scenes && i < 4) {

              next = PageInfo[i]
              console.log(i + " IIIII")
              camera?.setScene(next.scene)
              camera?.setCam(vec2.set(next.position[0], next.position[1], next.position[2]))

            } else {
              console.log("there is no scene set yet")
            }
            console.log(camera?.scenes)
        }
// Previous Topic
        function Back() {
          console.log(camera?.scenes)

            i--
            if (camera?.scenes && i < 4) {

              next = PageInfo[i]
              console.log(i + " IIIII")
              camera?.setScene(next.scene)
              camera?.setCam(vec2.set(next.position[0], next.position[1], next.position[2]))

            } else {
              console.log("there is no scene set yet")
            }
            console.log(camera?.scenes)
        }
// Upon Selection, change camera position
        useFrame(state => {
            page2 = PageInfo.filter((item) => item.scene === camera?.scenes)
            page = page2[0]
            if (page.scene === "Volcap") {
              state.camera.lookAt(vec.set(page.position[0], page.position[1] + 0.5, page.position[2]))
            } else {
              state.camera.lookAt(vec.set(page.position[0], page.position[1] - 1, page.position[2]))
            }

            state.camera.position.lerp(vec.set(page.position[0], page.position[1], page.position[2] + 5), .01)
            camera?.setCam(vec.set( page.position[0], page.position[1], page.position[2] + 5 ))
            window.addEventListener("resize", () => {
              window.onresize = () => { 
                if (panelCont) {  
                  if (windowWidth >= 600) { 
                    panelCont.style.left = (windowWidth / 5) + 'px'
                    panelCont.style.bottom = (windowHeight / 5) + 'px'
                  } else {
                    panelCont.style.bottom = (windowHeight / 1.5) + "px"
                    panelCont.style.left = (windowWidth / 2) + "px"
                  }
                }
              }})
            state.camera.updateProjectionMatrix()
        null
      })


  return(
    <Html zIndexRange={[6000000]}>
      {
        (camera?.scenes === PageInfo[0].scene) ?
            <Panel text={PageInfo[0]} next={Next} back={Back}  /> :
        (camera?.scenes === PageInfo[1].scene) ?
            <Panel text={PageInfo[1]} next={Next} back={Back}  /> :
        (camera?.scenes === PageInfo[2].scene) ?
            <Panel text={PageInfo[2]} next={Next} back={Back}  /> :
        (camera?.scenes === PageInfo[3].scene) ?
            <Panel text={PageInfo[3]} next={Next} back={Back}  /> :
         null
        }
      </Html>
  )
}



