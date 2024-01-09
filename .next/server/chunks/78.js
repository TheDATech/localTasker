"use strict";
exports.id = 78;
exports.ids = [78];
exports.modules = {

/***/ 9078:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ MobileSubcribe)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Contact_us_Schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3890);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9648);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_4__]);
axios__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];






const initialValues = {
    email: ""
};
const MobileSubcribe = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { 0: msgerr , 1: setMsgerr  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: msgsucc , 1: setMsgsucc  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const onSubmit = async (values)=>{
        console.log('values', values);
        const formData = new FormData();
        formData.append('email', values.email);
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_4__["default"].post('https://app.localtasker.co.uk/api/subscription', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
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
                    theme: "light"
                });
                setMsgsucc(response.data.success);
                setMsgerr("");
                formik.resetForm();
            } else {
                toast.error(response.data.fail, {
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
    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_5__.useFormik)({
        initialValues,
        validateOnBlur: true,
        onSubmit,
        validationSchema: _Contact_us_Schema__WEBPACK_IMPORTED_MODULE_3__/* .SubcriptionSchema */ .NQ
    });
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container-fluid mobiledisplay",
        style: {
            backgroundColor: "#2c86f1"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container pt-4 pb-5 px-51",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "subcribetitle",
                    children: "Ready to get started"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "subcribe-btn-container",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "btn1",
                            onClick: ()=>router.push('https://app.localtasker.co.uk/search')
                            ,
                            children: "Hire a Tasker"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "btn2",
                            onClick: ()=>router.push('/become_a_tasker')
                            ,
                            children: "Become a Tasker"
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
                    style: {
                        color: "red",
                        textAlign: "left",
                        marginLeft: "6rem"
                    },
                    children: formik.errors.email
                }) : null,
                msgerr ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "mx-3",
                    style: {
                        color: "red",
                        textAlign: "left",
                        fontSize: "1.2rem"
                    },
                    children: msgerr
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "mx-3",
                    style: {
                        color: "green",
                        textAlign: "left",
                        fontSize: "1.2rem"
                    },
                    children: msgsucc
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "subcribeinputpara",
                    children: "Sign-up for the latest news and updates!"
                })
            ]
        })
    }));
};

});

/***/ }),

/***/ 3890:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gf": () => (/* binding */ ContactSchema),
/* harmony export */   "Nk": () => (/* binding */ JobApplySchema),
/* harmony export */   "NQ": () => (/* binding */ SubcriptionSchema)
/* harmony export */ });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);

const ContactSchema = yup__WEBPACK_IMPORTED_MODULE_0__.object({
    contact_type: yup__WEBPACK_IMPORTED_MODULE_0__.string().required('Select is required!'),
    full_name: yup__WEBPACK_IMPORTED_MODULE_0__.string().min(2).max(20).required("Please enter full name!"),
    email: yup__WEBPACK_IMPORTED_MODULE_0__.string().email("Please enter a valid email address").required("Email address is required!"),
    phone_number: yup__WEBPACK_IMPORTED_MODULE_0__.string().required("Please enter phone number!"),
    message: yup__WEBPACK_IMPORTED_MODULE_0__.string().required("Message is required!")
});
const JobApplySchema = yup__WEBPACK_IMPORTED_MODULE_0__.object({
    user_name: yup__WEBPACK_IMPORTED_MODULE_0__.string().min(2).max(10).required('Please enter full name!'),
    user_email: yup__WEBPACK_IMPORTED_MODULE_0__.string().email("Please enter a valid email address").required("Email address is required!"),
    user_message: yup__WEBPACK_IMPORTED_MODULE_0__.string().required("Message is required!")
});
const SubcriptionSchema = yup__WEBPACK_IMPORTED_MODULE_0__.object({
    email: yup__WEBPACK_IMPORTED_MODULE_0__.string().email("Please enter a valid email address").required("Email address is required!")
});


/***/ })

};
;