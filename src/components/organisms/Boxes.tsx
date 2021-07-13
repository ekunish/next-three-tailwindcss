import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import React, { useEffect, useMemo, useRef, useState } from 'react'

const tempObject = new THREE.Object3D()
const tempColor = new THREE.Color()

const Boxes: React.FC = () => {
  const [hovered, set] = useState()
  const meshRef = useRef<any>()
  const prevRef = useRef<any>()
  useEffect(() => void (prevRef.current = hovered), [hovered])
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    meshRef.current.rotation.x = Math.sin(time / 4)
    meshRef.current.rotation.y = Math.sin(time / 2)
    let i = 0
    for (let x = 0; x < 10; x++)
      for (let y = 0; y < 10; y++)
        for (let z = 0; z < 10; z++) {
          const id = i++
          tempObject.position.set(5 - x, 5 - y, 5 - z)
          tempObject.rotation.y = Math.sin(x / 4 + time) + Math.sin(y / 4 + time) + Math.sin(z / 4 + time)
          tempObject.rotation.z = tempObject.rotation.y * 2
          // if (hovered !== prevRef.Current) {
          //   tempColor.set('white').toArray()
          //   meshRef.current.geometry.attributes.color.needsUpdate = true
          // }
          const scale = id === hovered ? 2 : 1
          tempObject.scale.set(scale, scale, scale)
          tempObject.updateMatrix()
          meshRef.current.setMatrixAt(id, tempObject.matrix)
        }
    meshRef.current.instanceMatrix.needsUpdate = true
  })
  return (
    <instancedMesh ref={meshRef} args={[null, null, 1000]} onPointerOut={(e) => set(undefined)}>
      <boxGeometry args={[0.7, 0.7, 0.7]}>
        <instancedBufferAttribute attachObject={['attributes', 'color']} />
      </boxGeometry>
      <meshPhongMaterial vertexColors={THREE.VertexColors} />
    </instancedMesh>
  )
}

export default Boxes;