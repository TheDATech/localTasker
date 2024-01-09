exports.id = 681;
exports.ids = [681];
exports.modules = {

/***/ 1681:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ Subcribe)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var _Contact_us_Schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3890);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9648);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_7__, axios__WEBPACK_IMPORTED_MODULE_5__]);
([react_toastify__WEBPACK_IMPORTED_MODULE_7__, axios__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);









const initialValues = {
    email: ""
};
const Subcribe = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { 0: msgerr , 1: setMsgerr  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: msgsucc , 1: setMsgsucc  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const onSubmit = async (values)=>{
        console.log('values', values);
        const formData = new FormData();
        formData.append('email', values.email);
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_5__["default"].post('https://app.localtasker.co.uk/api/subscription', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.data.success === 'Subscribed Successfully') {
                react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.success(response.data.success, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light"
                });
                setMsgsucc(response.data.success);
                setMsgerr("");
                formik.resetForm();
            } else {
                react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error(response.data.fail, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light"
                });
                setMsgerr(response.data.fail);
            }
        } catch (err) {
            console.log(err);
        }
    };
    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_6__.useFormik)({
        initialValues,
        validateOnBlur: true,
        onSubmit,
        validationSchema: _Contact_us_Schema__WEBPACK_IMPORTED_MODULE_4__/* .SubcriptionSchema */ .NQ
    });
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "container-fluid",
        style: {
            background: 'rgba(17, 113, 202, 0.90)'
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_7__.ToastContainer, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row pt-4",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-md-5",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "subcribetitle",
                                    children: "Join us today, together, we can overcome any task"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "subcribepara",
                                    children: "Embrace the efficiency of tailored task services, finely attuned to your diverse needs and preferences."
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-md-2 sprintimagemargin",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "86",
                                height: "86",
                                viewBox: "0 0 86 86",
                                fill: "none",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        d: "M74.4996 45.5657C75.3091 44.6861 73.1019 44.305 72.449 44.9815C63.6735 54.3182 48.957 58.9698 39.1529 48.8189C44.566 44.4428 48.7684 38.3414 50.4616 32.178C51.7787 27.3404 50.9805 21.3373 45.9561 19.006C41.9745 17.1894 37.1214 18.6724 33.7062 21.0673C24.5215 27.4896 29.3937 40.9236 36.2182 48.6205C34.5735 49.8474 32.8621 50.8897 31.045 51.7001C18.5306 57.5264 5.34133 48.0091 6.43857 34.4974C6.51243 33.4909 4.28242 33.6807 4.16037 34.7261C3.22106 46.1375 12.5431 55.8806 24.1554 55.1155C28.8273 54.8035 33.5089 52.9045 37.5568 50.0068C38.4623 50.9473 39.4263 51.762 40.4493 52.4511C51.6518 60.4646 65.9291 54.6607 74.4997 45.5657L74.4996 45.5657ZM30.9461 30.6848C30.8438 26.6577 32.8001 23.5247 36.2615 21.4877C39.8203 19.3734 44.3869 18.8293 47.1264 22.5798C50.9328 27.7741 47.6333 35.2127 44.5246 39.893C42.7064 42.6006 40.4138 45.2103 37.8626 47.3938C34.149 42.916 31.1056 36.4832 30.946 30.6846L30.9461 30.6848Z",
                                        fill: "white"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        d: "M78.3494 39.8218C74.6767 39.8933 70.9575 39.6066 67.3076 39.1072C66.0492 38.9214 65.3425 40.4303 66.8622 40.6456C70.2507 41.1155 73.6213 41.3633 77.0224 41.3492C75.6127 45.4706 74.8612 49.6222 74.6615 53.968C74.6362 54.9359 76.9045 54.7945 76.9397 53.7393C77.1114 49.2577 77.9701 44.9421 79.4878 40.6563C79.7436 39.9787 78.7466 39.8223 78.3494 39.8218Z",
                                        fill: "white"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-md-5 mb-5",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "subcribe-btn-container",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "btn1",
                                            onClick: ()=>router.push('https://app.localtasker.co.uk/search')
                                            ,
                                            children: "Hire a Tasker"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                            href: "/become_a_tasker",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    className: "btn2",
                                                    children: "Become a Tasker"
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                    className: "subcribe-container-subinputbox mt-4",
                                    onSubmit: formik.handleSubmit,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            placeholder: "Enter your email",
                                            name: "email",
                                            value: formik.values.email,
                                            onChange: formik.handleChange,
                                            onBlur: formik.handleBlur
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            disabled: !formik.isValid,
                                            type: "submit",
                                            children: "Register Now"
                                        })
                                    ]
                                }),
                                formik.errors.email && formik.touched.email ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "mx-3",
                                    style: {
                                        color: "red",
                                        textAlign: "left",
                                        fontSize: "1.4rem"
                                    },
                                    children: formik.errors.email
                                }) : null,
                                msgerr ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "mx-3",
                                    style: {
                                        color: "red",
                                        textAlign: "left",
                                        fontSize: "1.4rem"
                                    },
                                    children: msgerr
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "mx-3",
                                    style: {
                                        color: "green",
                                        textAlign: "left",
                                        fontSize: "1.4rem"
                                    },
                                    children: msgsucc
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "subcribeinputpara",
                                    children: "Sign-up for the latest news and updates!"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    }));
};

});

/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 1664:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(8418)


/***/ })

};
;