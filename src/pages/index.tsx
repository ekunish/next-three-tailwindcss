import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import styles from '../styles/Home.module.css'
import RotationBox from '../components/organisms/RotationBox'
import Boxes from '../components/organisms/Boxes'
import { OrbitController } from '../components/atoms/OrbitController'
import { PysicsBox } from '../components/organisms/PysicsBox'


const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="bg-gray-800 mt-20">
        <div className="mx-auto text-center text-yellow-300">
          あいうえおかきくけこ
        </div>
      </section>


      <PysicsBox />

      <div style={{ height: "50vh" }}>
        <Canvas
          camera={{ position: [0, 0, 10], near: 1, far: 20 }}
        >
          <OrbitController isControl={true} />
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 3]} />
          <RotationBox />
        </Canvas>
      </div>
    </>
  )
}

export default Home;