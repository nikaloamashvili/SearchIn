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
    // const [show, setShow] = useState(true);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
  
    // const ModalH=    
    // (<>
  
  
    //     <Modal
    //       show={show}
    //       onHide={handleClose}
    //       backdrop="static"
    //       keyboard={false}
    //     >
    //       <Modal.Header closeButton>
    //         <Modal.Title>Modal title</Modal.Title>
    //       </Modal.Header>
    //       <Modal.Body>
    //       Introducing "search in", the ultimate one-stop-shop for all your online searching needs. Say goodbye to endlessly hopping from site to site, trying to find what you're looking for. With "search in", you can add your favorite search engines to our platform and search them all with just one simple click of a button. Upgrade your searching game and give "search in" a try today!
    //       </Modal.Body>
    //       <Modal.Footer>
    //         <Button variant="secondary" onClick={handleClose}>
    //           Close
    //         </Button>
    //         <Button variant="primary">Understood</Button>
    //       </Modal.Footer>
    //     </Modal>
    //   </>)

  return (
    
    <div className='app'>
      {/* {ModalH} */}
      {!isLoggedIn && <BasicModal props={isLoggedIn}/>}
        <Navbar isLoggedIn={isLoggedIn}/>
        <Main isLoggedIn={isLoggedIn}/>
        <Footer/>
    </div>
  )
}
