import React, { useRef, useState} from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useBlogContext } from '../Context/BlogContext';
import { useFormik } from 'formik';
import { JobApplySchema } from '../Contact_us/Schema';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const data=[{
  id:1,
  title:"Submit your CV",
  icon:"/assets/Hiring Process 1@2x.svg"
},{
  id:2,
  title:"An initial video call",
  icon:"/assets/Hiring Process 2@2x.svg"
},{
  id:3,
  title:"Complete a technical exercise",
  icon:"/assets/Hiring Process 3@2x.svg"
},{
  id:4,
  title:"Interview (in person/remote)",
  icon:"/assets/Hiring Process 4@2x.svg"
},{
  id:5,
  title:"Receive an offer!",
  icon:"/assets/Hiring Process 5@2x.svg"
}]
const initialValues={
  user_name:"",
  user_email:"",
  user_message: ""
  }

export const Jobpost = ({setOpen}) => {
  const {jobdetail,allJobs}=useBlogContext();

  const {discription,first_price,location,nane,second_price,type,bonus_points,looking_for}=jobdetail;
  const looking_forArray = looking_for ? JSON.parse(looking_for) : [];
  const bonus_pointsArray = bonus_points ? JSON.parse(bonus_points) : [];
   console.log('looking_forArray',looking_forArray,'bonus_points',bonus_pointsArray);

  var settings = {
    dots:false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        }
      ]
  };

  const [file, setFile] = useState(null);
  console.log('file',file);

  const onSubmit = async (values) => {
    console.log('KKKk');
    console.log('values',values.job_name);
    // Create FormData to handle file upload
// Create FormData to handle file upload
const formData = new FormData();
formData.append('job_name', nane);
formData.append('user_name', values.user_name);
formData.append('user_email', values.user_email);
formData.append('user_message', values.user_message);

if (file) {
  formData.append('user_cv', file);
}

     console.log('formData',formData);
    try{
      const response = await axios.post('https://app.localtasker.co.uk/api/job/apply',  formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log("response", response);
      if (response.status === 200) {
        toast.success(response.data, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
          formik.resetForm();
      }
      else{
      }
    }catch (err) {
      console.log(err);
    }
  };


  const applyNowRef = useRef(null);

  const scrollToApplyNow = () => {
    applyNowRef.current.scrollIntoView({ behavior: 'smooth' });
  };


  const formik = useFormik({
    initialValues,
    validateOnBlur: true,
    onSubmit,
    validationSchema:JobApplySchema
  });

  return (
    <div className='mx-md-4 pt-4 pb-5' style={{backgroundColor:"#EEF6FD",borderRadius:"28px",textAlign:"left"}}>
      <ToastContainer/>
      <span id="lengthopening" className='mx-3'>View All Openings ({allJobs.length})<span style={{color:"#858585"}}> | {nane}</span></span>
     <h1 className='lefttitle mt-3 mb-3 mx-3'>{nane}</h1>
     <span  className='jobpostpara mx-3'>{type}</span>
     <h6 className='jobpostpara mx-3'>{location}</h6>
     <p className='jobpostpara mb-4 mx-3' style={{color:"#000"}}>£{first_price} £{second_price} + equity</p>
     <p className='ourstorypara mt-4 mx-3'  dangerouslySetInnerHTML={{__html: discription}}/>

<button className='hirebtn mx-3' onClick={scrollToApplyNow}>Apply Now</button>
     <div className='row'>
     {looking_for !== "[null]" &&<div className='col-md-6 mt-5'><h3 className='m-2 lookingfor mx-3'>We’re looking for</h3>
         <ul className='mx-2'>
             {looking_forArray && Array.isArray(looking_forArray) && looking_forArray.map((item,index)=>{
               return(
                <li key={index}><img src="/assets/tick byllets@2x.svg"/>&nbsp;&nbsp;{item}</li>
               )
             })}
            
         </ul>
        </div>}
        {bonus_points !== "[null]" &&   <div className='col-md-6 mt-5'><h3 className='m-2 lookingfor'>Bonus Points</h3>
        <ul>
        {bonus_pointsArray && Array.isArray(bonus_pointsArray) && bonus_pointsArray.map((item,index)=>{
               return(
              <li key={index}><img src="/assets/tick byllets@2x.svg"/>&nbsp;&nbsp;{item}</li> 
               ) 
        })}
        </ul>
        </div>}
      
     </div>

    <h1 className='lefttitle text-center mt-4 mb-4'>Our Hiring Process</h1>
    <p className='text-center ourstorypara'>We pride ourselves on making fast hiring decisions.</p>
    <div className='row text-center mx-md-5' style={{justifyContent:"center"}}>
       <Slider {...settings}>
       {data && data.map((item)=>{
        return(
          <div className='col-3' style={{justifyContent:"center"}} key={item.id}>
          <div className='hiringstepCard mx-auto'>
        <img src={item.icon}/>
        <p className='mt-3'>{item.title}</p>
       </div>
          </div>
        )
       })}
       </Slider>
       <div className='mt-5 text-center mobiledisplay'> <img src="/assets/SliderDot.svg" alt="dots" id="dotSize"/></div>
       </div>
    <h1 className='lefttitle text-center mt-4 mb-4' ref={applyNowRef}>Apply Now</h1>
     <div className='col-md-6 text-center mx-auto'>
     <p className='ourstorypara mx-3'>Attach your CV, and cover letter (optional) and we will try to
get back to you as soon as we can.</p>
     </div>
     <form className='col-md-5 mx-auto text-center mb-3' onSubmit={formik.handleSubmit}>
              <div>
                <input className='contactforminput mt-3 mb-3' name="user_name" placeholder='Full Name' value={formik.values.user_name}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}/>
                   {formik.errors.user_name && formik.touched.user_name ? (
                      <p className='text-center' style={{color:"red",textAlign:"left",fontSize:"1.2rem"}}>{formik.errors.user_name}</p>
                    ) : null}
                </div>
                <div>
                <input type='email' className='contactforminput mt-3 mb-3' name="user_email" placeholder='Your email' value={formik.values.user_email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}/>
                    {formik.errors.user_email && formik.touched.user_email ? (
                      <p className='text-center' style={{color:"red",textAlign:"left",fontSize:"1.2rem"}}>{formik.errors.user_email}</p>
                    ) : null}
                </div>
                <textarea className='textarea p-2' placeholder='Message/Cover Letter' name="user_message" value={formik.values.user_message}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}></textarea>
                     {formik.errors.user_message && formik.touched.user_message ? (
                      <p className='text-center' style={{color:"red",textAlign:"left",fontSize:"1.2rem"}}>{formik.errors.user_message}</p>
                    ) : null}
                <div>
                  <input type='file' id="uploadcvbtn" name="file"
  onChange={(e) => setFile(e.target.files[0])}/><br/>
                  <label htmlFor='uploadcvbtn'>Upload CV</label>
                </div>
                <div>
                <button className='hirebtn' style={{margin:"2rem 0rem 2rem"}} disabled={!formik.isValid} type="submit">Submit</button></div>
    
                <button className='text-center' id="x" onClick={()=>setOpen(false)}><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
<path d="M23.0625 12.9375L12.9375 23.0625M12.9375 12.9375L23.0625 23.0625" stroke="black" strokeWidth="3.375" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 32.0625C25.7665 32.0625 32.0625 25.7665 32.0625 18C32.0625 10.2335 25.7665 3.9375 18 3.9375C10.2335 3.9375 3.9375 10.2335 3.9375 18C3.9375 25.7665 10.2335 32.0625 18 32.0625Z" stroke="black" strokeWidth="3.375" strokeLinecap="round" strokeLinejoin="round"/>
</svg></button> 
    
     </form>
    </div>
  )
}
