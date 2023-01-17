import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useEffect, useState } from 'react'
import UserDetails from './UserDetails'
import applogo from "./components-images/lego2.png"

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
        <buttom className='navbar-signin'><a href='/SignIn' className='link-s'> Sign In</a></buttom>
        <buttom className='navbar-signin'><a href='/SignUp' className='link-s'> Sign Up</a></buttom>

          
        </>
        }
    </div>
  )
}
