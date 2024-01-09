"use client"
import React from 'react'
import Image from "next/image";
import { useRouter } from 'next/router'

export const MobileCardLeft = ({title,para1,para2,btnvalue,img,link}) => {
  const router=useRouter();
  return (
    <div className='container mobiledisplay' style={{marginTop:"1.5rem"}}>
    <div className='row mb-5'>
     <div className='col-md-12 mt-5'>
        <h1 className='lefttitle text-center'>{title}</h1>
        <div id="leftimageconor" className='mt-5 mb-2'>
     <div className='rect1'></div>
     <div className='rect2'>
     <img src={img} alt='leftimage' className='vhgimage' style={{borderRadius:"1rem",objectFit:'cover'}}/>
     </div>
     </div>
        <p className="mx-41 jjjj" style={{color:"#858585",fontSize:'1.2rem'}}>{para1}</p>
<p className='mt-4 mx-41' style={{color:"#858585",fontSize:'1.2rem'}}>{para2}</p>
<div className='text-center mt-3'><button className='hirebtn' onClick={()=>router.push(`/${link}`)}>
{btnvalue}
</button></div>
     </div>
    </div>
    </div>
  )
}
