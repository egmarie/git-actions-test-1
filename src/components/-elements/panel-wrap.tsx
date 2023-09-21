// React | Three Imports
// import { useFrame } from '@react-three/fiber'
import { useContext, useEffect } from "react";
// import * as THREE from 'three'
// import { Html } from '@react-three/drei'
// extend({ Html, useFrame, THREE })

import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../redux/store'
import { setCurrent } from '../redux/current-slice'
import { setPrevious } from '../redux/previous-slice'
import { setDirection } from '../redux/direction-slice'
// Context
import { CamContext } from '../-main-x';
import { PageInfo } from './prj-data'
import { Panel } from './panel'

//
//
let i:number = 0;

export function PanelWrapper() {
  const dispatch: AppDispatch = useDispatch()


  const { current } = useSelector((state: RootState) => state.current)
  const { previous } = useSelector((state: RootState)=> state.previous)
  useEffect(() => {
    console.log("CURRENT")
    console.log(current)
    console.log("PREVIOUS")
    console.log(previous)
  }, [current, previous])
// Definitions
      const camera = useContext(CamContext);
      let previous1: { name: string; 
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


// Next Topic
      function Next() {
        if (current !== 'aria') {
          console.log('before')
          console.log(PageInfo[i].scene)
          i++
          console.log('after')
          console.log(PageInfo[i].scene)
          // if it is within the possible index range, set the next scene and the previous scene
            if (camera?.scenes && i < 4) {
              next = PageInfo[i]
              let l = i - 1
              if (l >= 0) {
                previous1 = PageInfo[l]
              }

              console.log("NEXT")
              console.log(next.scene)
              if (l >= 0) {
                console.log(PageInfo[l].scene)
                dispatch(setPrevious(previous1.scene))
              }
              dispatch(setCurrent(next.scene))
              dispatch(setDirection('forward'))
            }
            } else {
              console.log("aria is the current scene")
            }
        }
// Previous Topic
        function Back() {

          console.log(camera?.scenes)
          console.log('before')
          console.log(PageInfo[i].scene)
          if (i > 0) {
            i = i - 1
          } else {
            i = 0
          }
          console.log('after')
          console.log(PageInfo[i].scene)

            if (camera?.scenes && i < 4) {
              next = PageInfo[i]
              let l = i - 1
              if (l >= 0) {
                console.log("Previous 22")
                console.log(PageInfo[l].scene)
                previous1 = PageInfo[l]
              }
              console.log(i + " IIIII")
              console.log("BACK")
              console.log(next)
              if (l >= 0) {
                dispatch(setPrevious(previous1.scene))
              }
              dispatch(setCurrent(next.scene))
              dispatch(setDirection('backward'))

            } else {
              console.log("there is no scene set yet")
            }
        }

  return(
        (current === PageInfo[0].scene) ?
            <Panel text={PageInfo} next={Next} back={Back}  /> :
        (current === PageInfo[1].scene) ?
            <Panel text={PageInfo} next={Next} back={Back}  /> :
        (current === PageInfo[2].scene) ?
            <Panel text={PageInfo} next={Next} back={Back}  /> :
        (current === PageInfo[3].scene) ?
            <Panel text={PageInfo} next={Next} back={Back}  /> :
         null
  )
}



