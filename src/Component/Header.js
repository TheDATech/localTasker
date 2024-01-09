import React, { useState } from 'react'
import Link from 'next/link';
import {AiOutlineMenu} from "react-icons/ai";
import { useRouter } from 'next/router'
import ScrollLink from './ScrollLink';

export const Header = () => {
    const [mobileMenu,setMobileMenu]=useState(false);
    const [isOpen, setIsOpen] = useState(true);

    
  const closeSidebar = () => {
    setIsOpen(false);
  };
    const router=useRouter();
    const trogglebtn=()=>{
        if(mobileMenu===false){
          setMobileMenu(true);
        }else{
          setMobileMenu(false);
        }
       }

       const isBlogPath = router.pathname === `/blogs/[slug]` || router.pathname === '/Blog';

  return (
    <>
    <nav className='nav-container'>
        <div>{isBlogPath?<Link href='/'><a><img src="/assets/LogoBlog.png" alt='logo.png' id='blogidlogoblogs'/></a></Link>:<Link href='/'><a><img src="/assets/Logo.png" alt='logo.png' id="logodes"/></a></Link>}</div>
        <ul className='nav-ul'>
          {router.pathname === '/'|| router.pathname === '/Howitwork'?<><li>{router.pathname==='/Howitwork'?<Link href="https://app.localtasker.co.uk/search"><a>Services</a></Link>:<ScrollLink to="#popular-categories">Services</ScrollLink>}</li>
        <li><ScrollLink to="#how-it-works">How it works</ScrollLink></li></>:<><li><Link href="https://app.localtasker.co.uk/search"><a>Services</a></Link></li>
        <li><Link href="/Howitwork"><a>How it works</a></Link></li></>}
        <li><Link href='https://app.localtasker.co.uk/login-option'><a style={{color:"#1171ca !important"}}>Sign Up</a></Link> / <Link href='https://app.localtasker.co.uk/login-option'><a style={{color:"#1171ca !important"}}>Login</a></Link></li>
        <button className='nav_btn mt-1' onClick={()=>router.push('/become_a_tasker')}>Become A Tasker</button>
        </ul>
    </nav>
    <nav className='nav-mobile-container'>
    <div className='nav-inner-box'>
      <button className='nav-menu-icon' onClick={trogglebtn}>
      <svg xmlns="http://www.w3.org/2000/svg" width="41" height="22" viewBox="0 0 41 22" fill="none">
<path d="M2 20H39" stroke="black" strokeWidth="3" strokeLinecap="round"/>
<path d="M2 11H39" stroke="black" strokeWidth="3" strokeLinecap="round"/>
<path d="M2 2H39" stroke="black" strokeWidth="3" strokeLinecap="round"/>
</svg>
    </button>
    
    <div>{isBlogPath?<Link href='/'><a><img src="/assets/Blogheader.JPG" alt='logo.png' id='blogidlogoblogs'/></a></Link>:<Link href='/'><a><img src="/assets/Logo.svg" alt='logo.png' id='blogidlogo'/></a></Link>}</div>
    </div>
    </nav>
    {mobileMenu && <ul className='nav-mobile-ul'>
        <button className='nav-closebtn' onClick={()=>setMobileMenu(false)}>X</button>
        {router.pathname === '/'|| router.pathname === '/Howitwork'?<><li>{router.pathname==='/Howitwork'?<Link href="https://app.localtasker.co.uk/search"><a>Services</a></Link>:<ScrollLink to="#popular-categories">Services</ScrollLink>}</li>
        <li><ScrollLink to="#how-it-works">How it works</ScrollLink></li></>:<><li><Link href="https://app.localtasker.co.uk/search"><a>Services</a></Link></li>
        <li><Link href="/Howitwork"><a>How it works</a></Link></li></>}
        <li><Link href='https://app.localtasker.co.uk/login-option'>Signup</Link>/<Link href='https://app.localtasker.co.uk/login-option'>Login</Link></li>
       <Link href='/become_a_tasker'><button className='nav-mobile-btn mb-3'>Become A Tasker</button></Link>
    </ul>}
    </>
  
  )
}
