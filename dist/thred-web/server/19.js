exports.id=19,exports.ids=[19],exports.modules={68096:function(module){module.exports=function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=(o(n(1)),n(6)),u=o(a),s=o(n(7)),d=o(n(8)),p=o(n(9)),b=o(n(10)),y=o(n(11)),h=o(n(14)),w=[],k=!1,x={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},j=function(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(k=!0),k)return w=(0,y.default)(w,x),(0,b.default)(w,x.once),w},O=function(){w=(0,h.default)(),j()},M=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},S=function(e){return!0===e||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&!0===e()},_=function(e){x=i(x,e),w=(0,h.default)();var t=document.all&&!window.atob;return S(x.disable)||t?M():(x.disableMutationObserver||d.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),x.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",x.easing),document.querySelector("body").setAttribute("data-aos-duration",x.duration),document.querySelector("body").setAttribute("data-aos-delay",x.delay),"DOMContentLoaded"===x.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?j(!0):"load"===x.startEvent?window.addEventListener(x.startEvent,function(){j(!0)}):document.addEventListener(x.startEvent,function(){j(!0)}),window.addEventListener("resize",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,x.once)},x.throttleDelay)),x.disableMutationObserver||d.default.ready("[data-aos]",O),w)};e.exports={init:_,refresh:j,refreshHard:O}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(f,t),M?o(e):g}function a(e){var i=t-(e-w);return S?j(i,y-(e-k)):i}function c(e){var n=e-w;return void 0===w||n>=t||n<0||S&&e-k>=y}function f(){var e=O();return c(e)?d(e):void(h=setTimeout(f,a(e)))}function d(e){return h=void 0,_&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(f,t),o(w)}return void 0===h&&(h=setTimeout(f,t)),g}var b,v,y,g,h,w,k=0,M=!1,S=!1,_=!0;if("function"!=typeof e)throw new TypeError(s);return t=u(t)||0,i(n)&&(M=!!n.leading,y=(S="maxWait"in n)?x(u(n.maxWait)||0,t):y,_="trailing"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(s);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t=void 0===e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==(void 0===e?"undefined":c(e))}function a(e){return"symbol"==(void 0===e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return f;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?f:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s="Expected a function",f=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==(void 0===t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),k=Object.prototype.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(f,t),M?i(e):g}function u(e){var i=t-(e-w);return S?x(i,y-(e-O)):i}function s(e){var n=e-w;return void 0===w||n>=t||n<0||S&&e-O>=y}function f(){var e=j();return s(e)?d(e):void(h=setTimeout(f,u(e)))}function d(e){return h=void 0,_&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=s(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(f,t),i(w)}return void 0===h&&(h=setTimeout(f,t)),g}var b,v,y,g,h,w,O=0,M=!1,S=!1,_=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(M=!!n.leading,y=(S="maxWait"in n)?k(a(n.maxWait)||0,t):y,_="trailing"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m}function o(e){var t=void 0===e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==(void 0===e?"undefined":u(e))}function r(e){return"symbol"==(void 0===e?"undefined":u(e))||i(e)&&w.call(e)==f}function a(e){if("number"==typeof e)return e;if(r(e))return s;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?s:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",s=NaN,f="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==(void 0===t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),w=Object.prototype.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t=void 0,o=void 0;for(t=0;t<e.length;t+=1){if((o=e[t]).dataset&&o.dataset.aos)return!0;if(o.children&&n(o.children))return!0}return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(){return!!o()}function r(e,t){var n=window.document,r=new(o())(a);u=t,r.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function a(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),o=Array.prototype.slice.call(e.removedNodes);if(n(t.concat(o)))return u()})}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){};t.default={isSupported:i,ready:r}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new s},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):void 0!==o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(12)),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(13)),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})};t.default=n}])},55019:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LandingModule:()=>LandingModule});var common=__webpack_require__(38583),globals=__webpack_require__(37503),card=__webpack_require__(93738),ngx_spinner=__webpack_require__(79866),asyncToGenerator=__webpack_require__(16304),core=__webpack_require__(37716),aos=__webpack_require__(68096),load_service=__webpack_require__(56105),router=__webpack_require__(95987),app_component=__webpack_require__(55041),platform_browser=__webpack_require__(39075),ng_bootstrap=__webpack_require__(69517),login_component=__webpack_require__(98458);function LandingComponent_div_1_ng_template_4_Template(rf,ctx){1&rf&&(core.TgZ(0,"p",18),core._uU(1," We're the go-to! "),core.qZA(),core._uU(2," Did you know Thred has a growing community of over 30,000 brands? "))}function LandingComponent_div_1_ng_template_9_Template(rf,ctx){1&rf&&(core.TgZ(0,"p",18),core._uU(1," Download the Thred app for better design tools! "),core.qZA(),core._UZ(2,"img",19)),2&rf&&(core.xp6(2),core.Q6J("src","assets/landing_app_preview.png",core.LSH))}function LandingComponent_div_1_ng_template_14_Template(rf,ctx){1&rf&&(core.TgZ(0,"p",18),core._uU(1," Want to maximise your margins? "),core.qZA(),core._uU(2," Have full control over your profit margins with bulk-buying options. "))}function LandingComponent_div_1_ng_template_19_Template(rf,ctx){1&rf&&(core.TgZ(0,"p",18),core._uU(1," Be an early bird! "),core.qZA(),core._uU(2," Take advantage of Fast Fashion trends by launching lines 34.7x faster "))}function LandingComponent_div_1_ng_template_24_Template(rf,ctx){1&rf&&(core.TgZ(0,"p",18),core._uU(1," We got you! "),core.qZA(),core._uU(2," Most P.O.D services lack love and branding options. We give lots of both :) "))}function LandingComponent_div_1_ng_template_29_Template(rf,ctx){1&rf&&(core.TgZ(0,"p",18),core._uU(1," E-commerce has never been easier. "),core.qZA(),core._uU(2," An all in one store builder + inventory and customer fulfillment centre. That\u2019s Thred! "))}function LandingComponent_div_1_div_32_h1_2_Template(rf,ctx){1&rf&&(core.TgZ(0,"h1",41),core._uU(1,"Join Thred, The ultimate online store builder "),core.qZA())}function LandingComponent_div_1_div_32_div_3_Template(rf,ctx){if(1&rf){const _r21=core.EpF();core.TgZ(0,"div",42),core.TgZ(1,"div",43),core.TgZ(2,"div",28),core.TgZ(3,"div",30),core.TgZ(4,"div",44),core.TgZ(5,"app-login",45),core.NdJ("signedIn",function LandingComponent_div_1_div_32_div_3_Template_app_login_signedIn_5_listener($event){core.CHM(_r21);return core.oxw(3).route($event)}),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA()}if(2&rf){const ctx_r15=core.oxw(3);core.xp6(4),core.Udp("width",ctx_r15.myInnerHeight(),"px"),core.xp6(1),core.Q6J("isLanding",!0)("affiliate",ctx_r15.affiliate)}}function LandingComponent_div_1_div_32_h1_4_Template(rf,ctx){1&rf&&(core.TgZ(0,"h1",46),core._uU(1," Welcome Back! "),core.qZA())}function LandingComponent_div_1_div_32_div_5_Template(rf,ctx){if(1&rf){const _r23=core.EpF();core.TgZ(0,"div",42),core.TgZ(1,"div",47),core.TgZ(2,"div",28),core.TgZ(3,"div",48),core.TgZ(4,"a",49),core.NdJ("click",function LandingComponent_div_1_div_32_div_5_Template_a_click_4_listener(){core.CHM(_r23);return core.oxw(3).getStarted()}),core.TgZ(5,"h2",50),core._uU(6,"View My Store"),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA()}}function LandingComponent_div_1_div_32_div_61_Template(rf,ctx){if(1&rf){const _r25=core.EpF();core.TgZ(0,"div",48),core.TgZ(1,"a",49),core.NdJ("click",function LandingComponent_div_1_div_32_div_61_Template_a_click_1_listener(){core.CHM(_r25);return core.oxw(3).getStarted()}),core.TgZ(2,"h2",50),core._uU(3,"Get Started"),core.qZA(),core.qZA(),core.qZA()}}function LandingComponent_div_1_div_32_div_62_Template(rf,ctx){if(1&rf){const _r27=core.EpF();core.TgZ(0,"div",48),core.TgZ(1,"a",49),core.NdJ("click",function LandingComponent_div_1_div_32_div_62_Template_a_click_1_listener(){core.CHM(_r27);return core.oxw(3).getStarted()}),core.TgZ(2,"h2",50),core._uU(3,"View My Store"),core.qZA(),core.qZA(),core.qZA()}}function LandingComponent_div_1_div_32_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"div",20),core.TgZ(1,"div",21),core.YNc(2,LandingComponent_div_1_div_32_h1_2_Template,2,0,"h1",22),core.YNc(3,LandingComponent_div_1_div_32_div_3_Template,6,4,"div",23),core.YNc(4,LandingComponent_div_1_div_32_h1_4_Template,2,0,"h1",24),core.YNc(5,LandingComponent_div_1_div_32_div_5_Template,7,0,"div",23),core.qZA(),core.TgZ(6,"div",25),core.TgZ(7,"div",26),core.TgZ(8,"div",27),core.TgZ(9,"div",28),core.TgZ(10,"div",29),core.TgZ(11,"h1",30),core._uU(12,"Sell online in 30 seconds"),core.qZA(),core.TgZ(13,"div",31),core._UZ(14,"img",19),core.qZA(),core.qZA(),core.qZA(),core._UZ(15,"div",32),core.qZA(),core.qZA(),core.qZA(),core.TgZ(16,"div",33),core.TgZ(17,"div",26),core.TgZ(18,"div",34),core.TgZ(19,"div",28),core.TgZ(20,"div",29),core.TgZ(21,"h1",30),core._uU(22,"Direct traffic to your online store"),core.qZA(),core.TgZ(23,"div",31),core._UZ(24,"img",19),core.qZA(),core.qZA(),core.qZA(),core._UZ(25,"div",32),core.qZA(),core.qZA(),core.qZA(),core.TgZ(26,"div",25),core.TgZ(27,"div",26),core.TgZ(28,"div",27),core.TgZ(29,"div",28),core.TgZ(30,"div",29),core.TgZ(31,"h1",30),core._uU(32,"Built in Design Tools"),core.qZA(),core.TgZ(33,"div",31),core._UZ(34,"img",19),core.qZA(),core.qZA(),core.qZA(),core._UZ(35,"div",32),core.qZA(),core.qZA(),core.qZA(),core.TgZ(36,"div",33),core.TgZ(37,"div",26),core.TgZ(38,"div",35),core.TgZ(39,"div",36),core.TgZ(40,"div",29),core.TgZ(41,"h1",30),core._uU(42,"A range of converting templates to choose from"),core.qZA(),core.TgZ(43,"div",31),core._UZ(44,"img",19),core.qZA(),core.TgZ(45,"div",31),core._UZ(46,"img",19),core.qZA(),core.qZA(),core.qZA(),core._UZ(47,"div",32),core.qZA(),core.qZA(),core.qZA(),core.TgZ(48,"div",37),core.TgZ(49,"div",26),core.TgZ(50,"div",27),core.TgZ(51,"div",28),core.TgZ(52,"div",29),core.TgZ(53,"h1",30),core._uU(54,"Full control over margins without storage costs."),core.qZA(),core.TgZ(55,"div",31),core._UZ(56,"img",19),core.qZA(),core.qZA(),core.qZA(),core._UZ(57,"div",32),core.qZA(),core.qZA(),core.qZA(),core.TgZ(58,"div",38),core.TgZ(59,"div",39),core.TgZ(60,"div",34),core.YNc(61,LandingComponent_div_1_div_32_div_61_Template,4,0,"div",40),core.YNc(62,LandingComponent_div_1_div_32_div_62_Template,4,0,"div",40),core.qZA(),core.qZA(),core.qZA(),core.qZA()),2&rf){const ctx_r13=core.oxw(2);core.xp6(2),core.Q6J("ngIf",0==ctx_r13.signedIn),core.xp6(1),core.Q6J("ngIf",0==ctx_r13.signedIn),core.xp6(1),core.Q6J("ngIf",1==ctx_r13.signedIn),core.xp6(1),core.Q6J("ngIf",1==ctx_r13.signedIn),core.xp6(9),core.Q6J("src","assets/landing_1.png",core.LSH),core.xp6(10),core.Q6J("src","assets/landing_2.png",core.LSH),core.xp6(10),core.Q6J("src","assets/landing_3.png",core.LSH),core.xp6(10),core.Q6J("src","assets/landing_4a.png",core.LSH),core.xp6(2),core.Q6J("src","assets/landing_4b.png",core.LSH),core.xp6(10),core.Q6J("src","assets/landing_5.png",core.LSH),core.xp6(5),core.Q6J("ngIf",0==ctx_r13.signedIn),core.xp6(1),core.Q6J("ngIf",1==ctx_r13.signedIn)}}function LandingComponent_div_1_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"div",2),core.TgZ(1,"ul",3),core.TgZ(2,"li"),core.TgZ(3,"a",4),core.YNc(4,LandingComponent_div_1_ng_template_4_Template,3,0,"ng-template",null,5,core.W1O),core._UZ(6,"img",6),core.qZA(),core.qZA(),core.TgZ(7,"li"),core.TgZ(8,"a",4),core.YNc(9,LandingComponent_div_1_ng_template_9_Template,3,1,"ng-template",null,7,core.W1O),core._UZ(11,"img",8),core.qZA(),core.qZA(),core.TgZ(12,"li"),core.TgZ(13,"a",4),core.YNc(14,LandingComponent_div_1_ng_template_14_Template,3,0,"ng-template",null,9,core.W1O),core._UZ(16,"img",10),core.qZA(),core.qZA(),core.TgZ(17,"li"),core.TgZ(18,"a",4),core.YNc(19,LandingComponent_div_1_ng_template_19_Template,3,0,"ng-template",null,11,core.W1O),core._UZ(21,"img",12),core.qZA(),core.qZA(),core.TgZ(22,"li"),core.TgZ(23,"a",4),core.YNc(24,LandingComponent_div_1_ng_template_24_Template,3,0,"ng-template",null,13,core.W1O),core._UZ(26,"img",14),core.qZA(),core.qZA(),core.TgZ(27,"li"),core.TgZ(28,"a",4),core.YNc(29,LandingComponent_div_1_ng_template_29_Template,3,0,"ng-template",null,15,core.W1O),core._UZ(31,"img",16),core.qZA(),core.qZA(),core.qZA(),core.YNc(32,LandingComponent_div_1_div_32_Template,63,12,"div",17),core.qZA()),2&rf){const _r1=core.MAs(5),_r3=core.MAs(10),_r5=core.MAs(15),_r7=core.MAs(20),_r9=core.MAs(25),_r11=core.MAs(30),ctx_r0=core.oxw();core.xp6(3),core.Q6J("ngbTooltip",_r1),core.xp6(3),core.Q6J("src","assets/logo_transparent.png",core.LSH),core.xp6(2),core.Q6J("ngbTooltip",_r3),core.xp6(3),core.Q6J("src","assets/logo_transparent.png",core.LSH),core.xp6(2),core.Q6J("ngbTooltip",_r5),core.xp6(3),core.Q6J("src","assets/logo_transparent.png",core.LSH),core.xp6(2),core.Q6J("ngbTooltip",_r7),core.xp6(3),core.Q6J("src","assets/logo_transparent.png",core.LSH),core.xp6(2),core.Q6J("ngbTooltip",_r9),core.xp6(3),core.Q6J("src","assets/logo_transparent.png",core.LSH),core.xp6(2),core.Q6J("ngbTooltip",_r11),core.xp6(3),core.Q6J("src","assets/logo_transparent.png",core.LSH),core.xp6(1),core.Q6J("ngIf",null!=ctx_r0.signedIn&&null!=ctx_r0.affiliate)}}class LandingComponent{constructor(loadService,platformID,_router,router,rootComponent,titleService,metaService,cdr){this.loadService=loadService,this.platformID=platformID,this._router=_router,this.router=router,this.rootComponent=rootComponent,this.titleService=titleService,this.metaService=metaService,this.cdr=cdr,this.signedIn=void 0,this.affiliate=void 0}ngOnInit(){(0,common.NF)(this.platformID)&&(aos.init(),this.isSignedIn(),this.router.queryParams.subscribe(params=>{var _a;console.log(params),this.affiliate=null!==(_a=params.affiliate)&&void 0!==_a?_a:"",this.cdr.detectChanges(),console.log(this.affiliate)})),this.addTags("Thred - Get Started","https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Resources%2Flanding_page.png?alt=media","Start your store in 30 seconds, free.","shopmythred.com")}isBrowser(){return(0,common.NF)(this.platformID)}isSignedIn(){var _this=this;return(0,asyncToGenerator.Z)(function*(){var _a;(yield _this.loadService.authenticated())&&!(null===(_a=yield _this.loadService.isLoggedIn())||void 0===_a?void 0:_a.isAnonymous)?_this.signedIn=!0:_this.signedIn=!1,_this.cdr.detectChanges()})()}addTags(title,imgUrl,description,url){this.metaService.updateTag({property:"og:title",content:title}),this.metaService.updateTag({property:"og:image",content:imgUrl}),this.metaService.updateTag({property:"og:url",content:url}),this.metaService.updateTag({property:"og:description",content:description}),this.titleService.setTitle(title),this.metaService.updateTag({property:"description",content:description})}route(signedIn){var _this2=this;return(0,asyncToGenerator.Z)(function*(){var _a;signedIn?(yield _this2.loadService.authenticated())&&!(null===(_a=yield _this2.loadService.isLoggedIn())||void 0===_a?void 0:_a.isAnonymous)?(_this2.loadService.myCallback=()=>{globals.O.storeInfo=JSON.parse(JSON.stringify(globals.O.userInfo)),_this2.rootComponent.routeToProfile()},yield _this2.loadService.getCustomer()):window.location.href="shopmythred.com/thred/home":window.scrollTo(0,0)})()}myInnerHeight(){let height=window.screen.height,width=window.screen.width;return width<height?(console.log(window),.8*width):.8*height}routeToHome(){this.rootComponent.routeToHome()}getStarted(){this.signedIn?this.route(!0):window.scrollTo(0,0)}}LandingComponent.\u0275fac=function LandingComponent_Factory(t){return new(t||LandingComponent)(core.Y36(load_service.J),core.Y36(core.Lbi),core.Y36(router.F0),core.Y36(router.gz),core.Y36(app_component.y),core.Y36(platform_browser.Dx),core.Y36(platform_browser.h_),core.Y36(core.sBO))},LandingComponent.\u0275cmp=core.Xpm({type:LandingComponent,selectors:[["app-landing"]],decls:2,vars:1,consts:[[2,"height","100vh","position","relative","top","-30px"],["class","animation-area",4,"ngIf"],[1,"animation-area"],[1,"box-area"],["role","button",1,"w-100","h-100",3,"ngbTooltip"],["tipContent1",""],[1,"bubble1","rounded-circle",2,"object-fit","contain","opacity","0.5","background-color","rgb(5, 224, 97)",3,"src"],["tipContent2",""],[1,"bubble2","rounded-circle",2,"object-fit","contain","opacity","0.7","background-color","rgb(255, 83, 83)",3,"src"],["tipContent3",""],[1,"bubble3","rounded-circle",2,"object-fit","contain","opacity","0.8","background-color","rgb(231, 213, 44)",3,"src"],["tipContent4",""],[1,"bubble4","rounded-circle",2,"object-fit","contain","opacity","0.5","background-color","rgb(130, 93, 204)",3,"src"],["tipContent5",""],[1,"bubble5","rounded-circle",2,"object-fit","contain","opacity","0.7","background-color","white",3,"src"],["tipContent6",""],[1,"bubble6","rounded-circle",2,"object-fit","contain","opacity","0.45","background-color","rgb(60, 195, 219)",3,"src"],["class","mx-0 row h-100",4,"ngIf"],[1,"fw-bolder"],[1,"rounded","w-100",2,"object-fit","contain",3,"src"],[1,"mx-0","row","h-100"],[1,"row","row-cols-1","justify-content-center","pb-2","h-100","w-100","mx-0"],["class","text-center text-light fw-bolder col mt-5 mx-0 w-100","style","font-size: xx-large; line-height: 1.2em; text-shadow: 2px 2px 4px #42424281;",4,"ngIf"],["class","col mb-5 mt-2 mx-0 h-100 w-100",4,"ngIf"],["data-aos","fade-down","data-aos-duration","1500","class","text-center text-light fw-bolder col mt-5 mx-0 w-100","style","font-size: xx-large; line-height: 1.2em; text-shadow: 2px 2px 4px #42424281;",4,"ngIf"],[1,"row","row-cols-1","justify-content-start","pb-2","mx-auto","px-0","px-sm-5","h-100"],[1,"col","mb-5",2,"width","fit-content","max-width","800px"],["data-aos","fade-up-right","data-aos-duration","1500",1,"h-100","mx-auto","w-100","bg-transparent"],[1,"card-body","p-2","pb-0"],[1,"text-center","text-light","px-2"],[1,"text-center"],[1,"rounded","w-100",2,"overflow","hidden"],[1,"card-footer","p-4","pt-0","pb-4","border-top-0","bg-transparent"],[1,"row","row-cols-1","justify-content-end","pb-2","mx-auto","px-0","px-sm-5","h-100"],["data-aos","fade-up","data-aos-duration","1500",1,"h-100","mx-auto","w-100","bg-transparent"],["data-aos","fade-up","data-aos-duration","1500",1,"h-100","mx-auto","w-100"],[1,"card-body","p-2","pb-0","bg-transparent"],[1,"row","row-cols-1","justify-content-start","pb-2","px-0","px-sm-5","mx-auto","h-100"],[1,"row","row-cols-1","justify-content-center","pb-2","px-0","px-sm-5","mx-auto","h-100"],[1,"col","mb-5",2,"width","fit-content","max-width","100%"],["class","text-center text-light",4,"ngIf"],[1,"text-center","text-light","fw-bolder","col","mt-5","mx-0","w-100",2,"font-size","xx-large","line-height","1.2em","text-shadow","2px 2px 4px #42424281"],[1,"col","mb-5","mt-2","mx-0","h-100","w-100"],["data-aos","flip-up","data-aos-duration","1500",1,"h-100","mx-auto",2,"width","fit-content"],[1,"rounded","shadow-lg",2,"overflow","hidden"],[3,"isLanding","affiliate","signedIn"],["data-aos","fade-down","data-aos-duration","1500",1,"text-center","text-light","fw-bolder","col","mt-5","mx-0","w-100",2,"font-size","xx-large","line-height","1.2em","text-shadow","2px 2px 4px #42424281"],["data-aos","fade-down","data-aos-duration","1500",1,"h-100","mx-auto",2,"width","fit-content"],[1,"text-center","text-light"],["role","button",1,"d-flex","align-items-center","justify-content-center","w-100",2,"text-decoration","none","color","white",3,"click"],[1,"px-5","py-3","d-flex","align-items-center","justify-content-center","bg-danger","rounded","w-100"]],template:function LandingComponent_Template(rf,ctx){1&rf&&(core.TgZ(0,"div",0),core.YNc(1,LandingComponent_div_1_Template,33,13,"div",1),core.qZA()),2&rf&&(core.xp6(1),core.Q6J("ngIf",ctx.isBrowser()))},directives:[common.O5,ng_bootstrap._L,login_component.G],styles:[".animation-area[_ngcontent-%COMP%]{background:linear-gradient(270deg,#131313,#000);height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}h1[_ngcontent-%COMP%]{font-family:montserrat;font-size:xx-large;line-height:1.2em;text-shadow:2px 2px 4px #42424281}.box-area[_ngcontent-%COMP%]{top:0;left:0;right:0}.box-area[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:fixed;display:block;list-style:none;width:200px;height:200px;object-fit:contain;animation:animate 20s linear infinite;bottom:-300px}.bubble1[_ngcontent-%COMP%]{animation:rAnimate 20s linear infinite;animation-delay:0s;width:80px;height:80px}.bubble2[_ngcontent-%COMP%]{animation:rAnimate 20s linear infinite;animation-delay:1.5s;animation-duration:20s;width:30px;height:30px}.bubble3[_ngcontent-%COMP%]{animation:rAnimate 20s linear infinite;animation-delay:5.5s;width:100px;height:100px}.bubble4[_ngcontent-%COMP%]{animation:rAnimate 20s linear infinite;animation-delay:0s;animation-duration:30s;width:150px;height:150px}.bubble5[_ngcontent-%COMP%]{animation:rAnimate 20s linear infinite;animation-delay:0s;width:40px;height:40px}.bubble6[_ngcontent-%COMP%]{animation:rAnimate 20s linear infinite;animation-delay:7s;width:110px;height:110px}.box-area[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child{left:86%;animation-delay:0s}.box-area[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2){left:12%;animation-delay:1.5s;animation-duration:20s}.box-area[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3){left:70%;animation-delay:5.5s}.box-area[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4){left:42%;animation-delay:0s;animation-duration:30s}.box-area[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5){left:65%;animation-delay:0s}.box-area[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(6){left:15%;animation-delay:7s}@keyframes animate{0%{transform:translateY(0);opacity:1}to{transform:translateY(-800px);opacity:0}}@keyframes rAnimate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}"]});var login_module=__webpack_require__(80107);const routes=[{path:"",component:LandingComponent}];class LandingModule{}LandingModule.\u0275fac=function LandingModule_Factory(t){return new(t||LandingModule)},LandingModule.\u0275mod=core.oAB({type:LandingModule,bootstrap:[LandingComponent]}),LandingModule.\u0275inj=core.cJS({providers:[globals.O],imports:[[common.ez,card.QW,login_module.r,ng_bootstrap.IJ,ngx_spinner.ef,router.Bz.forChild(routes)]]})}};