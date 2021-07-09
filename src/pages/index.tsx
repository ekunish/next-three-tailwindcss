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

      <h1 className="mb-10 text-green-500 text-3xl">サンプル</h1>
      <p className="mb-2 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda blanditiis consequatur eius hic ipsam nostrum omnis optio! Doloribus quaerat quis ratione? At, maiores voluptas? Eveniet odio omnis repellendus sapiente voluptatibus.</p>
      <button className="btn-blue">Let's Start!!</button>
      <h1 className="text-4xl text-green-700 text-center font-semibold">
        Hello, adam
      </h1>
    </>
  )
}

export default Home;