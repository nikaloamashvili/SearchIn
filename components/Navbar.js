import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useEffect, useState } from 'react'
import UserDetails from './UserDetails'
import applogo from "./components-images/lego2.png"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
const inter = Inter({ subsets: ['latin'] })

export default function Navbar(props) {

  function logOut(){
    localStorage.clear();
    location.href = "./";
  }

  return (
    <div className='navbar'>
        <Image className="navbar-image" src={applogo} width={400} height={200}/>
        {
          props.isLoggedIn?
        <>
        <UserDetails/>
        <button  className="btn-nav" onClick={logOut}>
          Sign Out
        </button>
        </>
        :
        <>

        <Popup trigger={<button className='navbar-help'><span className='link-s'>?</span></button>} position="right top">
            <div>Introducing "search in", the ultimate one-stop-shop for all your online searching needs. Say goodbye to endlessly hopping from site to site, trying to find what you're looking for. With "search in", you can add your favorite search engines to our platform and search them all with just one simple click of a button. Upgrade your searching game and give "search in" a try today!</div>
        </Popup>
        <buttom className='navbar-signin'><a href='/SignIn' className='link-s'> Sign In</a></buttom>
        <buttom className='navbar-signin'><a href='/SignUp' className='link-s'> Sign Up</a></buttom>


          
        </>
        }
    </div>
  )
}

