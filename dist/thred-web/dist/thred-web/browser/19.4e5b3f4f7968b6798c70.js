(self.webpackChunkthred_web=self.webpackChunkthred_web||[]).push([[19],{68096:function(t){t.exports=function(t){function e(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var o={};return e.m=t,e.c=o,e.p="dist/",e(0)}([function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},r=(n(o(1)),o(6)),a=n(r),c=n(o(7)),s=n(o(8)),d=n(o(9)),u=n(o(10)),l=n(o(11)),f=n(o(14)),p=[],g=!1,m={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},v=function(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(g=!0),g)return p=(0,l.default)(p,m),(0,u.default)(p,m.once),p},b=function(){p=(0,f.default)(),v()};t.exports={init:function(t){m=i(m,t),p=(0,f.default)();var e=document.all&&!window.atob;return function(t){return!0===t||"mobile"===t&&d.default.mobile()||"phone"===t&&d.default.phone()||"tablet"===t&&d.default.tablet()||"function"==typeof t&&!0===t()}(m.disable)||e?void p.forEach(function(t,e){t.node.removeAttribute("data-aos"),t.node.removeAttribute("data-aos-easing"),t.node.removeAttribute("data-aos-duration"),t.node.removeAttribute("data-aos-delay")}):(m.disableMutationObserver||s.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),m.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",m.easing),document.querySelector("body").setAttribute("data-aos-duration",m.duration),document.querySelector("body").setAttribute("data-aos-delay",m.delay),"DOMContentLoaded"===m.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?v(!0):"load"===m.startEvent?window.addEventListener(m.startEvent,function(){v(!0)}):document.addEventListener(m.startEvent,function(){v(!0)}),window.addEventListener("resize",(0,c.default)(v,m.debounceDelay,!0)),window.addEventListener("orientationchange",(0,c.default)(v,m.debounceDelay,!0)),window.addEventListener("scroll",(0,a.default)(function(){(0,u.default)(p,m.once)},m.throttleDelay)),m.disableMutationObserver||s.default.ready("[data-aos]",b),p)},refresh:v,refreshHard:b}},function(t,e){},,,,,function(t,e){(function(e){"use strict";function o(t){var e=void 0===t?"undefined":i(t);return!!t&&("object"==e||"function"==e)}function n(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":i(t))||function(t){return!!t&&"object"==(void 0===t?"undefined":i(t))}(t)&&v.call(t)==c}(t))return a;if(o(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=o(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(s,"");var n=u.test(t);return n||l.test(t)?f(t.slice(2),n?2:8):d.test(t)?a:+t}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r="Expected a function",a=NaN,c="[object Symbol]",s=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,p="object"==(void 0===e?"undefined":i(e))&&e&&e.Object===Object&&e,g="object"==("undefined"==typeof self?"undefined":i(self))&&self&&self.Object===Object&&self,m=p||g||Function("return this")(),v=Object.prototype.toString,b=Math.max,h=Math.min,w=function(){return m.Date.now()};t.exports=function(t,e,i){var a=!0,c=!0;if("function"!=typeof t)throw new TypeError(r);return o(i)&&(a="leading"in i?!!i.leading:a,c="trailing"in i?!!i.trailing:c),function(t,e,i){function a(e){var o=f,n=p;return f=p=void 0,Z=e,m=t.apply(n,o)}function c(t){return Z=t,v=setTimeout(d,e),x?a(t):m}function s(t){var o=t-y;return void 0===y||o>=e||o<0||T&&t-Z>=g}function d(){var t=w();return s(t)?u(t):void(v=setTimeout(d,function(t){var o=e-(t-y);return T?h(o,g-(t-Z)):o}(t)))}function u(t){return v=void 0,k&&f?a(t):(f=p=void 0,m)}function l(){var t=w(),o=s(t);if(f=arguments,p=this,y=t,o){if(void 0===v)return c(y);if(T)return v=setTimeout(d,e),a(y)}return void 0===v&&(v=setTimeout(d,e)),m}var f,p,g,m,v,y,Z=0,x=!1,T=!1,k=!0;if("function"!=typeof t)throw new TypeError(r);return e=n(e)||0,o(i)&&(x=!!i.leading,g=(T="maxWait"in i)?b(n(i.maxWait)||0,e):g,k="trailing"in i?!!i.trailing:k),l.cancel=function(){void 0!==v&&clearTimeout(v),Z=0,f=y=p=v=void 0},l.flush=function(){return void 0===v?m:u(w())},l}(t,e,{leading:a,maxWait:e,trailing:c})}}).call(e,function(){return this}())},function(t,e){(function(e){"use strict";function o(t){var e=void 0===t?"undefined":i(t);return!!t&&("object"==e||"function"==e)}function n(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":i(t))||function(t){return!!t&&"object"==(void 0===t?"undefined":i(t))}(t)&&m.call(t)==a}(t))return r;if(o(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=o(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(c,"");var n=d.test(t);return n||u.test(t)?l(t.slice(2),n?2:8):s.test(t)?r:+t}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=NaN,a="[object Symbol]",c=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,f="object"==(void 0===e?"undefined":i(e))&&e&&e.Object===Object&&e,p="object"==("undefined"==typeof self?"undefined":i(self))&&self&&self.Object===Object&&self,g=f||p||Function("return this")(),m=Object.prototype.toString,v=Math.max,b=Math.min,h=function(){return g.Date.now()};t.exports=function(t,e,i){function r(e){var o=l,n=f;return l=f=void 0,y=e,g=t.apply(n,o)}function a(t){return y=t,m=setTimeout(s,e),Z?r(t):g}function c(t){var o=t-w;return void 0===w||o>=e||o<0||x&&t-y>=p}function s(){var t=h();return c(t)?d(t):void(m=setTimeout(s,function(t){var o=e-(t-w);return x?b(o,p-(t-y)):o}(t)))}function d(t){return m=void 0,T&&l?r(t):(l=f=void 0,g)}function u(){var t=h(),o=c(t);if(l=arguments,f=this,w=t,o){if(void 0===m)return a(w);if(x)return m=setTimeout(s,e),r(w)}return void 0===m&&(m=setTimeout(s,e)),g}var l,f,p,g,m,w,y=0,Z=!1,x=!1,T=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return e=n(e)||0,o(i)&&(Z=!!i.leading,p=(x="maxWait"in i)?v(n(i.maxWait)||0,e):p,T="trailing"in i?!!i.trailing:T),u.cancel=function(){void 0!==m&&clearTimeout(m),y=0,l=w=f=m=void 0},u.flush=function(){return void 0===m?g:d(h())},u}}).call(e,function(){return this}())},function(t,e){"use strict";function o(t){var e=void 0,n=void 0;for(e=0;e<t.length;e+=1){if((n=t[e]).dataset&&n.dataset.aos)return!0;if(n.children&&o(n.children))return!0}return!1}function n(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(t){t&&t.forEach(function(t){var e=Array.prototype.slice.call(t.addedNodes),n=Array.prototype.slice.call(t.removedNodes);if(o(e.concat(n)))return r()})}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){};e.default={isSupported:function(){return!!n()},ready:function(t,e){var o=window.document,a=new(n())(i);r=e,a.observe(o.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}}},function(t,e){"use strict";function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}(),i=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,r=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return n(t,[{key:"phone",value:function(){var t=o();return!(!i.test(t)&&!r.test(t.substr(0,4)))}},{key:"mobile",value:function(){var t=o();return!(!a.test(t)&&!c.test(t.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),t}();e.default=new s},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var o=window.pageYOffset,n=window.innerHeight;t.forEach(function(t,i){!function(t,e,o){var n=t.node.getAttribute("data-aos-once");e>t.position?t.node.classList.add("aos-animate"):void 0!==n&&("false"===n||!o&&"true"!==n)&&t.node.classList.remove("aos-animate")}(t,n+o,e)})}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){return t&&t.__esModule?t:{default:t}}(o(12));e.default=function(t,e){return t.forEach(function(t,o){t.node.classList.add("aos-init"),t.position=(0,n.default)(t.node,e.offset)}),t}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){return t&&t.__esModule?t:{default:t}}(o(13));e.default=function(t,e){var o=0,i=0,r=window.innerHeight,a={offset:t.getAttribute("data-aos-offset"),anchor:t.getAttribute("data-aos-anchor"),anchorPlacement:t.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(i=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(t=document.querySelectorAll(a.anchor)[0]),o=(0,n.default)(t).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":o+=t.offsetHeight/2;break;case"bottom-bottom":o+=t.offsetHeight;break;case"top-center":o+=r/2;break;case"bottom-center":o+=r/2+t.offsetHeight;break;case"center-center":o+=r/2+t.offsetHeight/2;break;case"top-top":o+=r;break;case"bottom-top":o+=t.offsetHeight+r;break;case"center-top":o+=t.offsetHeight/2+r}return a.anchorPlacement||a.offset||isNaN(e)||(i=e),o+i}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){for(var e=0,o=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)e+=t.offsetLeft-("BODY"!=t.tagName?t.scrollLeft:0),o+=t.offsetTop-("BODY"!=t.tagName?t.scrollTop:0),t=t.offsetParent;return{top:o,left:e}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return t=t||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(t,function(t){return{node:t}})}}])},55019:(t,e,o)=>{"use strict";o.r(e),o.d(e,{LandingModule:()=>b});var n=o(38583),i=o(37503),r=o(93738),a=o(79866),c=o(16304),s=o(68096),d=o(37716),u=o(80406),l=o(95987),f=o(39075),p=o(98458);let g=(()=>{class t{constructor(t,e,o,n){this.loadService=t,this._router=e,this.titleService=o,this.metaService=n}ngOnInit(){s.init(),this.addTags("Thred - Get Started","https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Resources%2Flanding_page.png?alt=media","Start your store in 30 seconds, free.","shopmythred.com")}addTags(t,e,o,n){this.metaService.updateTag({property:"og:title",content:t}),this.metaService.updateTag({property:"og:image",content:e}),this.metaService.updateTag({property:"og:url",content:n}),this.metaService.updateTag({property:"og:description",content:o}),this.titleService.setTitle(t),this.metaService.updateTag({property:"description",content:o})}route(t){var e=this;return(0,c.Z)(function*(){var o;t&&((yield e.loadService.authenticated())&&!(null===(o=yield e.loadService.isLoggedIn())||void 0===o?void 0:o.isAnonymous)?(e.loadService.myCallback=()=>{var t;i.O.storeInfo=JSON.parse(JSON.stringify(i.O.userInfo)),i.O.products=void 0,console.log(i.O.storeInfo),e._router.navigateByUrl((null===(t=i.O.storeInfo)||void 0===t?void 0:t.username)+"/my-store")},yield e.loadService.getCustomer()):e._router.navigateByUrl("thred/home"))})()}routeToHome(){var t,e;(null===(t=i.O.storeInfo)||void 0===t?void 0:t.username)&&this._router.navigateByUrl((null===(e=i.O.storeInfo)||void 0===e?void 0:e.username)+"/home")}getStarted(){window.scrollTo(0,0)}}return t.\u0275fac=function(e){return new(e||t)(d.Y36(u.J),d.Y36(l.F0),d.Y36(f.Dx),d.Y36(f.h_))},t.\u0275cmp=d.Xpm({type:t,selectors:[["app-landing"]],decls:90,vars:13,consts:[[1,"h-100","w-100"],[1,"animation-area"],[1,"box-area"],["role","button"],[1,"w-100","h-100","rounded-circle",2,"object-fit","contain","opacity","0.3","background-color","forestgreen",3,"src"],[1,"w-100","h-100","rounded-circle",2,"object-fit","contain","opacity","0.4","background-color","crimson",3,"src"],[1,"w-100","h-100","rounded-circle",2,"object-fit","contain","opacity","0.6","background-color","indianred",3,"src"],[1,"w-100","h-100","rounded-circle",2,"object-fit","contain","opacity","0.2","background-color","mediumpurple",3,"src"],[1,"w-100","h-100","rounded-circle",2,"object-fit","contain","opacity","0.25","background-color","white",3,"src"],[1,"w-100","h-100","rounded-circle",2,"object-fit","contain","opacity","0.45","background-color","turquoise",3,"src"],[1,"row","row-cols-1","justify-content-center","pb-2","h-100","w-100","mx-0"],[1,"text-center","text-light","fw-bolder","col","mt-5","mx-0","w-100",2,"font-size","xx-large","line-height","1.2em","text-shadow","2px 2px 4px #42424281"],[1,"col","mb-5","mt-2","mx-0","h-100","w-100"],["data-aos","flip-up","data-aos-duration","1500",1,"h-100","mx-auto",2,"width","fit-content"],[1,"card-body","p-2","pb-0"],[1,"text-center"],[1,"rounded",2,"overflow","hidden"],[3,"isLanding","signedIn"],[1,"card-footer","p-4","pt-0","pb-4","border-top-0","bg-transparent"],[1,"row","row-cols-2","row-cols-md-2","row-cols-lg-2","row-cols-xl-2","justify-content-start","pb-2","mx-auto","px-0","px-sm-5","h-100"],[1,"col","mb-5",2,"width","fit-content","max-width","800px"],["data-aos","fade-up-right","data-aos-duration","1500",1,"h-100","mx-auto","w-100","bg-transparent"],[1,"text-center","text-light","px-2"],[1,"rounded","w-100",2,"overflow","hidden"],[1,"rounded","w-100",2,"object-fit","contain",3,"src"],[1,"row","row-cols-2","row-cols-md-2","row-cols-lg-2","row-cols-xl-2","justify-content-end","pb-2","mx-auto","px-0","px-sm-5","h-100"],["data-aos","fade-up-left","data-aos-duration","1500",1,"h-100","mx-auto","w-100","bg-transparent"],["data-aos","fade-up-left","data-aos-duration","1500",1,"h-100","mx-auto","w-100"],[1,"card-body","p-2","pb-0","bg-transparent"],[1,"row","row-cols-2","row-cols-md-2","row-cols-lg-2","row-cols-xl-2","justify-content-start","pb-2","px-0","px-sm-5","mx-auto","h-100"],[1,"row","row-cols-2","row-cols-md-2","row-cols-lg-2","row-cols-xl-2","justify-content-center","pb-2","px-0","px-sm-5","mx-auto","h-100"],[1,"col","mb-5",2,"width","fit-content","max-width","100%"],["data-aos","fade-up","data-aos-duration","1500",1,"h-100","mx-auto","w-100","bg-transparent"],[1,"text-center","text-light"],["role","button",1,"d-flex","align-items-center","justify-content-center","w-100",2,"text-decoration","none","color","white",3,"click"],[1,"px-5","py-3","d-flex","align-items-center","justify-content-center","bg-dark","rounded-pill","w-100"]],template:function(t,e){1&t&&(d.TgZ(0,"div",0),d.TgZ(1,"div",1),d.TgZ(2,"ul",2),d.TgZ(3,"li"),d.TgZ(4,"a",3),d._UZ(5,"img",4),d.qZA(),d.qZA(),d.TgZ(6,"li"),d.TgZ(7,"a",3),d._UZ(8,"img",5),d.qZA(),d.qZA(),d.TgZ(9,"li"),d.TgZ(10,"a",3),d._UZ(11,"img",6),d.qZA(),d.qZA(),d.TgZ(12,"li"),d.TgZ(13,"a",3),d._UZ(14,"img",7),d.qZA(),d.qZA(),d.TgZ(15,"li"),d.TgZ(16,"a",3),d._UZ(17,"img",8),d.qZA(),d.qZA(),d.TgZ(18,"li"),d.TgZ(19,"a",3),d._UZ(20,"img",9),d.qZA(),d.qZA(),d.qZA(),d.TgZ(21,"div",10),d.TgZ(22,"h1",11),d._uU(23,"Join Thred, the world\u2019s fastest growing brand platform "),d.qZA(),d.TgZ(24,"div",12),d.TgZ(25,"div",13),d.TgZ(26,"div",14),d.TgZ(27,"div",15),d.TgZ(28,"div",16),d.TgZ(29,"app-login",17),d.NdJ("signedIn",function(t){return e.route(t)}),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d._UZ(30,"div",18),d.qZA(),d.qZA(),d.qZA(),d.TgZ(31,"div",19),d.TgZ(32,"div",20),d.TgZ(33,"div",21),d.TgZ(34,"div",14),d.TgZ(35,"div",22),d.TgZ(36,"h1",15),d._uU(37,"Sell online in 30 seconds"),d.qZA(),d.TgZ(38,"div",23),d._UZ(39,"img",24),d.qZA(),d.qZA(),d.qZA(),d._UZ(40,"div",18),d.qZA(),d.qZA(),d.qZA(),d.TgZ(41,"div",25),d.TgZ(42,"div",20),d.TgZ(43,"div",26),d.TgZ(44,"div",14),d.TgZ(45,"div",22),d.TgZ(46,"h1",15),d._uU(47,"Direct traffic to your online store"),d.qZA(),d.TgZ(48,"div",23),d._UZ(49,"img",24),d.qZA(),d.qZA(),d.qZA(),d._UZ(50,"div",18),d.qZA(),d.qZA(),d.qZA(),d.TgZ(51,"div",19),d.TgZ(52,"div",20),d.TgZ(53,"div",21),d.TgZ(54,"div",14),d.TgZ(55,"div",22),d.TgZ(56,"h1",15),d._uU(57,"Built in Design Tools"),d.qZA(),d.TgZ(58,"div",23),d._UZ(59,"img",24),d.qZA(),d.qZA(),d.qZA(),d._UZ(60,"div",18),d.qZA(),d.qZA(),d.qZA(),d.TgZ(61,"div",25),d.TgZ(62,"div",20),d.TgZ(63,"div",27),d.TgZ(64,"div",28),d.TgZ(65,"div",22),d.TgZ(66,"h1",15),d._uU(67,"A range of converting templates to choose from"),d.qZA(),d.TgZ(68,"div",23),d._UZ(69,"img",24),d.qZA(),d.TgZ(70,"div",23),d._UZ(71,"img",24),d.qZA(),d.qZA(),d.qZA(),d._UZ(72,"div",18),d.qZA(),d.qZA(),d.qZA(),d.TgZ(73,"div",29),d.TgZ(74,"div",20),d.TgZ(75,"div",21),d.TgZ(76,"div",14),d.TgZ(77,"div",22),d.TgZ(78,"h1",15),d._uU(79,"Full control over margins without storage costs."),d.qZA(),d.TgZ(80,"div",23),d._UZ(81,"img",24),d.qZA(),d.qZA(),d.qZA(),d._UZ(82,"div",18),d.qZA(),d.qZA(),d.qZA(),d.TgZ(83,"div",30),d.TgZ(84,"div",31),d.TgZ(85,"div",32),d.TgZ(86,"div",33),d.TgZ(87,"a",34),d.NdJ("click",function(){return e.getStarted()}),d.TgZ(88,"h2",35),d._uU(89,"Get Started"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA()),2&t&&(d.xp6(5),d.Q6J("src","assets/logo_transparent.png",d.LSH),d.xp6(3),d.Q6J("src","assets/logo_transparent.png",d.LSH),d.xp6(3),d.Q6J("src","assets/logo_transparent.png",d.LSH),d.xp6(3),d.Q6J("src","assets/logo_transparent.png",d.LSH),d.xp6(3),d.Q6J("src","assets/logo_transparent.png",d.LSH),d.xp6(3),d.Q6J("src","assets/logo_transparent.png",d.LSH),d.xp6(9),d.Q6J("isLanding",!0),d.xp6(10),d.Q6J("src","assets/landing_1.png",d.LSH),d.xp6(10),d.Q6J("src","assets/landing_2.png",d.LSH),d.xp6(10),d.Q6J("src","assets/landing_3.png",d.LSH),d.xp6(10),d.Q6J("src","assets/landing_4a.png",d.LSH),d.xp6(2),d.Q6J("src","assets/landing_4b.png",d.LSH),d.xp6(10),d.Q6J("src","assets/landing_5.png",d.LSH))},directives:[p.G],styles:[".animation-area[_ngcontent-%COMP%]{background:linear-gradient(270deg,#bae2fd,#74c7ee);height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}h1[_ngcontent-%COMP%]{font-family:montserrat;font-size:xx-large;line-height:1.2em;text-shadow:2px 2px 4px #42424281}.box-area[_ngcontent-%COMP%]{top:0;left:0;right:0;overflow:hidden}.box-area[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:fixed;display:block;list-style:none;width:25px;height:25px;object-fit:contain;animation:animate 20s linear infinite;bottom:-150px}.box-area[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child{left:86%;width:80px;height:80px;animation-delay:0s}.box-area[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2){left:12%;width:30px;height:30px;animation-delay:1.5s;animation-duration:20s}.box-area[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3){left:70%;width:100px;height:100px;animation-delay:5.5s}.box-area[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4){left:42%;width:150px;height:150px;animation-delay:0s;animation-duration:30s}.box-area[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5){left:65%;width:40px;height:40px;animation-delay:0s}.box-area[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(6){left:15%;width:110px;height:110px;animation-delay:7s}@keyframes animate{0%{transform:translateY(0) rotate(0deg);opacity:1}to{transform:translateY(-800px) rotate(1turn);opacity:0}}"]}),t})();var m=o(80107);const v=[{path:"",component:g}];let b=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.oAB({type:t,bootstrap:[g]}),t.\u0275inj=d.cJS({providers:[i.O],imports:[[n.ez,r.QW,m.r,a.ef,l.Bz.forChild(v)]]}),t})()}}]);