
import { useGLTF, useAnimations } from '@react-three/drei'
import { extend, useThree } from '@react-three/fiber'

extend({ useGLTF, useAnimations, useThree})

export const playAria = () => {
        const { animations } = useGLTF('/gltf/lab-09-12-v2.glb')
        const { actions, group } = useAnimations(animations)
        console.log(actions)
        console.log(actions['ARIA-corner-1'])
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
    return console.log('playAria')
  }