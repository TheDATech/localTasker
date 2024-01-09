import React, { useState } from 'react'
import Link from 'next/link'
import { useBlogContext } from '../Context/BlogContext'

const BlogCard = (blogList) => {
     const {Blogs_listUser}=useBlogContext();
     const [visibleItems, setVisibleItems] = useState(6); 
    const datablog=blogList.blogList;
    console.log('filter blogList',blogList,"datablog",datablog,"selectedCategory",blogList.selectedCategory);
  
    const handleLoadMore = () => {
      // Increase the number of visible items
      setVisibleItems(visibleItems + 3); // Increase by 3 items when "Load More" is clicked
    };
  
    return (
    <div className="containerleftrightmargin mt-2" style={{paddingBottom:'10rem'}}>

    <div className='desktopboxdisplay howmobileitworkmargintop mx-4' style={{borderLeft:"5px solid #1171ca"}}>
    {blogList.selectedCategory==='All'?<h1 className='howTitle p-2'>All Topics</h1>:<h1 className='howTitle p-2'>{blogList.selectedCategory}</h1>}
    <p className='px-2 pb-2 paracardleft'>Exploring Local Tasker and discover how we make an impact</p>
    </div>
    <div className='mobiledisplay' style={{borderLeft:"3px solid #1171ca"}}>
    <h1 className='howTitle p-3' style={{textAlign:'left'}}>All Topics</h1>
    <p className='px-3 pb-2 paracardleft'>Local Tasker is a platform that connects
individuals and businesses with local service
providers who can perform various tasks such
as cleaning, handyman work, gardening, and
more. It allows users to quickly and easily find
reliable help for their everyday needs.</p>
    </div>
    <div className='blogGrid'>
    {datablog && Array.isArray(datablog) && datablog.slice(0,visibleItems).map(({id,banner, title, date,category_name,slug})=>{
       return(
        <div className='mt-4' key={id}>
        <div className='card1 p-3'>
          <div className='img1'><img src={banner} alt='profile'/></div>
          <div className='row mt-3 mx-1' style={{borderBottom:"1px solid rgb(217 217 217)"}}>
            <div className='col d-flex mb-3 mt-3'>
            <img src={Blogs_listUser.photo} alt='profile' className='profileimage'/>
            <h5 className='name'>{Blogs_listUser.name}<p style={{color:'rgb(136 137 139)'}}>{date}</p></h5> 
            </div>
            <div className='col d-flex mt-3 mb-1'>
              <img src="/assets/HomeInspirationicon@2x.svg" alt="inspiration" width={12} height={12} className='mb-0 mt-4'/> <p className='homeInspiration'>{category_name}</p></div>
          </div>
           <h1 className='profilecardtitle'>{title}</h1>
           <Link href={`/blogs/${slug}`}><a className='profilereadmore'>Read more &nbsp;&nbsp;<img src="/assets/ReadMoreicon@2x.svg"/></a></Link>
          </div>
          </div>
       )
      })}
    </div>
    {datablog.length > visibleItems && (
        <div className="text-center mb-5">
          <button className="hirebtn" onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )}
      </div>
  )
}

export default BlogCard