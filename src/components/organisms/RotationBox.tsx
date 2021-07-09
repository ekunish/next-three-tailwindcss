import { Canvas, useFrame } from '@react-three/fiber';
import React, { useState } from 'react'

const RotationBox: React.FC = () => {
  const myMesh = React.useRef();
  const [active, setActive] = useState(false)

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.x = a;
  });

  return (
    <mesh
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      ref={myMesh}
    >
      <boxBufferGeometry />
      <meshPhongMaterial color="royalblue" />
    </mesh>
  )
}

export default RotationBox;