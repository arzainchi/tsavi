import{L as p}from"./main-e24c86ad.js";import{P as h}from"./page-header-c6b63424.js";import{u as m}from"./data-user-07bfcf1c.js";import{_ as u,e as g,w as v,r as l,z as f,o as t,d as b,a as s,c as o,f as x,F as k,t as a,A as r,u as n}from"../js/app2.js";import"./logo-light-deb27e23.js";import"./logo-9faa3827.js";import"./avatar-1-15b743f1.js";import"./avatar-2-22bc0be9.js";import"./avatar-5-107f5df2.js";const y={components:{Layout:p,PageHeader:h},data(){return{userGridData:m,title:"User List",items:[{text:"Contacts",href:"/"},{text:"User List",active:!0}]}}},w={class:"row"},L={class:"col-lg-12"},j={class:"card"},z={class:"card-body"},D={class:"table-responsive"},P={class:"table align-middle table-nowrap table-hover dt-responsive nowrap w-100",id:"userList-table"},B=s("thead",{class:"table-light"},[s("tr",null,[s("th",{scope:"col",style:{width:"40px"}},"#"),s("th",{scope:"col"},"Name"),s("th",{scope:"col"},"Email"),s("th",{scope:"col"},"Tags"),s("th",{scope:"col"},"Projects"),s("th",{scope:"col",style:{width:"200px"}},"Action")])],-1),C={key:0,class:"avatar-xs"},N={class:"avatar-title rounded-circle"},G={key:1},H=["src"],V={class:"font-size-14 mb-1"},A={href:"#",class:"text-dark"},E={class:"text-muted mb-0"},F={href:"javascript: void(0);",class:"badge badge-soft-primary font-size-11 m-1"},U={href:"javascript: void(0);",class:"badge badge-soft-primary font-size-11 m-1"},$={href:"javascript: void(0);",class:"badge badge-soft-primary font-size-11 m-1"},q=s("td",null,"125",-1),M={class:"list-inline font-size-20 contact-links mb-0"},S={class:"list-inline-item px-2"},T={title:"Message"},I=s("i",{class:"bx bx-message-square-dots"},null,-1),J=[I],K={class:"list-inline-item px-2"},O={title:"Profile"},Q=s("i",{class:"bx bx-user-circle"},null,-1),R=[Q],W=s("div",{class:"row"},[s("div",{class:"col-lg-12"},[s("ul",{class:"pagination pagination-rounded justify-content-center mt-4"},[s("li",{class:"page-item disabled"},[s("a",{href:"#",class:"page-link"},[s("i",{class:"mdi mdi-chevron-left"})])]),s("li",{class:"page-item"},[s("a",{href:"#",class:"page-link"},"1")]),s("li",{class:"page-item active"},[s("a",{href:"#",class:"page-link"},"2")]),s("li",{class:"page-item"},[s("a",{href:"#",class:"page-link"},"3")]),s("li",{class:"page-item"},[s("a",{href:"#",class:"page-link"},"4")]),s("li",{class:"page-item"},[s("a",{href:"#",class:"page-link"},"5")]),s("li",{class:"page-item"},[s("a",{href:"#",class:"page-link"},[s("i",{class:"mdi mdi-chevron-right"})])])])])],-1);function X(Y,Z,ss,es,i,ts){const d=l("PageHeader"),_=l("Layout"),c=f("b-tooltip");return t(),g(_,null,{default:v(()=>[b(d,{title:i.title,items:i.items},null,8,["title","items"]),s("div",w,[s("div",L,[s("div",j,[s("div",z,[s("div",D,[s("table",P,[B,s("tbody",null,[(t(!0),o(k,null,x(i.userGridData,e=>(t(),o("tr",{key:e.id},[s("td",null,[e.font?(t(),o("div",C,[s("span",N,a(e.font),1)])):r("",!0),e.image?(t(),o("div",G,[s("img",{class:"rounded-circle avatar-xs",src:`${e.image}`,alt:""},null,8,H)])):r("",!0)]),s("td",null,[s("h5",V,[s("a",A,a(e.name),1)]),s("p",E,a(e.text),1)]),s("td",null,a(e.email),1),s("td",null,[s("div",null,[s("a",F,a(e.projects[0]),1),s("a",U,a(e.projects[1]),1),s("a",$,a(e.projects[2]),1)])]),q,s("td",null,[s("ul",M,[s("li",S,[n((t(),o("a",T,J)),[[c,void 0,void 0,{hover:!0}]])]),s("li",K,[n((t(),o("a",O,R)),[[c,void 0,void 0,{hover:!0}]])])])])]))),128))])])]),W])])])])]),_:1})}const ps=u(y,[["render",X]]);export{ps as default};