import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

export const CardLeft = ({title,para1,para2,btnvalue,img,link}) => {
  const router=useRouter();
  return (
    <div className='containerleftrightmargin desktopboxdisplay howmobileitworkmargintop' style={{paddingBottom:"7rem"}}>
    <div className='row mt-5'>
     <div className='col-md-6'>
        <h1 className='lefttitle'>{title}</h1>
        <p className='mt-5 ourstorypara'>{para1}</p>
        <p className='mt-5 ourstorypara'>{para2}</p>
<button className='hirebtn mx-1' onClick={()=>router.push({link})}>
{btnvalue}
</button>
     </div>
     <div className='col-md-6'>
     <div id="leftimageconor" className='mt-2 mb-2'>
     <div className='rect6'></div>
     <div className='rect5'>
     <img src={img} alt='leftimage' className='vhgimage'/>
     </div>
     </div> 
     </div>
    </div>
    </div>
  )
}