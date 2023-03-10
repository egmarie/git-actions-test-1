import '../../styles/App.css'

import { Suspense } from "react";

import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { OrbitControls } from '@react-three/drei'
import { extend } from '@react-three/fiber'
extend({ OrbitControls, useLoader, GLTFLoader, DRACOLoader })



export default function ToonLabModel() {
  const gltf = useLoader(
    GLTFLoader,
    "/portfolio-room.glb",
  )
    // loader => {
    //   const dracoLoader = new DRACOLoader();
    //   dracoLoader.setDecoderPath("../../node_modules/three/examples/jsm/libs/draco/");
    //   loader.setDRACOLoader(dracoLoader);
    //}
  //);

    return (
      <Suspense fallback={null}>
          <primitive scale={0.3} rotation={[0, -45.5, 6]} position={[-3, -3.5, -15]} object={gltf.scene} />
          <OrbitControls enableRotate={true} enableZoom={true} />
      </Suspense>
      

    )
  }