// React | Three Imports
import { useRef, useContext } from "react";
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { extend } from '@react-three/fiber'
extend({ THREE, useFrame })

// Shaders
import vertexShader from '../shaders/vertex1.glsl'
import fragmentShader from '../shaders/fragment1.glsl'

// Context
import { CamContext } from '../-main-x';


//
//
export const Aria = () => {
  const camera = useContext(CamContext);
  const refA = useRef<Mesh<BufferGeometry>>(null); 
  const vec = new THREE.Vector3

// Select Scene
  function startClick(sceneName: string) {
    camera.setMap(false)
    camera.setScene(sceneName)
  }

// Camera and Rotation
    useFrame(state => {
    // On scene selection, change camera from React Context
        if (camera.scenes === 'Aria' && camera.fullmap === false) {
          state.camera.lookAt(refA.current.position)
          state.camera.position.lerp(vec.set(refA.current.position.x, refA.current.position.y, refA.current.position.z + 5), .01)
          camera.setCam(vec.set(refA.current.position.x, refA.current.position.y, refA.current.position.z + 5))
          state.camera.updateProjectionMatrix()
        }
  // Square Rotation
        const a = state.clock.getElapsedTime();  
        refA.current.rotation.x = a * 1.2;
        refA.current.rotation.y = a * 1.5;
        return null
    })



// GLSL Uniforms Declaration
      let uniforms: any = {
        colorA: {type: 'vec3', value: new THREE.Color(0x74ebd5)},
        colorB: {type: 'vec3', value: new THREE.Color(0xACB6E5)}
      }


  return (
    <mesh position={[7, -1, -8]} ref={refA} onClick={ () => startClick('Aria') } >
      <boxGeometry args={[1, 1, 1]} />
      <shaderMaterial
        uniforms={uniforms}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
      />
    </mesh>
  );
};