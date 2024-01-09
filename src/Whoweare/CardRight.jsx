import React from 'react'
import Image from 'next/image'

export const CardRight = () => {
  return (
    <div className='containerleftrightmargin howmobileitworkmargintop'>
    <div className='row mt-5 mb-5'>
     <div className='col-md-6'>
     <div id="leftimageconor" className='mt-2 mb-2'>
     <div className='rect3'></div>
     <div className='rect4'>
     <img src='/mission.png' alt="rightbox" className='vhgimage'/>
     </div>
     </div>
     </div>
     <div className='col-md-6'>
        <h1 className='lefttitle'>Our Mission</h1>
        <p className='mt-4 ourstorypara'>Local Tasker is creating a positive impact in the world
by empowering individuals from diverse backgrounds
to grow their businesses, showcase their skills, and
achieve financial independence.</p>
<p className='mt-4 ourstorypara'>Our platform connects service providers with those in
need, promoting a thriving community where talents
are recognised and appreciated. By fostering a
nurturing and inclusive environment, we enable people
to gain confidence in their abilities while receiving
mentorship and support to expand their businesses. 
</p>
<p className='mt-4 ourstorypara'>
This contributes to the creation of job opportunities,
stimulates local economies, and helps reduce
unemployment.
</p>
     </div>
    </div>
    </div>
  )
}
