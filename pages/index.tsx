import Head from 'next/head'
import { Inter } from 'next/font/google'
import Protect from './protect'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Prtoect Yourself Online</title>
      </Head>
      <main>
        <Protect/>
      </main>
    </>
  )
}
