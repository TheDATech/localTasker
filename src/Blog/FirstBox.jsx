import { useBlogContext } from '../Context/BlogContext';
import React, { useState,useRef, useEffect } from 'react'
import { AiOutlineLeft,AiOutlineClose,AiOutlineDown} from 'react-icons/ai';
import BlogCard from './BlogCard';

const FirstBox = () => {
  const { BlogCategory_list,Blogs_list} = useBlogContext();
  const [searchKey, setSearchKey] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const blogsSectionRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

const updateSuggestions = (searchKey) => {
  if (Array.isArray(BlogCategory_list)) {
    const matchingCategories = BlogCategory_list.filter((category) => {
      console.log('category', category);
      if (typeof category.category_name === 'string') {
        return category.category_name.toLowerCase().includes(searchKey.toLowerCase());
      }
      return false; // Handle non-string values
    });
    // Extract the category names from the matchingCategories array
    const categoryNames = matchingCategories.map((category) => category.category_name);
    setSuggestions(categoryNames);
  } else {
    setSuggestions([]);
  }
};

const handleSuggestionClick = (suggestion) => {
  setSearchKey(suggestion); // Update the input field with the suggestion
  if (blogsSectionRef.current) {
    blogsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  }
};

  //Blogbtnbox
  const [showbtn,setShowbtn]=useState(false);
   const troggle=()=>{
     if(showbtn===true){
      setShowbtn(false)
     }
     else{
      setShowbtn(true)
     }
   }
   // Create a filter function to filter blog posts by category name
   const filteredBlogData = () => {
    if (selectedCategory === 'All') {
       return Blogs_list; // No filtering, return all blog posts
    }
    return Blogs_list.filter((blog) => blog.category_name === selectedCategory);
 };

   // Extract unique category names from the blogData
   const uniqueCategories = Array.from(new Set(Array.isArray(Blogs_list) ? Blogs_list.map((blog) => blog.category_name) : []));

 // Event handler for selecting a category for filtering
 const handleCategoryChange = (categoryName) => {
    setSelectedCategory(categoryName);
 };
 // Add "All" to the beginning of the array
uniqueCategories.unshift("All");


  // Update suggestions as the searchKey changes
  React.useEffect(() => {
    updateSuggestions(searchKey);
  }, [searchKey]);


  return (
  <>
<div className='blogfirstbox-container'>
       <div className='firstbox-container-sub'>
        <h1 className='blogfirstbox-container-subtitle'>Blog</h1>
<p className='firstbox-container-subpara mx-auto'>Empowering everyday individuals,<br/>
one task at a time</p>

   <div className='blogfirstbox-container-subinputbox'>
    <input placeholder='Search topics' data-bs-toggle="modal" data-bs-target="#staticBackdropblog"/>
            <button data-bs-toggle="modal" data-bs-target="#staticBackdropblog"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
<path d="M24.6543 22.8288L20.0278 18.2071C23.5677 13.8027 23.2261 7.28903 19.1894 3.28779C17.0781 1.17872 14.2524 0 11.2404 0C8.22838 0 5.43386 1.17872 3.29134 3.28779C1.17999 5.39686 0 8.2195 0 11.2282C0 14.2369 1.17999 17.0285 3.29134 19.1687C5.4027 21.2778 8.22838 22.4565 11.2404 22.4565C13.7867 22.4565 16.2706 21.588 18.2579 20.0062L22.8845 24.6279C23.133 24.876 23.4433 25 23.754 25C24.0955 25 24.4061 24.876 24.6234 24.6279C25.1203 24.1006 25.1203 23.3251 24.6544 22.8288L24.6543 22.8288ZM19.9967 11.1973C19.9967 13.5236 19.0963 15.7259 17.4504 17.3697C15.8047 19.0137 13.6 19.9133 11.2713 19.9133C8.9425 19.9133 6.73772 19.0139 5.09213 17.3697C3.44643 15.7258 2.54584 13.5235 2.54584 11.1973C2.54584 8.87103 3.44621 6.66863 5.09213 5.02482C6.73783 3.38089 8.9425 2.48128 11.2713 2.48128C13.6 2.48128 15.8048 3.38067 17.4504 5.02482C19.0963 6.66874 19.9967 8.87103 19.9967 11.1973Z" fill="black"/>
</svg></button>
</div>
<div className='modal fade modal-backdrop-blur' id="staticBackdropblog" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden='true'>
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content">
      <div className='row mt-3'>
        <div className='col-2 text-center mt-2'><AiOutlineLeft style={{color:'#858585',fontSize:'1.5rem',cursor:'pointer'}}/></div>
        <div className='col-8'><h5 className="modal-title text-center" id="staticBackdropLabel" style={{fontSize:'1.5rem'}}>Search <span style={{color:'#FDB633'}}>Topics</span></h5></div>
        <div className='col-2 text-center'><button type="button" className='text-center modelclosbtn' data-bs-dismiss="modal" aria-label="Close"><AiOutlineClose/></button></div>
      </div>
      <div className="modal-body mb-4">
      <div className='text-center mt-4'>
        <input id="modelsearchinput" placeholder='Search topics'  value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}/>
      </div>
      <ul className='mx-3 mt-4' style={{ textAlign: 'left' }}>
  {suggestions.length > 0 ? (
    suggestions.map((suggestion, index) => {
      const searchQuery = searchKey.toLowerCase();
      const categoryName = suggestion.toLowerCase();
      const letterIndex = categoryName.indexOf(searchQuery);

      if (letterIndex !== -1) {
        const beforeLetter = suggestion.slice(0, letterIndex);
        const afterLetter = suggestion.slice(letterIndex + searchQuery.length);

        return (
          <li
            className='mx-4 mt-5 poptit'
            key={index}
            onClick={() => handleSuggestionClick(suggestion)}
            onClickCapture={()=>setSelectedCategory(suggestion)}
          >
            {beforeLetter}
            <span className="blue-text">{searchQuery}</span>
            {afterLetter}
          </li>
        );
      }
      return null; // No need to render anything for topics that don't match.
    })
  ) : searchKey.trim() !== "" && (
    <h6 className='mx-4 mt-4 poptit' style={{ color: 'red', fontWeight: '500' }}>
      There are no topics related to this keyword
    </h6>
  )}
</ul>


        </div>
    </div>
  </div>
</div>
       </div>
    </div>

    <div className='containerleftrightmargin desktopboxdisplay howmobileitworkmargintop'> 
        <h1 className='howTitle text-center'>Popular Topics</h1>
        <div className='row mx-auto'>
        {uniqueCategories.map((categoryName) => (
            <div key={categoryName} className='col-md-4'>
               <button className={selectedCategory === categoryName ? 'active' : 'categoerytbn'} onClick={() => handleCategoryChange(categoryName)}>
                  {categoryName === 'All' ? 'All Topics' : categoryName}
               </button>
            </div>
         ))}
        </div>
    </div>
    <div className='mx-5 mobiledisplay howmobileitworkmargintop' > 
        <h1 className='howTitle text-center mt-5'>Popular Topics</h1>
        <button className='active' onClick={troggle}>All Topics <AiOutlineDown className='mx-2' style={{color:"#ffa700"}}/></button>
        {showbtn && <><button className='categoerytbn'>Local Tasker News</button>
        <button className='categoerytbn'>Learn & How-Tos</button>
        <button className='categoerytbn'>Home Inspiration</button>
        <button className='categoerytbn'>All About Tasking</button>
        <button className='categoerytbn'>Tips</button></>}
    </div>
    <div ref={blogsSectionRef}>
    <BlogCard blogList={filteredBlogData()} selectedCategory={selectedCategory}/>
    </div>
    </>
  )
}

export default FirstBox