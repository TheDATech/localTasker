(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[138],{7640:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Contact_us",function(){return n(9852)}])},9852:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var o=n(5893),s=n(7294),a=n(8520),r=n.n(a),i=n(6154),l=n(2175),c=n(3890),u=n(2920);n(859);function d(e,t,n,o,s,a,r){try{var i=e[a](r),l=i.value}catch(c){return void n(c)}i.done?t(l):Promise.resolve(l).then(o,s)}var m={contact_type:"",full_name:"",email:"",phone_number:"",message:""},p=function(){var e=(0,s.useState)(null),t=e[0],n=e[1];console.log("file",t);var a,p=(a=r().mark((function e(n){var o,s;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("values",n),(o=new FormData).append("contact_type",n.contact_type),o.append("full_name",n.full_name),o.append("email",n.email),o.append("phone_number",n.phone_number),o.append("message",n.message),t&&o.append("file",t),console.log("formData",o),e.prev=9,e.next=12,i.Z.post("https://app.localtasker.co.uk/api/contact/us",o,{headers:{"Content-Type":"application/json"}});case 12:s=e.sent,console.log("response",s),200===s.status&&(u.Am.success(s.data.success,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),f.resetForm()),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(9),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[9,17]])})),function(){var e=this,t=arguments;return new Promise((function(n,o){var s=a.apply(e,t);function r(e){d(s,n,o,r,i,"next",e)}function i(e){d(s,n,o,r,i,"throw",e)}r(void 0)}))}),f=(0,l.TA)({initialValues:m,validateOnBlur:!0,onSubmit:p,validationSchema:c.gf});return(0,o.jsxs)("div",{className:"container-fluid",children:[(0,o.jsx)(u.Ix,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"}),(0,o.jsxs)("div",{className:"row pt-5",children:[(0,o.jsxs)("div",{className:"col despt text-center",style:{backgroundColor:"#EEF6FD"},children:[(0,o.jsx)("h1",{className:"mt-5 mb-3 desktopboxdisplay contacttitlemarginleft",style:{color:"#1171ca",textAlign:"left",fontSize:"40px",fontFamily:"Poppins",fontWeight:"600",lineHeight:"normal"},children:"Contact Us"}),(0,o.jsx)("p",{className:"desktopboxdisplay paracardleft contacttitlemarginleftpara",style:{textAlign:"left"},children:"Please provide detailed information below and our agents will reply via email as soon as possible."}),(0,o.jsx)("h1",{className:"mb-3 mobiledisplay contacttitlemarginleft",style:{color:"#1171ca",textAlign:"left",marginTop:"7rem",fontSize:"36px",fontFamily:"Poppins",fontWeight:"500",textTransform:"capitalize",fontStyle:"normal"},children:"Contact Us"}),(0,o.jsx)("p",{className:"mobiledisplay mt-2 contacttitlemarginleftpara",style:{color:"#858585",textAlign:"left",fontSize:"11px",fontWeight:"400",lineHeight:"normal",fontFamily:"Poppins",fontStyle:"normal"},children:"Please provide detailed information below and our agents will reply via email as soon as possible."}),(0,o.jsxs)("form",{className:"mx-md-5 mb-5",onSubmit:f.handleSubmit,children:[(0,o.jsxs)("select",{className:"contactforminput",name:"contact_type",value:f.values.contact_type,onChange:f.handleChange,onBlur:f.handleBlur,children:[(0,o.jsx)("option",{children:"I am trying to become a tasker"}),(0,o.jsx)("option",{children:"I am trying to become a client"}),(0,o.jsx)("option",{children:"I am unable to access my account"}),(0,o.jsx)("option",{children:"Other"})]}),f.errors.contact_type&&f.touched.contact_type?(0,o.jsx)("p",{style:{color:"red",textAlign:"left",marginLeft:"6rem"},children:f.errors.contact_type}):null,(0,o.jsxs)("div",{children:[(0,o.jsx)("input",{className:"contactforminput",name:"full_name",placeholder:"full name*",value:f.values.full_name,onChange:f.handleChange,onBlur:f.handleBlur}),f.errors.full_name&&f.touched.full_name?(0,o.jsx)("p",{style:{color:"red",textAlign:"left",marginLeft:"6rem"},children:f.errors.full_name}):null]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("input",{type:"email",className:"contactforminput",name:"email",placeholder:"Albertjay@gmal.com*",value:f.values.email,onChange:f.handleChange,onBlur:f.handleBlur}),f.errors.email&&f.touched.email?(0,o.jsx)("p",{style:{color:"red",textAlign:"left",marginLeft:"6rem"},children:f.errors.email}):null]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("input",{className:"contactforminput",name:"phone_number",placeholder:"phone number*",value:f.values.phone_number,onChange:f.handleChange,onBlur:f.handleBlur}),f.errors.phone_number&&f.touched.phone_number?(0,o.jsx)("p",{style:{color:"red",textAlign:"left",marginLeft:"6rem"},children:f.errors.phone_number}):null]}),(0,o.jsx)("textarea",{className:"textarea",placeholder:"Message/Cover Letter",name:"message",value:f.values.message,onChange:f.handleChange,onBlur:f.handleBlur}),f.errors.message&&f.touched.message?(0,o.jsx)("p",{style:{color:"red",textAlign:"left",marginLeft:"6rem"},children:f.errors.message}):null,(0,o.jsxs)("div",{className:"uploadmarginleftnj",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("input",{type:"file",id:"uploadcvbtn",name:"file",onChange:function(e){return n(e.target.files[0])}}),(0,o.jsx)("br",{}),(0,o.jsx)("label",{id:"label",htmlFor:"uploadcvbtn",children:"Upload files (optional)"})]}),(0,o.jsx)("button",{className:"hirebtn",disabled:!f.isValid,type:"submit",children:"Submit"})]})]})]}),(0,o.jsxs)("div",{className:"col despt text-center",style:{backgroundColor:"#1171CA"},children:[(0,o.jsx)("h1",{className:"mb-3 mobiledisplay text-center mt-700",style:{color:"#fff",textAlign:"left",marginLeft:"1rem",marginTop:"2rem",fontSize:"31px",fontFamily:"Poppins",fontWeight:"500",textTransform:"capitalize",fontStyle:"normal"},children:"Immediate help?"}),(0,o.jsx)("h1",{className:"mt-5 mx-5 mb-4 desktopboxdisplay",style:{color:"#fff",fontSize:"40px",fontFamily:"Poppins",fontWeight:"600",lineHeight:"normal"},children:"Immediate help?"}),(0,o.jsxs)("p",{className:"mx-md-auto paracardleft desktopboxdisplay",style:{color:"#FDB633"},children:["Our team is always there to help",(0,o.jsx)("br",{}),"you. Let\u2019s start chat with us..."]}),(0,o.jsx)("p",{className:"mobiledisplay mt-2",style:{marginLeft:"1.2rem",marginRight:"1.2rem",color:"#FDB633",fontSize:"14px",fontFamily:"Poppins",textAlign:"center",fontWeight:"400",lineHeight:"normal"},children:"Our team is always there to help you. Let\u2019s start chat with us..."}),(0,o.jsxs)("div",{className:"chatusCard",children:[(0,o.jsx)("img",{src:"/assets/chatus.JPG"}),(0,o.jsx)("h5",{className:"m-3",children:"Chat with us"}),(0,o.jsx)("p",{children:"Our team is always there to help you."}),(0,o.jsx)("button",{className:"hirebtn",style:{marginTop:"1rem"},children:"Start Chat"})]})]})]})]})},f=n(1681),h=(n(9078),function(){return(0,o.jsxs)("main",{children:[(0,o.jsx)(p,{}),(0,o.jsx)("div",{className:"desktopboxdisplay",children:(0,o.jsx)(f.V,{})}),(0,o.jsx)("div",{className:"container-fluid mobiledisplay",style:{backgroundColor:"#2c86f1",marginTop:"0rem"},children:(0,o.jsxs)("div",{className:"container pt-1 pb-4",children:[(0,o.jsx)("h1",{className:"subcribetitle",children:"Ready to get started"}),(0,o.jsxs)("div",{className:"subcribe-btn-container",children:[(0,o.jsx)("button",{className:"btn1",onClick:function(){return router.push("https://app.localtasker.co.uk/register?type=2")},children:"Hire a Tasker"}),(0,o.jsx)("button",{className:"btn2",onClick:function(){return router.push("https://app.localtasker.co.uk/register?type=1")},children:"Become a Tasker"})]}),(0,o.jsxs)("div",{className:"subcribe-container-subinputbox mt-4",children:[(0,o.jsx)("input",{placeholder:"Enter your email"}),(0,o.jsx)("button",{children:"Register Now"})]}),(0,o.jsx)("p",{className:"subcribeinputpara",children:"Sign-up for the latest news and updates!"})]})})]})}),g=n(9008),y=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(g.default,{children:[(0,o.jsx)("title",{children:"Contact us        "}),(0,o.jsx)("meta",{name:"description",content:"Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."},"desc")]}),(0,o.jsx)(h,{})]})}},859:function(){},2920:function(e,t,n){"use strict";n.d(t,{Ix:function(){return N},Am:function(){return A}});var o=n(7294);function s(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=s(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}var a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=s(e))&&(o&&(o+=" "),o+=t);return o};const r=e=>"number"==typeof e&&!isNaN(e),i=e=>"string"==typeof e,l=e=>"function"==typeof e,c=e=>i(e)||l(e)?e:null,u=e=>(0,o.isValidElement)(e)||i(e)||l(e)||r(e);function d(e){let{enter:t,exit:n,appendPosition:s=!1,collapse:a=!0,collapseDuration:r=300}=e;return function(e){let{children:i,position:l,preventExitTransition:c,done:u,nodeRef:d,isIn:m}=e;const p=s?`${t}--${l}`:t,f=s?`${n}--${l}`:n,h=(0,o.useRef)(0);return(0,o.useLayoutEffect)((()=>{const e=d.current,t=p.split(" "),n=o=>{o.target===d.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===h.current&&"animationcancel"!==o.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)}),[]),(0,o.useEffect)((()=>{const e=d.current,t=()=>{e.removeEventListener("animationend",t),a?function(e,t,n){void 0===n&&(n=300);const{scrollHeight:o,style:s}=e;requestAnimationFrame((()=>{s.minHeight="initial",s.height=o+"px",s.transition=`all ${n}ms`,requestAnimationFrame((()=>{s.height="0",s.padding="0",s.margin="0",setTimeout(t,n)}))}))}(e,u,r):u()};m||(c?t():(h.current=1,e.className+=` ${f}`,e.addEventListener("animationend",t)))}),[m]),o.createElement(o.Fragment,null,i)}}function m(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const p={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const n=this.list.get(e).filter((e=>e!==t));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach((t=>{const n=setTimeout((()=>{t(...[].slice.call(arguments,1))}),0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)}))}},f=e=>{let{theme:t,type:n,...s}=e;return o.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":`var(--toastify-icon-color-${n})`,...s})},h={info:function(e){return o.createElement(f,{...e},o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return o.createElement(f,{...e},o.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return o.createElement(f,{...e},o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return o.createElement(f,{...e},o.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return o.createElement("div",{className:"Toastify__spinner"})}};function g(e){const[,t]=(0,o.useReducer)((e=>e+1),0),[n,s]=(0,o.useState)([]),a=(0,o.useRef)(null),d=(0,o.useRef)(new Map).current,f=e=>-1!==n.indexOf(e),g=(0,o.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:f,getToast:e=>d.get(e)}).current;function y(e){let{containerId:t}=e;const{limit:n}=g.props;!n||t&&g.containerId!==t||(g.count-=g.queue.length,g.queue=[])}function v(e){s((t=>null==e?[]:t.filter((t=>t!==e))))}function b(){const{toastContent:e,toastProps:t,staleId:n}=g.queue.shift();T(e,t,n)}function x(e,n){let{delay:s,staleId:f,...y}=n;if(!u(e)||function(e){return!a.current||g.props.enableMultiContainer&&e.containerId!==g.props.containerId||d.has(e.toastId)&&null==e.updateId}(y))return;const{toastId:x,updateId:E,data:C}=y,{props:_}=g,N=()=>v(x),j=null==E;j&&g.count++;const I={..._,style:_.toastStyle,key:g.toastKey++,...Object.fromEntries(Object.entries(y).filter((e=>{let[t,n]=e;return null!=n}))),toastId:x,updateId:E,data:C,closeToast:N,isIn:!1,className:c(y.className||_.toastClassName),bodyClassName:c(y.bodyClassName||_.bodyClassName),progressClassName:c(y.progressClassName||_.progressClassName),autoClose:!y.isLoading&&(L=y.autoClose,O=_.autoClose,!1===L||r(L)&&L>0?L:O),deleteToast(){const e=m(d.get(x),"removed");d.delete(x),p.emit(4,e);const n=g.queue.length;if(g.count=null==x?g.count-g.displayedToast:g.count-1,g.count<0&&(g.count=0),n>0){const e=null==x?g.props.limit:1;if(1===n||1===e)g.displayedToast++,b();else{const t=e>n?n:e;g.displayedToast=t;for(let e=0;e<t;e++)b()}}else t()}};var L,O;I.iconOut=function(e){let{theme:t,type:n,isLoading:s,icon:a}=e,c=null;const u={theme:t,type:n};return!1===a||(l(a)?c=a(u):(0,o.isValidElement)(a)?c=(0,o.cloneElement)(a,u):i(a)||r(a)?c=a:s?c=h.spinner():(e=>e in h)(n)&&(c=h[n](u))),c}(I),l(y.onOpen)&&(I.onOpen=y.onOpen),l(y.onClose)&&(I.onClose=y.onClose),I.closeButton=_.closeButton,!1===y.closeButton||u(y.closeButton)?I.closeButton=y.closeButton:!0===y.closeButton&&(I.closeButton=!u(_.closeButton)||_.closeButton);let w=e;(0,o.isValidElement)(e)&&!i(e.type)?w=(0,o.cloneElement)(e,{closeToast:N,toastProps:I,data:C}):l(e)&&(w=e({closeToast:N,toastProps:I,data:C})),_.limit&&_.limit>0&&g.count>_.limit&&j?g.queue.push({toastContent:w,toastProps:I,staleId:f}):r(s)?setTimeout((()=>{T(w,I,f)}),s):T(w,I,f)}function T(e,t,n){const{toastId:o}=t;n&&d.delete(n);const a={content:e,props:t};d.set(o,a),s((e=>[...e,o].filter((e=>e!==n)))),p.emit(4,m(a,null==a.props.updateId?"added":"updated"))}return(0,o.useEffect)((()=>(g.containerId=e.containerId,p.cancelEmit(3).on(0,x).on(1,(e=>a.current&&v(e))).on(5,y).emit(2,g),()=>{d.clear(),p.emit(3,g)})),[]),(0,o.useEffect)((()=>{g.props=e,g.isToastActive=f,g.displayedToast=n.length})),{getToastToRender:function(t){const n=new Map,o=Array.from(d.values());return e.newestOnTop&&o.reverse(),o.forEach((e=>{const{position:t}=e.props;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(e=>t(e[0],e[1])))},containerRef:a,isToastActive:f}}function y(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function v(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function b(e){const[t,n]=(0,o.useState)(!1),[s,a]=(0,o.useState)(!1),r=(0,o.useRef)(null),i=(0,o.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,c=(0,o.useRef)(e),{autoClose:u,pauseOnHover:d,closeToast:m,onClick:p,closeOnClick:f}=e;function h(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),i.didMove=!1,document.addEventListener("mousemove",T),document.addEventListener("mouseup",E),document.addEventListener("touchmove",T),document.addEventListener("touchend",E);const n=r.current;i.canCloseOnClick=!0,i.canDrag=!0,i.boundingRect=n.getBoundingClientRect(),n.style.transition="",i.x=y(t.nativeEvent),i.y=v(t.nativeEvent),"x"===e.draggableDirection?(i.start=i.x,i.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(i.start=i.y,i.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function g(t){if(i.boundingRect){const{top:n,bottom:o,left:s,right:a}=i.boundingRect;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&i.x>=s&&i.x<=a&&i.y>=n&&i.y<=o?x():b()}}function b(){n(!0)}function x(){n(!1)}function T(n){const o=r.current;i.canDrag&&o&&(i.didMove=!0,t&&x(),i.x=y(n),i.y=v(n),i.delta="x"===e.draggableDirection?i.x-i.start:i.y-i.start,i.start!==i.x&&(i.canCloseOnClick=!1),o.style.transform=`translate${e.draggableDirection}(${i.delta}px)`,o.style.opacity=""+(1-Math.abs(i.delta/i.removalDistance)))}function E(){document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",E),document.removeEventListener("touchmove",T),document.removeEventListener("touchend",E);const t=r.current;if(i.canDrag&&i.didMove&&t){if(i.canDrag=!1,Math.abs(i.delta)>i.removalDistance)return a(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform=`translate${e.draggableDirection}(0)`,t.style.opacity="1"}}(0,o.useEffect)((()=>{c.current=e})),(0,o.useEffect)((()=>(r.current&&r.current.addEventListener("d",b,{once:!0}),l(e.onOpen)&&e.onOpen((0,o.isValidElement)(e.children)&&e.children.props),()=>{const e=c.current;l(e.onClose)&&e.onClose((0,o.isValidElement)(e.children)&&e.children.props)})),[]),(0,o.useEffect)((()=>(e.pauseOnFocusLoss&&(document.hasFocus()||x(),window.addEventListener("focus",b),window.addEventListener("blur",x)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",b),window.removeEventListener("blur",x))})),[e.pauseOnFocusLoss]);const C={onMouseDown:h,onTouchStart:h,onMouseUp:g,onTouchEnd:g};return u&&d&&(C.onMouseEnter=x,C.onMouseLeave=b),f&&(C.onClick=e=>{p&&p(e),i.canCloseOnClick&&m()}),{playToast:b,pauseToast:x,isRunning:t,preventExitTransition:s,toastRef:r,eventHandlers:C}}function x(e){let{closeToast:t,theme:n,ariaLabel:s="close"}=e;return o.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:e=>{e.stopPropagation(),t(e)},"aria-label":s},o.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function T(e){let{delay:t,isRunning:n,closeToast:s,type:r="default",hide:i,className:c,style:u,controlledProgress:d,progress:m,rtl:p,isIn:f,theme:h}=e;const g=i||d&&0===m,y={...u,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:g?0:1};d&&(y.transform=`scaleX(${m})`);const v=a("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${h}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":p}),b=l(c)?c({rtl:p,type:r,defaultClassName:v}):a(v,c);return o.createElement("div",{role:"progressbar","aria-hidden":g?"true":"false","aria-label":"notification timer",className:b,style:y,[d&&m>=1?"onTransitionEnd":"onAnimationEnd"]:d&&m<1?null:()=>{f&&s()}})}const E=e=>{const{isRunning:t,preventExitTransition:n,toastRef:s,eventHandlers:r}=b(e),{closeButton:i,children:c,autoClose:u,onClick:d,type:m,hideProgressBar:p,closeToast:f,transition:h,position:g,className:y,style:v,bodyClassName:E,bodyStyle:C,progressClassName:_,progressStyle:N,updateId:j,role:I,progress:L,rtl:O,toastId:w,deleteToast:k,isIn:P,isLoading:R,iconOut:B,closeOnClick:A,theme:S}=e,M=a("Toastify__toast",`Toastify__toast-theme--${S}`,`Toastify__toast--${m}`,{"Toastify__toast--rtl":O},{"Toastify__toast--close-on-click":A}),F=l(y)?y({rtl:O,position:g,type:m,defaultClassName:M}):a(M,y),z=!!L||!u,D={closeToast:f,type:m,theme:S};let $=null;return!1===i||($=l(i)?i(D):(0,o.isValidElement)(i)?(0,o.cloneElement)(i,D):x(D)),o.createElement(h,{isIn:P,done:k,position:g,preventExitTransition:n,nodeRef:s},o.createElement("div",{id:w,onClick:d,className:F,...r,style:v,ref:s},o.createElement("div",{...P&&{role:I},className:l(E)?E({type:m}):a("Toastify__toast-body",E),style:C},null!=B&&o.createElement("div",{className:a("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!R})},B),o.createElement("div",null,c)),$,o.createElement(T,{...j&&!z?{key:`pb-${j}`}:{},rtl:O,theme:S,delay:u,isRunning:t,isIn:P,closeToast:f,hide:p,type:m,style:N,className:_,controlledProgress:z,progress:L||0})))},C=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},_=d(C("bounce",!0)),N=(d(C("slide",!0)),d(C("zoom")),d(C("flip")),(0,o.forwardRef)(((e,t)=>{const{getToastToRender:n,containerRef:s,isToastActive:r}=g(e),{className:i,style:u,rtl:d,containerId:m}=e;function p(e){const t=a("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":d});return l(i)?i({position:e,rtl:d,defaultClassName:t}):a(t,c(i))}return(0,o.useEffect)((()=>{t&&(t.current=s.current)}),[]),o.createElement("div",{ref:s,className:"Toastify",id:m},n(((e,t)=>{const n=t.length?{...u}:{...u,pointerEvents:"none"};return o.createElement("div",{className:p(e),style:n,key:`container-${e}`},t.map(((e,n)=>{let{content:s,props:a}=e;return o.createElement(E,{...a,isIn:r(a.toastId),style:{...a.style,"--nth":n+1,"--len":t.length},key:`toast-${a.key}`},s)})))})))})));N.displayName="ToastContainer",N.defaultProps={position:"top-right",transition:_,autoClose:5e3,closeButton:x,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let j,I=new Map,L=[],O=1;function w(){return""+O++}function k(e){return e&&(i(e.toastId)||r(e.toastId))?e.toastId:w()}function P(e,t){return I.size>0?p.emit(0,e,t):L.push({content:e,options:t}),t.toastId}function R(e,t){return{...t,type:t&&t.type||e,toastId:k(t)}}function B(e){return(t,n)=>P(t,R(e,n))}function A(e,t){return P(e,R("default",t))}A.loading=(e,t)=>P(e,R("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),A.promise=function(e,t,n){let o,{pending:s,error:a,success:r}=t;s&&(o=i(s)?A.loading(s,n):A.loading(s.render,{...n,...s}));const c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=(e,t,s)=>{if(null==t)return void A.dismiss(o);const a={type:e,...c,...n,data:s},r=i(t)?{render:t}:t;return o?A.update(o,{...a,...r}):A(r.render,{...a,...r}),s},d=l(e)?e():e;return d.then((e=>u("success",r,e))).catch((e=>u("error",a,e))),d},A.success=B("success"),A.info=B("info"),A.error=B("error"),A.warning=B("warning"),A.warn=A.warning,A.dark=(e,t)=>P(e,R("default",{theme:"dark",...t})),A.dismiss=e=>{I.size>0?p.emit(1,e):L=L.filter((t=>null!=e&&t.options.toastId!==e))},A.clearWaitingQueue=function(e){return void 0===e&&(e={}),p.emit(5,e)},A.isActive=e=>{let t=!1;return I.forEach((n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},A.update=function(e,t){void 0===t&&(t={}),setTimeout((()=>{const n=function(e,t){let{containerId:n}=t;const o=I.get(n||j);return o&&o.getToast(e)}(e,t);if(n){const{props:o,content:s}=n,a={delay:100,...o,...t,toastId:t.toastId||e,updateId:w()};a.toastId!==e&&(a.staleId=e);const r=a.render||s;delete a.render,P(r,a)}}),0)},A.done=e=>{A.update(e,{progress:1})},A.onChange=e=>(p.on(4,e),()=>{p.off(4,e)}),A.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},A.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},p.on(2,(e=>{j=e.containerId||e,I.set(j,e),L.forEach((e=>{p.emit(0,e.content,e.options)})),L=[]})).on(3,(e=>{I.delete(e.containerId||e),0===I.size&&p.off(0).off(1).off(5)}))}},function(e){e.O(0,[719,372,481,928,888,179],(function(){return t=7640,e(e.s=t);var t}));var t=e.O();_N_E=t}]);