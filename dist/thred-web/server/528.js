exports.id=528,exports.ids=[528],exports.modules={68528:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{HomeModule:()=>HomeModule});var common=__webpack_require__(38583),core=__webpack_require__(37716),globals=__webpack_require__(37503),router=__webpack_require__(95987),platform_browser=__webpack_require__(39075),load_service=__webpack_require__(56105),app_component=__webpack_require__(55041),ngx_spinner=__webpack_require__(79866),routing_service=__webpack_require__(78078);function HomeComponent_ngx_spinner_1_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"ngx-spinner",3),core.TgZ(1,"h3",4),core._uU(2),core.qZA(),core.qZA()),2&rf){const ctx_r0=core.oxw();let tmp_6_0;core.Udp("color",ctx_r0.selectedIndicator().color),core.s9C("bdColor",ctx_r0.selectedIndicator().bg_color),core.s9C("color",ctx_r0.selectedIndicator().color),core.s9C("type",ctx_r0.selectedIndicator().name),core.Q6J("fullScreen",!0),core.xp6(1),core.Udp("font-family",ctx_r0.storeInfo().fontName),core.xp6(1),core.hij("",null==(tmp_6_0=ctx_r0.storeInfo())?null:tmp_6_0.fullName,"\n")}}function HomeComponent_header_2_p_6_Template(rf,ctx){if(1&rf){const _r6=core.EpF();core.TgZ(0,"p",9),core.TgZ(1,"a",10),core.NdJ("click",function HomeComponent_header_2_p_6_Template_a_click_1_listener(){core.CHM(_r6);return core.oxw(2).routeToShop()}),core._uU(2,"BROWSE PRODUCTS"),core.qZA(),core.qZA()}if(2&rf){const ctx_r4=core.oxw(2);core.Udp("font-family",ctx_r4.storeInfo().fontName),core.xp6(1),core.Gre("btn btn-",ctx_r4.storeInfo().colorStyle.text_code,""),core.Udp("color",ctx_r4.selectedTheme().bg_color)}}function HomeComponent_header_2_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"header"),core.TgZ(1,"div",5),core.TgZ(2,"div",6),core.TgZ(3,"div"),core.TgZ(4,"p",7),core._uU(5),core.qZA(),core.YNc(6,HomeComponent_header_2_p_6_Template,3,8,"p",8),core.qZA(),core.qZA(),core.qZA(),core.qZA()),2&rf){const ctx_r1=core.oxw();let tmp_1_0,tmp_5_0;core.Gre("bg-",ctx_r1.storeInfo().colorStyle.back_code," py-6"),core.xp6(1),core.Udp("background-image","url("+(null!==(tmp_1_0=null==ctx_r1.storeInfo().themeLink?null:ctx_r1.storeInfo().themeLink.toString())&&void 0!==tmp_1_0?tmp_1_0:"")+")"),core.xp6(3),core.Gre("text-center text-",ctx_r1.storeInfo().colorStyle.text_code,""),core.Udp("font-family",ctx_r1.storeInfo().fontName),core.xp6(1),core.hij(" ",ctx_r1.storeInfo().slogan," "),core.xp6(1),core.Q6J("ngIf",(null==(tmp_5_0=ctx_r1.storeInfo())?null:tmp_5_0.active)&&0!=(null==ctx_r1.storeProducts?null:ctx_r1.storeProducts.length))}}function HomeComponent_section_3_div_7_p_10_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"p",33),core.TgZ(1,"b",34),core._uU(2),core.qZA(),core.qZA()),2&rf){const product_r9=core.oxw().$implicit,ctx_r10=core.oxw(2);let tmp_1_0;core.Udp("font-family",ctx_r10.storeInfo().fontName),core.xp6(2),core.hij(" ",ctx_r10.formatPrice((null!==(tmp_1_0=product_r9.price)&&void 0!==tmp_1_0?tmp_1_0:0)/100)," ")}}function HomeComponent_section_3_div_7_Template(rf,ctx){if(1&rf){const _r13=core.EpF();core.TgZ(0,"div",24),core.TgZ(1,"div"),core.TgZ(2,"a",25),core.NdJ("click",function HomeComponent_section_3_div_7_Template_a_click_2_listener(){const product_r9=core.CHM(_r13).$implicit;return core.oxw(2).routeToProduct(product_r9.productID)}),core._UZ(3,"img",26),core.qZA(),core.TgZ(4,"div",27),core.TgZ(5,"div",28),core.TgZ(6,"h4",29),core.TgZ(7,"a",30),core.NdJ("click",function HomeComponent_section_3_div_7_Template_a_click_7_listener(){const product_r9=core.CHM(_r13).$implicit;return core.oxw(2).routeToProduct(product_r9.productID)}),core._uU(8),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.TgZ(9,"div",31),core.YNc(10,HomeComponent_section_3_div_7_p_10_Template,3,3,"p",32),core.TgZ(11,"div",28),core.TgZ(12,"a",10),core.NdJ("click",function HomeComponent_section_3_div_7_Template_a_click_12_listener(){const product_r9=core.CHM(_r13).$implicit;return core.oxw(2).routeToProduct(product_r9.productID)}),core._uU(13),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA()}if(2&rf){const product_r9=ctx.$implicit,ctx_r7=core.oxw(2);core.xp6(1),core.Gre("card h-100 bg-",ctx_r7.storeInfo().colorStyle.back_code,""),core.ekj("border-secondary","light"==ctx_r7.storeInfo().colorStyle.text_code),core.xp6(2),core.s9C("src",product_r9.url,core.LSH),core.xp6(3),core.Udp("font-family",ctx_r7.storeInfo().fontName),core.xp6(1),core.Udp("color",ctx_r7.selectedTheme().color),core.xp6(1),core.Oqu(product_r9.name),core.xp6(2),core.Q6J("ngIf",ctx_r7.autoCoupon(product_r9)),core.xp6(2),core.Gre("btn btn-outline-",ctx_r7.storeInfo().colorStyle.text_code," mt-auto d-flex justify-content-center text-center"),core.Udp("font-family",ctx_r7.storeInfo().fontName),core.ekj("new-price",ctx_r7.autoCoupon(product_r9)),core.xp6(1),core.hij(" ",ctx_r7.formatPrice(ctx_r7.mainPrice(product_r9))," ")}}function HomeComponent_section_3_div_18_p_10_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"p",33),core.TgZ(1,"b",34),core._uU(2),core.qZA(),core.qZA()),2&rf){const product_r16=core.oxw().$implicit,ctx_r17=core.oxw(2);let tmp_1_0;core.Udp("font-family",ctx_r17.storeInfo().fontName),core.xp6(2),core.hij(" ",ctx_r17.formatPrice((null!==(tmp_1_0=product_r16.price)&&void 0!==tmp_1_0?tmp_1_0:0)/100)," ")}}function HomeComponent_section_3_div_18_Template(rf,ctx){if(1&rf){const _r20=core.EpF();core.TgZ(0,"div",24),core.TgZ(1,"div"),core.TgZ(2,"a",25),core.NdJ("click",function HomeComponent_section_3_div_18_Template_a_click_2_listener(){const product_r16=core.CHM(_r20).$implicit;return core.oxw(2).routeToProduct(product_r16.productID)}),core._UZ(3,"img",26),core.qZA(),core.TgZ(4,"div",27),core.TgZ(5,"div",28),core.TgZ(6,"h4",29),core.TgZ(7,"a",30),core.NdJ("click",function HomeComponent_section_3_div_18_Template_a_click_7_listener(){const product_r16=core.CHM(_r20).$implicit;return core.oxw(2).routeToProduct(product_r16.productID)}),core._uU(8),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.TgZ(9,"div",31),core.YNc(10,HomeComponent_section_3_div_18_p_10_Template,3,3,"p",32),core.TgZ(11,"div",28),core.TgZ(12,"a",10),core.NdJ("click",function HomeComponent_section_3_div_18_Template_a_click_12_listener(){const product_r16=core.CHM(_r20).$implicit;return core.oxw(2).routeToProduct(product_r16.productID)}),core._uU(13),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA()}if(2&rf){const product_r16=ctx.$implicit,ctx_r8=core.oxw(2);core.xp6(1),core.Gre("card h-100 bg-",ctx_r8.storeInfo().colorStyle.back_code,""),core.ekj("border-secondary","light"==ctx_r8.storeInfo().colorStyle.text_code),core.xp6(2),core.s9C("src",product_r16.url,core.LSH),core.xp6(3),core.Udp("font-family",ctx_r8.storeInfo().fontName),core.xp6(1),core.Udp("color",ctx_r8.selectedTheme().color),core.xp6(1),core.Oqu(product_r16.name),core.xp6(2),core.Q6J("ngIf",ctx_r8.autoCoupon(product_r16)),core.xp6(2),core.Gre("btn btn-outline-",ctx_r8.storeInfo().colorStyle.text_code," mt-auto d-flex justify-content-center text-center"),core.Udp("font-family",ctx_r8.storeInfo().fontName),core.ekj("new-price",ctx_r8.autoCoupon(product_r16)),core.xp6(1),core.hij(" ",ctx_r8.formatPrice(ctx_r8.mainPrice(product_r16))," ")}}function HomeComponent_section_3_Template(rf,ctx){if(1&rf){const _r24=core.EpF();core.TgZ(0,"section",11),core.TgZ(1,"div",12),core.TgZ(2,"div",13),core.TgZ(3,"p",14),core._uU(4," NEW ARRIVALS "),core.qZA(),core.qZA(),core.TgZ(5,"div",15),core.TgZ(6,"div",16),core.YNc(7,HomeComponent_section_3_div_7_Template,14,21,"div",17),core.qZA(),core.qZA(),core.TgZ(8,"div",18),core.TgZ(9,"div",19),core.TgZ(10,"div",20),core.TgZ(11,"a",21),core.NdJ("click",function HomeComponent_section_3_Template_a_click_11_listener(){core.CHM(_r24);return core.oxw().routeToAbout()}),core._UZ(12,"img",22),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.TgZ(13,"div",23),core.TgZ(14,"p",14),core._uU(15," FEATURED "),core.qZA(),core.qZA(),core.TgZ(16,"div",15),core.TgZ(17,"div",16),core.YNc(18,HomeComponent_section_3_div_18_Template,14,21,"div",17),core.qZA(),core.qZA(),core.qZA(),core.qZA()}if(2&rf){const ctx_r2=core.oxw();let tmp_5_0;core.Udp("background-color",ctx_r2.selectedTheme().bg_color),core.xp6(2),core.Udp("color",ctx_r2.selectedTheme().color),core.xp6(1),core.Gre("text-center text-",ctx_r2.storeInfo().colorStyle.text_code,""),core.Udp("font-family",ctx_r2.storeInfo().fontName),core.xp6(4),core.Q6J("ngForOf",ctx_r2.newArrivalProducts()),core.xp6(5),core.s9C("src",null!==(tmp_5_0=null==ctx_r2.storeInfo().homeLink?null:ctx_r2.storeInfo().homeLink.toString())&&void 0!==tmp_5_0?tmp_5_0:"",core.LSH),core.xp6(2),core.Gre("text-center text-",ctx_r2.storeInfo().colorStyle.text_code,""),core.Udp("font-family",ctx_r2.storeInfo().fontName)("color",ctx_r2.selectedTheme().color)("font-family",ctx_r2.storeInfo().fontName),core.xp6(4),core.Q6J("ngForOf",ctx_r2.featuredProducts())}}function HomeComponent_section_4_Template(rf,ctx){if(1&rf){const _r26=core.EpF();core.TgZ(0,"section",11),core.TgZ(1,"div",35),core.TgZ(2,"div",13),core.TgZ(3,"p",14),core._uU(4," COMING SOON "),core.qZA(),core.qZA(),core.TgZ(5,"div"),core.TgZ(6,"div",19),core.TgZ(7,"div",20),core.TgZ(8,"a",21),core.NdJ("click",function HomeComponent_section_4_Template_a_click_8_listener(){core.CHM(_r26);return core.oxw().routeToAbout()}),core._UZ(9,"img",22),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA()}if(2&rf){const ctx_r3=core.oxw();let tmp_4_0;core.Udp("background-color",ctx_r3.selectedTheme().bg_color),core.xp6(2),core.Udp("color",ctx_r3.selectedTheme().color),core.xp6(1),core.Gre("text-center text-",ctx_r3.storeInfo().colorStyle.text_code,""),core.Udp("font-family",ctx_r3.storeInfo().fontName),core.xp6(6),core.s9C("src",null!==(tmp_4_0=null==ctx_r3.storeInfo().homeLink?null:ctx_r3.storeInfo().homeLink.toString())&&void 0!==tmp_4_0?tmp_4_0:"",core.LSH)}}class HomeComponent{constructor(platformID,cdr,router,titleService,metaService,loadService,rootComponent,_router,spinner,injector,routingService,location){this.platformID=platformID,this.cdr=cdr,this.router=router,this.titleService=titleService,this.metaService=metaService,this.loadService=loadService,this.rootComponent=rootComponent,this._router=_router,this.spinner=spinner,this.injector=injector,this.routingService=routingService,this.location=location,this.isSpinning=!1,this.storeProducts=void 0}storeInfo(){return globals.O.storeInfo}availableCurrencies(){return globals.O.availableCurrencies}selectedCurrency(){return globals.O.selectedCurrency}templates(){return globals.O.availableTemplates}availableTemplates(){return globals.O.availableTemplates}getLinkImg(name){return globals.O.socials.filter(obj=>obj.name==name)[0].img}autoCoupon(product){var _a;return null===(_a=this.storeInfo().coupons)||void 0===_a?void 0:_a.filter(coupon=>coupon.products.includes(product.productID)&&coupon.auto).sort(function(a,b){return a.amt<b.amt?1:a.amt>b.amt?-1:0})[0]}mainPrice(product){var _a,_b,_c;let coupon=this.autoCoupon(product);return coupon?(null!==(_a=product.price)&&void 0!==_a?_a:0)/100-(null!==(_b=product.price)&&void 0!==_b?_b:0)/100*coupon.amt:(null!==(_c=product.price)&&void 0!==_c?_c:0)/100}openSocial(l){const link=document.createElement("a");link.target="_blank";let url="";/^http[s]?:\/\//.test(l)||(url+="http://"),url+=l,link.href=url,link.setAttribute("visibility","hidden"),link.click(),link.remove()}newArrivalProducts(){var _a;return null===(_a=this.storeProducts)||void 0===_a?void 0:_a.sort(function(a,b){return a.timestamp>b.timestamp?-1:a.timestamp<b.timestamp?1:0}).slice(0,4)}featuredProducts(){var _a;return null===(_a=this.storeProducts)||void 0===_a?void 0:_a.sort(function(a,b){return a.likes>b.likes?-1:a.likes<b.likes?1:0}).slice(0,4)}ngOnDestroy(){this.loadService.adminComponent=void 0}ngOnInit(){this.loadService.homeComponent=this,this.init()}routeToProduct(productID){this.rootComponent.routeToProduct(productID)}routeToShop(){this.rootComponent.routeToShop()}routeToAbout(){this.rootComponent.routeToAbout()}selectedIndicator(){var _a,_b,_c,_d,_e,_f;let co=null===(_b=null===(_a=globals.O.storeInfo)||void 0===_a?void 0:_a.loading)||void 0===_b?void 0:_b.color,bco=null===(_d=null===(_c=globals.O.storeInfo)||void 0===_c?void 0:_c.loading)||void 0===_d?void 0:_d.bg_color;return{name:null===(_f=null===(_e=globals.O.storeInfo)||void 0===_e?void 0:_e.loading)||void 0===_f?void 0:_f.name,color:"rgba("+co[0]+","+co[1]+","+co[2]+","+co[3]+")",bg_color:"rgba("+bco[0]+","+bco[1]+","+bco[2]+","+bco[3]+")"}}showSpinner(){this.isSpinning||(this.isSpinning=!0,(0,common.NF)(this.platformID)&&this.spinner.show(),setTimeout(()=>{(0,common.NF)(this.platformID)&&this.spinner.hide()},1500))}selectedTheme(){var _a,_b,_c,_d,_e,_f;let co=null===(_b=null===(_a=globals.O.storeInfo)||void 0===_a?void 0:_a.colorStyle)||void 0===_b?void 0:_b.btn_color,bco=null===(_d=null===(_c=globals.O.storeInfo)||void 0===_c?void 0:_c.colorStyle)||void 0===_d?void 0:_d.bg_color;return{name:null===(_f=null===(_e=globals.O.storeInfo)||void 0===_e?void 0:_e.colorStyle)||void 0===_f?void 0:_f.name,color:"rgba("+co[0]+","+co[1]+","+co[2]+","+co[3]+")",bg_color:"rgba("+bco[0]+","+bco[1]+","+bco[2]+","+bco[3]+")"}}hideSpinner(){this.isSpinning&&(this.isSpinning=!1)}callback(){var _a,_b,_c,_d,_e;console.log("callback    "),globals.O.storeInfo.username?(this.rootComponent.setFavIcon(null!==(_b=null===(_a=globals.O.storeInfo.profileLink)||void 0===_a?void 0:_a.toString())&&void 0!==_b?_b:""),this.addTags(null!==(_c=globals.O.storeInfo.fullName)&&void 0!==_c?_c:"Thred",(null!==(_d=globals.O.storeInfo.profileLink)&&void 0!==_d?_d:new URL("https://shopmythred.com")).toString(),null!==(_e=globals.O.storeInfo.bio)&&void 0!==_e?_e:"Check out my Thred Store!","shopmythred.com/"+globals.O.storeInfo.username),(0,common.NF)(this.platformID)&&(this.showSpinner(),this.loadService.logView(),this.rootComponent.setOptions()),null==globals.O.userInfo&&(0,common.NF)(this.platformID)?this.loadService.getCustomer():0==globals.O.availableCurrencies.length&&(0,common.NF)(this.platformID)?this.loadService.getCountries():0==globals.O.templates.length&&(0,common.NF)(this.platformID)?this.loadService.getTemplates():null==this.storeProducts?this.loadService.getPosts(products=>{this.storeProducts=products}):this.rootComponent.cdr.detectChanges()):(console.log("oppa gungnam"),console.log(globals.O.storeInfo),this.routingService.routeTo404(this.getStoreName().isCustom))}init(){const storeInfo=this.getStoreName();this.downloadAllStoreInfo(storeInfo.link,storeInfo.isCustom)}isBrowser(){return(0,common.NF)(this.platformID)}downloadAllStoreInfo(storeName,isCustom=!1){this.loadService.myCallback=()=>this.callback(),this.loadService.getUser(storeName,void 0,isCustom)}getStoreName(){var request="";if((0,common.PM)(this.platformID)?(request=globals.O.URL,console.log(request)):request=globalThis.location.host,"localhost:4200"!=request&&"shopmythred.com"!=request)return{isCustom:!0,link:request};return{isCustom:!1,link:this.router.snapshot.paramMap.get("user")}}open(e,item){}formatPrice(price){var priceAsString=new String((price*globals.O.selectedCurrency.rate).toFixed(2));switch(priceAsString.indexOf(".")){case priceAsString.length-1:priceAsString+="00";break;case priceAsString.length-2:priceAsString+="0"}return this.numberWithCommas(this.getCurrencyForCountry(globals.O.selectedCurrency,"US"!=globals.O.selectedCurrency.name)+priceAsString)}numberWithCommas(x){return x.replace(/\B(?=(\d{3})+(?!\d))/g,",")}getCurrencyForCountry(country,shouldShowName){var returnItem=country.currency_symbol;return shouldShowName&&(returnItem=country.name+" "+returnItem),returnItem}addTags(title,imgUrl,description,url){this.metaService.updateTag({property:"og:title",content:title+" - Home"}),this.metaService.updateTag({property:"og:image:width",content:"200"}),this.metaService.updateTag({property:"og:image:height",content:"200"}),this.metaService.updateTag({property:"og:image",content:imgUrl}),this.metaService.updateTag({property:"og:url",content:url}),this.metaService.updateTag({property:"og:description",content:description}),this.titleService.setTitle(title),this.metaService.updateTag({property:"description",content:description})}}HomeComponent.\u0275fac=function HomeComponent_Factory(t){return new(t||HomeComponent)(core.Y36(core.Lbi),core.Y36(core.sBO),core.Y36(router.gz),core.Y36(platform_browser.Dx),core.Y36(platform_browser.h_),core.Y36(load_service.J),core.Y36(app_component.y),core.Y36(router.F0),core.Y36(ngx_spinner.t2),core.Y36(core.zs3),core.Y36(routing_service.Z),core.Y36(common.lw))},HomeComponent.\u0275cmp=core.Xpm({type:HomeComponent,selectors:[["app-home"]],decls:5,vars:4,consts:[["size","large",3,"bdColor","color","type","fullScreen",4,"ngIf"],[3,"class",4,"ngIf"],["class","py-5",3,"background-color",4,"ngIf"],["size","large",3,"bdColor","color","type","fullScreen"],[1,"text-center","mt-5"],[1,"cover"],[1,"d-flex","align-items-center","justify-content-center",2,"height","600px","font-weight","bold","font-size","40px"],[2,"line-height","1.2em","text-shadow","2px 2px 4px #42424281"],["class","text-center px-5 mx-5","style","font-size: 30px;line-height:1.2em;font-weight: bold;text-shadow: 2px 2px 4px #42424281;",3,"font-family",4,"ngIf"],[1,"text-center","px-5","mx-5",2,"font-size","30px","line-height","1.2em","font-weight","bold","text-shadow","2px 2px 4px #42424281"],["role","button",2,"font-weight","bold",3,"click"],[1,"py-5"],[1,"mt-5"],[1,"d-flex","align-items-center","justify-content-center","pb-1","mb-5",2,"height","50px","font-weight","bold","font-size","30px"],[2,"line-height","1.2em"],[1,"px-4"],[1,"row","gx-3","gx-lg-3","row-cols-2","row-cols-md-4","row-cols-xl-4","justify-content-center","mb-2","pb-2"],["class","col mb-5",4,"ngFor","ngForOf"],[1,"bg-info","w-100"],[1,"d-block","align-items-center","pt-0"],[1,"d-block","align-items-center","text-center","text-sm-start"],["role","button",1,"mx-auto","me-sm-4",3,"click"],["alt","Product",2,"max-width","100%","height","auto",3,"src"],[1,"d-flex","align-items-center","justify-content-center","pb-4","mb-5","mt-5","pt-5",2,"height","50px","font-weight","bold","font-size","30px"],[1,"col","mb-5"],["role","button",3,"click"],["alt","ok","onerror","this.src='https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Resources%2Flink_empty.jpeg?alt=media';",1,"card-img-top",3,"src"],[1,"card-body","p-2","pb-0"],[1,"text-center"],[1,"fw-bolder"],["role","button",2,"text-decoration","none",3,"click"],[1,"card-footer","p-4","pt-0","pt-0","pb-4","border-top-0","bg-transparent"],["class","text-center fw-bolder d-flex justify-content-center align-items-center","style","font-size:15px",3,"font-family",4,"ngIf"],[1,"text-center","fw-bolder","d-flex","justify-content-center","align-items-center",2,"font-size","15px"],[1,"old-price"],[1,"container","mt-5"]],template:function HomeComponent_Template(rf,ctx){if(1&rf&&(core._UZ(0,"router-outlet"),core.YNc(1,HomeComponent_ngx_spinner_1_Template,3,10,"ngx-spinner",0),core.YNc(2,HomeComponent_header_2_Template,7,12,"header",1),core.YNc(3,HomeComponent_section_3_Template,19,24,"section",2),core.YNc(4,HomeComponent_section_4_Template,10,12,"section",2)),2&rf){let tmp_2_0,tmp_3_0;core.xp6(1),core.Q6J("ngIf",ctx.isBrowser()),core.xp6(1),core.Q6J("ngIf",ctx.isBrowser()),core.xp6(1),core.Q6J("ngIf",ctx.isBrowser()&&(null==(tmp_2_0=ctx.storeInfo())?null:tmp_2_0.active)&&0!=(null==ctx.storeProducts?null:ctx.storeProducts.length)),core.xp6(1),core.Q6J("ngIf",ctx.isBrowser()&&(null==(tmp_3_0=ctx.storeInfo())?null:tmp_3_0.username)&&(!(null!=(tmp_3_0=ctx.storeInfo())&&tmp_3_0.active)||0==(null==ctx.storeProducts?null:ctx.storeProducts.length)))}},directives:[router.lC,common.O5,ngx_spinner.Ro,common.sg],styles:[".centered[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.cover[_ngcontent-%COMP%]{color:#fff;position:relative;background-repeat:no-repeat;background-position-x:center;background-position-y:center;background-size:cover}.low[_ngcontent-%COMP%]{color:#a5652a}.mid[_ngcontent-%COMP%]{color:silver}.high[_ngcontent-%COMP%]{color:gold}.old-price[_ngcontent-%COMP%]{text-decoration:line-through;-webkit-text-decoration-style:solid;text-decoration-style:solid;color:grey}.new-price[_ngcontent-%COMP%]{text-decoration:none}.middle[_ngcontent-%COMP%]{color:#fff;position:relative;background-repeat:no-repeat;background-position-x:center;background-position-y:center;background-size:cover}"]});var card=__webpack_require__(93738),icon=__webpack_require__(76627);const routes=[{path:"",component:HomeComponent}];class HomeModule{}HomeModule.\u0275fac=function HomeModule_Factory(t){return new(t||HomeModule)},HomeModule.\u0275mod=core.oAB({type:HomeModule,bootstrap:[HomeComponent]}),HomeModule.\u0275inj=core.cJS({providers:[globals.O],imports:[[common.ez,card.QW,icon.Ps,ngx_spinner.ef,router.Bz.forChild(routes)]]})}};