exports.id = 520;
exports.ids = [520];
exports.modules = {

/***/ 1520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__);




"use client";
const QuestionAnswer = ({ btnvalue  })=>{
    const { 0: showanswer , 1: setShowanswer  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const { 0: showanswer1 , 1: setShowanswer1  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: showanswer2 , 1: setShowanswer2  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: showanswer3 , 1: setShowanswer3  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "containerleftrightmargin desktopboxdisplay howmobileitworkmargintop",
                style: {
                    marginBottom: "6rem"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row mt-5",
                    style: {
                        paddingBottom: "12.5rem"
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-md-6",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                    className: "lefttitle mt-5 mx-3",
                                    children: [
                                        "Your Questions",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                        }),
                                        "Answered"
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "mt-4 paracardleft mx-3",
                                    children: [
                                        "We're an organization with a mission.Constantly",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                        }),
                                        "striving to make the impossible possible,we bring",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                        }),
                                        "about meaningful change in communities and",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                        }),
                                        " empower those who need it most."
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                    href: btnvalue,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "hirebtn mx-3",
                                        children: "Read More"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-md-6",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "answerbox mt-5",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                            className: "answertitle mb-4",
                                            children: "What is Local Tasker?"
                                        }),
                                        showanswer === true ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "plus mt-2",
                                            onClick: ()=>setShowanswer(false)
                                            ,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "/assets/Section close icon.png",
                                                alt: "mini",
                                                style: {
                                                    borderRadius: "50%",
                                                    broder: "1px solid #1171CA"
                                                }
                                            })
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "plus mt-2",
                                            onClick: ()=>setShowanswer(true)
                                            ,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "/assets/Section open icon.svg",
                                                alt: "plus",
                                                style: {
                                                    borderRadius: "50%",
                                                    broder: "1px solid #1171CA"
                                                }
                                            })
                                        })
                                    ]
                                }),
                                showanswer && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "mx-1 mb-4 paracardleft",
                                    children: [
                                        "LacalTasker is a platform that connects individuals",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                        }),
                                        "and businesses with local service providers who can",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                        }),
                                        "perform various tasks such as cleaning,",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                        }),
                                        " handyman work, gardening, and more. It allows",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                        }),
                                        "users to quickly and easily find reliable help for their",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                        }),
                                        " everyday needs."
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "answerbox",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                            className: "answertitle mb-4",
                                            children: "What kind of taskers are on Local Tasker?"
                                        }),
                                        showanswer1 === true ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "plus mt-2",
                                            onClick: ()=>setShowanswer1(false)
                                            ,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "/assets/Section close icon.png",
                                                alt: "mini",
                                                style: {
                                                    borderRadius: "50%",
                                                    broder: "1px solid #1171CA"
                                                }
                                            })
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "plus mt-2",
                                            onClick: ()=>setShowanswer1(true)
                                            ,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "/assets/Section open icon.svg",
                                                alt: "plus",
                                                style: {
                                                    borderRadius: "50%",
                                                    broder: "1px solid #1171CA"
                                                }
                                            })
                                        })
                                    ]
                                }),
                                showanswer1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "mx-1 mb-4 paracardleft",
                                    children: [
                                        "LacalTasker is a platform that connects individuals",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                        }),
                                        "and businesses with local service providers who can",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                        }),
                                        "perform various tasks such as cleaning,",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                        }),
                                        " handyman work, gardening, and more. It allows",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                        }),
                                        "users to quickly and easily find reliable help for their",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                        }),
                                        " everyday needs."
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "answerbox",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                            className: "answertitle mb-4",
                                            children: "How much doees it cost?"
                                        }),
                                        showanswer2 === true ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "plus mt-2",
                                            onClick: ()=>setShowanswer2(false)
                                            ,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "/assets/Section close icon.png",
                                                alt: "mini",
                                                style: {
                                                    borderRadius: "50%",
                                                    broder: "1px solid #1171CA"
                                                }
                                            })
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "plus mt-2",
                                            onClick: ()=>setShowanswer2(true)
                                            ,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "/assets/Section open icon.svg",
                                                alt: "plus",
                                                style: {
                                                    borderRadius: "50%",
                                                    broder: "1px solid #1171CA"
                                                }
                                            })
                                        })
                                    ]
                                }),
                                showanswer2 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "mx-1 mb-4 paracardleft",
                                    children: [
                                        "LacalTasker is a platform that connects individuals",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                        }),
                                        "and businesses with local service providers who can",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                        }),
                                        "perform various tasks such as cleaning,",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                        }),
                                        " handyman work, gardening, and more. It allows",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                        }),
                                        "users to quickly and easily find reliable help for their",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                        }),
                                        " everyday needs."
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "answerbox",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                            className: "answertitle mb-4",
                                            children: "Can i become a local Tasker?"
                                        }),
                                        showanswer3 === true ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "plus mt-2",
                                            onClick: ()=>setShowanswer3(false)
                                            ,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "/assets/Section close icon.png",
                                                alt: "mini",
                                                style: {
                                                    borderRadius: "50%",
                                                    broder: "1px solid #1171CA"
                                                }
                                            })
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "plus mt-2",
                                            onClick: ()=>setShowanswer3(true)
                                            ,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "/assets/Section open icon.svg",
                                                alt: "plus",
                                                style: {
                                                    borderRadius: "50%",
                                                    broder: "1px solid #1171CA"
                                                }
                                            })
                                        })
                                    ]
                                }),
                                showanswer3 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "mx-1 mb-4 paracardleft",
                                    children: [
                                        "LacalTasker is a platform that connects individuals",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                        }),
                                        "and businesses with local service providers who can",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                        }),
                                        "perform various tasks such as cleaning,",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                        }),
                                        " handyman work, gardening, and more. It allows",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                        }),
                                        "users to quickly and easily find reliable help for their",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                        }),
                                        " everyday needs."
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container mobiledisplay",
                style: {
                    marginTop: "7.5rem",
                    marginBottom: "2rem"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                        className: "lefttitle text-center mt-2",
                        children: [
                            "Your Questions",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                            }),
                            "Answered"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "mt-4 ourstorypara mx-41",
                        children: "We're an organization with a mission.Constantly striving to make the impossible possible,we bring about meaningful change in communities and empower those who need it most."
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "answerbox mt-4 mx-41",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                className: "answertitle",
                                children: "What is Local Tasker?"
                            }),
                            showanswer === true ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "plus",
                                onClick: ()=>setShowanswer(false)
                                ,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/assets/Section close icon.png",
                                    alt: "mini",
                                    style: {
                                        borderRadius: "50%",
                                        broder: "1px solid #1171CA"
                                    }
                                })
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "plus",
                                onClick: ()=>setShowanswer(true)
                                ,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/assets/Section open icon.png",
                                    alt: "plus",
                                    style: {
                                        borderRadius: "50%",
                                        broder: "1px solid #1171CA"
                                    }
                                })
                            })
                        ]
                    }),
                    showanswer && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "mt-2 ourstorypara mx-41",
                        children: "LacalTasker is a platform that connects individuals and businesses with local service providers who can perform various tasks such as cleaning,handyman work,gardening,and more.It allows users to quickly and easily find reliable help for their everyday needs."
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "answerbox mt-4 mx-41",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                className: "answertitle",
                                children: "What kind of taskers are on Local Tasker?"
                            }),
                            showanswer1 === true ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "plus",
                                onClick: ()=>setShowanswer1(false)
                                ,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/assets/Section close icon.png",
                                    alt: "mini",
                                    style: {
                                        borderRadius: "50%",
                                        broder: "1px solid #1171CA"
                                    }
                                })
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "plus",
                                onClick: ()=>setShowanswer1(true)
                                ,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/assets/Section open icon.png",
                                    alt: "plus",
                                    style: {
                                        borderRadius: "50%",
                                        broder: "1px solid #1171CA"
                                    }
                                })
                            })
                        ]
                    }),
                    showanswer1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "mt-2 ourstorypara mx-41",
                        children: "LacalTasker is a platform that connects individuals and businesses with local service providers who can perform various tasks such as cleaning,handyman work,gardening,and more.It allows users to quickly and easily find reliable help for their everyday needs."
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "answerbox mt-4 mx-41",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                className: "answertitle",
                                children: "How much doees it cost?"
                            }),
                            showanswer2 === true ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "plus",
                                onClick: ()=>setShowanswer2(false)
                                ,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/assets/Section close icon.png",
                                    alt: "mini",
                                    style: {
                                        borderRadius: "50%",
                                        broder: "1px solid #1171CA"
                                    }
                                })
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "plus",
                                onClick: ()=>setShowanswer2(true)
                                ,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/assets/Section open icon.png",
                                    alt: "plus",
                                    style: {
                                        borderRadius: "50%",
                                        broder: "1px solid #1171CA"
                                    }
                                })
                            })
                        ]
                    }),
                    showanswer2 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "mt-2 ourstorypara mx-41",
                        children: "LacalTasker is a platform that connects individuals and businesses with local service providers who can perform various tasks such as cleaning,handyman work,gardening,and more.It allows users to quickly and easily find reliable help for their everyday needs."
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "answerbox mt-4 mx-41",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                className: "answertitle",
                                children: "Can i become a local Tasker?"
                            }),
                            showanswer3 === true ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "plus",
                                onClick: ()=>setShowanswer3(false)
                                ,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/assets/Section close icon.png",
                                    alt: "mini",
                                    style: {
                                        borderRadius: "50%",
                                        broder: "1px solid #1171CA"
                                    }
                                })
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "plus",
                                onClick: ()=>setShowanswer3(true)
                                ,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/assets/Section open icon.png",
                                    alt: "plus",
                                    style: {
                                        borderRadius: "50%",
                                        broder: "1px solid #1171CA"
                                    }
                                })
                            })
                        ]
                    }),
                    showanswer3 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "mt-2 ourstorypara mx-41",
                        children: "LacalTasker is a platform that connects individuals and businesses with local service providers who can perform various tasks such as cleaning,handyman work,gardening,and more.It allows users to quickly and easily find reliable help for their everyday needs."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-center pb-5",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            href: btnvalue,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "hirebtn",
                                children: "Read more"
                            })
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuestionAnswer);


/***/ }),

/***/ 1664:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(8418)


/***/ })

};
;