var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=745,exports.ids=[745],exports.modules={68096:function(module){module.exports=function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}__name(t,"t");var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e2){return e2&&e2.__esModule?e2:{default:e2}}__name(o,"o");var i=Object.assign||function(e2){for(var t2=1;t2<arguments.length;t2++){var n2=arguments[t2];for(var o2 in n2)Object.prototype.hasOwnProperty.call(n2,o2)&&(e2[o2]=n2[o2])}return e2},a=(o(n(1)),n(6)),u=o(a),s=o(n(7)),d=o(n(8)),p=o(n(9)),b=o(n(10)),y=o(n(11)),h=o(n(14)),w=[],k=!1,x={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},j=__name(function(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(k=!0),k)return w=(0,y.default)(w,x),(0,b.default)(w,x.once),w},"j"),O=__name(function(){w=(0,h.default)(),j()},"O"),M=__name(function(){w.forEach(function(e2,t2){e2.node.removeAttribute("data-aos"),e2.node.removeAttribute("data-aos-easing"),e2.node.removeAttribute("data-aos-duration"),e2.node.removeAttribute("data-aos-delay")})},"M"),S=__name(function(e2){return!0===e2||"mobile"===e2&&p.default.mobile()||"phone"===e2&&p.default.phone()||"tablet"===e2&&p.default.tablet()||"function"==typeof e2&&!0===e2()},"S"),_=__name(function(e2){x=i(x,e2),w=(0,h.default)();var t2=document.all&&!window.atob;return S(x.disable)||t2?M():(x.disableMutationObserver||d.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),x.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",x.easing),document.querySelector("body").setAttribute("data-aos-duration",x.duration),document.querySelector("body").setAttribute("data-aos-delay",x.delay),"DOMContentLoaded"===x.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?j(!0):"load"===x.startEvent?window.addEventListener(x.startEvent,function(){j(!0)}):document.addEventListener(x.startEvent,function(){j(!0)}),window.addEventListener("resize",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,x.once)},x.throttleDelay)),x.disableMutationObserver||d.default.ready("[data-aos]",O),w)},"_");e.exports={init:_,refresh:j,refreshHard:O}},function(e,t){},,,,,function(e,t){(function(t2){"use strict";function n(e2,t3,n2){function o2(t4){var n3=b2,o3=v2;return b2=v2=void 0,k2=t4,g2=e2.apply(o3,n3)}function r2(e3){return k2=e3,h2=setTimeout(f2,t3),M?o2(e3):g2}function a2(e3){var i2=t3-(e3-w2);return S?j(i2,y2-(e3-k2)):i2}function c2(e3){var n3=e3-w2;return void 0===w2||n3>=t3||n3<0||S&&e3-k2>=y2}function f2(){var e3=O();return c2(e3)?d2(e3):void(h2=setTimeout(f2,a2(e3)))}function d2(e3){return h2=void 0,_&&b2?o2(e3):(b2=v2=void 0,g2)}function l2(){void 0!==h2&&clearTimeout(h2),k2=0,b2=w2=v2=h2=void 0}function p2(){return void 0===h2?g2:d2(O())}function m2(){var e3=O(),n3=c2(e3);if(b2=arguments,v2=this,w2=e3,n3){if(void 0===h2)return r2(w2);if(S)return h2=setTimeout(f2,t3),o2(w2)}return void 0===h2&&(h2=setTimeout(f2,t3)),g2}__name(o2,"o"),__name(r2,"r"),__name(a2,"a"),__name(c2,"c"),__name(f2,"f"),__name(d2,"d"),__name(l2,"l"),__name(p2,"p"),__name(m2,"m");var b2,v2,y2,g2,h2,w2,k2=0,M=!1,S=!1,_=!0;if("function"!=typeof e2)throw new TypeError(s);return t3=u(t3)||0,i(n2)&&(M=!!n2.leading,y2=(S="maxWait"in n2)?x(u(n2.maxWait)||0,t3):y2,_="trailing"in n2?!!n2.trailing:_),m2.cancel=l2,m2.flush=p2,m2}function o(e2,t3,o2){var r2=!0,a2=!0;if("function"!=typeof e2)throw new TypeError(s);return i(o2)&&(r2="leading"in o2?!!o2.leading:r2,a2="trailing"in o2?!!o2.trailing:a2),n(e2,t3,{leading:r2,maxWait:t3,trailing:a2})}function i(e2){var t3=void 0===e2?"undefined":c(e2);return!!e2&&("object"==t3||"function"==t3)}function r(e2){return!!e2&&"object"==(void 0===e2?"undefined":c(e2))}function a(e2){return"symbol"==(void 0===e2?"undefined":c(e2))||r(e2)&&k.call(e2)==d}function u(e2){if("number"==typeof e2)return e2;if(a(e2))return f;if(i(e2)){var t3="function"==typeof e2.valueOf?e2.valueOf():e2;e2=i(t3)?t3+"":t3}if("string"!=typeof e2)return 0===e2?e2:+e2;e2=e2.replace(l,"");var n2=m.test(e2);return n2||b.test(e2)?v(e2.slice(2),n2?2:8):p.test(e2)?f:+e2}__name(n,"n"),__name(o,"o"),__name(i,"i"),__name(r,"r"),__name(a,"a"),__name(u,"u");var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e2){return typeof e2}:function(e2){return e2&&"function"==typeof Symbol&&e2.constructor===Symbol&&e2!==Symbol.prototype?"symbol":typeof e2},s="Expected a function",f=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==(void 0===t2?"undefined":c(t2))&&t2&&t2.Object===Object&&t2,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),k=Object.prototype.toString,x=Math.max,j=Math.min,O=__name(function(){return h.Date.now()},"O");e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t2){"use strict";function n(e2,t3,n2){function i2(t4){var n3=b2,o2=v2;return b2=v2=void 0,O=t4,g2=e2.apply(o2,n3)}function r2(e3){return O=e3,h2=setTimeout(f2,t3),M?i2(e3):g2}function u2(e3){var i3=t3-(e3-w2);return S?x(i3,y2-(e3-O)):i3}function s2(e3){var n3=e3-w2;return void 0===w2||n3>=t3||n3<0||S&&e3-O>=y2}function f2(){var e3=j();return s2(e3)?d2(e3):void(h2=setTimeout(f2,u2(e3)))}function d2(e3){return h2=void 0,_&&b2?i2(e3):(b2=v2=void 0,g2)}function l2(){void 0!==h2&&clearTimeout(h2),O=0,b2=w2=v2=h2=void 0}function p2(){return void 0===h2?g2:d2(j())}function m2(){var e3=j(),n3=s2(e3);if(b2=arguments,v2=this,w2=e3,n3){if(void 0===h2)return r2(w2);if(S)return h2=setTimeout(f2,t3),i2(w2)}return void 0===h2&&(h2=setTimeout(f2,t3)),g2}__name(i2,"i"),__name(r2,"r"),__name(u2,"u"),__name(s2,"s"),__name(f2,"f"),__name(d2,"d"),__name(l2,"l"),__name(p2,"p"),__name(m2,"m");var b2,v2,y2,g2,h2,w2,O=0,M=!1,S=!1,_=!0;if("function"!=typeof e2)throw new TypeError(c);return t3=a(t3)||0,o(n2)&&(M=!!n2.leading,y2=(S="maxWait"in n2)?k(a(n2.maxWait)||0,t3):y2,_="trailing"in n2?!!n2.trailing:_),m2.cancel=l2,m2.flush=p2,m2}function o(e2){var t3=void 0===e2?"undefined":u(e2);return!!e2&&("object"==t3||"function"==t3)}function i(e2){return!!e2&&"object"==(void 0===e2?"undefined":u(e2))}function r(e2){return"symbol"==(void 0===e2?"undefined":u(e2))||i(e2)&&w.call(e2)==f}function a(e2){if("number"==typeof e2)return e2;if(r(e2))return s;if(o(e2)){var t3="function"==typeof e2.valueOf?e2.valueOf():e2;e2=o(t3)?t3+"":t3}if("string"!=typeof e2)return 0===e2?e2:+e2;e2=e2.replace(d,"");var n2=p.test(e2);return n2||m.test(e2)?b(e2.slice(2),n2?2:8):l.test(e2)?s:+e2}__name(n,"n"),__name(o,"o"),__name(i,"i"),__name(r,"r"),__name(a,"a");var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e2){return typeof e2}:function(e2){return e2&&"function"==typeof Symbol&&e2.constructor===Symbol&&e2!==Symbol.prototype?"symbol":typeof e2},c="Expected a function",s=NaN,f="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==(void 0===t2?"undefined":u(t2))&&t2&&t2.Object===Object&&t2,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),w=Object.prototype.toString,k=Math.max,x=Math.min,j=__name(function(){return g.Date.now()},"j");e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e2){var t2=void 0,o2=void 0;for(t2=0;t2<e2.length;t2+=1)if((o2=e2[t2]).dataset&&o2.dataset.aos||o2.children&&n(o2.children))return!0;return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(){return!!o()}function r(e2,t2){var n2=window.document,r2=new(o())(a);u=t2,r2.observe(n2.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function a(e2){e2&&e2.forEach(function(e3){var t2=Array.prototype.slice.call(e3.addedNodes),o2=Array.prototype.slice.call(e3.removedNodes);if(n(t2.concat(o2)))return u()})}__name(n,"n"),__name(o,"o"),__name(i,"i"),__name(r,"r"),__name(a,"a"),Object.defineProperty(t,"__esModule",{value:!0});var u=__name(function(){},"u");t.default={isSupported:i,ready:r}},function(e,t){"use strict";function n(e2,t2){if(!(e2 instanceof t2))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}__name(n,"n"),__name(o,"o"),Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e2(e3,t2){for(var n2=0;n2<t2.length;n2++){var o2=t2[n2];o2.enumerable=o2.enumerable||!1,o2.configurable=!0,"value"in o2&&(o2.writable=!0),Object.defineProperty(e3,o2.key,o2)}}return __name(e2,"e"),function(t2,n2,o2){return n2&&e2(t2.prototype,n2),o2&&e2(t2,o2),t2}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=function(){function e2(){n(this,e2)}return __name(e2,"e"),i(e2,[{key:"phone",value:function(){var e3=o();return!(!r.test(e3)&&!a.test(e3.substr(0,4)))}},{key:"mobile",value:function(){var e3=o();return!(!u.test(e3)&&!c.test(e3.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e2}();t.default=new s},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=__name(function(e2,t2,n2){var o2=e2.node.getAttribute("data-aos-once");t2>e2.position?e2.node.classList.add("aos-animate"):void 0!==o2&&("false"===o2||!n2&&"true"!==o2)&&e2.node.classList.remove("aos-animate")},"n"),o=__name(function(e2,t2){var o2=window.pageYOffset,i=window.innerHeight;e2.forEach(function(e3,r){n(e3,i+o2,t2)})},"o");t.default=o},function(e,t,n){"use strict";function o(e2){return e2&&e2.__esModule?e2:{default:e2}}__name(o,"o"),Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(12)),a=__name(function(e2,t2){return e2.forEach(function(e3,n2){e3.node.classList.add("aos-init"),e3.position=(0,r.default)(e3.node,t2.offset)}),e2},"a");t.default=a},function(e,t,n){"use strict";function o(e2){return e2&&e2.__esModule?e2:{default:e2}}__name(o,"o"),Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(13)),a=__name(function(e2,t2){var n2=0,o2=0,i2=window.innerHeight,a2={offset:e2.getAttribute("data-aos-offset"),anchor:e2.getAttribute("data-aos-anchor"),anchorPlacement:e2.getAttribute("data-aos-anchor-placement")};switch(a2.offset&&!isNaN(a2.offset)&&(o2=parseInt(a2.offset)),a2.anchor&&document.querySelectorAll(a2.anchor)&&(e2=document.querySelectorAll(a2.anchor)[0]),n2=(0,r.default)(e2).top,a2.anchorPlacement){case"top-bottom":break;case"center-bottom":n2+=e2.offsetHeight/2;break;case"bottom-bottom":n2+=e2.offsetHeight;break;case"top-center":n2+=i2/2;break;case"bottom-center":n2+=i2/2+e2.offsetHeight;break;case"center-center":n2+=i2/2+e2.offsetHeight/2;break;case"top-top":n2+=i2;break;case"bottom-top":n2+=e2.offsetHeight+i2;break;case"center-top":n2+=e2.offsetHeight/2+i2}return a2.anchorPlacement||a2.offset||isNaN(t2)||(o2=t2),n2+o2},"a");t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=__name(function(e2){for(var t2=0,n2=0;e2&&!isNaN(e2.offsetLeft)&&!isNaN(e2.offsetTop);)t2+=e2.offsetLeft-("BODY"!=e2.tagName?e2.scrollLeft:0),n2+=e2.offsetTop-("BODY"!=e2.tagName?e2.scrollTop:0),e2=e2.offsetParent;return{top:n2,left:t2}},"n");t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=__name(function(e2){return e2=e2||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e2,function(e3){return{node:e3}})},"n");t.default=n}])},90745:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LandingModule:()=>LandingModule});var common=__webpack_require__(11048),globals=__webpack_require__(37503),card=__webpack_require__(38182),ngx_spinner=__webpack_require__(30427),asyncToGenerator=__webpack_require__(8239),core=__webpack_require__(89724),aos=__webpack_require__(68096),load_service=__webpack_require__(7478),router=__webpack_require__(6609),app_component=__webpack_require__(59157),platform_browser=__webpack_require__(14800),ng_bootstrap=__webpack_require__(77520),login_component=__webpack_require__(98458);function LandingComponent_div_1_ng_template_4_Template(rf,ctx){1&rf&&(core.TgZ(0,"p",19),core._uU(1," We're the go-to! "),core.qZA(),core._uU(2," Did you know Thred has a growing community of over 30,000 brands? "))}function LandingComponent_div_1_ng_template_9_Template(rf,ctx){1&rf&&(core.TgZ(0,"p",19),core._uU(1," Download the Thred app for better design tools! "),core.qZA(),core._UZ(2,"img",20)),2&rf&&(core.xp6(2),core.Q6J("src","assets/landing_app_preview.png",core.LSH))}function LandingComponent_div_1_ng_template_14_Template(rf,ctx){1&rf&&(core.TgZ(0,"p",19),core._uU(1," Want to maximise your margins? "),core.qZA(),core._uU(2," Have full control over your profit margins with bulk-buying options. "))}function LandingComponent_div_1_ng_template_19_Template(rf,ctx){1&rf&&(core.TgZ(0,"p",19),core._uU(1," Be an early bird! "),core.qZA(),core._uU(2," Take advantage of Fast Fashion trends by launching lines 34.7x faster "))}function LandingComponent_div_1_ng_template_24_Template(rf,ctx){1&rf&&(core.TgZ(0,"p",19),core._uU(1," We got you! "),core.qZA(),core._uU(2," Most P.O.D services lack love and branding options. We give lots of both :) "))}function LandingComponent_div_1_ng_template_29_Template(rf,ctx){1&rf&&(core.TgZ(0,"p",19),core._uU(1," E-commerce has never been easier. "),core.qZA(),core._uU(2," An all in one store builder + inventory and customer fulfillment centre. That\u2019s Thred! "))}function LandingComponent_div_1_div_32_h1_2_Template(rf,ctx){1&rf&&(core.TgZ(0,"h1",53),core._uU(1,"Join Thred, The ultimate online store builder "),core.qZA())}function LandingComponent_div_1_div_32_div_3_Template(rf,ctx){if(1&rf){const _r21=core.EpF();core.TgZ(0,"div",54),core.TgZ(1,"div",55),core.TgZ(2,"div",29),core.TgZ(3,"div",31),core.TgZ(4,"div",56),core.TgZ(5,"app-login",57),core.NdJ("signedIn",__name(function($event){return core.CHM(_r21),core.oxw(3).route($event)},"LandingComponent_div_1_div_32_div_3_Template_app_login_signedIn_5_listener")),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA()}if(2&rf){const ctx_r15=core.oxw(3);core.xp6(4),core.Udp("width",ctx_r15.myInnerHeight(),"px"),core.xp6(1),core.Q6J("isLanding",!0)("affiliate",ctx_r15.affiliate)}}function LandingComponent_div_1_div_32_h1_4_Template(rf,ctx){1&rf&&(core.TgZ(0,"h1",58),core._uU(1," Welcome Back! "),core.qZA())}function LandingComponent_div_1_div_32_div_5_Template(rf,ctx){if(1&rf){const _r23=core.EpF();core.TgZ(0,"div",54),core.TgZ(1,"div",59),core.TgZ(2,"div",29),core.TgZ(3,"div",60),core.TgZ(4,"a",61),core.NdJ("click",__name(function(){return core.CHM(_r23),core.oxw(3).getStarted()},"LandingComponent_div_1_div_32_div_5_Template_a_click_4_listener")),core.TgZ(5,"h2",62),core._uU(6,"VIEW MY STORE"),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA()}}function LandingComponent_div_1_div_32_div_119_Template(rf,ctx){if(1&rf){const _r25=core.EpF();core.TgZ(0,"div",60),core.TgZ(1,"a",61),core.NdJ("click",__name(function(){return core.CHM(_r25),core.oxw(3).getStarted()},"LandingComponent_div_1_div_32_div_119_Template_a_click_1_listener")),core.TgZ(2,"h2",62),core._uU(3,"LAUNCH STORE"),core.qZA(),core.qZA(),core.qZA()}}function LandingComponent_div_1_div_32_div_120_Template(rf,ctx){if(1&rf){const _r27=core.EpF();core.TgZ(0,"div",60),core.TgZ(1,"a",61),core.NdJ("click",__name(function(){return core.CHM(_r27),core.oxw(3).getStarted()},"LandingComponent_div_1_div_32_div_120_Template_a_click_1_listener")),core.TgZ(2,"h2",62),core._uU(3,"VIEW MY STORE"),core.qZA(),core.qZA(),core.qZA()}}function LandingComponent_div_1_div_32_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"div",21),core.TgZ(1,"div",22),core.YNc(2,LandingComponent_div_1_div_32_h1_2_Template,2,0,"h1",23),core.YNc(3,LandingComponent_div_1_div_32_div_3_Template,6,4,"div",24),core.YNc(4,LandingComponent_div_1_div_32_h1_4_Template,2,0,"h1",25),core.YNc(5,LandingComponent_div_1_div_32_div_5_Template,7,0,"div",24),core.qZA(),core.TgZ(6,"div",26),core.TgZ(7,"div",27),core.TgZ(8,"div",28),core.TgZ(9,"div",29),core.TgZ(10,"div",30),core.TgZ(11,"h1",31),core._uU(12,"Sell online in 30 seconds"),core.qZA(),core.TgZ(13,"div",32),core.TgZ(14,"div",33),core._UZ(15,"img",20),core.qZA(),core.TgZ(16,"p",34),core.TgZ(17,"b",35),core._uU(18," Quickly start & scale your store "),core.qZA(),core._UZ(19,"br"),core._UZ(20,"br"),core._uU(21," Choose between a wide selection of templates that best reflects your brand identity. "),core._UZ(22,"br"),core._UZ(23,"br"),core._uU(24," Tell each piece\u2019s story in the product description and \u2018about' page. "),core._UZ(25,"br"),core._UZ(26,"br"),core._uU(27," You owe your customers an unforgettable experience. "),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core._UZ(28,"div",36),core.qZA(),core.qZA(),core.qZA(),core.TgZ(29,"div",37),core.TgZ(30,"div",27),core.TgZ(31,"div",38),core.TgZ(32,"div",29),core.TgZ(33,"div",30),core.TgZ(34,"h1",31),core._uU(35,"Direct traffic to your store"),core.qZA(),core.TgZ(36,"div",39),core.TgZ(37,"div",40),core.TgZ(38,"p",41),core.TgZ(39,"b",35),core._uU(40," Share your brand "),core.qZA(),core._UZ(41,"br"),core._UZ(42,"br"),core._uU(43," Use social media posts on Facebook, Instagram, Twitter, Tiktok & Etsy to grow your brand presence on the internet. "),core._UZ(44,"br"),core._UZ(45,"br"),core._uU(46," You can either grow a brand organically by posting daily, engaging your audience OR via paid ads on these platforms. "),core._UZ(47,"br"),core._UZ(48,"br"),core._uU(49," We give you the mansion on the internet, it\u2019s your turn to throw the party. "),core.qZA(),core.qZA(),core.TgZ(50,"div",42),core._UZ(51,"img",20),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core._UZ(52,"div",36),core.qZA(),core.qZA(),core.qZA(),core.TgZ(53,"div",43),core.TgZ(54,"div",27),core.TgZ(55,"div",28),core.TgZ(56,"div",29),core.TgZ(57,"div",30),core.TgZ(58,"h1",31),core._uU(59,"Built in Design Tools"),core.qZA(),core.TgZ(60,"div",32),core.TgZ(61,"div",33),core._UZ(62,"img",20),core.qZA(),core.TgZ(63,"p",34),core.TgZ(64,"b",35),core._uU(65," Designed to sell. "),core.qZA(),core._UZ(66,"br"),core._UZ(67,"br"),core._uU(68," Use our online design tools or the more expansive Thred App design tools to create masterful pieces of work for you to display on your store. "),core._UZ(69,"br"),core._UZ(70,"br"),core._uU(71," Thred makes it easy to create, design and sell. "),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core._UZ(72,"div",36),core.qZA(),core.qZA(),core.qZA(),core.TgZ(73,"div",37),core.TgZ(74,"div",27),core.TgZ(75,"div",44),core.TgZ(76,"div",45),core.TgZ(77,"div",30),core.TgZ(78,"h1",31),core._uU(79,"A range of converting templates to choose from"),core.qZA(),core.TgZ(80,"div",46),core.TgZ(81,"div",47),core.TgZ(82,"p",41),core.TgZ(83,"b",35),core._uU(84," Catered to success "),core.qZA(),core._UZ(85,"br"),core._UZ(86,"br"),core._uU(87," Choose from a list of 20 themes to best compliment your store. "),core._UZ(88,"br"),core._UZ(89,"br"),core._uU(90," We\u2019ve re-engineered the top converting shopify stores and made their structures, color ways and apps available to you at no additional cost. Enjoy! "),core.qZA(),core.qZA(),core.TgZ(91,"div",42),core._UZ(92,"img",20),core.qZA(),core.TgZ(93,"div",48),core._UZ(94,"img",20),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core._UZ(95,"div",36),core.qZA(),core.qZA(),core.qZA(),core.TgZ(96,"div",49),core.TgZ(97,"div",27),core.TgZ(98,"div",28),core.TgZ(99,"div",29),core.TgZ(100,"div",30),core.TgZ(101,"h1",31),core._uU(102,"Full control over margins without storage costs."),core.qZA(),core.TgZ(103,"div",32),core.TgZ(104,"div",33),core._UZ(105,"img",20),core.qZA(),core.TgZ(106,"p",34),core.TgZ(107,"b",35),core._uU(108," Pricing, your way. "),core.qZA(),core._UZ(109,"br"),core._UZ(110,"br"),core._uU(111," Purchase in bulk and have full control over your margins. Don\u2019t worry about storage or fulfillment ever again! "),core._UZ(112,"br"),core._UZ(113,"br"),core._uU(114," 3x your starting margins on most products. "),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core._UZ(115,"div",36),core.qZA(),core.qZA(),core.qZA(),core.TgZ(116,"div",50),core.TgZ(117,"div",27),core.TgZ(118,"div",51),core.YNc(119,LandingComponent_div_1_div_32_div_119_Template,4,0,"div",52),core.YNc(120,LandingComponent_div_1_div_32_div_120_Template,4,0,"div",52),core.qZA(),core.qZA(),core.qZA(),core.qZA()),2&rf){const ctx_r13=core.oxw(2);core.xp6(2),core.Q6J("ngIf",0==ctx_r13.signedIn),core.xp6(1),core.Q6J("ngIf",0==ctx_r13.signedIn),core.xp6(1),core.Q6J("ngIf",1==ctx_r13.signedIn),core.xp6(1),core.Q6J("ngIf",1==ctx_r13.signedIn),core.xp6(10),core.Q6J("src","assets/landing_1.png",core.LSH),core.xp6(36),core.Q6J("src","assets/landing_2.png",core.LSH),core.xp6(11),core.Q6J("src","assets/landing_3.png",core.LSH),core.xp6(30),core.Q6J("src","assets/landing_4a.png",core.LSH),core.xp6(2),core.Q6J("src","assets/landing_4b.png",core.LSH),core.xp6(11),core.Q6J("src","assets/landing_5.png",core.LSH),core.xp6(14),core.Q6J("ngIf",0==ctx_r13.signedIn),core.xp6(1),core.Q6J("ngIf",1==ctx_r13.signedIn)}}function LandingComponent_div_1_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"div",2),core.TgZ(1,"ul",3),core.TgZ(2,"li",4),core.TgZ(3,"a",5),core.YNc(4,LandingComponent_div_1_ng_template_4_Template,3,0,"ng-template",null,6,core.W1O),core._UZ(6,"img",7),core.qZA(),core.qZA(),core.TgZ(7,"li",4),core.TgZ(8,"a",5),core.YNc(9,LandingComponent_div_1_ng_template_9_Template,3,1,"ng-template",null,8,core.W1O),core._UZ(11,"img",9),core.qZA(),core.qZA(),core.TgZ(12,"li",4),core.TgZ(13,"a",5),core.YNc(14,LandingComponent_div_1_ng_template_14_Template,3,0,"ng-template",null,10,core.W1O),core._UZ(16,"img",11),core.qZA(),core.qZA(),core.TgZ(17,"li",4),core.TgZ(18,"a",5),core.YNc(19,LandingComponent_div_1_ng_template_19_Template,3,0,"ng-template",null,12,core.W1O),core._UZ(21,"img",13),core.qZA(),core.qZA(),core.TgZ(22,"li",4),core.TgZ(23,"a",5),core.YNc(24,LandingComponent_div_1_ng_template_24_Template,3,0,"ng-template",null,14,core.W1O),core._UZ(26,"img",15),core.qZA(),core.qZA(),core.TgZ(27,"li",4),core.TgZ(28,"a",5),core.YNc(29,LandingComponent_div_1_ng_template_29_Template,3,0,"ng-template",null,16,core.W1O),core._UZ(31,"img",17),core.qZA(),core.qZA(),core.qZA(),core.YNc(32,LandingComponent_div_1_div_32_Template,121,12,"div",18),core.qZA()),2&rf){const _r1=core.MAs(5),_r3=core.MAs(10),_r5=core.MAs(15),_r7=core.MAs(20),_r9=core.MAs(25),_r11=core.MAs(30),ctx_r0=core.oxw();core.xp6(3),core.Q6J("ngbTooltip",_r1),core.xp6(3),core.Q6J("src","assets/logo_transparent.png",core.LSH),core.xp6(2),core.Q6J("ngbTooltip",_r3),core.xp6(3),core.Q6J("src","assets/logo_transparent.png",core.LSH),core.xp6(2),core.Q6J("ngbTooltip",_r5),core.xp6(3),core.Q6J("src","assets/logo_transparent.png",core.LSH),core.xp6(2),core.Q6J("ngbTooltip",_r7),core.xp6(3),core.Q6J("src","assets/logo_transparent.png",core.LSH),core.xp6(2),core.Q6J("ngbTooltip",_r9),core.xp6(3),core.Q6J("src","assets/logo_transparent.png",core.LSH),core.xp6(2),core.Q6J("ngbTooltip",_r11),core.xp6(3),core.Q6J("src","assets/logo_transparent.png",core.LSH),core.xp6(1),core.Q6J("ngIf",null!=ctx_r0.signedIn&&null!=ctx_r0.affiliate)}}__name(LandingComponent_div_1_ng_template_4_Template,"LandingComponent_div_1_ng_template_4_Template"),__name(LandingComponent_div_1_ng_template_9_Template,"LandingComponent_div_1_ng_template_9_Template"),__name(LandingComponent_div_1_ng_template_14_Template,"LandingComponent_div_1_ng_template_14_Template"),__name(LandingComponent_div_1_ng_template_19_Template,"LandingComponent_div_1_ng_template_19_Template"),__name(LandingComponent_div_1_ng_template_24_Template,"LandingComponent_div_1_ng_template_24_Template"),__name(LandingComponent_div_1_ng_template_29_Template,"LandingComponent_div_1_ng_template_29_Template"),__name(LandingComponent_div_1_div_32_h1_2_Template,"LandingComponent_div_1_div_32_h1_2_Template"),__name(LandingComponent_div_1_div_32_div_3_Template,"LandingComponent_div_1_div_32_div_3_Template"),__name(LandingComponent_div_1_div_32_h1_4_Template,"LandingComponent_div_1_div_32_h1_4_Template"),__name(LandingComponent_div_1_div_32_div_5_Template,"LandingComponent_div_1_div_32_div_5_Template"),__name(LandingComponent_div_1_div_32_div_119_Template,"LandingComponent_div_1_div_32_div_119_Template"),__name(LandingComponent_div_1_div_32_div_120_Template,"LandingComponent_div_1_div_32_div_120_Template"),__name(LandingComponent_div_1_div_32_Template,"LandingComponent_div_1_div_32_Template"),__name(LandingComponent_div_1_Template,"LandingComponent_div_1_Template");class LandingComponent{constructor(loadService,platformID,_router,router2,rootComponent,titleService,metaService,cdr){this.loadService=loadService,this.platformID=platformID,this._router=_router,this.router=router2,this.rootComponent=rootComponent,this.titleService=titleService,this.metaService=metaService,this.cdr=cdr,this.signedIn=void 0,this.affiliate=void 0}ngOnInit(){(0,common.NF)(this.platformID)&&(aos.init(),this.isSignedIn(),this.router.queryParams.subscribe(params=>{var _a;this.affiliate=null!==(_a=params.affiliate)&&void 0!==_a?_a:"",this.cdr.detectChanges()})),this.rootComponent.addConfig(),this.addTags("Thred - Get Started","https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Resources%2Flanding_page.png?alt=media","Start your store in 30 seconds, Free.","shopmythred.com")}isBrowser(){return(0,common.NF)(this.platformID)}isSignedIn(){var _this=this;return(0,asyncToGenerator.Z)(function*(){var _a;(yield _this.loadService.authenticated())&&!(null===(_a=yield _this.loadService.isLoggedIn())||void 0===_a?void 0:_a.isAnonymous)?_this.signedIn=!0:_this.signedIn=!1,_this.cdr.detectChanges()})()}addTags(title,imgUrl,description,url){this.metaService.updateTag({property:"og:title",content:title}),this.metaService.updateTag({property:"og:image",content:imgUrl}),this.metaService.updateTag({property:"og:url",content:url}),this.metaService.updateTag({property:"og:description",content:description}),this.titleService.setTitle(title),this.metaService.updateTag({property:"description",content:description})}route(signedIn){var _this2=this;return(0,asyncToGenerator.Z)(function*(){var _a;signedIn?(yield _this2.loadService.authenticated())&&!(null===(_a=yield _this2.loadService.isLoggedIn())||void 0===_a?void 0:_a.isAnonymous)?(_this2.loadService.myCallback=()=>{globals.O.storeInfo=JSON.parse(JSON.stringify(globals.O.userInfo)),_this2.rootComponent.routeToProfile()},yield _this2.loadService.getCustomer()):window.location.href="shopmythred.com/thred/home":window.scrollTo(0,0)})()}myInnerHeight(){let height=window.screen.height,width=window.screen.width;return width<height?.8*width:.8*height}routeToHome(){this.rootComponent.routeToHome()}getStarted(){this.signedIn?this.route(!0):window.scrollTo(0,0)}}__name(LandingComponent,"LandingComponent"),LandingComponent.\u0275fac=__name(function(t){return new(t||LandingComponent)(core.Y36(load_service.J),core.Y36(core.Lbi),core.Y36(router.F0),core.Y36(router.gz),core.Y36(app_component.y),core.Y36(platform_browser.Dx),core.Y36(platform_browser.h_),core.Y36(core.sBO))},"LandingComponent_Factory"),LandingComponent.\u0275cmp=core.Xpm({type:LandingComponent,selectors:[["app-landing"]],decls:2,vars:1,consts:[[2,"height","100vh","position","relative","top","-30px"],["class","animation-area","style","pointer-events: none;",4,"ngIf"],[1,"animation-area",2,"pointer-events","none"],[1,"box-area"],[2,"pointer-events","auto"],["role","button",1,"w-100","h-100",3,"ngbTooltip"],["tipContent1",""],[1,"bubble1","rounded-circle",2,"object-fit","contain","opacity","0.5","background-color","rgb(5, 224, 97)",3,"src"],["tipContent2",""],[1,"bubble2","rounded-circle",2,"object-fit","contain","opacity","0.7","background-color","rgb(255, 83, 83)",3,"src"],["tipContent3",""],[1,"bubble3","rounded-circle",2,"object-fit","contain","opacity","0.8","background-color","rgb(231, 213, 44)",3,"src"],["tipContent4",""],[1,"bubble4","rounded-circle",2,"object-fit","contain","opacity","0.5","background-color","rgb(130, 93, 204)",3,"src"],["tipContent5",""],[1,"bubble5","rounded-circle",2,"object-fit","contain","opacity","0.7","background-color","white",3,"src"],["tipContent6",""],[1,"bubble6","rounded-circle",2,"object-fit","contain","opacity","0.45","background-color","rgb(60, 195, 219)",3,"src"],["class","mx-0 row h-100",4,"ngIf"],[1,"fw-bolder"],[1,"rounded","w-100",2,"object-fit","contain",3,"src"],[1,"mx-0","row","h-100"],[1,"row","row-cols-1","justify-content-center","pb-2","h-100","w-100","mx-0",2,"pointer-events","auto"],["class","text-center text-light fw-bolder col mt-5 mx-0 w-100","style","font-size: xx-large; line-height: 1.2em; text-shadow: 2px 2px 4px #42424281;",4,"ngIf"],["class","col mb-5 mt-2 mx-0 h-100 w-100",4,"ngIf"],["data-aos","fade-down","data-aos-duration","1500","class","text-center text-light fw-bolder col mt-5 mx-0 w-100","style","font-size: xx-large; line-height: 1.2em; text-shadow: 2px 2px 4px #42424281;",4,"ngIf"],[1,"row","row-cols-1","justify-content-start","pb-2","mx-auto","mt-2","px-0","px-sm-5","h-100"],[1,"col","mb-5",2,"width","fit-content","max-width","100%"],["data-aos","fade-up-right","data-aos-duration","1500",1,"h-100","mx-auto","w-100","bg-transparent"],[1,"card-body","p-2","pb-0"],[1,"text-center","text-light","px-2"],[1,"text-center"],[1,"d-md-flex","justify-content-between","align-items-top"],[1,"rounded","w-100",2,"overflow","hidden"],[1,"text-start","mt-3",2,"font-size","large"],[1,"h1"],[1,"card-footer","p-4","pt-0","pb-4","border-top-0","bg-transparent"],[1,"row","row-cols-1","justify-content-end","pb-2","mx-auto","px-0","px-sm-5","h-100"],["data-aos","fade-up","data-aos-duration","1500",1,"h-100","mx-auto","w-100","bg-transparent"],[1,"row","row-cols-1","row-cols-md-2","d-md-flex"],[1,"col","mt-3","order-2","order-md-1","w-sm-50","w-md-100"],[1,"text-start",2,"font-size","large"],[1,"col","rounded","order-1","order-md-2","w-sm-50","w-md-100",2,"overflow","hidden"],[1,"row","row-cols-1","justify-content-start","pb-2","mx-auto","px-0","px-sm-5","h-100"],["data-aos","fade-up","data-aos-duration","1500",1,"h-100","mx-auto","w-100"],[1,"card-body","p-2","pb-0","bg-transparent"],[1,"row","row-cols-1","row-cols-md-2","d-md-flex","justify-content-end"],[1,"col","mt-3","order-3","order-md-1","w-sm-50","w-md-100"],[1,"col","rounded","order-2","order-md-3","w-sm-50","w-md-100",2,"overflow","hidden"],[1,"row","row-cols-1","justify-content-start","pb-2","px-0","px-sm-5","mx-auto","h-100"],[1,"row","row-cols-1","justify-content-center","pb-2","px-0","px-sm-5","mx-auto","h-100"],["data-aos","fade-up","data-aos-duration","1500",1,"h-100","mx-auto","w-100","bg-transparent",2,"pointer-events","auto"],["class","text-center text-light",4,"ngIf"],[1,"text-center","text-light","fw-bolder","col","mt-5","mx-0","w-100",2,"font-size","xx-large","line-height","1.2em","text-shadow","2px 2px 4px #42424281"],[1,"col","mb-5","mt-2","mx-0","h-100","w-100"],["data-aos","flip-up","data-aos-duration","1500",1,"h-100","mx-auto",2,"width","fit-content"],[1,"rounded","shadow-lg",2,"overflow","hidden"],[3,"isLanding","affiliate","signedIn"],["data-aos","fade-down","data-aos-duration","1500",1,"text-center","text-light","fw-bolder","col","mt-5","mx-0","w-100",2,"font-size","xx-large","line-height","1.2em","text-shadow","2px 2px 4px #42424281"],["data-aos","fade-down","data-aos-duration","1500",1,"h-100","mx-auto",2,"width","fit-content"],[1,"text-center","text-light"],["role","button",1,"d-flex","align-items-center","justify-content-center","w-100",2,"text-decoration","none","color","white",3,"click"],[1,"px-5","py-3","d-flex","align-items-center","justify-content-center","rounded","w-100",2,"background-color","rgb(224, 30, 30)","font-size","25px"]],template:__name(function(rf,ctx){1&rf&&(core.TgZ(0,"div",0),core.YNc(1,LandingComponent_div_1_Template,33,13,"div",1),core.qZA()),2&rf&&(core.xp6(1),core.Q6J("ngIf",ctx.isBrowser()))},"LandingComponent_Template"),directives:[common.O5,ng_bootstrap._L,login_component.G],styles:[".animation-area[_ngcontent-%COMP%]{background:linear-gradient(to left,#131313,#000000);height:-moz-fit-content;height:fit-content}h1[_ngcontent-%COMP%]{font-family:montserrat;font-size:xx-large;line-height:1.2em;text-shadow:2px 2px 4px #42424281}.box-area[_ngcontent-%COMP%]{top:0;left:0;right:0}.box-area[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:fixed;display:block;list-style:none;width:200px;height:200px;object-fit:contain;animation:animate 20s linear infinite;bottom:-300px}.bubble1[_ngcontent-%COMP%]{animation:rAnimate 20s linear infinite;animation-delay:0s;width:80px;height:80px}.bubble2[_ngcontent-%COMP%]{animation:rAnimate 20s linear infinite;animation-delay:1.5s;animation-duration:20s;width:30px;height:30px}.bubble3[_ngcontent-%COMP%]{animation:rAnimate 20s linear infinite;animation-delay:5.5s;width:100px;height:100px}.bubble4[_ngcontent-%COMP%]{animation:rAnimate 20s linear infinite;animation-delay:0s;animation-duration:30s;width:150px;height:150px}.bubble5[_ngcontent-%COMP%]{animation:rAnimate 20s linear infinite;animation-delay:0s;width:40px;height:40px}.bubble6[_ngcontent-%COMP%]{animation:rAnimate 20s linear infinite;animation-delay:7s;width:110px;height:110px}.box-area[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1){left:86%;animation-delay:0s}.box-area[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2){left:12%;animation-delay:1.5s;animation-duration:20s}.box-area[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3){left:70%;animation-delay:5.5s}.box-area[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4){left:42%;animation-delay:0s;animation-duration:30s}.box-area[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5){left:65%;animation-delay:0s}.box-area[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(6){left:15%;animation-delay:7s}@keyframes animate{0%{transform:translateY(0);opacity:1}to{transform:translateY(-800px);opacity:0}}@keyframes rAnimate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"]});var login_module=__webpack_require__(80107);const routes=[{path:"",component:LandingComponent}];class LandingModule{}__name(LandingModule,"LandingModule"),LandingModule.\u0275fac=__name(function(t){return new(t||LandingModule)},"LandingModule_Factory"),LandingModule.\u0275mod=core.oAB({type:LandingModule,bootstrap:[LandingComponent]}),LandingModule.\u0275inj=core.cJS({providers:[globals.O],imports:[[common.ez,card.QW,login_module.r,ng_bootstrap.IJ,ngx_spinner.ef,router.Bz.forChild(routes)]]})}};