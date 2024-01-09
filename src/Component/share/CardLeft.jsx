"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

export const CardLeft = ({title,para1,para2,btnvalue,img,link}) => {
  const router=useRouter();
  return (
    <div className='containerleftrightmargin desktopboxdisplay'>
    <div className='row mb-5 largeScreen' style={{marginTop:'18.5rem'}}>
     <div className='col-md-6 order-md-1 order-2'>
        <h1 className='howTitle mx-3'>{title}</h1>
        <p className='mt-5 mx-3 paracardleft'>{para1}</p>
<p className='mt-4 mx-3 paracardleft'>{para2}</p>
<button className='hirebtn mx-3' onClick={()=>router.push(link)}>
{btnvalue}
</button>
     </div>
     <div className='col-md-6 order-md-2 order-1'>
     <div id="leftimageconor" className='mt-2 mb-2'>
     <div className='rect1'></div>
     <div className='rect2'>
     <img src={img} alt='leftimage' className='vhgimage'/>
     </div>
     </div> 
     </div>
    </div>
    </div>
  )
}
