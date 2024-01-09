import React,{useRef} from 'react'
import { CardLeft } from '../become_a_tasker/CardLeft'
import Image from 'next/image'
import { CardRight } from './CardRight';
import { CurrentOpeningcard } from './CurrentOpeningcard';
import { Subcribe } from '../Component/share/Subcribe';
import { MobileOurstory } from '../Component/share/mobileOurstory';
import { MobileCardLeft } from '../Whoweare/MobileCardLeft';
import { MobileSubcribe } from '../Component/share/mobileSubcribe';



const Career = () => {
  const applyNowRef = useRef(null);

  const scrollToApplyNow = () => {
    applyNowRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <main>
     <div className='desktopboxdisplay'>
     <div className='container-fluid' style={{backgroundColor:"#EEF6FD"}}>
      <div className='containerleftrightmargin'>
        <div className='row despt'  style={{marginTop:"5rem"}}>
            <div className='col mt-5 mb-5'>
             <h1 className='ourstorytitle'>Empower Your&nbsp;<span id="Journey">Career with Us</span></h1>
             <div className="col-md-12"><p className='mt-4 mb-2 ourstorypara'>Empower people to supercharge their
productivity by becoming part of the growing
team at Local Tasker</p></div>
<button className='hirebtn mt-4' onClick={scrollToApplyNow}>
View Opportunities
</button>
            </div>
            <div className='col m-5'>
               <div className='d-flex'> <div className='circle1'>
               <img src='/circle1career.png' alt='' style={{borderRadius:'50%',width:'100%',height:'100%'}}/>
               </div>
                <div className='circle2'>
                <img src='/bigcirclecareer.png' alt='' style={{borderRadius:'50%',width:'100%',height:'100%'}}/>
                </div></div>
            </div>
        </div>
      </div>
    </div>
     </div>
     <div className='mobiledisplay'>
      <MobileOurstory title="Empower Your" subtitle="Career with Us" para="Empower people to supercharge their productivity by
becoming part of the growing team at Local Tasker" btnvalue="Hire a Tasker" img="/assets/careermobile.JPG" link='https://admin.localtasker.co.uk/register?type=2'/>
    </div>
    <div className='desktopboxdisplay' style={{marginTop:"12rem"}}>
    <CardLeft title="Are you mission driven!" para1="At Local Tasker, we re more than just a company we re a
community. We connect individuals in need of services
with those who have the skills to help. Our mission is to
simplify everyday tasks for people all over the UK, and we
are always on the lookout for talented and dedicated
individuals to join our team." para2="Joining Local Tasker means becoming a part of a
dynamic community that values collaboration,
innovation, and most importantly, the satisfaction of our
customers. If you have a passion for service, a
commitment to excellence, and a desire to support local
communities, we would love to hear from you." btnvalue="View Opportunities" img="/whyLT.png"/>
    </div>
    <MobileCardLeft title="Are you mission driven!" para1="At Local Tasker, we re more than just a company - we re
a community. We connect individuals in need of
services with those who have the skills to help. Our
mission is to simplify everyday tasks for people all over
the UK, and we are always on the lookout for talented
and dedicated individuals to join our team." para2="Joining Local Tasker means becoming a part of a
dynamic community that values collaboration,
innovation, and most importantly, the satisfaction of our
customers. If you have a passion for service, a
commitment to excellence, and a desire to support local
communities, we would love to hear from you." para3="" img="/whyLT.png"/>
    <CardRight/>
    <div ref={applyNowRef}><CurrentOpeningcard/></div>
    <div className='desktopboxdisplay'><Subcribe/></div>
    <MobileSubcribe/>
    </main>
  )
}

export default Career