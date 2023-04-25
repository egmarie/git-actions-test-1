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
export const Loomo = () => {
  const ref = useRef<Mesh<BufferGeometry>>(null);
  const camera = useContext(CamContext); 
  const vec = new THREE.Vector3
  //ref: <Mesh<BufferGeometry>>(null)

// Select Scene
  function startClick(sceneName: string) {
    camera?.setMap(false)
    camera?.setScene(sceneName)
  }


// Camera and Rotation
    useFrame(state => {
    // On scene selection, change camera from React Context
        if (camera?.scenes === 'Aria' && camera.fullmap === false) {
          state.camera.lookAt(ref.current.position)
          state.camera.position.lerp(vec.set(ref.current.position.x, ref.current.position.y, ref.current.position.z + 5), .01)
          camera.setCam(vec.set(ref.current.position.x, ref.current.position.y, ref.current.position.z + 5))
          state.camera.updateProjectionMatrix()
        }
        return null
    })



// GLSL Uniforms Declaration
      let uniforms: any = {
        colorA: {type: 'vec3', value: new THREE.Color(0x74ebd5)},
        colorB: {type: 'vec3', value: new THREE.Color(0xACB6E5)}
      }


  return (
    <mesh position={[-11, -5, -22]} ref={ref} onClick={ () => startClick('Aria') } >
      <boxGeometry args={[1, 1, 1]} userData={{ name: "Loomo" }} />
      <shaderMaterial
        uniforms={uniforms}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
      />
    </mesh>
  );
};