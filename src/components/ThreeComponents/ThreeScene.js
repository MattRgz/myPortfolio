import { createRoot } from 'react-dom/client'
import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import {OrbitControls} from "@react-three/drei"

function TechSphere(props) {
  const gltf = useLoader(GLTFLoader, '/TechSphere/TechSphere.gltf')
  const ref = useRef()
  useFrame((state, delta) => {
      (ref.current.rotation.y += 0.005);
      
      
  })
  return (
    <primitive ref= {ref} object={gltf.scene} scale={5}/>
  )
}
  
// ACA CREO EL ITEM Y TODAS SUS COSAS ADJUNTAS (ANIMACIONES, INTERACCION, ETC
    // function Box(props) {
    // // This reference will give us direct access to the mesh
    // const mesh = useRef()
    // // Set up state for the hovered and active state
    // const [hovered, setHover] = useState(false)
    // const [active, setActive] = useState(false)
    // // Subscribe this component to the render-loop, rotate the mesh every frame
    // useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
    // // Return view, these are regular three.js elements expressed in JSX
    // //DENTRO DE LAS INTERACCIONES QUE TIENE, ES QUE SI LO CLICKEO SE AGRANDA,,, Y SI LE HAGO HOVER SE PONE ROSA.
    // return (
    //     <mesh
    //     {...props}
    //     ref={mesh}
    //     scale={active ? 1.5 : 1}
    //     onClick={(event) => setActive(!active)}
    //     onPointerOver={(event) => setHover(true)}
    //     onPointerOut={(event) => setHover(false)}>
    //     <boxGeometry args={[1, 1, 1]} />
    //     <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    //     </mesh>
    // )
    // }

// ACA ES DONDE SE PLANTEA EL CANVAS, EN CONJUNTO CON LA LUZ Y SE POSICIONAN LOS OBJETOS CREADOS ANTERIORMENTE :D FACILITO

export default function ThreeScene() {
    return (
    <Canvas camera={{fov: 50,position:[0,0,1]}}>
        <ambientLight intensity={0.1} color="white" />
        <directionalLight color="white" position={[0, 1, 10]} />
            <Suspense>
                <TechSphere position={[0,0,0]} scale={2}/>
            </Suspense>
      </Canvas>
      
    )
  }