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
export const VR = () => {

    const refVr = useRef<Mesh<BufferGeometry>>(null);
    const camera = useContext(CamContext);
    const vec = new THREE.Vector3


// Select Scene
      function startClick(sceneName: string) {
          camera.setMap(false)
          camera.setScene(sceneName)
      }


    useFrame(state => {

        // On scene selection, change camera from React Context
            if (camera.scenes === 'VR' && camera.fullmap === false) {
                state.camera.lookAt(refVr.current.position)
                state.camera.position.lerp(vec.set(refVr.current.position.x, refVr.current.position.y, refVr.current.position.z + 5), .01)
                camera.setCam(vec.set(refVr.current.position.x, refVr.current.position.y, refVr.current.position.z + 5))
                state.camera.updateProjectionMatrix()  
            }
        // Square Rotation
            const a = state.clock.getElapsedTime();     
            refVr.current.rotation.x = a * 1.2;
            refVr.current.rotation.y = a * 1.5;
        return null
      })


  // GLSL Uniforms Declaration
  let uniforms: any = {
    colorA: {type: 'vec3', value: new THREE.Color(0xBB73E0)},
    colorB: {type: 'vec3', value: new THREE.Color(0xFF8DDB)}
  }

  return (

    <mesh position={[-6.5, -2.7, -12]} ref={refVr} onClick={() => startClick('VR') } >
      <boxGeometry args={[1, 1, 1]} />
      <meshToonMaterial />
      <shaderMaterial
        uniforms={uniforms}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
      />
    </mesh>

  );
};