import React,{useState} from 'react'
import { useRouter } from 'next/router'
import { SubcriptionSchema } from '../../Contact_us/Schema'
import axios from 'axios';
import { useFormik } from 'formik';

const initialValues={
  email:""
  }

export const MobileSubcribe = () => {
  const router=useRouter();

  const [msgerr,setMsgerr]=useState("");
  const [msgsucc,setMsgsucc]=useState("");
  
  const onSubmit = async (values) => {
    console.log('values',values);
  
  const formData = new FormData();
  formData.append('email', values.email);
  
    try{
      const response = await axios.post('https://app.localtasker.co.uk/api/subscription',  formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.data.success === 'Subscribed Successfully') {
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
          setMsgsucc(response.data.success)
          setMsgerr("")
          formik.resetForm();
      }
      else{
        toast.error(response.data.fail, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
          setMsgerr(response.data.fail)
      }
    }catch (err) {
      console.log(err);
    }
  };

const formik = useFormik({
  initialValues,
  validateOnBlur: true,
  onSubmit,
  validationSchema:SubcriptionSchema
});
  return (
    <div className='container-fluid mobiledisplay' style={{backgroundColor:"#2c86f1"}}>
    <div className='container pt-4 pb-5 px-51'>
    <h1 className='subcribetitle'>Ready to get started</h1>
    <div className='subcribe-btn-container'>
    <button className='btn1'  onClick={()=>router.push('https://app.localtasker.co.uk/search')}>Hire a Tasker</button>
    <button className='btn2'  onClick={()=>router.push('/become_a_tasker')}>Become a Tasker</button></div>
    <form className='subcribe-container-subinputbox mt-4' onSubmit={formik.handleSubmit}>
    <input placeholder='Enter your email' name="email" value={formik.values.email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}/>
    <button disabled={!formik.isValid} type="submit">Register Now</button>
    </form>
    {formik.errors.email && formik.touched.email ? (
                      <p style={{color:"red",textAlign:"left",marginLeft:"6rem"}}>{formik.errors.email}</p>
                    ) : null}
     {msgerr?<p className="mx-3" style={{color:"red",textAlign:"left",fontSize:"1.2rem"}}>{msgerr}</p>:<p className="mx-3" style={{color:"green",textAlign:"left",fontSize:"1.2rem"}}>{msgsucc}</p>}
     <p className='subcribeinputpara'>Sign-up for the latest news and updates!</p>
    </div>
    </div>
  )
}
