(window.webpackJsonp=window.webpackJsonp||[]).push([[79,6,9,10,11,12,18,20,21,33,34,38],{286:function(t,e,r){"use strict";r.r(e);var l={props:{type:String,title:String,onClick:{type:Function}}},n=r(17),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return"solid"===t.type?r("button",{staticClass:"px-6 min-w-28 min-h-10 text-white text-xs flex items-center justify-center bg-primary-400 focus:outline-none border-0 mr-4 hover:bg-primary-600",on:{click:function(e){return e.preventDefault(),t.onClick.apply(null,arguments)}}},[t._v(t._s(t.title))]):"secondary"===t.type?r("button",{staticClass:"px-6 min-w-28 min-h-10 text-primary-500 text-xs flex items-center justify-center  focus:outline-none border border-primary-300 hover:bg-primary-200 hover:text-primary-600",on:{click:function(e){return e.preventDefault(),t.onClick.apply(null,arguments)}}},[t._v(" "+t._s(t.title)+" ")]):r("button",{staticClass:"px-6 min-w-28 min-h-10 text-primary-500 text-xs flex items-center justify-center  focus:outline-none border-0 hover:bg-primary-100",on:{click:function(e){return e.preventDefault(),t.onClick.apply(null,arguments)}}},[t._v(" "+t._s(t.title)+" ")])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:r(286).default})},288:function(t,e,r){"use strict";r.r(e);var l={props:["title","back","item_id"],computed:{}},n=r(17),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"h-24 bg-white relative"},[l("div",{staticClass:"max-w-lg-screen mx-auto xl:px-32 px-10 2xl:px-0 h-full flex items-center justify-between w-full"},[l("div",{staticClass:" text-tertiary-300"},[l("h1",{staticClass:"text-2xl text-primary-900 font-semibold"},[t._v(" "+t._s(t.title)+" ")]),t._v(" "),l("p",{staticClass:"text-tertiary-600"},[t._v(t._s(t.item_id))])]),t._v(" "),l("div",[t._t("default")],2)]),t._v(" "),l("div",{directives:[{name:"show",rawName:"v-show",value:t.back,expression:"back"}],staticClass:"xl:px-24 absolute inset-y-0 flex items-center "},[l("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.$router.back()}}},[l("img",{attrs:{src:r(295),alt:"",srcset:""}})])])])}),[],!1,null,null,null);e.default=component.exports},290:function(t,e,r){"use strict";r.r(e);var l={props:{classes:String}},n=r(17),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"fixed inset-0 flex justify-end items-center z-50 bg-tertiary-800 bg-opacity-40"},[r("div",{staticClass:"flex flex-col h-full"},[r("div",{staticClass:"flex-none h-20"}),t._v(" "),r("div",{staticClass:"bg-white flex-grow h-full overflow-y-auto scrollbar-thin scrollbar-thumb-tertiary-200 scrollbar-track-tertiary-100",class:t.classes},[r("div",{staticClass:"p-5 border-b"},[t._t("head")],2),t._v(" "),r("div",[t._t("default")],2)]),t._v(" "),r("div",{staticClass:"flex-none h-20"})])])}),[],!1,null,null,null);e.default=component.exports},291:function(t,e,r){"use strict";r.r(e);var l={props:{type:String,title:String}},n=r(17),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return"solid"===t.type?r("button",{staticClass:"w-28 h-10 text-white text-xs flex items-center justify-center rounded-xl bg-primary-400 focus:outline-none border-0 mr-4 hover:bg-primary-600",attrs:{type:"submit"}},[t._v(t._s(t.title))]):r("button",{staticClass:"w-28 h-10 text-primary-400 text-xs flex items-center justify-center rounded-xl  focus:outline-none border-0 hover:bg-primary-100",attrs:{type:"submit"}},[t._v(" "+t._s(t.title)+" ")])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:r(286).default})},292:function(t,e,r){"use strict";r.r(e);var l={props:["lable","isRequired","type","place_holder","id","value","isDisable","error"]},n=r(17),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col w-full"},[r("label",{staticClass:"pb-2 text-xs font-normal text-left text-tertiary-600 dark:text-gray-100",attrs:{for:t.id}},[t._v("\n        "+t._s(t.lable)+" "),r("span",{directives:[{name:"show",rawName:"v-show",value:t.isRequired,expression:"isRequired"}],staticClass:"text-red-500"},[t._v("*")])]),t._v(" "),t.isRequired?r("input",{staticClass:"border border-gray-300 dark:border-gray-700 pl-3 h-12 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-600 dark:text-gray-400",class:[t.isDisable?"opacity-50":"",t.error?"border-red-600":"border-gray-300"],attrs:{disabled:t.isDisable,type:t.type,id:t.id,required:"",placeholder:t.place_holder},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}}):r("input",{staticClass:"border border-gray-300 dark:border-gray-700 pl-3 h-12 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-600 dark:text-gray-400",class:[t.isDisable?"opacity-50":"",t.error?"border-red-600":"border-gray-300"],attrs:{disabled:t.isDisable,type:t.type,id:t.id,placeholder:t.place_holder},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}})])}),[],!1,null,null,null);e.default=component.exports},294:function(t,e,r){"use strict";r.r(e);var l={components:{Button:r(286).default}},n=r(17),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{},[r("div",[r("ul",{staticClass:"flex justify-start items-center border-b px-10"},[t._t("head")],2),t._v(" "),r("div",{staticClass:"bg-white text-center mx-auto"},[t._t("default")],2)])])}),[],!1,null,null,null);e.default=component.exports},295:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjMiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyMyAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0wLjI5Mjg5MyA3LjI5Mjg5Qy0wLjA5NzYzMTEgNy42ODM0MiAtMC4wOTc2MzExIDguMzE2NTggMC4yOTI4OTMgOC43MDcxMUw2LjY1Njg1IDE1LjA3MTFDNy4wNDczOCAxNS40NjE2IDcuNjgwNTQgMTUuNDYxNiA4LjA3MTA3IDE1LjA3MTFDOC40NjE1OSAxNC42ODA1IDguNDYxNTkgMTQuMDQ3NCA4LjA3MTA3IDEzLjY1NjlMMi40MTQyMSA4TDguMDcxMDcgMi4zNDMxNUM4LjQ2MTU5IDEuOTUyNjIgOC40NjE1OSAxLjMxOTQ2IDguMDcxMDcgMC45Mjg5MzJDNy42ODA1NCAwLjUzODQwOCA3LjA0NzM4IDAuNTM4NDA4IDYuNjU2ODUgMC45Mjg5MzJMMC4yOTI4OTMgNy4yOTI4OVpNMjEgOUMyMS41NTIzIDkgMjIgOC41NTIyOCAyMiA4QzIyIDcuNDQ3NzIgMjEuNTUyMyA3IDIxIDdWOVpNMSA5SDIxVjdIMVY5WiIgZmlsbD0iIzZCOEVGQSIvPg0KPC9zdmc+DQo="},297:function(t,e,r){"use strict";r.r(e);var l={props:{status:String,classes:String},computed:{},methods:{color:function(t){return"approved"===t?"text-action-success bg-action-success-light":"pending"===t?"text-action-warning bg-action-warning-light":"denied"===t?"text-action-danger bg-action-danger-light":""}}},n=r(17),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"flex items-center justify-center font-normal rounded-md ",class:[t.color(t.status),t.classes]},[t._v("\n    "+t._s(t.status)+"\n")])}),[],!1,null,null,null);e.default=component.exports},304:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMCAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0yMCAyLjUyOEwxNy42MjAyIDAuMTQ4MTkzTDEwIDcuNzY4MzhMMi4zNzk4MSAwLjE0ODE5M0wwIDIuNTI4TDcuNjIwMTkgMTAuMTQ4MkwwIDE3Ljc2ODRMMi4zNzk4MSAyMC4xNDgyTDEwIDEyLjUyOEwxNy42MjAyIDIwLjE0ODJMMjAgMTcuNzY4NEwxMi4zNzk4IDEwLjE0ODJMMjAgMi41MjhaIiBmaWxsPSIjM0QzRDNEIi8+DQo8L3N2Zz4NCg=="},314:function(t,e,r){"use strict";r.r(e);var l=r(17),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"grid grid-cols-6 bg-white rounded-lg gap-x-2 min-h-64"},[r("div",{staticClass:"col-span-2 p-5 border-r-4"},[r("h3",{staticClass:"text-xs font-normal text-tertiary-500"},[t._v("Bio Data")]),t._v(" "),r("div",{staticClass:"pt-6 grid grid-cols-2 gap-y-4 capitalize"},[t._t("left")],2)]),t._v(" "),r("div",{staticClass:"col-span-4 p-5"},[r("div",{staticClass:"pt-3 grid grid-cols-2 gap-y-4 capitalize text-sm text-primary-900 font-normal"},[t._t("default")],2)])])}),[],!1,null,null,null);e.default=component.exports},315:function(t,e,r){"use strict";r.r(e);var l=r(17),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-white rounded-xl h-full max-h-100"},[r("h3",{staticClass:"text-xs font-normal text-tertiary-500 capitalize p-5 pb-4 border-b"},[t._v("activity log")]),t._v(" "),r("div",{staticClass:"relative h-4/5"},[r("div",{staticClass:"border-2-2 absolute border-opacity-20 border-gray-700 h-full border",staticStyle:{left:"23px"}}),t._v(" "),r("div",{staticClass:"overflow-y-auto h-full p-5 pb-4 scrollbar-thin scrollbar-thumb-tertiary-200 scrollbar-track-white"},[r("div",{staticClass:"mb-5 flex  items-center w-full"},[r("div",{staticClass:"z-20 flex items-center bg-tertiary-300 shadow-xl w-2 h-2 rounded-full"}),t._v(" "),r("div",{staticClass:"px-6"},[r("h3",{staticClass:"font-normal text-sm text-tertiary-600 flex items-center"},[t._v("\n                    Insurance Purchase\n                    "),r("span",{staticClass:"px-3"},[r("svg",{attrs:{width:"15",height:"2",viewBox:"0 0 15 2",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M14.696 0.444V1.9L0.28 1.9L0.28 0.444L14.696 0.444Z",fill:"#BDBDBD"}})])]),t._v(" "),r("span",{staticClass:"text-tertiary-300 text-xs"},[t._v("3 minutes ago")])])])]),t._v(" "),r("div",{staticClass:"mb-5 flex  items-center w-full"},[r("div",{staticClass:"z-20 flex items-center bg-tertiary-300 shadow-xl w-2 h-2 rounded-full"}),t._v(" "),r("div",{staticClass:"px-6"},[r("h3",{staticClass:"font-normal text-sm text-tertiary-600 flex items-center"},[t._v("\n                        Vehicle Registration (Toyota Avensis 2014)\n                        "),r("span",{staticClass:"px-3"},[r("svg",{attrs:{width:"15",height:"2",viewBox:"0 0 15 2",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M14.696 0.444V1.9L0.28 1.9L0.28 0.444L14.696 0.444Z",fill:"#BDBDBD"}})])]),t._v(" "),r("span",{staticClass:"text-tertiary-300 text-xs"},[t._v("10 minutes ago")])])])]),t._v(" "),r("div",{staticClass:"mb-5 flex  items-center w-full"},[r("div",{staticClass:"z-20 flex items-center bg-tertiary-300 shadow-xl w-2 h-2 rounded-full"}),t._v(" "),r("div",{staticClass:"px-6"},[r("h3",{staticClass:"font-normal text-sm text-tertiary-600 flex items-center"},[t._v("\n                        Insurance Purchase\n                        "),r("span",{staticClass:"px-3"},[r("svg",{attrs:{width:"15",height:"2",viewBox:"0 0 15 2",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M14.696 0.444V1.9L0.28 1.9L0.28 0.444L14.696 0.444Z",fill:"#BDBDBD"}})])]),t._v(" "),r("span",{staticClass:"text-tertiary-300 text-xs"},[t._v("3 minutes ago")])])])]),t._v(" "),r("div",{staticClass:"mb-5 flex  items-center w-full"},[r("div",{staticClass:"z-20 flex items-center bg-tertiary-300 shadow-xl w-2 h-2 rounded-full"}),t._v(" "),r("div",{staticClass:"px-6"},[r("h3",{staticClass:"font-normal text-sm text-tertiary-600 flex items-center"},[t._v("\n                        Insurance Purchase\n                        "),r("span",{staticClass:"px-3"},[r("svg",{attrs:{width:"15",height:"2",viewBox:"0 0 15 2",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M14.696 0.444V1.9L0.28 1.9L0.28 0.444L14.696 0.444Z",fill:"#BDBDBD"}})])]),t._v(" "),r("span",{staticClass:"text-tertiary-300 text-xs"},[t._v("3 minutes ago")])])])]),t._v(" "),r("div",{staticClass:"mb-5 flex  items-center w-full"},[r("div",{staticClass:"z-20 flex items-center bg-tertiary-300 shadow-xl w-2 h-2 rounded-full"}),t._v(" "),r("div",{staticClass:"px-6"},[r("h3",{staticClass:"font-normal text-sm text-tertiary-600 flex items-center"},[t._v("\n                        Insurance Purchase\n                        "),r("span",{staticClass:"px-3"},[r("svg",{attrs:{width:"15",height:"2",viewBox:"0 0 15 2",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M14.696 0.444V1.9L0.28 1.9L0.28 0.444L14.696 0.444Z",fill:"#BDBDBD"}})])]),t._v(" "),r("span",{staticClass:"text-tertiary-300 text-xs"},[t._v("3 minutes ago")])])])]),t._v(" "),r("div",{staticClass:"mb-5 flex  items-center w-full"},[r("div",{staticClass:"z-20 flex items-center bg-tertiary-300 shadow-xl w-2 h-2 rounded-full"}),t._v(" "),r("div",{staticClass:"px-6"},[r("h3",{staticClass:"font-normal text-sm text-tertiary-600 flex items-center"},[t._v("\n                        Insurance Purchase\n                        "),r("span",{staticClass:"px-3"},[r("svg",{attrs:{width:"15",height:"2",viewBox:"0 0 15 2",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M14.696 0.444V1.9L0.28 1.9L0.28 0.444L14.696 0.444Z",fill:"#BDBDBD"}})])]),t._v(" "),r("span",{staticClass:"text-tertiary-300 text-xs"},[t._v("3 minutes ago")])])])]),t._v(" "),r("div",{staticClass:"mb-5 flex  items-center w-full"},[r("div",{staticClass:"z-20 flex items-center bg-tertiary-300 shadow-xl w-2 h-2 rounded-full"}),t._v(" "),r("div",{staticClass:"px-6"},[r("h3",{staticClass:"font-normal text-sm text-tertiary-600 flex items-center"},[t._v("\n                        Insurance Purchase\n                        "),r("span",{staticClass:"px-3"},[r("svg",{attrs:{width:"15",height:"2",viewBox:"0 0 15 2",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M14.696 0.444V1.9L0.28 1.9L0.28 0.444L14.696 0.444Z",fill:"#BDBDBD"}})])]),t._v(" "),r("span",{staticClass:"text-tertiary-300 text-xs"},[t._v("3 minutes ago")])])])]),t._v(" "),r("div",{staticClass:"mb-5 flex  items-center w-full"},[r("div",{staticClass:"z-20 flex items-center bg-tertiary-300 shadow-xl w-2 h-2 rounded-full"}),t._v(" "),r("div",{staticClass:"px-6"},[r("h3",{staticClass:"font-normal text-sm text-tertiary-600 flex items-center"},[t._v("\n                        Insurance Purchase\n                        "),r("span",{staticClass:"px-3"},[r("svg",{attrs:{width:"15",height:"2",viewBox:"0 0 15 2",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M14.696 0.444V1.9L0.28 1.9L0.28 0.444L14.696 0.444Z",fill:"#BDBDBD"}})])]),t._v(" "),r("span",{staticClass:"text-tertiary-300 text-xs"},[t._v("3 minutes ago")])])])]),t._v(" "),r("div",{staticClass:"mb-5 flex  items-center w-full"},[r("div",{staticClass:"z-20 flex items-center bg-tertiary-300 shadow-xl w-2 h-2 rounded-full"}),t._v(" "),r("div",{staticClass:"px-6"},[r("h3",{staticClass:"font-normal text-sm text-tertiary-600 flex items-center"},[t._v("\n                        Insurance Purchase\n                        "),r("span",{staticClass:"px-3"},[r("svg",{attrs:{width:"15",height:"2",viewBox:"0 0 15 2",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M14.696 0.444V1.9L0.28 1.9L0.28 0.444L14.696 0.444Z",fill:"#BDBDBD"}})])]),t._v(" "),r("span",{staticClass:"text-tertiary-300 text-xs"},[t._v("3 minutes ago")])])])]),t._v(" "),r("div",{staticClass:"mb-5 flex  items-center w-full"},[r("div",{staticClass:"z-20 flex items-center bg-tertiary-300 shadow-xl w-2 h-2 rounded-full"}),t._v(" "),r("div",{staticClass:"px-6"},[r("h3",{staticClass:"font-normal text-sm text-tertiary-600 flex items-center"},[t._v("\n                        Insurance Purchase\n                        "),r("span",{staticClass:"px-3"},[r("svg",{attrs:{width:"15",height:"2",viewBox:"0 0 15 2",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M14.696 0.444V1.9L0.28 1.9L0.28 0.444L14.696 0.444Z",fill:"#BDBDBD"}})])]),t._v(" "),r("span",{staticClass:"text-tertiary-300 text-xs"},[t._v("3 minutes ago")])])])])])])])}),[],!1,null,null,null);e.default=component.exports},316:function(t,e,r){"use strict";r.r(e);var l=r(17),component=Object(l.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-white rounded-xl max-h-100"},[r("h3",{staticClass:"text-xs font-normal text-tertiary-500 capitalize p-5 pb-4 border-b"},[t._v("assets")]),t._v(" "),r("div",{staticClass:"p-5 "},[r("h3",{staticClass:"text-xs font-normal text-tertiary-500 capitalize pb-4"},[t._v("total asset:")]),t._v(" "),r("div",{staticClass:"flex items-center"},[r("div",{staticClass:"text-center pr-4"},[r("div",{staticClass:"w-12 h-12 border border-purple-400 rounded-full"},[r("img",{attrs:{src:"",alt:"",srcset:""}})]),t._v(" "),r("p",{staticClass:"text-xs font-normal text-purple-400"},[t._v("House")])]),t._v(" "),r("div",{staticClass:"text-center pr-4"},[r("div",{staticClass:"w-12 h-12 border border-purple-400 rounded-full"},[r("img",{attrs:{src:"",alt:"",srcset:""}})]),t._v(" "),r("p",{staticClass:"text-xs font-normal text-purple-400"},[t._v("House")])]),t._v(" "),r("div",{staticClass:"text-center pr-4"},[r("div",{staticClass:"w-12 h-12 border border-purple-400 rounded-full"},[r("img",{attrs:{src:"",alt:"",srcset:""}})]),t._v(" "),r("p",{staticClass:"text-xs font-normal text-purple-400"},[t._v("House")])])])])])}],!1,null,null,null);e.default=component.exports},332:function(t,e,r){"use strict";r.r(e);var l=r(17),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-white rounded-xl max-h-50 h-50"},[r("h3",{staticClass:"text-xs font-normal text-tertiary-500 capitalize p-5 pb-4 border-b h-1/4"},[t._v("document status")]),t._v(" "),r("div",{staticClass:"h-3/4"},[r("div",{staticClass:"min-w-full bg-primary-100 full"},[t._m(0),t._v(" "),r("div",{staticClass:"bg-white text-xs text-tertiary-500 font-normal h-24  overflow-y-auto"},[r("div",{staticClass:"border-b grid grid-cols-5"},[r("div",{staticClass:"col-span-3 text-left py-2 px-5"},[t._v("Driver’s Licence")]),t._v(" "),r("div",{staticClass:"col-span-2 text-left py-2 px-5"},[r("Status",{attrs:{classes:"w-16 text-thin",status:"approved"}})],1)]),t._v(" "),r("div",{staticClass:"border-b grid grid-cols-5"},[r("div",{staticClass:"col-span-3 text-left py-2 px-5"},[t._v("International Passport")]),t._v(" "),r("div",{staticClass:"col-span-2 text-left py-2 px-5"},[r("Status",{attrs:{classes:"w-16 text-thin",status:"pending"}})],1)]),t._v(" "),r("div",{staticClass:"border-b grid grid-cols-5"},[r("div",{staticClass:"col-span-3 text-left py-2 px-5"},[t._v("Bank Verification Number")]),t._v(" "),r("div",{staticClass:"col-span-2 text-left py-2 px-5"},[r("Status",{attrs:{classes:"w-16 text-thin",status:"denied"}})],1)]),t._v(" "),r("div",{staticClass:"border-b grid grid-cols-5"},[r("div",{staticClass:"col-span-3 text-left py-2 px-5"},[t._v("Bank Verification Number")]),t._v(" "),r("div",{staticClass:"col-span-2 text-left py-2 px-5"},[r("Status",{attrs:{classes:"w-16 text-thin",status:"denied"}})],1)]),t._v(" "),r("div",{staticClass:"border-b grid grid-cols-5"},[r("div",{staticClass:"col-span-3 text-left py-2 px-5"},[t._v("Bank Verification Number")]),t._v(" "),r("div",{staticClass:"col-span-2 text-left py-2 px-5"},[r("Status",{attrs:{classes:"w-16 text-thin",status:"denied"}})],1)])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-sm text-tertiary-800 grid grid-cols-5"},[r("div",{staticClass:"col-span-3 text-left py-2 px-5 text-xs font-normal"},[t._v(" Document type")]),t._v(" "),r("div",{staticClass:"col-span-2 text-left py-2 px-5 text-xs font-normal"},[t._v(" Status ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Status:r(297).default})},393:function(t,e,r){"use strict";r.r(e);r(45),r(26),r(28),r(55),r(27),r(56);var l=r(29),n=(r(57),r(58),r(297)),o=r(314),d=r(315),c=r(316),x=r(288),v=r(291),m=r(286),f=r(290),_=r(292),h=r(294),y=r(54);function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}c.default;var D={name:"Show",components:{Status:n.default,BioData:o.default,ActivitiesLog:d.default,AssetsCard:c.default,BreadCrumb:x.default,FormButton:v.default,Button:m.default,Sliding:f.default,Tabs:h.default,Input:_.default},data:function(){return{toggle_slide:!1,activeTab:0,tabs:["Bio Data","Documents"]}},methods:w(w({},Object(y.b)({updateOwner:"owner/updateOwner"})),{},{getFullName:function(t){return"".concat(t.title?t.title:""," ").concat(t.firstName?t.firstName:""," ").concat(t.lastName?t.lastName:""," ").concat(t.otherName?t.otherName:"")},toggleSlide:function(){this.toggle_slide=!this.toggle_slide,this.update_data},submitUpdateOwner:function(){this.updateOwner({owner:this.update_data,id:this.owner.id})}}),asyncData:function(t){var e=t.store,r=t.params,l=e.state.owner.individualOwners.find((function(t){return t.id===r.id}));return{owner:l,update_data:{title:l.title,firstName:l.firstName,lastName:l.lastName,otherName:l.otherName,emailAddress:l.emailAddress,phoneNumber:l.phoneNumber,gender:l.gender,maritalStatus:l.maritalStatus,dateOfBirth:l.dateOfBirth,bvn:l.ninOrBvn,street:l.address.street,city:l.address.city,landmark:l.address.landmark,state:l.address.state,lga:l.address.lga,type:l.type}}}},M=r(17),component=Object(M.a)(D,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("BreadCrumb",{attrs:{item_id:"#489755",title:"Revenue"}},[l("Button",{attrs:{type:"secondary",title:"Update",onClick:t.toggleSlide}})],1),t._v(" "),l("div",{staticClass:"grid gap-y-8 pb-8 max-w-lg-screen mx-auto px-10 xl:px-32 py-10 2xl:px-0  h-full"},[l("BioData",[l("template",{slot:"left"},[l("div",{staticClass:"col-span-2"},[l("h5",{staticClass:"text-xs font-normal text-tertiary-300"},[t._v("Unique ID")]),t._v(" "),l("p",{staticClass:"text-xl text-tertiary-900 font-medium truncate "},[t._v(t._s(t.owner.ownerId?t.owner.ownerId:"-"))])]),t._v(" "),l("div",{staticClass:"col-span-2"},[l("h5",{staticClass:"text-xs font-normal text-tertiary-300"},[t._v("Owner Name")]),t._v(" "),l("p",{staticClass:"text-xl text-tertiary-900 font-medium"},[t._v(t._s(t.getFullName(t.owner)))])]),t._v(" "),l("div",{staticClass:"col-span-2"},[l("h5",{staticClass:"text-xs font-normal text-tertiary-300"},[t._v("State of origin")]),t._v(" "),l("p",{staticClass:"text-xl text-tertiary-900 font-medium"},[t._v(t._s(t.owner.address.state?t.owner.address.state:"-"))])])]),t._v(" "),l("div",{staticClass:"col-span-2 grid grid-cols-3 gap-y-4"},[l("div",[l("h5",{staticClass:"text-xs font-normal text-tertiary-300"},[t._v("nIN/BVN")]),t._v(" "),l("p",{staticClass:"text-tertiary-900 font-medium"},[t._v(t._s(t.owner.ninOrBvn?t.owner.ninOrBvn:"-"))])]),t._v(" "),l("div",[l("h5",{staticClass:"text-xs font-normal text-tertiary-300"},[t._v("Marital Status")]),t._v(" "),l("p",{staticClass:"text-tertiary-900 font-medium"},[t._v(t._s(t.owner.maritalStatus?t.owner.maritalStatus:"-"))])]),t._v(" "),l("div",[l("h5",{staticClass:"text-xs font-normal text-tertiary-300"},[t._v("Local Government Area")]),t._v(" "),l("p",{staticClass:"text-tertiary-900 font-medium"},[t._v(t._s(t.owner.address.lga?t.owner.address.lga:"-"))])]),t._v(" "),l("div",[l("h5",{staticClass:"text-xs font-normal text-tertiary-300"},[t._v("Phone number")]),t._v(" "),l("p",{staticClass:"text-tertiary-900 font-medium"},[t._v(t._s(t.owner.phoneNumber?t.owner.phoneNumber:"-"))])]),t._v(" "),l("div",[l("h5",{staticClass:"text-xs font-normal text-tertiary-300"},[t._v("City")]),t._v(" "),l("p",{staticClass:"text-tertiary-900 font-medium"},[t._v(t._s(t.owner.address.city?t.owner.address.city:"-"))])]),t._v(" "),l("div",[l("h5",{staticClass:"text-xs font-normal text-tertiary-300 capitalize"},[t._v("date of birth")]),t._v(" "),l("p",{staticClass:"text-tertiary-900 font-medium"},[t._v(t._s(t.owner.dateOfBirth?t.owner.dateOfBirth:"-"))])]),t._v(" "),l("div",[l("h5",{staticClass:"text-xs font-normal text-tertiary-300"},[t._v("Email address")]),t._v(" "),l("p",{staticClass:"text-tertiary-900 font-medium"},[t._v(t._s(t.owner.email?t.owner.email:"-"))])]),t._v(" "),l("div",{staticClass:"col-start-3 xl:col-start-3"},[l("h5",{staticClass:"text-xs font-normal text-tertiary-300"},[t._v("State")]),t._v(" "),l("p",{staticClass:"text-tertiary-900 font-medium"},[t._v(t._s(t.owner.address.state?t.owner.address.state:"-"))])]),t._v(" "),l("div",{staticClass:"col-span-3"},[l("h5",{staticClass:"text-xs font-normal text-tertiary-300"},[t._v("Residential Address")]),t._v(" "),l("p",{staticClass:"text-tertiary-900 font-medium"},[t._v(t._s(t.owner.address.street?t.owner.address.street:"-"))])])])],2),t._v(" "),l("div",{staticClass:"grid grid-cols-3 gap-x-6"},[l("ActivitiesLog"),t._v(" "),l("div",{staticClass:"grid grid-rows-2 gap-4 max-h-100"},[l("AssetsCard"),t._v(" "),l("DocumentStatusCard")],1)],1)],1),t._v(" "),l("Sliding",{directives:[{name:"show",rawName:"v-show",value:t.toggle_slide,expression:"toggle_slide"}],attrs:{classes:"min-w-150"}},[l("template",{slot:"head"},[l("div",{staticClass:"flex items-center justify-between"},[l("div",[l("h4",{staticClass:"text-2xl text-primary-900 font-semibold"},[t._v("Update Data")]),t._v(" "),l("p",{staticClass:"text-base text-tertiary-600 font-normal py-2"},[t._v("#0123")])]),t._v(" "),l("button",{staticClass:"text-tertiary-600 font-semibold focus:outline-none border-0 text-2xl",on:{click:t.toggleSlide}},[l("img",{attrs:{src:r(304),alt:"",srcset:""}})])])]),t._v(" "),l("Tabs",[l("template",{slot:"head"},t._l(t.tabs,(function(e,r){return l("li",{key:r,staticClass:"text-xs cursor-pointer py-2 mr-10  border-b-4 ",class:t.activeTab===r?" text-primary-500 border-primary-500":"border-transparent text-tertiary-500",on:{click:function(e){t.activeTab=r}}},[t._v("\n                    "+t._s(e)+"\n                ")])})),0),t._v(" "),l("div",{directives:[{name:"show",rawName:"v-show",value:0===t.activeTab,expression:"activeTab === 0"}],staticClass:"p-5 px-10"},[l("form",{staticClass:"grid grid-cols-2 gap-6 gap-x-10",on:{submit:function(e){return e.preventDefault(),t.submitUpdateOwner.apply(null,arguments)}}},[l("Input",{attrs:{id:"first_name",place_holder:"Labaika",lable:"First Name",type:"text"},model:{value:t.update_data.firstName,callback:function(e){t.$set(t.update_data,"firstName",e)},expression:"update_data.firstName"}}),t._v(" "),l("Input",{attrs:{id:"last_name",place_holder:"Labaika",lable:"Last Name",type:"text"},model:{value:t.update_data.lastName,callback:function(e){t.$set(t.update_data,"lastName",e)},expression:"update_data.lastName"}}),t._v(" "),l("Input",{attrs:{id:"other_name",place_holder:"Labaika",lable:"Other Name",type:"text"},model:{value:t.update_data.otherName,callback:function(e){t.$set(t.update_data,"otherName",e)},expression:"update_data.otherName"}}),t._v(" "),l("Input",{attrs:{isDisable:"true",id:"gender",place_holder:"Male",lable:"Gender",type:"text"},model:{value:t.update_data.gender,callback:function(e){t.$set(t.update_data,"gender",e)},expression:"update_data.gender"}}),t._v(" "),l("Input",{attrs:{id:"nin_or_bvn",place_holder:"0123456789101",lable:"NIN / BVN",type:"text"},model:{value:t.update_data.bvn,callback:function(e){t.$set(t.update_data,"bvn",e)},expression:"update_data.bvn"}}),t._v(" "),l("Input",{attrs:{isDisable:"true",id:"date_of_birth",place_holder:"23 Jan, 1994",lable:"Date of Birth",type:"date"},model:{value:t.update_data.dateOfBirth,callback:function(e){t.$set(t.update_data,"dateOfBirth",e)},expression:"update_data.dateOfBirth"}}),t._v(" "),l("Input",{attrs:{id:"phone_number",place_holder:"+2348012345678",lable:"Phone Number",type:"tel"},model:{value:t.update_data.phoneNumber,callback:function(e){t.$set(t.update_data,"phoneNumber",e)},expression:"update_data.phoneNumber"}}),t._v(" "),l("Input",{attrs:{id:"lga",place_holder:"Ireposi South",lable:"Local Government Area",type:"text"},model:{value:t.update_data.lga,callback:function(e){t.$set(t.update_data,"lga",e)},expression:"update_data.lga"}}),t._v(" "),l("Input",{attrs:{id:"email",place_holder:"everything.some@nothing.com",lable:"Email Address",type:"email"},model:{value:t.update_data.emailAddress,callback:function(e){t.$set(t.update_data,"emailAddress",e)},expression:"update_data.emailAddress"}}),t._v(" "),l("Input",{attrs:{id:"city",place_holder:"Ikeja",lable:"City",type:"text"},model:{value:t.update_data.city,callback:function(e){t.$set(t.update_data,"city",e)},expression:"update_data.city"}}),t._v(" "),l("Input",{attrs:{id:"residential_address",place_holder:"Plot 134, Lorem ipsum",lable:"Residential Address",type:"text"},model:{value:t.update_data.street,callback:function(e){t.$set(t.update_data,"street",e)},expression:"update_data.street"}}),t._v(" "),l("Input",{attrs:{id:"state",place_holder:"Lagos",lable:"Residential Address",type:"text"},model:{value:t.update_data.state,callback:function(e){t.$set(t.update_data,"state",e)},expression:"update_data.state"}}),t._v(" "),l("Input",{attrs:{id:"landmark",place_holder:"landmark",lable:"landmark",type:"text"},model:{value:t.update_data.landmark,callback:function(e){t.$set(t.update_data,"landmark",e)},expression:"update_data.landmark"}}),t._v(" "),l("div",{staticClass:"col-span-2 flex items-center justify-center py-6"},[l("FormButton",{attrs:{title:"Save Changes",type:"solid"}}),t._v(" "),l("Button",{attrs:{onClick:t.toggleSlide,title:"Cancle"}})],1)],1)]),t._v(" "),l("div",{directives:[{name:"show",rawName:"v-show",value:1===t.activeTab,expression:"activeTab === 1"}],staticClass:"p-5 grid grid-cols-2 gap-6"},[l("div",{staticClass:"flex flex-col"},[l("label",{staticClass:"text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left",attrs:{for:"email"}},[t._v("First Name")]),t._v(" "),l("input",{staticClass:"text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border",attrs:{id:"email",placeholder:"Labaika"}})]),t._v(" "),l("div",{staticClass:"flex flex-col"},[l("label",{staticClass:"text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left",attrs:{for:"email"}},[t._v("Other Name")]),t._v(" "),l("input",{staticClass:"text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border",attrs:{id:"email",placeholder:"Aladeen"}})]),t._v(" "),l("div",{staticClass:"flex flex-col"},[l("label",{staticClass:"text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left",attrs:{for:"email"}},[t._v("State")]),t._v(" "),l("input",{staticClass:"text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border",attrs:{id:"email",placeholder:"Lagos"}})]),t._v(" "),l("div",{staticClass:"flex flex-col"},[l("label",{staticClass:"text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left",attrs:{for:"email"}},[t._v("Employement Status")]),t._v(" "),l("input",{staticClass:"text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border",attrs:{id:"email",placeholder:"Self-Employed"}})]),t._v(" "),l("div",{staticClass:"flex flex-col"},[l("label",{staticClass:"text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left",attrs:{for:"email"}},[t._v("Occupation")]),t._v(" "),l("input",{staticClass:"text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border",attrs:{id:"email",placeholder:"Graphic Artist"}})]),t._v(" "),l("div",{staticClass:"col-span-2 flex items-center justify-center py-6"})])],2)],2)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:r(286).default,BreadCrumb:r(288).default,BioData:r(314).default,ActivitiesLog:r(315).default,AssetsCard:r(316).default,DocumentStatusCard:r(332).default,Button:r(286).default,FormButton:r(291).default,Tabs:r(294).default,Sliding:r(290).default})}}]);