import{b as g,L as w,a as j}from"./main-e24c86ad.js";import{P as L}from"./page-header-c6b63424.js";import{a as h}from"./avatar-1-15b743f1.js";import{a as f}from"./avatar-2-22bc0be9.js";import{a as k}from"./avatar-5-107f5df2.js";import{a as V}from"./avatar-6-c6f5abaf.js";import{a as b,b as x}from"./avatar-8-f7755bc3.js";import{_ as z,e as U,w as P,r as u,o as a,d as _,a as s,c as o,f as l,F as n,t as d,n as v}from"../js/app2.js";import"./logo-light-deb27e23.js";import"./logo-9faa3827.js";const B={series:[{name:"Complete Tasks",type:"column",data:[23,11,22,27,13,22,52,21,44,22,30]},{name:"All Tasks",type:"line",data:[23,11,34,27,17,22,62,32,44,22,39]}],chartOptions:{chart:{stacked:!1,toolbar:{show:!1}},dataLabels:{enabled:!1},stroke:{width:2,curve:"smooth"},plotOptions:{bar:{columnWidth:"20%",endingShape:"rounded"}},colors:["#556ee6","#34c38f"],fill:{gradient:{inverseColors:!1,shade:"light",type:"vertical",opacityFrom:.85,opacityTo:.55,stops:[0,100,100,100]}},labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov"],markers:{size:0},yaxis:{min:0}}},p=[{index:1,taskType:"upcoming",name:"Create a Skote Dashboard UI",images:[f,h],status:"Waiting",checked:!1},{index:2,taskType:"upcoming",name:"Create a New Landing UI",images:[g,k],status:"Approved",checked:!0},{index:3,taskType:"upcoming",name:"Create a Skote Logo",images:[h],status:"Waiting",checked:!1},{index:4,taskType:"inprogress",name:"Brand logo design",images:[b],status:"Complete",checked:!0},{index:5,taskType:"inprogress",name:"Create a Blog Template UI",images:[x,h],status:"Pending",checked:!1},{index:6,taskType:"completed",name:"Redesign - Landing page",images:[V],status:"Complete",checked:!1},{index:7,taskType:"completed",name:"Multipurpose Landing",images:[b],status:"Complete",checked:!0},{index:8,taskType:"completed",name:"Create a Blog Template UI",images:[g,f],status:"Complete",checked:!1}],A={components:{Layout:w,PageHeader:L},data(){return{avatar1:h,avatar2:f,avatar3:j,avatar4:g,avatar5:k,avatar7:b,avatar8:x,tasksChart:B,inprogressTasks:"",upcomingTasks:"",completedTasks:"",title:"Task List",items:[{text:"Tasks",href:"/"},{text:"Task List",active:!0}],taskList:{name:""},myFiles:[],selected:"",selected2:"",submitted:!1,showModal:!1}},mounted(){this.isMountData()},methods:{isMountData(){this.tasks=p,this.inprogressTasks=p.filter(c=>c.taskType==="inprogress"),this.upcomingTasks=p.filter(c=>c.taskType==="upcoming"),this.completedTasks=p.filter(c=>c.taskType==="completed")}}},I={class:"row"},M={class:"col-lg-8"},W={class:"card"},D={class:"card-body"},F=s("div",{class:"d-flex align-items-start"},[s("h4",{class:"card-title mb-4"},"Upcoming")],-1),S={class:"table-responsive mb-0"},N={class:"table table-nowrap align-middle mb-0"},O={style:{width:"40px"}},H={class:"text-truncate font-size-14 m-0"},J={href:"javascript: void(0);",class:"text-dark"},R={class:"avatar-group"},E={href:"javascript: void(0);",class:"d-inline-block"},q=["src"],G={class:"text-center"},K={class:"card"},Q={class:"card-body"},X=s("div",{class:"d-flex align-items-start"},[s("h4",{class:"card-title mb-4"},"In Progress")],-1),Y={class:"table-responsive mb-0"},Z={class:"table table-nowrap table-centered"},$={style:{width:"40px"}},ss={class:"text-truncate font-size-14 m-0"},ts={href:"javascript: void(0);",class:"text-dark"},es={class:"avatar-group"},as={href:"javascript: void(0);",class:"d-inline-block"},os=["src"],is={class:"text-center"},cs={class:"card"},ls={class:"card-body"},ns=s("div",{class:"d-flex align-items-start"},[s("h4",{class:"card-title mb-4"},"Completed")],-1),ds={class:"table-responsive mb-0"},rs={class:"table table-nowrap table-centered"},_s={style:{width:"40px"}},us={class:"text-truncate font-size-14 m-0"},ps={href:"javascript: void(0);",class:"text-dark"},hs={class:"avatar-group"},ms={href:"javascript: void(0);",class:"d-inline-block"},vs=["src"],gs={class:"text-center"},fs={class:"col-lg-4"},bs={class:"card"},ks={class:"card-body"},xs=s("h4",{class:"card-title mb-3"},"Tasks",-1),ys={class:"card"},Ts={class:"card-body"},Cs=s("h4",{class:"card-title mb-4"},"Recent Tasks",-1),ws={class:"table-responsive"},js={class:"table table-nowrap align-middle mb-0"},Ls=s("td",null,[s("h5",{class:"text-truncate font-size-14 m-0"},[s("a",{href:"#",class:"text-dark"},"Brand logo design")])],-1),Vs={class:"avatar-group"},zs={class:"avatar-group-item"},Us={href:"javascript: void(0);",class:"d-inline-block"},Ps=["src"],Bs={class:"avatar-group-item"},As={href:"javascript: void(0);",class:"d-inline-block"},Is=["src"],Ms=s("td",null,[s("h5",{class:"text-truncate font-size-14 m-0"},[s("a",{href:"#",class:"text-dark"},"Create a Blog Template UI")])],-1),Ws={class:"avatar-group"},Ds={class:"avatar-group-item"},Fs={href:"javascript: void(0);",class:"d-inline-block"},Ss=["src"],Ns={class:"avatar-group-item"},Os={href:"javascript: void(0);",class:"d-inline-block"},Hs=["src"],Js={class:"avatar-group-item"},Rs={href:"javascript: void(0);",class:"d-inline-block"},Es=["src"],qs=s("div",{class:"avatar-group-item"},[s("a",{href:"javascript: void(0);",class:"d-inline-block"},[s("div",{class:"avatar-xs"},[s("span",{class:"avatar-title rounded-circle bg-info text-white font-size-16"}," D ")])])],-1),Gs=s("td",null,[s("h5",{class:"text-truncate font-size-14 m-0"},[s("a",{href:"#",class:"text-dark"},"Redesign - Landing page")])],-1),Ks={class:"avatar-group"},Qs={class:"avatar-group-item"},Xs={href:"javascript: void(0);",class:"d-inline-block"},Ys=["src"],Zs={class:"avatar-group-item"},$s={href:"javascript: void(0);",class:"d-inline-block"},st=["src"],tt=s("div",{class:"avatar-group-item"},[s("a",{href:"javascript: void(0);",class:"d-inline-block"},[s("div",{class:"avatar-xs"},[s("span",{class:"avatar-title rounded-circle bg-danger text-white font-size-16"}," P ")])])],-1);function et(c,at,ot,it,e,ct){const y=u("PageHeader"),m=u("b-form-checkbox"),T=u("apexchart"),C=u("Layout");return a(),U(C,null,{default:P(()=>[_(y,{title:e.title,items:e.items},null,8,["title","items"]),s("div",I,[s("div",M,[s("div",W,[s("div",D,[F,s("div",S,[s("table",N,[s("tbody",null,[(a(!0),o(n,null,l(e.upcomingTasks,t=>(a(),o("tr",{key:t.index},[s("td",O,[_(m,{class:"form-check",modelValue:t.checked,"onUpdate:modelValue":i=>t.checked=i},null,8,["modelValue","onUpdate:modelValue"])]),s("td",null,[s("h5",H,[s("a",J,d(t.name),1)])]),s("td",null,[s("div",R,[(a(!0),o(n,null,l(t.images,(i,r)=>(a(),o("div",{class:"avatar-group-item",key:r},[s("a",E,[s("img",{src:`${i}`,alt:"",class:"rounded-circle avatar-xs"},null,8,q)])]))),128))])]),s("td",null,[s("div",G,[s("span",{class:v(["badge rounded-pill font-size-11",{"badge-soft-success":t.status==="Complete","badge-soft-warning":t.status==="Pending","badge-soft-primary":t.status==="Approved","badge-soft-secondary":t.status==="Waiting"}])},d(t.status),3)])])]))),128))])])])])]),s("div",K,[s("div",Q,[X,s("div",Y,[s("table",Z,[s("tbody",null,[(a(!0),o(n,null,l(e.inprogressTasks,t=>(a(),o("tr",{key:t.index},[s("td",$,[_(m,{class:"form-check",modelValue:t.checked,"onUpdate:modelValue":i=>t.checked=i},null,8,["modelValue","onUpdate:modelValue"])]),s("td",null,[s("h5",ss,[s("a",ts,d(t.name),1)])]),s("td",null,[s("div",es,[(a(!0),o(n,null,l(t.images,(i,r)=>(a(),o("div",{class:"avatar-group-item",key:r},[s("a",as,[s("img",{src:`${i}`,alt:"",class:"rounded-circle avatar-xs"},null,8,os)])]))),128))])]),s("td",null,[s("div",is,[s("span",{class:v(["badge rounded-pill font-size-11",{"badge-soft-success":t.status==="Complete","badge-soft-warning":t.status==="Pending","badge-soft-primary":t.status==="Approved","badge-soft-secondary":t.status==="Waiting"}])},d(t.status),3)])])]))),128))])])])])]),s("div",cs,[s("div",ls,[ns,s("div",ds,[s("table",rs,[s("tbody",null,[(a(!0),o(n,null,l(e.completedTasks,t=>(a(),o("tr",{key:t.index},[s("td",_s,[_(m,{class:"form-check",modelValue:t.checked,"onUpdate:modelValue":i=>t.checked=i},null,8,["modelValue","onUpdate:modelValue"])]),s("td",null,[s("h5",us,[s("a",ps,d(t.name),1)])]),s("td",null,[s("div",hs,[(a(!0),o(n,null,l(t.images,(i,r)=>(a(),o("div",{class:"avatar-group-item",key:r},[s("a",ms,[s("img",{src:`${i}`,alt:"",class:"rounded-circle avatar-xs"},null,8,vs)])]))),128))])]),s("td",null,[s("div",gs,[s("span",{class:v(["badge rounded-pill font-size-11",{"badge-soft-success":t.status==="Complete","badge-soft-warning":t.status==="Pending","badge-soft-primary":t.status==="Approved","badge-soft-secondary":t.status==="Waiting"}])},d(t.status),3)])])]))),128))])])])])])]),s("div",fs,[s("div",bs,[s("div",ks,[xs,_(T,{class:"apex-charts",type:"line",height:"280",series:e.tasksChart.series,options:e.tasksChart.chartOptions},null,8,["series","options"])])]),s("div",ys,[s("div",Ts,[Cs,s("div",ws,[s("table",js,[s("tbody",null,[s("tr",null,[Ls,s("td",null,[s("div",Vs,[s("div",zs,[s("a",Us,[s("img",{src:e.avatar4,alt:"",class:"rounded-circle avatar-xs"},null,8,Ps)])]),s("div",Bs,[s("a",As,[s("img",{src:e.avatar5,alt:"",class:"rounded-circle avatar-xs"},null,8,Is)])])])])]),s("tr",null,[Ms,s("td",null,[s("div",Ws,[s("div",Ds,[s("a",Fs,[s("img",{src:e.avatar1,alt:"",class:"rounded-circle avatar-xs"},null,8,Ss)])]),s("div",Ns,[s("a",Os,[s("img",{src:e.avatar2,alt:"",class:"rounded-circle avatar-xs"},null,8,Hs)])]),s("div",Js,[s("a",Rs,[s("img",{src:e.avatar3,alt:"",class:"rounded-circle avatar-xs"},null,8,Es)])]),qs])])]),s("tr",null,[Gs,s("td",null,[s("div",Ks,[s("div",Qs,[s("a",Xs,[s("img",{src:e.avatar8,alt:"",class:"rounded-circle avatar-xs"},null,8,Ys)])]),s("div",Zs,[s("a",$s,[s("img",{src:e.avatar7,alt:"",class:"rounded-circle avatar-xs"},null,8,st)])]),tt])])])])])])])])])])]),_:1})}const gt=z(A,[["render",et]]);export{gt as default};
