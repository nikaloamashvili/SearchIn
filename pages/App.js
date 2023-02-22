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
  const [useDefault, setUseDefault] = useState(null);
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

    const handleToggle = () => {
      setUseDefault((prev) => {
        if (prev === null) {
          return true;
        } else if (prev === true) {
          return false;
        } else {
          return null;
        }
      });
    }



    const handleDrop = (e) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      setBgImage(URL.createObjectURL(file));
      localStorage.setItem("img",URL.createObjectURL(file));
      setUseDefault(false);
    }
    
    const onDragLeave = (e) => {
      e.target.classList.remove('dragover');
    }

    const onDragOver = (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'copy';
      e.target.classList.add('dragover');
    }

  return (
<div style={{
  height: '100vh',
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}}>

{useDefault === null ? ( <></>) : useDefault ? (
<select onChange={(e) => handleChangeBg(e.target.value)}>
      <option value="default_bg.jpg">White theme</option>
      <option value="image1.jpg">Purple theme</option>
      <option value="image2.jpg">Blue theme</option>
      <option value="yi.png">Yellow theme</option>
      <option value="pi.png">Pink theme</option>
      </select>
) : (
  <div
    style={{backgroundImage: `url(${bgImage})`}}
    onDrop={handleDrop}
    onDragOver={onDragOver}
    onDragLeave={onDragLeave}
    className="dropsize"
  >
      <p>Drag and Drop the Image here!</p>
  </div>
)}
     
      {!isLoggedIn && <BasicModal props={isLoggedIn}/>}
        <Navbar isLoggedIn={isLoggedIn}/>
        <Main isLoggedIn={isLoggedIn}/>
        <Footer fun={handleToggle} bText={useDefault}/>
    </div>
  )
}
