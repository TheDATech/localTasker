import React from 'react'
import Image from "next/image";

export const Faqtopbox = ({title,img1,img2,subtitle,para,img}) => {
  return (
    <>
    <div className='container-fluid desktopboxdisplay' style={{backgroundColor:"#EEF6FD"}}>
    <div className='containerleftrightmargin'>
      <div className='row despt' style={{marginTop:"5rem"}}>
          <div className='col'>
           <h1 className='ourstorytitle'>{title}<br/><span id="Journey">{subtitle}</span></h1>
           <p className='mt-5 ourstorypara'>{para}</p>
          </div>
          <div className='col m-4'>
             <div className='d-flex largepole'> <div className='circle1'>
              <img src={img1} alt="rightbox" style={{borderRadius:'50%',width:'100%',height:'100%'}}/>
             </div>
              <div className='circle2'>
              <img src={img2} alt="rightbox" style={{borderRadius:'50%',width:'100%',height:'100%'}}/>
              </div></div>
          </div>
      </div>
    </div>
  </div>
  <div className='container-fluid mobiledisplay' style={{backgroundImage:`url('/assets/Popular Categories bg@2x.svg')`}}>
    <div className='container'>
      <div className='row mx-41 pt-5 pb-5'>
         
          <div className='col mt-5 mb-5 pt-5'>
          <h1 className='ourstorytitle mb-4'>{title}<br/><span id="Journey">{subtitle}</span></h1>
          <img src={img} alt="faq" className='mobileimagewidth mobiletabelimge' style={{borderRadius:"25px"}}/>
           <p className='mt-5 ourstorypara mb-3'>{para}</p>
           <button className='hirebtn'>Read More</button>
          </div>
          </div>
      </div>
    </div>
</>
  )
}
