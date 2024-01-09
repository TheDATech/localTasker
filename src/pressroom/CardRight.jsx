import React from 'react'
import Image from "next/image";
import Link from 'next/link';

const CardRight = () => {
  return (
 <>
     <div className='containerleftrightmargin desktopboxdisplay howmobileitworkmargintop'>
    <div className='row mt-5 mb-5'>
    <div className='col-md-6'>
    <div id="leftimageconor" className='mt-2 mb-2'>
     <div className='rect3'></div>
     <div className='rect4'>
     <img src='/collabration.png' className='img-fluid vhgimage' alt="desktoppressroomright"/>
     </div>
     </div>
   </div>
     <div className='col-md-6'>
        <h1 className='lefttitle mt-2'>Local Tasker Collaboration</h1>
        <div id="parentrect" className='mt-2 mb-2'>
            <div className='rect11'></div>
            <div className='rect21'>
                <p className='mt-4 mx-3 paracardleft' style={{ color:'rgba(0, 0, 0, 0.79)'}}>At Local Tasker, we're more than just a platform,
we're a community, and we understand the
power of collaboration. We're eager to partner
with local taskers who bring innovation and
unique services to the table. Also, we're thrilled
to join forces with influencers who resonate
with their audience and align with our values.
Whether you're bursting with fresh ideas or
looking to amplify your reach in meaningful
ways, we invite you to join us in shaping the
future of local tasking.</p>
<p className='mt-4 mx-3 mb-5 paracardleft' style={{ color:'rgba(0, 0, 0, 0.79)'}}>Let's explore the possibilities and make a lasting
impact together.</p>
            </div>
        </div>
        <Link href='/Contact_us'><button className='hirebtn mx-0 conmt'>Contact Us</button></Link>
     </div>
        </div>
    </div>
    <div className='container mobiledisplay' style={{marginTop:"5rem"}}>
    <div className='row mt-5 mb-5'>
     <div className='col-md-12'>
        <h1 className='lefttitle mt-1 text-center mb-5 mx-41'>Local Tasker Collaboration</h1>
        <div id="leftimageconor1" className='mt-2 mb-2'>
     <div className='rect3'></div>
     <div className='rect4'>
     <img src='/collabration.png' className='vhgimage' alt="desktoppressroomright"/>
     </div>
     </div>
     </div>
     <div className='col-md-12 mt-5'>
     <div className='mx-41 mgjjf' style={{backgroundColor:"#f5f5f5",borderRadius:"2.5rem"}}>
     <p className='mx-1 p-3' style={{marginTop:"18rem",fontSize:'1.2rem',color:'#858585'}}>At Local Tasker, we're more than just a platform,
we're a community, and we understand the
power of collaboration. We're eager to partner
with local taskers who bring innovation and
unique services to the table. Also, we're thrilled
to join forces with influencers who resonate
with their audience and align with our values.
Whether you're bursting with fresh ideas or
looking to amplify your reach in meaningful
ways, we invite you to join us in shaping the
future of local tasking.</p>
<p className='mt-2 mx-1 mb-4 p-3' style={{fontSize:'1.2rem',color:'#858585'}}>Let's explore the possibilities and make a lasting
impact together.</p>
     </div>
        <div className='text-center mt-4'>
        <Link href="/Contact_us"><button className='hirebtn'>Contact Us</button></Link>
        </div>
        </div>
        </div>
    </div>
 </>
  )
}

export default CardRight