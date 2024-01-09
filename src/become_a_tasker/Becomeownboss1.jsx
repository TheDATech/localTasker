import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export const Becomeownboss1 = () => {
  return (
    <div className="containerleftrightmargin text-center mb-5 howmobileitworkmargintop">
    <h1 className='lefttitle text-center'>Getting Started</h1> 
    <div className='col-md-9 mx-auto text-center'>
    <p className='mt-4 mb-4 valuesourparaafter'>From the small stuff to big projects, Local Tasker makes work easy so teams know
what to do, why it matters, and how to get it done, join our community today.</p> 
    </div>
     <div className='ownbossgrid'>
     <div className='ownbossCard'>
     <div className='yellowbgcircle yellowbgcirclemobile'>
     <img src="/assets/Sign up icon@2x.svg" alt="1" className="becomeyellowcirclemargin"/>
     </div>
               <p>Sign up</p>
               <span>Begin by joining Local Tasker and
downloading the Tasker app to
finalise your registration</span>
              </div>
     <div className='ownbossCard'>
     <div className='yellowbgcircle yellowbgcirclemobile'>
     <img src="/assets/Set up your profile icon@2x.svg" alt="2" className="becomeyellowcirclemargin"/>
     </div>
               <p style={{color:"#000"}}>Set up your profile</p>
               <span style={{color:"rgb(136 137 139)"}}>Select the services<br/>
you're offering and<br/>
define your work area</span>
              </div>
     <div className='ownbossCard'>
     <div className='yellowbgcircle yellowbgcirclemobile'>
     <img src="/assets/Verify eligibility icon@2x.svg" alt="3" className="becomeyellowcirclemargin"/>
     </div>
               <p style={{color:"#000"}}>Verify eligibility</p>
               <span style={{color:"rgb(136 137 139)"}}>By carefully reviewing your<br/>
information, we give future<br/>
clients the confidence to<br/>
choose you for their tasks</span>
              </div>
     <div className='ownbossCard'>
     <div className='yellowbgcircle yellowbgcirclemobile'>
     <img src="/assets/Start tasking icon@2x.svg" alt="4" className="becomeyellowcirclemargin"/>
     </div>
               <p style={{color:"#000"}}>Start tasking</p>
               <span style={{color:"rgb(136 137 139)"}}>Amplify your reach by selecting<br/>
your work schedule and skills.<br/>
Become the sought after local<br/>
Tasker everyone is looking for!</span>
              </div>
              </div>
              <Link href="https://app.localtasker.co.uk/tasker-registration?type=1"><button className='hirebtn'>Join Local Tasker</button></Link>
    </div>
  )
}
