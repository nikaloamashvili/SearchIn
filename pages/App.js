import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar.js'
import Main from '../components/Main.js'
import Footer from '../components/Footer'
import React, { useEffect, useState } from "react";
import BasicModal from '../components/BasicModal'
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

const inter = Inter({ subsets: ['latin'] })

export default function App()  {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [theme,setTheme]=useState(false);


  const [bgImage, setBgImage] = useState('default_bg.jpg');



  const handleChangeBg = (newImage) => {
    setBgImage(newImage);
    localStorage.setItem("img",newImage);

  }

  if (typeof window !== "undefined") {
    useEffect(() => {setIsLoggedIn(localStorage.getItem("loggedIn"))
    setBgImage(localStorage.getItem("img"));
  }, [])
    }

    function showTheme(){
      setTheme(x=>{return !x})
      
    }
  
  return (
<div style={{
  height: '100vh',
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}}>

      {theme && <select onChange={(e) => handleChangeBg(e.target.value)}>
      <option value="default_bg.jpg">White theme</option>
      <option value="image1.jpg">Purple theme</option>
      <option value="image2.jpg">Blue theme</option>
      <option value="yi.png">Yellow theme</option>
      <option value="pi.png">Pink theme</option>

      </select>}

      {!isLoggedIn && <BasicModal props={isLoggedIn}/>}

        <Navbar isLoggedIn={isLoggedIn}/>
        <Main isLoggedIn={isLoggedIn}/>
        <Footer fun={showTheme}/>
    </div>
  )
}
