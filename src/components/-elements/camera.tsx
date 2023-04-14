import { useRef, useContext, useEffect } from "react";
import * as THREE from 'three'
import { useFrame, useThree, extend  } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { CamContext } from '../-main-x';
extend({ useFrame, PerspectiveCamera, useThree, THREE })

export function Camera() {
    const camera = useContext(CamContext);
    const camRef = useRef();

let camPos = camera?.camPos
    useEffect(() => {
            camPos
      }, [camera]);
    return <PerspectiveCamera position={useEffect(() => {camPos})} makeDefault name="newCam" ref={camRef} />;
  };
