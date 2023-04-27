// React | Three Imports
import { createContext, useState } from "react";
import * as THREE from 'three'
import { Canvas, useFrame, useThree, extend  } from '@react-three/fiber'
import { Html, PerspectiveCamera } from '@react-three/drei'
import { Flex, Box } from '@react-three/flex'
extend({ Canvas, Html, useFrame, THREE, PerspectiveCamera, useThree, Flex, Box })

// Scene Imports
import { CamContextType } from './config/@types.context';
import { Aria, Volcap, VR, Loomo } from './-projects/index'
import { PanelWrapper, Buttons, Camera } from './-elements/index'
import LabModel from './models/lab-model'
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
<div id="Wide" className="d-flex flex-row">
        
        <CamContext.Provider value={{camPos, setCam, fullmap, setMap, scenes, setScene}}>
        { window.location.pathname === '/' ? <Intro1 /> : ''}
              <Canvas shadows>

                    
                    { window.location.pathname === '/innovate' ? <PanelWrapper /> : ''}
                    {/* <Buttons /> */}
                    <Camera />
                    <color attach="background" args={['#ffffff']} />


                    <ambientLight intensity={0.9} color={0xffffff} />
                    <directionalLight color={0xFCFC4D} position={[0, 2, 5]} />

                    <LabModel />
                    {/* <ToonLabModel /> */}
                    
                    <Aria />
                    <Volcap />
                    <VR />
                    <Loomo />

                </Canvas>

        </CamContext.Provider>
</div>

    </>
  )
}