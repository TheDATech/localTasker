import React from 'react'
import Image from 'next/image';

export const Becomeownboss = () => {
  return (
    <div className="containerleftrightmargin mb-5 howmobileitworkmargintop">
    <h1 className='lefttitle text-center'>Be your own boss</h1> 
      <div className='col-md-8 mx-auto'><p className='mt-4 mb-4 valuesourparaafter'>Take charge of your future and be your own boss. Together, we can explore
opportunities and empower you to achieve your entrepreneurial dreams</p></div>
     <div className='ownbossgrid'>
     <div className='ownbossCard'>
     <div className='yellowbgcircle yellowbgcirclemobile'>
     <img src="/assets/Communicate directly with clients icon@2x.svg" alt="1" className="becomeyellowcirclemargin"/>
     </div>
               <p style={{color:"#000"}}>Communicate directly with clients</p>
              </div>
     <div className='ownbossCard'>
     <div className='yellowbgcircle yellowbgcirclemobile'>
     <img src="/assets/Agree your own rates bg@2x.svg" alt="2" className="becomeyellowcirclemargin"/>
     </div>
               <p style={{color:"#000"}}>Agree your own rates</p>
              </div>
     <div className='ownbossCard'>
     <div className='yellowbgcircle yellowbgcirclemobile'>
       <img src="/assets/Grow your business icon@2x.svg" alt="3" className="becomeyellowcirclemargin"/>
     </div>
               <p style={{color:"#000"}}>Grow your business</p>
              </div>
     <div className='ownbossCard'>
     <div className='yellowbgcircle yellowbgcirclemobile'>
     <img src="/assets/Get reviewed and rated icon@2x.svg" alt="4" className="becomeyellowcirclemargin"/>
     </div>
               <p style={{color:"#000"}}>Get reviewed or rated</p>
              </div>
              </div>
    </div>
  )
}
