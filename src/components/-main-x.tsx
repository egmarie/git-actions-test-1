// React | Three Imports
import { createContext, useState } from "react";
import * as THREE from 'three'
import { Canvas, useFrame, useThree, extend  } from '@react-three/fiber'
import { Html, PerspectiveCamera } from '@react-three/drei'
extend({ Canvas, Html, useFrame, THREE, PerspectiveCamera, useThree })

// Scene Imports
import { CamContextType } from './config/@types.context';
import { Aria } from './-projects/aria'
import { Volcap } from './-projects/volcap'
import { VR } from './-projects/vr'
//import LabModel from './models/lab-model'
import ToonLabModel from './models/cartoon-model'
import Camera from './-elements/camera'
import Buttons from './-elements/buttons'

// Styles
import '../styles/App.css'
import '../styles/index.css'

// Create Context
export const CamContext = createContext<CamContextType | null>(null);

//
//
export function AppFiber() {

  const [ camPos, setCam ] = useState(new THREE.Vector3(0, 0, 10));
  const [ fullmap, setMap ] = useState(true);
  const [ scenes, setScene ] = useState('');

  return (
    <>
    
    <CamContext.Provider value={{camPos, setCam, fullmap, setMap, scenes, setScene}}>
        <div id="canvas-container">
              <Canvas shadows>

                    <Buttons />
                    <Camera />
                    <color attach="background" args={['#ffffff']} />

                    <ambientLight intensity={0.9} color={0xffffff} />
                    <directionalLight color={0xFCFC4D} position={[0, 2, 5]} />
                    {/* <directionalLight color="white" position={[3, 3, 5]} /> */}

                    {/* <LabModel /> */}
                    <ToonLabModel />
                    <Aria />
                    <Volcap  />
                    <VR  />

              </Canvas>
          </div>
    </CamContext.Provider>
    </>
  )
}