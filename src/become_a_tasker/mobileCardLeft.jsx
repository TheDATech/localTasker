import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export const MobileCardLeft = () => {
  return (
    <div className='container mobiledisplay text-center' style={{marginTop:"8rem"}}>
    <h1 className='lefttitle pt-0 mb-5 mx-41 text-center'>Make Money<br/>Your Way</h1>
     <div className='col-md-12'>
     <div id="leftimageconor" className='mt-2 mb-2'>
     <div className='rect1'></div>
     <div className='rect2'>
     <img src="/makemoneyyourway.png" alt='leftimage' className='mobileimagewidth' style={{borderRadius:"1rem"}}/>
     </div>
     </div>
     </div>
     <div className='col-md-12'>
     <p className='ourstorypara mx-41 ab17 mb-4'>For just £19.99 a month, you can become a Local Tasker
and start growing your business. And for a limited time,
we re offering a special promotion: sign up now and get
your first month for free! We believe in providing
affordable and accessible opportunities for people to
start their own businesses.</p>
    <Link href="https://app.localtasker.co.uk/tasker-registration?type=1"><button className='hirebtn'>Get Started</button></Link>
     </div>
    </div>
  )
}
