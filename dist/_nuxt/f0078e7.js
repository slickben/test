(window.webpackJsonp=window.webpackJsonp||[]).push([[51,11,34,36,37],{287:function(t,e,r){"use strict";r.r(e);var n={props:{head_data:Array,classes:String}},l=r(17),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full"},[r("div",{class:t.classes},[r("div",{staticClass:"p-5 bg-white text-sm text-tertiary-600 rounded-t-lg"},[t._t("head")],2),t._v(" "),r("div",{staticClass:"relative w-full pt-14 bg-primary-100 text-tertiary-800"},[r("div",{staticClass:"overflow-y-auto scrollbar-thin scrollbar-thumb-tertiary-200 scrollbar-track-white"},[r("table",{staticClass:"min-w-full bg-primary-100 overflow-auto"},[r("thead",{staticClass:"xl:text-sm text-xs text-tertiary-800"},[r("tr",{staticClass:" overflow-x-auto"},t._l(t.head_data,(function(e){return r("th",{staticClass:"text-left px-6 text-xs xl:text-sm font-normal h-0 py-0 border-0 pb-2"},[r("div",{staticClass:"py-6 text-tertiary-800 font-semibold"},[t._v(" "+t._s(e)+"  ")])])})),0)]),t._v(" "),r("tbody",{staticClass:"bg-white text-sm text-tertiary-500 font-normal stripe "},[t._t("default")],2)])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Table:r(287).default})},288:function(t,e,r){"use strict";r.r(e);var n={props:["title","back","item_id"],computed:{}},l=r(17),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"h-24 bg-white relative"},[n("div",{staticClass:"max-w-lg-screen mx-auto xl:px-32 px-10 2xl:px-0 h-full flex items-center justify-between w-full"},[n("div",{staticClass:" text-tertiary-300"},[n("h1",{staticClass:"text-2xl text-primary-900 font-semibold"},[t._v(" "+t._s(t.title)+" ")]),t._v(" "),n("p",{staticClass:"text-tertiary-600"},[t._v(t._s(t.item_id))])]),t._v(" "),n("div",[t._t("default")],2)]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.back,expression:"back"}],staticClass:"xl:px-24 absolute inset-y-0 flex items-center "},[n("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.$router.back()}}},[n("img",{attrs:{src:r(295),alt:"",srcset:""}})])])])}),[],!1,null,null,null);e.default=component.exports},289:function(t,e,r){"use strict";r.r(e);var n=r(17),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex items-center justify-between"},[r("div",[t._t("filter")],2),t._v(" "),r("div",{staticClass:"flex items-center"},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},295:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjMiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyMyAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0wLjI5Mjg5MyA3LjI5Mjg5Qy0wLjA5NzYzMTEgNy42ODM0MiAtMC4wOTc2MzExIDguMzE2NTggMC4yOTI4OTMgOC43MDcxMUw2LjY1Njg1IDE1LjA3MTFDNy4wNDczOCAxNS40NjE2IDcuNjgwNTQgMTUuNDYxNiA4LjA3MTA3IDE1LjA3MTFDOC40NjE1OSAxNC42ODA1IDguNDYxNTkgMTQuMDQ3NCA4LjA3MTA3IDEzLjY1NjlMMi40MTQyMSA4TDguMDcxMDcgMi4zNDMxNUM4LjQ2MTU5IDEuOTUyNjIgOC40NjE1OSAxLjMxOTQ2IDguMDcxMDcgMC45Mjg5MzJDNy42ODA1NCAwLjUzODQwOCA3LjA0NzM4IDAuNTM4NDA4IDYuNjU2ODUgMC45Mjg5MzJMMC4yOTI4OTMgNy4yOTI4OVpNMjEgOUMyMS41NTIzIDkgMjIgOC41NTIyOCAyMiA4QzIyIDcuNDQ3NzIgMjEuNTUyMyA3IDIxIDdWOVpNMSA5SDIxVjdIMVY5WiIgZmlsbD0iIzZCOEVGQSIvPg0KPC9zdmc+DQo="},297:function(t,e,r){"use strict";r.r(e);var n={props:{status:String,classes:String},computed:{},methods:{color:function(t){return"approved"===t?"text-action-success bg-action-success-light":"pending"===t?"text-action-warning bg-action-warning-light":"denied"===t?"text-action-danger bg-action-danger-light":""}}},l=r(17),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"flex items-center justify-center font-normal rounded-md ",class:[t.color(t.status),t.classes]},[t._v("\n    "+t._s(t.status)+"\n")])}),[],!1,null,null,null);e.default=component.exports},362:function(t,e,r){"use strict";r.r(e);r(45),r(26),r(28),r(55),r(27),r(56);var n=r(29),l=(r(57),r(287)),c=r(297),o=r(288),d=r(54);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var x={components:{Table:l.default,Status:c.default,BreadCrumb:o.default},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(d.d)({governmentOwners:function(t){return t.owner.governmentOwners}})),methods:{getFullName:function(t){return"".concat(t.representativeTitle?t.representativeTitle:""," ").concat(t.representativeFirstname," ").concat(t.representativeLastname," ").concat(t.representativeOtherName?t.representativeOtherName:"")}},data:function(){return{table_head_data:["Unique Id #","Agency Name","City","Verification Status"]}}},v=r(17),component=Object(v.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("BreadCrumb",{attrs:{title:"Owner Manager"}}),t._v(" "),r("div",{staticClass:"\n      pb-8\n      grid grid-cols-1\n      gap-y-10\n      max-w-lg-screen\n      mx-auto\n      xl:px-32\n      px-10\n      py-10\n      2xl:px-0\n      h-full\n    "},[r("Table",{attrs:{classes:"rounded-md",head_data:t.table_head_data},scopedSlots:t._u([{key:"head",fn:function(){return[r("TableFilter")]},proxy:!0}])},[t._v(" "),t._l(t.governmentOwners,(function(e){return r("tr",{staticClass:"relative"},[r("td",{staticClass:"text-left py-4 px-5"}),t._v(" "),r("td",{staticClass:"text-left py-4 px-5"},[t._v("\n          "+t._s(t.getFullName(e))+"\n        ")]),t._v(" "),r("td",{staticClass:"text-left py-4 px-5"},[r("a",{staticClass:"hover:text-blue-500",attrs:{href:"tel:622322662"}},[t._v(t._s(e.address.city))])]),t._v(" "),r("td",{staticClass:"text-left py-4 px-5"},[r("Status",{attrs:{classes:"w-24 h-8 text-xs",status:"pending"}})],1),t._v(" "),r("nuxt-link",{staticClass:"absolute inset-0 ",attrs:{to:"/owner-manager/"+e.type+"/"+e.id}})],1)}))],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BreadCrumb:r(288).default,TableFilter:r(289).default,Status:r(297).default,Table:r(287).default})}}]);