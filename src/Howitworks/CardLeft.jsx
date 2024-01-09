import React from 'react'
import Image from "next/image";
import Link from 'next/link';
export const CardLeft = () => {
  return (
    <>
      <div className='containerleftrightmargin desktopboxdisplay' style={{marginTop:"6.5rem"}}>
    <div className='row largeScreen mb-5' style={{marginTop:'6rem'}}>
     <div className='col-md-6'>
        <h1 className='lefttitle mt-5 mx-3'>Why Local Tasker?</h1>
        <p className='mt-5 mx-3 paracardleft'>We're not just a platform, but a thriving community. We're all about making life easier across the UK, one task at a time. But it's not just about ticking off chores from your to-do list - it's about creating opportunities, empowering diverse individuals, and nurturing talent.</p>
<Link href="/Whoweare"><button className='hirebtn mx-3'>
Read More
</button></Link>
     </div>
     <div className='col-md-6'>
      <Image src="/assets/Group494.jpg" alt='mobilepic' className='vhgimage1' style={{left:"14rem !important"}} width={550} height={550}/></div>
    </div>
    </div>
      <div className='container mobiledisplay text-center' style={{marginTop:"2rem"}}>
      <div className='col-md-12 mx-41'>
      <h1 className='lefttitle pt-1 mb-2 text-center mb-5'>Why Local Tasker?</h1>
        <Image src="/assets/Group494.jpg" alt='mobilepic' className='mt-1 mb-2' width={300} height={400} style={{objectFit:"contain"}}/>
      </div>
      <div className='col-md-12 mx-41'>
      <p className='ourstorypara mt-5'>We're not just a platform, but a thriving community.
We're all about making life easier across the UK, one
task at a time. But it's not just about ticking off chores
from your to do list it's about creating opportunities,
empowering diverse individuals, and nurturing talent.</p>
      <Link href='https://app.localtasker.co.uk/register?type=1'><button className='hirebtn'>Get Started</button></Link>
      </div>
      </div>
    </>
  
  )
}
