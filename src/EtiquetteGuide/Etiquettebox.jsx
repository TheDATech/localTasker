import React, { useState } from 'react'

export const Etiquettebox = () => {
    const [faq,setFaq]=useState(true);
    const [faq1,setFaq1]=useState(false);
    const [faq2,setFaq2]=useState(false);
    const [faq3,setFaq3]=useState(false);
    const [faq5,setFaq5]=useState(false);
    const [faq6,setFaq6]=useState(false);
    const [faq7,setFaq7]=useState(false);
    const [faq8,setFaq8]=useState(false);
  return (
    <div className='containerleftrightmargin text-center mb-5 howmobileitworkmargintop howmobileitworkpaddingBottom'>
       <h1 className='lefttitle text-center'>Welcome to the Local Tasker</h1>
       <h1 className='lefttitle mb-5 text-center'>Etiquette Guide</h1>
       <div className='frequentmargin'>
       <div className={faq?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
         <div className='answerbox'><h4 className='answertitle mx-4'>Introduction</h4>{faq===true?<button className='plus mt-4 pb-4' onClick={()=>setFaq(false)}><img src='/assets/Section close icon.png' style={{broder:"1px solid #1171CA"}}/></button>:<button className='plus mt-4 pb-4' onClick={()=>setFaq(true)}><img src='/assets/Section open icon.png' style={{broder:"1px solid #1171CA"}}/></button>}</div>
         {faq &&  <p className="mx-4 mt-4 pb-4 faqpara">At Local Tasker, we believe in building strong and
enduring relationships between our taskers and
clients. This isn't achieved solely through the
completion of tasks, but also through the way we
interact, communicate, and respect each other.</p>}
       </div>
       <div className={faq1?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
         <div className='answerbox'><h4 className='answertitle mx-4'>Communicating with Clarity</h4>{faq1===true?<button className='plus mt-4 pb-4' onClick={()=>setFaq1(false)}><img src='/assets/Section close icon.png' style={{broder:"1px solid #1171CA"}}/></button>:<button className='plus mt-4 pb-4' onClick={()=>setFaq1(true)}><img src='/assets/Section open icon.png' style={{broder:"1px solid #1171CA"}}/></button>}</div>
         {faq1 &&  <p className="mx-4 mt-4 pb-4 faqpara">At Local Tasker, we believe in building strong and
enduring relationships between our taskers and
clients. This isn't achieved solely through the
completion of tasks, but also through the way we
interact, communicate, and respect each other.</p>}
       </div>
       <div className={faq2?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
         <div className='answerbox'><h4 className='answertitle  mx-4'>Safeguarding & Confidentiality</h4>{faq2===true?<button className='plus mt-4 pb-4' onClick={()=>setFaq2(false)}><img src='/assets/Section close icon.png' style={{broder:"1px solid #1171CA"}}/></button>:<button className='plus mt-4 pb-4' onClick={()=>setFaq2(true)}><img src='/assets/Section open icon.png' style={{broder:"1px solid #1171CA"}}/></button>}</div>
         {faq2 &&  <p className="mx-4 mt-4 pb-4 faqpara">At Local Tasker, we believe in building strong and
enduring relationships between our taskers and
clients. This isn't achieved solely through the
completion of tasks, but also through the way we
interact, communicate, and respect each other.</p>}
       </div>
       <div className={faq3?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
         <div className='answerbox'><h4 className='answertitle  mx-4'>Embodying Dependability</h4>{faq3===true?<button className='plus mt-4 pb-4' onClick={()=>setFaq3(false)}><img src='/assets/Section close icon.png' style={{broder:"1px solid #1171CA"}}/></button>:<button className='plus mt-4 pb-4' onClick={()=>setFaq3(true)}><img src='/assets/Section open icon.png' style={{broder:"1px solid #1171CA"}}/></button>}</div>
         {faq3 &&  <p className="mx-4 mt-4 pb-4 faqpara">At Local Tasker, we believe in building strong and
enduring relationships between our taskers and
clients. This isn't achieved solely through the
completion of tasks, but also through the way we
interact, communicate, and respect each other.</p>}
       </div>
       <div className={faq5?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
         <div className='answerbox'><h4 className='answertitle  mx-4'>The Professional Tasker</h4>{faq5===true?<button className='plus mt-4 pb-4' onClick={()=>setFaq5(false)}><img src='/assets/Section close icon.png' style={{broder:"1px solid #1171CA"}}/></button>:<button className='plus mt-4 pb-4' onClick={()=>setFaq5(true)}><img src='/assets/Section open icon.png' style={{broder:"1px solid #1171CA"}}/></button>}</div>
         {faq5 &&  <p className="mx-4 mt-4 pb-4 faqpara">At Local Tasker, we believe in building strong and
enduring relationships between our taskers and
clients. This isn't achieved solely through the
completion of tasks, but also through the way we
interact, communicate, and respect each other.</p>}
       </div>
       <div className={faq6?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
         <div className='answerbox'><h4 className='answertitle  mx-4'>Striving for Excellence</h4>{faq6===true?<button className='plus mt-4 pb-4' onClick={()=>setFaq6(false)}><img src='/assets/Section close icon.png' style={{broder:"1px solid #1171CA"}}/></button>:<button className='plus mt-4 pb-4' onClick={()=>setFaq6(true)}><img src='/assets/Section open icon.png' style={{broder:"1px solid #1171CA"}}/></button>}</div>
         {faq6 &&  <p className="mx-4 mt-4 pb-4 faqpara">At Local Tasker, we believe in building strong and
enduring relationships between our taskers and
clients. This isn't achieved solely through the
completion of tasks, but also through the way we
interact, communicate, and respect each other.</p>}
       </div>
       <div className={faq7?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
         <div className='answerbox'><h4 className='answertitle  mx-4'>Upholding Integrity</h4>{faq7===true?<button className='plus mt-4 pb-4' onClick={()=>setFaq7(false)}><img src='/assets/Section close icon.png' style={{broder:"1px solid #1171CA"}}/></button>:<button className='plus mt-4 pb-4' onClick={()=>setFaq7(true)}><img src='/assets/Section open icon.png' style={{broder:"1px solid #1171CA"}}/></button>}</div>
         {faq7 &&  <p className="mx-4 mt-4 pb-4 faqpara">At Local Tasker, we believe in building strong and
enduring relationships between our taskers and
clients. This isn't achieved solely through the
completion of tasks, but also through the way we
interact, communicate, and respect each other.</p>}
       </div>
       <div className={faq8?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
         <div className='answerbox'><h4 className='answertitle  mx-4'>Prioritising Safety</h4>{faq8===true?<button className='plus mt-4 pb-4' onClick={()=>setFaq8(false)}><img src='/assets/Section close icon.png' style={{broder:"1px solid #1171CA"}}/></button>:<button className='plus mt-4 pb-4' onClick={()=>setFaq8(true)}><img src='/assets/Section open icon.png' style={{broder:"1px solid #1171CA"}}/></button>}</div>
         {faq8 &&  <p className="mx-4 mt-4 pb-4 faqpara">At Local Tasker, we believe in building strong and
enduring relationships between our taskers and
clients. This isn't achieved solely through the
completion of tasks, but also through the way we
interact, communicate, and respect each other.</p>}
       </div>
       </div>       
    </div>
  )
}
