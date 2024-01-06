import{U as De,C as we}from"../js/app2.js";var ae={};function z(e,n,r,a){function i(o){return o instanceof r?o:new r(function(c){c(o)})}return new(r||(r=Promise))(function(o,c){function f(u){try{l(a.next(u))}catch(g){c(g)}}function y(u){try{l(a.throw(u))}catch(g){c(g)}}function l(u){u.done?o(u.value):i(u.value).then(f,y)}l((a=a.apply(e,n||[])).next())})}function C(e,n){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},a,i,o,c;return c={next:f(0),throw:f(1),return:f(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function f(l){return function(u){return y([l,u])}}function y(l){if(a)throw new TypeError("Generator is already executing.");for(;c&&(c=0,l[0]&&(r=0)),r;)try{if(a=1,i&&(o=l[0]&2?i.return:l[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,l[1])).done)return o;switch(i=0,o&&(l=[l[0]&2,o.value]),l[0]){case 0:case 1:o=l;break;case 4:return r.label++,{value:l[1],done:!1};case 5:r.label++,i=l[1],l=[0];continue;case 7:l=r.ops.pop(),r.trys.pop();continue;default:if(o=r.trys,!(o=o.length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){r=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){r.label=l[1];break}if(l[0]===6&&r.label<o[1]){r.label=o[1],o=l;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(l);break}o[2]&&r.ops.pop(),r.trys.pop();continue}l=n.call(e,r)}catch(u){l=[6,u],i=0}finally{a=o=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function Fe(e,n){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var a=r.call(e),i,o=[],c;try{for(;(n===void 0||n-- >0)&&!(i=a.next()).done;)o.push(i.value)}catch(f){c={error:f}}finally{try{i&&!i.done&&(r=a.return)&&r.call(a)}finally{if(c)throw c.error}}return o}function Ee(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(Fe(arguments[n]));return e}var xe=new Map([["avi","video/avi"],["gif","image/gif"],["ico","image/x-icon"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["mkv","video/x-matroska"],["mov","video/quicktime"],["mp4","video/mp4"],["pdf","application/pdf"],["png","image/png"],["zip","application/zip"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]]);function B(e,n){var r=Oe(e);if(typeof r.path!="string"){var a=e.webkitRelativePath;Object.defineProperty(r,"path",{value:typeof n=="string"?n:typeof a=="string"&&a.length>0?a:e.name,writable:!1,configurable:!1,enumerable:!0})}return r}function Oe(e){var n=e.name,r=n&&n.lastIndexOf(".")!==-1;if(r&&!e.type){var a=n.split(".").pop().toLowerCase(),i=xe.get(a);i&&Object.defineProperty(e,"type",{value:i,writable:!1,configurable:!1,enumerable:!0})}return e}var Ae=[".DS_Store","Thumbs.db"];function Se(e){return z(this,void 0,void 0,function(){return C(this,function(n){return[2,je(e)&&e.dataTransfer?ze(e.dataTransfer,e.type):ke(e)]})})}function je(e){return!!e.dataTransfer}function ke(e){var n=Pe(e.target)?e.target.files?q(e.target.files):[]:[];return n.map(function(r){return B(r)})}function Pe(e){return e!==null}function ze(e,n){return z(this,void 0,void 0,function(){var r,a;return C(this,function(i){switch(i.label){case 0:return e.items?(r=q(e.items).filter(function(o){return o.kind==="file"}),n!=="drop"?[2,r]:[4,Promise.all(r.map(Ce))]):[3,2];case 1:return a=i.sent(),[2,V(oe(a))];case 2:return[2,V(q(e.files).map(function(o){return B(o)}))]}})})}function V(e){return e.filter(function(n){return Ae.indexOf(n.name)===-1})}function q(e){for(var n=[],r=0;r<e.length;r++){var a=e[r];n.push(a)}return n}function Ce(e){if(typeof e.webkitGetAsEntry!="function")return X(e);var n=e.webkitGetAsEntry();return n&&n.isDirectory?ue(n):X(e)}function oe(e){return e.reduce(function(n,r){return Ee(n,Array.isArray(r)?oe(r):[r])},[])}function X(e){var n=e.getAsFile();if(!n)return Promise.reject(e+" is not a File");var r=B(n);return Promise.resolve(r)}function _e(e){return z(this,void 0,void 0,function(){return C(this,function(n){return[2,e.isDirectory?ue(e):Te(e)]})})}function ue(e){var n=e.createReader();return new Promise(function(r,a){var i=[];function o(){var c=this;n.readEntries(function(f){return z(c,void 0,void 0,function(){var y,l,u;return C(this,function(g){switch(g.label){case 0:if(f.length)return[3,5];g.label=1;case 1:return g.trys.push([1,3,,4]),[4,Promise.all(i)];case 2:return y=g.sent(),r(y),[3,4];case 3:return l=g.sent(),a(l),[3,4];case 4:return[3,6];case 5:u=Promise.all(f.map(_e)),i.push(u),o(),g.label=6;case 6:return[2]}})})},function(f){a(f)})}o()})}function Te(e){return z(this,void 0,void 0,function(){return C(this,function(n){return[2,new Promise(function(r,a){e.file(function(i){var o=B(i,e.fullPath);r(o)},function(i){a(i)})})]})})}const Le=Object.freeze(Object.defineProperty({__proto__:null,fromEvent:Se},Symbol.toStringTag,{value:"Module"})),Re=De(Le);var N={};N.__esModule=!0;N.default=function(e,n){if(e&&n){var r=Array.isArray(n)?n:n.split(","),a=e.name||"",i=(e.type||"").toLowerCase(),o=i.replace(/\/.*$/,"");return r.some(function(c){var f=c.trim().toLowerCase();return f.charAt(0)==="."?a.toLowerCase().endsWith(f):f.endsWith("/*")?o===f.replace(/\/.*$/,""):i===f})}return!0};Object.defineProperty(ae,"__esModule",{value:!0});var h=we,Ie=Re;function Me(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var Be=Me(N),v=function(){return(v=Object.assign||function(e){for(var n,r=1,a=arguments.length;r<a;r++)for(var i in n=arguments[r])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e}).apply(this,arguments)};function Z(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)n.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(r[a[i]]=e[a[i]])}return r}function $e(e,n,r,a){return new(r||(r=Promise))(function(i,o){function c(l){try{y(a.next(l))}catch(u){o(u)}}function f(l){try{y(a.throw(l))}catch(u){o(u)}}function y(l){var u;l.done?i(l.value):(u=l.value,u instanceof r?u:new r(function(g){g(u)})).then(c,f)}y((a=a.apply(e,n||[])).next())})}function Ke(e,n){var r,a,i,o,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:f(0),throw:f(1),return:f(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function f(y){return function(l){return function(u){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,a&&(i=2&u[0]?a.return:u[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,u[1])).done)return i;switch(a=0,i&&(u=[2&u[0],i.value]),u[0]){case 0:case 1:i=u;break;case 4:return c.label++,{value:u[1],done:!1};case 5:c.label++,a=u[1],u=[0];continue;case 7:u=c.ops.pop(),c.trys.pop();continue;default:if(i=c.trys,!((i=i.length>0&&i[i.length-1])||u[0]!==6&&u[0]!==2)){c=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){c.label=u[1];break}if(u[0]===6&&c.label<i[1]){c.label=i[1],i=u;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(u);break}i[2]&&c.ops.pop(),c.trys.pop();continue}u=n.call(e,c)}catch(g){u=[6,g],a=0}finally{r=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([y,l])}}}function G(e,n){for(var r=0,a=n.length,i=e.length;r<a;r++,i++)e[i]=n[r];return e}function ee(e){e.preventDefault()}function I(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(n){return n==="Files"||n==="application/x-moz-file"}):!!e.target&&!!e.target.files}function M(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():e.cancelBubble!==void 0&&e.cancelBubble}var qe={code:"too-many-files",message:"Too many files"},Ge=function(e){return e=Array.isArray(e)&&e.length===1?e[0]:e,{code:"file-invalid-type",message:"File type must be "+(Array.isArray(e)?"one of "+e.join(", "):e)}};function P(e){return e!=null}function ne(e,n){var r=e.type==="application/x-moz-file"||Be.default(e,n);return[r,r?null:Ge(n)]}var re=function(e){return{code:"file-too-large",message:"File is larger than "+e+" bytes"}},te=function(e){return{code:"file-too-small",message:"File is smaller than "+e+" bytes"}};function ie(e,n,r){if(P(e.size)&&e.size)if(P(n)&&P(r)){if(e.size>r)return[!1,re(r)];if(e.size<n)return[!1,te(n)]}else{if(P(n)&&e.size<n)return[!1,te(n)];if(P(r)&&e.size>r)return[!1,re(r)]}return[!0,null]}function F(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return function(r){for(var a=[],i=1;i<arguments.length;i++)a[i-1]=arguments[i];return e.some(function(o){return!M(r)&&o&&o.apply(void 0,G([r],a)),M(r)})}}var Ne={disabled:!1,getFilesFromEvent:Ie.fromEvent,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1};function We(e,n){switch(n.type){case"focus":return v(v({},e),{isFocused:!0});case"blur":return v(v({},e),{isFocused:!1});case"openDialog":return v(v({},e),{isFileDialogActive:!0});case"closeDialog":return v(v({},e),{isFileDialogActive:!1});case"setDraggedFiles":var r=n.isDragActive,a=n.draggedFiles;return v(v({},e),{draggedFiles:a,isDragActive:r});case"setFiles":return v(v({},e),{acceptedFiles:n.acceptedFiles,fileRejections:n.fileRejections});case"reset":return v(v({},e),{isFileDialogActive:!1,isDragActive:!1,draggedFiles:[],acceptedFiles:[],fileRejections:[]});default:return e}}ae.useDropzone=function(e){e===void 0&&(e={});var n=h.ref(v(v({},Ne),e));h.watch(function(){return v({},e)},function(t){n.value=v(v({},n.value),t)});var r=h.ref(),a=h.ref(),i=function(t,s,p){var d=h.reactive(s),m=function(D){var b=t(h.toRaw(d),D);Object.keys(b).forEach(function(w){d[w]=b[w]})};return p!=null&&m(p),[d,m]}(We,{isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,draggedFiles:[],acceptedFiles:[],fileRejections:[]}),o=i[0],c=i[1],f=function(){a.value&&(c({type:"openDialog"}),a.value.value="",a.value.click())},y=function(){var t=n.value.onFileDialogCancel;o.isFileDialogActive&&setTimeout(function(){if(a.value){var s=a.value.files;s&&!s.length&&(c({type:"closeDialog"}),typeof t=="function"&&t())}},300)};function l(t){r.value&&(r.value.$el||r.value).isEqualNode(t.target)&&(t.keyCode!==32&&t.keyCode!==13||(t.preventDefault(),f()))}function u(){c({type:"focus"})}function g(){c({type:"blur"})}function le(){var t;n.value.noClick||(t===void 0&&(t=window.navigator.userAgent),function(s){return s.includes("MSIE")||s.includes("Trident/")}(t)||function(s){return s.includes("Edge/")}(t)?setTimeout(f,0):f())}var x=h.ref([]),W=function(t){r.value&&((r.value.$el||r.value).contains(t.target)||(t.preventDefault(),x.value=[]))};function _(t){n.value.noDragEventsBubbling&&t.stopPropagation()}function ce(t){return $e(this,void 0,void 0,function(){var s,p,d,m,D;return Ke(this,function(b){switch(b.label){case 0:return s=n.value,p=s.getFilesFromEvent,d=s.noDragEventsBubbling,m=s.onDragEnter,t.preventDefault(),_(t),x.value=G(G([],x.value),[t.target]),I(t)?p?[4,p(t)]:[2]:[3,2];case 1:if((D=b.sent())||(D=[]),M(t)&&!d)return[2];c({draggedFiles:D,isDragActive:!0,type:"setDraggedFiles"}),m&&m(t),b.label=2;case 2:return[2]}})})}function se(t){var s=n.value.onDragOver;if(t.preventDefault(),_(t),t.dataTransfer)try{t.dataTransfer.dropEffect="copy"}catch{}return I(t)&&s&&s(t),!1}function fe(t){t.preventDefault(),_(t);var s=x.value.filter(function(m){return!!r.value&&(r.value.$el||r.value).contains(m)}),p=s.indexOf(t.target);if(p!==-1&&s.splice(p,1),x.value=s,!(s.length>0)){c({isDragActive:!1,type:"setDraggedFiles",draggedFiles:[]});var d=n.value.onDragLeave;I(t)&&d&&d(t)}}function U(t){t.preventDefault(),_(t),x.value=[];var s=n.value,p=s.getFilesFromEvent,d=s.noDragEventsBubbling,m=s.accept,D=s.minSize,b=s.maxSize,w=s.multiple,A=s.maxFiles,S=s.onDrop,L=s.onDropRejected,R=s.onDropAccepted;if(I(t)){if(!p)return;Promise.resolve(p(t)).then(function(K){if(!M(t)||d){var E=[],j=[];K.forEach(function(k){var J=ne(k,m),de=J[0],ge=J[1],Q=ie(k,D,b),me=Q[0],ye=Q[1];if(de&&me)E.push(k);else{var he=[ge,ye].filter(function(be){return be});j.push({file:k,errors:he})}}),(!w&&E.length>1||w&&A>=1&&E.length>A)&&(E.forEach(function(k){j.push({file:k,errors:[qe]})}),E.splice(0)),c({acceptedFiles:E,fileRejections:j,type:"setFiles"}),S&&S(E,j,t),j.length>0&&L&&L(j,t),E.length>0&&R&&R(E,t)}})}c({type:"reset"})}h.onMounted(function(){window.addEventListener("focus",y,!1),n.value.preventDropOnDocument&&(document.addEventListener("dragover",ee,!1),document.addEventListener("drop",W,!1))}),h.onUnmounted(function(){window.removeEventListener("focus",y,!1),n.value.preventDropOnDocument&&(document.removeEventListener("dragover",ee),document.removeEventListener("drop",W))});var O=function(t){return n.value.disabled?void 0:t},$=function(t){return n.value.noKeyboard?void 0:O(t)},T=function(t){return n.value.noDrag?void 0:O(t)},ve=function(t){t.stopPropagation()},Y=h.computed(function(){return o.draggedFiles?o.draggedFiles.length:0}),H=h.computed(function(){return Y.value>0&&function(t){var s=t.files,p=t.accept,d=t.minSize,m=t.maxSize,D=t.multiple,b=t.maxFiles;return!(!D&&s.length>1||D&&b>=1&&s.length>b)&&s.every(function(w){var A=ne(w,p)[0],S=ie(w,d,m)[0];return A&&S})}({files:o.draggedFiles,accept:n.value.accept,minSize:n.value.minSize,maxSize:n.value.maxSize,multiple:n.value.multiple,maxFiles:n.value.maxFiles})}),pe=h.computed(function(){return Y.value>0&&!H.value});return v(v({},h.toRefs(o)),{isDragAccept:H,isDragReject:pe,isFocused:h.computed(function(){return o.isFocused&&!n.value.disabled}),getRootProps:function(t){t===void 0&&(t={});var s=t.onKeyDown,p=t.onFocus,d=t.onBlur,m=t.onClick,D=t.onDragEnter,b=t.onDragenter,w=t.onDragOver,A=t.onDragover,S=t.onDragLeave,L=t.onDragleave,R=t.onDrop,K=Z(t,["onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragenter","onDragOver","onDragover","onDragLeave","onDragleave","onDrop"]);return v(v({onKeyDown:$(F(s,l)),onFocus:$(F(p,u)),onBlur:$(F(d,g)),onClick:O(F(m,le)),onDragenter:T(F(D,b,ce)),onDragover:T(F(w,A,se)),onDragleave:T(F(S,L,fe)),onDrop:T(F(R,U)),ref:r},n.value.disabled||n.value.noKeyboard?{}:{tabIndex:0}),K)},getInputProps:function(t){t===void 0&&(t={});var s=t.onChange,p=t.onClick,d=Z(t,["onChange","onClick"]),m={accept:n.value.accept,multiple:n.value.multiple,style:"display: none",type:"file",onChange:O(F(s,U)),onClick:O(F(p,ve)),autoComplete:"off",tabIndex:-1,ref:a};return v(v({},m),d)},rootRef:r,inputRef:a,open:O(f)})};export{ae as i};