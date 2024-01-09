import React, { useState,useRef } from 'react'
import { Jobpost } from './Jobpost'
import { useBlogContext } from '../Context/BlogContext'


export const CurrentOpeningcard = ({ ref}) => {
    const {allJobs,getJobsDetail}=useBlogContext();
    const [open,setOpen]=useState(null);
    const applyNowRef = useRef(null);
     console.log('allJobs',allJobs);


     const scrollToApplyNow = (cardId) => {
        applyNowRef.current.scrollIntoView({ behavior: 'smooth' });
    
        // Toggle the state for the clicked card
        if (open === cardId) {
          setOpen(null); // Close the card if it's already open
        } else {
          setOpen(cardId); 
          getJobsDetail(cardId)
        }
      };

  return (
    <>
    <div className='containerleftrightmargin text-center  howmobileitworkmargintop' style={{paddingBottom:'8rem'}}>
       <h1 className='lefttitle mt-5 text-center mb-3'>Current Openings</h1>
       <p className='desktopboxdisplay mt-4 mb-4 ourstorypara'>Joining Local Tasker means more than just a new job it s an opportunity to be part of
<br/>a dynamic, ambitious, and caring team.</p>
        
        <div className='valueContainer pb-5'>
        {allJobs && Array.isArray(allJobs) && allJobs.map(({id,nane,type,first_price,second_price,location})=>{
            const isOpen = open === id;
            return(
                <div className='openingcard' key={id} onClick={() => scrollToApplyNow(id)}>
             <h2 className='mx-5'>{nane}</h2>
             {isOpen?<img src="/assets/_@2x.svg" id="cocimage"/>:<img src="/assets/_@2x-1.svg" id="cocimage"/>}
             <span>{type}</span>
             <p>{location}</p>
             <p style={{color:"#000"}}>£{first_price} £{second_price}+ equity</p>
         </div>
            )
        })}
        </div>
        <div ref={applyNowRef}>
        {open && <Jobpost  setOpen={() => setOpen(null)}/>}
        </div>
    </div>
    </>
  )
}
