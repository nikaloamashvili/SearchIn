import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import App from './App.js'

const inter = Inter({ subsets: ['latin'] })
// if (typeof window !== "undefined") {
//   if(window.localStorage.getItem("stay")!="on"){
//   window.onunload = () => {
//         localStorage.clear()
//     }
//   }
//   };


export default function Home() {
  return (
    <>
      <Head>
        <title>Search In</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1179564404814790"
     crossorigin="anonymous"></script>
        <link rel="icon" href="/icon.png" />
      </Head>
      <main className={styles.main}>
           {/* <a href='/SignIn'> Sign In</a>
           <a href='/SignUp'> Sign Up</a> */}
           <App/>
      </main>
    </>
  )
}
