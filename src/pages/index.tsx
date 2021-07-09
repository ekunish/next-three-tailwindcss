import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import styles from '../styles/Home.module.css'
import RotationBox from '../components/organisms/RotationBox'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="bg-gray-800 mt-20">
        <div className="mx-auto text-center text-yellow-300">
          あいうお
        </div>
      </section>

      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <RotationBox />
        {/* <mesh>
          <octahedronGeometry />
          <meshNormalMaterial />
        </mesh> */}
      </Canvas>

    </>
  )
}

export default Home;