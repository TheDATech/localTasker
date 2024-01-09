import React, { useState } from 'react'
import Image from "next/image";
import popularCategories from "../../pages/style/HomeStyle.module.css";
import {LiaSearchSolid} from "react-icons/lia";
import { AiOutlineLeft,AiOutlineClose,AiOutlineSearch} from 'react-icons/ai';
import {FaLocationCrosshairs} from "react-icons/fa6";
import { useBlogContext } from '../../Context/BlogContext';
import { useRouter } from 'next/router';

const data=[{
  id:1,
  icon:"/assets/m1.JPG",
  title:"Art & Education"
},
{
  id:2,
  icon:"/assets/m3.JPG",
  title:"Business Services"
},
{
  id:3,
  icon:"/assets/m2.JPG",
  title:"Car Maintenance & Repair"
},
{
  id:4,
  icon:"/assets/m8.JPG",
  title:"Design Services"
},
{
  id:5,
  icon:"/assets/m4.JPG",
  title:"Handyman & Assembly"
},
{
  id:6,
  icon:"/assets/m5.JPG",
  title:"Home Services"
},
{
  id:7,
  icon:"/assets/m9.JPG",
  title:"Home Improvement"
},
{
  id:8,
  icon:"/assets/m6.JPG",
  title:"Pet Care"
},{
  id:9,
  icon:"/assets/m7.JPG",
  title:"Personal Care"
},{
  id:10,
  icon:"/assets/m10.JPG",
  title:"Removals & Clearance"
},
{
  id:11,
  icon:"/assets/m11.JPG",
  title:"Special Occasions"
},
{
  id:12,
  icon:"/assets/m12.JPG",
  title:"Wellness & Fitness"
}]

const generateRandomToken = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const tokenLength = 32; // You can adjust the length as needed
  let token = '';

  for (let i = 0; i < tokenLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    token += characters.charAt(randomIndex);
  }

  return token;
};

export const MobilePopularCategory = () => {
  const {getSubCategory,PopSubCategory,getSubChildCategory,PopSubChildCategory,parent_category_id,subcategory}=useBlogContext();
  const popularData=[...data]
  const [isLevel1ModalOpen, setLevel1ModalOpen] = useState(false);
  const [isLevel2ModalOpen, setLevel2ModalOpen] = useState(false);
  const [isLevel3ModalOpen, setLevel3ModalOpen] = useState(false);
  const [post_code,setPost_code] = useState('');
  const [subcategorychild,setsubcategorychild]=useState('');

  const router = useRouter();

  const openLevel1Modal = () => {
    setLevel1ModalOpen(true);
  };

  const closeLevel1Modal = () => {
    setLevel1ModalOpen(false);
  };

  const openLevel2Modal = () => {
    setLevel2ModalOpen(true);
    closeLevel1Modal(); // Close level 2 modal when opening level 3 modal
  };

  const closeLevel2Modal = () => {
    setLevel2ModalOpen(false);
  };
  const openLevel3Modal = () => {
    setLevel3ModalOpen(true);
    closeLevel2Modal(); // Close level 2 modal when opening level 3 modal
  };
  const closeLevel3Modal = () => {
    setLevel3ModalOpen(false);
  };
  function fetchPostcodeByLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        // Get user's latitude and longitude
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
  
        // Fetch location data based on IP address
        fetch(`http://ip-api.com/json/?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query`)
          .then((response) => response.json())
          .then((data) => {
            // Check if the IP-based location data is available
            if (data.status === 'success') {
              const postcode = data.zip;
              setPost_code(postcode);
            } else {
              console.error('Error fetching location data:', data.message);
            }
          })
          .catch((error) => {
            console.error('Error fetching location data:', error);
          });
      });
    } else {
      console.error('Geolocation is not available in this browser.');
    }
  }

  const PostRediectCode=()=>{
    const randomToken = generateRandomToken();
    const url = `https://app.localtasker.co.uk/search?skillandcategory=&post_code=&_token=${randomToken}&parent_category_id=${parent_category_id}&subcategory=&subcategory=${subcategory}&subcategorychild=&subcategorychild=${subcategorychild}&gender=all_gender&post_code=${post_code}&type=freelancer&type=freelancer`;
    router.push(url)
  }
  return (
    <>
    <div className="container-fluid mobiledisplay" style={{backgroundColor: '#fff',marginTop:'5rem'}} id="popular-categories">
    <div className="container mb-2">
    <h1 className='howTitle text-center'>Popular Category</h1>  
<div className={popularCategories.popularCategoriesItems}>
         {popularData && popularData.map(({id,icon,title})=>{
           return(
             <div className={popularCategories.popularCategoriesCard} key={id} onClick={openLevel1Modal} onClickCapture={()=>getSubCategory(title)} data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
             <Image src={icon} alt="" width={40} height={40}/>
              <p>{title}</p>
             </div>
           )
         })}
         </div>
   </div>
  </div>
  <div className="modal fade modal-backdrop-blur" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content">
      <div className='row mt-3'>
        <div className='col-2 text-center mt-2'><AiOutlineLeft style={{color:'#858585',fontSize:'1.5rem',cursor:'pointer'}} data-bs-dismiss="modal" aria-label="Close" data-bs-target="#staticBackdrop1"/></div>
        <div className='col-8'><h5 className="modal-title text-center" id="staticBackdropLabel" style={{fontSize:'1.5rem'}}>Search <span style={{color:'#FDB633'}}>Task</span></h5></div>
        <div className='col-2 text-center'><button type="button" className='text-center modelclosbtn' data-bs-dismiss="modal" aria-label="Close"><AiOutlineClose/></button></div>
      </div>
      <div className="modal-body mb-4">
      <h5 className='mx-4 mt-4 mb-4 poptit' style={{color:'#1171CA'}}>What do you need help with today?</h5>
      {PopSubCategory && Array.isArray(PopSubCategory) && PopSubCategory.map((cursub,index)=>{
        return(
          <h6 className='mx-4 mt-2 poptit1' style={{color:'#000'}} onClick={openLevel2Modal} key={index} onClickCapture={()=>getSubChildCategory(cursub.parent_id)} data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#staticBackdroplevel21">{cursub.parent_id}</h6>
        )
       })}
      </div>
    </div>
  </div>
</div>
<div className="modal fade modal-backdrop-blur" id="staticBackdroplevel21" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content">
      <div className='row mt-3'>
        <div className='col-2 text-center mt-2'><AiOutlineLeft style={{color:'#858585',fontSize:'1.5rem',cursor:'pointer'}} onClick={openLevel1Modal} data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#staticBackdrop1"/></div>
        <div className='col-8'><h5 className="modal-title text-center" id="staticBackdropLabel" style={{fontSize:'1.5rem'}}>Search <span style={{color:'#FDB633'}}>Task</span></h5></div>
        <div className='col-2 text-center'><button type="button" className='text-center modelclosbtn' data-bs-dismiss="modal" aria-label="Close"><AiOutlineClose/></button></div>
      </div>
      <div className="modal-body mb-4">
       <h5 className='mx-4 mt-4 mb-4 poptit' style={{color:'#1171CA'}}>What do you need help with today?</h5>
       {PopSubChildCategory && Array.isArray(PopSubChildCategory) && PopSubChildCategory.map((childitem,index)=>{
        return(
          <h6 className='mx-4 mt-2 poptit1' style={{color:'#000'}} onClick={openLevel3Modal} key={index} onClickCapture={()=>setsubcategorychild(childitem.child)} data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#staticBackdroplevel31">{childitem.child}</h6>
        )
       })}
      </div>
    </div>
  </div>
</div>
<div className="modal fade modal-backdrop-blur" id="staticBackdroplevel31" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content">
      <div className='row mt-3'>
        <div className='col-2 text-center mt-2'><AiOutlineLeft style={{color:'#858585',fontSize:'1.5rem',cursor:'pointer'}} onClick={openLevel3Modal} data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#staticBackdroplevel21"/></div>
        <div className='col-8'><h5 className="modal-title text-center" id="staticBackdropLabel" style={{fontSize:'1.5rem'}}>Search <span style={{color:'#FDB633'}}>Task</span></h5></div>
        <div className='col-2 text-center'><button type="button" className='text-center modelclosbtn' data-bs-dismiss="modal" aria-label="Close" onClick={closeLevel3Modal}><AiOutlineClose/></button></div>
      </div>
      <div className="modal-body mb-4">
        <div className='row'>
          <div className='col-10'>
          <div className='firstbox-container-subinputboxlevel3'><input placeholder='Postcode (of your task)' value={post_code} onChange={(e)=>setPost_code(e.target.value)}/><button onClick={fetchPostcodeByLocation}><FaLocationCrosshairs/></button></div></div>
          <div className='col-2'><button id="level3searchbtn" onClick={PostRediectCode}><LiaSearchSolid/></button></div>
        </div>
        </div>
    </div>
  </div>
</div>
  </>
  )
}
