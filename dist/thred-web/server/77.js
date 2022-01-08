"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=77,exports.ids=[77],exports.modules={70077:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ShopModule:()=>ShopModule});var common=__webpack_require__(11048),globals=__webpack_require__(37503),card=__webpack_require__(38182),ngx_spinner=__webpack_require__(30427),core=__webpack_require__(89724),router=__webpack_require__(6609),platform_browser=__webpack_require__(14800),load_service=__webpack_require__(7478),app_component=__webpack_require__(59157),routing_service=__webpack_require__(78078);function ShopComponent_header_4_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"header",4),core._UZ(1,"img",5),core.qZA()),2&rf){const ctx_r0=core.oxw();let tmp_3_0;core.Gre("bg-",ctx_r0.storeInfo().colorStyle.back_code," py-6"),core.Q6J("hidden",null==ctx_r0.storeInfo().username||""==ctx_r0.storeInfo().username)("hidden",null==ctx_r0.storeInfo().username||""==ctx_r0.storeInfo().username),core.xp6(1),core.Q6J("src",null!==(tmp_3_0=null==ctx_r0.storeInfo().shopLinkTop?null:ctx_r0.storeInfo().shopLinkTop.toString())&&void 0!==tmp_3_0?tmp_3_0:null==ctx_r0.storeInfo().themeLink?null:ctx_r0.storeInfo().themeLink.toString(),core.LSH)}}function ShopComponent_section_5_div_5_p_10_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"p",21),core.TgZ(1,"b",22),core._uU(2),core.qZA(),core.qZA()),2&rf){const product_r4=core.oxw().$implicit,ctx_r5=core.oxw(2);let tmp_1_0;core.Udp("font-family",ctx_r5.storeInfo().fontName),core.xp6(2),core.hij(" ",ctx_r5.formatPrice((null!==(tmp_1_0=product_r4.price)&&void 0!==tmp_1_0?tmp_1_0:0)/100)," ")}}function ShopComponent_section_5_div_5_Template(rf,ctx){if(1&rf){const _r8=core.EpF();core.TgZ(0,"div",11),core.TgZ(1,"div"),core.TgZ(2,"a",12),core.NdJ("click",__name(function(){const product_r4=core.CHM(_r8).$implicit;return core.oxw(2).routeToProduct(product_r4.productID)},"ShopComponent_section_5_div_5_Template_a_click_2_listener")),core._UZ(3,"img",13),core.qZA(),core.TgZ(4,"div",14),core.TgZ(5,"div",15),core.TgZ(6,"h4",16),core.TgZ(7,"a",17),core.NdJ("click",__name(function(){const product_r4=core.CHM(_r8).$implicit;return core.oxw(2).routeToProduct(product_r4.productID)},"ShopComponent_section_5_div_5_Template_a_click_7_listener")),core._uU(8),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.TgZ(9,"div",18),core.YNc(10,ShopComponent_section_5_div_5_p_10_Template,3,3,"p",19),core.TgZ(11,"div",15),core.TgZ(12,"a",20),core.NdJ("click",__name(function(){const product_r4=core.CHM(_r8).$implicit;return core.oxw(2).routeToProduct(product_r4.productID)},"ShopComponent_section_5_div_5_Template_a_click_12_listener")),core._uU(13),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA()}if(2&rf){const product_r4=ctx.$implicit,ctx_r3=core.oxw(2);core.xp6(1),core.Gre("card h-100 bg-",ctx_r3.storeInfo().colorStyle.back_code,""),core.ekj("border-secondary","light"==ctx_r3.storeInfo().colorStyle.text_code),core.xp6(2),core.s9C("src",product_r4.url,core.LSH),core.xp6(4),core.Udp("color",ctx_r3.selectedTheme().color)("font-family",ctx_r3.storeInfo().fontName),core.xp6(1),core.Oqu(product_r4.name),core.xp6(2),core.Q6J("ngIf",ctx_r3.autoCoupon(product_r4)),core.xp6(2),core.Gre("btn btn-outline-",ctx_r3.storeInfo().colorStyle.text_code," mt-auto d-flex justify-content-center text-center"),core.Udp("font-family",ctx_r3.storeInfo().fontName),core.ekj("new-price",ctx_r3.autoCoupon(product_r4)),core.xp6(1),core.hij(" ",ctx_r3.formatPrice(ctx_r3.mainPrice(product_r4))," ")}}__name(ShopComponent_header_4_Template,"ShopComponent_header_4_Template"),__name(ShopComponent_section_5_div_5_p_10_Template,"ShopComponent_section_5_div_5_p_10_Template"),__name(ShopComponent_section_5_div_5_Template,"ShopComponent_section_5_div_5_Template");const _c0=__name(function(){return[]},"_c0");function ShopComponent_section_5_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"section",6),core.TgZ(1,"h1",7),core._uU(2),core.qZA(),core.TgZ(3,"div",8),core.TgZ(4,"div",9),core.YNc(5,ShopComponent_section_5_div_5_Template,14,21,"div",10),core.qZA(),core.qZA(),core.qZA()),2&rf){const ctx_r1=core.oxw();core.Udp("background-color",ctx_r1.selectedTheme().bg_color),core.xp6(1),core.Udp("color",ctx_r1.selectedTheme().color)("font-family",ctx_r1.storeInfo().fontName),core.xp6(1),core.Oqu(ctx_r1.mode()),core.xp6(1),core.Q6J("hidden",ctx_r1.storeProducts==core.DdM(11,_c0)),core.xp6(2),core.Q6J("ngForOf",ctx_r1.storeProducts)}}function ShopComponent_section_6_Template(rf,ctx){if(1&rf){const _r12=core.EpF();core.TgZ(0,"section",6),core.TgZ(1,"div",23),core.TgZ(2,"div",24),core.TgZ(3,"p",25),core._uU(4," COMING SOON "),core.qZA(),core.qZA(),core.TgZ(5,"div"),core.TgZ(6,"div",26),core.TgZ(7,"div",27),core.TgZ(8,"a",28),core.NdJ("click",__name(function(){return core.CHM(_r12),core.oxw().routeToAbout()},"ShopComponent_section_6_Template_a_click_8_listener")),core._UZ(9,"img",29),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA()}if(2&rf){const ctx_r2=core.oxw();let tmp_4_0;core.Udp("background-color",ctx_r2.selectedTheme().bg_color),core.xp6(2),core.Udp("color",ctx_r2.selectedTheme().color),core.xp6(1),core.Gre("text-center text-",ctx_r2.storeInfo().colorStyle.text_code,""),core.Udp("font-family",ctx_r2.storeInfo().fontName),core.xp6(6),core.s9C("src",null!==(tmp_4_0=null==ctx_r2.storeInfo().homeLink?null:ctx_r2.storeInfo().homeLink.toString())&&void 0!==tmp_4_0?tmp_4_0:"",core.LSH)}}__name(ShopComponent_section_5_Template,"ShopComponent_section_5_Template"),__name(ShopComponent_section_6_Template,"ShopComponent_section_6_Template");class ShopComponent{constructor(platformID,cdr,router2,titleService,metaService,loadService,rootComponent,_router,spinner,routingService){this.platformID=platformID,this.cdr=cdr,this.router=router2,this.titleService=titleService,this.metaService=metaService,this.loadService=loadService,this.rootComponent=rootComponent,this._router=_router,this.spinner=spinner,this.routingService=routingService,this.isImgLoaded=!1,this.isSpinning=!1,this.storeProducts=void 0}storeInfo(){return globals.O.storeInfo}availableCurrencies(){return globals.O.availableCurrencies}selectedCurrency(){return globals.O.selectedCurrency}templates(){return globals.O.availableTemplates}availableTemplates(){return globals.O.availableTemplates}getLinkImg(name){return globals.O.socials.filter(obj=>obj.name==name)[0].img}openSocial(l){const link=document.createElement("a");link.target="_blank";let url="";/^http[s]?:\/\//.test(l)||(url+="http://"),url+=l,link.href=url,link.setAttribute("visibility","hidden"),link.click(),link.remove()}ngOnDestroy(){this.loadService.shopComponent=void 0}ngOnInit(){this.loadService.shopComponent=this,this.init()}isBrowser(){return(0,common.NF)(this.platformID)}showSpinner(){this.isSpinning||(this.isSpinning=!0,(0,common.NF)(this.platformID)&&this.spinner.show(),setTimeout(()=>{this.spinner.hide()},1500))}hideSpinner(){this.isSpinning&&(this.isSpinning=!1)}autoCoupon(product){var _a;return null===(_a=this.storeInfo().coupons)||void 0===_a?void 0:_a.filter(coupon=>coupon.products.includes(product.productID)&&coupon.auto).sort(function(a,b){return a.amt<b.amt?1:a.amt>b.amt?-1:0})[0]}mainPrice(product){var _a,_b,_c,_d,_e;let coupon=this.autoCoupon(product);if(coupon){if(0==coupon.style)return(null!==(_a=product.price)&&void 0!==_a?_a:0)/100-(null!==(_b=product.price)&&void 0!==_b?_b:0)/100*coupon.amt;if(1==coupon.style)return(null!==(_c=product.price)&&void 0!==_c?_c:0)/100-100*(null!==(_d=coupon.amt)&&void 0!==_d?_d:0)}return(null!==(_e=product.price)&&void 0!==_e?_e:0)/100}routeToProduct(productID){this.rootComponent.routeToProduct(productID)}routeToAbout(){this.rootComponent.routeToAbout()}selectedTheme(){var _a,_b,_c,_d,_e,_f;let co=null===(_b=null===(_a=globals.O.storeInfo)||void 0===_a?void 0:_a.colorStyle)||void 0===_b?void 0:_b.btn_color,bco=null===(_d=null===(_c=globals.O.storeInfo)||void 0===_c?void 0:_c.colorStyle)||void 0===_d?void 0:_d.bg_color;return{name:null===(_f=null===(_e=globals.O.storeInfo)||void 0===_e?void 0:_e.colorStyle)||void 0===_f?void 0:_f.name,color:"rgba("+co[0]+","+co[1]+","+co[2]+","+co[3]+")",bg_color:"rgba("+bco[0]+","+bco[1]+","+bco[2]+","+bco[3]+")"}}callback(){var _a,_b,_c,_d,_e;globals.O.storeInfo.username?(this.rootComponent.setFavIcon(null!==(_b=null===(_a=globals.O.storeInfo.profileLink)||void 0===_a?void 0:_a.toString())&&void 0!==_b?_b:""),this.addTags(null!==(_c=globals.O.storeInfo.fullName)&&void 0!==_c?_c:"Thred",(null!==(_d=globals.O.storeInfo.profileLink)&&void 0!==_d?_d:new URL("https://shopmythred.com")).toString(),null!==(_e=globals.O.storeInfo.bio)&&void 0!==_e?_e:"Check out my Thred Store!","shopmythred.com/"+globals.O.storeInfo.username),(0,common.NF)(this.platformID)&&(this.showSpinner(),this.loadService.logView(),this.rootComponent.setOptions()),null==globals.O.userInfo&&(0,common.NF)(this.platformID)?this.loadService.getCustomer():0==globals.O.availableCurrencies.length&&(0,common.NF)(this.platformID)?this.loadService.getCountries():0==globals.O.templates.length&&(0,common.NF)(this.platformID)?this.loadService.getTemplates():null==this.storeProducts?this.loadService.getPosts(products=>{this.storeProducts=products}):this.rootComponent.cdr.detectChanges()):this.routingService.routeTo404(this.getStoreName().isCustom)}selectedIndicator(){var _a,_b,_c,_d,_e,_f;let co=null===(_b=null===(_a=globals.O.storeInfo)||void 0===_a?void 0:_a.loading)||void 0===_b?void 0:_b.color,bco=null===(_d=null===(_c=globals.O.storeInfo)||void 0===_c?void 0:_c.loading)||void 0===_d?void 0:_d.bg_color;return{name:null===(_f=null===(_e=globals.O.storeInfo)||void 0===_e?void 0:_e.loading)||void 0===_f?void 0:_f.name,color:"rgba("+co[0]+","+co[1]+","+co[2]+","+co[3]+")",bg_color:"rgba("+bco[0]+","+bco[1]+","+bco[2]+","+bco[3]+")"}}init(){const storeInfo=this.getStoreName();this.downloadAllStoreInfo(storeInfo.link,storeInfo.isCustom)}downloadAllStoreInfo(storeName,isCustom=!1){this.loadService.myCallback=()=>this.callback(),this.loadService.getUser(storeName,void 0,isCustom)}getStoreName(){var request="";if((0,common.PM)(this.platformID)?(request=globals.O.URL,console.log(request)):request=globalThis.location.host,"localhost:4200"!=request&&"shopmythred.com"!=request)return{isCustom:!0,link:request};return{isCustom:!1,link:this.router.snapshot.paramMap.get("user")}}mode(){return this.rootComponent.mode}open(e,item){}addTags(title,imgUrl,description,url){this.metaService.updateTag({property:"og:title",content:title+" - Products"}),this.metaService.updateTag({property:"og:image:width",content:"200"}),this.metaService.updateTag({property:"og:image:height",content:"200"}),this.metaService.updateTag({property:"og:image",content:imgUrl}),this.metaService.updateTag({property:"og:url",content:url}),this.metaService.updateTag({property:"og:description",content:description}),this.titleService.setTitle(title),this.metaService.updateTag({property:"description",content:description})}formatPrice(price){var priceAsString=new String((price*globals.O.selectedCurrency.rate).toFixed(2));switch(priceAsString.indexOf(".")){case priceAsString.length-1:priceAsString+="00";break;case priceAsString.length-2:priceAsString+="0"}return this.getCurrencyForCountry(globals.O.selectedCurrency,"US"!=globals.O.selectedCurrency.name)+priceAsString}getCurrencyForCountry(country,shouldShowName){var returnItem=country.currency_symbol;return shouldShowName&&(returnItem=country.name+" "+returnItem),returnItem}titleCase(str){for(var splitStr=str.toLowerCase().split(" "),i=0;i<splitStr.length;i++)splitStr[i]=splitStr[i].charAt(0).toUpperCase()+splitStr[i].substring(1);return splitStr.join(" ")}}__name(ShopComponent,"ShopComponent"),ShopComponent.\u0275fac=__name(function(t){return new(t||ShopComponent)(core.Y36(core.Lbi),core.Y36(core.sBO),core.Y36(router.gz),core.Y36(platform_browser.Dx),core.Y36(platform_browser.h_),core.Y36(load_service.J),core.Y36(app_component.y),core.Y36(router.F0),core.Y36(ngx_spinner.t2),core.Y36(routing_service.Z))},"ShopComponent_Factory"),ShopComponent.\u0275cmp=core.Xpm({type:ShopComponent,selectors:[["app-shop"]],decls:7,vars:13,consts:[["size","large",3,"bdColor","color","type","fullScreen"],[1,"text-center","mt-5"],["style","height: fit-content;",3,"hidden","class",4,"ngIf"],["class","py-5",3,"background-color",4,"ngIf"],[2,"height","fit-content",3,"hidden"],[1,"w-100","h-100",3,"src"],[1,"py-5"],[1,"display-4","fw-bolder","text-center"],[1,"px-4","px-lg-4","mt-5","container-fluid",3,"hidden"],[1,"row","gx-3","gx-lg-3","row-cols-1","row-cols-md-3","row-cols-xl-4","justify-content-center"],["class","col mb-5",4,"ngFor","ngForOf"],[1,"col","mb-5"],["role","button",3,"click"],["alt","ok","onerror","this.src='https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Resources%2Flink_empty.jpeg?alt=media';",1,"card-img-top",3,"src"],[1,"card-body","p-2","pb-0"],[1,"text-center"],[1,"fw-bolder"],["role","button",2,"text-decoration","none",3,"click"],[1,"card-footer","p-4","pt-0","pt-0","pb-4","border-top-0","bg-transparent"],["class","text-center fw-bolder d-flex justify-content-center align-items-center","style","font-size:15px",3,"font-family",4,"ngIf"],["role","button",2,"font-weight","bold",3,"click"],[1,"text-center","fw-bolder","d-flex","justify-content-center","align-items-center",2,"font-size","15px"],[1,"old-price"],[1,"container","mt-5"],[1,"d-flex","align-items-center","justify-content-center","pb-1","mb-5",2,"height","50px","font-weight","bold","font-size","30px"],[2,"line-height","1.2em"],[1,"d-block","align-items-center","pt-0"],[1,"d-block","align-items-center","text-center","text-sm-start"],["role","button",1,"mx-auto","me-sm-4",3,"click"],["alt","Product",2,"max-width","100%","height","auto",3,"src"]],template:__name(function(rf,ctx){if(1&rf&&(core._UZ(0,"router-outlet"),core.TgZ(1,"ngx-spinner",0),core.TgZ(2,"h3",1),core._uU(3),core.qZA(),core.qZA(),core.YNc(4,ShopComponent_header_4_Template,2,6,"header",2),core.YNc(5,ShopComponent_section_5_Template,6,12,"section",3),core.YNc(6,ShopComponent_section_6_Template,10,12,"section",3)),2&rf){let tmp_6_0,tmp_8_0,tmp_9_0;core.xp6(1),core.Udp("color",ctx.selectedIndicator().color),core.s9C("bdColor",ctx.selectedIndicator().bg_color),core.s9C("color",ctx.selectedIndicator().color),core.s9C("type",ctx.selectedIndicator().name),core.Q6J("fullScreen",!0),core.xp6(1),core.Udp("font-family",ctx.storeInfo().fontName),core.xp6(1),core.hij("",null==(tmp_6_0=ctx.storeInfo())?null:tmp_6_0.fullName," "),core.xp6(1),core.Q6J("ngIf",ctx.isBrowser()),core.xp6(1),core.Q6J("ngIf",ctx.isBrowser()&&(null==(tmp_8_0=ctx.storeInfo())?null:tmp_8_0.active)&&0!=(null==ctx.storeProducts?null:ctx.storeProducts.length)),core.xp6(1),core.Q6J("ngIf",ctx.isBrowser()&&(null==(tmp_9_0=ctx.storeInfo())?null:tmp_9_0.username)&&(!(null!=(tmp_9_0=ctx.storeInfo())&&tmp_9_0.active)||0==(null==ctx.storeProducts?null:ctx.storeProducts.length)))}},"ShopComponent_Template"),directives:[router.lC,ngx_spinner.Ro,common.O5,common.sg],styles:[".centered[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.cover[_ngcontent-%COMP%]{color:#fff;position:relative;background-repeat:no-repeat;background-position-x:center;background-position-y:center;background-size:cover}.old-price[_ngcontent-%COMP%]{text-decoration:line-through;-webkit-text-decoration-style:solid;text-decoration-style:solid;color:gray}.new-price[_ngcontent-%COMP%]{text-decoration:none}.low[_ngcontent-%COMP%]{color:#a5652a}.mid[_ngcontent-%COMP%]{color:silver}.high[_ngcontent-%COMP%]{color:gold}"]});var icon=__webpack_require__(74848);const routes=[{path:"",component:ShopComponent}];class ShopModule{}__name(ShopModule,"ShopModule"),ShopModule.\u0275fac=__name(function(t){return new(t||ShopModule)},"ShopModule_Factory"),ShopModule.\u0275mod=core.oAB({type:ShopModule,bootstrap:[ShopComponent]}),ShopModule.\u0275inj=core.cJS({providers:[globals.O],imports:[[common.ez,card.QW,icon.Ps,ngx_spinner.ef,router.Bz.forChild(routes)]]})}};