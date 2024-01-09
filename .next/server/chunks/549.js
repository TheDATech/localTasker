"use strict";
exports.id = 549;
exports.ids = [549];
exports.modules = {

/***/ 4549:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JW": () => (/* binding */ BlogProvider),
/* harmony export */   "FF": () => (/* binding */ useBlogContext)
/* harmony export */ });
/* unused harmony export BlogContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Reducer_BlogReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5995);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);
axios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];





const BlogContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();
const initialState = {
    BlogsLoading: false,
    Blogs_list: {
    },
    Blogs_listUser: {
    },
    isError: false,
    isBlogCategoryLoading: false,
    BlogCategory_list: {
    },
    PopMainCategoryLoading: false,
    PopMainCategory: {
    },
    PopSubCategoryLoading: false,
    PopSubCategory: {
    },
    PopSubChildCategoryLoading: false,
    PopSubChildCategory: {
    },
    ispostcodeLoading: false,
    postCode_list: {
    },
    blogDetail: {
    },
    RelatedBlogs: {
    },
    isblogDetailloading: false,
    allJobs: {
    },
    isjobloading: false,
    jobdetail: {
    },
    isjobdetailLoading: false
};
const BlogProvider = ({ children  })=>{
    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(_Reducer_BlogReducer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, initialState);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)(); // Initialize the useRouter hook
    const { 0: parent_category_id , 1: setparent_category_id  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
    const { 0: subcategory , 1: setsubcategory  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
    const { query  } = router;
    let isMounted = true;
    console.log('query.slug', query.slug);
    //blogs function to get all blogs 
    const getAllBlogs = async (url)=>{
        dispatch({
            type: "SET_AllBlogs_LOADING"
        });
        try {
            const res = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(url, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (isMounted) {
                const Blogs_list = await res.data.blogs;
                const Blogs_listUser = await res.data.admin_details[0];
                dispatch({
                    type: "SET_AllBlog_DATA",
                    payload: Blogs_list
                });
                dispatch({
                    type: "SET_AllBlogUser_DATA",
                    payload: Blogs_listUser
                });
            }
        } catch (err) {
            if (isMounted) {
                dispatch({
                    type: "API_ERROR"
                });
                console.log(err);
            }
        }
    };
    //blogCategory function to get all blogs 
    const getBlogCategory = async (url)=>{
        dispatch({
            type: "SET_BlogCategory_LOADING"
        });
        try {
            const res = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(url, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (isMounted) {
                console.log('res BlogCategory_list blogs', res);
                const BlogCategory_list = await res.data.blog_categories;
                dispatch({
                    type: "SET_BlogCategory_DATA",
                    payload: BlogCategory_list
                });
            }
        } catch (err) {
            if (isMounted) {
                dispatch({
                    type: "BlogCategoryAPI_ERROR"
                });
                console.log(err);
            }
        }
    };
    //blogdetail function to get all blogs 
    const getBlogDetail = async ()=>{
        dispatch({
            type: "SET_BlogDetail_LOADING"
        });
        try {
            // Use query parameters in your API request
            const res = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`https://app.localtasker.co.uk/api/blogs/details/${query.slug}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (isMounted) {
                console.log('res blog detail', res.data.related_blogs);
                const blogDetail = await res.data.blogs_details;
                const RelatedBlogs = await res.data.related_blogs;
                console.log('blog detail', blogDetail, 'RelatedBlogs', RelatedBlogs);
                dispatch({
                    type: "SET_BlogDetail_DATA",
                    payload: blogDetail
                });
                dispatch({
                    type: "SET_RelatedBlogs_DATA",
                    payload: RelatedBlogs
                });
            }
        } catch (err) {
            if (isMounted) {
                dispatch({
                    type: "BlogDetail_ERROR"
                });
                console.log(err);
            }
        }
    };
    //Jobs function to get all jobs
    const getAllJOBS = async (url)=>{
        dispatch({
            type: "SET_AllJOBS_LOADING"
        });
        try {
            const res = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(url, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (isMounted) {
                const allJobs = await res.data.jobs;
                dispatch({
                    type: "SET_AllJOBS_DATA",
                    payload: allJobs
                });
            }
        } catch (err) {
            if (isMounted) {
                dispatch({
                    type: "AllJOBSAPI_ERROR"
                });
                console.log(err);
            }
        }
    };
    //blogdetail function to get all blogs 
    const getJobsDetail = async (id)=>{
        dispatch({
            type: "SET_JobsDetail_LOADING"
        });
        try {
            // Use query parameters in your API request
            const res = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`https://app.localtasker.co.uk/api/career/details/${id}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (isMounted) {
                const jobdetail = await res.data.job_details;
                console.log('jobdetail', jobdetail);
                dispatch({
                    type: "SET_JobsDetail_DATA",
                    payload: jobdetail
                });
            }
        } catch (err) {
            if (isMounted) {
                dispatch({
                    type: "JobsDetail_ERROR"
                });
                console.log(err);
            }
        }
    };
    //Pop up first level function to get main Category
    const getMainCategory = async (url)=>{
        dispatch({
            type: "SET_MainCategory_LOADING"
        });
        try {
            const res = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(url, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (isMounted) {
                const categoriesCopy = [
                    ...res.data.categories
                ];
                const PopMainCategory = categoriesCopy.sort((a, b)=>{
                    if (typeof a.name === 'string' && typeof b.name === 'string') {
                        return a.name.localeCompare(b.name);
                    }
                    return 0;
                });
                console.log('PopMainCategory', PopMainCategory);
                dispatch({
                    type: "SET_MainCategory_DATA",
                    payload: PopMainCategory
                });
            }
        } catch (err) {
            if (isMounted) {
                dispatch({
                    type: "API_ERROR_MainCategory"
                });
                console.log(err);
            }
        }
    };
    //Pop up second level function to get sub Category of main
    const getSubCategory = async (name)=>{
        setparent_category_id(name);
        dispatch({
            type: "SET_SubCategory_LOADING"
        });
        try {
            const res = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`https://app.localtasker.co.uk/api/sub/categories/${name}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (isMounted) {
                console.log('res PopSubCategory', res.data.sub_categories);
                const PopSubCategory = await res.data.sub_categories;
                dispatch({
                    type: "SET_SubCategory_DATA",
                    payload: PopSubCategory
                });
            }
        } catch (err) {
            if (isMounted) {
                dispatch({
                    type: "API_ERROR_SubCategory"
                });
                console.log(err);
            }
        }
    };
    //Pop up second level function to get sub Category of second level
    const getSubChildCategory = async (childname)=>{
        setsubcategory(childname);
        dispatch({
            type: "SET_SubChildCategory_LOADING"
        });
        try {
            const res = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`https://app.localtasker.co.uk/api/sub/child/categories/${childname}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (isMounted) {
                console.log('res PopSubChildCategory', res.data.sub_child_categories);
                const PopSubChildCategory = await res.data.sub_child_categories;
                dispatch({
                    type: "SET_SubChildCategory_DATA",
                    payload: PopSubChildCategory
                });
            }
        } catch (err) {
            if (isMounted) {
                dispatch({
                    type: "API_ERROR_SubChildCategory"
                });
                console.log(err);
            }
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        getAllBlogs('https://app.localtasker.co.uk/api/all/blogs');
        getMainCategory('https://app.localtasker.co.uk/api/all/categories');
        getBlogDetail();
        getBlogCategory('https://app.localtasker.co.uk/api/blogs/category/1');
        getAllJOBS('https://app.localtasker.co.uk/api/career');
        return ()=>{
            isMounted = false; // Mark the component as unmounted in the cleanup function
        };
    }, [
        query.slug
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BlogContext.Provider, {
        value: {
            ...state,
            getSubCategory,
            getSubChildCategory,
            getJobsDetail,
            parent_category_id,
            subcategory
        },
        children: children
    }));
};
//custom hooks
const useBlogContext = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(BlogContext);
};


});

/***/ }),

/***/ 5995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const BlogReducer = (state, action)=>{
    switch(action.type){
        case "SET_AllBlogs_LOADING":
            return {
                ...state,
                BlogsLoading: true
            };
        case "SET_AllBlog_DATA":
            return {
                ...state,
                BlogsLoading: false,
                Blogs_list: action.payload
            };
        case "SET_AllBlogUser_DATA":
            return {
                ...state,
                BlogsLoading: false,
                Blogs_listUser: action.payload
            };
        case "SET_AllJOBS_LOADING":
            return {
                ...state,
                isjobloading: true
            };
        case "SET_AllJOBS_DATA":
            return {
                ...state,
                isjobloading: false,
                allJobs: action.payload
            };
        case "AllJOBSAPI_ERROR":
            return {
                ...state,
                isjobloading: true,
                isError: true
            };
        case "SET_JobsDetail_LOADING":
            return {
                ...state,
                isjobdetailLoading: true
            };
        case "SET_JobsDetail_DATA":
            return {
                ...state,
                isjobdetailLoading: false,
                jobdetail: action.payload
            };
        case "JobsDetail_ERROR":
            return {
                ...state,
                isjobdetailLoading: true,
                isError: true
            };
        case "SET_BlogDetail_LOADING":
            return {
                ...state,
                isblogDetailloading: true
            };
        case "SET_BlogDetail_DATA":
            return {
                ...state,
                isblogDetailloading: false,
                blogDetail: action.payload
            };
        case "SET_RelatedBlogs_DATA":
            return {
                ...state,
                isblogDetailloading: false,
                RelatedBlogs: action.payload
            };
        case "BlogDetail_ERROR":
            return {
                ...state,
                isblogDetailloading: true,
                isError: true
            };
        case "SET_BlogCategory_LOADING":
            return {
                ...state,
                isBlogCategoryLoading: true
            };
        case "SET_BlogCategory_DATA":
            return {
                ...state,
                isBlogCategoryLoading: false,
                BlogCategory_list: action.payload
            };
        case "BlogCategoryAPI_ERROR":
            return {
                ...state,
                isBlogCategoryLoading: true,
                isError: true
            };
        case "SET_MainCategory_LOADING":
            return {
                ...state,
                PopMainCategoryLoading: true
            };
        case "SET_MainCategory_DATA":
            return {
                ...state,
                PopMainCategoryLoading: false,
                PopMainCategory: action.payload
            };
        case "API_ERROR_MainCategory":
            return {
                ...state,
                PopMainCategoryLoading: true,
                isError: true
            };
        case "SET_SubCategory_LOADING":
            return {
                ...state,
                PopSubCategoryLoading: true
            };
        case "SET_SubCategory_DATA":
            return {
                ...state,
                PopSubCategoryLoading: false,
                PopSubCategory: action.payload
            };
        case "API_ERROR_SubCategory":
            return {
                ...state,
                PopSubCategoryLoading: true,
                isError: true
            };
        case "SET_SubChildCategory_LOADING":
            return {
                ...state,
                PopSubChildCategoryLoading: true
            };
        case "SET_SubChildCategory_DATA":
            return {
                ...state,
                PopSubChildCategoryLoading: false,
                PopSubChildCategory: action.payload
            };
        case "API_ERROR_SubChildCategory":
            return {
                ...state,
                PopSubChildCategoryLoading: true,
                isError: true
            };
        case "SET_PostCodes_LOADING":
            return {
                ...state,
                ispostcodeLoading: true
            };
        case "SET_AllPostCodes_DATA":
            return {
                ...state,
                ispostcodeLoading: false,
                postCode_list: action.payload
            };
        case "API_ERROR_PostCodes":
            return {
                ...state,
                ispostcodeLoading: true,
                isError: true
            };
        case "API_ERROR":
            return {
                ...state,
                BlogsLoading: true,
                isError: true
            };
        default:
            return state;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogReducer);


/***/ })

};
;