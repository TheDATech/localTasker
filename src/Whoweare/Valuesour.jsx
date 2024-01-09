import React from 'react'
import Image from 'next/image'

const Valuesour = ({title,para,data}) => {
  return (
    <div className='containerleftrightmargin howmobileitworkmargintop' id="how-it-works" style={{paddingBottom:'5rem'}}>
       <h1 className='lefttitle text-center'>{title}</h1>
        <p className='mt-4 paracardleft text-center mx-md-5'>{para}</p>
        <div className='valueContainer mx-41'>
        {data && data.map((item)=>{
          return(
            <div className='valueCard' key={item.id}>
            <div className='yellowbgcircle mb-2'>
            <Image src={item.icon} alt={item.para} className='valueiconimage' width={60} height={60}/>
        </div>
            
             <h5 className='px-3 mt-2' style={{color:"#000"}}>{item.title}</h5>
             <p className="paracardleft">{item.para}</p>
           </div>
          )
        })}
        </div>
    </div>
  )
}

export default Valuesour