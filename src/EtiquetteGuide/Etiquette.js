import React from 'react'
import { OurStory } from '../Component/share/OurStory'
import { Subcribe } from '../Component/share/Subcribe';
import { Faqtopbox } from '../F&Q/faqtopbox';
import { Etiquettebox } from './Etiquettebox';
import { MobileSubcribe } from '../Component/share/mobileSubcribe';

export const metadata = {
  title: 'Etiquette Guidlines',
  description: 'Generated by create next app',
}

const Etiquette = () => {
  return (
    <main>
    <Faqtopbox title="Local Tasker" subtitle="Etiquette Guide" para="Welcome to our Local Tasker Etiquette Guide page! As a
member of our community, it's essential to understand
the etiquette we uphold in our platform. This page is
your go-to resource for learning about the decorum we
follow to ensure a harmonious and productive
environment for everyone." img1="/Ettiquete.png" img2="/ettiquetebigcircle.png" img="/ettiquetebigcircle.png"/>
    <Etiquettebox/>
    <div className='desktopboxdisplay'><Subcribe/></div>
   <MobileSubcribe/>
    </main>
  )
}

export default Etiquette