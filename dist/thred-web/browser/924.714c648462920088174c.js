(self.webpackChunkthred_web=self.webpackChunkthred_web||[]).push([[924],{93494:(e,t,i)=>{"use strict";i.d(t,{HU:()=>a,$Z:()=>l,l1:()=>d});var s=i(37716),n=i(38583);const r=["contentRef"],o=["*"];let l=(()=>{class e{constructor(e){this.display="inline-block",this._dragDisabled=!1,this._elementRef=e}get dragDisabled(){return this._dragDisabled}set dragDisabled(e){this._dragDisabled=e}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(s.SBq))},e.\u0275dir=s.lG2({type:e,selectors:[["","drag-scroll-item",""]],hostVars:2,hostBindings:function(e,t){2&e&&s.Udp("display",t.display)},inputs:{dragDisabled:["drag-disabled","dragDisabled"]}}),e})(),a=(()=>{class e{constructor(e,t,i){this._elementRef=e,this._renderer=t,this._document=i,this._index=0,this._scrollbarHidden=!1,this._disabled=!1,this._xDisabled=!1,this._xWheelEnabled=!1,this._yDisabled=!1,this._dragDisabled=!1,this._snapDisabled=!1,this._snapOffset=0,this._snapDuration=500,this._isDragging=!1,this.isPressed=!1,this.isScrolling=!1,this.scrollTimer=-1,this.scrollToTimer=-1,this.downX=0,this.downY=0,this.displayType="block",this.elWidth=null,this.elHeight=null,this._pointerEvents="auto",this.scrollbarWidth=null,this.isAnimating=!1,this.prevChildrenLength=0,this.indexBound=0,this.dsInitialized=new s.vpe,this.indexChanged=new s.vpe,this.reachesLeftBound=new s.vpe,this.reachesRightBound=new s.vpe,this.snapAnimationFinished=new s.vpe,this.dragStart=new s.vpe,this.dragEnd=new s.vpe,this.scrollbarWidth=`${this.getScrollbarWidth()}px`}get isDragging(){return this._isDragging}get currIndex(){return this._index}set currIndex(e){e!==this._index&&(this._index=e,this.indexChanged.emit(e))}get scrollbarHidden(){return this._scrollbarHidden}set scrollbarHidden(e){this._scrollbarHidden=e}get disabled(){return this._disabled}set disabled(e){this._disabled=e}get xDisabled(){return this._xDisabled}set xDisabled(e){this._xDisabled=e}get yDisabled(){return this._yDisabled}set yDisabled(e){this._yDisabled=e}get xWheelEnabled(){return this._xWheelEnabled}set xWheelEnabled(e){this._xWheelEnabled=e}get dragDisabled(){return this._dragDisabled}set dragDisabled(e){this._dragDisabled=e}get snapDisabled(){return this._snapDisabled}set snapDisabled(e){this._snapDisabled=e}get snapOffset(){return this._snapOffset}set snapOffset(e){this._snapOffset=e}get snapDuration(){return this._snapDuration}set snapDuration(e){this._snapDuration=e}ngOnChanges(){this.setScrollBar(),this.xDisabled||this.disabled||this._scrollbarHidden?this.disableScroll("x"):this.enableScroll("x"),this.yDisabled||this.disabled?this.disableScroll("y"):this.enableScroll("y")}ngAfterViewInit(){this._renderer.setAttribute(this._contentRef.nativeElement,"drag-scroll","true"),this.displayType="undefined"!=typeof window?window.getComputedStyle(this._elementRef.nativeElement).display:"block",this._renderer.setStyle(this._contentRef.nativeElement,"display",this.displayType),this._renderer.setStyle(this._contentRef.nativeElement,"whiteSpace","noWrap"),this.markElDimension(),this._renderer.setStyle(this._contentRef.nativeElement,"width",this.elWidth),this._renderer.setStyle(this._contentRef.nativeElement,"height",this.elHeight),this.wrapper&&this.checkScrollbar(),this._onMouseDownListener=this._renderer.listen(this._contentRef.nativeElement,"mousedown",this.onMouseDownHandler.bind(this)),this._onScrollListener=this._renderer.listen(this._contentRef.nativeElement,"scroll",this.onScrollHandler.bind(this)),this._onDragStartListener=this._renderer.listen(this._contentRef.nativeElement,"dragstart",e=>{e.preventDefault()}),this.checkNavStatus(),this.dsInitialized.emit(),this.adjustMarginToLastChild()}ngAfterViewChecked(){this._children.length!==this.prevChildrenLength&&(this.markElDimension(),this.checkScrollbar(),this.prevChildrenLength=this._children.length,this.checkNavStatus())}ngOnDestroy(){this._renderer.setAttribute(this._contentRef.nativeElement,"drag-scroll","false"),this._onMouseDownListener&&(this._onMouseDownListener=this._onMouseDownListener()),this._onScrollListener&&(this._onScrollListener=this._onScrollListener()),this._onDragStartListener&&(this._onDragStartListener=this._onDragStartListener())}onMouseMoveHandler(e){this.onMouseMove(e)}onMouseMove(e){if(this.isPressed&&!this.disabled){if(!e.buttons&&!e.which)return this.onMouseUpHandler(e);if(this._pointerEvents="none",this._setIsDragging(!0),!this.xDisabled&&!this.dragDisabled){const t=e.clientX;this._contentRef.nativeElement.scrollLeft=this._contentRef.nativeElement.scrollLeft-t+this.downX,this.downX=t}if(!this.yDisabled&&!this.dragDisabled){const t=e.clientY;this._contentRef.nativeElement.scrollTop=this._contentRef.nativeElement.scrollTop-t+this.downY,this.downY=t}}}onMouseDownHandler(e){const t=this.locateDragScrollItem(e.target);if(t&&t.dragDisabled)return;this._startGlobalListening("touchstart"===e.type),this.isPressed=!0;const i=e;this.downX=i.clientX,this.downY=i.clientY,clearTimeout(this.scrollToTimer)}onScrollHandler(){this.checkNavStatus(),this.isPressed||this.isAnimating||this.snapDisabled?this.locateCurrentIndex():(this.isScrolling=!0,clearTimeout(this.scrollTimer),this.scrollTimer=setTimeout(()=>{this.isScrolling=!1,this.locateCurrentIndex(!0)},500))}onMouseUpHandler(e){this.isPressed&&(this.isPressed=!1,this._pointerEvents="auto",this._setIsDragging(!1),this.snapDisabled?this.locateCurrentIndex():this.locateCurrentIndex(!0),this._stopGlobalListening())}moveLeft(){(0!==this.currIndex||this.snapDisabled)&&(this.currIndex--,clearTimeout(this.scrollToTimer),this.scrollTo(this._contentRef.nativeElement,this.toChildrenLocation(),this.snapDuration))}moveRight(){const e=this.wrapper||this.parentNode,t=e?e.clientWidth:0;!this.isScrollReachesRightEnd()&&this.currIndex<this.maximumIndex(t,this._children.toArray())&&(this.currIndex++,clearTimeout(this.scrollToTimer),this.scrollTo(this._contentRef.nativeElement,this.toChildrenLocation(),this.snapDuration))}moveTo(e){const t=this.wrapper||this.parentNode,i=t?t.clientWidth:0;e>=0&&e!==this.currIndex&&this.currIndex<=this.maximumIndex(i,this._children.toArray())&&(this.currIndex=Math.min(e,this.maximumIndex(i,this._children.toArray())),clearTimeout(this.scrollToTimer),this.scrollTo(this._contentRef.nativeElement,this.toChildrenLocation(),this.snapDuration))}checkNavStatus(){setTimeout(()=>{const e=Boolean(this._children.length<=1),t=Boolean(this._contentRef.nativeElement.scrollWidth<=this._contentRef.nativeElement.clientWidth);e||t?(this.reachesLeftBound.emit(!0),this.reachesRightBound.emit(!0)):this.isScrollReachesRightEnd()?(this.reachesLeftBound.emit(!1),this.reachesRightBound.emit(!0)):0===this._contentRef.nativeElement.scrollLeft&&this._contentRef.nativeElement.scrollWidth>this._contentRef.nativeElement.clientWidth?(this.reachesLeftBound.emit(!0),this.reachesRightBound.emit(!1)):(this.reachesLeftBound.emit(!1),this.reachesRightBound.emit(!1))},0)}onWheel(e){this._xWheelEnabled&&(e.preventDefault(),this._snapDisabled?this._contentRef.nativeElement.scrollBy(e.deltaY,0):e.deltaY<0?this.moveLeft():e.deltaY>0&&this.moveRight())}onWindowResize(){this.refreshWrapperDimensions(),this.checkNavStatus()}_setIsDragging(e){this._isDragging!==e&&(this._isDragging=e,e?this.dragStart.emit():this.dragEnd.emit())}_startGlobalListening(e){this._onMouseMoveListener||(this._onMouseMoveListener=this._renderer.listen("document",e?"touchmove":"mousemove",this.onMouseMoveHandler.bind(this))),this._onMouseUpListener||(this._onMouseUpListener=this._renderer.listen("document",e?"touchend":"mouseup",this.onMouseUpHandler.bind(this)))}_stopGlobalListening(){this._onMouseMoveListener&&(this._onMouseMoveListener=this._onMouseMoveListener()),this._onMouseUpListener&&(this._onMouseUpListener=this._onMouseUpListener())}disableScroll(e){this._renderer.setStyle(this._contentRef.nativeElement,`overflow-${e}`,"hidden")}enableScroll(e){this._renderer.setStyle(this._contentRef.nativeElement,`overflow-${e}`,"auto")}hideScrollbar(){"none"===this._contentRef.nativeElement.style.display||this.wrapper||(this.parentNode=this._contentRef.nativeElement.parentNode,this.wrapper=this._renderer.createElement("div"),this._renderer.setAttribute(this.wrapper,"class","drag-scroll-wrapper"),this._renderer.addClass(this.wrapper,"drag-scroll-container"),this.refreshWrapperDimensions(),this._renderer.setStyle(this.wrapper,"overflow","hidden"),this._renderer.setStyle(this._contentRef.nativeElement,"width",`calc(100% + ${this.scrollbarWidth})`),this._renderer.setStyle(this._contentRef.nativeElement,"height",`calc(100% + ${this.scrollbarWidth})`),this._renderer.appendChild(this._elementRef.nativeElement,this.wrapper),this._renderer.appendChild(this.wrapper,this._contentRef.nativeElement),this.adjustMarginToLastChild())}showScrollbar(){this.wrapper&&(this._renderer.setStyle(this._contentRef.nativeElement,"width","100%"),this._renderer.setStyle(this._contentRef.nativeElement,"height",this.wrapper.style.height),null!==this.parentNode&&(this.parentNode.removeChild(this.wrapper),this.parentNode.appendChild(this._contentRef.nativeElement)),this.wrapper=null,this.adjustMarginToLastChild())}checkScrollbar(){this._renderer.setStyle(this._contentRef.nativeElement,"height",this._contentRef.nativeElement.scrollWidth<=this._contentRef.nativeElement.clientWidth?"100%":`calc(100% + ${this.scrollbarWidth})`),this._renderer.setStyle(this._contentRef.nativeElement,"width",this._contentRef.nativeElement.scrollHeight<=this._contentRef.nativeElement.clientHeight?"100%":`calc(100% + ${this.scrollbarWidth})`)}setScrollBar(){this.scrollbarHidden?this.hideScrollbar():this.showScrollbar()}getScrollbarWidth(){const e=this._renderer.createElement("div");this._renderer.setStyle(e,"visibility","hidden"),this._renderer.setStyle(e,"width","100px"),this._renderer.setStyle(e,"msOverflowStyle","scrollbar"),this._renderer.appendChild(this._document.body,e);const t=e.offsetWidth;this._renderer.setStyle(e,"overflow","scroll");const i=this._renderer.createElement("div");this._renderer.setStyle(i,"width","100%"),this._renderer.appendChild(e,i);const s=i.offsetWidth;return this._renderer.removeChild(this._document.body,e),t-s||20}refreshWrapperDimensions(){this.wrapper&&(this._renderer.setStyle(this.wrapper,"width","100%"),this._renderer.setStyle(this.wrapper,"height",this._elementRef.nativeElement.style.height>0||this._elementRef.nativeElement.offsetHeight>0?this._elementRef.nativeElement.style.height||this._elementRef.nativeElement.offsetHeight+"px":"100%"))}scrollTo(e,t,i){const s=this;s.isAnimating=!0;const n=e.scrollLeft,r=t-n-this.snapOffset;let o=0;const l=function(){var t,a,d;o+=20,e.scrollLeft=(t=o,a=n,d=r,(t/=i/2)<1?d/2*t*t+a:-d/2*(--t*(t-2)-1)+a),o<i?s.scrollToTimer=setTimeout(l,20):setTimeout(()=>{s.isAnimating=!1,s.snapAnimationFinished.emit(s.currIndex)},20)};l()}locateCurrentIndex(e){this.currentChildWidth((t,i,s,n,r)=>{this._contentRef.nativeElement.scrollLeft>=s&&this._contentRef.nativeElement.scrollLeft<=i?(i-this._contentRef.nativeElement.scrollLeft>t/2&&!this.isScrollReachesRightEnd()?(this.isAnimating||(this.currIndex=n),e&&this.scrollTo(this._contentRef.nativeElement,s,this.snapDuration)):0!==this._contentRef.nativeElement.scrollLeft&&(this.isAnimating||(this.currIndex=n+1),e&&this.scrollTo(this._contentRef.nativeElement,s+t,this.snapDuration)),r()):n+1===this._children.length-1&&(this.isAnimating||(this.currIndex=n+1),r())})}currentChildWidth(e){let t=0,i=!1;const s=function(){i=!0},n=this._children.toArray();for(let r=0;r<n.length&&r!==n.length-1&&!i;r++){const i=n[r]._elementRef.nativeElement.clientWidth;e(i,t+n[r+1]._elementRef.nativeElement.clientWidth,t,r,s),t+=i}}toChildrenLocation(){let e=0;const t=this._children.toArray();for(let i=0;i<this.currIndex;i++)e+=t[i]._elementRef.nativeElement.clientWidth;return e}locateDragScrollItem(e){let t=null;const i=this._children.toArray();for(let s=0;s<i.length;s++)e===i[s]._elementRef.nativeElement&&(t=i[s]);return t}markElDimension(){this.wrapper?(this.elWidth=this.wrapper.style.width,this.elHeight=this.wrapper.style.height):(this.elWidth=this._elementRef.nativeElement.style.width||this._elementRef.nativeElement.offsetWidth+"px",this.elHeight=this._elementRef.nativeElement.style.height||this._elementRef.nativeElement.offsetHeight+"px");const e=this.wrapper||this.parentNode;this._children.length>1&&(this.indexBound=this.maximumIndex(e?e.clientWidth:0,this._children.toArray()))}maximumIndex(e,t){let i=0,s=0;for(let n=0;n<=t.length;n++){const r=t[t.length-1-n];if(!r)break;{const t=r._elementRef.nativeElement;let n=t.clientWidth;if(0===n&&t.firstElementChild&&(n=r._elementRef.nativeElement.firstElementChild.clientWidth),s+=n,!(s<e))break;i++}}return t.length-i}isScrollReachesRightEnd(){return this._contentRef.nativeElement.scrollLeft+this._contentRef.nativeElement.offsetWidth>=this._contentRef.nativeElement.scrollWidth}adjustMarginToLastChild(){if(this._children&&this._children.length>0&&this.hideScrollbar){const e=this._children.toArray();this._renderer.setStyle(e[e.length-1]._elementRef.nativeElement,"margin-right",this.wrapper&&e.length>1?this.scrollbarWidth:0)}}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(s.SBq),s.Y36(s.Qsj),s.Y36(n.K0))},e.\u0275cmp=s.Xpm({type:e,selectors:[["drag-scroll"]],contentQueries:function(e,t,i){if(1&e&&s.Suo(i,l,5),2&e){let e;s.iGM(e=s.CRH())&&(t._children=e)}},viewQuery:function(e,t){if(1&e&&s.Gf(r,7),2&e){let e;s.iGM(e=s.CRH())&&(t._contentRef=e.first)}},hostVars:2,hostBindings:function(e,t){1&e&&s.NdJ("wheel",function(e){return t.onWheel(e)})("resize",function(){return t.onWindowResize()},!1,s.Jf7),2&e&&s.Udp("pointer-events",t._pointerEvents)},inputs:{scrollbarHidden:["scrollbar-hidden","scrollbarHidden"],disabled:["drag-scroll-disabled","disabled"],xDisabled:["drag-scroll-x-disabled","xDisabled"],yDisabled:["drag-scroll-y-disabled","yDisabled"],xWheelEnabled:["scroll-x-wheel-enabled","xWheelEnabled"],dragDisabled:["drag-disabled","dragDisabled"],snapDisabled:["snap-disabled","snapDisabled"],snapOffset:["snap-offset","snapOffset"],snapDuration:["snap-duration","snapDuration"]},outputs:{dsInitialized:"dsInitialized",indexChanged:"indexChanged",reachesLeftBound:"reachesLeftBound",reachesRightBound:"reachesRightBound",snapAnimationFinished:"snapAnimationFinished",dragStart:"dragStart",dragEnd:"dragEnd"},features:[s.TTD],ngContentSelectors:o,decls:3,vars:0,consts:[[1,"drag-scroll-content"],["contentRef",""]],template:function(e,t){1&e&&(s.F$t(),s.TgZ(0,"div",0,1),s.Hsn(2),s.qZA())},styles:["[_nghost-%COMP%] {\n      overflow: hidden;\n      display: block;\n    }\n    .drag-scroll-content[_ngcontent-%COMP%] {\n      height: 100%;\n      overflow: auto;\n      white-space: nowrap;\n    }"]}),e})(),d=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({}),e})()},5142:(e,t,i)=>{"use strict";i.d(t,{a:()=>v});var s=i(37716),n=i(36083),r=i(81454),o=i(37503),l=i(38583),a=i(91841),d=i(39075),h=i(90674),c=i(79866),p=i(76627);function m(e,t){1&e&&(s.TgZ(0,"div",12),s.TgZ(1,"p",13),s._uU(2," 3D Model rendering is "),s.TgZ(3,"b"),s._uU(4,"not"),s.qZA(),s._uU(5," 100% accurate. Any "),s.TgZ(6,"b"),s._uU(7,"clipping"),s.qZA(),s._uU(8," or "),s.TgZ(9,"b"),s._uU(10,"distortion"),s.qZA(),s._uU(11," will not be on the actual product. "),s.qZA(),s.qZA())}function u(e,t){1&e&&(s.TgZ(0,"div"),s.TgZ(1,"p",14),s._uU(2," Taking Screenshot for Product Images: "),s.qZA(),s.TgZ(3,"p",13),s._uU(4," Windows: "),s.TgZ(5,"b"),s._uU(6,"Windows+SHIFT+S"),s._UZ(7,"br"),s._uU(8,"Drag Cursor"),s.qZA(),s.qZA(),s.TgZ(9,"p",13),s._uU(10," Mac: "),s.TgZ(11,"b"),s._uU(12,"Command+SHIFT+4"),s._UZ(13,"br"),s._uU(14,"Drag Cursor"),s.qZA(),s.qZA(),s.qZA())}function g(e,t){if(1&e&&(s.YNc(0,m,12,0,"div",10),s.YNc(1,u,15,0,"div",11)),2&e){const e=s.oxw(2);s.Q6J("ngIf",!e.showScInfo),s.xp6(1),s.Q6J("ngIf",e.showScInfo)}}function f(e,t){if(1&e&&(s.TgZ(0,"div",5),s.TgZ(1,"a",6),s.YNc(2,g,2,2,"ng-template",null,7,s.W1O),s.TgZ(4,"mat-icon",8),s.TgZ(5,"span",9),s._uU(6," help_outline "),s.qZA(),s.qZA(),s._uU(7),s.qZA(),s.qZA()),2&e){const e=s.MAs(3),t=s.oxw();s.xp6(1),s.Gre("d-inline-flex btn btn-",t.storeInfo().colorStyle.text_code," rounded-pill  align-items-center justify-content-center fw-bold m-2"),s.Udp("font-family",t.storeInfo().fontName),s.Q6J("ngbTooltip",e),s.xp6(3),s.Udp("color",t.selectedTheme().color),s.xp6(1),s.Gre("material-icons-outlined text-",t.storeInfo().colorStyle.back_code,""),s.xp6(2),s.hij(" ",t.titleBtn," ")}}function b(e,t){if(1&e&&(s.TgZ(0,"div",15),s.TgZ(1,"ngx-spinner",16),s.TgZ(2,"h3",17),s._uU(3,"Launching Model Viewer...\n"),s.qZA(),s.qZA(),s.qZA()),2&e){const e=s.oxw();s.xp6(1),s.Udp("color",e.selectedIndicator().color),s.s9C("bdColor",e.selectedIndicator().bg_color),s.s9C("color",e.selectedIndicator().color),s.s9C("type",e.selectedIndicator().name),s.Q6J("fullScreen",!1)("disableAnimation",!0)("name","modelSpinner"),s.xp6(1),s.Udp("font-family",e.storeInfo().fontName)}}let v=(()=>{class e{constructor(e,t,i,s,o){this.http=e,this.sanitizer=t,this.modalService=i,this.platformID=s,this.spinner=o,this.myHtmlTemplate="",this.data={template:new n.Y,product:new r.x,isSc:!1},this.titleBtn="INFO",this.template=new n.Y,this.product=new r.x,this.showScInfo=!0,this.isSpinning=!1}ngAfterViewInit(){}ngOnInit(){this.template=this.data.template,this.product=this.data.product,this.titleBtn=this.data.isSc?"SNAPSHOTS":"INFO",this.showSpinner(),this.openModel()}isMobile(){return window.screen.width<window.screen.height}getModelUrl(e){switch(e){case"ATC Hoodie":return"https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Models%2FHoodies%2Fhoodie_model.glb?alt=media";case"MUG":return"https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Models%2FMugs%2Fmug_model2.glb?alt=media";default:return"https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Models%2FTShirts%2Fshirt_model.glb?alt=media"}}getModelTextureUrl(e,t){switch(e){case"ATC Hoodie":return"https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Models%2FHoodies%2FTextures%2F"+t+".jpg?alt=media";case"MUG":return"https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Models%2FMugs%2FTextures%2F"+t+".jpg?alt=media";default:return"https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Models%2FTShirts%2FTextures%2F"+t+".jpg?alt=media"}}getSkyBoxUrl(e,t){var i="TShirts";switch(e){case"ATC Hoodie":i="Hoodies";break;case"MUG":i="Mugs";break;default:i="TShirts"}return"https://storage.googleapis.com/clothingapp-ed125.appspot.com/Models/"+i+"/Skyboxes/"+t+".hdr"}openBtn(){this.modalService.dismissAll("success")}isBrowser(){return(0,l.NF)(this.platformID)}selectedIndicator(){var e,t,i,s,n,r;let l=null===(t=null===(e=o.O.storeInfo)||void 0===e?void 0:e.loading)||void 0===t?void 0:t.color,a=null===(s=null===(i=o.O.storeInfo)||void 0===i?void 0:i.loading)||void 0===s?void 0:s.bg_color;return{name:null===(r=null===(n=o.O.storeInfo)||void 0===n?void 0:n.loading)||void 0===r?void 0:r.name,color:"rgba("+l[0]+","+l[1]+","+l[2]+","+l[3]+")",bg_color:"rgba("+a[0]+","+a[1]+","+a[2]+","+a[3]+")"}}storeInfo(){return o.O.storeInfo}selectedTheme(){var e,t,i,s,n,r;let l=null===(t=null===(e=o.O.storeInfo)||void 0===e?void 0:e.colorStyle)||void 0===t?void 0:t.btn_color,a=null===(s=null===(i=o.O.storeInfo)||void 0===i?void 0:i.colorStyle)||void 0===s?void 0:s.bg_color;return{name:null===(r=null===(n=o.O.storeInfo)||void 0===n?void 0:n.colorStyle)||void 0===r?void 0:r.name,color:"rgba("+l[0]+","+l[1]+","+l[2]+","+l[3]+")",bg_color:"rgba("+a[0]+","+a[1]+","+a[2]+","+a[3]+")"}}showSpinner(){this.isSpinning||(this.isSpinning=!0,(0,l.NF)(this.platformID)&&this.spinner.show("modelSpinner"),setTimeout(()=>{(0,l.NF)(this.platformID)&&(this.hideSpinner(),this.spinner.hide())},2e3))}hideSpinner(){this.isSpinning&&(this.isSpinning=!1)}openModel(){var e,t,i,s="",n=this.getSkyBoxUrl(this.product.productType,"room"),r=this.getModelTextureUrl(this.product.productType,this.product.templateColor),o=this.getModelUrl(this.product.productType);let l=null!==(e=this.product.getUrl(!0))&&void 0!==e?e:"",a=null!==(t=this.product.getUrl(!1))&&void 0!==t?t:"",d=this.template.colors.find(e=>e.code==this.product.templateColor);if(d){var h=[1,1,1,1];switch(d.rgb.forEach((e,t)=>{h[t]=e}),null!==(i=this.template.productCode)&&void 0!==i?i:"ATC1000"){case"ATC1000":s="<!doctype html><html lang='en'><head></head><title>&lt;model-viewer&gt; template</title><meta charset='utf-8'><meta name='description' content='&lt;model-viewer&gt; template'><meta name='viewport' content='width=device-width, initial-scale=1'><script src='https://unpkg.com/focus-visible@5.0.2/dist/focus-visible.js' defer><\/script></head><body><model-viewer camera-controls skybox-image='"+n+"'environment-image='"+n+"'alt='A 3D astronaut model depicted within a forest'src='"+o+"'></model-viewer><script type='module'>const onProgress = (event) => {if (event.detail.totalProgress === 1) {const modelViewerColor = document.querySelector('model-viewer');modelViewerColor.environmentImage = 'neutral';const materials = modelViewerColor.model.materials;for (let i = 0; i < materials.length; i++) {if (i === 0){let material = modelViewerColor.model.materials[i];material.pbrMetallicRoughness.baseColorTexture.texture.source.setURI('"+r+"');}else if (i === 1){let material = modelViewerColor.model.materials[i];material.pbrMetallicRoughness.baseColorTexture.texture.source.setURI('"+a+"');}console.log(materials[i])}}};document.querySelector('model-viewer').addEventListener('progress', onProgress);<\/script><script type='module' src='https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js'><\/script><style>:not(:defined) > * {display: none;}body {margin: 0;padding: 0;width: 100vw;height: 100vh;}model-viewer {width: 100%;height: 100%;background-color: #baf7fd;display: flex;justify-content: center;align-items: center;}.progress-bar {display: block;width: 33%;height: 10%;max-height: 2%;position: absolute;left: 50%;top: 50%;transform: translate3d(-50%, -50%, 0);border-radius: 25px;box-shadow: 0px 3px 10px 3px #baf7fd, 0px 0px 5px 1px #baf7fd;border: 1px solid #baf7fd;}.progress-bar.hide {visibility: hidden;transition: visibility 0.3s;}.update-bar {background-color: #baf7fd;width: 0%;height: 100%;border-radius: 25px;float: left;transition: width 0.3s;}#ar-button {background-image: url(ar_icon.png);background-repeat: no-repeat;background-size: 20px 20px;background-position: 12px 50%;background-color: #baf7fd;position: absolute;left: 50%;transform: translateX(-50%);white-space: nowrap;bottom: 132px;padding: 0px 16px 0px 40px;font-family: Roboto Regular, Helvetica Neue, sans-serif;font-size: 14px;color:#baf7fd;height: 36px;line-height: 36px;border-radius: 18px;border: 1px solid #baf7fd;}#ar-button:active {background-color: #baf7fd;}#ar-button:focus {outline: none;}#ar-button:focus-visible {outline: 1px solid #baf7fd;}@keyframes circle {from { transform: translateX(-50%) rotate(0deg) translateX(50px) rotate(0deg); }to   { transform: translateX(-50%) rotate(360deg) translateX(50px) rotate(-360deg); }}@keyframes elongate {from { transform: translateX(100px); }to   { transform: translateX(-100px); }}model-viewer > #ar-prompt {position: absolute;left: 50%;bottom: 175px;animation: elongate 2s infinite ease-in-out alternate;display: none;}model-viewer[ar-status='session-started'] > #ar-prompt {display: block;}model-viewer > #ar-prompt > img {animation: circle 4s linear infinite;}</style></body></html>";break;case"ATC Hoodie":s="<!doctype html><html lang='en'><head></head><title>&lt;model-viewer&gt; template</title><meta charset='utf-8'><meta name='description' content='&lt;model-viewer&gt; template'><meta name='viewport' content='width=device-width, initial-scale=1'><script src='https://unpkg.com/focus-visible@5.0.2/dist/focus-visible.js' defer><\/script></head><body><model-viewer camera-controls skybox-image='"+n+"'environment-image='"+n+"'alt='A 3D astronaut model depicted within a forest'src='"+o+"'></model-viewer><script type='module'>const onProgress = (event) => {if (event.detail.totalProgress === 1) {const modelViewerColor = document.querySelector('model-viewer');modelViewerColor.environmentImage = 'neutral';const materials = modelViewerColor.model.materials;for (let i = 0; i < materials.length; i++) {if (materials[i].name === 'Left Cap' || materials[i].name === 'Right Cap' || materials[i].name == 'String Holes (Interior)'){materials[i].pbrMetallicRoughness.setBaseColorFactor(["+h[0]+", "+h[1]+", "+h[2]+", "+h[3]+"]);}else if (materials[i].name === 'String Holes'){materials[i].pbrMetallicRoughness.setBaseColorFactor([0.7,0.7,0.7,1]);}else if (materials[i].name === 'Draw Strings' || materials[i].name === 'Body' || materials[i].name == 'Front Canvas'){materials[i].pbrMetallicRoughness.baseColorTexture.texture.source.setURI('"+r+"');}else if (materials[i].name === 'Front Image'){console.log(materials[i]);materials[i].pbrMetallicRoughness.baseColorTexture.texture.source.setURI('"+a+"');}else if (materials[i].name === 'Back Image'){materials[i].pbrMetallicRoughness.baseColorTexture.texture.source.setURI('"+l+"');}console.log(materials[i].name)}}};document.querySelector('model-viewer').addEventListener('progress', onProgress);<\/script><script type='module' src='https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js'><\/script><style>:not(:defined) > * {display: none;}body {margin: 0;padding: 0;width: 100vw;height: 100vh;}model-viewer {width: 100%;height: 100%;background-color: #baf7fd;display: flex;justify-content: center;align-items: center;}.progress-bar {display: block;width: 33%;height: 10%;max-height: 2%;position: absolute;left: 50%;top: 50%;transform: translate3d(-50%, -50%, 0);border-radius: 25px;box-shadow: 0px 3px 10px 3px #baf7fd, 0px 0px 5px 1px #baf7fd;border: 1px solid #baf7fd;}.progress-bar.hide {visibility: hidden;transition: visibility 0.3s;}.update-bar {background-color: #baf7fd;width: 0%;height: 100%;border-radius: 25px;float: left;transition: width 0.3s;}#ar-button {background-image: url(ar_icon.png);background-repeat: no-repeat;background-size: 20px 20px;background-position: 12px 50%;background-color: #baf7fd;position: absolute;left: 50%;transform: translateX(-50%);white-space: nowrap;bottom: 132px;padding: 0px 16px 0px 40px;font-family: Roboto Regular, Helvetica Neue, sans-serif;font-size: 14px;color:#baf7fd;height: 36px;line-height: 36px;border-radius: 18px;border: 1px solid #baf7fd;}#ar-button:active {background-color: #baf7fd;}#ar-button:focus {outline: none;}#ar-button:focus-visible {outline: 1px solid #baf7fd;}@keyframes circle {from { transform: translateX(-50%) rotate(0deg) translateX(50px) rotate(0deg); }to   { transform: translateX(-50%) rotate(360deg) translateX(50px) rotate(-360deg); }}@keyframes elongate {from { transform: translateX(100px); }to   { transform: translateX(-100px); }}model-viewer > #ar-prompt {position: absolute;left: 50%;bottom: 175px;animation: elongate 2s infinite ease-in-out alternate;display: none;}model-viewer[ar-status='session-started'] > #ar-prompt {display: block;}model-viewer > #ar-prompt > img {animation: circle 4s linear infinite;}</style></body></html>";break;case"MUG":s="<!doctype html><html lang='en'><head></head><title>&lt;model-viewer&gt; template</title><meta charset='utf-8'><meta name='description' content='&lt;model-viewer&gt; template'><meta name='viewport' content='width=device-width, initial-scale=1'><script src='https://unpkg.com/focus-visible@5.0.2/dist/focus-visible.js' defer><\/script></head><body><model-viewer camera-controls skybox-image='"+n+"'environment-image='"+n+"'alt='A 3D astronaut model depicted within a forest'src='"+o+"'></model-viewer><script type='module'>const onProgress = (event) => {if (event.detail.totalProgress === 1) {const modelViewerColor = document.querySelector('model-viewer');modelViewerColor.environmentImage = 'neutral';const materials = modelViewerColor.model.materials;for (let i = 0; i < materials.length; i++) {if (materials[i].name == 'DefaultMaterial.001'){materials[i].pbrMetallicRoughness.baseColorTexture.texture.source.setURI('');materials[i].pbrMetallicRoughness.baseColorTexture.texture.source.setURI('"+r+"');}else if (materials[i].name == 'Design'){let material = modelViewerColor.model.materials[i];material.pbrMetallicRoughness.baseColorTexture.texture.source.setURI('"+a+"');}else if (materials[i].name == 'Design_Back'){let material = modelViewerColor.model.materials[i];material.pbrMetallicRoughness.baseColorTexture.texture.source.setURI('"+l+"');}console.log(materials[i])}}};document.querySelector('model-viewer').addEventListener('progress', onProgress);<\/script><script type='module' src='https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js'><\/script><style>:not(:defined) > * {display: none;}body {margin: 0;padding: 0;width: 100vw;height: 100vh;}model-viewer {width: 100%;height: 100%;background-color: #baf7fd;display: flex;justify-content: center;align-items: center;}.progress-bar {display: block;width: 33%;height: 10%;max-height: 2%;position: absolute;left: 50%;top: 50%;transform: translate3d(-50%, -50%, 0);border-radius: 25px;box-shadow: 0px 3px 10px 3px #baf7fd, 0px 0px 5px 1px #baf7fd;border: 1px solid #baf7fd;}.progress-bar.hide {visibility: hidden;transition: visibility 0.3s;}.update-bar {background-color: #baf7fd;width: 0%;height: 100%;border-radius: 25px;float: left;transition: width 0.3s;}#ar-button {background-image: url(ar_icon.png);background-repeat: no-repeat;background-size: 20px 20px;background-position: 12px 50%;background-color: #baf7fd;position: absolute;left: 50%;transform: translateX(-50%);white-space: nowrap;bottom: 132px;padding: 0px 16px 0px 40px;font-family: Roboto Regular, Helvetica Neue, sans-serif;font-size: 14px;color:#baf7fd;height: 36px;line-height: 36px;border-radius: 18px;border: 1px solid #baf7fd;}#ar-button:active {background-color: #baf7fd;}#ar-button:focus {outline: none;}#ar-button:focus-visible {outline: 1px solid #baf7fd;}@keyframes circle {from { transform: translateX(-50%) rotate(0deg) translateX(50px) rotate(0deg); }to   { transform: translateX(-50%) rotate(360deg) translateX(50px) rotate(-360deg); }}@keyframes elongate {from { transform: translateX(100px); }to   { transform: translateX(-100px); }}model-viewer > #ar-prompt {position: absolute;left: 50%;bottom: 175px;animation: elongate 2s infinite ease-in-out alternate;display: none;}model-viewer[ar-status='session-started'] > #ar-prompt {display: block;}model-viewer > #ar-prompt > img {animation: circle 4s linear infinite;}</style></body></html>";break;default:return void(s="")}this.myHtmlTemplate=this.sanitizer.bypassSecurityTrustHtml(s)}}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(a.eN),s.Y36(d.H7),s.Y36(h.FF),s.Y36(s.Lbi),s.Y36(c.t2))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-model-viewer"]],decls:7,vars:11,consts:[["type","submit",2,"width","100%","height","10%","display","block","border","none","font-weight","bold","cursor","pointer",3,"click"],["id","capture",1,"w-100"],[2,"z-index","1","position","absolute","border","0","width","100%","height","600px","overflow","auto",3,"srcdoc"],["style","z-index: 2; position: absolute; ",4,"ngIf"],["style","z-index: 3; position: absolute; border: 0; width:100%; height: 600px; overflow: auto;",4,"ngIf"],[2,"z-index","2","position","absolute"],["role","button",2,"font-size","15px",3,"ngbTooltip"],["etipContent",""],[1,"me-2"],[2,"font-size","25px"],["class","d-flex",4,"ngIf"],[4,"ngIf"],[1,"d-flex"],[1,"m-2","text-start",2,"font-size","smaller"],[1,"m-2","text-start","fw-bold",2,"font-size","small"],[2,"z-index","3","position","absolute","border","0","width","100%","height","600px","overflow","auto"],["size","medium",3,"bdColor","color","type","fullScreen","disableAnimation","name"],[1,"text-center","mt-5"]],template:function(e,t){1&e&&(s.TgZ(0,"div"),s.TgZ(1,"button",0),s.NdJ("click",function(){return t.openBtn()}),s._uU(2," CLOSE "),s.qZA(),s.TgZ(3,"div",1),s._UZ(4,"iframe",2),s.YNc(5,f,8,13,"div",3),s.qZA(),s.YNc(6,b,4,11,"div",4),s.qZA()),2&e&&(s.Gre("card-body p-0 pb-0 bg-",t.storeInfo().colorStyle.back_code,""),s.xp6(1),s.Gre("btn text-",t.storeInfo().colorStyle.text_code,""),s.Udp("font-family",t.storeInfo().fontName),s.xp6(3),s.Q6J("srcdoc",t.myHtmlTemplate,s.oJD),s.xp6(1),s.Q6J("ngIf",!t.isMobile()),s.xp6(1),s.Q6J("ngIf",t.isSpinning))},directives:[l.O5,h._L,p.Hw,c.Ro],styles:[""]}),e})()}}]);