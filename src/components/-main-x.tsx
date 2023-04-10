// React | Three Imports
import { createContext, useState } from "react";
import * as THREE from 'three'
import { Canvas, useFrame, useThree, extend  } from '@react-three/fiber'
import { Html, PerspectiveCamera } from '@react-three/drei'
import { Flex, Box } from '@react-three/flex'
extend({ Canvas, Html, useFrame, THREE, PerspectiveCamera, useThree, Flex, Box })

// Scene Imports
import { CamContextType } from './config/@types.context';
import { Aria } from './-projects/aria'
import { Volcap } from './-projects/volcap'
import { VR } from './-projects/vr'
import Camera from './-elements/camera'
import Buttons from './-elements/buttons'
import InfoPanel from './-elements/infoPanel'
import Intro1 from './-projects/intro'



// Create Context
export const CamContext = createContext<CamContextType | null>(null);

//
//
export function AppFiber() {

  const [ camPos, setCam ] = useState(new THREE.Vector3(0, 0, 40));
  const [ fullmap, setMap ] = useState(true);
  const [ scenes, setScene ] = useState('');

  return (
    <>
<div id="Wide" className="d-flex flex-row">
        { window.location.pathname === '/' ? <Intro1 /> : ''}
        <CamContext.Provider value={{camPos, setCam, fullmap, setMap, scenes, setScene}}>
              
              <Canvas shadows >
                     <InfoPanel />
                    <Buttons />
                    <Camera />
                    <color attach="background" args={['#ffffff']} />


                    <ambientLight intensity={0.9} color={0xffffff} />
                    <directionalLight color={0xFCFC4D} position={[0, 2, 5]} />

                    {/* <LabModel /> */}
                    {/* <ToonLabModel /> */}
                    
                    <Aria />
                    <Volcap  />
                    <VR  />
                </Canvas>

        </CamContext.Provider>
</div>

    </>
  )
}