import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

export const OurStory = ({title,subtitle,para,img1,img2,btnvalue,link}) => {
  return (
    <div className='container-fluid' style={{backgroundColor:"#EEF6FD"}}>
      <div className='containerleftrightmargin'>
        <div className='row despt' style={{marginTop:"5rem"}}>
            <div className='col'>
             <h1 className='ourstorytitle mt-3 mx-2'>{title}&nbsp;<span id="Journey">{subtitle}</span></h1>
             <div className="col-md-12 mt-5 mx-2"><p className='mt-4 mb-2 ourstorypara'>{para}</p></div>
<Link href={link}><button className='hirebtn mt-5 mx-2'>
{btnvalue}
</button></Link>
            </div>
            <div className='col m-4'>
               <div className='d-flex mt-4 largepole'> <div className='circle1'>
               <img src={img1} alt='' style={{borderRadius:'50%',width:'100%',height:'100%'}}/>
               </div>
                <div className='circle2'>
                <img src={img2} alt='' style={{borderRadius:'50%',width:'100%',height:'100%'}}/>
                </div></div>
            </div>
        </div>
      </div>
    </div>
  )
}
