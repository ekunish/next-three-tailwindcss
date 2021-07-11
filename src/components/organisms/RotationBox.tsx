import { Canvas, useFrame } from '@react-three/fiber';
import React, { useState } from 'react'

const RotationBox: React.FC = () => {
  const myMesh = React.useRef<any>();
  const [active, setActive] = useState(false)

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.x = a;
  });

  return (
    <mesh
      scale={active ? 3 : 1}
      onClick={() => setActive(!active)}
      ref={myMesh}
    >
      <boxBufferGeometry />
      <meshPhongMaterial />
    </mesh>
  )
}

export default RotationBox;