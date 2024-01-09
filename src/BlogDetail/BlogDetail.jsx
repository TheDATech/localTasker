import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
import Link from 'next/link';
import { useBlogContext } from '../Context/BlogContext';
import Head from 'next/head';
import { useRouter } from 'next/router';

const data=[{
    id:1,
    icon:"/Homepage/LTBLOGslider.png",
    title:"How to declutter and organise your home",
    name:'Ralph Edwards',
    date:'April 23, 2023'
},
{
    id:2,
    icon:"/Homepage/LTBLOGslider.png",
    title:"Revving up your vehicle's performance",
    name:'Mike Edwards',
    date:'April 23, 2023'
},
{
    id:3,
    icon:"/Homepage/LTBLOGslider.png",
    title:" Comprehensive pet care and wellness tips",
    name:'Mathew. karen',
    date:'April 23, 2023'
},{
  id:4,
  icon:"/Homepage/LTBLOGslider.png",
  title:" Comprehensive pet care and wellness tips",
  name:'Mathew. karen',
  date:'April 23, 2023'
}]


export const BlogDetail = () => {
   const {blogDetail,isblogDetailloading,RelatedBlogs,Blogs_listUser}=useBlogContext();
   const {banner,category_id,category_name,title,date,slug,status,created_at,description,id,meta_description,meta_img,meta_keywords,meta_title,short_description}=blogDetail;
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

      if(isblogDetailloading){
        return <div>Loading or error message goes here</div>;
      }
    return (
      <>
         <Head>
        <title>
        {meta_title}
        </title>
        <meta
          name="description"
          content={meta_description}
          key="desc"
        />
        <meta
          property="og:image"
          content={meta_img}
        />
      </Head>
         <div className='container-fluid text-center desktopboxdisplay' style={{marginTop:"12.5rem"}}>
            <h6 className='mt-5 mb-5' style={{color:"#FDB633",fontFamily:'Poppins',fontSize:'22px',fontStyle:'normal',fontWeight:'500',lineHeight:'24.462px'}}>{category_name }</h6>
            <h2 className='howTitle m-3 mb-5'>{title}</h2>
            <p className='mb-5 paracardleft'>By {Blogs_listUser.name} &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;<time dateTime={date}>{date}</time></p>
            <div className='containerleftrightmargin'>
               {blogDetail && blogDetail.banner?<img src={banner} alt="blogdetail" style={{width:"100%"}}/>:""}
               <div className="mt-4 mb-4 paracardleft" style={{textAlign:"left"}} dangerouslySetInnerHTML={{__html: description}}/>
<div className='row howmobileitworkmargintop' style={{borderBottom:"2px solid rgba(136, 136, 136, 0.53)",borderTop:"2px solid rgba(136, 136, 136, 0.53)"}}>
    <div className='col-md-3'>
    <img src="/LocalTaskerTeam@2x.svg" alt="blogdetail" className='p-4' style={{width:"100%",height:"auto",borderRadius:"50%"}}/>
    </div>
    <div className='col-md-9'>
        <h5 className='mt-5 blogdetailtiitl' style={{textAlign:"left"}}>Local Tasker Team</h5>
        <p className="mt-3 mb-5 paracardleft" style={{textAlign:"left"}}>Local Tasker is the the UK's most dynamic platform where task solving meets
opportunity creation. We dont just help you check off to dos; we amplify
productivity and boost talent. Our blog is your guide in this adventure, stocked
with useful insights to keep you ahead of the curve. We re here to help you grow,
learn, and turn everyday tasks into an enriching experience.</p>
    </div>
</div>
            </div>
            <div className='container howmobileitworkmargintop' style={{paddingBottom:'6rem'}}>
            <h4 className='m-5 blogdetailtiitl' style={{textAlign:"center"}}>You might also be interested in:</h4>
            <div className='row mb-5'>
    <Slider {...settings}>
    {RelatedBlogs && Array.isArray(RelatedBlogs) && RelatedBlogs.map(({ id, banner, title, name,category_name, date,slug })=>{
       return(
        <div className='col-md-4 mt-2' key={id}>
        <div className='card1 p-3'>
          <div className='img1'><img
      src={banner}
      alt={title}
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
            <div className='col d-flex mt-3 mb-1'>
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
         </div>
         <div className='container-fluid mobiledisplay' style={{marginTop:"8.5rem"}}>
            <h6 className='mt-5 mb-3  mx-41' style={{color:"#FDB633"}}>{category_name }</h6>
            <h2 className='mt-3  mx-41' style={{color:"#1171ca",fontWeight:"800"}}>{title}</h2>
            <p className='mb-3  mx-41' style={{color:"#aba9a9",fontSize:"12px"}}>By {Blogs_listUser.name} &nbsp;&nbsp; | &nbsp;&nbsp;<time dateTime={date}>{date}</time></p>
            <div className=' mx-41' dangerouslySetInnerHTML={{__html: description}}/>
               
<div className='row' style={{borderBottom:"2px solid #aba9a9",borderTop:"2px solid #aba9a9",marginTop:'3rem'}}>
    <div className='col-md-12 text-center'>
    <h2 className='mt-5' style={{color:"#1171ca",fontWeight:"900",textAlign:"center"}}>Local Tasker<br/>Team</h2>
    <img src="/LocalTaskerTeam@2x.svg" alt="blogdetail" className='p-3' style={{width:"12rem",height:"12rem",borderRadius:"50%"}}/>
    <p className="mt-3 mb-4" style={{color:"rgb(123, 127, 131)",textAlign:"left",fontSize:"12px"}}>Local Tasker is the the UK's most dynamic platform where task solving meets
opportunity creation. We dont just help you check off to dos; we amplify
productivity and boost talent. Our blog is your guide in this adventure, stocked
with useful insights to keep you ahead of the curve. We re here to help you grow,
learn, and turn everyday tasks into an enriching experience.</p>
    </div>
</div>
<div className='mobiledisplay' style={{marginTop:'4rem',paddingBottom:'4rem'}}>
            <h4 className='m-3 blogdetailtiitl' style={{fontWeight:"800",textAlign:"center"}}>You might also be interested in:</h4>
            <div className='row mt-2'>
    <Slider {...settings}>
    {RelatedBlogs && Array.isArray(RelatedBlogs) && RelatedBlogs.map(({ id, banner, title,category_name, date,slug })=>{
       return(
        <div className='col-md-4' key={id}>
        <div className='card1 p-3'>
          <div className='img1'><img
      src={banner}
      alt={title}
      width={400} 
      height={200}
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
            <div className='col d-flex mt-3 mb-1'>
              <Image src="/assets/HomeInspirationicon@2x.svg" alt="inspiration" width={12} height={12} className='mb-0'/> <p className='homeInspiration'>{category_name}</p></div>
          </div>
           <h1 className='profilecardtitle'>{title}</h1>
           <Link href={`/blogs/${slug}`}><a className='profilereadmore'>Read more &nbsp;&nbsp;<Image src="/assets/ReadMoreicon@2x.svg" alt="readmore" width={20} height={20} className='mt-1' /></a></Link>
          </div>
          </div>
       )
      })}
    </Slider>
    <div className='mt-5 text-center'> <img src="/assets/SliderDot.svg" alt="dots" id="dotSize"/></div>
    </div>
            </div>
            </div>
         </>
    )}