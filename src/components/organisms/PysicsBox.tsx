import { Debug, Physics, useBox, usePlane } from '@react-three/cannon'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { OrbitController } from '../atoms/OrbitController'

const Cube: React.FC = () => {
  const [ref] = useBox(() => ({ mass: 1, position: [0, 5, 0] }))
  return (
    <mesh ref={ref}>
      <boxBufferGeometry />
    </mesh>
  )
}

const Plane: React.FC = () => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }))
  return (
    <mesh ref={ref}>
      <planeBufferGeometry args={[100, 100]} />
    </mesh>
  )
}

export const PysicsBox: React.FC = () => {
  return (
    <div style={{ height: "50vh" }}>
      <Canvas
      // camera={{ position: [0, 0, 10], near: 1, far: 20 }}
      >
        <OrbitController isControl={true} />
        <Physics>
          <Debug color="black" scale={1.1}>
            <Cube />
            <Plane />
          </Debug>
        </Physics>
      </Canvas>

    </div>
  )
}
