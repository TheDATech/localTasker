import React, { useState } from 'react'

const sections = [
  "Introduction","The Local Tasker Platform Connects Taskers and Clients","User Background Checks and User Representations and Warranties User Background Checks","Contract between Clients and Taskers","Billing and Payment","Contests, Gift Cards, and Promotional Codes","Public Areas; Acceptable Use","Mobile App Updates and Upgrades","Deactivation and Suspension","Account, Password,Security, and Telephone Communications","User Generated Content","Links to Third Party Websites","Local Tasker Operates as an Online Marketplace","Local Tasker Verified Pledge","Intellectual Property Rights","Copyright Complaints and Copyright Agent","Confidential Information","Disclaimer of Warranties","Indemnification","Dispute Resolution","App Store Sourced Apps","No Agency; No Employment","General Provisions","Licensing","Changes to this Agreement and the Local Tasker Platform","No Rights of Third Parties","Notices and Consent to Receive Notices Electronically","Consent to Electronic Signatures","Jurisdiction specific Provisions, including Dispute Resolution"
];

export const MainContent = () => {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <div className='containerleftrightmargin mb-5 howmobileitworkmargintop'>
    <div className='desktopboxdisplay'>
    <div className='row'>
        <div className='col-4'>
           <ol className='mt-3'>
           {sections.map((section, index) => (
              <li
                key={index}
                className={activeSection === index ? 'termsli__active' : 'termsli'}
                onClick={() => setActiveSection(index)}
              >
                {section}
              </li>
            ))} 
           </ol>
        </div>
       <div className='col-8'>
            <h1 className='lefttitle mx-3'>{sections[activeSection]}</h1>
            <p className='termspara'>These Terms of Service constitute a legally binding agreement between you
and Local Tasker UK LTD. (“Local Tasker”) governing your use of the Local
Tasker Platform. Local Tasker’s websites (including www.LocalTasker.co.uk,
(the “Sites”), mobile applications (the “Apps”), and related services,
information and communications are collectively referred to as the “Local
Tasker Platform.”</p>
<p className='termspara'>The use of all personal data you submit to the Local Tasker Platform or which
we collect about you is governed by our Privacy Policy (“Privacy Policy”). A
copy of our Privacy Policy is available here. You acknowledge that by using
the Local Tasker Platform you have reviewed the Privacy Policy.</p>
<p className='termspara'>Your consent at registration and continued use of the Local Tasker Platform
constitutes your acceptance of and agreement to all of the terms and
conditions in these Terms of Service, the Privacy Policy, and the Local Tasker
Happiness Pledge (the “Verified Pledge”) for the country in which the Task is
performed, as well as any future amendments and additions to this
Agreement (as defined below) as we may publish from time to time. If any
future changes to this Agreement are unacceptable to you or cause you to
no longer be in compliance with this Agreement, you must deactivate your
account, and immediately stop using the Local Tasker Platform.</p>
<p className='termspara'>The Privacy Policy and the Verified Pledge for the country in which the Task is
performed are incorporated by reference into these Terms of Service and
together form and are hereinafter referred to as the “Agreement”.</p>
<p className='termspara'>IF YOU DO NOT AGREE TO BE BOUND BY THIS AGREEMENT AND ABIDE BY ITS
TERMS, YOU MAY NOT USE OR ACCESS THE LOCAL TASKER PLATFORM.</p>
<p className='termspara'>BY ACKNOWLEDGING THE TERMS OF SERVICE AND/OR USING THE LOCAL TASKER
PLATFORM, YOU EXPRESSLY ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTAND
AND AGREE, WITHOUT LIMITATION OR QUALIFICATION, TO BE BOUND BY THIS
AGREEMENT THE DISPUTE RESOLUTION AND ARBITRATION AGREEMENT) AND YOU
ACCEPT ALL OF ITS TERMS.</p>
<p className='termspara'>Your use of the Local Tasker Platform in a country other than the country in
which you register constitutes your acceptance of and agreement to all of
the terms and conditions in the Agreement for that country.</p>
<h6 className='mt-3 mb-3 mx-3' style={{color:"gray",fontWeight:"800",fontSize:"2rem"}}>A few highlights of these Terms of Service include:</h6>
<ul style={{listStyle:"inside",color:"rgb(123, 127, 131)",fontSize: '2rem'}}>
    <li>You must be at least the legally required age in the jurisdiction in which
you reside and otherwise capable of entering into binding contracts, in order
to use or access the Local Tasker Platform (Section 2).</li>
<li>Your agreement that the technology for the Local Tasker Platform is
provided “as is” and without warranty (Section 17).</li>
<li>Your agreement that Local Tasker provides no warranty and has no liability
regarding User action on the Local Tasker Platform or the performance of
Tasks (Section 17).</li>
<li>Your acknowledgment and agreement that Local Tasker does not
supervise, scope, direct, control, or monitor a Tasker’s work and the Tasks
performed (Section 1).</li>
<li>Your acknowledgement and agreement that Clients are solely responsible
for determining if the Tasker they hire is qualified to perform the Task
(Sections 1 and 23).</li>
<li>Your acknowledgement and agreement that Taskers are independent
contractors of Clients and not employees, independent contractors or
service providers of Local Tasker (Section 1).</li>
<li>Your agreement to hold harmless and indemnify Local Tasker from claims
due to your use or inability to use the Local Tasker Platform or content
submitted from your account to the Local Tasker Platform (Section 18).</li>
</ul>
<div className='text-center mb-5'>
<button className='hirebtn'>Read More</button>
</div>
        </div>
     
      </div>
    </div>
      <div className='mobiledisplay' style={{marginTop:'0rem'}}>
      <div className='row px-1 mx-41'>
        <h1 className='answertitle text-center mb-5' style={{fontSize:"36px !important",fontWeight:'600'}}>Privacy Policy</h1>
         <h2 className='answertitle' style={{fontSize:"18px !important",fontWeight:'700'}}>1. Introduction</h2>
         <p className='termspara'>These Terms of Service constitute a legally binding
agreement between you and Local Tasker UK LTD.
(“Local Tasker”) governing your use of the Local Tasker
Platform. Local Tasker’s websites (including
www.LocalTasker.co.uk,(the “Sites”), mobile applications
(the “Apps”), and related services, information and
communications are collectively referred to as the
“Local Tasker Platform.”</p>
<p className='termspara'>The use of all personal data you submit to the Local Tasker Platform or which
we collect about you is governed by our Privacy Policy (“Privacy Policy”). A
copy of our Privacy Policy is available here. You acknowledge that by using
the Local Tasker Platform you have reviewed the Privacy Policy.</p>
<p className='termspara'>Your consent at registration and continued use of the Local Tasker Platform
constitutes your acceptance of and agreement to all of the terms and
conditions in these Terms of Service, the Privacy Policy, and the Local Tasker
Happiness Pledge (the “Verified Pledge”) for the country in which the Task is
performed, as well as any future amendments and additions to this
Agreement (as defined below) as we may publish from time to time. If any
future changes to this Agreement are unacceptable to you or cause you to
no longer be in compliance with this Agreement, you must deactivate your
account, and immediately stop using the Local Tasker Platform.</p>
<p className='termspara'>The Privacy Policy and the Verified Pledge for the country in which the Task is
performed are incorporated by reference into these Terms of Service and
together form and are hereinafter referred to as the “Agreement”.</p>
<p className='termspara'>IF YOU DO NOT AGREE TO BE BOUND BY THIS AGREEMENT AND ABIDE BY ITS
TERMS, YOU MAY NOT USE OR ACCESS THE LOCAL TASKER PLATFORM.</p>
<p className='termspara'>BY ACKNOWLEDGING THE TERMS OF SERVICE AND/OR USING THE LOCAL TASKER
PLATFORM, YOU EXPRESSLY ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTAND
AND AGREE, WITHOUT LIMITATION OR QUALIFICATION, TO BE BOUND BY THIS
AGREEMENT THE DISPUTE RESOLUTION AND ARBITRATION AGREEMENT) AND YOU
ACCEPT ALL OF ITS TERMS.</p>
<p className='termspara'>Your use of the Local Tasker Platform in a country other than the country in
which you register constitutes your acceptance of and agreement to all of
the terms and conditions in the Agreement for that country.</p>
<h6 className='mt-3 mb-3 mx-1' style={{color:"gray",fontWeight:"800"}}>A few highlights of these Terms of Service include:</h6>
<ul className='mx-2' style={{listStyle:"inside",fontSize:"12px",color: "rgb(123, 127, 131)"}}>
    <li>You must be at least the legally required age in the jurisdiction in which
you reside and otherwise capable of entering into binding contracts, in order
to use or access the Local Tasker Platform (Section 2).</li>
<li>Your agreement that the technology for the Local Tasker Platform is
provided “as is” and without warranty (Section 17).</li>
<li>Your agreement that Local Tasker provides no warranty and has no liability
regarding User action on the Local Tasker Platform or the performance of
Tasks (Section 17).</li>
<li>Your acknowledgment and agreement that Local Tasker does not
supervise, scope, direct, control, or monitor a Tasker’s work and the Tasks
performed (Section 1).</li>
<li>Your acknowledgement and agreement that Clients are solely responsible
for determining if the Tasker they hire is qualified to perform the Task
(Sections 1 and 23).</li>
<li>Your acknowledgement and agreement that Taskers are independent
contractors of Clients and not employees, independent contractors or
service providers of Local Tasker (Section 1).</li>
<li>Your agreement to hold harmless and indemnify Local Tasker from claims
due to your use or inability to use the Local Tasker Platform or content
submitted from your account to the Local Tasker Platform (Section 18).</li>
</ul>
<h3 className='answertitle' style={{fontSize:"18px !important",fontWeight:'700'}}>2. The Local Tasker Platform
Connects Taskers and Clients</h3>
<p className='termspara'>Stay up to date with the dynamic world of Local Tasker
as we bring you the latest news and media coverage.
Discover how our community of taskers is
revolutionising productivity and empowering individuals
to achieve more.</p>
<p className='termspara'>Whether youre a journalist, a blogger, or simply curious
about what we re doing, we re here to provide the</p>
      </div>
      </div>
   
    </div>
  )
}
