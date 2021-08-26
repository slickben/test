(window.webpackJsonp=window.webpackJsonp||[]).push([[84,11,12,15,20,21,23,33,34,36,37],{286:function(t,e,r){"use strict";r.r(e);var l={props:{type:String,title:String,onClick:{type:Function}}},n=r(17),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return"solid"===t.type?r("button",{staticClass:"px-6 min-w-28 min-h-10 text-white text-xs flex items-center justify-center bg-primary-400 focus:outline-none border-0 mr-4 hover:bg-primary-600",on:{click:function(e){return e.preventDefault(),t.onClick.apply(null,arguments)}}},[t._v(t._s(t.title))]):"secondary"===t.type?r("button",{staticClass:"px-6 min-w-28 min-h-10 text-primary-500 text-xs flex items-center justify-center  focus:outline-none border border-primary-300 hover:bg-primary-200 hover:text-primary-600",on:{click:function(e){return e.preventDefault(),t.onClick.apply(null,arguments)}}},[t._v(" "+t._s(t.title)+" ")]):r("button",{staticClass:"px-6 min-w-28 min-h-10 text-primary-500 text-xs flex items-center justify-center  focus:outline-none border-0 hover:bg-primary-100",on:{click:function(e){return e.preventDefault(),t.onClick.apply(null,arguments)}}},[t._v(" "+t._s(t.title)+" ")])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:r(286).default})},287:function(t,e,r){"use strict";r.r(e);var l={props:{head_data:Array,classes:String}},n=r(17),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full"},[r("div",{class:t.classes},[r("div",{staticClass:"p-5 bg-white text-sm text-tertiary-600 rounded-t-lg"},[t._t("head")],2),t._v(" "),r("div",{staticClass:"relative w-full pt-14 bg-primary-100 text-tertiary-800"},[r("div",{staticClass:"overflow-y-auto scrollbar-thin scrollbar-thumb-tertiary-200 scrollbar-track-white"},[r("table",{staticClass:"min-w-full bg-primary-100 overflow-auto"},[r("thead",{staticClass:"xl:text-sm text-xs text-tertiary-800"},[r("tr",{staticClass:" overflow-x-auto"},t._l(t.head_data,(function(e){return r("th",{staticClass:"text-left px-6 text-xs xl:text-sm font-normal h-0 py-0 border-0 pb-2"},[r("div",{staticClass:"py-6 text-tertiary-800 font-semibold"},[t._v(" "+t._s(e)+"  ")])])})),0)]),t._v(" "),r("tbody",{staticClass:"bg-white text-sm text-tertiary-500 font-normal stripe "},[t._t("default")],2)])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Table:r(287).default})},288:function(t,e,r){"use strict";r.r(e);var l={props:["title","back","item_id"],computed:{}},n=r(17),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"h-24 bg-white relative"},[l("div",{staticClass:"max-w-lg-screen mx-auto xl:px-32 px-10 2xl:px-0 h-full flex items-center justify-between w-full"},[l("div",{staticClass:" text-tertiary-300"},[l("h1",{staticClass:"text-2xl text-primary-900 font-semibold"},[t._v(" "+t._s(t.title)+" ")]),t._v(" "),l("p",{staticClass:"text-tertiary-600"},[t._v(t._s(t.item_id))])]),t._v(" "),l("div",[t._t("default")],2)]),t._v(" "),l("div",{directives:[{name:"show",rawName:"v-show",value:t.back,expression:"back"}],staticClass:"xl:px-24 absolute inset-y-0 flex items-center "},[l("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.$router.back()}}},[l("img",{attrs:{src:r(295),alt:"",srcset:""}})])])])}),[],!1,null,null,null);e.default=component.exports},289:function(t,e,r){"use strict";r.r(e);var l=r(17),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex items-center justify-between"},[r("div",[t._t("filter")],2),t._v(" "),r("div",{staticClass:"flex items-center"},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},290:function(t,e,r){"use strict";r.r(e);var l={props:{classes:String}},n=r(17),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"fixed inset-0 flex justify-end items-center z-50 bg-tertiary-800 bg-opacity-40"},[r("div",{staticClass:"flex flex-col h-full"},[r("div",{staticClass:"flex-none h-20"}),t._v(" "),r("div",{staticClass:"bg-white flex-grow h-full overflow-y-auto scrollbar-thin scrollbar-thumb-tertiary-200 scrollbar-track-tertiary-100",class:t.classes},[r("div",{staticClass:"p-5 border-b"},[t._t("head")],2),t._v(" "),r("div",[t._t("default")],2)]),t._v(" "),r("div",{staticClass:"flex-none h-20"})])])}),[],!1,null,null,null);e.default=component.exports},291:function(t,e,r){"use strict";r.r(e);var l={props:{type:String,title:String}},n=r(17),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return"solid"===t.type?r("button",{staticClass:"w-28 h-10 text-white text-xs flex items-center justify-center rounded-xl bg-primary-400 focus:outline-none border-0 mr-4 hover:bg-primary-600",attrs:{type:"submit"}},[t._v(t._s(t.title))]):r("button",{staticClass:"w-28 h-10 text-primary-400 text-xs flex items-center justify-center rounded-xl  focus:outline-none border-0 hover:bg-primary-100",attrs:{type:"submit"}},[t._v(" "+t._s(t.title)+" ")])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:r(286).default})},292:function(t,e,r){"use strict";r.r(e);var l={props:["lable","isRequired","type","place_holder","id","value","isDisable","error"]},n=r(17),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col w-full"},[r("label",{staticClass:"pb-2 text-xs font-normal text-left text-tertiary-600 dark:text-gray-100",attrs:{for:t.id}},[t._v("\n        "+t._s(t.lable)+" "),r("span",{directives:[{name:"show",rawName:"v-show",value:t.isRequired,expression:"isRequired"}],staticClass:"text-red-500"},[t._v("*")])]),t._v(" "),t.isRequired?r("input",{staticClass:"border border-gray-300 dark:border-gray-700 pl-3 h-12 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-600 dark:text-gray-400",class:[t.isDisable?"opacity-50":"",t.error?"border-red-600":"border-gray-300"],attrs:{disabled:t.isDisable,type:t.type,id:t.id,required:"",placeholder:t.place_holder},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}}):r("input",{staticClass:"border border-gray-300 dark:border-gray-700 pl-3 h-12 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-600 dark:text-gray-400",class:[t.isDisable?"opacity-50":"",t.error?"border-red-600":"border-gray-300"],attrs:{disabled:t.isDisable,type:t.type,id:t.id,placeholder:t.place_holder},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}})])}),[],!1,null,null,null);e.default=component.exports},295:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjMiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyMyAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0wLjI5Mjg5MyA3LjI5Mjg5Qy0wLjA5NzYzMTEgNy42ODM0MiAtMC4wOTc2MzExIDguMzE2NTggMC4yOTI4OTMgOC43MDcxMUw2LjY1Njg1IDE1LjA3MTFDNy4wNDczOCAxNS40NjE2IDcuNjgwNTQgMTUuNDYxNiA4LjA3MTA3IDE1LjA3MTFDOC40NjE1OSAxNC42ODA1IDguNDYxNTkgMTQuMDQ3NCA4LjA3MTA3IDEzLjY1NjlMMi40MTQyMSA4TDguMDcxMDcgMi4zNDMxNUM4LjQ2MTU5IDEuOTUyNjIgOC40NjE1OSAxLjMxOTQ2IDguMDcxMDcgMC45Mjg5MzJDNy42ODA1NCAwLjUzODQwOCA3LjA0NzM4IDAuNTM4NDA4IDYuNjU2ODUgMC45Mjg5MzJMMC4yOTI4OTMgNy4yOTI4OVpNMjEgOUMyMS41NTIzIDkgMjIgOC41NTIyOCAyMiA4QzIyIDcuNDQ3NzIgMjEuNTUyMyA3IDIxIDdWOVpNMSA5SDIxVjdIMVY5WiIgZmlsbD0iIzZCOEVGQSIvPg0KPC9zdmc+DQo="},297:function(t,e,r){"use strict";r.r(e);var l={props:{status:String,classes:String},computed:{},methods:{color:function(t){return"approved"===t?"text-action-success bg-action-success-light":"pending"===t?"text-action-warning bg-action-warning-light":"denied"===t?"text-action-danger bg-action-danger-light":""}}},n=r(17),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"flex items-center justify-center font-normal rounded-md ",class:[t.color(t.status),t.classes]},[t._v("\n    "+t._s(t.status)+"\n")])}),[],!1,null,null,null);e.default=component.exports},310:function(t,e,r){"use strict";r.r(e);var l={props:["lable","isRequired","id","value"]},n=r(17),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col w-full"},[r("label",{staticClass:"pb-2 text-xs font-normal  text-tertiary-600 dark:text-gray-100",attrs:{for:t.id}},[t._v(t._s(t.lable)+" "),r("span",{directives:[{name:"show",rawName:"v-show",value:t.isRequired,expression:"isRequired"}],staticClass:"text-red-500"},[t._v("*")])]),t._v(" "),(t.isRequired,r("select",{staticClass:"border border-gray-300 dark:border-gray-700 px-4 py-3 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400",attrs:{id:t.id,required:""},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}},[t._t("default")],2))])}),[],!1,null,null,null);e.default=component.exports},313:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEESURBVHgB3VLNzYJAEHWXhQOnr4OPEuxArMBYgVqB7olwcj0QAhy0A7UCYwXagSVICZw48eMbo4ZoEPToJMMyszOPN29gYRieGWNx5wsry9ISOPdFUcSO46w+aY6iaA4Adg3A4uR5Xrdts+/7VhAEZ3rn9MjzfKjr+lop9dfUTDWapu3Auv8AcF03Bp2taZrLJgCqoVrqebkErQ18VteMUafwdTXHq4FhGDNsZEQzPjffcuM0TWUtgJQywTGhGZ8BkDuQVtAg6TQZxlDkFerjalzL4G5Q+IhR/u8xRLMp1xrgE/sBAPHuEru3OecDCNpDqFoDQPEEe7eFEFaWZQv8trLuIxfkg2z2XTxnDAAAAABJRU5ErkJggg=="},324:function(t,e,r){"use strict";r.r(e);var l={props:["label","id","value"]},n=r(17),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex items-center justify-end py-6"},[r("p",{staticClass:"pr-2 text-tertiary-500 text-sm"},[t._v(t._s(t.label)+":")]),t._v(" "),r("div",{staticClass:"cursor-pointer rounded-full relative shadow-sm"},[r("input",{staticClass:"focus:outline-none checkbox w-8 h-8 rounded-full bg-white absolute m-1 shadow-sm appearance-none cursor-pointer",attrs:{type:"checkbox",name:t.id,id:t.id},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}}),t._v(" "),r("label",{staticClass:"toggle-label dark:bg-gray-700 block w-32 h-10 overflow-hidden rounded-full bg-gray-300 cursor-pointer py-2 px-3 text-white",attrs:{for:t.id}})])])}),[],!1,null,null,null);e.default=component.exports},396:function(t,e,r){"use strict";r.r(e);r(45),r(26),r(28),r(55),r(27),r(56);var l=r(29),n=r(287),o=r(297),c=r(289),d=r(288),x=r(292),f=r(310),v=r(324),m=r(54),y=r(286);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var C={components:{Table:n.default,Status:o.default,TableFilter:c.default,BreadCrumb:d.default,Button:y.default,Input:x.default,InputSelect:f.default,CustomizeCheckbox:v.default},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(m.d)({demo:function(t){return t.demo},isloading:function(t){return t.isloading}})),data:function(){return{table_head_data:["Location","Local Government","Status"],addUserModal:!1,editUserModal:!1,toggle_add:!1,toggle_edit:!1,location:{name:"",lga:"",status:!1}}},methods:{toggleAddFunc:function(){this.toggle_add=!this.toggle_add},toggleAddEdit:function(){this.toggle_edit=!this.toggle_edit},toggleAddUserModal:function(){this.addUserModal=!this.addUserModal},toggleEditUserModal:function(t){console.log(t),this.editUserModal=!this.editUserModal}}},h=r(17),component=Object(h.a)(C,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("div",{staticClass:"pb-8 relative"},[l("BreadCrumb",{attrs:{title:"Location"}},[l("button",{staticClass:"min-w-28 px-6 h-10 text-white text-xs flex items-center justify-center rounded-xl bg-primary-400 focus:outline-none border-0 mr-4 hover:bg-primary-600",on:{click:t.toggleAddFunc}},[t._v("\n                Add Location\n            ")])]),t._v(" "),l("div",{staticClass:"max-w-lg-screen mx-auto px-10 xl:px-32 py-10 2xl:px-0  h-full w-full"},[l("Table",{attrs:{classes:"rounded-md",head_data:t.table_head_data},scopedSlots:t._u([{key:"head",fn:function(){return[l("TableFilter",{staticClass:"pt-5 pb-2",scopedSlots:t._u([{key:"filter",fn:function(){return[l("div",{staticClass:" relative"},[l("button",{staticClass:" hover:bg-primary-300 hover:text-tertiary-900 hover:border-primary-300  flex items-center focus:outline-none py-3 px-4 rounded-md border  w-60",class:[t.toggle_filter?"bg-primary-300 text-tertiary-900 border-primary-300":"bg-white text-tertiary-500 border-tertiary-400"],on:{click:t.toggleFilterFunc}},[l("img",{attrs:{src:r(313),alt:"",srcset:""}}),t._v(" "),l("span",{staticClass:"pl-4 text-xs"},[t._v("Filter Owner")])]),t._v(" "),l("div",{directives:[{name:"show",rawName:"v-show",value:t.toggle_filter,expression:"toggle_filter"}],staticClass:"absolute pt-2 z-70 "},[l("div",{staticClass:"bg-white rounded-md text-tertiary-500 shadow"},[l("p",{staticClass:"text-xs text-tertiary-800 bg-tertiary-200 py-2 rounded-t-md px-6"},[t._v("date")]),t._v(" "),l("div",{staticClass:"py-3 px-4"},[l("p",{staticClass:"text-xs"},[t._v("Last")]),t._v(" "),l("div",{staticClass:"pt-1"},[l("button",{staticClass:" focus:outline-none py-1 px-2 rounded text-primary-500 bg-primary-100 mr-2 text-xs"},[t._v("\n                                            3days\n                                            ")]),t._v(" "),l("button",{staticClass:" focus:outline-none py-1 px-2 rounded text-primary-500 bg-primary-100 mr-2 text-xs"},[t._v("7 days")]),t._v(" "),l("button",{staticClass:" focus:outline-none py-1 px-2 rounded text-primary-500 bg-primary-100 mr-2 text-xs"},[t._v("30 day")])])]),t._v(" "),l("div",{staticClass:"flex items-center"},[l("div",{staticClass:"py-3 px-4"},[l("p",{staticClass:"text-xs text-tertiary-500"},[t._v("From")]),t._v(" "),l("input",{staticClass:"border py-1 px-2 rounded-md text-xs text-tertiary-500 focus:outline-none",attrs:{type:"date",name:"",id:""}})]),t._v(" "),l("div",{staticClass:"py-3 px-4 text-tertiary-500"},[l("p",{staticClass:"text-xs"},[t._v("From")]),t._v(" "),l("input",{staticClass:"border py-1 px-2 rounded-md text-xs text-tertiary-500 focus:outline-none",attrs:{type:"date",name:"",id:""}})])]),t._v(" "),l("p",{staticClass:"text-xs text-tertiary-800 bg-tertiary-200 py-2 px-6"},[t._v("Unigue Id")]),t._v(" "),l("div",{staticClass:"py-5 px-4"},[l("input",{staticClass:"w-full border-tertiary-400 py-2 px-4 border rounded focus:outline-none placeholder-tertiary-500 text-tertiary-700 text-xs",attrs:{placeholder:"Enter Unique Id",type:"text"}})]),t._v(" "),l("p",{staticClass:"text-xs text-tertiary-800 bg-tertiary-200 py-2 px-6"},[t._v("Profile Name")]),t._v(" "),l("div",{staticClass:"py-5 px-4"},[l("input",{staticClass:"w-full border-tertiary-400 py-2 px-4 border rounded focus:outline-none placeholder-tertiary-500 text-tertiary-700 text-xs",attrs:{placeholder:"Enter Profie Name",type:"text"}})]),t._v(" "),l("div",{staticClass:"py-5 px-4 flex justify-between items-center"},[l("button",{staticClass:"text-xs focus:outline-none text-primary-500 hover:bg-primary-100 px-4 h-6 rounded-xl"},[t._v("clear")]),t._v(" "),l("button",{staticClass:"text-xs focus:outline-none text-white hover:bg-primary-500 bg-primary-400 px-4 h-6 rounded-xl "},[t._v("Filter")])])])])])]},proxy:!0}])},[t._v(" "),l("div",{staticClass:"flex items-center"},[l("span",{staticClass:"text-xs text-tertiary-300 mr-1"},[t._v("Show entries")]),t._v(" "),l("select",{staticClass:"focus:outline-none w-16 h-10 border px-2 rounded-md",attrs:{name:"",id:""}},[l("option",{attrs:{selected:"",value:"10"}},[t._v("10")]),t._v(" "),l("option",{attrs:{value:"10"}},[t._v("20")]),t._v(" "),l("option",{attrs:{value:"10"}},[t._v("30")])])])])]},proxy:!0}])},[t._v(" "),t._l(t.demo,(function(e){return l("tr",{staticClass:"group hover:bg-primary-200 text-xs xl:text-sm"},[l("td",{staticClass:"text-left py-5 px-6"},[t._v(t._s(e.unique_Id))]),t._v(" "),l("td",{staticClass:"text-left py-5 px-6"},[l("nuxt-link",{attrs:{to:"/user-manager/users/"+e.name}},[t._v("\n                            "+t._s(e.name)+"\n                        ")])],1),t._v(" "),l("td",{staticClass:"text-left py-5 px-6"},[l("span",{staticClass:"text-xs font-normal pl-1 text-action-danger flex items-center"},[l("svg",{attrs:{width:"8",height:"8",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{d:"M4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0ZM2.42716 1.6157C2.89386 1.30755 3.44075 1.14314 4 1.14286C4.56005 1.14227 5.10777 1.30729 5.57429 1.61714L1.61714 5.57429C0.747696 4.25746 1.11034 2.48516 2.42716 1.6157ZM5.57284 6.3843C5.10614 6.69245 4.55927 6.85686 4 6.85714C3.43995 6.85773 2.89223 6.69271 2.42571 6.38286L6.38286 2.42571C7.2523 3.74252 6.88966 5.51484 5.57284 6.3843Z",fill:"#9E0505"}})]),t._v(" "),l("span",{staticClass:"pl-1"},[t._v("enabled")])])])])}))],2)],1)],1),t._v(" "),l("Sliding",{directives:[{name:"show",rawName:"v-show",value:t.toggle_add,expression:"toggle_add"}],attrs:{classes:"min-w-105 w-full"}},[l("template",{slot:"head"},[l("div",{staticClass:"flex items-center justify-between"},[l("div",[l("h4",{staticClass:"text-2xl text-primary-900 font-semibold"},[t._v("Add Location")])]),t._v(" "),l("button",{staticClass:"text-tertiary-600 font-semibold focus:outline-none border-0 text-2xl",on:{click:t.toggleAddFunc}},[t._v("X")])])]),t._v(" "),l("div",[l("form",{staticClass:"p-6 px-10 pt-16",on:{submit:function(e){return e.preventDefault(),t.submitAdd.apply(null,arguments)}}},[l("Input",{staticClass:"mb-6",attrs:{type:"text",id:"name",lable:"Name",place_holder:"Enter Name"},model:{value:t.location.name,callback:function(e){t.$set(t.location,"name",e)},expression:"location.name"}}),t._v(" "),l("InputSelect",{attrs:{type:"text",id:"lga",lable:"Local Government Area"},model:{value:t.location.lga,callback:function(e){t.$set(t.location,"lga",e)},expression:"location.lga"}}),t._v(" "),l("div",{staticClass:"flex justify-start"},[l("CustomizeCheckbox",{attrs:{id:"status",label:"Status"},model:{value:t.location.status,callback:function(e){t.$set(t.location,"status",e)},expression:"location.status"}})],1),t._v(" "),l("div",{staticClass:"col-span-2 flex items-center justify-end py-6 pt-10"},[l("FormButton",{staticClass:" rounded-full",attrs:{title:"Done",type:"solid"}}),t._v(" "),l("Button",{staticClass:" rounded-full",attrs:{onClick:t.toggleAddFunc,title:"Cancle"}})],1)],1)])],2),t._v(" "),l("Sliding",{directives:[{name:"show",rawName:"v-show",value:t.toggle_edit,expression:"toggle_edit"}],attrs:{classes:"min-w-105 w-full"}},[l("template",{slot:"head"},[l("div",{staticClass:"flex items-center justify-between"},[l("div",[l("h4",{staticClass:"text-2xl text-primary-900 font-semibold"},[t._v("Edit Location")])]),t._v(" "),l("button",{staticClass:"text-tertiary-600 font-semibold focus:outline-none border-0 text-2xl",on:{click:t.toggleAddEdit}},[t._v("X")])])]),t._v(" "),l("div",[l("form",{staticClass:"p-6 px-10 pt-16",on:{submit:function(e){return e.preventDefault(),t.submitAdd.apply(null,arguments)}}},[l("Input",{staticClass:"mb-6",attrs:{type:"text",id:"name",lable:"Name",place_holder:"Enter Name"},model:{value:t.location.name,callback:function(e){t.$set(t.location,"name",e)},expression:"location.name"}}),t._v(" "),l("InputSelect",{attrs:{type:"text",id:"lga",lable:"Local Government Area"},model:{value:t.location.lga,callback:function(e){t.$set(t.location,"lga",e)},expression:"location.lga"}}),t._v(" "),l("div",{staticClass:"flex justify-start"},[l("CustomizeCheckbox",{attrs:{id:"status",label:"Status"},model:{value:t.location.status,callback:function(e){t.$set(t.location,"status",e)},expression:"location.status"}})],1),t._v(" "),l("div",{staticClass:"col-span-2 flex items-center justify-end py-6 pt-10"},[l("FormButton",{staticClass:" rounded-full",attrs:{title:"Done",type:"solid"}}),t._v(" "),l("Button",{staticClass:" rounded-full",attrs:{onClick:t.toggleAddEdit,title:"Cancle"}})],1)],1)])],2)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:r(286).default,BreadCrumb:r(288).default,TableFilter:r(289).default,Table:r(287).default,FormButton:r(291).default,Button:r(286).default,Sliding:r(290).default})}}]);