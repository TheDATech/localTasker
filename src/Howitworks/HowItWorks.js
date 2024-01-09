import React from 'react'
import { OurStory } from '../Component/share/OurStory'
import Valuesour from '../Whoweare/Valuesour';
import { CardLeft } from './CardLeft';
import QuestionAnswer from './QuestionAnswer';
import { MobileOurstory } from '../Component/share/mobileOurstory';
import { MobileSubcribe } from '../Component/share/mobileSubcribe';



const data=[{
  id:1,
  icon:"/assets/Jointhecommunityicon@2x.svg",
  title:"Join the community",
  para:"We cant wait to welcome you, sign up and start your journey to finding the perfect tasker."
},
{
  id:2,
  icon:"/assets/What'sonyourmindicon@1x.svg",
  title:"What's on your mind?",
  para:"We re all ears. Looking for home renovation help? Need a hand moving house? Or maybe a clean up? No worries, we got you!"
},
{
  id:3,
  icon:"/assets/Findyourtaskericon@2x.svg",
  title:"Find your tasker",
  para:"Let s find them together! Just punch in your task category and postcode, and let our super smart filters show you the top pros in your area.."
},{
  id:4,
  icon:"/assets/Reviewandhireicon@2x.svg",
  title:"Review and hire",
  para:"It s all about finding the right fit. Have a good read through profiles, check out ratings, and chat with taskers. We promise youll find your perfect match."
},
{
  id:5,
  icon:"/assets/TalkDetailsicon@2x.svg",
  title:"Talk Details",
  para:"Discuss all the nitty gritty with your tasker, from work scope and timelines to toolkits and payment. Trust us, clear chats lead to great results."
},
{
  id:6,
  icon:"/assets/Taskdone.Timeforpayment@1x.svg",
  title:"Task done. Time for payment",
  para:"And just like that, your task is complete! Simply pay your tasker using your preferred method and breathe a sigh of relief. You did it! And we couldnt be more proud."
}]

const HowItWorks = () => {
  return (
    <main>
    <div className='desktopboxdisplay'>
    <OurStory title="Getting the Best Out of" subtitle="Your Local Tasker" para="Our platform is like a friendly neighbour, always ready to
lend a hand. It s easy to navigate, efficient in connecting
you with skilled professionals, and designed with you in
mind. Let's learn how to make the most out of it together!" btnvalue="Hire a Tasker" img1="/circle1.png" img2="/bigcircle.png" link="https://app.localtasker.co.uk/register?type=2"/>
    </div>
    <div className='mobiledisplay'>
      <MobileOurstory title="Getting the Best Out of" subtitle="Your Local Tasker" para="Our platform is like a friendly neighbour, always ready to lend
a hand. It's easy to navigate, efficient in connecting you with
skilled professionals, and designed with you in mind. Let's
learn how to make the most out of it together!" btnvalue="Hire a Tasker" img="/assets/howitworkmobile.JPG" link="https://app.localtasker.co.uk/register?type=2"/>
    </div>
     <div className='desktopboxdisplay'>
     <Valuesour title="How It Works" para="Ready to navigate the world of Local Tasker? We ve made things super easy for you to find the help
you need. Before you dive in, here s a quick and easy guide to making the most of our platform." data={data}/>
     </div>
     <div className='mobiledisplay' style={{marginTop:"1rem"}}>
     <Valuesour title="Getting Started" para="From the small stuff to big projects, Local Tasker makes
work easy so teams know what to do, why it matters,
and how to get it done, join our community today." data={data}/> 
     </div>
     <CardLeft/>
    <QuestionAnswer btnvalue='/CommunityGuidlines'/>
    <MobileSubcribe/>
    </main>
  )
}

export default HowItWorks