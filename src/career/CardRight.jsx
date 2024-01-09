import React from 'react'
import Image from 'next/image'

export const CardRight = () => {
  return (
 <>
     <div className='containerleftrightmargin desktopboxdisplay '>
    <div className='row' style={{marginTop:"12.5rem"}}>
     <div className='col-md-6'>
     <div id="leftimageconor1" className='mt-2 mb-2'>
     <div className='rect3'></div>
     <div className='rect4'>
     <img src='/missiondriven.png' className='vhgimage' alt="earn" style={{borderRadius:"15px"}}/>
     </div>
     </div>
     </div>
     <div className='col-md-6'>
        <h1 className='lefttitle'>Why Local Tasker?</h1>
        <p className='mt-3 ourstorypara'><strong>Community Impact:</strong> By joining Local Tasker, youll be a
part of a team that directly impacts the lives of people in
your community.</p>
<p className='mt-3 ourstorypara'><strong>Growth Opportunities:</strong> We believe in the potential of our
employees and provide ample opportunities for career
advancement.</p>
<p className='mt-3 ourstorypara'><strong>Inclusive Environment:</strong> We re proud of our diverse team
and uphold a culture of respect and inclusion.</p>
<p className='mt-3 ourstorypara'><strong>Work-Life Balance:</strong> Flexible schedules and remote work
opportunities allow our team members to balance their
personal and professional lives effectively.</p>
<p className='mt-3 ourstorypara'>
<strong>Meaningful equity:</strong> We re all working together to succeed
and you get an option to have a slice of the pie.
</p>
     </div>
    </div>
    </div>
    <div className='container mobiledisplay' style={{marginTop:"6rem"}}>
      <h1 className='lefttitle pt-1 text-center mx-41 mb-5'>Why Local Tasker?</h1>
      <div id="leftimageconor1" className='mt-2 mb-2'>
     <div className='rect3'></div>
     <div className='rect4' style={{top:'20px'}}>
     <img src='/missiondriven.png' className='vhgimage' alt="earn" style={{borderRadius:"15px"}}/>
     </div>
     </div>
      <p className='ourstorypara jjjj mx-41'><strong>Community Impact:</strong> By joining Local Tasker, youll be a
part of a team that directly impacts the lives of people in
your community.</p>
      <p className='ourstorypara mt-4 mx-41'><strong>Growth Opportunities:</strong> We believe in the potential of our
employees and provide ample opportunities for career
advancement.</p>
      <p className='ourstorypara mt-4 mx-41'><strong>Inclusive Environment:</strong> We re proud of our diverse team
and uphold a culture of respect and inclusion.</p>
      <p className='ourstorypara mt-4 mx-41'><strong>Work-Life Balance:</strong> Flexible schedules and remote work
opportunities allow our team members to balance their
personal and professional lives effectively.</p>
      <p className='ourstorypara mt-4 mx-41'><strong>Meaningful equity:</strong> We re all working together to succeed
and you get an option to have a slice of the pie.</p>
      </div>
 </>
  )
}
