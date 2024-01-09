import React from 'react'
import Image from "next/image";
import Link from 'next/link';

export const MobileOurstory = ({title,subtitle,para,btnvalue,img,link}) => {
  return (
    <div className='container-fluid mt-5 pb-4' style={{backgroundColor:"#EEF6FD"}}>
      <div className='row mx-41 pt-5'>
       <div className='col-md-12 pt-5'>
       <h1 className='ourstorytitle pt-5 mb-5'>{title}&nbsp;<span id="Journey">{subtitle}</span></h1>
      <img src={img} alt="imagestory" className='mobileimagewidth mobiletabelimge' style={{borderRadius:"25px"}}/>
       </div>
       <div className='col-md-12 pb-5'>
       <p className='ourstorypara mt-5'>{para}</p>
      <div className='pb-5 mt-4'><Link href={link}>
      <button className='hirebtn'>{btnvalue}</button>
      </Link>
       </div>
    </div>
      </div>
    </div>
  )
}
