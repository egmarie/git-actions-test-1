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
export const Volcap = () => {
    
    const ref = useRef<Mesh<BufferGeometry>>(null);
    const camera = useContext(CamContext);
    const vec = new THREE.Vector3
   
    
// Select Scene 
    function startClick(sceneName: string) {
      camera.setMap(false)
      camera.setScene(sceneName)
    }
   
// Camera and Rotation
    useFrame(state => {
      // On scene selection, change camera from React Context
        if (camera.scenes === 'Volcap' && camera.fullmap === false ) {
            state.camera.lookAt(ref.current.position)
            state.camera.position.lerp(vec.set(ref.current.position.x, ref.current.position.y, ref.current.position.z + 6), .01)
            camera.setCam(vec.set(ref.current.position.x, ref.current.position.y, ref.current.position.z + 5))
            state.camera.updateProjectionMatrix()
        }
      // Square Rotation
        const a = state.clock.getElapsedTime();     
        ref.current.rotation.x = a * 1.2;
        ref.current.rotation.y = a * 1.9;
        return null
      })

  // GLSL Uniforms Declaration
  let uniforms: any = {
    colorA: {type: 'vec3', value: new THREE.Color(0xF6EA41)},
    colorB: {type: 'vec3', value: new THREE.Color(0xF048C6)}
  }


  return (
    <mesh name='Volcap' position={[-1, -1, -6]} ref={ref} onClick={() => startClick('Volcap') }>
      <boxGeometry args={[1, 1, 1]} userData={{ name: "volcap" }} />
      <shaderMaterial
        uniforms={uniforms}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
      />
    </mesh>
  );
};