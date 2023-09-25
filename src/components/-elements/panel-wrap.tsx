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


export function PanelWrapper() {
  let i:number = 0;
  const dispatch: AppDispatch = useDispatch()


  //const { sceneA } = useSelector((state: RootState) => state.current)

// Definitions
      const camera = useContext(CamContext);
      let previous1: { name: string; 
        link: string; 
        description: string; 
        sceneA: string;} = PageInfo[0]
      let next: { name: string; 
        link: string; 
        description: string; 
        sceneA: string;} = PageInfo[0]


// Next Topic
      function Next() {
          console.log('NEXT before')
          console.log(PageInfo[i].sceneA)
          i++
          console.log('NEXT after')
          console.log(PageInfo[i].sceneA)
          // if it is within the possible index range, set the next scene and the previous scene
          if (PageInfo[i] && i < 4) {
              next = PageInfo[i]
              dispatch(setCurrent(next))
              dispatch(setDirection('forward'))
          } else {

          }
      }
// Previous Topic
      function Back() {
          console.log('BACK before')
          console.log(PageInfo[i].sceneA)
          //i--
          console.log('BACK after')
          console.log(PageInfo[i].sceneA)
          if (i > 0) {
            i--
          }
          if (PageInfo[i] && i < 4 && i >= 0) {
              next = PageInfo[i]
              dispatch(setCurrent(next))
              dispatch(setDirection('backward'))

          } else {
              console.log("there is no scene set yet")
          }
      }

  return(
    <Panel next={Next} back={Back}  /> 
        // (current === PageInfo[0].scene) ?
        //     <Panel next={Next} back={Back}  /> :
        // (current === PageInfo[1].scene) ?
        //     <Panel next={Next} back={Back}  /> :
        // (current === PageInfo[2].scene) ?
        //     <Panel next={Next} back={Back}  /> :
        // (current === PageInfo[3].scene) ?
        //     <Panel next={Next} back={Back}  /> :
        //  null
  )
}



