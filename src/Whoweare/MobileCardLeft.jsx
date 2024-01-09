import React from 'react'
import Image from 'next/image'

export const MobileCardLeft = ({title,para1,para2,para3,img}) => {
  return (
    <div className='container-md mobiledisplay' style={{marginTop:"8rem"}}>
      <div className='row mb-5'>
     <div className='col-md-12 mt-5'>
     <h1 className='lefttitle pt-1 text-center mb-4 mx-41'>{title}</h1>
      <div id="leftimageconor1" className='mt-2 mb-2'>
     <div className='rect3'></div>
     <div className='rect4' style={{top: '2rem'}}>
     <img src={img} className='mobileimagewidth' alt="left" style={{borderRadius:"1rem"}}/>
     </div>
     </div> 
      <p className='ourstorypara mx-41 ab17'>{para1}</p>
      <p className='ourstorypara mt-4 mx-41'>{para2}</p>
      <p className='ourstorypara mt-4 mx-41'>{para3}</p>
      </div>
     </div>
      </div>
  )
}
