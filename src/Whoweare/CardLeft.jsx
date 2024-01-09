import React from 'react'
import Image from 'next/image'

export const CardLeft = () => {
  return (
    <div className='containerleftrightmargin howmobileitworkmargintop'>
    <div className='row mt-5 mb-5'>
     <div className='col-md-6'>
        <h1 className='lefttitle mx-4'>The Local Tasker Vision</h1>
        <p className='mt-4 ourstorypara mx-4'>At Local Tasker, we ve made it simple to connect those
who need services with those ready to provide. Our
platform is designed with you in mind, user-friendly,
intuitive, and seamless, helping you find the perfect
match for any task.</p>
<p className='mt-4 ourstorypara mx-4'>But we re about more than just connections. At the heart
of Local Tasker lies a commitment to an inclusive and
nurturing environment. We believe in the potential of
every individual who joins our platform, and we re here to
support you as you grow your business, take control of
your finances, and build a foundation for your future.
</p>
<p className='mt-4 ourstorypara mx-4'>
So come and join us. Experience the Local Tasker
difference and be part of our exciting journey.
</p>
     </div>
     <div className='col-md-6'>
     <div id="leftimageconor" className='mt-2 mb-2'>
     <div className='rect1'></div>
     <div className='rect2'>
     <img src='/vision.png' alt="rightbox" className='vhgimage'/>
     </div>
     </div> 
    </div>
    </div>
    </div>
  )
}
