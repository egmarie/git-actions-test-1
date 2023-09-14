// React | Three Imports
import { createContext, useState } from "react";
import * as THREE from 'three'
import { Canvas, useFrame, useThree, extend  } from '@react-three/fiber'
import { Html, PerspectiveCamera } from '@react-three/drei'
import { Flex, Box } from '@react-three/flex'
extend({ Canvas, Html, useFrame, THREE, PerspectiveCamera, useThree, Flex, Box })

// Scene Imports
import { CamContextType } from './config/@types.context';
// import { Aria, Volcap, VR, Loomo } from './-projects/index'
import { PanelWrapper } from './-elements/index'
import { Lab } from './models/lab-v11'
import Intro1 from './-projects/intro'

// Create Context
export const CamContext = createContext<CamContextType | null>(null);

//
//
export const AppFiber: React.FunctionComponent = () => {

  const [ camPos, setCam ] = useState(new THREE.Vector3(0, 4, 60));
  const [ fullmap, setMap ] = useState(true);
  const [ scenes, setScene ] = useState('');

  return (
  <>
  <div id="Wide" className="d-flex">
        
    <CamContext.Provider value={{camPos, setCam, fullmap, setMap, scenes, setScene}}>
        { window.location.pathname === '/' ? <Intro1 /> : ''}
        {  window.location.pathname !== '/' ? <PanelWrapper /> : ''}
          <Canvas shadows>

              <color attach="background" args={['#E3F2FF']} />
              <Lab />

          </Canvas>

    </CamContext.Provider>
</div>

    </>
  )
}