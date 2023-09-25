/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 lab-08-22-v2.glb 
*/

import React, { useRef, Suspense, useContext, useEffect, useState } from 'react'
import { useGLTF, PerspectiveCamera, useAnimations, OrbitControls, useCamera } from '@react-three/drei'
import { extend, useThree } from '@react-three/fiber'
import { CamContext } from '../-main-x';
extend({ OrbitControls, useGLTF, PerspectiveCamera, useAnimations, useCamera, useThree})

export const Lab: React.FunctionComponent = (props:any) => {
  const [camState, setCamState] = useState('opening')
  const camera = useContext(CamContext)
  const { viewport } = useThree()
  const { nodes, materials, animations, scene, cameras } = useGLTF('/gltf/lab-08-22-v2.glb')
  const group = useRef()
  const { actions } = useAnimations(animations, group)
  // const camRef = useRef()
  const vrRef = useRef()
  const volcapRef = useRef()
  const loomoRef = useRef()
  const ariaRef = useRef()
  const openingRef = useRef()
  // const loomoCamera = useCamera(cameras[3])
    useEffect(() => {
      if (camera?.scenes === 'Volcap') {
          setCamState('volcap')
          const volcapAnimations = actions['vol-cap-camera-animation']?.play()
          // console.log(volcapAnimations?._mixer)
          volcapAnimations?._mixer.addEventListener('finished', () => {
            console.log('finished')
            alert('finished')
          })
          console.log(volcapAnimations)


        } else if (camera?.scenes === 'VR') {
          setCamState('vr')
          const vrAnimations = actions['vr-camera-animation']?.play()
          // vrAnimations?._mixer.addEventListener('finished', () => {
          //   console.log('finished')
          //   alert('finished')
          // })
      } else if (camera?.scenes === 'Loomo') {
        Promise.resolve(() => {
          actions['loomo-camera-animation']?.play()
          console.log("run animations")
        }).then(() => {
            setCamState('loomo')
            console.log("hello")
          }).catch(err => console.log(err))        





      } else if (camera?.scenes === 'Aria') {
          setCamState('aria')
          actions['aria-camera-animation']?.play()
      } else {
        // alert(camera?.scenes)
        actions['opening-camera-animation']?.play()
        setCamState('opening')
      }
    })



// const vrCamera = useCamera(cameras[0])


// const loomoCamera = useCamera(cameras[3])
// const ariaCamera = useCamera(cameras[4])

// console.log(openingCamera)


  actions['vol-cap-girl-animation']?.play()
//
  actions['LOOMO-arms']?.play()
  actions['LOOMO-whole']?.play() // 1
  actions['LOOMO-core']?.play()
  actions['LOOMO-base']?.play()
  actions['LOOMO-handle']?.play()
  actions['LOOMO-head']?.play()
  actions['LOOMO-head-frame']?.play()
  actions['LOOMO-left-pad']?.play()
  actions['LOOMO-right-pad']?.play()
  actions['LOOMO-left-wheel']?.play()
  actions['LOOMO-right-wheel']?.play()
  actions['LOOMO-screen-blank']?.play()
  actions['LOOMO-screen-heart']?.play()
  actions['LOOMO-screen-motion']?.play()
  actions['LOOMO-side-core']?.play()

// 
  actions['ARIA-corner-1']?.play()
  actions['ARIA-corner-2']?.play()
  actions['ARIA-corner-3']?.play()
  actions['ARIA-corner-4']?.play()
  actions['ARIA-cupcake-1']?.play()
  actions['ARIA-cupcake-2']?.play()
  actions['ARIA-cupcake-3']?.play()
  actions['ARIA-cupcake-4']?.play()
  actions['ARIA-cupcake-5']?.play()
  actions['ARIA-cupcake-6']?.play()
  actions['ARIA-cupcake-7']?.play()
  actions['ARIA-cupcake-8']?.play()
  actions['ARIA-cupcake-9']?.play()
  actions['ARIA-end-piece']?.play()
  actions['ARIA-left-claw']?.play()
  actions['ARIA-lightbulb']?.play()
  actions['ARIA-right-claw']?.play()
  actions['ARIA-ring-2']?.play()
  actions['ARIA-ring-3']?.play()
  actions['ARIA-ring-4']?.play()
  actions['ARIA-ring-5']?.play()

  actions['0-baked-action']?.play()
  actions['1-baked-action']?.play()
  actions['2-baked-action']?.play()
  actions['3-baked-action']?.play()
  actions['4-baked-action']?.play()
  actions['5-baked-action']?.play()

  return (
    <Suspense fallback={null}>
    <group ref={group} {...props} dispose={null} scale={(viewport.width < 12 ? (viewport.width / 27) : (viewport.width / 19))} rotation={[0.05, 179.9, 0]} object={scene} position={(viewport.width < 12 ? [-3, 0, -10] : [-6, -4, -17])} animations={animations} cameras={cameras}>
      <group name="Scene">
        <group name="TABLE" position={[-8.067, 0.8, -9.387]} rotation={[0, -0.842, 0]} scale={2.145}>
          <mesh name="Circle" geometry={nodes.Circle.geometry} material={materials['belt-black']} position={[0.121, -1.559, 0.053]} scale={1.221} />
        </group>
        <group name="LOOMO" position={[-1.563, -3.402, 8.591]} rotation={[Math.PI, -0.229, Math.PI]} scale={1.864}>
          <mesh name="head-base-2-rnd" geometry={nodes['head-base-2-rnd'].geometry} material={materials['loomo-dark-blue']} position={[0.077, 2.04, -0.187]} rotation={[1.016, -0.033, -1.59]} scale={0.278} />
          <mesh name="head-screen" geometry={nodes['head-screen'].geometry} material={materials['loomo-wheels']} position={[0.081, 2.13, -0.194]} rotation={[1.016, -0.033, -1.59]} scale={0.278} />
          <mesh name="head-screenbody" geometry={nodes['head-screenbody'].geometry} material={materials['loomo-dark-blue']} position={[0.081, 2.13, -0.202]} rotation={[1.016, -0.033, -1.59]} scale={0.278} />
          <mesh name="l_-_body_1" geometry={nodes['l_-_body_1'].geometry} material={materials['loomo-dark-blue']} rotation={[-0.162, 0.003, -0.038]} />
          <mesh name="l_-_body_1001" geometry={nodes['l_-_body_1001'].geometry} material={materials['loomo-dark-blue']} rotation={[-0.162, 0.003, -0.038]} />
          <mesh name="l_-_body-sides" geometry={nodes['l_-_body-sides'].geometry} material={materials['loomo-light-blue']} rotation={[-0.162, 0.003, -0.038]} />
          <mesh name="l_-_foot-pad-r" geometry={nodes['l_-_foot-pad-r'].geometry} material={materials['loomo-light-blue']} position={[-0.517, 0.01, 0]} rotation={[-0.162, 0.003, -0.038]} />
          <mesh name="l_-_foot-pad-r001" geometry={nodes['l_-_foot-pad-r001'].geometry} material={materials['loomo-light-blue']} position={[0.516, -0.029, 0.003]} rotation={[-0.162, 0.003, -0.038]} />
          <mesh name="l_-_handle" geometry={nodes['l_-_handle'].geometry} material={materials['loomo-wheels']} position={[0.056, 1.433, -0.743]} rotation={[-0.162, 0.003, -1.608]} scale={[-0.078, -0.168, -0.078]} />
          <mesh name="l_-_side_arms" geometry={nodes['l_-_side_arms'].geometry} material={materials['loomo-dark-blue']} position={[0.045, 1.193, -0.178]} rotation={[-2.747, 0.017, -3.108]} scale={[0.227, 0.132, 0.362]} />
          <mesh name="wheel-l" geometry={nodes['wheel-l'].geometry} material={materials['loomo-wheels']} position={[1.212, 0.025, 0]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[-0.59, -0.781, -0.59]} />
          <mesh name="wheel-r" geometry={nodes['wheel-r'].geometry} material={materials['loomo-wheels']} position={[-1.212, 0.025, 0]} rotation={[0, 0, -Math.PI / 2]} scale={[0.59, 0.781, 0.59]} />
        </group>
        <group name="FLOWER_POT" position={[-7.964, 0.764, -9.108]} rotation={[-Math.PI, 1.553, -Math.PI]} scale={0.439}>
          <group name="Empty002" position={[-0.232, 7.93, -1.796]} rotation={[-0.772, 0.051, 0.086]} scale={0.533} />
          <group name="Empty004" position={[2.077, 7.516, -1.017]} rotation={[0.229, 0.608, -0.903]} scale={0.537} />
          <mesh name="BezierCurve" geometry={nodes.BezierCurve.geometry} material={materials['stem-green']} position={[0.094, -0.219, -0.487]} rotation={[0, 0, -Math.PI / 2]} scale={1.444} />
          <mesh name="BezierCurve001" geometry={nodes.BezierCurve001.geometry} material={materials['stem-green']} position={[-0.082, -0.219, -0.273]} rotation={[0, -1.274, -Math.PI / 2]} scale={1.444} />
          <mesh name="BezierCurve003" geometry={nodes.BezierCurve003.geometry} material={materials['stem-green']} position={[-0.177, -0.256, -0.213]} rotation={[0, 1.021, -Math.PI / 2]} scale={1.444} />
          <mesh name="BezierCurve004" geometry={nodes.BezierCurve004.geometry} material={materials['stem-green']} position={[-0.913, -0.727, 0.03]} rotation={[-Math.PI, 1.518, 1.571]} scale={1.444} />
          <mesh name="BezierCurve005" geometry={nodes.BezierCurve005.geometry} material={materials['stem-green']} position={[-0.259, -0.226, 0.373]} rotation={[Math.PI, -0.032, Math.PI / 2]} scale={1.444} />
          <mesh name="flower-pot" geometry={nodes['flower-pot'].geometry} material={materials['green-headband']} position={[0, -5.291, 0]} />
          <mesh name="Plane012" geometry={nodes.Plane012.geometry} material={materials['flower-pink']} position={[-0.232, 2.639, -1.796]} rotation={[-0.764, -1.004, 0.084]} scale={0.533} />
          <mesh name="Plane013" geometry={nodes.Plane013.geometry} material={materials['flower-pink']} position={[-0.018, 2.482, 1.987]} rotation={[-2.687, 1.312, -2.574]} scale={0.652}>
            <group name="Empty003" rotation={[0.134, 1.051, -0.072]} />
            <mesh name="Sphere002" geometry={nodes.Sphere002.geometry} material={nodes.Sphere002.material} position={[-0.288, -0.017, 0.261]} scale={[0.669, 0.487, 0.669]} />
          </mesh>
          <mesh name="Plane014" geometry={nodes.Plane014.geometry} material={materials['flower-pink']} position={[-2.202, 2.668, 0.287]} rotation={[0.517, -0.233, 0.835]} scale={0.474}>
            <group name="Empty005" rotation={[0.134, 1.051, -0.072]} />
            <mesh name="Sphere003" geometry={nodes.Sphere003.geometry} material={nodes.Sphere003.material} scale={[0.669, 0.487, 0.669]} />
          </mesh>
          <mesh name="Plane015" geometry={nodes.Plane015.geometry} material={materials['flower-pink']} position={[2.077, 2.226, -1.017]} rotation={[-0.59, -0.114, -0.683]} scale={0.537} />
          <mesh name="Plane016" geometry={nodes.Plane016.geometry} material={materials['flower-pink']} position={[0.879, 4.218, 0.227]} rotation={[-1.952, -1.196, -1.88]} scale={0.514}>
            <group name="Empty006" rotation={[0.134, 1.051, -0.072]} />
            <mesh name="Sphere005" geometry={nodes.Sphere005.geometry} material={nodes.Sphere005.material} position={[0.035, 0.357, 0.13]} scale={[0.669, 0.487, 0.669]} />
          </mesh>
          <mesh name="Sphere001" geometry={nodes.Sphere001.geometry} material={nodes.Sphere001.material} position={[-0.232, 2.636, -1.796]} rotation={[-0.764, -1.004, 0.084]} scale={[0.357, 0.259, 0.357]} />
          <mesh name="Sphere004" geometry={nodes.Sphere004.geometry} material={nodes.Sphere004.material} position={[1.855, 1.923, -0.964]} rotation={[-0.59, -0.114, -0.683]} scale={[0.359, 0.261, 0.359]} />
        </group>
        <group name="heart-screen" position={[-1.415, -3.402, 9.255]} rotation={[Math.PI, -0.229, Math.PI]} scale={1.864}>
          <mesh name="head-screen-heart" geometry={nodes['head-screen-heart'].geometry} material={materials['loomo-face-heart']} position={[0.084, 2.13, 0.052]} rotation={[1.016, -0.033, -1.59]} scale={0.278} />
        </group>
        <group name="CONVEYOR_BELT001" position={[-0.939, -0.669, 17.852]} rotation={[0, Math.PI / 2, 0]} scale={9.264}>
          <group name="CONVEYOR_CURVE002" position={[0, -0.013, 0]} scale={[1, 1.271, 1]} />
        </group>
        <group name="CONVEYOR_BELT002" position={[-0.939, -0.669, 17.852]} rotation={[0, Math.PI / 2, 0]} scale={9.264}>
          <group name="CONVEYOR_CURVE001" position={[0, -0.013, 0]} scale={[1, 1.271, 1]} />
        </group>
        <group name="CONVEYOR_BELT003" position={[-0.939, -0.669, 17.852]} rotation={[0, Math.PI / 2, 0]} scale={9.264}>
          <group name="CONVEYOR_CURVE003" position={[0, -0.013, 0]} scale={[1, 1.271, 1]} />
        </group>
        <group name="CONVEYOR_BELT004" position={[-0.939, -0.669, 17.852]} rotation={[0, Math.PI / 2, 0]} scale={9.264}>
          <group name="CONVEYOR_CURVE004" position={[0, -0.013, 0]} scale={[1, 1.271, 1]} />
        </group>
        <group name="CONVEYOR_BELT005" position={[-0.939, -0.669, 17.852]} rotation={[0, Math.PI / 2, 0]} scale={9.264}>
          <group name="CONVEYOR_CURVE005" position={[0, -0.013, 0]} scale={[1, 1.271, 1]} />
        </group>
        <group name="CONVEYOR_BELT006" position={[-0.939, -0.669, 17.852]} rotation={[0, Math.PI / 2, 0]} scale={9.264}>
          <group name="CONVEYOR_CURVE006" position={[0, -0.013, 0]} scale={[1, 1.271, 1]} />
        </group>
        <group name="CONVEYOR_BELT007" position={[-0.939, -0.669, 17.852]} rotation={[0, Math.PI / 2, 0]} scale={9.264}>
          <group name="CONVEYOR_CURVE007" position={[0, -0.013, 0]} scale={[1, 1.271, 1]} />
        </group>
        <group name="CONVEYOR_BELT008" position={[-0.939, -0.669, 17.852]} rotation={[0, Math.PI / 2, 0]} scale={9.264}>
          <group name="CONVEYOR_CURVE008" position={[0, -0.013, 0]} scale={[1, 1.271, 1]} />
        </group>
        <group name="CONVEYOR_BELT" position={[-0.939, -0.669, 17.852]} rotation={[0, Math.PI / 2, 0]} scale={9.264}>
          <group name="CONVEYOR_CURVE" position={[0, -0.013, 0]} scale={[1, 1.271, 1]} />
          <mesh name="BODY" geometry={nodes.BODY.geometry} material={materials['conveyer-struct']} position={[-0.966, -0.045, 0.044]} scale={[0.072, 0.072, 0.844]} />
        </group>
        <group name="VR_HEADSET" position={[-26.087, 1.38, 18.238]} rotation={[0, -0.645, 0]}>
          <group name="Cube022" />
          <group name="Cube024" />
          <mesh name="Circle006" geometry={nodes.Circle006.geometry} material={materials['belt-black']} position={[2.14, 0, 0]} rotation={[0, 0, -Math.PI / 2]} scale={0.439} />
          <mesh name="Circle007" geometry={nodes.Circle007.geometry} material={materials['belt-black']} position={[0, 0, 0.929]} rotation={[Math.PI / 2, 0, 0]} scale={0.53} />
          <mesh name="Circle008" geometry={nodes.Circle008.geometry} material={materials['belt-black']} position={[0, 0, -0.929]} rotation={[Math.PI / 2, 0, 0]} scale={0.53} />
          <mesh name="Circle009" geometry={nodes.Circle009.geometry} material={materials['vr-eyes']} position={[0.224, 0.004, 0.422]} rotation={[0, 0, -Math.PI / 2]} scale={[0.352, 0.035, 0.352]} />
          <mesh name="Circle010" geometry={nodes.Circle010.geometry} material={materials['vr-eyes']} position={[0.224, 0.004, -0.422]} rotation={[0, 0, -Math.PI / 2]} scale={[0.352, 0.035, 0.352]} />
          <mesh name="Cube021" geometry={nodes.Cube021.geometry} material={materials['green-headband']} />
          <mesh name="Cube023" geometry={nodes.Cube023.geometry} material={materials['belt-black']} position={[-0.05, 0, 0]} />
          <mesh name="Plane007" geometry={nodes.Plane007.geometry} material={materials['green-headband']} position={[0.3, 0, 0.955]} rotation={[Math.PI / 2, 0, 0]} scale={0.201} />
          <mesh name="Plane008" geometry={nodes.Plane008.geometry} material={materials['green-headband']} position={[0.3, 0, -0.955]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={-0.201} />
          <mesh name="Plane009" geometry={nodes.Plane009.geometry} material={materials['green-headband']} position={[0.223, 0, 0]} rotation={[0, 0, -Math.PI / 2]} scale={0.308} />
        </group>
        <group name="LAMP" position={[-31.408, 0.705, 16.5]} rotation={[0, -0.871, 0]}>
          <mesh name="BezierCurve002" geometry={nodes.BezierCurve002.geometry} material={materials['lamp-metal']} position={[0, 1.325, 0]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} />
          <mesh name="Circle002" geometry={nodes.Circle002.geometry} material={materials.green} />
          <mesh name="Circle003" geometry={nodes.Circle003.geometry} material={materials.green} position={[1.013, 3.289, 0]} rotation={[Math.PI, 0, 2.172]} scale={0.685} />
          <mesh name="Circle004" geometry={nodes.Circle004.geometry} material={materials['lamp-metal']} position={[0.41, 3.702, 0]} rotation={[Math.PI, 0, 2.172]} scale={0.13} />
          <mesh name="Circle005" geometry={nodes.Circle005.geometry} material={nodes.Circle005.material} position={[0.43, 3.689, 0]} rotation={[0, 0, -2.172]} scale={0.168} />
        </group>
        <group name="CHAIR" position={[-22.871, -1.168, 25.263]} rotation={[-Math.PI, 1.294, -Math.PI]} scale={1.625}>
          <mesh name="Plane002" geometry={nodes.Plane002.geometry} material={materials['belt-black']} position={[1.056, -0.521, -0.248]} />
          <mesh name="Plane003" geometry={nodes.Plane003.geometry} material={materials['aria-metal']} position={[0.29, -0.56, 0.334]} rotation={[-0.245, 0.05, -0.199]} scale={0.139} />
          <mesh name="Plane004" geometry={nodes.Plane004.geometry} material={materials['aria-metal']} position={[0.29, -0.56, -0.831]} rotation={[0.245, -0.05, 2.942]} scale={-0.139} />
          <mesh name="Plane005" geometry={nodes.Plane005.geometry} material={materials['aria-metal']} position={[1.727, -0.56, 0.334]} rotation={[2.897, 0.05, -0.199]} scale={-0.139} />
          <mesh name="Plane006" geometry={nodes.Plane006.geometry} material={materials['aria-metal']} position={[1.727, -0.56, -0.831]} rotation={[-2.897, -0.05, 2.942]} scale={0.139} />
        </group>
        <group name="TABLE001" position={[-28.682, 0.608, 19.077]} rotation={[0, 0.354, 0]} scale={2.145}>
          <mesh name="Plane018" geometry={nodes.Plane018.geometry} material={materials['belt-black']} position={[0.121, -0.008, 0.053]} rotation={[0, -0.354, 0]} scale={2.205} />
        </group>
        <group name="VOL_CAP" position={[-26.965, 6.515, -12.673]} scale={0.863}>
          <group name="Empty" position={[-0.457, -0.542, 5.273]} rotation={[0, 1.571, 0]} scale={0.395} />
          <group name="Empty001" position={[4.12, -3.339, -4.248]} rotation={[-2.452, 0.733, 2.638]} scale={0.626} />
          <mesh name="Cube004" geometry={nodes.Cube004.geometry} material={materials['loomo-dark-blue']} position={[4.729, 1.475, 4.156]} rotation={[-0.653, 0.671, 0.444]} scale={0.457} />
          <mesh name="Cube005" geometry={nodes.Cube005.geometry} material={materials.green} position={[5.409, 2.076, 4.794]} rotation={[-0.743, 0.635, 0.499]} scale={0.197} />
          <mesh name="Cube006" geometry={nodes.Cube006.geometry} material={materials.green} position={[5.409, 1.043, 4.794]} rotation={[0.812, 0.603, -0.539]} scale={0.197} />
          <mesh name="Cube007" geometry={nodes.Cube007.geometry} material={materials['loomo-dark-blue']} position={[-4.285, 1.42, 4.217]} rotation={[-0.653, -0.671, -0.444]} scale={0.457} />
          <mesh name="Cube008" geometry={nodes.Cube008.geometry} material={materials.green} position={[-4.923, 2.05, 4.898]} rotation={[-0.743, -0.635, -0.499]} scale={0.197} />
          <mesh name="Cube009" geometry={nodes.Cube009.geometry} material={materials.green} position={[-4.923, 1.018, 4.898]} rotation={[0.812, -0.603, 0.539]} scale={0.197} />
          <mesh name="Cube010" geometry={nodes.Cube010.geometry} material={materials['loomo-dark-blue']} position={[-4.194, 1.445, -5.215]} rotation={[-2.489, -0.671, -2.698]} scale={0.457} />
          <mesh name="Cube011" geometry={nodes.Cube011.geometry} material={materials.green} position={[-4.875, 2.076, -5.853]} rotation={[-2.399, -0.635, -2.643]} scale={0.197} />
          <mesh name="Cube012" geometry={nodes.Cube012.geometry} material={materials.green} position={[-4.875, 1.043, -5.853]} rotation={[2.33, -0.603, 2.603]} scale={0.197} />
          <mesh name="Cube013" geometry={nodes.Cube013.geometry} material={materials['loomo-dark-blue']} position={[4.794, 1.42, -5.135]} rotation={[-2.489, 0.671, 2.698]} scale={0.457} />
          <mesh name="Cube014" geometry={nodes.Cube014.geometry} material={materials.green} position={[5.432, 2.05, -5.815]} rotation={[-2.399, 0.635, 2.643]} scale={0.197} />
          <mesh name="Cube015" geometry={nodes.Cube015.geometry} material={materials.green} position={[5.432, 1.018, -5.815]} rotation={[2.33, 0.603, -2.603]} scale={0.197} />
          <mesh name="Cube016" geometry={nodes.Cube016.geometry} material={materials['belt-black']} position={[4.082, 0.949, 3.509]} rotation={[-0.653, 0.671, 0.444]} scale={[0.457, 0.457, 0.231]} />
          <mesh name="Cube017" geometry={nodes.Cube017.geometry} material={materials['belt-black']} position={[-3.633, 0.921, 3.566]} rotation={[-0.653, -0.671, -0.444]} scale={[0.457, 0.457, 0.231]} />
          <mesh name="Cube018" geometry={nodes.Cube018.geometry} material={materials['belt-black']} position={[-3.542, 0.945, -4.562]} rotation={[-2.489, -0.671, -2.698]} scale={[0.457, 0.457, 0.231]} />
          <mesh name="Cube019" geometry={nodes.Cube019.geometry} material={materials['belt-black']} position={[4.143, 0.921, -4.484]} rotation={[-2.489, 0.671, 2.698]} scale={[0.457, 0.457, 0.231]} />
        </group>
        <group name="Subdivision_Surface_1">
          <group name="Body" position={[26.257, 14.867, 0.455]} />
        </group>
        <group name="Physical_Sky" rotation={[0, 1.109, 0]} />
        <group name="secretary-armature" position={[-25.551, -4.425, -12.923]} rotation={[Math.PI / 2, 0, -1.86]} scale={0.027}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="secretary-model" geometry={nodes['secretary-model'].geometry} material={materials['Secreetary_shader.001']} skeleton={nodes['secretary-model'].skeleton} />
        </group>
        <PerspectiveCamera ref={vrRef} name="vr-camera" makeDefault={camState === 'vr' ? true : false} far={1000} near={0.1} fov={22.895} position={[-5.164, 10.935, -1.95]} rotation={[-2.633, 0.718, 2.79]} />
        <PerspectiveCamera ref={volcapRef} name="vol-cap-camera" makeDefault={camState === 'volcap' ? true : false} far={1000} near={0.1} fov={22.895} position={[10.569, 28.363, -25.707]} rotation={[-2.162, 0.874, 2.29]} />
        <PerspectiveCamera ref={openingRef} name="opening-camera" makeDefault={camState === '' ? true : false} far={1000} near={0.1} fov={22.895} position={[81.283, 63.531, -86.473]} rotation={[-2.523, 0.701, 2.711]} />
        <PerspectiveCamera ref={loomoRef} name="loomo-camera" makeDefault={camState === 'loomo' ? true : false} far={1000} near={0.1} fov={22.895} position={[11.43, 13.003, -24.303]} rotation={[-2.454, 0.624, 2.694]} />
        <PerspectiveCamera ref={ariaRef} name="aria-camera" makeDefault={camState === 'aria' ? true : false} far={1000} near={0.1} fov={22.895} position={[22.311, 20.733, -15.631]} rotation={[-2.67, 0.528, 2.89]} />
        <spotLight name="spot-light4001" intensity={1.273} angle={1.119} penumbra={0.15} decay={2} position={[-28.093, 38.475, -0.932,]} rotation={[ -89.3, 521, 6.62]} scale={1}>
          <group position={[0, 0, -1]} />
        </spotLight>
        {/* <spotLight name="spot-light4" intensity={1.273} angle={1.119} penumbra={0.15} decay={2} position={[-1.251, -0.932, -38.475]} rotation={[3.13, -0.111, 2.801]} scale={1.831}>
          <group position={[0, 0, -1]} />
        </spotLight> */}
        {/* <spotLight name="spot-light2" intensity={0.637} angle={0.472} penumbra={0.15} decay={2} color="#ffd494" position={[-102.147, 18.479, 39.471]} rotation={[-0.301, -1.108, 1.3]} scale={6.177}>
          <group position={[0, 0, -1]} />
        </spotLight> */}
        {/* <spotLight name="area-light1" intensity={.6} angle={1.223} penumbra={0.392} decay={2} color="#ffedca" position={[-12.195, 36.175, 2.646]} rotation={[-Math.PI / 2, 0, 0]} scale={3.635}>
          <group position={[0, 0, -1]} />
        </spotLight>
        <spotLight name="outside-light-1" intensity={0.557} angle={1.122} penumbra={0.03} decay={2} color="#ffdc8d" position={[-82.688, 36.469, 2.646]} rotation={[-Math.PI / 2, -1.026, 0]} scale={3.635}>
          <group position={[0, 0, -1]} />
        </spotLight> */}
        {/* <pointLight name="lamp" intensity={1} decay={2} position={[-0.586, 8.197, 28.362]} rotation={[-Math.PI / 2, 0, 0]} /> */}
        <mesh name="floor" geometry={nodes.floor.geometry} material={materials.floor} position={[-13.449, -5.085, 4.559]} rotation={[-Math.PI, 0, 0]} scale={-28.046} />
        <group name="left-wall" position={[-13.449, 5.551, 32.001]} rotation={[Math.PI, 0, Math.PI]} scale={[25, 5.254, 0.604]}>
          <mesh name="Cube044" geometry={nodes.Cube044.geometry} material={materials.wall} />
          <mesh name="Cube044_1" geometry={nodes.Cube044_1.geometry} material={materials.wall} />
          <mesh name="Cube044_2" geometry={nodes.Cube044_2.geometry} material={materials.wall} />
        </group>
        <group name="right-wall" position={[-42.098, 5.551, 3.956]} rotation={[0, Math.PI / 2, 0]} scale={[25, 5.254, 0.604]}>
          <mesh name="Cube045" geometry={nodes.Cube045.geometry} material={materials.wall} />
          <mesh name="Cube045_1" geometry={nodes.Cube045_1.geometry} material={materials.wall} />
        </group>
        <mesh name="corner-wall" geometry={nodes['corner-wall'].geometry} material={materials['loomo-light-blue']} position={[-42.098, 14.869, 32.001]} scale={[0.604, 0.757, 0.604]} />
        <mesh name="glass-door" geometry={nodes['glass-door'].geometry} material={materials['glass-door']} position={[-31.908, 1.731, 3.002]} scale={[0.122, 6.59, 3.408]} />
        <group name="left-door-frame" position={[-32.58, 7.321, 6.874]}>
          <mesh name="Cube062" geometry={nodes.Cube062.geometry} material={materials['white-frames']} />
          <mesh name="Cube062_1" geometry={nodes.Cube062_1.geometry} material={materials['white-frames']} />
        </group>
        <mesh name="door-handle" geometry={nodes['door-handle'].geometry} material={materials['belt-black']} position={[-31.745, 0.79, 6.229]} rotation={[Math.PI, 0, 0]} scale={[0.116, 0.278, 0.369]} />
        <mesh name="right-glass-window" geometry={nodes['right-glass-window'].geometry} material={materials['big-glass']} position={[-42.116, 5.726, -13.369]} rotation={[-Math.PI, 0, 0]} scale={[0.122, 8.17, 8.062]} />
        <mesh name="right-window-frame" geometry={nodes['right-window-frame'].geometry} material={materials['white-frames']} position={[-41.702, 12.895, -21.346]} scale={[1, 1, 0.084]} />
        <mesh name="left-window-frame" geometry={nodes['left-window-frame'].geometry} material={materials['white-frames']} position={[-41.702, 12.895, 13.34]} scale={[1, 1, 0.084]} />
        <mesh name="left-glass-window" geometry={nodes['left-glass-window'].geometry} material={materials['big-glass']} position={[-42.116, 5.726, 21.309]} rotation={[-Math.PI, 0, 0]} scale={[0.122, 8.17, 8.062]} />
        <mesh name="left-door-white" geometry={nodes['left-door-white'].geometry} material={materials['white-frames']} position={[-31.922, 1.809, 7.282]} scale={[0.239, 6.381, 0.331]} />
        <mesh name="top-door-white" geometry={nodes['top-door-white'].geometry} material={materials['white-frames']} position={[-31.922, 7.746, 3.762]} rotation={[Math.PI / 2, 0, 0]} scale={[0.239, 3.568, 0.331]} />
        <mesh name="bottom-door-white" geometry={nodes['bottom-door-white'].geometry} material={materials['white-frames']} position={[-31.922, -3.475, 3.762]} rotation={[Math.PI / 2, 0, 0]} scale={[0.239, 3.568, 1.062]} />
        <mesh name="right-door-white" geometry={nodes['right-door-white'].geometry} material={materials['white-frames']} position={[-31.922, 1.809, 0.178]} scale={[0.239, 6.381, 0.331]} />
        <mesh name="board" geometry={nodes.board.geometry} material={materials.board} position={[-27.555, 7.712, 31.179]} rotation={[-1.571, 0, 0]} scale={[4.216, 0.098, 4.216]} />
        <mesh name="frame" geometry={nodes.frame.geometry} material={materials['white-frames']} position={[-27.555, 7.712, 31.179]} rotation={[-1.571, 0, 0]} scale={[4.463, 0.289, 4.463]} />
        <mesh name="table-base" geometry={nodes['table-base'].geometry} material={materials['conveyer-struct']} position={[-7.98, -4.339, -9.116]} scale={[2.166, 0.161, 2.166]} />
        <mesh name="wall-opening-L" geometry={nodes['wall-opening-L'].geometry} material={materials['conveyer-struct']} position={[2.387, 2.456, 31.241]} rotation={[0, 1.571, 0]} scale={[0.908, 1.2, 1.355]} />
        <mesh name="wall-opening-R" geometry={nodes['wall-opening-R'].geometry} material={materials['conveyer-struct']} position={[-3.469, 2.456, 31.241]} rotation={[0, 1.571, 0]} scale={[0.908, 1.2, 1.355]} />
        <mesh name="TRASH" geometry={nodes.TRASH.geometry} material={materials.green} position={[-1.226, -4.492, 14.883]}>
          <mesh name="Circle015" geometry={nodes.Circle015.geometry} material={materials.green} />
          <mesh name="Circle016" geometry={nodes.Circle016.geometry} material={materials.green} position={[0, 2.708, 0]} scale={0.996} />
        </mesh>
        <mesh name="light-red" geometry={nodes['light-red'].geometry} material={materials['light-red']} position={[-0.672, 8.134, 30.193]} rotation={[-Math.PI / 2, 0, 0]} scale={0.929} />
        <group name="pole-1" position={[-0.675, 8.14, 30.193]} rotation={[-Math.PI, -Math.PI / 2, 0]} scale={[0.104, 0.772, 0.104]}>
          <mesh name="Cylinder006" geometry={nodes.Cylinder006.geometry} material={materials.tv} />
          <mesh name="Cylinder006_1" geometry={nodes.Cylinder006_1.geometry} material={materials['tv.001']} />
        </group>
        <mesh name="light-green" geometry={nodes['light-green'].geometry} material={materials['light-green']} position={[-0.675, 8.14, 30.193]} rotation={[-Math.PI / 2, 0, 0]} scale={0.953} />
        <mesh name="Cupcake_Vanilla" geometry={nodes.Cupcake_Vanilla.geometry} material={materials.Cupcake_Vanilla} position={[-3.47, 0.032, 34.995]} rotation={[0, Math.PI / 2, 0]} scale={3.504} />
        <mesh name="Cupcake_Chocolate" geometry={nodes.Cupcake_Chocolate.geometry} material={materials.Cupcake_chocolate} position={[-3.47, 0.032, 34.995]} rotation={[0, Math.PI / 2, 0]} scale={3.504} />
        <mesh name="Cupcake_Chocolate001" geometry={nodes.Cupcake_Chocolate001.geometry} material={materials.Cupcake_chocolate} position={[-3.47, 0.032, 34.995]} rotation={[0, Math.PI / 2, 0]} scale={3.504} />
        <mesh name="Cupcake_Party002" geometry={nodes.Cupcake_Party002.geometry} material={materials.Cupcake_party} position={[-3.47, 0.032, 34.995]} rotation={[0, Math.PI / 2, 0]} scale={3.504} />
        <mesh name="Cupcake_Vanilla001" geometry={nodes.Cupcake_Vanilla001.geometry} material={materials.Cupcake_Vanilla} position={[-3.47, 0.032, 34.995]} rotation={[0, Math.PI / 2, 0]} scale={3.504} />
        <mesh name="defect-2" geometry={nodes['defect-2'].geometry} material={materials.Cupcake_chocolate} position={[-3.467, 0.033, 35.005]} rotation={[0, Math.PI / 2, 0]} scale={3.504} />
        <mesh name="Cupcake_Party001" geometry={nodes.Cupcake_Party001.geometry} material={materials.Cupcake_party} position={[-3.47, 0.032, 34.995]} rotation={[0, Math.PI / 2, 0]} scale={3.504} />
        <mesh name="Cupcake_Vanilla002" geometry={nodes.Cupcake_Vanilla002.geometry} material={materials.Cupcake_Vanilla} position={[-3.47, 0.032, 34.995]} rotation={[0, Math.PI / 2, 0]} scale={3.504} />
        <mesh name="defect-1" geometry={nodes['defect-1'].geometry} material={materials.Cupcake_party} position={[-3.467, 0.033, 35.005]} rotation={[0, Math.PI / 2, 0]} scale={3.504} />
        <mesh name="belt" geometry={nodes.belt.geometry} material={materials['belt-black']} position={[-3.479, -0.109, 35.85]} scale={[1.245, 0.164, 1]} />
        <mesh name="leg-1" geometry={nodes['leg-1'].geometry} material={materials['conveyer-struct']} position={[2.225, -2.653, 18.791]} scale={[0.498, 2.078, 0.498]} />
        <mesh name="leg-1001" geometry={nodes['leg-1001'].geometry} material={materials['conveyer-struct']} position={[3.348, -2.653, 27.696]} scale={[0.498, 2.078, 0.498]} />
        <mesh name="table-base001" geometry={nodes['table-base001'].geometry} material={materials['conveyer-struct']} position={[-28.398, -4.339, 19.095]} scale={[2.667, 0.199, 2.667]} />
        <mesh name="skeleton" geometry={nodes.skeleton.geometry} material={materials.green} position={[-26.715, 2.371, -13.082]} rotation={[Math.PI, 0, Math.PI]} scale={[0.413, 5.539, 0.413]} />
        <mesh name="tv" geometry={nodes.tv.geometry} material={materials.tv} position={[-38.031, 3.286, -12.896]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="tv-base" geometry={nodes['tv-base'].geometry} material={materials.tv} position={[-38.551, -4.229, -12.896]} scale={0.324} />
        <mesh name="tv-pole" geometry={nodes['tv-pole'].geometry} material={materials.tv} position={[-38.655, 0.78, -12.896]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-0.296, -1.517, -0.296]} />
        <mesh name="base-pole" geometry={nodes['base-pole'].geometry} material={materials['porcelain-white']} position={[-5.893, -1.507, 16.449]} scale={0.711} />
        <mesh name="bottom-corner" geometry={nodes['bottom-corner'].geometry} material={materials['porcelain-white']} position={[-5.893, -0.459, 16.449]} scale={0.711} />
        <mesh name="bottom-corner-ring" geometry={nodes['bottom-corner-ring'].geometry} material={materials['aria-metal']} position={[-4.366, 1.065, 16.449]} rotation={[0, 0, -Math.PI / 2]} scale={0.711} />
        <mesh name="mid-section" geometry={nodes['mid-section'].geometry} material={materials['porcelain-white']} position={[-4.361, 1.079, 16.449]} scale={0.711} />
        <mesh name="mid-section-ring" geometry={nodes['mid-section-ring'].geometry} material={materials['aria-metal']} position={[-5.887, 3.803, 16.449]} scale={0.711} />
        <mesh name="top-corner-piece" geometry={nodes['top-corner-piece'].geometry} material={materials['porcelain-white']} position={[-5.893, 3.797, 16.449]} scale={0.711} />
        <mesh name="top-corner-ring" geometry={nodes['top-corner-ring'].geometry} material={materials['aria-metal']} position={[-4.809, 5.055, 16.449]} rotation={[0, 0, -Math.PI / 2]} scale={0.711} />
        <mesh name="three-corner-piece" geometry={nodes['three-corner-piece'].geometry} material={materials['porcelain-white']} position={[-4.815, 5.058, 16.449]} scale={0.711} />
        <mesh name="claw-ring" geometry={nodes['claw-ring'].geometry} material={materials['aria-metal']} position={[-3.568, 6.481, 17.642]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={0.711} />
        <mesh name="claw" geometry={nodes.claw.geometry} material={materials['porcelain-white']} position={[-3.56, 6.481, 17.63]} scale={0.711} />
        <mesh name="left-claw" geometry={nodes['left-claw'].geometry} material={materials['aria-metal']} position={[-3.091, 6.469, 18.977]} rotation={[-Math.PI / 2, 0, 0]} scale={[-0.711, -0.711, -0.529]} />
        <mesh name="right-claw" geometry={nodes['right-claw'].geometry} material={materials['aria-metal']} position={[-4.03, 6.469, 18.977]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[-0.711, -0.711, -0.529]} />
        <mesh name="base" geometry={nodes.base.geometry} material={materials['porcelain-white']} position={[-5.892, -3.28, 16.451]} scale={[1.153, 1.225, 1.153]} />
        <mesh name="base-ring" geometry={nodes['base-ring'].geometry} material={materials['aria-metal']} position={[-5.893, -0.438, 16.446]} rotation={[Math.PI, 0.166, 3.139]} scale={0.717} />
      </group>
    </group>
    </Suspense>
  )
}

useGLTF.preload('/lab-08-28-v2.glb')