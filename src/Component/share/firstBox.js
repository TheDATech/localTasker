import React, { useState,useEffect} from 'react'
import Link from 'next/link';
import { AiOutlineLeft,AiOutlineClose} from 'react-icons/ai';
import {FaLocationCrosshairs} from "react-icons/fa6";
import {LiaSearchSolid} from "react-icons/lia"
import { useBlogContext } from '../../Context/BlogContext';
import axios from 'axios';
import { useRouter } from 'next/router';


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

export const FirstBox = () => {
  const {PopMainCategory,getSubCategory,PopSubCategory,getSubChildCategory,PopSubChildCategory,parent_category_id,subcategory}=useBlogContext();
  const [isLevel1ModalOpen, setLevel1ModalOpen] = useState(false);
  const [isLevel2ModalOpen, setLevel2ModalOpen] = useState(false);
  const [isLevel3ModalOpen, setLevel3ModalOpen] = useState(false);
  const [isLevel4ModalOpen, setLevel4ModalOpen] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);
  const [post_code,setPost_code] = useState('');
  const [subcategorychild,setsubcategorychild]=useState('');
  const [isSearching, setIsSearching] = useState(false);
  console.log('suggestions',suggestions);

  const router = useRouter();

  const handleChange = (e) => {
    const input = e.target.value;
    setUserInput(input);

    if (input.trim() !== '') {
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }

  };


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
  const openLevel4Modal = () => {
    setLevel4ModalOpen(true);
    closeLevel3Modal(); // Close level 2 modal when opening level 3 modal
  };
  const closeLevel4Modal = () => {
    setLevel4ModalOpen(false);
  };

  const PostRediectCode=()=>{
    const randomToken = generateRandomToken();
    const url = `https://app.localtasker.co.uk/search?skillandcategory=&post_code=&_token=${randomToken}&parent_category_id=${parent_category_id}&subcategory=&subcategory=${subcategory}&subcategorychild=&subcategorychild=${subcategorychild}&gender=all_gender&post_code=${post_code}&type=freelancer&type=freelancer`;
    router.push(url)
  }
  
  useEffect(() => {
    const minInputLength = 1;
  
    // Fetch suggestions from all three APIs based on userInput
    const fetchSuggestions = async () => {
      if (userInput.length >= minInputLength) {
        try {
          // Use Promise.all to make concurrent requests
          const [allCategoriesResponse,subCategoryResponse,subChildCategoriesResponse] = await Promise.all([
            axios.get('https://app.localtasker.co.uk/api/all/categories'),
            axios.get(`https://app.localtasker.co.uk/api/sub/categories/${userInput}`),
            axios.get(`https://app.localtasker.co.uk/api/sub/child/categories/${userInput}`),
          ]);
          // Process responses
          const allCategoriesData = allCategoriesResponse.data.categories;
          const subCategoryData=subCategoryResponse.data.sub_categories;
          const subChildCategoriesData = subChildCategoriesResponse.data.sub_child_categories;

  
          // Sort and update suggestions state with data from both responses
          const sortedAllCategories = allCategoriesData.sort((a, b) => {
            if (typeof a.name === 'string' && typeof b.name === 'string') {
              return a.name.localeCompare(b.name);
            }
            return 0; // Return 0 for non-string elements
          });
  
          const sortedSubCategories = subCategoryData.sort((a, b) => {
            if (typeof a.parent_id === 'string' && typeof b.parent_id === 'string') {
              return a.parent_id.localeCompare(b.parent_id);
            }
            return 0; // Return 0 for non-string elements
          });
  
          const sortedSubChildCategories = subChildCategoriesData.sort((a, b) => {
            if (typeof a.child === 'string' && typeof b.child === 'string') {
              return a.child.localeCompare(b.child);
            }
            return 0; // Return 0 for non-string elements
          });

           // Filter and update suggestions state with data that matches the input
           const filteredAllCategories = sortedAllCategories.filter((category) => {
            if (typeof category.name === 'string' && category.name.trim() !== '') {
              return category.name.toLowerCase().includes(userInput.toLowerCase());
            }
            return false; // Return false for non-string elements
          });
          
         // const filteredSubCategories = subCategoryData.filter((category) => {
         ////   console.log('Category',category)
          //  if (typeof category === 'string') {
          //    return category.toLowerCase().includes(userInput.toLowerCase());
          //  }
          //  return false; // Return false for non-string elements
         // });
          
          //const filteredSubChildCategories = subChildCategoriesData.filter((category) => {
           // console.log('Category',category)
           // if (typeof category.child === 'string' && category.child.trim() !== '') {
           //   return category.child.toLowerCase().includes(userInput.toLowerCase());
           // }
           // return false; // Return false for non-string elements
          //});

         // console.log('filteredSubChildCategories',filteredSubChildCategories)

          //console.log('sortedAllCategories',filteredAllCategories,'sortedSubCategories',filteredSubCategories,'sortedSubChildCategories',filteredSubChildCategories);
         // setSuggestions({
          //  allCategories: filteredAllCategories,
          //  sortedSubCategories: filteredSubCategories,
        //    subChildCategories: filteredSubChildCategories,
         // });
          console.log('filteredAllCategories',filteredAllCategories,'sortedAllCategories',sortedAllCategories,'sortedSubCategories',sortedSubCategories,'sortedSubChildCategories',sortedSubChildCategories);
          setSuggestions({
            allCategories: filteredAllCategories,
            sortedSubCategories:sortedSubCategories,
            subChildCategories: sortedSubChildCategories,
          });
        } catch (error) {
          console.error('Error fetching suggestions:', error);
        }
      } else {
        // Clear suggestions when userInput is empty
        setSuggestions([]);
      }
    };
  
    // Fetch suggestions whenever userInput changes
    fetchSuggestions();
  }, [userInput]);

  const handleSuggestionClick = (suggestion) => {
    // Handle selection of a suggestion
    setSelectedSuggestion(suggestion);
    setUserInput(suggestion.name); // Populate input field with suggestion
  };

  function fetchPostcodeByLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        // Get user's latitude and longitude
        //const latitude = position.coords.latitude;
        //const longitude = position.coords.longitude;
  
        // Fetch location data based on IP address
        fetch(`http://ip-api.com/json/?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query`)
          .then((response) => response.json())
          .then((data) => {
            // Check if the IP-based location data is available
            if (data.status === 'success') {
              // Access the location details from the response
              const country = data.country;
              const countryCode = data.countryCode;
              const region = data.region;
              const regionName = data.regionName;
              const city = data.city;
              const zip = data.zip;
              const postcode = data.zip; // Assuming postcode is provided by the API
              const timezone = data.timezone;
  
              // Do something with the location data, e.g., update state variables
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

  return (
    <>
    <div className='firstbox-container'>
    <div className='row'>
      <div className='col-md-12 mx-auto'>
       <div className='firstbox-container-sub text-center'>
        <h1 className='firstbox-container-subtitle mx-auto'>Get the help you need but
closer than you think!</h1>
<p className='firstbox-container-subpara mx-auto desktopboxdisplay'>From odd jobs to bigger projects, your neighbour's got you covered! <br/>Local Tasker makes it easy for you to get help with anything, from cleaning to repairs.</p>
<p className='firstbox-container-subpara mx-auto mobiledisplay mt-2'>From odd jobs to bigger projects, your neighbour's got you covered! Local Tasker makes it easy for you to get help with anything, from cleaning to repairs.</p>
   <div className='firstbox-container-subinputbox'><input placeholder='What services are you looking for?' onClick={openLevel1Modal} data-bs-toggle="modal" data-bs-target="#staticBackdrop"/><button onClick={openLevel1Modal} data-bs-toggle="modal" data-bs-target="#staticBackdrop"><img src="assets/Vector@2x.svg" alt="alt"/></button></div>
       </div>
       </div>
       </div>
    </div>
    <div className='modal fade modal-backdrop-blur' id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden='true'>
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content">
      <div className='row mt-3'>
        <div className='col-2 text-center mt-2'><AiOutlineLeft style={{color:'#858585',fontSize:'1.5rem',cursor:'pointer'}}/></div>
        <div className='col-8'><h5 className="modal-title text-center" id="staticBackdropLabel" style={{fontSize:'1.5rem'}}>Search <span style={{color:'#FDB633'}}>Task</span></h5></div>
        <div className='col-2 text-center'><button type="button" className='text-center modelclosbtn' data-bs-dismiss="modal" aria-label="Close"><AiOutlineClose/></button></div>
      </div>
      <div className="modal-body mb-4">
      <div className='text-center mt-4'>
        <input id="modelsearchinput" placeholder='Q I need help with..'  value={userInput}
        onChange={handleChange}/>
      </div>
      <ul className='mx-3 mt-4'>
        {suggestions.allCategories && Array.isArray(suggestions.allCategories) && suggestions.allCategories.map(({name,index}) => {   
          const searchQuery = userInput.toLowerCase();
          const categoryName = name.toLowerCase();

          if (categoryName.includes(searchQuery)) {
            const letterIndex = categoryName.indexOf(searchQuery);
            const beforeLetter = name.slice(0, letterIndex);
            const afterLetter = name.slice(letterIndex + searchQuery.length);
            return (
              <li key={index+name} className='poptit1'
          onClick={openLevel2Modal} onClickCapture={() => getSubCategory(name)} data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#staticBackdroplevel2" >{beforeLetter}
          <span className="blue-text">{searchQuery}</span>
          {afterLetter}</li>
            )
          }else{
            return null;
          }
                  
})}
        {suggestions.sortedSubCategories && Array.isArray(suggestions.sortedSubCategories) && suggestions.sortedSubCategories.map(({parent_id,index}) => (
          <li key={index+parent_id} className='poptit1'
          onClick={openLevel3Modal} data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#staticBackdroplevel3">{parent_id}</li>
        ))}
        {suggestions.subChildCategories && Array.isArray(suggestions.subChildCategories) && suggestions.subChildCategories.map(({child,index}) => {
const searchQuery = userInput.toLowerCase();
const categoryName = child.toLowerCase();

if (categoryName.includes(searchQuery)) {
  const letterIndex = categoryName.indexOf(searchQuery);
  const beforeLetter = child.slice(0, letterIndex);
  const afterLetter = child.slice(letterIndex + searchQuery.length);
  return (
    <li key={index+child} className='poptit1'
    onClick={openLevel4Modal} data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#staticBackdroplevel4">{beforeLetter}
<span className="blue-text">{searchQuery}</span>
{afterLetter}</li>
  )
}else{
  return null;
}
        }
        )}
      </ul>
       <h5 className='mx-4 mt-5 poptit' style={{color:'#1171CA'}}>Popular Categories</h5>
       {PopMainCategory && Array.isArray(PopMainCategory) && PopMainCategory.map((item, index) => {
  return (
    <h6 className='mx-4 mt-2 poptit1' style={{ color: '#000' }} onClick={openLevel2Modal} key={index} onClickCapture={() => getSubCategory(item.name)} data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#staticBackdroplevel2">{item.name}</h6>
  )
})}
        </div>
    </div>
  </div>
</div>
<div className="modal fade modal-backdrop-blur" id="staticBackdroplevel2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content">
      <div className='row mt-3'>
        <div className='col-2 text-center mt-2'><AiOutlineLeft style={{color:'#858585',fontSize:'1.5rem',cursor:'pointer'}} onClick={openLevel1Modal} data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#staticBackdrop"/></div>
        <div className='col-8'><h5 className="modal-title text-center" id="staticBackdropLabel" style={{fontSize:'1.5rem'}}>Search <span style={{color:'#FDB633'}}>Task</span></h5></div>
        <div className='col-2 text-center'><button type="button" className='text-center modelclosbtn' data-bs-dismiss="modal" aria-label="Close"><AiOutlineClose/></button></div>
      </div>
      <div className="modal-body mb-4">
       <h5 className='mx-4 mt-4 mb-4 poptit' style={{color:'#1171CA'}}>What do you need help with today?</h5>
       {PopSubCategory && Array.isArray(PopSubCategory) && PopSubCategory.map((cursub,index)=>{
        return(
          <h6 className='mx-4 mt-2 poptit1' style={{color:'#000'}} onClick={openLevel3Modal} key={index} onClickCapture={()=>getSubChildCategory(cursub.parent_id)} data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#staticBackdroplevel3">{cursub.parent_id}</h6>
        )
       })}
      </div>
    </div>
  </div>
</div>
<div className="modal fade modal-backdrop-blur" id="staticBackdroplevel3" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content">
      <div className='row mt-3'>
        <div className='col-2 text-center mt-2'><AiOutlineLeft style={{color:'#858585',fontSize:'1.5rem',cursor:'pointer'}} onClick={openLevel2Modal} data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#staticBackdrop"/></div>
        <div className='col-8'><h5 className="modal-title text-center" id="staticBackdropLabel" style={{fontSize:'1.5rem'}}>Search <span style={{color:'#FDB633'}}>Task</span></h5></div>
        <div className='col-2 text-center'><button type="button" className='text-center modelclosbtn' data-bs-dismiss="modal" aria-label="Close"><AiOutlineClose/></button></div>
      </div>
      <div className="modal-body mb-4">
       <h5 className='mx-4 mt-4 mb-4 poptit' style={{color:'#1171CA'}}>What do you need help with today?</h5>
       {PopSubChildCategory && Array.isArray(PopSubChildCategory) && PopSubChildCategory.map((childitem,index)=>{
        return(
          <h6 className='mx-4 mt-2 poptit1' style={{color:'#000'}} onClick={openLevel4Modal} key={index} onClickCapture={()=>setsubcategorychild(childitem.child)} data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#staticBackdroplevel4">{childitem.child}</h6>
        )
       })}
      </div>
    </div>
  </div>
</div>
<div className="modal fade modal-backdrop-blur" id="staticBackdroplevel4" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content">
      <div className='row mt-3'>
        <div className='col-2 text-center mt-2'><AiOutlineLeft style={{color:'#858585',fontSize:'1.5rem',cursor:'pointer'}} onClick={openLevel3Modal} data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#staticBackdroplevel2"/></div>
        <div className='col-8'><h5 className="modal-title text-center" id="staticBackdropLabel" style={{fontSize:'1.5rem'}}>Search <span style={{color:'#FDB633'}}>Task</span></h5></div>
        <div className='col-2 text-center'><button type="button" className='text-center modelclosbtn' data-bs-dismiss="modal" aria-label="Close" onClick={closeLevel4Modal}><AiOutlineClose/></button></div>
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
