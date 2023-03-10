import { useRef, useContext, useEffect } from "react";
import * as THREE from 'three'
import { useFrame, useThree, extend  } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { CamContext } from '../-main-x';
extend({ useFrame, PerspectiveCamera, useThree, THREE })

export default function Camera() {
    const camera = useContext(CamContext);
    const camRef = useRef();
    // const vec = new THREE.Vector3(0,0,5)
    // camera.setCam(vec)
let camPos = camera.camPos
    useEffect(() => {
            camPos
            // console.log(camPos)
      }, [camera]);

    
//    useThree((state) => console.log(state.camera.position));

    // useEffect(() => void set({ camRef }), []);

    // useFrame(() => camRef.current.updateMatrixWorld());
    // console.log(camRef)
    
    return <PerspectiveCamera position={useEffect(() => {camPos})} makeDefault name="newCam" ref={camRef} />;
  };
