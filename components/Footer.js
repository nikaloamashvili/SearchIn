import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";

const inter = Inter({ subsets: ['latin'] })

export default function Footer() {
  return (
    <div className="tfooter">
    <p className="koko">
		Created with React by 
		<a target="_blank" className='link-f' href="https://www.linkedin.com/in/nika-lomashvili-software-developer/">Nika Lomashvili</a>
    Follow me : 
    </p>
    <div className="yFooter"  >
        <a href="https://twitter.com/geekbota/" className="icon-f">
        <FontAwesomeIcon icon={faTwitter} size="2x" color= "#00aced"  width={30} height={70}   />
      </a>
      <a href="https://www.instagram.com/nikanplomashvili/"
        className="icon-f">
        <FontAwesomeIcon icon={faInstagram} size="2x" color="#bc2a8d"   width={30} height={70} />
      </a>
      <a href="https://www.facebook.com/nika.lomashvili/"
       className="icon-f">
        <FontAwesomeIcon icon={faFacebook} size="2x"  color="#3b5998" width={30} height={70} />
        </a>
        <a href="https://github.com/nikaloamashvili"
        className="icon-f">
        <FontAwesomeIcon icon={faGithub} size="2x" color="black"  width={30} height={70}   />
        </a>
        </div>
  </div>
  )
}
