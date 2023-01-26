import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faGithub,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";

const inter = Inter({ subsets: ['latin'] })

export default function Footer() {
  return (
    <div className="tfooter">
    <p className="koko">
		Created with React by 
		<a target="_blank" className='link-f' href="https://www.linkedin.com/in/nika-lomashvili-software-developer/">Nika Lomashvili</a>
    Follow my Work : 
    </p>
    <div className="yFooter"  >
        <a href="https://github.com/nikaloamashvili"
        className="icon-f">
        <FontAwesomeIcon icon={faGithub} size="2x" color="black"  width={30} height={70}   />
        </a>
        <a href="https://www.linkedin.com/in/nika-lomashvili-software-developer/"
        className="icon-f">
        <FontAwesomeIcon icon={faLinkedin} size="2x" color="black"  width={30} height={70}   />
        </a>
        </div>
        
  </div>
  )
}
