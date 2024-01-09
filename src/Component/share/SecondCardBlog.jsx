import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useBlogContext } from '../../Context/BlogContext';


export const SecondCardBlog = () => {
  const {Blogs_list,BlogsLoading,Blogs_listUser}=useBlogContext();
  const router=useRouter();
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  if(BlogsLoading){
    return <div>Loading...</div>
  }
  return (
    <div className="containerleftrightmargin mb-5 howmobileitworkmargintop howmobileitworkpaddingBottom">
    <h1 className='howTitle desktopboxdisplay mx-3'>Get Inspired</h1>
    <h1 className='howTitle text-center mobiledisplay' style={{marginTop:"1rem"}}>Get Inspired</h1>
    <p className='desktopboxdisplay paracardleft mx-3 mt-4'>Experience the magic of home improvement with Local Tasker's helpful hints, home tours, and tasker tales.</p>
    <p className='text-center mobiledisplay mx-3 mt-5' style={{color:"#858585",marginTop:"1rem",fontSize: "12px",fontWeight: "400"}}>Experience the magic of home improvement with Local Tasker's helpful hints, home tours, and tasker tales.</p>
    <div className='row mt-3'>
    <Slider {...settings}>
    {Blogs_list && Array.isArray(Blogs_list) && Blogs_list.map(({id,banner,title, name, date,category_name,slug})=>{
       return(
        <div className='col-md-4 mt-2 mx-2' key={id}>
        <div className='card1 p-3'>
          <div className='img1'><img
      src={banner}
      alt={name}
      blurdataurl={banner}
      placeholder="blur"
      style={{objectFit:"cover"}} // Optional blur-up while loading
    /></div>
          <div className='row mt-3 mx-1' style={{borderBottom:"1px solid rgb(217 217 217)"}}>
            <div className='col d-flex mb-3'>
            <img
      src={Blogs_listUser.photo}
      alt='profile'
      className='profileimage'
      blurdataurl={Blogs_listUser.photo}
      placeholder="blur" // Optional blur-up while loading
    />
            <h5 className='name'>{Blogs_listUser.name}<p style={{color:'#888'}}>{date}</p></h5> 
            </div>
            <div className='col d-flex mt-md-3 mb-md-1'>
              <Image src="/assets/HomeInspirationicon@2x.svg" alt="inspiration" width={12} height={12} className='mb-0'/> <p className='homeInspiration'>{category_name}</p></div>
          </div>
           <h1 className='profilecardtitle'>{title}</h1>
           <button className='profilereadmore' onClick={()=>router.push(`/blogs/${slug}`)}>Read more&nbsp;&nbsp;<Image src="/assets/ReadMoreicon@2x.svg" alt="readmore" width={20} height={18} className='mt-1'/></button>
          </div>
          </div>
       )
      })}
    </Slider>
    <div className='mt-5 text-center'> <img src="/assets/SliderDot.svg" alt="dots" id="dotSize"/></div>
    </div>

  </div>
    
  )
}
