import { Suspense } from "react";

import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { OrbitControls } from '@react-three/drei'
import { extend, useThree } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
extend({ OrbitControls, useLoader, GLTFLoader, DRACOLoader, useGLTF, useThree })



export default function LabModel() {
  const { viewport } = useThree()
  const { animations, scene, cameras } = useGLTF('/lab-07-26-v3.glb')
  // const gltf = useLoader(
  //   GLTFLoader,
  //   "/lab-07-26.glb",
  //   loader => {
  //     const dracoLoader = new DRACOLoader();
  //     dracoLoader.setDecoderPath("../../node_modules/three/examples/jsm/libs/draco/");
  //     loader.setDRACOLoader(dracoLoader);
  //   }
  // );

    return (
      <Suspense fallback={null}>
          <primitive scale={(viewport.width < 12 ? (viewport.width / 37) : (viewport.width / 27))} rotation={[0.05, 179.9, 0]} object={scene} position={(viewport.width < 12 ? [-2.3, -10, -14] : [-7, -10, -17])} animations={animations} cameras={cameras} />
          {/* <OrbitControls enableZoom={true} /> */}
      </Suspense>
    )
  }
