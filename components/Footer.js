import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";
  import {
    faImage,
  } from "@fortawesome/free-solid-svg-icons";
const inter = Inter({ subsets: ['latin'] })

export default function Footer(props) {
  return (
    <div className="tfooter">
      {/* <div className="ad-class">
     <GoogleAds slot="2434444" />
</div> */}
<div className='koko'>
    <p>
		Created with React by 
		<a target="_blank" className='link-f' href="https://nikalomashvili.netlify.app/">Nika Lomashvili</a>
    Follow my Work : 
    </p></div>
    <div className="yFooter"  >
        <a href="https://github.com/nikaloamashvili"
        className="icon-f">
        <FontAwesomeIcon icon={faGithub} size="2x" color="black"  width={20} height={15}   />
        </a>
        <a href="https://www.linkedin.com/in/nika-lomashvili-software-developer/"
        className="icon-f1">
        <FontAwesomeIcon icon={faLinkedin} size="2x" color="black"  width={20} height={15}   />
        </a>
        <FontAwesomeIcon icon={faImage} size="2x" color= "#00aced"  width={30} height={30} className="addbimage" title="Change theme" onClick={()=>props.fun()}/>
        </div>
    
        
  </div>
  )
}
