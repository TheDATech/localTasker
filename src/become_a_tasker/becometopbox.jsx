import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export const Becometopbox = ({title,para,subtitle,img1,img2,img3}) => {
  const [category,setCategory]=useState();

  function calculateCost(category) {
    let cost = 0;

    switch (category) {
      case "Art & Education":  
        cost = 25; 
        break;
      case "Business Services":
        cost = 26; 
        break;
      case "Car Maintenance & Repair":
        cost = 27; 
        break;
      case "Design Services":
          cost = 28; 
          break;
      case "Home Improvement":
            cost = 29; // Set the cost for option3
            break;
      case "Handyman & Assembly":
              cost = 30; // Set the cost for option3
              break;
      case "Home Services":
                cost = 31; 
                break;
      case "Pet Care":
                cost = 32; 
                break;
      case "Personal Care":
                  cost = 35; 
                  break;
      case "Removals & Clearance":
                    cost = 36; // Set the cost for option3
                    break;
      case "Special Occasions":
                      cost = 37; // Set the cost for option3
                      break;
      case "Wellness & Fitness":
                        cost = 38; // Set the cost for option3
                        break;
      default:
        cost = 0; // Default cost
        break;
    }
  
    return cost;
  }

  const cost = calculateCost(category);
console.log("Cost:", cost);
  return (
    <div className='container-fluid mb-4' style={{backgroundColor:"#EEF6FD"}}>
    <div className='containerleftrightmargin desktopboxdisplay despt'>
      <div className='row mt-5'>
          <div className='col mt-5 mb-5'>
           <h1 className='ourstorytitle'>{title} <span id="Journey">{subtitle}</span>&nbsp;Easily Accessible</h1>
            <div className='col-md-12'>
            <p className='mt-5 ourstorypara'>{para}</p>
            </div>
          </div>
          <div className='col'>
             <div className='d-flex'>
             <div className='circlebecome2'>
              <img src={img2} style={{borderRadius:'50%',width:'100%',height:'100%'}}/>
              </div>
              <div className='circlebecome1'>
              <img src={img1} style={{borderRadius:'50%',width:'100%',height:'100%'}}/>
             </div>
             </div>
          </div>
      </div>
      <div className='row'>
        <div className='col-md-8 mb-2'>
          <form id="formbecome">
            <p style={{color:"#1171ca"}}>See how much you can make as a Local Tasker</p>
            <div className='row'>
             <div className='col'>
              <select className='dropdown'>
                <option value="Select Location">Select Location</option>
                <option value="London">London</option>
              </select>
             </div>
             <div className='col'>
              <select className='dropdown' value={category} onChange={(e)=>setCategory(e.target.value)}>
                <option value="Choose Category">Choose Category</option>
                <option value="Art & Education">Art & Education</option>
  <option value="Business Services">Business Services</option>
  <option value="Car Maintenance & Repair">Car Maintenance & Repair</option>
  <option value="Design Services">Design Services</option>
  <option value="Home Improvement">Home Improvement</option>
  <option value="Handyman & Assembly">Handyman & Assembly</option>
  <option value="Home Services">Home Services</option>
  <option value="Pet Care">Pet Care</option>
  <option value="Personal Care">Personal Care</option>
  <option value="Home Services">Removals & Clearance</option>
  <option value="Special Occasions">Special Occasions</option>
  <option value="Wellness & Fitness">Wellness & Fitness</option>
              </select>
             </div>
             <div className='col text-center' style={{color:"#1171ca"}}><h5>£{cost}<img src="/assets/info icon@2x.svg" id="inforicon"/></h5><p>per hour</p></div>
             <div className='col'><Link href='https://app.localtasker.co.uk/register?type=1'><button className='becomestart'>Get Started</button></Link></div>
            </div>
          </form>
        </div>
        <div className='col-md-2 offset-2'>
        <div className='circlebecome3'>
              <Image src={img3} width={300} height={300} alt='imag3'/>
              </div>
        </div>
      </div>
    </div>
    <div className='container mobiledisplay despt1'>
    <h1 className='ourstorytitle pt-5 mx-41'>{title} <span id="Journey">{subtitle}</span>&nbsp;Easily Accessible</h1>
    <p className='mt-4 ourstorypara mx-41'>{para}</p>
    <form className='mt-5 mx-41' id="formbecome">
            <p style={{color:"#1171ca",fontSize:"10px"}}>See how much you can make as a Local Tasker</p>
            <div className='row'>
             <div className='col-8 mb-2'>
              <select className='dropdown mt-2'>
                <option value="Select Location">Select Location</option>
  <option value="London">London</option>
              </select>
              <select className='dropdown mt-2' value={category} onChange={(e)=>setCategory(e.target.value)}>
                <option value="Choose Category">Choose Category</option>
  <option value="Art & Education">Art & Education</option>
  <option value="Business Services">Business Services</option>
  <option value="Car Maintenance & Repair">Car Maintenance & Repair</option>
  <option value="Design Services">Design Services</option>
  <option value="Home Improvement">Home Improvement</option>
  <option value="Handyman & Assembly">Handyman & Assembly</option>
  <option value="Home Services">Home Services</option>
  <option value="Pet Care">Pet Care</option>
  <option value="Personal Care">Personal Care</option>
  <option value="Home Services">Removals & Clearance</option>
  <option value="Special Occasions">Special Occasions</option>
  <option value="Wellness & Fitness">Wellness & Fitness</option>
              </select>
              <Link href='https://app.localtasker.co.uk/register?type=1'><button className='becomestart mt-2'>Get Started</button></Link>
             </div>
             <div className='col-4 text-center roundring'>
             <h5 className='pt-5 pb-1'>£{cost}<img src="/assets/info icon@2x.svg" alt="image" id="inforicon"/></h5><p style={{fontSize:"7px"}}>per hour</p></div>
            </div>
          </form>
    </div>
  </div>
  )
}
