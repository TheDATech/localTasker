import axios from "axios";
import { createContext, useContext,useEffect,useReducer, useState } from "react";
import reducer from "../Reducer/BlogReducer"
import { useRouter } from 'next/router';

const BlogContext = createContext();

const initialState={
    BlogsLoading:false,
    Blogs_list:{},
    Blogs_listUser:{},
    isError:false,
    isBlogCategoryLoading:false,
    BlogCategory_list:{},
    PopMainCategoryLoading:false,
    PopMainCategory:{},
    PopSubCategoryLoading:false,
    PopSubCategory:{},
    PopSubChildCategoryLoading:false,
    PopSubChildCategory:{},
    ispostcodeLoading:false,
    postCode_list:{},
    blogDetail:{},
    RelatedBlogs:{},
    isblogDetailloading:false,
    allJobs:{},
    isjobloading:false,
    jobdetail:{},
    isjobdetailLoading:false
}

const BlogProvider = ({ children }) => {
    const [state,dispatch]=useReducer(reducer,initialState);
    const router = useRouter(); // Initialize the useRouter hook
    const [parent_category_id,setparent_category_id]=useState('')
  const [subcategory,setsubcategory]=useState('');
    const { query } = router;
    let isMounted = true;
     console.log('query.slug',query.slug);
    //blogs function to get all blogs 
  const getAllBlogs=async(url)=>{
    dispatch({type:"SET_AllBlogs_LOADING"})
try{
  const res=await axios.get(url,{
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if(isMounted){
    const Blogs_list=await res.data.blogs
    const Blogs_listUser=await res.data.admin_details[0]
    dispatch({type:"SET_AllBlog_DATA",payload:Blogs_list})
    dispatch({type:"SET_AllBlogUser_DATA",payload:Blogs_listUser})
  }
}
catch(err){
  if (isMounted) {
    dispatch({type:"API_ERROR"})
    console.log(err)
  }
}
  }

   //blogCategory function to get all blogs 
   const getBlogCategory=async(url)=>{
    dispatch({type:"SET_BlogCategory_LOADING"})
try{
  const res=await axios.get(url,{
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if(isMounted){
    console.log('res BlogCategory_list blogs',res)
    const BlogCategory_list=await res.data.blog_categories
    dispatch({type:"SET_BlogCategory_DATA",payload:BlogCategory_list})
  }
}
catch(err){
  if(isMounted){
    dispatch({type:"BlogCategoryAPI_ERROR"})
    console.log(err)
  }
}
  }

    //blogdetail function to get all blogs 
    const getBlogDetail = async () => {
      dispatch({ type: "SET_BlogDetail_LOADING" });
      try {
        // Use query parameters in your API request
        const res = await axios.get(`https://app.localtasker.co.uk/api/blogs/details/${query.slug}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if(isMounted){
          console.log('res blog detail',res.data.related_blogs);
          const blogDetail = await res.data.blogs_details;
          const RelatedBlogs=await res.data.related_blogs;
          console.log('blog detail',blogDetail,'RelatedBlogs',RelatedBlogs);
          dispatch({ type: "SET_BlogDetail_DATA", payload: blogDetail });
          dispatch({ type: "SET_RelatedBlogs_DATA", payload: RelatedBlogs });
        }
      } catch (err) {
        if(isMounted){
          dispatch({ type: "BlogDetail_ERROR" });
          console.log(err);
        }
      }
    };
       //Jobs function to get all jobs
  const getAllJOBS=async(url)=>{
    dispatch({type:"SET_AllJOBS_LOADING"})
try{
  const res=await axios.get(url,{
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if(isMounted){
    const allJobs=await res.data.jobs
    dispatch({type:"SET_AllJOBS_DATA",payload:allJobs})
  }
}
catch(err){
  if (isMounted) {
    dispatch({type:"AllJOBSAPI_ERROR"})
    console.log(err)
  }
}
  }

   //blogdetail function to get all blogs 
   const getJobsDetail = async (id) => {
    dispatch({ type: "SET_JobsDetail_LOADING" });
    try {
      // Use query parameters in your API request
      const res = await axios.get(`https://app.localtasker.co.uk/api/career/details/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if(isMounted){
        const jobdetail = await res.data.job_details;
        console.log('jobdetail',jobdetail);
        dispatch({ type: "SET_JobsDetail_DATA", payload: jobdetail });
      }
    } catch (err) {
      if(isMounted){
        dispatch({ type: "JobsDetail_ERROR" });
        console.log(err);
      }
    }
  };
   //Pop up first level function to get main Category
   const getMainCategory=async(url)=>{
    dispatch({type:"SET_MainCategory_LOADING"})
try{
  const res=await axios.get(url,{
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if(isMounted){
    const categoriesCopy = [...res.data.categories]; 
    const PopMainCategory = categoriesCopy.sort((a, b) => {
      if (typeof a.name === 'string' && typeof b.name === 'string') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });
    console.log('PopMainCategory',PopMainCategory);
    dispatch({type:"SET_MainCategory_DATA",payload:PopMainCategory})
  }
}
catch(err){
  if(isMounted){
    dispatch({type:"API_ERROR_MainCategory"})
    console.log(err)
  }
}
  }

  //Pop up second level function to get sub Category of main
  const getSubCategory=async(name)=>{
    setparent_category_id(name);
    dispatch({type:"SET_SubCategory_LOADING"})
try{
  const res=await axios.get(`https://app.localtasker.co.uk/api/sub/categories/${name}`,{
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if(isMounted){
    console.log('res PopSubCategory',res.data.sub_categories)
    const PopSubCategory=await res.data.sub_categories
    dispatch({type:"SET_SubCategory_DATA",payload:PopSubCategory})
  }
}
catch(err){
  if(isMounted){
    dispatch({type:"API_ERROR_SubCategory"})
    console.log(err)
  }
}
  }

   //Pop up second level function to get sub Category of second level
   const getSubChildCategory=async(childname)=>{
    setsubcategory(childname)
    dispatch({type:"SET_SubChildCategory_LOADING"})
try{
  const res=await axios.get(`https://app.localtasker.co.uk/api/sub/child/categories/${childname}`,{
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if(isMounted){
    console.log('res PopSubChildCategory',res.data.sub_child_categories)
    const  PopSubChildCategory=await res.data.sub_child_categories
    dispatch({type:"SET_SubChildCategory_DATA",payload:PopSubChildCategory})
  }
}
catch(err){
  if(isMounted){
    dispatch({type:"API_ERROR_SubChildCategory"})
    console.log(err)
  }
}
  }

  

  useEffect(()=>{
    getAllBlogs('https://app.localtasker.co.uk/api/all/blogs')
    getMainCategory('https://app.localtasker.co.uk/api/all/categories')
    getBlogDetail()
    getBlogCategory('https://app.localtasker.co.uk/api/blogs/category/1')
    getAllJOBS('https://app.localtasker.co.uk/api/career')
    return () => {
      isMounted = false; // Mark the component as unmounted in the cleanup function
    };
  },[query.slug])

    return <BlogContext.Provider value={{...state,getSubCategory,getSubChildCategory,getJobsDetail,parent_category_id,subcategory}}>{children}</BlogContext.Provider>;
}

//custom hooks
const useBlogContext = () => {
    return useContext(BlogContext);
  };

export { BlogProvider, BlogContext, useBlogContext };