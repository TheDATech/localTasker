(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[128],{6008:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Blog",function(){return a(136)}])},136:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return u}});var t=a(5893),l=a(7294),r=a(9008),i=a(548),n=a(8193),o=a(1664),c=function(e){var s=(0,i.FF)().Blogs_listUser,a=(0,l.useState)(6),r=a[0],n=a[1],c=e.blogList;console.log("filter blogList",e,"datablog",c,"selectedCategory",e.selectedCategory);return(0,t.jsxs)("div",{className:"containerleftrightmargin mt-2",style:{paddingBottom:"10rem"},children:[(0,t.jsxs)("div",{className:"desktopboxdisplay howmobileitworkmargintop mx-4",style:{borderLeft:"5px solid #1171ca"},children:["All"===e.selectedCategory?(0,t.jsx)("h1",{className:"howTitle p-2",children:"All Topics"}):(0,t.jsx)("h1",{className:"howTitle p-2",children:e.selectedCategory}),(0,t.jsx)("p",{className:"px-2 pb-2 paracardleft",children:"Exploring Local Tasker and discover how we make an impact"})]}),(0,t.jsxs)("div",{className:"mobiledisplay",style:{borderLeft:"3px solid #1171ca"},children:[(0,t.jsx)("h1",{className:"howTitle p-3",style:{textAlign:"left"},children:"All Topics"}),(0,t.jsx)("p",{className:"px-3 pb-2 paracardleft",children:"Local Tasker is a platform that connects individuals and businesses with local service providers who can perform various tasks such as cleaning, handyman work, gardening, and more. It allows users to quickly and easily find reliable help for their everyday needs."})]}),(0,t.jsx)("div",{className:"blogGrid",children:c&&Array.isArray(c)&&c.slice(0,r).map((function(e){var a=e.id,l=e.banner,r=e.title,i=e.date,n=e.category_name,c=e.slug;return(0,t.jsx)("div",{className:"mt-4",children:(0,t.jsxs)("div",{className:"card1 p-3",children:[(0,t.jsx)("div",{className:"img1",children:(0,t.jsx)("img",{src:l,alt:"profile"})}),(0,t.jsxs)("div",{className:"row mt-3 mx-1",style:{borderBottom:"1px solid rgb(217 217 217)"},children:[(0,t.jsxs)("div",{className:"col d-flex mb-3 mt-3",children:[(0,t.jsx)("img",{src:s.photo,alt:"profile",className:"profileimage"}),(0,t.jsxs)("h5",{className:"name",children:[s.name,(0,t.jsx)("p",{style:{color:"rgb(136 137 139)"},children:i})]})]}),(0,t.jsxs)("div",{className:"col d-flex mt-3 mb-1",children:[(0,t.jsx)("img",{src:"/assets/HomeInspirationicon@2x.svg",alt:"inspiration",width:12,height:12,className:"mb-0 mt-4"})," ",(0,t.jsx)("p",{className:"homeInspiration",children:n})]})]}),(0,t.jsx)("h1",{className:"profilecardtitle",children:r}),(0,t.jsx)(o.default,{href:"/blogs/".concat(c),children:(0,t.jsxs)("a",{className:"profilereadmore",children:["Read more \xa0\xa0",(0,t.jsx)("img",{src:"/assets/ReadMoreicon@2x.svg"})]})})]})},a)}))}),c.length>r&&(0,t.jsx)("div",{className:"text-center mb-5",children:(0,t.jsx)("button",{className:"hirebtn",onClick:function(){n(r+3)},children:"Load More"})})]})},d=function(){var e=(0,i.FF)(),s=e.BlogCategory_list,a=e.Blogs_list,r=(0,l.useState)(""),o=r[0],d=r[1],m=(0,l.useState)([]),h=m[0],x=m[1],u=(0,l.useRef)(null),p=(0,l.useState)("All"),g=p[0],b=p[1],j=(0,l.useState)(!1),f=j[0],N=j[1],v=Array.from(new Set(Array.isArray(a)?a.map((function(e){return e.category_name})):[]));return v.unshift("All"),l.useEffect((function(){!function(e){if(Array.isArray(s)){var a=s.filter((function(s){return console.log("category",s),"string"===typeof s.category_name&&s.category_name.toLowerCase().includes(e.toLowerCase())})).map((function(e){return e.category_name}));x(a)}else x([])}(o)}),[o]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"blogfirstbox-container",children:(0,t.jsxs)("div",{className:"firstbox-container-sub",children:[(0,t.jsx)("h1",{className:"blogfirstbox-container-subtitle",children:"Blog"}),(0,t.jsxs)("p",{className:"firstbox-container-subpara mx-auto",children:["Empowering everyday individuals,",(0,t.jsx)("br",{}),"one task at a time"]}),(0,t.jsxs)("div",{className:"blogfirstbox-container-subinputbox",children:[(0,t.jsx)("input",{placeholder:"Search topics","data-bs-toggle":"modal","data-bs-target":"#staticBackdropblog"}),(0,t.jsx)("button",{"data-bs-toggle":"modal","data-bs-target":"#staticBackdropblog",children:(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",viewBox:"0 0 25 25",fill:"none",children:(0,t.jsx)("path",{d:"M24.6543 22.8288L20.0278 18.2071C23.5677 13.8027 23.2261 7.28903 19.1894 3.28779C17.0781 1.17872 14.2524 0 11.2404 0C8.22838 0 5.43386 1.17872 3.29134 3.28779C1.17999 5.39686 0 8.2195 0 11.2282C0 14.2369 1.17999 17.0285 3.29134 19.1687C5.4027 21.2778 8.22838 22.4565 11.2404 22.4565C13.7867 22.4565 16.2706 21.588 18.2579 20.0062L22.8845 24.6279C23.133 24.876 23.4433 25 23.754 25C24.0955 25 24.4061 24.876 24.6234 24.6279C25.1203 24.1006 25.1203 23.3251 24.6544 22.8288L24.6543 22.8288ZM19.9967 11.1973C19.9967 13.5236 19.0963 15.7259 17.4504 17.3697C15.8047 19.0137 13.6 19.9133 11.2713 19.9133C8.9425 19.9133 6.73772 19.0139 5.09213 17.3697C3.44643 15.7258 2.54584 13.5235 2.54584 11.1973C2.54584 8.87103 3.44621 6.66863 5.09213 5.02482C6.73783 3.38089 8.9425 2.48128 11.2713 2.48128C13.6 2.48128 15.8048 3.38067 17.4504 5.02482C19.0963 6.66874 19.9967 8.87103 19.9967 11.1973Z",fill:"black"})})})]}),(0,t.jsx)("div",{className:"modal fade modal-backdrop-blur",id:"staticBackdropblog","data-bs-backdrop":"static","data-bs-keyboard":"false",tabIndex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true",children:(0,t.jsx)("div",{className:"modal-dialog modal-dialog-centered modal-dialog-scrollable",children:(0,t.jsxs)("div",{className:"modal-content",children:[(0,t.jsxs)("div",{className:"row mt-3",children:[(0,t.jsx)("div",{className:"col-2 text-center mt-2",children:(0,t.jsx)(n.CF5,{style:{color:"#858585",fontSize:"1.5rem",cursor:"pointer"}})}),(0,t.jsx)("div",{className:"col-8",children:(0,t.jsxs)("h5",{className:"modal-title text-center",id:"staticBackdropLabel",style:{fontSize:"1.5rem"},children:["Search ",(0,t.jsx)("span",{style:{color:"#FDB633"},children:"Topics"})]})}),(0,t.jsx)("div",{className:"col-2 text-center",children:(0,t.jsx)("button",{type:"button",className:"text-center modelclosbtn","data-bs-dismiss":"modal","aria-label":"Close",children:(0,t.jsx)(n.oHP,{})})})]}),(0,t.jsxs)("div",{className:"modal-body mb-4",children:[(0,t.jsx)("div",{className:"text-center mt-4",children:(0,t.jsx)("input",{id:"modelsearchinput",placeholder:"Search topics",value:o,onChange:function(e){return d(e.target.value)}})}),(0,t.jsx)("ul",{className:"mx-3 mt-4",style:{textAlign:"left"},children:h.length>0?h.map((function(e,s){var a=o.toLowerCase(),l=e.toLowerCase().indexOf(a);if(-1!==l){var r=e.slice(0,l),i=e.slice(l+a.length);return(0,t.jsxs)("li",{className:"mx-4 mt-5 poptit",onClick:function(){return function(e){d(e),u.current&&u.current.scrollIntoView({behavior:"smooth"})}(e)},onClickCapture:function(){return b(e)},children:[r,(0,t.jsx)("span",{className:"blue-text",children:a}),i]},s)}return null})):""!==o.trim()&&(0,t.jsx)("h6",{className:"mx-4 mt-4 poptit",style:{color:"red",fontWeight:"500"},children:"There are no topics related to this keyword"})})]})]})})})]})}),(0,t.jsxs)("div",{className:"containerleftrightmargin desktopboxdisplay howmobileitworkmargintop",children:[(0,t.jsx)("h1",{className:"howTitle text-center",children:"Popular Topics"}),(0,t.jsx)("div",{className:"row mx-auto",children:v.map((function(e){return(0,t.jsx)("div",{className:"col-md-4",children:(0,t.jsx)("button",{className:g===e?"active":"categoerytbn",onClick:function(){return function(e){b(e)}(e)},children:"All"===e?"All Topics":e})},e)}))})]}),(0,t.jsxs)("div",{className:"mx-5 mobiledisplay howmobileitworkmargintop",children:[(0,t.jsx)("h1",{className:"howTitle text-center mt-5",children:"Popular Topics"}),(0,t.jsxs)("button",{className:"active",onClick:function(){N(!0!==f)},children:["All Topics ",(0,t.jsx)(n.cuw,{className:"mx-2",style:{color:"#ffa700"}})]}),f&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("button",{className:"categoerytbn",children:"Local Tasker News"}),(0,t.jsx)("button",{className:"categoerytbn",children:"Learn & How-Tos"}),(0,t.jsx)("button",{className:"categoerytbn",children:"Home Inspiration"}),(0,t.jsx)("button",{className:"categoerytbn",children:"All About Tasking"}),(0,t.jsx)("button",{className:"categoerytbn",children:"Tips"})]})]}),(0,t.jsx)("div",{ref:u,children:(0,t.jsx)(c,{blogList:"All"===g?a:a.filter((function(e){return e.category_name===g})),selectedCategory:g})})]})},m=a(1681),h=a(9078),x=function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d,{}),(0,t.jsx)("div",{className:"desktopboxdisplay",children:(0,t.jsx)(m.V,{})}),(0,t.jsx)(h.J,{})]})},u=function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.default,{children:[(0,t.jsx)("title",{children:"Blogs     "}),(0,t.jsx)("meta",{name:"description",content:"Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."},"desc")]}),(0,t.jsx)(x,{})]})}}},function(e){e.O(0,[617,719,372,207,481,928,888,179],(function(){return s=6008,e(e.s=s);var s}));var s=e.O();_N_E=s}]);