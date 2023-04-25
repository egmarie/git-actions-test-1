import { Suspense } from "react";

import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { OrbitControls } from '@react-three/drei'
import { extend } from '@react-three/fiber'
extend({ OrbitControls, useLoader, GLTFLoader, DRACOLoader })



export default function LabModel() {
  const gltf = useLoader(
    GLTFLoader,
    "/lab-model-4-10-23.glb",
    loader => {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath("../../node_modules/three/examples/jsm/libs/draco/");
      loader.setDRACOLoader(dracoLoader);
    }
  );

    return (
      <Suspense fallback={null}>
          <primitive scale={1.2} rotation={[0, 160, 0]} position={[3, -4, -6]} object={gltf.scene} />
          <OrbitControls enableRotate={true} enableZoom={true} />
      </Suspense>
      

    )
  }
