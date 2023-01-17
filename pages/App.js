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
    // if(isLoggedIn){
    //   console.log("true its logg");
    //   fetch("http://localhost:8888/.netlify/functions/userData", {
    //     method: "POST",
    //     body: JSON.stringify({
    //       token: window.localStorage.getItem("token"),
    //     }),
    //   })
    //   .then((response) => {
    //     // *** Check for HTTP failure
    //     console.log(response)
    //     if (!response.ok) {
    //     throw new Error("HTTP status " + response.status);
    //     }
    //     // *** Read and parse the JSON                
    //     return response.json();
    //     })
    //     .then((res) => {
    //     // *** Use the object
    //     // this.setState({ userData: res.data });
    //     setIsLoggedIn(true)
    //     setUserData(res.data)
    //     })
    //     .catch((error) => {          
    //       console.log("error")
    //     });
    // }
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
