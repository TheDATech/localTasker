import React, { useState } from 'react'
import Link from 'next/link';

export const Communitybox = () => {
    const [faq,setFaq]=useState(true);
    const [faq1,setFaq1]=useState(false);
    const [faq2,setFaq2]=useState(false);
    const [faq3,setFaq3]=useState(false);
    const [faq5,setFaq5]=useState(false);
    const [faq6,setFaq6]=useState(false);
    const [faq7,setFaq7]=useState(false);
    const [faq8,setFaq8]=useState(false);
    const [faq9,setFaq9]=useState(false);
    const [faq10,setFaq10]=useState(false);
    const [faq11,setFaq11]=useState(false);
    const [faq12,setFaq12]=useState(false);
    const [faq4,setFaq4]=useState(false);
    const [tab, setTab] = useState('Tab 1');

    const tabshow = (value) => {
      if (tab === value) {
        setTab(null);
      } else {
        setTab(value);
      }
    };

  return (
    <div className='containerleftrightmargin text-center mb-5 howmobileitworkmargintop howmobileitworkpaddingBottom'>
    <h1 className='lefttitle text-center mx-41'>Welcome to the Local Tasker</h1>
    <h1 className='lefttitle text-center mx-41'>Community Guidelines!</h1>
     <div className='frequentmargin mt-4 '>
      <div className="d-flex mb-5" id="commtabbtnd">
      <button className={tab === 'Tab 1' ? 'client' : 'client1 mx-2'}
  onClick={() => tabshow('Tab 1')}>Clients</button>
      <button className={tab === 'Tab 2' ? 'client' : 'client1 mx-2'}
  onClick={() => tabshow('Tab 2')}>Local Tasker</button>
      </div>
      {tab === 'Tab 1' && (<>
        <div className={faq?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
      <div className='answerbox mx-41'><h4 className='answertitle answertitlemargin mx-4'>Introduction</h4>{faq===true?<button className='plus mt-2' onClick={()=>setFaq(false)}><img src='/assets/Section close icon.png' style={{broder:"1px solid #1171CA"}}/></button>:<button className='plus mt-2' onClick={()=>setFaq(true)}><img src='/assets/Section open icon.png' style={{broder:"1px solid #1171CA"}}/></button>}</div>
      {faq &&  <p className="mx-4 mt-4 faqpara pb-4">Welcome to Local Tasker, where skilled individuals
are ready to assist you with your various needs. As a
client, we invite you to understand our community
guidelines to ensure smooth and successful task
completion. These guidelines will help you navigate
your journey within our platform effectively.</p>}
    </div>
    <div className={faq1?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
      <div className='answerbox mx-41'><h4 className='answertitle answertitlemargin mx-4'>Articulating your task concisely</h4>{faq1===true?<button className='plus mt-2' onClick={()=>setFaq1(false)}><img src='/assets/Section close icon.png' style={{broder:"1px solid #1171CA"}}/></button>:<button className='plus mt-2' onClick={()=>setFaq1(true)}><img src='/assets/Section open icon.png' style={{broder:"1px solid #1171CA"}}/></button>}</div>
      {faq1 &&  <p className="mx-4 mt-4 pb-4 faqpara">Welcome to Local Tasker, where skilled individuals
are ready to assist you with your various needs. As a
client, we invite you to understand our community
guidelines to ensure smooth and successful task
completion. These guidelines will help you navigate
your journey within our platform effectively.</p>}
    </div>
    <div className={faq2?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
      <div className='answerbox mx-41'><h4 className='answertitle answertitlemargin mx-4'>Reviewing the Tasker s Profile Thoroughly</h4>{faq2===true?<button className='plus mt-2' onClick={()=>setFaq2(false)}><img src='/assets/Section close icon.png' style={{broder:"1px solid #1171CA"}}/></button>:<button className='plus mt-2' onClick={()=>setFaq2(true)}><img src='/assets/Section open icon.png' style={{broder:"1px solid #1171CA"}}/></button>}</div>
      {faq2 &&  <p className="mx-4 mt-4 pb-4 faqpara">Welcome to Local Tasker, where skilled individuals
are ready to assist you with your various needs. As a
client, we invite you to understand our community
guidelines to ensure smooth and successful task
completion. These guidelines will help you navigate
your journey within our platform effectively.</p>}
    </div>
    <div className={faq3?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
      <div className='answerbox mx-41'><h4 className='answertitle answertitlemargin mx-4' >Maintaining Clear and Open Communication</h4>{faq3===true?<button className='plus mt-2' onClick={()=>setFaq3(false)}><img src='/assets/Section close icon.png' style={{broder:"1px solid #1171CA"}}/></button>:<button className='plus mt-2' onClick={()=>setFaq3(true)}><img src='/assets/Section open icon.png' style={{broder:"1px solid #1171CA"}}/></button>}</div>
      {faq3 &&  <p className="mx-4 mt-4 pb-4 faqpara">Welcome to Local Tasker, where skilled individuals
are ready to assist you with your various needs. As a
client, we invite you to understand our community
guidelines to ensure smooth and successful task
completion. These guidelines will help you navigate
your journey within our platform effectively.</p>}
    </div>
    <div className={faq5?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
      <div className='answerbox mx-41'><h4 className='answertitle answertitlemargin mx-4' >Furnishing Necessary Information and Resources</h4>{faq5===true?<button className='plus mt-2' onClick={()=>setFaq5(false)}><img src='/assets/Section close icon.png' style={{broder:"1px solid #1171CA"}}/></button>:<button className='plus mt-2' onClick={()=>setFaq5(true)}><img src='/assets/Section open icon.png' style={{broder:"1px solid #1171CA"}}/></button>}</div>
      {faq5 &&  <p className="mx-4 mt-4 pb-4 faqpara">Welcome to Local Tasker, where skilled individuals
are ready to assist you with your various needs. As a
client, we invite you to understand our community
guidelines to ensure smooth and successful task
completion. These guidelines will help you navigate
your journey within our platform effectively.</p>}
    </div>
    <div className={faq6?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
      <div className='answerbox mx-41'><h4 className='answertitle answertitlemargin mx-4' >Upholding Respect and Professionalism</h4>{faq6===true?<button className='plus mt-2' onClick={()=>setFaq6(false)}><img src='/assets/Section close icon.png' style={{broder:"1px solid #1171CA"}}/></button>:<button className='plus mt-2' onClick={()=>setFaq6(true)}><img src='/assets/Section open icon.png' style={{broder:"1px solid #1171CA"}}/></button>}</div>
      {faq6 &&  <p className="mx-4 mt-4 pb-4 faqpara">Welcome to Local Tasker, where skilled individuals
are ready to assist you with your various needs. As a
client, we invite you to understand our community
guidelines to ensure smooth and successful task
completion. These guidelines will help you navigate
your journey within our platform effectively.</p>}
    </div>
    <div className={faq7?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
      <div className='answerbox mx-41'><h4 className='answertitle answertitlemargin mx-4' >Ensuring Timely Payment</h4>{faq7===true?<button className='plus mt-2' onClick={()=>setFaq7(false)}><img src='/assets/Section close icon.png' style={{broder:"1px solid #1171CA"}}/></button>:<button className='plus mt-2' onClick={()=>setFaq7(true)}><img src='/assets/Section open icon.png' style={{broder:"1px solid #1171CA"}}/></button>}</div>
      {faq7 &&  <p className="mx-4 mt-4 pb-4 faqpara">Welcome to Local Tasker, where skilled individuals
are ready to assist you with your various needs. As a
client, we invite you to understand our community
guidelines to ensure smooth and successful task
completion. These guidelines will help you navigate
your journey within our platform effectively.</p>}
    </div>
    <div className={faq8?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
      <div className='answerbox mx-41'><h4 className='answertitle answertitlemargin mx-4' >Guaranteeing a Safe Work Environment</h4>{faq8===true?<button className='plus mt-2' onClick={()=>setFaq8(false)}><img src='/assets/Section close icon.png' style={{broder:"1px solid #1171CA"}}/></button>:<button className='plus mt-2' onClick={()=>setFaq8(true)}><img src='/assets/Section open icon.png' style={{broder:"1px solid #1171CA"}}/></button>}</div>
      {faq8 &&  <p className="mx-4 mt-4 pb-4 faqpara">Welcome to Local Tasker, where skilled individuals
are ready to assist you with your various needs. As a
client, we invite you to understand our community
guidelines to ensure smooth and successful task
completion. These guidelines will help you navigate
your journey within our platform effectively.</p>}
    </div>
    <div className={faq9?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
      <div className='answerbox mx-41'><h4 className='answertitle answertitlemargin mx-4' >Exercising Flexibility</h4>{faq9===true?<button className='plus mt-2' onClick={()=>setFaq9(false)}><img src='/assets/Section close icon.png' style={{broder:"1px solid #1171CA"}}/></button>:<button className='plus mt-2' onClick={()=>setFaq9(true)}><img src='/assets/Section open icon.png' style={{broder:"1px solid #1171CA"}}/></button>}</div>
      {faq9 &&  <p className="mx-4 mt-4 pb-4 faqpara">Welcome to Local Tasker, where skilled individuals
are ready to assist you with your various needs. As a
client, we invite you to understand our community
guidelines to ensure smooth and successful task
completion. These guidelines will help you navigate
your journey within our platform effectively.</p>}
    </div>
    <div className={faq10?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
      <div className='answerbox mx-41'><h4 className='answertitle answertitlemargin mx-4' >Respecting Tasker s Time</h4>{faq10===true?<button className='plus mt-2' onClick={()=>setFaq10(false)}><img src='/assets/Section close icon.png' style={{broder:"1px solid #1171CA"}}/></button>:<button className='plus mt-2' onClick={()=>setFaq10(true)}><img src='/assets/Section open icon.png' style={{broder:"1px solid #1171CA"}}/></button>}</div>
      {faq10 &&  <p className="mx-4 mt-4 pb-4 faqpara">Welcome to Local Tasker, where skilled individuals
are ready to assist you with your various needs. As a
client, we invite you to understand our community
guidelines to ensure smooth and successful task
completion. These guidelines will help you navigate
your journey within our platform effectively.</p>}
    </div>
    <div className={faq11?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
      <div className='answerbox mx-41'><h4 className='answertitle answertitlemargin mx-4' >Providing Reviews and Ratings</h4>{faq11===true?<button className='plus mt-2' onClick={()=>setFaq11(false)}><img src='/assets/Section close icon.png' style={{broder:"1px solid #1171CA"}}/></button>:<button className='plus mt-2' onClick={()=>setFaq11(true)}><img src='/assets/Section open icon.png' style={{broder:"1px solid #1171CA"}}/></button>}</div>
      {faq11 &&  <p className="mx-4 mt-4 pb-4 faqpara">Welcome to Local Tasker, where skilled individuals
are ready to assist you with your various needs. As a
client, we invite you to understand our community
guidelines to ensure smooth and successful task
completion. These guidelines will help you navigate
your journey within our platform effectively.</p>}
    </div>
    <div className={faq12?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
      <div className='answerbox mx-41'><h4 className='answertitle answertitlemargin mx-4' >Reporting Any Issues Promptly</h4>{faq12===true?<button className='plus mt-2' onClick={()=>setFaq12(false)}><img src='/assets/Section close icon.png' style={{broder:"1px solid #1171CA"}}/></button>:<button className='plus mt-2' onClick={()=>setFaq12(true)}><img src='/assets/Section open icon.png' style={{broder:"1px solid #1171CA"}}/></button>}</div>
      {faq12 &&  <p className="mx-4 mt-4 pb-4 faqpara">Welcome to Local Tasker, where skilled individuals
are ready to assist you with your various needs. As a
client, we invite you to understand our community
guidelines to ensure smooth and successful task
completion. These guidelines will help you navigate
your journey within our platform effectively.</p>}
    </div>
    <div className={faq4?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
      <div className='answerbox mx-41'><h4 className='answertitle answertitlemargin mx-4' >Giving a Tip</h4>{faq4===true?<button className='plus mt-2' onClick={()=>setFaq4(false)}><img src='/assets/Section close icon.png' style={{broder:"1px solid #1171CA"}}/></button>:<button className='plus mt-2' onClick={()=>setFaq4(true)}><img src='/assets/Section open icon.png' style={{broder:"1px solid #1171CA"}}/></button>}</div>
      {faq4 &&  <p className="mx-4 mt-4 pb-4 faqpara">Welcome to Local Tasker, where skilled individuals
are ready to assist you with your various needs. As a
client, we invite you to understand our community
guidelines to ensure smooth and successful task
completion. These guidelines will help you navigate
your journey within our platform effectively.</p>}
    </div>
      </>)}
      {tab === 'Tab 2' && (<>
        <div className={faq?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
      <div className='answerbox mx-41'><h4 className='answertitle answertitlemargin mx-4'>Introduction</h4>{faq===true?<button className='plus mt-2' onClick={()=>setFaq(false)}><img src='/assets/Section close icon.png' style={{broder:"1px solid #1171CA"}}/></button>:<button className='plus mt-2' onClick={()=>setFaq(true)}><img src='/assets/Section open icon.png' style={{broder:"1px solid #1171CA"}}/></button>}</div>
      {faq &&  <p className="mx-4 mt-4 pb-4 faqpara">Welcome to Local Tasker, where skilled individuals
are ready to assist you with your various needs. As a
client, we invite you to understand our community
guidelines to ensure smooth and successful task
completion. These guidelines will help you navigate
your journey within our platform effectively.</p>}
    </div>
    <div className={faq1?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
      <div className='answerbox mx-41'><h4 className='answertitle answertitlemargin mx-4'>Articulating your task concisely</h4>{faq1===true?<button className='plus mt-2' onClick={()=>setFaq1(false)}><img src='/assets/Section close icon.png' style={{broder:"1px solid #1171CA"}}/></button>:<button className='plus mt-2' onClick={()=>setFaq1(true)}><img src='/assets/Section open icon.png' style={{broder:"1px solid #1171CA"}}/></button>}</div>
      {faq1 &&  <p className="mx-4 mt-4 pb-4 faqpara">Welcome to Local Tasker, where skilled individuals
are ready to assist you with your various needs. As a
client, we invite you to understand our community
guidelines to ensure smooth and successful task
completion. These guidelines will help you navigate
your journey within our platform effectively.</p>}
    </div>
    <div className={faq2?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
      <div className='answerbox mx-41'><h4 className='answertitle answertitlemargin mx-4'>Reviewing the Tasker s Profile Thoroughly</h4>{faq2===true?<button className='plus mt-2' onClick={()=>setFaq2(false)}><img src='/assets/Section close icon.png' style={{broder:"1px solid #1171CA"}}/></button>:<button className='plus mt-2' onClick={()=>setFaq2(true)}><img src='/assets/Section open icon.png' style={{broder:"1px solid #1171CA"}}/></button>}</div>
      {faq2 &&  <p className="mx-4 mt-4 pb-4 faqpara">Welcome to Local Tasker, where skilled individuals
are ready to assist you with your various needs. As a
client, we invite you to understand our community
guidelines to ensure smooth and successful task
completion. These guidelines will help you navigate
your journey within our platform effectively.</p>}
    </div>
    <div className={faq3?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
      <div className='answerbox mx-41'><h4 className='answertitle answertitlemargin mx-4' >Maintaining Clear and Open Communication</h4>{faq3===true?<button className='plus mt-2' onClick={()=>setFaq3(false)}><img src='/assets/Section close icon.png' style={{broder:"1px solid #1171CA"}}/></button>:<button className='plus mt-2' onClick={()=>setFaq3(true)}><img src='/assets/Section open icon.png' style={{broder:"1px solid #1171CA"}}/></button>}</div>
      {faq3 &&  <p className="mx-4 mt-4 pb-4 faqpara">Welcome to Local Tasker, where skilled individuals
are ready to assist you with your various needs. As a
client, we invite you to understand our community
guidelines to ensure smooth and successful task
completion. These guidelines will help you navigate
your journey within our platform effectively.</p>}
    </div>
    <div className={faq5?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
      <div className='answerbox mx-41'><h4 className='answertitle answertitlemargin mx-4' >Furnishing Necessary Information and Resources</h4>{faq5===true?<button className='plus mt-2' onClick={()=>setFaq5(false)}><img src='/assets/Section close icon.png' style={{broder:"1px solid #1171CA"}}/></button>:<button className='plus mt-2' onClick={()=>setFaq5(true)}><img src='/assets/Section open icon.png' style={{broder:"1px solid #1171CA"}}/></button>}</div>
      {faq5 &&  <p className="mx-4 mt-4 pb-4 faqpara">Welcome to Local Tasker, where skilled individuals
are ready to assist you with your various needs. As a
client, we invite you to understand our community
guidelines to ensure smooth and successful task
completion. These guidelines will help you navigate
your journey within our platform effectively.</p>}
    </div>
    <div className={faq6?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
      <div className='answerbox mx-41'><h4 className='answertitle answertitlemargin mx-4' >Upholding Respect and Professionalism</h4>{faq6===true?<button className='plus mt-2' onClick={()=>setFaq6(false)}><img src='/assets/Section close icon.png' style={{broder:"1px solid #1171CA"}}/></button>:<button className='plus mt-2' onClick={()=>setFaq6(true)}><img src='/assets/Section open icon.png' style={{broder:"1px solid #1171CA"}}/></button>}</div>
      {faq6 &&  <p className="mx-4 mt-4 pb-4 faqpara">Welcome to Local Tasker, where skilled individuals
are ready to assist you with your various needs. As a
client, we invite you to understand our community
guidelines to ensure smooth and successful task
completion. These guidelines will help you navigate
your journey within our platform effectively.</p>}
    </div>
    <div className={faq7?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
      <div className='answerbox mx-41'><h4 className='answertitle answertitlemargin mx-4' >Ensuring Timely Payment</h4>{faq7===true?<button className='plus mt-2' onClick={()=>setFaq7(false)}><img src='/assets/Section close icon.png' style={{broder:"1px solid #1171CA"}}/></button>:<button className='plus mt-2' onClick={()=>setFaq7(true)}><img src='/assets/Section open icon.png' style={{broder:"1px solid #1171CA"}}/></button>}</div>
      {faq7 &&  <p className="mx-4 mt-4 pb-4 faqpara">Welcome to Local Tasker, where skilled individuals
are ready to assist you with your various needs. As a
client, we invite you to understand our community
guidelines to ensure smooth and successful task
completion. These guidelines will help you navigate
your journey within our platform effectively.</p>}
    </div>
    <div className={faq8?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
      <div className='answerbox mx-41'><h4 className='answertitle answertitlemargin mx-4' >Guaranteeing a Safe Work Environment</h4>{faq8===true?<button className='plus mt-2' onClick={()=>setFaq8(false)}><img src='/assets/Section close icon.png' style={{broder:"1px solid #1171CA"}}/></button>:<button className='plus mt-2' onClick={()=>setFaq8(true)}><img src='/assets/Section open icon.png' style={{broder:"1px solid #1171CA"}}/></button>}</div>
      {faq8 &&  <p className="mx-4 mt-4 pb-4 faqpara">Welcome to Local Tasker, where skilled individuals
are ready to assist you with your various needs. As a
client, we invite you to understand our community
guidelines to ensure smooth and successful task
completion. These guidelines will help you navigate
your journey within our platform effectively.</p>}
    </div>
    <div className={faq9?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
      <div className='answerbox mx-41'><h4 className='answertitle answertitlemargin mx-4' >Exercising Flexibility</h4>{faq9===true?<button className='plus mt-2' onClick={()=>setFaq9(false)}><img src='/assets/Section close icon.png' style={{broder:"1px solid #1171CA"}}/></button>:<button className='plus mt-2' onClick={()=>setFaq9(true)}><img src='/assets/Section open icon.png' style={{broder:"1px solid #1171CA"}}/></button>}</div>
      {faq9 &&  <p className="mx-4 mt-4 pb-4 faqpara">Welcome to Local Tasker, where skilled individuals
are ready to assist you with your various needs. As a
client, we invite you to understand our community
guidelines to ensure smooth and successful task
completion. These guidelines will help you navigate
your journey within our platform effectively.</p>}
    </div>
    <div className={faq10?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
      <div className='answerbox mx-41'><h4 className='answertitle answertitlemargin mx-4' >Respecting Tasker s Time</h4>{faq10===true?<button className='plus mt-2' onClick={()=>setFaq10(false)}><img src='/assets/Section close icon.png' style={{broder:"1px solid #1171CA"}}/></button>:<button className='plus mt-2' onClick={()=>setFaq10(true)}><img src='/assets/Section open icon.png' style={{broder:"1px solid #1171CA"}}/></button>}</div>
      {faq10 &&  <p className="mx-4 mt-4 pb-4 faqpara">Welcome to Local Tasker, where skilled individuals
are ready to assist you with your various needs. As a
client, we invite you to understand our community
guidelines to ensure smooth and successful task
completion. These guidelines will help you navigate
your journey within our platform effectively.</p>}
    </div>
    <div className={faq11?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
      <div className='answerbox mx-41'><h4 className='answertitle answertitlemargin mx-4' >Providing Reviews and Ratings</h4>{faq11===true?<button className='plus mt-2' onClick={()=>setFaq11(false)}><img src='/assets/Section close icon.png' style={{broder:"1px solid #1171CA"}}/></button>:<button className='plus mt-2' onClick={()=>setFaq11(true)}><img src='/assets/Section open icon.png' style={{broder:"1px solid #1171CA"}}/></button>}</div>
      {faq11 &&  <p className="mx-4 mt-4 pb-4 faqpara">Welcome to Local Tasker, where skilled individuals
are ready to assist you with your various needs. As a
client, we invite you to understand our community
guidelines to ensure smooth and successful task
completion. These guidelines will help you navigate
your journey within our platform effectively.</p>}
    </div>
    <div className={faq12?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
      <div className='answerbox mx-41'><h4 className='answertitle answertitlemargin mx-4' >Reporting Any Issues Promptly</h4>{faq12===true?<button className='plus mt-2' onClick={()=>setFaq12(false)}><img src='/assets/Section close icon.png' style={{broder:"1px solid #1171CA"}}/></button>:<button className='plus mt-2' onClick={()=>setFaq12(true)}><img src='/assets/Section open icon.png' style={{broder:"1px solid #1171CA"}}/></button>}</div>
      {faq12 &&  <p className="mx-4 mt-4 pb-4 faqpara">Welcome to Local Tasker, where skilled individuals
are ready to assist you with your various needs. As a
client, we invite you to understand our community
guidelines to ensure smooth and successful task
completion. These guidelines will help you navigate
your journey within our platform effectively.</p>}
    </div>
    <div className={faq4?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
      <div className='answerbox mx-41'><h4 className='answertitle answertitlemargin mx-4' >Giving a Tip</h4>{faq4===true?<button className='plus mt-2' onClick={()=>setFaq4(false)}><img src='/assets/Section close icon.png' style={{broder:"1px solid #1171CA"}}/></button>:<button className='plus mt-2' onClick={()=>setFaq4(true)}><img src='/assets/Section open icon.png' style={{broder:"1px solid #1171CA"}}/></button>}</div>
      {faq4 &&  <p className="mx-4 mt-4 pb-4 faqpara">Welcome to Local Tasker, where skilled individuals
are ready to assist you with your various needs. As a
client, we invite you to understand our community
guidelines to ensure smooth and successful task
completion. These guidelines will help you navigate
your journey within our platform effectively.</p>}
    </div>
      </>)}
     </div>
 </div>
  )
}
