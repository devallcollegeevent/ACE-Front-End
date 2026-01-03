(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,2358,e=>{"use strict";var t=e.i(43476),a=e.i(71645);let r=(0,a.createContext)(null);e.s(["LoadingProvider",0,({children:e})=>{let[o,s]=(0,a.useState)(!1);return(0,t.jsx)(r.Provider,{value:{loading:o,setLoading:s},children:e})},"useLoading",0,()=>{let e=(0,a.useContext)(r);if(!e)throw Error("useLoading must be used inside LoadingProvider");return e}])},44127,e=>{"use strict";class t extends Error{}t.prototype.name="InvalidTokenError",e.s(["clearEmail",0,()=>{localStorage.removeItem("userEmail")},"clearToken",0,()=>{localStorage.removeItem("token"),localStorage.removeItem("userData")},"getEmail",0,()=>localStorage.getItem("userEmail"),"getToken",0,()=>localStorage.getItem("token"),"getUserData",0,()=>{let e=localStorage.getItem("userData");return e?JSON.parse(e):null},"saveEmail",0,e=>{localStorage.setItem("userEmail",e)},"saveToken",0,e=>{localStorage.setItem("token",e);try{let a=function(e,a){let r;if("string"!=typeof e)throw new t("Invalid token specified: must be a string");a||(a={});let o=+(!0!==a.header),s=e.split(".")[o];if("string"!=typeof s)throw new t(`Invalid token specified: missing part #${o+1}`);try{r=function(e){let t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw Error("base64 string is not of the correct length")}try{var a;return a=t,decodeURIComponent(atob(a).replace(/(.)/g,(e,t)=>{let a=t.charCodeAt(0).toString(16).toUpperCase();return a.length<2&&(a="0"+a),"%"+a}))}catch(e){return atob(t)}}(s)}catch(e){throw new t(`Invalid token specified: invalid base64 for part #${o+1} (${e.message})`)}try{return JSON.parse(r)}catch(e){throw new t(`Invalid token specified: invalid json for part #${o+1} (${e.message})`)}}(e);localStorage.setItem("userData",JSON.stringify(a.data))}catch(e){console.error("Token decode failed",e)}}],44127)},5766,e=>{"use strict";let t,a;var r,o=e.i(71645);let s={data:""},i=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,n=/\/\*[^]*?\*\/|  +/g,l=/\n+/g,c=(e,t)=>{let a="",r="",o="";for(let s in e){let i=e[s];"@"==s[0]?"i"==s[1]?a=s+" "+i+";":r+="f"==s[1]?c(i,s):s+"{"+c(i,"k"==s[1]?"":t)+"}":"object"==typeof i?r+=c(i,t?t.replace(/([^,])+/g,e=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):s):null!=i&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=c.p?c.p(s,i):s+":"+i+";")}return a+(t&&o?t+"{"+o+"}":o)+r},d={},u=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+u(e[a]);return t}return e};function E(e){let t,a,r=this||{},o=e.call?e(r.p):e;return((e,t,a,r,o)=>{var s;let E=u(e),_=d[E]||(d[E]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(E));if(!d[_]){let t=E!==e?e:(e=>{let t,a,r=[{}];for(;t=i.exec(e.replace(n,""));)t[4]?r.shift():t[3]?(a=t[3].replace(l," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(l," ").trim();return r[0]})(e);d[_]=c(o?{["@keyframes "+_]:t}:t,a?"":"."+_)}let p=a&&d.g?d.g:null;return a&&(d.g=d[_]),s=d[_],p?t.data=t.data.replace(p,s):-1===t.data.indexOf(s)&&(t.data=r?s+t.data:t.data+s),_})(o.unshift?o.raw?(t=[].slice.call(arguments,1),a=r.p,o.reduce((e,r,o)=>{let s=t[o];if(s&&s.call){let e=s(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;s=t?"."+t:e&&"object"==typeof e?e.props?"":c(e,""):!1===e?"":e}return e+r+(null==s?"":s)},"")):o.reduce((e,t)=>Object.assign(e,t&&t.call?t(r.p):t),{}):o,(e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||s})(r.target),r.g,r.o,r.k)}E.bind({g:1});let _,p,m,g=E.bind({k:1});function S(e,t){let a=this||{};return function(){let r=arguments;function o(s,i){let n=Object.assign({},s),l=n.className||o.className;a.p=Object.assign({theme:p&&p()},n),a.o=/ *go\d+/.test(l),n.className=E.apply(a,r)+(l?" "+l:""),t&&(n.ref=i);let c=e;return e[0]&&(c=n.as||e,delete n.as),m&&c[0]&&m(n),_(c,n)}return t?t(o):o}}var f=(e,t)=>"function"==typeof e?e(t):e,T=(t=0,()=>(++t).toString()),I=()=>{if(void 0===a&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");a=!e||e.matches}return a},L="default",h=(e,t)=>{let{toastLimit:a}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,a)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return h(e,{type:+!!e.toasts.find(e=>e.id===r.id),toast:r});case 3:let{toastId:o}=t;return{...e,toasts:e.toasts.map(e=>e.id===o||void 0===o?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+s}))}}},y=[],A={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},O={},v=(e,t=L)=>{O[t]=h(O[t]||A,e),y.forEach(([e,a])=>{e===t&&a(O[t])})},N=e=>Object.keys(O).forEach(t=>v(e,t)),b=(e=L)=>t=>{v(t,e)},C={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},R=e=>(t,a)=>{let r,o=((e,t="blank",a)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||T()}))(t,e,a);return b(o.toasterId||(r=o.id,Object.keys(O).find(e=>O[e].toasts.some(e=>e.id===r))))({type:2,toast:o}),o.id},x=(e,t)=>R("blank")(e,t);x.error=R("error"),x.success=R("success"),x.loading=R("loading"),x.custom=R("custom"),x.dismiss=(e,t)=>{let a={type:3,toastId:e};t?b(t)(a):N(a)},x.dismissAll=e=>x.dismiss(void 0,e),x.remove=(e,t)=>{let a={type:4,toastId:e};t?b(t)(a):N(a)},x.removeAll=e=>x.remove(void 0,e),x.promise=(e,t,a)=>{let r=x.loading(t.loading,{...a,...null==a?void 0:a.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let o=t.success?f(t.success,e):void 0;return o?x.success(o,{id:r,...a,...null==a?void 0:a.success}):x.dismiss(r),e}).catch(e=>{let o=t.error?f(t.error,e):void 0;o?x.error(o,{id:r,...a,...null==a?void 0:a.error}):x.dismiss(r)}),e};var G=1e3,D=g`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,w=g`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,P=g`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,U=S("div")`
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
    animation: ${w} 0.15s ease-out forwards;
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
`,M=g`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,k=S("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${M} 1s linear infinite;
`,B=g`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,F=g`
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
}`,j=S("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${B} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${F} 0.2s ease-out forwards;
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
`,Y=S("div")`
  position: absolute;
`,V=S("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,$=g`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,W=S("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${$} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,z=({toast:e})=>{let{icon:t,type:a,iconTheme:r}=e;return void 0!==t?"string"==typeof t?o.createElement(W,null,t):t:"blank"===a?null:o.createElement(V,null,o.createElement(k,{...r}),"loading"!==a&&o.createElement(Y,null,"error"===a?o.createElement(U,{...r}):o.createElement(j,{...r})))},H=S("div")`
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
`,X=S("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,J=o.memo(({toast:e,position:t,style:a,children:r})=>{let s=e.height?((e,t)=>{let a=e.includes("top")?1:-1,[r,o]=I()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*a}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*a}%,-1px) scale(.6); opacity:0;}
`];return{animation:t?`${g(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${g(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},i=o.createElement(z,{toast:e}),n=o.createElement(X,{...e.ariaProps},f(e.message,e));return o.createElement(H,{className:e.className,style:{...s,...a,...e.style}},"function"==typeof r?r({icon:i,message:n}):o.createElement(o.Fragment,null,i,n))});r=o.createElement,c.p=void 0,_=r,p=void 0,m=void 0;var K=({id:e,className:t,style:a,onHeightUpdate:r,children:s})=>{let i=o.useCallback(t=>{if(t){let a=()=>{r(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return o.createElement("div",{ref:i,className:t,style:a},s)},Z=E`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,q=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:r,children:s,toasterId:i,containerStyle:n,containerClassName:l})=>{let{toasts:c,handlers:d}=((e,t="default")=>{let{toasts:a,pausedAt:r}=((e={},t=L)=>{let[a,r]=(0,o.useState)(O[t]||A),s=(0,o.useRef)(O[t]);(0,o.useEffect)(()=>(s.current!==O[t]&&r(O[t]),y.push([t,r]),()=>{let e=y.findIndex(([e])=>e===t);e>-1&&y.splice(e,1)}),[t]);let i=a.toasts.map(t=>{var a,r,o;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(a=e[t.type])?void 0:a.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||C[t.type],style:{...e.style,...null==(o=e[t.type])?void 0:o.style,...t.style}}});return{...a,toasts:i}})(e,t),s=(0,o.useRef)(new Map).current,i=(0,o.useCallback)((e,t=G)=>{if(s.has(e))return;let a=setTimeout(()=>{s.delete(e),n({type:4,toastId:e})},t);s.set(e,a)},[]);(0,o.useEffect)(()=>{if(r)return;let e=Date.now(),o=a.map(a=>{if(a.duration===1/0)return;let r=(a.duration||0)+a.pauseDuration-(e-a.createdAt);if(r<0){a.visible&&x.dismiss(a.id);return}return setTimeout(()=>x.dismiss(a.id,t),r)});return()=>{o.forEach(e=>e&&clearTimeout(e))}},[a,r,t]);let n=(0,o.useCallback)(b(t),[t]),l=(0,o.useCallback)(()=>{n({type:5,time:Date.now()})},[n]),c=(0,o.useCallback)((e,t)=>{n({type:1,toast:{id:e,height:t}})},[n]),d=(0,o.useCallback)(()=>{r&&n({type:6,time:Date.now()})},[r,n]),u=(0,o.useCallback)((e,t)=>{let{reverseOrder:r=!1,gutter:o=8,defaultPosition:s}=t||{},i=a.filter(t=>(t.position||s)===(e.position||s)&&t.height),n=i.findIndex(t=>t.id===e.id),l=i.filter((e,t)=>t<n&&e.visible).length;return i.filter(e=>e.visible).slice(...r?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+o,0)},[a]);return(0,o.useEffect)(()=>{a.forEach(e=>{if(e.dismissed)i(e.id,e.removeDelay);else{let t=s.get(e.id);t&&(clearTimeout(t),s.delete(e.id))}})},[a,i]),{toasts:a,handlers:{updateHeight:c,startPause:l,endPause:d,calculateOffset:u}}})(a,i);return o.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:l,onMouseEnter:d.startPause,onMouseLeave:d.endPause},c.map(a=>{let i,n,l=a.position||t,c=d.calculateOffset(a,{reverseOrder:e,gutter:r,defaultPosition:t}),u=(i=l.includes("top"),n=l.includes("center")?{justifyContent:"center"}:l.includes("right")?{justifyContent:"flex-end"}:{},{left:0,right:0,display:"flex",position:"absolute",transition:I()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${c*(i?1:-1)}px)`,...i?{top:0}:{bottom:0},...n});return o.createElement(K,{id:a.id,key:a.id,onHeightUpdate:d.updateHeight,className:a.visible?Z:"",style:u},"custom"===a.type?f(a.message,a):s?s(a):o.createElement(J,{toast:a,position:l}))}))};e.s(["Toaster",()=>q,"default",()=>x,"toast",()=>x],5766)},18566,(e,t,a)=>{t.exports=e.r(76562)},85012,e=>{"use strict";e.s(["BTN_CANCEL",0,"Cancel","BTN_CONTINUE",0,"Continue","BTN_DELETE_ACCOUNT",0,"Delete Account","BTN_EMAIL_VERIFY_FAILED",0,"Try Again","BTN_EMAIL_VERIFY_SUCCESS",0,"Go to Login","BTN_OTP_RESEND",0,"Resend Code","BTN_OTP_SEND",0,"Send Code","BTN_VERIFY_DOMAIN",0,"Verify Your Domain","BTN_VERIFY_DOMAIN_LOADING",0,"Saving...","CONDITION_OTP_SEND",0,"Sending...","CONDITION_OTP_VERIFY",0,"Verifying...","IMAGE_ALT",0,"no image","INPUT_PASSWORD",0,"password","INPUT_TEXT",0,"text","LABEL_CONFIRM_PASSWORD",0,"Confirm Password","LABEL_EMAIL",0,"Email","LABEL_LOADING",0,"Loading...","LABEL_LOADING_CITIES",0,"Loading Cities...","LABEL_LOADING_STATES",0,"Loading States...","LABEL_LOGOUT",0,"Logout","LABEL_NAME",0,"Name","LABEL_ORG_CITY",0,"City","LABEL_ORG_COUNTRY",0,"Country","LABEL_ORG_EMAIL",0,"Domain Mail ID","LABEL_ORG_NAME",0,"Organization Name","LABEL_ORG_SELECT_CITY",0,"Select City","LABEL_ORG_SELECT_COUNTRY",0,"Select Country","LABEL_ORG_SELECT_STATE",0,"Select State","LABEL_ORG_STATE",0,"State","LABEL_ORG_STEP_ACCOUNT",0,"Account Creation","LABEL_ORG_STEP_CATEGORY",0,"Organization Category","LABEL_ORG_STEP_DETAILS",0,"Organization Details","LABEL_PASSWORD",0,"Password","MSG_DELETED_YOUR_ACCOUNT",0,"Your account was deleted","MSG_DELETE_ACCOUNT",0,"Delete Account Permanently?","MSG_EMAIL_VERIFY_FAILED",0,"failed","MSG_EMAIL_VERIFY_LOADING",0,"loading","MSG_EMAIL_VERIFY_SUCCESS",0,"success","MSG_ERR_CATEGORY_MISSING",0,"Category missing.","MSG_ERR_FILL_ALL_FIELDS",0,"Fill all fields","MSG_ERR_PASSWORD_MISMATCH",0,"Passwords do not match","MSG_ERR_SIGNUP_FAILED",0,"Signup failed","MSG_GENERIC_ERROR",0,"Something went wrong. Please try again!","MSG_GOOGLE_LOGIN_FAILED",0,"Google Login Failed","MSG_GOOGLE_LOGIN_SUCCESS_USER",0,"Google Login Successful!","MSG_INVALID_CREDENTIALS",0,"Invalid credentials","MSG_LOGIN_FAILED",0,"Login Failed","MSG_LOGIN_SUCCESS_ORGANIZER",0,"Organizer Logged In Successfully!","MSG_LOGIN_SUCCESS_USER",0,"Login Successful!","MSG_NEW_OTP_FAILED_TO_SEND",0,"Failed to resend","MSG_NEW_OTP_SEND",0,"New code sent!","MSG_ORG_SELECT_COUNTRY",0,"Select country first","MSG_ORG_SELECT_STATE",0,"Select state first","MSG_OTP_INVALID",0,"Invalid code","MSG_OTP_SEND_EMAIL",0,"Code sent to your email","MSG_OTP_SEND_EMAIL_ERROR",0,"Email not found","MSG_OTP_VERIFIED",0,"Code verified!","MSG_PASSWORD_UPDATED_FAILED",0,"Failed to update password","MSG_PASSWORD_UPDATED_SUCCESS",0,"Password updated successfully","MSG_SIGNUP_SUCCESS",0,"Signup successfully!","MSG_VERIFY_EMAIL_SENT",0,"Link has been sent to your xyz.com domain mail id.\nPlease click and verify your account.","PH_CONFIRM_PASSWORD",0,"Re-enter your password","PH_NAME",0,"Enter your name","PH_ORG_EMAIL",0,"Enter your domain mail id","PH_PASSWORD",0,"Enter your password","PH_USER_EMAIL",0,"Enter your email","ROLE_ORGANIZER",0,"org","ROLE_USER",0,"user","STORAGE_TOKEN",0,"token","SUBTITLE_ORG_ACCOUNT_CREATION",0,"Add your domain mail id and set a password","SUBTITLE_ORG_DETAILS",0,"Provide your organization information","SUBTITLE_ORG_LOGIN",0,"Turn Ideas into Events — Let's Begin!","SUBTITLE_USER_LOGIN",0,"Please login your account","SUBTITLE_USER_SIGNUP",0,"Let's Create your account","SUB_TITLE_DELETE_ACCOUNT",0,"This will permanently delete your account and all data.","SUB_TITLE_DELETE_ACCOUNT_SUB_TEXT",0,"This action cannot be undone.","SUB_TITLE_DOMAIN_MAIL_VERIFY",0,"Link has been sent to your domain mail. Please verify your account.","SUB_TITLE_EMAIL_VERIFY",0,"Please wait while we verify your email…","SUB_TITLE_EMAIL_VERIFY_FAILED",0,"The verification link is invalid or has expired.Please request a new verification email.","SUB_TITLE_EMAIL_VERIFY_SUCCESS",0,"Your account has been successfully verified.You can now login to continue.","SUB_TITLE_ENTER_OTP",0,"Enter the 4-digit code sent to","SUB_TITLE_OTP_NOT_RECEIVE",0,"Didn’t receive the code?","SUB_TITLE_OTP_SEND",0,"No worries, we'll send you a code","SUB_TITLE_PASSWORD_UPDATE_SUCCESS",0,"Your password has been updated successfully","SUB_TITLE_SET_NEW_PASSWORD",0,"Must be at least 8 characters","TEXT_FORGOT_PASSWORD",0,"Forgot Password?","TEXT_NO_ACCOUNT",0,"Didn’t have an Account?","TEXT_SIGNIN",0,"Sign In","TEXT_SIGNUP",0,"Sign Up","TITLE_ALREADY_HAVE_ACCOUNT",0,"Already have an Account?","TITLE_EMAIL_VERIFY",0,"Verifying your account","TITLE_EMAIL_VERIFY_FAILED",0,"Verification Failed","TITLE_EMAIL_VERIFY_SUCCESS",0,"Account Verified","TITLE_ENTER_OTP",0,"Enter Code","TITLE_MANAGE_PAGE",0,"Manage Page","TITLE_ORG_ACCOUNT_CREATION",0,"Account Creation","TITLE_ORG_LOGIN_MAIN",0,"Host. Manage. Inspire.","TITLE_SET_NEW_PASSWORD",0,"Set New Password","TITLE_USER_LOGIN",0,"Welcome Back","TITLE_USER_SIGNUP",0,"Join us Now!!","TITLE_VERIFY_ACCOUNT",0,"Verify your Account"])},11985,e=>{"use strict";var t=e.i(43476),a=e.i(18566),r=e.i(71645),o=e.i(44127),s=e.i(85012),i=e.i(43560);function n(){let e=(0,a.useRouter)(),[n,l]=(0,r.useState)(!1),[c,d]=(0,r.useState)(!1),[u,E]=(0,r.useState)("U"),[_,p]=(0,r.useState)(!1),[m,g]=(0,r.useState)("");return((0,r.useEffect)(()=>{l(!0);let e=(0,o.getUserData)();e?.email&&(d(!0),g(e.email),E(e.email.charAt(0).toUpperCase()))},[]),n)?(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("nav",{className:"nav-container",children:[(0,t.jsxs)("div",{className:"nav-left",children:[(0,t.jsx)("img",{src:"/images/logo.png",alt:"logo",className:"nav-logo",onClick:()=>e.push("/")}),(0,t.jsx)("button",{className:"nav-explore",children:"Explore ▼"})]}),(0,t.jsxs)("div",{className:"nav-center",children:[(0,t.jsx)("div",{className:"nav-search-box",children:(0,t.jsx)("input",{type:"text",placeholder:"Search anything",className:"search-input"})}),(0,t.jsx)("button",{className:"nav-location-btn",children:i.LOCATION_ICON}),!c&&(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("button",{className:"nav-create",onClick:()=>{p(!1),e.push("/auth/user/login")},children:"Sign In"})})]}),c&&(0,t.jsxs)("div",{className:`nav-right ${_?"open":""}`,children:[(0,t.jsx)("button",{onClick:()=>{p(!1),document.cookie="token=; path=/; max-age=0",document.cookie="role=; path=/; max-age=0",localStorage.removeItem("token"),localStorage.removeItem("userData"),sessionStorage.clear(),e.replace("/")},className:"logout-btn",children:s.LABEL_LOGOUT}),(0,t.jsx)("button",{className:"nav-avatar-btn",onClick:()=>{p(!1),e.push("/dashboard")},children:(0,t.jsx)("div",{className:"nav-letter-avatar",children:u})})]}),(0,t.jsxs)("button",{className:`nav-hamburger ${_?"is-open":""}`,onClick:()=>p(!_),children:[(0,t.jsx)("span",{className:"bar"}),(0,t.jsx)("span",{className:"bar"}),(0,t.jsx)("span",{className:"bar"})]})]})}):null}function l({children:e}){let r=(0,a.usePathname)(),o=r.startsWith("/auth")||r.startsWith("/login")||r.startsWith("/signup");return(0,t.jsxs)(t.Fragment,{children:[!o&&(0,t.jsx)(n,{}),e]})}e.s(["default",()=>l],11985)},40773,e=>{"use strict";var t=e.i(43476),a=e.i(55487),r=e.i(5766),o=e.i(64645),s=e.i(84257);let i=(0,o.configureStore)({reducer:{auth:s.default}});function n({children:e}){return(0,t.jsxs)(a.Provider,{store:i,children:[(0,t.jsx)(r.Toaster,{position:"top-right"}),e]})}e.s(["default",()=>n],40773)},23679,e=>{"use strict";var t=e.i(43476),a=e.i(2358);function r(){let{loading:e}=(0,a.useLoading)();return e?(0,t.jsxs)("div",{className:"global-loader-overlay",children:[(0,t.jsx)("div",{className:"global-spinner"}),(0,t.jsx)("p",{children:"Loading..."})]}):null}e.s(["default",()=>r])}]);