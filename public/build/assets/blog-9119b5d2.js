import{L as P,s as C}from"./main-e24c86ad.js";import{P as B}from"./page-header-c6b63424.js";import{i as b}from"./img-2-c16a8ff8.js";import{i as g}from"./img-6-9611509c.js";import{i as w}from"./img-1-9be92e7d.js";import{a as T}from"./avatar-1-15b743f1.js";import{a as N}from"./avatar-2-22bc0be9.js";import{_ as j,e as L,w as e,r as n,o as m,d as a,a as s,n as h,g as t,c as _,f as y,F as z,t as v}from"../js/app2.js";import"./logo-light-deb27e23.js";import"./logo-9faa3827.js";const M={components:{Layout:P,PageHeader:B,simplebar:C},data(){return{title:"Blog",avatar1:T,avatar2:N,sm1:w,sm6:g,sm2:b,items:[{text:"Dashboards",href:"javascript:void(0)"},{text:"Blog",active:!0}],chartData:{series:[{name:"Current",data:[18,21,45,36,65,47,51,32,40,28,31,26]},{name:"Previous",data:[30,11,22,18,32,23,58,45,30,36,15,34]}],chartoptions:{chart:{height:350,type:"area",toolbar:{show:!1}},colors:["#556ee6","#f1b44c"],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},fill:{type:"gradient",gradient:{shadeIntensity:1,inverseColors:!1,opacityFrom:.45,opacityTo:.05,stops:[20,100,100,100]}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},markers:{size:3,strokeWidth:3,hover:{size:4,sizeOffset:2}},legend:{position:"top",horizontalAlign:"right"}}},postData:[{image:b,title:"Beautiful Day with Friends",date:"10 Nov, 2020"},{image:g,title:"Drawing a sketch",date:"02 Nov, 2020"},{image:b,title:"Project discussion with team",date:"24 Oct, 2020"},{image:w,title:"Riding bike on road",date:"20 Oct, 2020"}],selection:"all"}},methods:{updateData:function(p){switch(this.selection=p,p){case"one_month":this.chartData.series=[{name:"Current",data:[12,22,38,42,32,40,51,36,51,29,38,36]},{name:"Previous",data:[22,31,36,26,47,56,42,64,61,52,42,31]}];break;case"six_months":this.chartData.series=[{name:"Current",data:[31,40,28,51,42,40,51,36,40,39,31,36]},{name:"Previous",data:[11,32,45,32,34,22,51,60,51,52,40,31]}];break;case"one_year":this.chartData.series=[{name:"Current",data:[28,22,38,42,32,40,51,36,51,29,38,36]},{name:"Previous",data:[22,31,36,26,47,56,42,64,61,52,42,31]}];break;case"all":this.chartData.series=[{name:"Current",data:[18,21,45,36,65,47,51,32,40,28,31,26]},{name:"Previous",data:[30,11,22,18,32,23,58,45,30,36,15,34]}];break}}}},R={class:"row"},O={class:"col-xl-8"},q=s("div",{class:"row"},[s("div",{class:"col-lg-4"},[s("div",{class:"card mini-stats-wid"},[s("div",{class:"card-body"},[s("div",{class:"d-flex flex-wrap"},[s("div",{class:"me-3"},[s("p",{class:"text-muted mb-2"},"Total Post"),s("h5",{class:"mb-0"},"120")]),s("div",{class:"avatar-sm ms-auto"},[s("div",{class:"avatar-title bg-light rounded-circle text-primary font-size-20"},[s("i",{class:"bx bxs-book-bookmark"})])])])])])]),s("div",{class:"col-lg-4"},[s("div",{class:"card blog-stats-wid"},[s("div",{class:"card-body"},[s("div",{class:"d-flex flex-wrap"},[s("div",{class:"me-3"},[s("p",{class:"text-muted mb-2"},"Pages"),s("h5",{class:"mb-0"},"86")]),s("div",{class:"avatar-sm ms-auto"},[s("div",{class:"avatar-title bg-light rounded-circle text-primary font-size-20"},[s("i",{class:"bx bxs-note"})])])])])])]),s("div",{class:"col-lg-4"},[s("div",{class:"card blog-stats-wid"},[s("div",{class:"card-body"},[s("div",{class:"d-flex flex-wrap"},[s("div",{class:"me-3"},[s("p",{class:"text-muted mb-2"},"Comments"),s("h5",{class:"mb-0"},"4,235")]),s("div",{class:"avatar-sm ms-auto"},[s("div",{class:"avatar-title bg-light rounded-circle text-primary font-size-20"},[s("i",{class:"bx bxs-message-square-dots"})])])])])])])],-1),F={class:"card"},V={class:"card-body"},I={class:"d-flex flex-wrap"},H=s("h5",{class:"card-title me-2"},"Visitors",-1),E={class:"ms-auto"},J={class:"toolbar button-items text-end"},U=s("div",{class:"row text-center"},[s("div",{class:"col-lg-4"},[s("div",{class:"mt-4"},[s("p",{class:"text-muted mb-1"},"Today"),s("h5",null,"1024")])]),s("div",{class:"col-lg-4"},[s("div",{class:"mt-4"},[s("p",{class:"text-muted mb-1"},"This Month"),s("h5",null,[t(" 12356 "),s("span",{class:"text-success font-size-13"},[t("0.2 % "),s("i",{class:"mdi mdi-arrow-up ms-1"})])])])]),s("div",{class:"col-lg-4"},[s("div",{class:"mt-4"},[s("p",{class:"text-muted mb-1"},"This Year"),s("h5",null,[t(" 102354 "),s("span",{class:"text-success font-size-13"},[t("0.1 % "),s("i",{class:"mdi mdi-arrow-up ms-1"})])])])])],-1),W=s("hr",{class:"mb-4"},null,-1),Y={class:"col-xl-4"},K={class:"card"},X={class:"card-body"},G={class:"d-flex"},Q={class:"me-3"},Z=["src"],$={class:"flex-grow-1"},ss={class:"d-flex"},ts=s("div",{class:"flex-grow-1"},[s("div",{class:"text-muted"},[s("h5",{class:"mb-1"},"Henry wells"),s("p",{class:"mb-0"},"UI / UX Designer")])],-1),es=s("i",{class:"bx bxs-cog align-middle me-1"},null,-1),as=s("a",{class:"dropdown-item",href:"#"},"Action",-1),ls=s("a",{class:"dropdown-item",href:"#"},"Another action",-1),is=s("a",{class:"dropdown-item",href:"#"},"Something else",-1),os=s("hr",null,null,-1),ds=s("div",{class:"row"},[s("div",{class:"col-4"},[s("div",null,[s("p",{class:"text-muted text-truncate mb-2"},"Total Post"),s("h5",{class:"mb-0"},"32")])]),s("div",{class:"col-4"},[s("div",null,[s("p",{class:"text-muted text-truncate mb-2"},"Subscribes"),s("h5",{class:"mb-0"},"10k")])])],-1),cs={class:"card"},ns={class:"card-body"},rs={class:"d-flex flex-wrap"},ms=s("h5",{class:"card-title mb-3 me-2"},"Subscribes",-1),us=s("i",{class:"mdi mdi-dots-horizontal"},null,-1),hs=s("div",{class:"d-flex flex-wrap"},[s("div",null,[s("p",{class:"text-muted mb-1"},"Total Subscribe"),s("h4",{class:"mb-3"},"10,512"),s("p",{class:"text-success mb-0"},[s("span",null,[t("0.6 % "),s("i",{class:"mdi mdi-arrow-top-right ms-1"})])])]),s("div",{class:"ms-auto align-self-end"},[s("i",{class:"bx bx-group display-4 text-light"})])],-1),_s=s("div",{class:"card"},[s("div",{class:"card-body p-4"},[s("div",{class:"text-center"},[s("div",{class:"avatar-md mx-auto mb-4"},[s("div",{class:"avatar-title bg-light rounded-circle text-primary h1"},[s("i",{class:"mdi mdi-email-open"})])]),s("div",{class:"row justify-content-center"},[s("div",{class:"col-xl-10"},[s("h4",{class:"text-primary"},"Subscribe !"),s("p",{class:"text-muted font-size-14 mb-4"}," Subscribe our newletter and get notification to stay update. "),s("div",{class:"input-group bg-light rounded"},[s("input",{type:"email",class:"form-control bg-transparent border-0",placeholder:"Enter Email address","aria-label":"Recipient's username","aria-describedby":"button-addon2"}),s("div",{class:"input-group-append"},[s("button",{class:"btn btn-primary rounded",type:"button",id:"button-addon2"},[s("i",{class:"bx bxs-paper-plane"})])])])])])])])],-1),vs={class:"row"},ps={class:"col-xl-4 col-lg-6"},fs={class:"card"},bs={class:"card-header bg-transparent border-bottom"},xs={class:"flex-wrap blog-card"},gs=s("h5",{class:"card-title mt-2"},"Posts",-1),ws={class:"card-body mb-3 mt-2"},ys={class:"list-group list-group-flush"},zs={class:"d-flex"},ks={class:"me-3"},As=["src"],Ss={class:"align-self-center overflow-hidden me-auto"},Ds={class:"font-size-14 text-truncate"},Ps={href:"#",class:"text-dark"},Cs={class:"text-muted mb-0"},Bs=s("i",{class:"mdi mdi-dots-horizontal"},null,-1),Ts={class:"card-body pb-1"},Ns={"data-simplebar":"",style:{"max-height":"295px"}},js={class:"list-group list-group-flush"},Ls={class:"d-flex"},Ms={class:"me-3"},Rs=["src"],Os={class:"align-self-center overflow-hidden me-auto"},qs={class:"font-size-14 text-truncate"},Fs={href:"#",class:"text-dark"},Vs={class:"text-muted mb-0"},Is=s("i",{class:"mdi mdi-dots-horizontal"},null,-1),Hs={class:"col-xl-4 col-lg-6"},Es={class:"card"},Js={class:"card-body"},Us={class:"d-flex flex-wrap"},Ws=s("div",{class:"me-2"},[s("h5",{class:"card-title mb-3"},"Comments")],-1),Ys=s("i",{class:"mdi mdi-dots-horizontal"},null,-1),Ks={class:"list-group list-group-flush"},Xs=s("li",{class:"list-group-item py-3"},[s("div",{class:"d-flex"},[s("div",{class:"avatar-xs me-3"},[s("div",{class:"avatar-title rounded-circle bg-light text-primary"},[s("i",{class:"bx bxs-user"})])]),s("div",{class:"flex-grow-1"},[s("h5",{class:"font-size-14 mb-1"},[t(" Delores Williams "),s("small",{class:"text-muted float-end"},"1 hr Ago")]),s("p",{class:"text-muted"}," If several languages coalesce, the grammar of the resulting of the individual "),s("div",null,[s("a",{href:"javascript: void(0);",class:"text-success"},[s("i",{class:"mdi mdi-reply me-1"}),t(" Reply")])])])])],-1),Gs={class:"list-group-item py-3"},Qs={class:"d-flex"},Zs={class:"avatar-xs me-3"},$s=["src"],st=s("div",{class:"flex-grow-1"},[s("h5",{class:"font-size-14 mb-1"},[t(" Clarence Smith "),s("small",{class:"text-muted float-end"},"2 hrs Ago")]),s("p",{class:"text-muted"}," Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet "),s("div",null,[s("a",{href:"javascript: void(0);",class:"text-success"},[s("i",{class:"mdi mdi-reply"}),t(" Reply")])]),s("div",{class:"d-flex pt-3"},[s("div",{class:"avatar-xs me-3"},[s("div",{class:"avatar-title rounded-circle bg-light text-primary"},[s("i",{class:"bx bxs-user"})])]),s("div",{class:"flex-grow-1"},[s("h5",{class:"font-size-14 mb-1"},[t(" Silvia Martinez "),s("small",{class:"text-muted float-end"},"2 hrs Ago")]),s("p",{class:"text-muted"}," To take a trivial example, which of us ever undertakes "),s("div",null,[s("a",{href:"javascript: void(0);",class:"text-success"},[s("i",{class:"mdi mdi-reply"}),t(" Reply")])])])])],-1),tt=s("li",{class:"list-group-item py-3"},[s("div",{class:"d-flex"},[s("div",{class:"avatar-xs me-3"},[s("div",{class:"avatar-title rounded-circle bg-light text-primary"},[s("i",{class:"bx bxs-user"})])]),s("div",{class:"flex-grow-1"},[s("h5",{class:"font-size-14 mb-1"},[t(" Keith McCoy "),s("small",{class:"text-muted float-end"},"12 Aug")]),s("p",{class:"text-muted"}," Donec posuere vulputate arcu. phasellus accumsan cursus velit "),s("div",null,[s("a",{href:"javascript: void(0);",class:"text-success"},[s("i",{class:"mdi mdi-reply"}),t(" Reply")])])])])],-1),et={class:"col-xl-4"},at={class:"card"},lt={class:"card-body"},it={class:"d-flex flex-wrap"},ot=s("div",{class:"me-2"},[s("h5",{class:"card-title mb-3"},"Top Visitors")],-1),dt=s("i",{class:"mdi mdi-dots-horizontal"},null,-1),ct=s("div",{class:"row text-center"},[s("div",{class:"col-6"},[s("div",{class:"mt-3"},[s("p",{class:"text-muted mb-1"},"Today"),s("h5",null,"1024")])]),s("div",{class:"col-6"},[s("div",{class:"mt-3"},[s("p",{class:"text-muted mb-1"},"This Month"),s("h5",null,[t(" 12356 "),s("span",{class:"text-success font-size-13"},[t("0.2 % "),s("i",{class:"mdi mdi-arrow-up ms-1"})])])])])],-1),nt=s("hr",null,null,-1),rt=s("div",null,[s("ul",{class:"list-group list-group-flush"},[s("li",{class:"list-group-item"},[s("div",{class:"py-2"},[s("h5",{class:"font-size-14"},[t(" California "),s("span",{class:"float-end"},"78%")]),s("div",{class:"progress animated-progess progress-sm"},[s("div",{class:"progress-bar",role:"progressbar",style:{width:"78%"},"aria-valuenow":"78","aria-valuemin":"0","aria-valuemax":"100"})])])]),s("li",{class:"list-group-item"},[s("div",{class:"py-2"},[s("h5",{class:"font-size-14"},[t(" Nevada "),s("span",{class:"float-end"},"69%")]),s("div",{class:"progress animated-progess progress-sm"},[s("div",{class:"progress-bar bg-warning",role:"progressbar",style:{width:"69%"},"aria-valuenow":"69","aria-valuemin":"0","aria-valuemax":"100"})])])]),s("li",{class:"list-group-item"},[s("div",{class:"py-2"},[s("h5",{class:"font-size-14"},[t(" Texas "),s("span",{class:"float-end"},"61%")]),s("div",{class:"progress animated-progess progress-sm"},[s("div",{class:"progress-bar bg-success",role:"progressbar",style:{width:"61%"},"aria-valuenow":"61","aria-valuemin":"0","aria-valuemax":"100"})])])])])],-1),mt={class:"row"},ut={class:"col-xl-4"},ht={class:"card"},_t={class:"card-body"},vt={class:"d-flex"},pt=s("div",{class:"me-2"},[s("h5",{class:"card-title mb-4"},"Activity")],-1),ft=s("i",{class:"mdi mdi-dots-horizontal"},null,-1),bt=s("ul",{class:"verti-timeline list-unstyled"},[s("li",{class:"event-list active"},[s("div",{class:"event-timeline-dot"},[s("i",{class:"bx bxs-right-arrow-circle font-size-18 bx-fade-right"})]),s("div",{class:"d-flex"},[s("div",{class:"me-3"},[s("h5",{class:"font-size-14"},[t(" 10 Nov "),s("i",{class:"bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"})])]),s("div",{class:"flex-grow-1"},[s("div",null,[t(" Posted "),s("span",{class:"fw-semibold"},"Beautiful Day with Friends"),t(" blog... "),s("a",{href:"#"},"View")])])])]),s("li",{class:"event-list"},[s("div",{class:"event-timeline-dot"},[s("i",{class:"bx bx-right-arrow-circle font-size-18"})]),s("div",{class:"d-flex"},[s("div",{class:"me-3"},[s("h5",{class:"font-size-14"},[t(" 08 Nov "),s("i",{class:"bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"})])]),s("div",{class:"flex-grow-1"},[s("div",null,[t(" If several languages coalesce, the grammar of the resulting... "),s("a",{href:"#"},"Read")])])])]),s("li",{class:"event-list"},[s("div",{class:"event-timeline-dot"},[s("i",{class:"bx bx-right-arrow-circle font-size-18"})]),s("div",{class:"d-flex"},[s("div",{class:"me-3"},[s("h5",{class:"font-size-14"},[t(" 02 Nov "),s("i",{class:"bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"})])]),s("div",{class:"flex-grow-1"},[s("div",null,[t(" Create "),s("span",{class:"fw-semibold"},"Drawing a sketch blog")])])])]),s("li",{class:"event-list"},[s("div",{class:"event-timeline-dot"},[s("i",{class:"bx bx-right-arrow-circle font-size-18"})]),s("div",{class:"d-flex"},[s("div",{class:"me-3"},[s("h5",{class:"font-size-14"},[t(" 24 Oct "),s("i",{class:"bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"})])]),s("div",{class:"flex-grow-1"},[s("div",null," In enim justo, rhoncus ut, imperdiet a venenatis vitae ")])])]),s("li",{class:"event-list"},[s("div",{class:"event-timeline-dot"},[s("i",{class:"bx bx-right-arrow-circle font-size-18"})]),s("div",{class:"d-flex"},[s("div",{class:"me-3"},[s("h5",{class:"font-size-14"},[t(" 21 Oct "),s("i",{class:"bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"})])]),s("div",{class:"flex-grow-1"},[s("div",null," Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut ")])])])],-1),xt=s("div",{class:"text-center mt-4"},[s("a",{href:"",class:"btn btn-primary waves-effect waves-light btn-sm"},[t("View More "),s("i",{class:"mdi mdi-arrow-right ms-1"})])],-1),gt={class:"col-xl-8"},wt={class:"card"},yt={class:"card-body"},zt={class:"d-flex"},kt=s("div",{class:"me-2"},[s("h5",{class:"card-title mb-4"},"Popular post")],-1),At=s("i",{class:"mdi mdi-dots-horizontal"},null,-1),St={class:"table-responsive mb-0"},Dt={class:"table table-centered table-nowrap mb-0"},Pt=s("tbody",null,[s("tr",null,[s("th",{scope:"col",colspan:"2"},"Post"),s("th",{scope:"col"},"Likes"),s("th",{scope:"col"},"Comments"),s("th",{scope:"col"},"Action")])],-1),Ct={style:{width:"100px"}},Bt=["src"],Tt=s("td",null,[s("h5",{class:"font-size-13 text-truncate mb-1"},[s("a",{href:"#",class:"text-dark"},"Beautiful Day with Friends")]),s("p",{class:"text-muted mb-0"},"10 Nov, 2020")],-1),Nt=s("td",null,[s("i",{class:"bx bx-like align-middle me-1"}),t(" 125")],-1),jt=s("td",null,[s("i",{class:"bx bx-comment-dots align-middle me-1"}),t(" 68 ")],-1),Lt=s("i",{class:"mdi mdi-dots-horizontal"},null,-1),Mt=["src"],Rt=s("td",null,[s("h5",{class:"font-size-13 text-truncate mb-1"},[s("a",{href:"#",class:"text-dark"},"Drawing a sketch")]),s("p",{class:"text-muted mb-0"},"02 Nov, 2020")],-1),Ot=s("td",null,[s("i",{class:"bx bx-like align-middle me-1"}),t(" 102")],-1),qt=s("td",null,[s("i",{class:"bx bx-comment-dots align-middle me-1"}),t(" 48 ")],-1),Ft=s("i",{class:"mdi mdi-dots-horizontal"},null,-1),Vt=["src"],It=s("td",null,[s("h5",{class:"font-size-13 text-truncate mb-1"},[s("a",{href:"#",class:"text-dark"},"Riding bike on road")]),s("p",{class:"text-muted mb-0"},"24 Oct, 2020")],-1),Ht=s("td",null,[s("i",{class:"bx bx-like align-middle me-1"}),t(" 98")],-1),Et=s("td",null,[s("i",{class:"bx bx-comment-dots align-middle me-1"}),t(" 35 ")],-1),Jt=s("i",{class:"mdi mdi-dots-horizontal"},null,-1),Ut=["src"],Wt=s("td",null,[s("h5",{class:"font-size-13 text-truncate mb-1"},[s("a",{href:"#",class:"text-dark"},"Project discussion with team")]),s("p",{class:"text-muted mb-0"},"15 Oct, 2020")],-1),Yt=s("td",null,[s("i",{class:"bx bx-like align-middle me-1"}),t(" 92")],-1),Kt=s("td",null,[s("i",{class:"bx bx-comment-dots align-middle me-1"}),t(" 22 ")],-1),Xt=s("i",{class:"mdi mdi-dots-horizontal"},null,-1);function Gt(p,r,Qt,Zt,i,u){const k=n("PageHeader"),A=n("apexchart"),d=n("b-dropdown"),l=n("b-dropdown-item"),c=n("b-dropdown-divider"),f=n("simplebar"),x=n("b-tab"),S=n("b-tabs"),D=n("Layout");return m(),L(D,null,{default:e(()=>[a(k,{title:i.title,items:i.items},null,8,["title","items"]),s("div",null,[s("div",R,[s("div",O,[q,s("div",F,[s("div",V,[s("div",I,[H,s("div",E,[s("div",J,[s("button",{type:"button",class:h(["btn btn-light me-1 btn-sm",{active:i.selection==="all"}]),onClick:r[0]||(r[0]=o=>u.updateData("all"))}," ALL ",2),s("button",{type:"button",class:h(["btn btn-light me-1 btn-sm",{active:i.selection==="one_month"}]),onClick:r[1]||(r[1]=o=>u.updateData("one_month"))}," 1M ",2),s("button",{type:"button",class:h(["btn btn-light me-1 btn-sm",{active:i.selection==="six_months"}]),onClick:r[2]||(r[2]=o=>u.updateData("six_months"))}," 6M ",2),s("button",{type:"button",class:h(["btn btn-light btn-sm",{active:i.selection==="one_year"}]),onClick:r[3]||(r[3]=o=>u.updateData("one_year"))}," 1Y ",2)])])]),U,W,a(A,{class:"apex-charts",dir:"ltr",height:"350",width:"1022",series:i.chartData.series,options:i.chartData.chartoptions},null,8,["series","options"])])])]),s("div",Y,[s("div",K,[s("div",X,[s("div",G,[s("div",Q,[s("img",{src:i.avatar1,alt:"",class:"avatar-sm rounded-circle img-thumbnail"},null,8,Z)]),s("div",$,[s("div",ss,[ts,a(d,{"toggle-class":"btn-sm",variant:"light","menu-class":"dropdown-menu-end",right:"",class:"ms-2"},{"button-content":e(()=>[es,t(" Setting ")]),default:e(()=>[as,ls,is]),_:1})]),os,ds])])])]),s("div",cs,[s("div",ns,[s("div",rs,[ms,a(d,{"toggle-class":"text-muted font-size-16 p-0","menu-class":"dropdown-menu-end",variant:"white",right:"",class:"ms-auto"},{"button-content":e(()=>[us]),default:e(()=>[a(l,{href:"#"},{default:e(()=>[t("Action")]),_:1}),a(l,{href:"#"},{default:e(()=>[t("Another action")]),_:1}),a(l,{href:"#"},{default:e(()=>[t("Something else here")]),_:1}),a(c),a(l,{href:"#"},{default:e(()=>[t("Separated link")]),_:1})]),_:1})]),hs])]),_s])]),s("div",vs,[s("div",ps,[s("div",fs,[s("div",bs,[s("div",xs,[gs,a(S,{"nav-class":"nav-tabs-custom card-header-tabs ms-auto","nav-wrapper-class":"nav-item",align:"right"},{default:e(()=>[a(x,{title:"Recent",active:""},{default:e(()=>[s("div",ws,[a(f,{style:{"max-height":"295px"}},{default:e(()=>[s("ul",ys,[(m(!0),_(z,null,y(i.postData,o=>(m(),_("li",{class:"list-group-item py-3",key:o.title},[s("div",zs,[s("div",ks,[s("img",{src:o.image,alt:"",class:"avatar-md h-auto d-block rounded"},null,8,As)]),s("div",Ss,[s("div",null,[s("h5",Ds,[s("a",Ps,v(o.title),1)]),s("p",Cs,v(o.date),1)])]),a(d,{class:"ms-2","toggle-class":"text-muted font-size-14 p-0","menu-class":"dropdown-menu-end",variant:"white",right:""},{"button-content":e(()=>[Bs]),default:e(()=>[a(l,null,{default:e(()=>[t("Action")]),_:1}),a(l,null,{default:e(()=>[t("Another Action")]),_:1}),a(l,null,{default:e(()=>[t("Third Action")]),_:1}),a(l,null,{default:e(()=>[t("Something else here")]),_:1})]),_:1})])]))),128))])]),_:1})])]),_:1}),a(x,{title:"Popular"},{default:e(()=>[s("div",Ts,[s("div",Ns,[s("ul",js,[(m(!0),_(z,null,y(i.postData,o=>(m(),_("li",{class:"list-group-item",key:o.title},[s("div",Ls,[s("div",Ms,[s("img",{src:o.image,alt:"",class:"avatar-md h-auto d-block rounded"},null,8,Rs)]),s("div",Os,[s("div",null,[s("h5",qs,[s("a",Fs,v(o.title),1)]),s("p",Vs,v(o.date),1)])]),a(d,{class:"ms-2","toggle-class":"text-muted font-size-14 p-0",variant:"white",right:"","menu-class":"dropdown-menu-end"},{"button-content":e(()=>[Is]),default:e(()=>[a(l,null,{default:e(()=>[t("Action")]),_:1}),a(l,null,{default:e(()=>[t("Another Action")]),_:1}),a(l,null,{default:e(()=>[t("Third Action")]),_:1}),a(l,null,{default:e(()=>[t("Something else here")]),_:1})]),_:1})])]))),128))])])])]),_:1})]),_:1})])])])]),s("div",Hs,[s("div",Es,[s("div",Js,[s("div",Us,[Ws,a(d,{text:"Button text via Prop",class:"ms-auto",variant:"white","toggle-class":"p-0 font-size-16 text-muted","menu-class":"dropdown-menu-end",right:""},{"button-content":e(()=>[Ys]),default:e(()=>[a(l,{href:"#"},{default:e(()=>[t("Action")]),_:1}),a(l,{href:"#"},{default:e(()=>[t("Another action")]),_:1}),a(l,{href:"#"},{default:e(()=>[t("Something else here")]),_:1}),a(c),a(l,{href:"#"},{default:e(()=>[t("Separated link")]),_:1})]),_:1})]),a(f,{style:{"max-height":"310px"}},{default:e(()=>[s("ul",Ks,[Xs,s("li",Gs,[s("div",Qs,[s("div",Zs,[s("img",{src:i.avatar2,alt:"",class:"img-fluid d-block rounded-circle"},null,8,$s)]),st])]),tt])]),_:1})])])]),s("div",et,[s("div",at,[s("div",lt,[s("div",it,[ot,a(d,{text:"Button text via Prop",class:"ms-auto",variant:"white","toggle-class":"p-0 font-size-16 text-muted","menu-class":"dropdown-menu-end",right:""},{"button-content":e(()=>[dt]),default:e(()=>[a(l,{href:"#"},{default:e(()=>[t("Action")]),_:1}),a(l,{href:"#"},{default:e(()=>[t("Another action")]),_:1}),a(l,{href:"#"},{default:e(()=>[t("Something else here")]),_:1}),a(c),a(l,{href:"#"},{default:e(()=>[t("Separated link")]),_:1})]),_:1})]),ct,nt,rt])])])]),s("div",mt,[s("div",ut,[s("div",ht,[s("div",_t,[s("div",vt,[pt,a(d,{text:"Button text via Prop","toggle-class":"text-muted font-size-16 p-0",variant:"white",right:"",class:"ms-auto","menu-class":"dropdown-menu-end"},{"button-content":e(()=>[ft]),default:e(()=>[a(l,{href:"#"},{default:e(()=>[t("Action")]),_:1}),a(l,{href:"#"},{default:e(()=>[t("Another action")]),_:1}),a(l,{href:"#"},{default:e(()=>[t("Something else here")]),_:1}),a(c),a(l,{href:"#"},{default:e(()=>[t("Separated link")]),_:1})]),_:1})]),a(f,{style:{"max-height":"280px"}},{default:e(()=>[bt]),_:1}),xt])])]),s("div",gt,[s("div",wt,[s("div",yt,[s("div",zt,[kt,a(d,{text:"Button text via Prop",class:"ms-auto",variant:"white","menu-class":"dropdown-menu-end",right:""},{"button-content":e(()=>[At]),default:e(()=>[a(l,{href:"#"},{default:e(()=>[t("Action")]),_:1}),a(l,{href:"#"},{default:e(()=>[t("Another action")]),_:1}),a(l,{href:"#"},{default:e(()=>[t("Something else here")]),_:1}),a(c),a(l,{href:"#"},{default:e(()=>[t("Separated link")]),_:1})]),_:1})]),s("div",St,[s("table",Dt,[Pt,s("tbody",null,[s("tr",null,[s("td",Ct,[s("img",{src:i.sm1,alt:"",class:"avatar-md h-auto d-block rounded"},null,8,Bt)]),Tt,Nt,jt,s("td",null,[a(d,{text:"Button text via Prop","toggle-class":"text-muted font-size-16 p-0","menu-class":"dropdown-menu-end",variant:"white",right:""},{"button-content":e(()=>[Lt]),default:e(()=>[a(l,{href:"#"},{default:e(()=>[t("Action")]),_:1}),a(l,{href:"#"},{default:e(()=>[t("Another action")]),_:1}),a(l,{href:"#"},{default:e(()=>[t("Something else here")]),_:1}),a(c),a(l,{href:"#"},{default:e(()=>[t("Separated link")]),_:1})]),_:1})])]),s("tr",null,[s("td",null,[s("img",{src:i.sm6,alt:"",class:"avatar-md h-auto d-block rounded"},null,8,Mt)]),Rt,Ot,qt,s("td",null,[a(d,{text:"Button text via Prop","toggle-class":"text-muted font-size-16 p-0","menu-class":"dropdown-menu-end",variant:"white",right:""},{"button-content":e(()=>[Ft]),default:e(()=>[a(l,{href:"#"},{default:e(()=>[t("Action")]),_:1}),a(l,{href:"#"},{default:e(()=>[t("Another action")]),_:1}),a(l,{href:"#"},{default:e(()=>[t("Something else here")]),_:1}),a(c),a(l,{href:"#"},{default:e(()=>[t("Separated link")]),_:1})]),_:1})])]),s("tr",null,[s("td",null,[s("img",{src:i.sm1,alt:"",class:"avatar-md h-auto d-block rounded"},null,8,Vt)]),It,Ht,Et,s("td",null,[a(d,{text:"Button text via Prop","toggle-class":"text-muted font-size-16 p-0","menu-class":"dropdown-menu-end",variant:"white",right:""},{"button-content":e(()=>[Jt]),default:e(()=>[a(l,{href:"#"},{default:e(()=>[t("Action")]),_:1}),a(l,{href:"#"},{default:e(()=>[t("Another action")]),_:1}),a(l,{href:"#"},{default:e(()=>[t("Something else here")]),_:1}),a(c),a(l,{href:"#"},{default:e(()=>[t("Separated link")]),_:1})]),_:1})])]),s("tr",null,[s("td",null,[s("img",{src:i.sm2,alt:"",class:"avatar-md h-auto d-block rounded"},null,8,Ut)]),Wt,Yt,Kt,s("td",null,[a(d,{text:"Button text via Prop","toggle-class":"text-muted font-size-16 p-0","menu-class":"dropdown-menu-end",variant:"white",right:""},{"button-content":e(()=>[Xt]),default:e(()=>[a(l,{href:"#"},{default:e(()=>[t("Action")]),_:1}),a(l,{href:"#"},{default:e(()=>[t("Another action")]),_:1}),a(l,{href:"#"},{default:e(()=>[t("Something else here")]),_:1}),a(c),a(l,{href:"#"},{default:e(()=>[t("Separated link")]),_:1})]),_:1})])])])])])])])])])])]),_:1})}const ne=j(M,[["render",Gt]]);export{ne as default};