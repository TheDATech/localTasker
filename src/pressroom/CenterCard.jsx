import React from 'react';
import Link from 'next/link';

const CenterCard = () => {
  return (
    <div className='container text-center howmobileitworkmargintop howmobileitworkpaddingBottom'>
        <h1 className='lefttitle desktopboxdisplay'>Local Tasker Media Kit</h1>
        <h1 className='lefttitle mx-41 text-center mobiledisplay'>Local Tasker<br/> Media Kit</h1>
        <p className='mt-4 paracardleft desktopboxdisplay' style={{ color:'rgb(123 127 131)'}}>Our media kit includes high-resolution images, company logos, executive 
           <br/>bios, and fact sheets that can be used for media purposes. 
           <br/>Please feel free to use these resources in your coverage of Local Tasker.</p>
           <p className='mobiledisplay  mx-41 mt-4' style={{textAlign:"left",color:'#858585',fontSize:'12px'}}>Our media kit includes high-resolution images,
company logos, executive bios, and fact sheets that can
be used for media purposes. Please feel free to use
these resources in your coverage of Local Tasker.</p>
<Link href='/Contact_us'><button className='hirebtn'>Browse Press Kit</button></Link>
    </div>
  )
}

export default CenterCard