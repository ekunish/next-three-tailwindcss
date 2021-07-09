import Head from 'next/head'
import Image from 'next/image'
import { FC } from 'react'
import styles from '../styles/Home.module.css'

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        Hello, adam
      </>
    </>
  )
}

export default Home;