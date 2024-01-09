import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { ContactSchema } from './Schema';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialValues={
  contact_type:"",
  full_name:"",
  email:"",
  phone_number: "",
  message:""
  }

export const ContactBox = () => {
  const [file, setFile] = useState(null);
  console.log('file',file);
  const onSubmit = async (values) => {
    console.log('values',values);
    // Create FormData to handle file upload
// Create FormData to handle file upload
const formData = new FormData();
formData.append('contact_type', values.contact_type);
formData.append('full_name', values.full_name);
formData.append('email', values.email);
formData.append('phone_number', values.phone_number);
formData.append('message', values.message);

if (file) {
  formData.append('file', file);
}

     console.log('formData',formData);
    try{
      const response = await axios.post('https://app.localtasker.co.uk/api/contact/us',  formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log("response", response);
      if (response.status === 200) {
        toast.success(response.data.success, {
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

  const formik = useFormik({
    initialValues,
    validateOnBlur: true,
    onSubmit,
    validationSchema:ContactSchema
  });

  return (
    <div className='container-fluid'>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
        <div className='row pt-5'>
            <div className='col despt text-center' style={{backgroundColor:'#EEF6FD'}}>
                <h1 className='mt-5 mb-3 desktopboxdisplay contacttitlemarginleft' style={{color:"#1171ca",textAlign:"left",fontSize:'40px',fontFamily:'Poppins',fontWeight:'600',lineHeight:'normal'}}>Contact Us</h1>
                <p className='desktopboxdisplay paracardleft contacttitlemarginleftpara' style={{textAlign:"left"}}>Please provide detailed information
below and our agents will reply via
email as soon as possible.</p>
<h1 className='mb-3 mobiledisplay contacttitlemarginleft' style={{color:"#1171ca",textAlign:"left",marginTop:'7rem',fontSize:'36px',fontFamily:"Poppins",fontWeight:'500',textTransform:'capitalize',fontStyle:'normal'}}>Contact Us</h1>
<p className='mobiledisplay mt-2 contacttitlemarginleftpara' style={{color:"#858585",textAlign:"left",fontSize:'11px',fontWeight:'400',lineHeight:'normal',fontFamily:"Poppins",fontStyle:'normal'}}>Please provide detailed information
below and our agents will reply via
email as soon as possible.</p>
              <form className='mx-md-5 mb-5' onSubmit={formik.handleSubmit}>
                <select className='contactforminput' name='contact_type' value={formik.values.contact_type}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}>
                    <option>I am trying to become a tasker</option>
                    <option>I am trying to become a client</option>
                    <option>I am unable to access my account</option>
                    <option>Other</option>
                </select>
                {formik.errors.contact_type && formik.touched.contact_type ? (
                      <p style={{color:"red",textAlign:"left",marginLeft:"6rem"}}>{formik.errors.contact_type}</p>
                    ) : null}
                <div>
                <input className='contactforminput' name="full_name" placeholder='full name*' value={formik.values.full_name}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}/>
                      {formik.errors.full_name && formik.touched.full_name ? (
                      <p style={{color:"red",textAlign:"left",marginLeft:"6rem"}}>{formik.errors.full_name}</p>
                    ) : null}
                </div>
                <div>
                <input type='email' className='contactforminput' name="email" placeholder='Albertjay@gmal.com*' value={formik.values.email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}/>
                        {formik.errors.email && formik.touched.email ? (
                      <p style={{color:"red",textAlign:"left",marginLeft:"6rem"}}>{formik.errors.email}</p>
                    ) : null}
                </div>
                <div>
                <input className='contactforminput' name="phone_number" placeholder='phone number*' value={formik.values.phone_number}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}/>
                          {formik.errors.phone_number && formik.touched.phone_number ? (
                      <p style={{color:"red",textAlign:"left",marginLeft:"6rem"}}>{formik.errors.phone_number}</p>
                    ) : null}
                </div>
                <textarea className='textarea' placeholder='Message/Cover Letter' name="message" value={formik.values.message}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}></textarea>
                    {formik.errors.message && formik.touched.message ? (
                      <p style={{color:"red",textAlign:"left",marginLeft:"6rem"}}>{formik.errors.message}</p>
                    ) : null}
                <div className='uploadmarginleftnj'>
                    <div>   
                    <input
  type='file'
  id="uploadcvbtn"
  name="file"
  onChange={(e) => setFile(e.target.files[0])}
/><br/>
                     <label id="label" htmlFor='uploadcvbtn'>Upload files (optional)</label>
                    </div>
                 
                    <button className='hirebtn' disabled={!formik.isValid} type="submit">Submit</button>
                </div>
              </form>
            </div>
            <div className='col despt text-center' style={{backgroundColor:'#1171CA'}}>
            <h1 className='mb-3 mobiledisplay text-center mt-700' style={{color:"#fff",textAlign:"left",marginLeft:"1rem",marginTop:'2rem',fontSize:'31px',fontFamily:"Poppins",fontWeight:'500',textTransform:'capitalize',fontStyle:'normal'}}>Immediate help?</h1>
            <h1 className='mt-5 mx-5 mb-4 desktopboxdisplay' style={{color:"#fff",fontSize:'40px',fontFamily:'Poppins',fontWeight:'600',lineHeight:'normal'}}>Immediate help?</h1>
            <p className='mx-md-auto paracardleft desktopboxdisplay' style={{color:"#FDB633"}}>Our team is always there to help<br/>
you. Let’s start chat with us...</p>
            <p className='mobiledisplay mt-2' style={{marginLeft:"1.2rem",marginRight:'1.2rem',color:"#FDB633",fontSize:'14px',fontFamily:'Poppins',textAlign:'center',fontWeight:'400',lineHeight:'normal'}}>Our team is always there to help you. Let’s start chat with us...</p>
             <div className='chatusCard'>
               <img src="/assets/chatus.JPG"/>
               <h5 className='m-3'>Chat with us</h5>
               <p>Our team is always there to help you.</p>
               <button className='hirebtn' style={{marginTop:"1rem"}}>Start Chat</button>
             </div>
            </div>
        </div>
    </div>
  )
}
