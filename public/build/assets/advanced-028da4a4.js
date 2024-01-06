import{s as w}from"./vue3-datepicker.esm-ee1bb0a4.js";import{s as g}from"./default-dae83f34.js";import{L as x}from"./main-e24c86ad.js";import{P as v}from"./page-header-c6b63424.js";import{_ as k,e as y,w as V,r as c,o as n,d as s,a as e,u as d,v as r,c as u,n as h,t as m,A as p,g as i}from"../js/app2.js";import"./logo-light-deb27e23.js";import"./logo-9faa3827.js";import"./avatar-1-15b743f1.js";const N={watch:{},components:{DatePicker:w,Multiselect:g,Layout:x,PageHeader:v},data(){return{title:"Form Advanced",items:[{text:"Forms",href:"/"},{text:"Advanced",active:!0}],defaultdate:"",autoClose:"",daterange:"",demoMonth:"",demoYear:"",time:null,danger:!1,info:!1,success:!1,primary:!1,secondary:!1,customColor:!1,customColor1:!1,customColor2:!1,customColor3:!1,value:null,value1:null,options:["Alaska","Hawaii","California","Nevada","Oregon","Washington","Arizona","Colorado","Idaho","Montana","Nebraska","New Mexico","North Dakota","Utah","Wyoming","Alabama","Arkansas","Illinois","Iowa"],maxlen:"",data:"",option:"",textarea:"",defaultNull:null,defaultspinval:1}}},U={class:"row"},Y={class:"col-lg-6"},C={class:"card"},M={class:"card-body"},q=e("h4",{class:"card-title"},"Select2",-1),A=e("p",{class:"card-title-desc"},"A mobile and touch friendly input spinner component for Bootstrap",-1),D=e("label",null,"Single Select",-1),S=e("label",{class:"mt-3"},"Multiple Select",-1),P=e("div",{class:"col-lg-6"},[e("div",{class:"card"},[e("div",{class:"card-body"},[e("h4",{class:"card-title"},"Css Switch"),e("p",{class:"card-title-desc"},"Here are a few types of switches."),e("div",{class:"d-flex gap-1"},[e("input",{type:"checkbox",id:"switch1",switch:"none",checked:""}),e("label",{for:"switch1","data-on-label":"On","data-off-label":"Off"}),e("input",{type:"checkbox",id:"switch2",switch:"default",checked:""}),e("label",{for:"switch2","data-on-label":"","data-off-label":""}),e("input",{type:"checkbox",id:"switch3",switch:"bool",checked:""}),e("label",{for:"switch3","data-on-label":"Yes","data-off-label":"No"}),e("input",{type:"checkbox",id:"switch6",switch:"primary",checked:""}),e("label",{for:"switch6","data-on-label":"Yes","data-off-label":"No"}),e("input",{type:"checkbox",id:"switch4",switch:"success",checked:""}),e("label",{for:"switch4","data-on-label":"Yes","data-off-label":"No"}),e("input",{type:"checkbox",id:"switch7",switch:"info",checked:""}),e("label",{for:"switch7","data-on-label":"Yes","data-off-label":"No"}),e("input",{type:"checkbox",id:"switch5",switch:"warning",checked:""}),e("label",{for:"switch5","data-on-label":"Yes","data-off-label":"No"}),e("input",{type:"checkbox",id:"switch8",switch:"danger",checked:""}),e("label",{for:"switch8","data-on-label":"Yes","data-off-label":"No"}),e("input",{type:"checkbox",id:"switch9",switch:"dark",checked:""}),e("label",{for:"switch9","data-on-label":"Yes","data-off-label":"No"})]),e("div",{class:"col-lg-6"},[e("div",{class:"mt-4 mt-lg-0"},[e("h5",{class:"font-size-14 mb-3"},"Square switch"),e("div",{class:"d-flex"},[e("div",{class:"square-switch"},[e("input",{type:"checkbox",id:"square-switch1",switch:"none",checked:""}),e("label",{for:"square-switch1","data-on-label":"On","data-off-label":"Off"})]),e("div",{class:"square-switch"},[e("input",{type:"checkbox",id:"square-switch2",switch:"info",checked:""}),e("label",{for:"square-switch2","data-on-label":"Yes","data-off-label":"No"})]),e("div",{class:"square-switch"},[e("input",{type:"checkbox",id:"square-switch3",switch:"bool",checked:""}),e("label",{for:"square-switch3","data-on-label":"Yes","data-off-label":"No"})])])])])])])],-1),T={class:"row"},B={class:"col-lg-6"},H={class:"card"},L={class:"card-body"},O=e("h4",{class:"card-title"},"Date Picker",-1),E=e("p",{class:"card-title-desc"},"Examples of bootstrap datepicker.",-1),I={class:"mb-3"},z=e("label",null,"Default Date Picker",-1),F=e("br",null,null,-1),W={class:"mb-3"},R=e("label",null,"Auto close",-1),j=e("br",null,null,-1),G={class:"mb-3"},J=e("label",null,"Date Range",-1),K=e("br",null,null,-1),Q={class:"mb-3"},X=e("label",null,"Month View",-1),Z=e("br",null,null,-1),$={class:"mb-3"},ee=e("label",null,"Year View",-1),te=e("br",null,null,-1),le={class:"mb-3"},oe=e("label",null,"Time View",-1),se=e("br",null,null,-1),ae={class:"col-lg-6"},ne={class:"card"},ie={class:"card-body"},ce=e("h4",{class:"card-title"},"Bootstrap MaxLength",-1),de=e("p",{class:"card-title-desc"},'Uses the HTML5 attribute "maxlength" to work.',-1),re=e("label",{class:"mb-1 fw-medium"},"Default usage",-1),ue=e("p",{class:"text-muted font-13"},"The badge will show up by default when the remaining chars are 10 or less:",-1),he={key:0,class:"text-center"},me=e("label",{class:"mb-1 mt-3 fw-medium"},"Threshold value",-1),pe=e("p",{class:"text-muted font-13"},[i(" Do you want the badge to show up when there are 20 chars or less? Use the "),e("code",null,"threshold"),i(" option: ")],-1),fe={class:"text-center"},be=e("label",{class:"mb-1 mt-3 fw-medium"},"All the options",-1),_e=e("p",{class:"text-muted font-13"},[i(" Please note: if the "),e("code",null,"alwaysShow"),i(" option is enabled, the "),e("code",null,"threshold"),i(" option is ignored. ")],-1),we={class:"text-center"},ge=e("label",{class:"mb-1 mt-3 fw-medium"},"Textareas",-1),xe=e("p",{class:"text-muted font-13"},"Bootstrap maxlength supports textarea as well as inputs. Even on old IE.",-1),ve={class:"text-center"};function ke(ye,l,Ve,Ne,t,Ue){const b=c("PageHeader"),f=c("multiselect"),a=c("date-picker"),_=c("Layout");return n(),y(_,null,{default:V(()=>[s(b,{title:t.title,items:t.items},null,8,["title","items"]),e("div",U,[e("div",Y,[e("div",C,[e("div",M,[q,A,D,s(f,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=o=>t.value=o),options:t.options},null,8,["modelValue","options"]),S,s(f,{modelValue:t.value1,"onUpdate:modelValue":l[1]||(l[1]=o=>t.value1=o),options:t.options,multiple:!0},null,8,["modelValue","options"])])])]),P]),e("div",T,[e("div",B,[e("div",H,[e("div",L,[O,E,e("div",null,[e("div",I,[z,F,s(a,{class:"form-control",modelValue:t.defaultdate,"onUpdate:modelValue":l[2]||(l[2]=o=>t.defaultdate=o),"first-day-of-week":1,lang:"en",confirm:""},null,8,["modelValue"])]),e("div",W,[R,j,s(a,{class:"form-control",modelValue:t.autoClose,"onUpdate:modelValue":l[3]||(l[3]=o=>t.autoClose=o),"first-day-of-week":1,lang:"en"},null,8,["modelValue"])]),e("div",G,[J,K,s(a,{class:"form-control",modelValue:t.daterange,"onUpdate:modelValue":l[4]||(l[4]=o=>t.daterange=o),range:"","append-to-body":"",lang:"en",confirm:""},null,8,["modelValue"])]),e("div",Q,[X,Z,s(a,{class:"form-control",modelValue:t.demoMonth,"onUpdate:modelValue":l[5]||(l[5]=o=>t.demoMonth=o),type:"month",lang:"en",confirm:"",placeholder:"Select Month"},null,8,["modelValue"])]),e("div",$,[ee,te,s(a,{class:"form-control",modelValue:t.demoYear,"onUpdate:modelValue":l[6]||(l[6]=o=>t.demoYear=o),type:"year",lang:"en",confirm:"",placeholder:"Select Year"},null,8,["modelValue"])]),e("div",le,[oe,se,s(a,{class:"form-control",modelValue:t.time,"onUpdate:modelValue":l[7]||(l[7]=o=>t.time=o),format:"hh:mm:ss a","value-type":"format",type:"time",placeholder:"hh:mm:ss a"},null,8,["modelValue"])])])])])]),e("div",ae,[e("div",ne,[e("div",ie,[ce,de,re,ue,d(e("input",{"onUpdate:modelValue":l[8]||(l[8]=o=>t.maxlen=o),type:"text",class:"form-control",maxlength:10},null,512),[[r,t.maxlen]]),t.maxlen?(n(),u("div",he,[e("p",{class:h(["badge position-absolute",{"bg-success":t.maxlen.length!==10,"bg-danger":t.maxlen.length===10}])},m(t.maxlen.length)+" / 10",3)])):p("",!0),e("div",null,[me,pe,d(e("input",{"onUpdate:modelValue":l[9]||(l[9]=o=>t.data=o),type:"text",maxlength:25,class:"form-control"},null,512),[[r,t.data]]),e("div",fe,[t.data?(n(),u("p",{key:0,class:h(["badge position-absolute",{"bg-success":t.data.length!==25,"bg-danger":t.data.length===25}])},m(t.data.length)+" / 25",3)):p("",!0)])]),e("div",null,[be,_e,d(e("input",{"onUpdate:modelValue":l[10]||(l[10]=o=>t.option=o),type:"text",class:"form-control",maxlength:25},null,512),[[r,t.option]]),e("div",we,[t.option?(n(),u("p",{key:0,class:h(["badge position-absolute",{"bg-success":t.option.length!==25,"bg-danger":t.option.length===25}])}," You typed "+m(t.option.length)+" out of 25 chars available. ",3)):p("",!0)])]),e("div",null,[ge,xe,d(e("textarea",{"onUpdate:modelValue":l[11]||(l[11]=o=>t.textarea=o),class:"form-control",maxlength:225,rows:"3",placeholder:"This textarea has a limit of 225 chars."},null,512),[[r,t.textarea]]),e("div",ve,[t.textarea?(n(),u("p",{key:0,class:h(["badge position-absolute",{"bg-success":t.textarea.length!==225,"bg-danger":t.textarea.length===225}])},m(t.textarea.length)+" / 225 ",3)):p("",!0)])])])])])])]),_:1})}const Te=k(N,[["render",ke]]);export{Te as default};
