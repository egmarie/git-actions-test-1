// // // React | Three Imports
// import { useFrame, extend } from '@react-three/fiber'
// import { useContext } from "react";
// import * as THREE from 'three'
// import { Html} from '@react-three/drei'
// extend({ Html, useFrame, THREE })



// // Context
// import { CamContext } from '../-main-x';
// import { PageInfo } from './prj-data'


// // //
// // //
// export function Test() {

//       const camera = useContext(CamContext);
//       const [ clicked, setClicked ] = useState(false) 
//       // const [ open, setOpen ] = useState('') 
//       let vec = new THREE.Vector3


//         let i:number = 0;

//         // Initialization for ES Users

//         initTE({ Collapse });

// // Select Full View
//         function ChangePage() {
//             camera.setMap(true)
//             // setClicked(true)
//           if (camera.scenes) {
//             console.log("SCENE ONCLICK")

//               console.log(camera.scenes)
//               console.log(i)

//             // setClicked(false) 
//           } else {
//             console.log(camera.scenes)
//             console.log("there is no scene set yet")
//           }
//         }

// Upon Selection, change camera position
        // useFrame(state => {
        //   if ( camera.fullmap === false && clicked === true ) {
        //     state.camera.lookAt(vec.set(nextNum.position[0], nextNum.position[1], nextNum.position[2]))
        //     state.camera.position.lerp(vec.set(nextNum.position[0], nextNum.position[1], nextNum.position[2] + 5), .01)
        //     camera.setCam(vec.set( nextNum.position[0], nextNum.position[1], nextNum.position[2] + 5 ))
        //     state.camera.updateProjectionMatrix()
        //   }

        // })


// )
// }