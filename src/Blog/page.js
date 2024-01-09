import React from 'react'
import FirstBox from './FirstBox'
import { Subcribe } from '../Component/share/Subcribe';
import { MobileSubcribe } from '../Component/share/mobileSubcribe';


const Page = () => {
  return (
    <>
     <FirstBox/>
     <div className='desktopboxdisplay'><Subcribe/></div>
    <MobileSubcribe/>
    </>
  )
}

export default Page