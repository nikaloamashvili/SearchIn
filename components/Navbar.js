

// export default function Navbar(props) {



//   return (
//     <div className='navbar'>
//         <Image className="navbar-image" src={applogo} />
//         {
//           props.isLoggedIn?

//         <>
//         <UserDetails/>
//         <button  className="btn-nav" onClick={changePass}>
//           Change Password
//         </button>
//         <button  className="btn-nav" onClick={logOut}>
//           Sign Out
//         </button>
//         </>

//         :

//         <>
//         <Popup trigger={<button className='navbar-signin'><span className='link-s'>?</span></button>} position="right top">
//             <div>Introducing "search in", the ultimate one-stop-shop for all your online searching needs. Say goodbye to endlessly hopping from site to site, trying to find what you're looking for. With "search in", you can add your favorite search engines to our platform and search them all with just one simple click of a button. Upgrade your searching game and give "search in" a try today!</div>
//         </Popup>
//         <button className='navbar-signin'><a href='/SignIn' className='link-s'> Sign In</a></button>
//         <button className='navbar-signin'><a href='/SignUp' className='link-s'> Sign Up</a></button>
//         </>

//         }
//     </div>
//   )
// }


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

  function changePass(){
    location.href = "./ChangePass";
  }
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  console.log(isNavExpanded);
  return (
    <nav className="navigation">
      {/* <a href="/" className="brand-name">
        Nika Lomashvili
      </a> */}
      <Image className="navbar-image" src={applogo} width="140" height={70} />

      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from Heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
           {props.isLoggedIn?

         <ul>

          <li className="nav-li"><UserDetails/></li>
         <li className="nav-li">
              <button onClick={changePass} className="nav-link" >Change Password</button>
          </li>

          <li className="nav-li">
              <button onClick={logOut} className="nav-link" > Sign Out</button>
          </li>
         </ul>

         :

         <ul>
         <li className="nav-li">
              <button className="nav-link"><a className='link-s'  href="/SignIn">Sign In</a></button>
          </li>

          <li className="nav-li">
             <button className="nav-link"><a className='link-s'  href="/SignUp">Sign Up</a></button>
          </li>


         </ul>}
      </div>
    </nav>
  );
}


    




