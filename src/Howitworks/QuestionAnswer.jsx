"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import {AiFillPlusCircle} from "react-icons/ai";


const QuestionAnswer = ({btnvalue}) => {
    const [showanswer,setShowanswer]=useState(true);
    const [showanswer1,setShowanswer1]=useState(false);
    const [showanswer2,setShowanswer2]=useState(false);
    const [showanswer3,setShowanswer3]=useState(false);
  return (
 <>
     <div className='containerleftrightmargin desktopboxdisplay howmobileitworkmargintop' style={{marginBottom:"6rem"}}>
    <div className='row mt-5' style={{paddingBottom:"12.5rem"}}>
     <div className='col-md-6'>
        <h1 className='lefttitle mt-5 mx-3'>Your Questions<br/>Answered</h1>
        <p className='mt-4 paracardleft mx-3'>We're an organization with a mission.Constantly<br/>striving to make the impossible possible,we bring<br/>about meaningful change in communities and<br/> empower those who need it most.</p>
<Link href={btnvalue}><button className='hirebtn mx-3'>
Read More
</button></Link>
     </div>
     <div className='col-md-6'>
     <div className='answerbox mt-5'>
        <h5 className='answertitle mb-4'>What is Local Tasker?</h5>{showanswer===true?<button className='plus mt-2' onClick={()=>setShowanswer(false)}><img src='/assets/Section close icon.png'  alt="mini" style={{borderRadius:"50%",broder:"1px solid #1171CA"}}/></button>:<button className='plus mt-2' onClick={()=>setShowanswer(true)}><img src='/assets/Section open icon.svg' alt="plus" style={{borderRadius:"50%",broder:"1px solid #1171CA"}}/></button>}</div>
        {showanswer && <p className='mx-1 mb-4 paracardleft'>LacalTasker is a platform that connects individuals<br/>and businesses with local service providers who can<br/>perform various tasks such as cleaning,<br/> handyman work, gardening, and more. It allows<br/>users to quickly and easily find reliable help for their<br/> everyday needs.</p>}
        <div className='answerbox'>
        <h5 className='answertitle mb-4'>What kind of taskers are on Local Tasker?</h5>{showanswer1===true?<button className='plus mt-2' onClick={()=>setShowanswer1(false)}><img src='/assets/Section close icon.png'  alt="mini" style={{borderRadius:"50%",broder:"1px solid #1171CA"}}/></button>:<button className='plus mt-2' onClick={()=>setShowanswer1(true)}><img src='/assets/Section open icon.svg' alt="plus" style={{borderRadius:"50%",broder:"1px solid #1171CA"}}/></button>}</div>
        {showanswer1 && <p className='mx-1 mb-4 paracardleft'>LacalTasker is a platform that connects individuals<br/>and businesses with local service providers who can<br/>perform various tasks such as cleaning,<br/> handyman work, gardening, and more. It allows<br/>users to quickly and easily find reliable help for their<br/> everyday needs.</p>}
        <div className='answerbox'>
        <h5 className='answertitle mb-4'>How much doees it cost?</h5>{showanswer2===true?<button className='plus mt-2' onClick={()=>setShowanswer2(false)}><img src='/assets/Section close icon.png'  alt="mini" style={{borderRadius:"50%",broder:"1px solid #1171CA"}}/></button>:<button className='plus mt-2' onClick={()=>setShowanswer2(true)}><img src='/assets/Section open icon.svg' alt="plus" style={{borderRadius:"50%",broder:"1px solid #1171CA"}}/></button>}</div>
        {showanswer2 && <p className='mx-1 mb-4 paracardleft'>LacalTasker is a platform that connects individuals<br/>and businesses with local service providers who can<br/>perform various tasks such as cleaning,<br/> handyman work, gardening, and more. It allows<br/>users to quickly and easily find reliable help for their<br/> everyday needs.</p>}
        <div className='answerbox'>
        <h5 className='answertitle mb-4'>Can i become a local Tasker?</h5>{showanswer3===true?<button className='plus mt-2' onClick={()=>setShowanswer3(false)}><img src='/assets/Section close icon.png'  alt="mini" style={{borderRadius:"50%",broder:"1px solid #1171CA"}}/></button>:<button className='plus mt-2' onClick={()=>setShowanswer3(true)}><img src='/assets/Section open icon.svg' alt="plus" style={{borderRadius:"50%",broder:"1px solid #1171CA"}}/></button>}</div>
        {showanswer3 && <p className='mx-1  mb-4 paracardleft'>LacalTasker is a platform that connects individuals<br/>and businesses with local service providers who can<br/>perform various tasks such as cleaning,<br/> handyman work, gardening, and more. It allows<br/>users to quickly and easily find reliable help for their<br/> everyday needs.</p>}
     </div>
    </div>
    </div>
    <div className='container mobiledisplay' style={{marginTop:"7.5rem",marginBottom:"2rem"}}>
    <h1 className='lefttitle text-center mt-2'>Your Questions<br/>Answered</h1>
    <p className='mt-4 ourstorypara mx-41'>We're an organization with a mission.Constantly striving to make the impossible possible,we bring about meaningful change in communities and empower those who need it most.</p>
    <div className='answerbox mt-4 mx-41'>
        <h5 className='answertitle'>What is Local Tasker?</h5>{showanswer===true?<button className='plus' onClick={()=>setShowanswer(false)}><img src='/assets/Section close icon.png'  alt="mini" style={{borderRadius:"50%",broder:"1px solid #1171CA"}}/></button>:<button className='plus' onClick={()=>setShowanswer(true)}><img src='/assets/Section open icon.png' alt="plus" style={{borderRadius:"50%",broder:"1px solid #1171CA"}}/></button>}</div>
        {showanswer && <p className='mt-2 ourstorypara mx-41'>LacalTasker is a platform that connects individuals and businesses with local service providers who can perform various tasks such as cleaning,handyman work,gardening,and more.It allows users to quickly and easily find reliable help for their everyday needs.</p>}
        <div className='answerbox mt-4 mx-41'>
        <h5 className='answertitle'>What kind of taskers are on Local Tasker?</h5>{showanswer1===true?<button className='plus' onClick={()=>setShowanswer1(false)}><img src='/assets/Section close icon.png'  alt="mini" style={{borderRadius:"50%",broder:"1px solid #1171CA"}}/></button>:<button className='plus' onClick={()=>setShowanswer1(true)}><img src='/assets/Section open icon.png' alt="plus" style={{borderRadius:"50%",broder:"1px solid #1171CA"}}/></button>}</div>
        {showanswer1 && <p className='mt-2 ourstorypara mx-41'>LacalTasker is a platform that connects individuals and businesses with local service providers who can perform various tasks such as cleaning,handyman work,gardening,and more.It allows users to quickly and easily find reliable help for their everyday needs.</p>}
        <div className='answerbox mt-4 mx-41'>
        <h5 className='answertitle'>How much doees it cost?</h5>{showanswer2===true?<button className='plus' onClick={()=>setShowanswer2(false)}><img src='/assets/Section close icon.png'  alt="mini" style={{borderRadius:"50%",broder:"1px solid #1171CA"}}/></button>:<button className='plus' onClick={()=>setShowanswer2(true)}><img src='/assets/Section open icon.png' alt="plus" style={{borderRadius:"50%",broder:"1px solid #1171CA"}}/></button>}</div>
        {showanswer2 && <p className='mt-2 ourstorypara mx-41'>LacalTasker is a platform that connects individuals and businesses with local service providers who can perform various tasks such as cleaning,handyman work,gardening,and more.It allows users to quickly and easily find reliable help for their everyday needs.</p>}
        <div className='answerbox mt-4 mx-41'>
        <h5 className='answertitle'>Can i become a local Tasker?</h5>{showanswer3===true?<button className='plus' onClick={()=>setShowanswer3(false)}><img src='/assets/Section close icon.png'  alt="mini" style={{borderRadius:"50%",broder:"1px solid #1171CA"}}/></button>:<button className='plus' onClick={()=>setShowanswer3(true)}><img src='/assets/Section open icon.png' alt="plus" style={{borderRadius:"50%",broder:"1px solid #1171CA"}}/></button>}</div>
        {showanswer3 && <p className='mt-2 ourstorypara mx-41'>LacalTasker is a platform that connects individuals and businesses with local service providers who can perform various tasks such as cleaning,handyman work,gardening,and more.It allows users to quickly and easily find reliable help for their everyday needs.</p>}
        <div className='text-center pb-5'>
        <Link href={btnvalue}><button className='hirebtn'>
      Read more
     </button></Link>
        </div>
     </div>
 </>
  )
}

export default QuestionAnswer