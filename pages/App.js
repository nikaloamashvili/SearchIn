import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar.js'
import Main from '../components/Main.js'
import Footer from '../components/Footer'
import React, { useEffect, useState } from "react";

const inter = Inter({ subsets: ['latin'] })

export default function App()  {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData,setUserData]=useState({});

  if (typeof window !== "undefined") {
    useEffect(() => {setIsLoggedIn(localStorage.getItem("loggedIn"))
    if(isLoggedIn){
      fetch("http://localhost:5000/userData", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          token: window.localStorage.getItem("token"),
        }),
      })
        .then((res) => res.json())
        .then((data) => {

          setUserData( data.data );
        }).catch(console.log("eror"));
    }
  
  
  }, [])




    }


  return (
    <div>
        <Navbar isLoggedIn={isLoggedIn}/>
        <Main isLoggedIn={isLoggedIn}/>
        <Footer/>
    </div>
  )
}
