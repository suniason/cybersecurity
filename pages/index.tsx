import Head from 'next/head'
import { Inter } from 'next/font/google'
import Protect from './protect'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Head>
        <title>Online Safety</title>
        {/* <link rel="icon" href="/security.png" /> */}
      </Head>
      <div>
        <Protect/>
      </div>
    </>
  )
}
