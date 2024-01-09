"use client"
import React from 'react'
import {AiFillCheckCircle} from "react-icons/ai";
import { useRouter } from 'next/router'
import Image from "next/image";

export const CardRight = () => {
  const router=useRouter();
  return (
 <>
     <div className='containerleftrightmargin desktopboxdisplay' style={{marginTop:"18.5rem"}}>
    <div className='row mt-5 mb-5'>
     <div className='col-md-6 order-md-1 order-2'>
     <div id="leftimageconor" className='mt-2 mb-2'>
     <div className='rect3'></div>
     <div className='rect4'>
     <img src='/Homepage/earnextracash.png' alt="earn" className='vhgimage heightlowdown'/>
     </div>
     </div>
    </div>
     <div className='col-md-6 order-md-1 order-2'>
        <h1 className='lefttitle mt-2 mx-1'>Looking To Earn Extra Cash?</h1>
        <p className='mt-4 mx-2 paracardleft'>Find local jobs that fit your skills and schedule! Be<br/>
your own boss and enjoy the freedom that comes<br/>
with it! Get the support you need from Local Tasker<br/>
whenever you need it.</p>
<ul className='right-cardul mt-4'>
    <li><AiFillCheckCircle style={{marginRight:"10px"}}/>Turn your passion into profits</li>
    <li><AiFillCheckCircle style={{marginRight:"10px"}}/>Keep 100% of your earnings</li>
    <li><AiFillCheckCircle style={{marginRight:"10px"}}/>Direct client communication</li>
    <li><AiFillCheckCircle style={{marginRight:"10px"}}/>Grow your business and client base</li>
</ul>
<button className='hirebtn mx-2' onClick={()=>router.push('/become_a_tasker')}>
Become a Tasker
</button>
     </div>
    </div>
    </div>
    <div className='container mobiledisplay' style={{marginTop:"5rem"}}>
    <div className='row mb-5'>
     <div className='col-md-12'>
        <h1 className='lefttitle text-center mx-3'>Looking To Earn Extra Cash?</h1>
        <div id="leftimageconor1" className='mt-5 mb-2'>
     <div className='rect3'></div>
     <div className='rect4' style={{top: '20px'}}>
     <img src='/Homepage/earnextracash.png' alt="earn" className='vhgimage' style={{borderRadius:"1rem"}}/>
     </div>
     </div>       
     </div>
     <div className='col-md-12'>
     <p className='mx-41 ab17' style={{color:"#858585",fontSize:'1.2rem'}}>Find local jobs that fit your skills and schedule! Be
your own boss and enjoy the freedom that comes
with it! Get the support you need from Local Tasker
whenever you need it.</p>
<ul className='right-cardul mt-4 mx-41'>
    <li><AiFillCheckCircle style={{marginRight:"5px"}}/>Turn your passion into profits</li>
    <li><AiFillCheckCircle style={{marginRight:"5px"}}/>Keep 100% of your earnings</li>
    <li><AiFillCheckCircle style={{marginRight:"5px"}}/>Direct client communication</li>
    <li><AiFillCheckCircle style={{marginRight:"5px"}}/>Grow your business and client base</li>
</ul>
<div className='text-center mt-3'>
<button className='hirebtn' onClick={()=>router.push('/become_a_tasker')}>
Become a Tasker
</button>
</div>
     </div>
    </div>
    </div>
 </>
  )
}
