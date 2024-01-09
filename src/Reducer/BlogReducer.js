const BlogReducer=(state,action)=>{
    switch(action.type){
        case "SET_AllBlogs_LOADING":
            return{
                ...state,
                BlogsLoading:true
            };
            case "SET_AllBlog_DATA":
              return{
                ...state,
                BlogsLoading:false,
                Blogs_list:action.payload,
              };
              case "SET_AllBlogUser_DATA":
                return{
                  ...state,
                  BlogsLoading:false,
                  Blogs_listUser:action.payload,
                };
                case "SET_AllJOBS_LOADING":
                  return{
                      ...state,
                      isjobloading:true
                  };
                  case "SET_AllJOBS_DATA":
                    return{
                      ...state,
                      isjobloading:false,
                      allJobs:action.payload,
                    };
                    case "AllJOBSAPI_ERROR":
                      return{
                          ...state,
                          isjobloading:true,
                          isError:true
                      };
                      case "SET_JobsDetail_LOADING":
                        return{
                            ...state,
                            isjobdetailLoading:true
                        };
                        case "SET_JobsDetail_DATA":
                          return{
                            ...state,
                            isjobdetailLoading:false,
                            jobdetail:action.payload,
                          };
                          case "JobsDetail_ERROR":
                            return{
                                ...state,
                                isjobdetailLoading:true,
                                isError:true
                            };

                    case "SET_BlogDetail_LOADING":
                  return{
                      ...state,
                      isblogDetailloading:true
                  };
                  case "SET_BlogDetail_DATA":
                    return{
                      ...state,
                      isblogDetailloading:false,
                      blogDetail:action.payload,
                    };
                    case "SET_RelatedBlogs_DATA":
                    return{
                      ...state,
                      isblogDetailloading:false,
                      RelatedBlogs:action.payload,
                    };
                    case "BlogDetail_ERROR":
                      return{
                          ...state,
                          isblogDetailloading:true,
                          isError:true
                      };
              case "SET_BlogCategory_LOADING":
                return{
                    ...state,
                    isBlogCategoryLoading:true
                };
                case "SET_BlogCategory_DATA":
                  return{
                    ...state,
                    isBlogCategoryLoading:false,
                    BlogCategory_list:action.payload,
                  };
                  case "BlogCategoryAPI_ERROR":
                    return{
                        ...state,
                        isBlogCategoryLoading:true,
                        isError:true
                    };
    
                    case "SET_MainCategory_LOADING":
                return{
                    ...state,
                    PopMainCategoryLoading:true
                };
                case "SET_MainCategory_DATA":
                  return{
                    ...state,
                    PopMainCategoryLoading:false,
                    PopMainCategory:action.payload,
                  };
                  case "API_ERROR_MainCategory":
                    return{
                        ...state,
                        PopMainCategoryLoading:true,
                        isError:true
                    };
    
                    case "SET_SubCategory_LOADING":
                        return{
                            ...state,
                            PopSubCategoryLoading:true
                        };
                        case "SET_SubCategory_DATA":
                          return{
                            ...state,
                            PopSubCategoryLoading:false,
                            PopSubCategory:action.payload,
                          };
                          case "API_ERROR_SubCategory":
                            return{
                                ...state,
                                PopSubCategoryLoading:true,
                                isError:true
                            };

                            case "SET_SubChildCategory_LOADING":
                                return{
                                    ...state,
                                    PopSubChildCategoryLoading:true
                                };
                                case "SET_SubChildCategory_DATA":
                                  return{
                                    ...state,
                                    PopSubChildCategoryLoading:false,
                                    PopSubChildCategory:action.payload,
                                  };
                                  case "API_ERROR_SubChildCategory":
                                    return{
                                        ...state,
                                        PopSubChildCategoryLoading:true,
                                        isError:true
                                    };
                                    case "SET_PostCodes_LOADING":
                                        return{
                                            ...state,
                                            ispostcodeLoading:true
                                        };
                                        case "SET_AllPostCodes_DATA":
                                          return{
                                            ...state,
                                            ispostcodeLoading:false,
                                            postCode_list:action.payload,
                                          };
                                          case "API_ERROR_PostCodes":
                                            return{
                                                ...state,
                                                ispostcodeLoading:true,
                                                isError:true
                                            };
              case "API_ERROR":
                return{
                    ...state,
                    BlogsLoading:true,
                    isError:true
                };

                default:
                 return state;
    }
}
export default BlogReducer;