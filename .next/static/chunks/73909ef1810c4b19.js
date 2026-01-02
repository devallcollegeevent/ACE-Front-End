(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33525,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"warnOnce",{enumerable:!0,get:function(){return a}});let a=e=>{}},44127,e=>{"use strict";class t extends Error{}t.prototype.name="InvalidTokenError",e.s(["clearEmail",0,()=>{localStorage.removeItem("userEmail")},"clearToken",0,()=>{localStorage.removeItem("token"),localStorage.removeItem("userData")},"getEmail",0,()=>localStorage.getItem("userEmail"),"getToken",0,()=>localStorage.getItem("token"),"getUserData",0,()=>{let e=localStorage.getItem("userData");return e?JSON.parse(e):null},"saveEmail",0,e=>{localStorage.setItem("userEmail",e)},"saveToken",0,e=>{localStorage.setItem("token",e);try{let o=function(e,o){let a;if("string"!=typeof e)throw new t("Invalid token specified: must be a string");o||(o={});let r=+(!0!==o.header),n=e.split(".")[r];if("string"!=typeof n)throw new t(`Invalid token specified: missing part #${r+1}`);try{a=function(e){let t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw Error("base64 string is not of the correct length")}try{var o;return o=t,decodeURIComponent(atob(o).replace(/(.)/g,(e,t)=>{let o=t.charCodeAt(0).toString(16).toUpperCase();return o.length<2&&(o="0"+o),"%"+o}))}catch(e){return atob(t)}}(n)}catch(e){throw new t(`Invalid token specified: invalid base64 for part #${r+1} (${e.message})`)}try{return JSON.parse(a)}catch(e){throw new t(`Invalid token specified: invalid json for part #${r+1} (${e.message})`)}}(e);localStorage.setItem("userData",JSON.stringify(o.data))}catch(e){console.error("Token decode failed",e)}}],44127)},5766,e=>{"use strict";let t,o;var a,r=e.i(71645);let n={data:""},i=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,l=/\/\*[^]*?\*\/|  +/g,s=/\n+/g,c=(e,t)=>{let o="",a="",r="";for(let n in e){let i=e[n];"@"==n[0]?"i"==n[1]?o=n+" "+i+";":a+="f"==n[1]?c(i,n):n+"{"+c(i,"k"==n[1]?"":t)+"}":"object"==typeof i?a+=c(i,t?t.replace(/([^,])+/g,e=>n.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):n):null!=i&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=c.p?c.p(n,i):n+":"+i+";")}return o+(t&&r?t+"{"+r+"}":r)+a},u={},d=e=>{if("object"==typeof e){let t="";for(let o in e)t+=o+d(e[o]);return t}return e};function p(e){let t,o,a=this||{},r=e.call?e(a.p):e;return((e,t,o,a,r)=>{var n;let p=d(e),m=u[p]||(u[p]=(e=>{let t=0,o=11;for(;t<e.length;)o=101*o+e.charCodeAt(t++)>>>0;return"go"+o})(p));if(!u[m]){let t=p!==e?e:(e=>{let t,o,a=[{}];for(;t=i.exec(e.replace(l,""));)t[4]?a.shift():t[3]?(o=t[3].replace(s," ").trim(),a.unshift(a[0][o]=a[0][o]||{})):a[0][t[1]]=t[2].replace(s," ").trim();return a[0]})(e);u[m]=c(r?{["@keyframes "+m]:t}:t,o?"":"."+m)}let E=o&&u.g?u.g:null;return o&&(u.g=u[m]),n=u[m],E?t.data=t.data.replace(E,n):-1===t.data.indexOf(n)&&(t.data=a?n+t.data:t.data+n),m})(r.unshift?r.raw?(t=[].slice.call(arguments,1),o=a.p,r.reduce((e,a,r)=>{let n=t[r];if(n&&n.call){let e=n(o),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;n=t?"."+t:e&&"object"==typeof e?e.props?"":c(e,""):!1===e?"":e}return e+a+(null==n?"":n)},"")):r.reduce((e,t)=>Object.assign(e,t&&t.call?t(a.p):t),{}):r,(e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||n})(a.target),a.g,a.o,a.k)}p.bind({g:1});let m,E,_,f=p.bind({k:1});function g(e,t){let o=this||{};return function(){let a=arguments;function r(n,i){let l=Object.assign({},n),s=l.className||r.className;o.p=Object.assign({theme:E&&E()},l),o.o=/ *go\d+/.test(s),l.className=p.apply(o,a)+(s?" "+s:""),t&&(l.ref=i);let c=e;return e[0]&&(c=l.as||e,delete l.as),_&&c[0]&&_(l),m(c,l)}return t?t(r):r}}var v=(e,t)=>"function"==typeof e?e(t):e,S=(t=0,()=>(++t).toString()),h=()=>{if(void 0===o&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");o=!e||e.matches}return o},T="default",I=(e,t)=>{let{toastLimit:o}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,o)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return I(e,{type:+!!e.toasts.find(e=>e.id===a.id),toast:a});case 3:let{toastId:r}=t;return{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let n=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+n}))}}},y=[],L={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},A={},b=(e,t=T)=>{A[t]=I(A[t]||L,e),y.forEach(([e,o])=>{e===t&&o(A[t])})},w=e=>Object.keys(A).forEach(t=>b(e,t)),O=(e=T)=>t=>{b(t,e)},N={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},C=e=>(t,o)=>{let a,r=((e,t="blank",o)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...o,id:(null==o?void 0:o.id)||S()}))(t,e,o);return O(r.toasterId||(a=r.id,Object.keys(A).find(e=>A[e].toasts.some(e=>e.id===a))))({type:2,toast:r}),r.id},R=(e,t)=>C("blank")(e,t);R.error=C("error"),R.success=C("success"),R.loading=C("loading"),R.custom=C("custom"),R.dismiss=(e,t)=>{let o={type:3,toastId:e};t?O(t)(o):w(o)},R.dismissAll=e=>R.dismiss(void 0,e),R.remove=(e,t)=>{let o={type:4,toastId:e};t?O(t)(o):w(o)},R.removeAll=e=>R.remove(void 0,e),R.promise=(e,t,o)=>{let a=R.loading(t.loading,{...o,...null==o?void 0:o.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let r=t.success?v(t.success,e):void 0;return r?R.success(r,{id:a,...o,...null==o?void 0:o.success}):R.dismiss(a),e}).catch(e=>{let r=t.error?v(t.error,e):void 0;r?R.error(r,{id:a,...o,...null==o?void 0:o.error}):R.dismiss(a)}),e};var x=1e3,D=f`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,G=f`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,P=f`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,U=g("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${D} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${G} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${P} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,M=f`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,k=g("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${M} 1s linear infinite;
`,j=f`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,B=f`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,F=g("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${j} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${B} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Y=g("div")`
  position: absolute;
`,V=g("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,$=f`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,W=g("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${$} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,z=({toast:e})=>{let{icon:t,type:o,iconTheme:a}=e;return void 0!==t?"string"==typeof t?r.createElement(W,null,t):t:"blank"===o?null:r.createElement(V,null,r.createElement(k,{...a}),"loading"!==o&&r.createElement(Y,null,"error"===o?r.createElement(U,{...a}):r.createElement(F,{...a})))},H=g("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,X=g("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,q=r.memo(({toast:e,position:t,style:o,children:a})=>{let n=e.height?((e,t)=>{let o=e.includes("top")?1:-1,[a,r]=h()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*o}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*o}%,-1px) scale(.6); opacity:0;}
`];return{animation:t?`${f(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${f(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},i=r.createElement(z,{toast:e}),l=r.createElement(X,{...e.ariaProps},v(e.message,e));return r.createElement(H,{className:e.className,style:{...n,...o,...e.style}},"function"==typeof a?a({icon:i,message:l}):r.createElement(r.Fragment,null,i,l))});a=r.createElement,c.p=void 0,m=a,E=void 0,_=void 0;var J=({id:e,className:t,style:o,onHeightUpdate:a,children:n})=>{let i=r.useCallback(t=>{if(t){let o=()=>{a(e,t.getBoundingClientRect().height)};o(),new MutationObserver(o).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return r.createElement("div",{ref:i,className:t,style:o},n)},K=p`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Z=({reverseOrder:e,position:t="top-center",toastOptions:o,gutter:a,children:n,toasterId:i,containerStyle:l,containerClassName:s})=>{let{toasts:c,handlers:u}=((e,t="default")=>{let{toasts:o,pausedAt:a}=((e={},t=T)=>{let[o,a]=(0,r.useState)(A[t]||L),n=(0,r.useRef)(A[t]);(0,r.useEffect)(()=>(n.current!==A[t]&&a(A[t]),y.push([t,a]),()=>{let e=y.findIndex(([e])=>e===t);e>-1&&y.splice(e,1)}),[t]);let i=o.toasts.map(t=>{var o,a,r;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(o=e[t.type])?void 0:o.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||N[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}});return{...o,toasts:i}})(e,t),n=(0,r.useRef)(new Map).current,i=(0,r.useCallback)((e,t=x)=>{if(n.has(e))return;let o=setTimeout(()=>{n.delete(e),l({type:4,toastId:e})},t);n.set(e,o)},[]);(0,r.useEffect)(()=>{if(a)return;let e=Date.now(),r=o.map(o=>{if(o.duration===1/0)return;let a=(o.duration||0)+o.pauseDuration-(e-o.createdAt);if(a<0){o.visible&&R.dismiss(o.id);return}return setTimeout(()=>R.dismiss(o.id,t),a)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[o,a,t]);let l=(0,r.useCallback)(O(t),[t]),s=(0,r.useCallback)(()=>{l({type:5,time:Date.now()})},[l]),c=(0,r.useCallback)((e,t)=>{l({type:1,toast:{id:e,height:t}})},[l]),u=(0,r.useCallback)(()=>{a&&l({type:6,time:Date.now()})},[a,l]),d=(0,r.useCallback)((e,t)=>{let{reverseOrder:a=!1,gutter:r=8,defaultPosition:n}=t||{},i=o.filter(t=>(t.position||n)===(e.position||n)&&t.height),l=i.findIndex(t=>t.id===e.id),s=i.filter((e,t)=>t<l&&e.visible).length;return i.filter(e=>e.visible).slice(...a?[s+1]:[0,s]).reduce((e,t)=>e+(t.height||0)+r,0)},[o]);return(0,r.useEffect)(()=>{o.forEach(e=>{if(e.dismissed)i(e.id,e.removeDelay);else{let t=n.get(e.id);t&&(clearTimeout(t),n.delete(e.id))}})},[o,i]),{toasts:o,handlers:{updateHeight:c,startPause:s,endPause:u,calculateOffset:d}}})(o,i);return r.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...l},className:s,onMouseEnter:u.startPause,onMouseLeave:u.endPause},c.map(o=>{let i,l,s=o.position||t,c=u.calculateOffset(o,{reverseOrder:e,gutter:a,defaultPosition:t}),d=(i=s.includes("top"),l=s.includes("center")?{justifyContent:"center"}:s.includes("right")?{justifyContent:"flex-end"}:{},{left:0,right:0,display:"flex",position:"absolute",transition:h()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${c*(i?1:-1)}px)`,...i?{top:0}:{bottom:0},...l});return r.createElement(J,{id:o.id,key:o.id,onHeightUpdate:u.updateHeight,className:o.visible?K:"",style:d},"custom"===o.type?v(o.message,o):n?n(o):r.createElement(q,{toast:o,position:s}))}))};e.s(["Toaster",()=>Z,"default",()=>R,"toast",()=>R],5766)},18566,(e,t,o)=>{t.exports=e.r(76562)},85012,e=>{"use strict";e.s(["BTN_CANCEL",0,"Cancel","BTN_CONTINUE",0,"Continue","BTN_DELETE_ACCOUNT",0,"Delete Account","BTN_EMAIL_VERIFY_FAILED",0,"Try Again","BTN_EMAIL_VERIFY_SUCCESS",0,"Go to Login","BTN_OTP_RESEND",0,"Resend Code","BTN_OTP_SEND",0,"Send Code","BTN_VERIFY_DOMAIN",0,"Verify Your Domain","BTN_VERIFY_DOMAIN_LOADING",0,"Saving...","CONDITION_OTP_SEND",0,"Sending...","CONDITION_OTP_VERIFY",0,"Verifying...","IMAGE_ALT",0,"no image","INPUT_PASSWORD",0,"password","INPUT_TEXT",0,"text","LABEL_CONFIRM_PASSWORD",0,"Confirm Password","LABEL_EMAIL",0,"Email","LABEL_LOADING",0,"Loading...","LABEL_LOADING_CITIES",0,"Loading Cities...","LABEL_LOADING_STATES",0,"Loading States...","LABEL_LOGOUT",0,"Logout","LABEL_NAME",0,"Name","LABEL_ORG_CITY",0,"City","LABEL_ORG_COUNTRY",0,"Country","LABEL_ORG_EMAIL",0,"Domain Mail ID","LABEL_ORG_NAME",0,"Organization Name","LABEL_ORG_SELECT_CITY",0,"Select City","LABEL_ORG_SELECT_COUNTRY",0,"Select Country","LABEL_ORG_SELECT_STATE",0,"Select State","LABEL_ORG_STATE",0,"State","LABEL_ORG_STEP_ACCOUNT",0,"Account Creation","LABEL_ORG_STEP_CATEGORY",0,"Organization Category","LABEL_ORG_STEP_DETAILS",0,"Organization Details","LABEL_PASSWORD",0,"Password","LABEL_SET_NEW_PASSWORD",0,"Set new password","MSG_DELETED_YOUR_ACCOUNT",0,"Your account was deleted","MSG_DELETE_ACCOUNT",0,"Delete Account Permanently?","MSG_EMAIL_VERIFY_FAILED",0,"failed","MSG_EMAIL_VERIFY_LOADING",0,"loading","MSG_EMAIL_VERIFY_SUCCESS",0,"success","MSG_ERR_CATEGORY_MISSING",0,"Category missing.","MSG_ERR_FILL_ALL_FIELDS",0,"Fill all fields","MSG_ERR_PASSWORD_MISMATCH",0,"Passwords do not match","MSG_ERR_SIGNUP_FAILED",0,"Signup failed","MSG_GENERIC_ERROR",0,"Something went wrong. Please try again!","MSG_INVALID_CREDENTIALS",0,"Invalid credentials","MSG_LOGIN_FAILED",0,"Login Failed","MSG_LOGIN_SUCCESS_ORGANIZER",0,"Organizer Logged In Successfully!","MSG_LOGIN_SUCCESS_USER",0,"Login Successful!","MSG_NEW_OTP_FAILED_TO_SEND",0,"Failed to resend","MSG_NEW_OTP_SEND",0,"New code sent!","MSG_ORG_SELECT_COUNTRY",0,"Select country first","MSG_ORG_SELECT_STATE",0,"Select state first","MSG_OTP_INVALID",0,"Invalid code","MSG_OTP_SEND_EMAIL",0,"Code sent to your email","MSG_OTP_SEND_EMAIL_ERROR",0,"Email not found","MSG_OTP_VERIFIED",0,"Code verified!","MSG_PASSWORD_UPDATED_FAILED",0,"Failed to update password","MSG_PASSWORD_UPDATED_SUCCESS",0,"Password updated successfully","MSG_SIGNUP_SUCCESS",0,"Signup successfully!","MSG_VERIFY_EMAIL_SENT",0,"Link has been sent to your xyz.com domain mail id.\nPlease click and verify your account.","PH_CONFIRM_PASSWORD",0,"Re-enter your password","PH_NAME",0,"Enter your name","PH_ORG_EMAIL",0,"Enter your domain mail id","PH_PASSWORD",0,"Enter your password","PH_USER_EMAIL",0,"Enter your email","ROLE_ORGANIZER",0,"org","ROLE_USER",0,"user","STORAGE_TOKEN",0,"token","SUBTITLE_ORG_ACCOUNT_CREATION",0,"Add your domain mail id and set a password","SUBTITLE_ORG_DETAILS",0,"Provide your organization information","SUBTITLE_ORG_LOGIN",0,"Turn Ideas into Events — Let's Begin!","SUBTITLE_USER_LOGIN",0,"Please login your account","SUBTITLE_USER_SIGNUP",0,"Let's Create your account","SUB_TITLE_DELETE_ACCOUNT",0,"This will permanently delete your account and all data.","SUB_TITLE_DELETE_ACCOUNT_SUB_TEXT",0,"This action cannot be undone.","SUB_TITLE_DOMAIN_MAIL_VERIFY",0,"Link has been sent to your domain mail. Please verify your account.","SUB_TITLE_EMAIL_VERIFY",0,"Please wait while we verify your email…","SUB_TITLE_EMAIL_VERIFY_FAILED",0,"The verification link is invalid or has expired.Please request a new verification email.","SUB_TITLE_EMAIL_VERIFY_SUCCESS",0,"Your account has been successfully verified.You can now login to continue.","SUB_TITLE_ENTER_OTP",0,"Enter the 4-digit code sent to","SUB_TITLE_OTP_NOT_RECEIVE",0,"Didn’t receive the code?","SUB_TITLE_OTP_SEND",0,"No worries, we'll send you a code","SUB_TITLE_PASSWORD_UPDATE_SUCCESS",0,"Your password has been updated successfully","SUB_TITLE_SET_NEW_PASSWORD",0,"Must be at least 8 characters","TEXT_FORGOT_PASSWORD",0,"Forgot Password?","TEXT_NO_ACCOUNT",0,"Didn’t have an Account?","TEXT_SIGNIN",0,"Sign In","TEXT_SIGNUP",0,"Sign Up","TITLE_ALREADY_HAVE_ACCOUNT",0,"Already have an Account?","TITLE_EMAIL_VERIFY",0,"Verifying your account","TITLE_EMAIL_VERIFY_FAILED",0,"Verification Failed","TITLE_EMAIL_VERIFY_SUCCESS",0,"Account Verified","TITLE_ENTER_OTP",0,"Enter Code","TITLE_MANAGE_PAGE",0,"Manage Page","TITLE_ORG_ACCOUNT_CREATION",0,"Account Creation","TITLE_ORG_LOGIN_MAIN",0,"Host. Manage. Inspire.","TITLE_SET_NEW_PASSWORD",0,"Set New Password","TITLE_USER_LOGIN",0,"Welcome Back","TITLE_USER_SIGNUP",0,"Join us Now!!","TITLE_VERIFY_ACCOUNT",0,"Verify your Account"])},93936,e=>{"use strict";var t=e.i(71645);let o=(0,t.createContext)(null);function a({clientId:e,nonce:a,locale:r,onScriptLoadSuccess:n,onScriptLoadError:i,children:l}){let s=function(e={}){let{nonce:o,locale:a,onScriptLoadSuccess:r,onScriptLoadError:n}=e,[i,l]=(0,t.useState)(!1),s=(0,t.useRef)(r);s.current=r;let c=(0,t.useRef)(n);return c.current=n,(0,t.useEffect)(()=>{let e=document.createElement("script");return e.src="https://accounts.google.com/gsi/client",a&&(e.src+=`?hl=${a}`),e.async=!0,e.defer=!0,e.nonce=o,e.onload=()=>{var e;l(!0),null==(e=s.current)||e.call(s)},e.onerror=()=>{var e;l(!1),null==(e=c.current)||e.call(c)},document.body.appendChild(e),()=>{document.body.removeChild(e)}},[o]),i}({nonce:a,onScriptLoadSuccess:n,onScriptLoadError:i,locale:r}),c=(0,t.useMemo)(()=>({locale:r,clientId:e,scriptLoadedSuccessfully:s}),[e,s]);return t.default.createElement(o.Provider,{value:c},l)}function r(){let e=(0,t.useContext)(o);if(!e)throw Error("Google OAuth components must be used within GoogleOAuthProvider");return e}function n(e){var t;return null!=(t=null==e?void 0:e.clientId)?t:null==e?void 0:e.client_id}let i={large:40,medium:32,small:20};function l({onSuccess:e,onError:o,useOneTap:a,promptMomentNotification:l,type:s="standard",theme:c="outline",size:u="large",text:d,shape:p,logo_alignment:m,width:E,click_listener:_,state:f,containerProps:g,...v}){let S=(0,t.useRef)(null),{clientId:h,locale:T,scriptLoadedSuccessfully:I}=r(),y=(0,t.useRef)(e);y.current=e;let L=(0,t.useRef)(o);L.current=o;let A=(0,t.useRef)(l);return A.current=l,(0,t.useEffect)(()=>{var e,t,o,r,i,l,g,b,w;if(I)return null==(o=null==(t=null==(e=null==window?void 0:window.google)?void 0:e.accounts)?void 0:t.id)||o.initialize({client_id:h,callback:e=>{var t;if(!(null==e?void 0:e.credential))return null==(t=L.current)?void 0:t.call(L);let{credential:o,select_by:a}=e;y.current({credential:o,clientId:n(e),select_by:a})},...v}),null==(l=null==(i=null==(r=null==window?void 0:window.google)?void 0:r.accounts)?void 0:i.id)||l.renderButton(S.current,{type:s,theme:c,size:u,text:d,shape:p,logo_alignment:m,width:E,locale:T,click_listener:_,state:f}),a&&(null==(w=null==(b=null==(g=null==window?void 0:window.google)?void 0:g.accounts)?void 0:b.id)||w.prompt(A.current)),()=>{var e,t,o;a&&(null==(o=null==(t=null==(e=null==window?void 0:window.google)?void 0:e.accounts)?void 0:t.id)||o.cancel())}},[h,I,a,s,c,u,d,p,m,E,T]),t.default.createElement("div",{...g,ref:S,style:{height:i[u],...null==g?void 0:g.style}})}function s(){var e,t,o;null==(o=null==(t=null==(e=null==window?void 0:window.google)?void 0:e.accounts)?void 0:t.id)||o.disableAutoSelect()}function c({flow:e="implicit",scope:o="",onSuccess:a,onError:n,onNonOAuthError:i,overrideScope:l,state:s,...c}){let{clientId:u,scriptLoadedSuccessfully:d}=r(),p=(0,t.useRef)(),m=(0,t.useRef)(a);m.current=a;let E=(0,t.useRef)(n);E.current=n;let _=(0,t.useRef)(i);_.current=i,(0,t.useEffect)(()=>{var t,a;if(!d)return;let r="implicit"===e?"initTokenClient":"initCodeClient";p.current=null==(a=null==(t=null==window?void 0:window.google)?void 0:t.accounts)?void 0:a.oauth2[r]({client_id:u,scope:l?o:`openid profile email ${o}`,callback:e=>{var t,o;if(e.error)return null==(t=E.current)?void 0:t.call(E,e);null==(o=m.current)||o.call(m,e)},error_callback:e=>{var t;null==(t=_.current)||t.call(_,e)},state:s,...c})},[u,d,e,o,s]);let f=(0,t.useCallback)(e=>{var t;return null==(t=p.current)?void 0:t.requestAccessToken(e)},[]),g=(0,t.useCallback)(()=>{var e;return null==(e=p.current)?void 0:e.requestCode()},[]);return"implicit"===e?f:g}function u({onSuccess:e,onError:o,promptMomentNotification:a,cancel_on_tap_outside:i,prompt_parent_id:l,state_cookie_domain:s,hosted_domain:c,use_fedcm_for_prompt:u=!1,use_fedcm_for_button:d=!1,disabled:p,auto_select:m}){let{clientId:E,scriptLoadedSuccessfully:_}=r(),f=(0,t.useRef)(e);f.current=e;let g=(0,t.useRef)(o);g.current=o;let v=(0,t.useRef)(a);v.current=a,(0,t.useEffect)(()=>{var e,t,o,a,r,S,h,T,I;if(_){if(p){null==(o=null==(t=null==(e=null==window?void 0:window.google)?void 0:e.accounts)?void 0:t.id)||o.cancel();return}return null==(S=null==(r=null==(a=null==window?void 0:window.google)?void 0:a.accounts)?void 0:r.id)||S.initialize({client_id:E,callback:e=>{var t;if(!(null==e?void 0:e.credential))return null==(t=g.current)?void 0:t.call(g);let{credential:o,select_by:a}=e;f.current({credential:o,clientId:n(e),select_by:a})},hosted_domain:c,cancel_on_tap_outside:i,prompt_parent_id:l,state_cookie_domain:s,use_fedcm_for_prompt:u,use_fedcm_for_button:d,auto_select:m}),null==(I=null==(T=null==(h=null==window?void 0:window.google)?void 0:h.accounts)?void 0:T.id)||I.prompt(v.current),()=>{var e,t,o;null==(o=null==(t=null==(e=null==window?void 0:window.google)?void 0:e.accounts)?void 0:t.id)||o.cancel()}}},[E,_,i,l,s,c,u,d,p,m])}function d(e,t,...o){var a,r,n;return!!(null==window?void 0:window.google)&&((null==(n=null==(r=null==(a=null==window?void 0:window.google)?void 0:a.accounts)?void 0:r.oauth2)?void 0:n.hasGrantedAllScopes(e,t,...o))||!1)}function p(e,t,...o){var a,r,n;return!!(null==window?void 0:window.google)&&((null==(n=null==(r=null==(a=null==window?void 0:window.google)?void 0:a.accounts)?void 0:r.oauth2)?void 0:n.hasGrantedAnyScope(e,t,...o))||!1)}e.s(["GoogleLogin",()=>l,"GoogleOAuthProvider",()=>a,"googleLogout",()=>s,"hasGrantedAllScopesGoogle",()=>d,"hasGrantedAnyScopeGoogle",()=>p,"useGoogleLogin",()=>c,"useGoogleOAuth",()=>r,"useGoogleOneTapLogin",()=>u])},11985,e=>{"use strict";var t=e.i(43476),o=e.i(18566),a=e.i(71645),r=e.i(44127),n=e.i(85012);function i({open:e,email:o,title:r,description:n,confirmText:i="Confirm",cancelText:l="Cancel",onConfirm:s,onCancel:c}){let[u,d]=(0,a.useState)("");if((0,a.useEffect)(()=>{e&&d("")},[e]),!e)return null;let p=u===o;return(0,t.jsx)("div",{className:"confirm-backdrop",children:(0,t.jsxs)("div",{className:"confirm-modal",children:[(0,t.jsx)("h3",{children:r}),(0,t.jsxs)("p",{children:[n,(0,t.jsx)("br",{}),(0,t.jsx)("strong",{children:o})]}),(0,t.jsx)("input",{type:"email",placeholder:"Type your email",value:u,onChange:e=>d(e.target.value),onPaste:e=>e.preventDefault(),onDrop:e=>e.preventDefault(),autoComplete:"off",spellCheck:!1}),(0,t.jsxs)("div",{className:"confirm-actions",children:[(0,t.jsx)("button",{className:"btn-cancel",onClick:c,children:l}),(0,t.jsx)("button",{className:"btn-confirm",disabled:!p,onClick:s,children:i})]})]})})}function l(){let e=(0,o.useRouter)(),[l,s]=(0,a.useState)(!1),[c,u]=(0,a.useState)(!1),[d,p]=(0,a.useState)("U"),[m,E]=(0,a.useState)(!1),[_,f]=(0,a.useState)(!1),[g,v]=(0,a.useState)(""),[S,h]=(0,a.useState)(""),T=(0,r.getUserData)();return((0,a.useEffect)(()=>{s(!0);let e=(0,r.getUserData)();e?.email&&(u(!0),h(e.email),p(e.email.charAt(0).toUpperCase()))},[]),l)?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("nav",{className:"nav-container",children:[(0,t.jsxs)("div",{className:"nav-left",children:[(0,t.jsx)("img",{src:"/images/logo.png",alt:"logo",className:"nav-logo",onClick:()=>e.push("/")}),(0,t.jsx)("button",{className:"nav-explore",children:"Explore ▼"})]}),(0,t.jsxs)("div",{className:"nav-center",children:[(0,t.jsx)("div",{className:"nav-search-box",children:(0,t.jsx)("input",{type:"text",placeholder:"Search anything",className:"search-input"})}),(0,t.jsx)("button",{className:"nav-location-btn",children:"📍"}),!c&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("button",{className:"nav-create",onClick:()=>{E(!1),e.push("/auth/organization/signup/category")},children:"Create Event"}),(0,t.jsx)("button",{className:"nav-create",onClick:()=>{E(!1),e.push("/auth/user/login")},children:"Sign In"})]})]}),c&&(0,t.jsxs)("div",{className:`nav-right ${m?"open":""}`,children:[(0,t.jsx)("button",{onClick:()=>f(!0),className:"logout-btn",children:n.LABEL_LOGOUT}),(0,t.jsx)("button",{className:"nav-avatar-btn",onClick:()=>{E(!1),e.push("/dashboard")},children:(0,t.jsx)("div",{className:"nav-letter-avatar",children:d})})]}),(0,t.jsxs)("button",{className:`nav-hamburger ${m?"is-open":""}`,onClick:()=>E(!m),children:[(0,t.jsx)("span",{className:"bar"}),(0,t.jsx)("span",{className:"bar"}),(0,t.jsx)("span",{className:"bar"})]})]}),(0,t.jsx)(i,{open:_,email:T?.email,title:"Confirm Logout",description:"Please type your email to logout.",confirmText:"Logout",onCancel:()=>f(!1),onConfirm:()=>{document.cookie="token=; path=/; max-age=0",document.cookie="role=; path=/; max-age=0",localStorage.removeItem("token"),localStorage.removeItem("userData"),sessionStorage.clear(),f(!1),e.push("/")}})]}):null}function s({children:e}){let a=(0,o.usePathname)(),r=a.startsWith("/auth")||a.startsWith("/login")||a.startsWith("/signup");return(0,t.jsxs)(t.Fragment,{children:[!r&&(0,t.jsx)(l,{}),e]})}e.s(["default",()=>s],11985)},40773,e=>{"use strict";var t=e.i(43476),o=e.i(55487),a=e.i(5766),r=e.i(64645),n=e.i(84257);let i=(0,r.configureStore)({reducer:{auth:n.default}});function l({children:e}){return(0,t.jsxs)(o.Provider,{store:i,children:[(0,t.jsx)(a.Toaster,{position:"top-right"}),e]})}e.s(["default",()=>l],40773)}]);