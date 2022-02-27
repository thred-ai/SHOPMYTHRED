"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=944,exports.ids=[944],exports.modules={99944:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{elementScroll:()=>elementScroll,elementScrollBy:()=>elementScrollBy,elementScrollByPolyfill:()=>elementScrollByPolyfill,elementScrollIntoView:()=>elementScrollIntoView,elementScrollIntoViewPolyfill:()=>elementScrollIntoViewPolyfill,elementScrollPolyfill:()=>elementScrollPolyfill,elementScrollTo:()=>elementScrollTo,elementScrollToPolyfill:()=>elementScrollToPolyfill,modifyWindow:()=>modifyWindow,polyfill:()=>polyfill,scroll:()=>scroll_scroll,scrollBy:()=>scrollBy,scrollIntoView:()=>scrollIntoView,scrollTo:()=>scrollTo,windowScroll:()=>windowScroll,windowScrollBy:()=>windowScrollBy,windowScrollByPolyfill:()=>windowScrollByPolyfill,windowScrollPolyfill:()=>windowScrollPolyfill,windowScrollTo:()=>windowScrollTo,windowScrollToPolyfill:()=>windowScrollToPolyfill});const checkBehavior=__name(behavior=>void 0===behavior||"auto"===behavior||"instant"===behavior||"smooth"===behavior,"checkBehavior");function elementScrollXY(x,y){this.scrollLeft=x,this.scrollTop=y}__name(elementScrollXY,"elementScrollXY");const failedExecute=__name((method,object,reason="cannot convert to dictionary.")=>`Failed to execute '${method}' on '${object}': ${reason}`,"failedExecute"),failedExecuteInvalidEnumValue=__name((method,object,value)=>failedExecute(method,object,`The provided value '${value}' is not a valid enum value of type ScrollBehavior.`),"failedExecuteInvalidEnumValue"),backupMethod=__name((proto,method,fallback)=>{var _a;const backup=`__SEAMLESS.BACKUP$${method}`;return!proto[backup]&&proto[method]&&!(null==(_a=proto[method])?void 0:_a.__isPolyfill)&&(proto[backup]=proto[method]),proto[backup]||fallback},"backupMethod"),isObject=__name(value=>{const type=typeof value;return null!==value&&("object"===type||"function"===type)},"isObject"),isScrollBehaviorSupported=__name(()=>"scrollBehavior"in window.document.documentElement.style,"isScrollBehaviorSupported"),markPolyfill=__name(method=>{Object.defineProperty(method,"__isPolyfill",{value:!0})},"markPolyfill"),modifyPrototypes=__name((prop,func)=>{markPolyfill(func),[HTMLElement.prototype,SVGElement.prototype,Element.prototype].forEach(prototype=>{backupMethod(prototype,prop),prototype[prop]=func})},"modifyPrototypes"),scrollingElement=__name(element=>element.ownerDocument.scrollingElement||element.ownerDocument.documentElement,"scrollingElement"),ease=__name(k=>.5*(1-Math.cos(Math.PI*k)),"ease"),now=__name(()=>{var _a,_b,_c;return null!=(_c=null==(_b=null==(_a=window.performance)?void 0:_a.now)?void 0:_b.call(_a))?_c:window.Date.now()},"now"),step=__name(context=>{const elapsed=(now()-context.timeStamp)/(context.duration||500);if(elapsed>1)return context.method(context.targetX,context.targetY),void context.callback();const value=(context.timingFunc||ease)(elapsed),currentX=context.startX+(context.targetX-context.startX)*value,currentY=context.startY+(context.targetY-context.startY)*value;context.method(currentX,currentY),context.rafId=window.requestAnimationFrame(()=>{step(context)})},"step"),nonFinite=__name(value=>isFinite(value)?Number(value):0,"nonFinite"),isConnected=__name(node=>{var _a;return null!=(_a=node.isConnected)?_a:!(node.ownerDocument&&1&node.ownerDocument.compareDocumentPosition(node))},"isConnected"),scrollWithOptions=__name((element,options,config)=>{var _a,_b;if(!isConnected(element))return;const startX=element.scrollLeft,startY=element.scrollTop,targetX=nonFinite(null!=(_a=options.left)?_a:startX),targetY=nonFinite(null!=(_b=options.top)?_b:startY);if(targetX===startX&&targetY===startY)return;const fallback=backupMethod(HTMLElement.prototype,"scroll",elementScrollXY),method=backupMethod(Object.getPrototypeOf(element),"scroll",fallback).bind(element);if("smooth"!==options.behavior)return void method(targetX,targetY);const removeEventListener=__name(()=>{window.removeEventListener("wheel",cancelScroll),window.removeEventListener("touchmove",cancelScroll)},"removeEventListener"),context={...config,timeStamp:now(),startX,startY,targetX,targetY,rafId:0,method,callback:removeEventListener},cancelScroll=__name(()=>{window.cancelAnimationFrame(context.rafId),removeEventListener()},"cancelScroll");window.addEventListener("wheel",cancelScroll,{passive:!0,once:!0}),window.addEventListener("touchmove",cancelScroll,{passive:!0,once:!0}),step(context)},"scrollWithOptions"),isWindow=__name(obj=>obj.window===obj,"isWindow"),createScroll=__name(scrollName=>(target,scrollOptions,config)=>{const[element,scrollType]=isWindow(target)?[scrollingElement(target.document.documentElement),"Window"]:[target,"Element"],options=null!=scrollOptions?scrollOptions:{};if(!isObject(options))throw new TypeError(failedExecute(scrollName,scrollType));if(!checkBehavior(options.behavior))throw new TypeError(failedExecuteInvalidEnumValue(scrollName,scrollType,options.behavior));"scrollBy"===scrollName&&(options.left=nonFinite(options.left)+element.scrollLeft,options.top=nonFinite(options.top)+element.scrollTop),scrollWithOptions(element,options,config)},"createScroll"),scroll_scroll=createScroll("scroll"),scrollTo=createScroll("scrollTo"),scrollBy=createScroll("scrollBy"),elementScroll=scroll_scroll,elementScrollTo=scrollTo,elementScrollBy=scrollBy,windowScroll=scroll_scroll,windowScrollTo=scrollTo,windowScrollBy=scrollBy,normalizeWritingMode=__name(writingMode=>{switch(writingMode){case"horizontal-tb":case"lr":case"lr-tb":case"rl":case"rl-tb":return 0;case"vertical-rl":case"tb":case"tb-rl":return 1;case"vertical-lr":case"tb-lr":return 2;case"sideways-rl":return 3;case"sideways-lr":return 4}return 0},"normalizeWritingMode"),calcPhysicalAxis=__name((writingMode,isLTR,hPos,vPos)=>{let layout=0;switch(isLTR||(layout^=2),writingMode){case 0:layout=layout>>1|(1&layout)<<1,[hPos,vPos]=[vPos,hPos];break;case 1:case 3:layout^=1;break;case 4:layout^=2}return[layout,hPos,vPos]},"calcPhysicalAxis"),isXReversed=__name(computedStyle=>1==(1&calcPhysicalAxis(normalizeWritingMode(computedStyle.writingMode),"rtl"!==computedStyle.direction,void 0,void 0)[0]),"isXReversed"),toPhysicalAlignment=__name((options,writingMode,isLTR)=>{const[layout,hPos,vPos]=calcPhysicalAxis(writingMode,isLTR,options.block||"start",options.inline||"nearest");return[hPos,vPos].map((value,index)=>{switch(value){case"center":return 1;case"nearest":return 0;default:return"start"===value==!(layout>>index&1)?2:3}})},"toPhysicalAlignment"),mapNearest=__name((align,scrollingEdgeStart,scrollingEdgeEnd,scrollingSize,elementEdgeStart,elementEdgeEnd,elementSize)=>0!==align?align:elementEdgeStart<scrollingEdgeStart&&elementEdgeEnd>scrollingEdgeEnd||elementEdgeStart>scrollingEdgeStart&&elementEdgeEnd<scrollingEdgeEnd?null:elementEdgeStart<=scrollingEdgeStart&&elementSize<=scrollingSize||elementEdgeEnd>=scrollingEdgeEnd&&elementSize>=scrollingSize?2:elementEdgeEnd>scrollingEdgeEnd&&elementSize<scrollingSize||elementEdgeStart<scrollingEdgeStart&&elementSize>scrollingSize?3:null,"mapNearest"),canOverflow=__name(overflow=>"visible"!==overflow&&"clip"!==overflow,"canOverflow"),getFrameElement=__name(element=>{var _a;try{return(null==(_a=element.ownerDocument.defaultView)?void 0:_a.frameElement)||null}catch{return null}},"getFrameElement"),isScrollable=__name((element,computedStyle)=>(element.clientHeight<element.scrollHeight||element.clientWidth<element.scrollWidth)&&(canOverflow(computedStyle.overflowY)||canOverflow(computedStyle.overflowX)||element===scrollingElement(element)),"isScrollable"),parentElement=__name(element=>{const pNode=element.parentNode,pElement=element.parentElement;if(null===pElement&&null!==pNode){if(11===pNode.nodeType)return pNode.host;if(9===pNode.nodeType)return getFrameElement(element)}return pElement},"parentElement"),clamp=__name((value,min,max)=>value<min?min:value>max?max:value,"clamp"),getSupportedScrollMarginProperty=__name(ownerDocument=>["scroll-margin","scroll-snap-margin"].filter(property=>property in ownerDocument.documentElement.style)[0],"getSupportedScrollMarginProperty"),getElementScrollSnapArea=__name((element,elementRect,computedStyle)=>{const{top,right,bottom,left}=elementRect,scrollProperty=getSupportedScrollMarginProperty(element.ownerDocument);if(!scrollProperty)return[top,right,bottom,left];const scrollMarginValue=__name(edge=>{const value=computedStyle.getPropertyValue(`${scrollProperty}-${edge}`);return parseInt(value,10)||0},"scrollMarginValue");return[top-scrollMarginValue("top"),right+scrollMarginValue("right"),bottom+scrollMarginValue("bottom"),left-scrollMarginValue("left")]},"getElementScrollSnapArea"),calcAlignEdge=__name((align,start,end)=>{switch(align){case 1:return(start+end)/2;case 3:return end;case 2:case 0:return start}},"calcAlignEdge"),getFrameViewport=__name((frame,frameRect)=>{var _a,_b,_c;const visualViewport=null==(_a=frame.ownerDocument.defaultView)?void 0:_a.visualViewport,[x,y,width,height]=frame===scrollingElement(frame)?[0,0,null!=(_b=null==visualViewport?void 0:visualViewport.width)?_b:frame.clientWidth,null!=(_c=null==visualViewport?void 0:visualViewport.height)?_c:frame.clientHeight]:[frameRect.left,frameRect.top,frame.clientWidth,frame.clientHeight],left=x+frame.clientLeft,top=y+frame.clientTop;return[top,left+width,top+height,left]},"getFrameViewport"),computeScrollIntoView=__name((element,options)=>{const actions=[];let ownerDocument=element.ownerDocument,ownerWindow=ownerDocument.defaultView;if(!ownerWindow)return actions;const computedStyle=window.getComputedStyle(element),isLTR="rtl"!==computedStyle.direction,writingMode=normalizeWritingMode(computedStyle.writingMode||computedStyle.getPropertyValue("-webkit-writing-mode")||computedStyle.getPropertyValue("-ms-writing-mode")),[alignH,alignV]=toPhysicalAlignment(options,writingMode,isLTR);let[top,right,bottom,left]=getElementScrollSnapArea(element,element.getBoundingClientRect(),computedStyle);for(let frame=parentElement(element);null!==frame;frame=parentElement(frame)){if(ownerDocument!==frame.ownerDocument){if(ownerDocument=frame.ownerDocument,ownerWindow=ownerDocument.defaultView,!ownerWindow)break;const{left:dX,top:dY}=frame.getBoundingClientRect();top+=dY,right+=dX,bottom+=dY,left+=dX}const frameStyle=ownerWindow.getComputedStyle(frame);if("fixed"===frameStyle.position)break;if(!isScrollable(frame,frameStyle))continue;const frameRect=frame.getBoundingClientRect(),[frameTop,frameRight,frameBottom,frameLeft]=getFrameViewport(frame,frameRect),eAlignH=mapNearest(alignH,frameLeft,frameRight,frame.clientWidth,left,right,right-left),eAlignV=mapNearest(alignV,frameTop,frameBottom,frame.clientHeight,top,bottom,bottom-top),diffX=null===eAlignH?0:calcAlignEdge(eAlignH,left,right)-calcAlignEdge(eAlignH,frameLeft,frameRight),diffY=null===eAlignV?0:calcAlignEdge(eAlignV,top,bottom)-calcAlignEdge(eAlignV,frameTop,frameBottom),moveX=isXReversed(frameStyle)?clamp(diffX,-frame.scrollWidth+frame.clientWidth-frame.scrollLeft,-frame.scrollLeft):clamp(diffX,-frame.scrollLeft,frame.scrollWidth-frame.clientWidth-frame.scrollLeft),moveY=clamp(diffY,-frame.scrollTop,frame.scrollHeight-frame.clientHeight-frame.scrollTop);actions.push([frame,{left:frame.scrollLeft+moveX,top:frame.scrollTop+moveY,behavior:options.behavior}]),top=Math.max(top-moveY,frameTop),right=Math.min(right-moveX,frameRight),bottom=Math.min(bottom-moveY,frameBottom),left=Math.max(left-moveX,frameLeft)}return actions},"computeScrollIntoView"),scrollIntoView=__name((element,scrollIntoViewOptions,config)=>{const options=scrollIntoViewOptions||{};if(!checkBehavior(options.behavior))throw new TypeError(failedExecuteInvalidEnumValue("scrollIntoView","Element",options.behavior));computeScrollIntoView(element,options).forEach(([frame,scrollToOptions])=>{elementScroll(frame,scrollToOptions,config)})},"scrollIntoView"),elementScrollIntoView=scrollIntoView,createPolyfill=__name((scrollName,patch)=>config=>{if(isScrollBehaviorSupported())return;const scrollMethod={scroll:scroll_scroll,scrollTo,scrollBy}[scrollName];patch(scrollName,function(){const args=arguments;if(1===arguments.length)return void scrollMethod(this,args[0],config);const left=args[0],top=args[1];scrollMethod(this,{left,top})})},"createPolyfill"),elementScrollPolyfill=createPolyfill("scroll",modifyPrototypes),elementScrollToPolyfill=createPolyfill("scrollTo",modifyPrototypes),elementScrollByPolyfill=createPolyfill("scrollBy",modifyPrototypes),modifyWindow=__name((prop,func)=>{markPolyfill(func),backupMethod(window,prop),window[prop]=func},"modifyWindow"),windowScrollPolyfill=createPolyfill("scroll",modifyWindow),windowScrollToPolyfill=createPolyfill("scrollTo",modifyWindow),windowScrollByPolyfill=createPolyfill("scrollBy",modifyWindow);function elementScrollIntoViewBoolean(alignToTop){elementScrollIntoView(this,{block:null==alignToTop||alignToTop?"start":"end",inline:"nearest"})}__name(elementScrollIntoViewBoolean,"elementScrollIntoViewBoolean");const elementScrollIntoViewPolyfill=__name(config=>{if(isScrollBehaviorSupported())return;const originalFunc=backupMethod(window.HTMLElement.prototype,"scrollIntoView",elementScrollIntoViewBoolean);modifyPrototypes("scrollIntoView",__name(function(){const args=arguments,options=args[0];1===args.length&&isObject(options)?elementScrollIntoView(this,options,config):originalFunc.apply(this,args)},"scrollIntoView"))},"elementScrollIntoViewPolyfill"),polyfill=__name(config=>{isScrollBehaviorSupported()||(elementScrollPolyfill(config),elementScrollToPolyfill(config),elementScrollByPolyfill(config),elementScrollIntoViewPolyfill(config),windowScrollPolyfill(config),windowScrollToPolyfill(config),windowScrollByPolyfill(config))},"polyfill")}};