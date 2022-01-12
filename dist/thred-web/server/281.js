"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=281,exports.ids=[281],exports.modules={79281:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{HomeModule:()=>HomeModule});var common=__webpack_require__(11048),core=__webpack_require__(89724),globals=__webpack_require__(37503),router=__webpack_require__(6609),platform_browser=__webpack_require__(14800),load_service=__webpack_require__(7478),app_component=__webpack_require__(59157),ngx_spinner=__webpack_require__(30427),routing_service=__webpack_require__(78078);function HomeComponent_ngx_spinner_1_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"ngx-spinner",3),core.TgZ(1,"h3",4),core._uU(2),core.qZA(),core.qZA()),2&rf){const ctx_r0=core.oxw();let tmp_6_0;core.Udp("color",ctx_r0.selectedIndicator().color),core.s9C("bdColor",ctx_r0.selectedIndicator().bg_color),core.s9C("color",ctx_r0.selectedIndicator().color),core.s9C("type",ctx_r0.selectedIndicator().name),core.Q6J("fullScreen",!0),core.xp6(1),core.Udp("font-family",ctx_r0.storeInfo().fontName),core.xp6(1),core.hij(" ",null==(tmp_6_0=ctx_r0.storeInfo())?null:tmp_6_0.fullName," ")}}function HomeComponent_section_2_div_2_div_1_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"div",13),core.TgZ(1,"p",14),core._uU(2),core.qZA(),core.qZA()),2&rf){const row_r4=core.oxw().$implicit,ctx_r5=core.oxw(2);core.Udp("color",ctx_r5.selectedTheme().color),core.xp6(1),core.Gre("text-center text-",ctx_r5.storeInfo().colorStyle.text_code,""),core.Udp("font-family",ctx_r5.storeInfo().fontName),core.xp6(1),core.hij(" ",row_r4.text," ")}}function HomeComponent_section_2_div_2_div_2_div_2_p_12_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"p",27),core.TgZ(1,"b",28),core._uU(2),core.qZA(),core.qZA()),2&rf){const product_r13=core.oxw().$implicit,ctx_r14=core.oxw(4);let tmp_1_0;core.Udp("font-family",ctx_r14.storeInfo().fontName),core.xp6(2),core.hij(" ",ctx_r14.formatPrice((null!==(tmp_1_0=product_r13.price)&&void 0!==tmp_1_0?tmp_1_0:0)/100)," ")}}function HomeComponent_section_2_div_2_div_2_div_2_Template(rf,ctx){if(1&rf){const _r17=core.EpF();core.TgZ(0,"div",16),core.TgZ(1,"div"),core.TgZ(2,"a",17),core.NdJ("click",__name(function(){const product_r13=core.CHM(_r17).$implicit;return core.oxw(4).routeToProduct(product_r13.productID),!1},"HomeComponent_section_2_div_2_div_2_div_2_Template_a_click_2_listener")),core.ALo(3,"storeChecker"),core._UZ(4,"img",18),core.qZA(),core.TgZ(5,"div",19),core.TgZ(6,"div",20),core.TgZ(7,"h4",21),core.TgZ(8,"a",22),core.NdJ("click",__name(function(){const product_r13=core.CHM(_r17).$implicit;return core.oxw(4).routeToProduct(product_r13.productID),!1},"HomeComponent_section_2_div_2_div_2_div_2_Template_a_click_8_listener")),core.ALo(9,"storeChecker"),core._uU(10),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.TgZ(11,"div",23),core.YNc(12,HomeComponent_section_2_div_2_div_2_div_2_p_12_Template,3,3,"p",24),core.TgZ(13,"div",25),core.TgZ(14,"a",26),core.NdJ("click",__name(function(){const product_r13=core.CHM(_r17).$implicit;return core.oxw(4).routeToProduct(product_r13.productID),!1},"HomeComponent_section_2_div_2_div_2_div_2_Template_a_click_14_listener")),core.ALo(15,"storeChecker"),core._uU(16),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA()}if(2&rf){const product_r13=ctx.$implicit,row_r4=core.oxw(2).$implicit,ctx_r12=core.oxw(2);let tmp_3_0,tmp_6_0;core.xp6(1),core.Gre("card h-100 bg-",ctx_r12.storeInfo().colorStyle.back_code,""),core.ekj("border-secondary","light"==ctx_r12.storeInfo().colorStyle.text_code),core.xp6(1),core.s9C("href",core.lcZ(3,28,"/products/"+product_r13.productID),core.LSH),core.xp6(2),core.s9C("src",null!==(tmp_3_0=null==product_r13.url?null:product_r13.url.toString())&&void 0!==tmp_3_0?tmp_3_0:"",core.LSH),core.xp6(3),core.Udp("font-family",ctx_r12.storeInfo().fontName)("font-size",ctx_r12.titleFontSize(row_r4),"px"),core.ekj("my-5","inherit"!=ctx_r12.titleFontSize(row_r4)&&(null!==(tmp_6_0=row_r4.grid_row)&&void 0!==tmp_6_0?tmp_6_0:1)<=2),core.xp6(1),core.Udp("color",ctx_r12.selectedTheme().color),core.s9C("href",core.lcZ(9,30,"/products/"+product_r13.productID),core.LSH),core.xp6(2),core.Oqu(product_r13.name),core.xp6(2),core.Q6J("ngIf",ctx_r12.autoCoupon(product_r13)),core.xp6(2),core.Gre("btn btn-outline-",ctx_r12.storeInfo().colorStyle.text_code," bad w-100 mt-auto text-center"),core.Udp("font-family",ctx_r12.storeInfo().fontName)("font-size",ctx_r12.fontSize(row_r4),"px"),core.s9C("href",core.lcZ(15,32,"/products/"+product_r13.productID),core.LSH),core.xp6(2),core.hij(" ",ctx_r12.formatPrice(ctx_r12.mainPrice(product_r13))," ")}}__name(HomeComponent_ngx_spinner_1_Template,"HomeComponent_ngx_spinner_1_Template"),__name(HomeComponent_section_2_div_2_div_1_Template,"HomeComponent_section_2_div_2_div_1_Template"),__name(HomeComponent_section_2_div_2_div_2_div_2_p_12_Template,"HomeComponent_section_2_div_2_div_2_div_2_p_12_Template"),__name(HomeComponent_section_2_div_2_div_2_div_2_Template,"HomeComponent_section_2_div_2_div_2_div_2_Template");const _c0=__name(function(){return[]},"_c0"),_c1=__name(function(a0,a1){return{products:a0,row:a1}},"_c1");function HomeComponent_section_2_div_2_div_2_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"div",6),core.TgZ(1,"div"),core.YNc(2,HomeComponent_section_2_div_2_div_2_div_2_Template,17,34,"div",15),core.ALo(3,"productsPipe"),core.qZA(),core.qZA()),2&rf){const row_r4=core.oxw().$implicit,ctx_r6=core.oxw(2);let tmp_0_0,tmp_1_0;core.xp6(1),core.Gre("row mx-2 gx-3 gx-lg-3 row-cols-1 row-cols-md-",null!==(tmp_0_0=row_r4.grid_row)&&void 0!==tmp_0_0?tmp_0_0:1," justify-content-center"),core.xp6(1),core.Q6J("ngForOf",null!==(tmp_1_0=core.xi3(3,4,core.DdM(7,_c0),core.WLB(9,_c1,null!==(tmp_1_0=ctx_r6.storeProducts)&&void 0!==tmp_1_0?tmp_1_0:core.DdM(8,_c0),row_r4)))&&void 0!==tmp_1_0?tmp_1_0:core.DdM(12,_c0))}}function HomeComponent_section_2_div_2_div_3_div_1_Template(rf,ctx){if(1&rf){const _r27=core.EpF();core.TgZ(0,"div",30),core.TgZ(1,"div",31),core.TgZ(2,"a",32),core.NdJ("click",__name(function(){const i_r24=core.CHM(_r27).index,row_r4=core.oxw(2).$implicit;let tmp_b_0;return core.oxw(2).imgLinkPressed((null!==(tmp_b_0=row_r4.imgLinks)&&void 0!==tmp_b_0?tmp_b_0:[])[i_r24])},"HomeComponent_section_2_div_2_div_3_div_1_Template_a_click_2_listener")),core._UZ(3,"img",33),core.qZA(),core.qZA(),core.qZA()}if(2&rf){const img_r23=ctx.$implicit;core.xp6(3),core.s9C("src",img_r23,core.LSH)}}function HomeComponent_section_2_div_2_div_3_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"div"),core.YNc(1,HomeComponent_section_2_div_2_div_3_div_1_Template,4,1,"div",29),core.qZA()),2&rf){const row_r4=core.oxw().$implicit;let tmp_0_0,tmp_1_0;core.Gre("row gx-0 row-cols-1 row-cols-md-",null!==(tmp_0_0=row_r4.grid_row)&&void 0!==tmp_0_0?tmp_0_0:1," justify-content-center w-100 mx-0"),core.xp6(1),core.Q6J("ngForOf",null!==(tmp_1_0=row_r4.imgs)&&void 0!==tmp_1_0?tmp_1_0:core.DdM(4,_c0))}}function HomeComponent_section_2_div_2_div_4_div_1_a_1_Template(rf,ctx){if(1&rf){const _r35=core.EpF();core.TgZ(0,"a",37),core.NdJ("click",__name(function(){core.CHM(_r35);const i_r31=core.oxw().index,row_r4=core.oxw(2).$implicit;let tmp_b_0;return core.oxw(2).imgLinkPressed((null!==(tmp_b_0=row_r4.buttons)&&void 0!==tmp_b_0?tmp_b_0:[])[i_r31].link)},"HomeComponent_section_2_div_2_div_4_div_1_a_1_Template_a_click_0_listener")),core._uU(1),core.qZA()}if(2&rf){const button_r30=core.oxw().$implicit,ctx_r32=core.oxw(4);core.Gre("text-center fw-bolder px-3 btn ",ctx_r32.matchingStyle(button_r30.style)," mw-100 my-auto"),core.Udp("background-color",button_r30.bg_color)("color",button_r30.text_color),core.xp6(1),core.hij(" ",button_r30.text," ")}}function HomeComponent_section_2_div_2_div_4_div_1_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"div",35),core.YNc(1,HomeComponent_section_2_div_2_div_4_div_1_a_1_Template,2,10,"a",36),core.qZA()),2&rf){const button_r30=ctx.$implicit;core.xp6(1),core.Q6J("ngIf",""!=(null==button_r30.text?null:button_r30.text.trim()))}}function HomeComponent_section_2_div_2_div_4_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"div"),core.YNc(1,HomeComponent_section_2_div_2_div_4_div_1_Template,2,1,"div",34),core.qZA()),2&rf){const row_r4=core.oxw().$implicit;let tmp_0_0,tmp_1_0;core.Gre("row gx-0 row-cols-1 row-cols-md-",null!==(tmp_0_0=row_r4.grid_row)&&void 0!==tmp_0_0?tmp_0_0:1," justify-content-center mw-100 ms-3 me-3 mb-1"),core.xp6(1),core.Q6J("ngForOf",null!==(tmp_1_0=row_r4.buttons)&&void 0!==tmp_1_0?tmp_1_0:core.DdM(4,_c0))}}function HomeComponent_section_2_div_2_div_5_div_1_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"div",30),core.TgZ(1,"div",31),core.TgZ(2,"a",38),core._UZ(3,"iframe",39),core.ALo(4,"safeUrl"),core.ALo(5,"videoPipe"),core.qZA(),core.qZA(),core.qZA()),2&rf){const vid_r40=ctx.$implicit;core.xp6(3),core.Q6J("src",core.lcZ(4,1,core.lcZ(5,3,vid_r40)),core.uOi)}}function HomeComponent_section_2_div_2_div_5_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"div"),core.YNc(1,HomeComponent_section_2_div_2_div_5_div_1_Template,6,5,"div",29),core.qZA()),2&rf){const row_r4=core.oxw().$implicit;let tmp_0_0,tmp_1_0;core.Gre("row gx-0 row-cols-1 row-cols-md-",null!==(tmp_0_0=row_r4.grid_row)&&void 0!==tmp_0_0?tmp_0_0:1," justify-content-center w-100 mx-0"),core.xp6(1),core.Q6J("ngForOf",null!==(tmp_1_0=row_r4.vids)&&void 0!==tmp_1_0?tmp_1_0:core.DdM(4,_c0))}}function HomeComponent_section_2_div_2_div_6_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"div",40),core._UZ(1,"div",41),core.ALo(2,"safeTextRows"),core.qZA()),2&rf){const row_r4=core.oxw().$implicit,ctx_r10=core.oxw(2);let tmp_2_0;core.xp6(1),core.Udp("font-family",ctx_r10.storeInfo().fontName)("color",ctx_r10.selectedTheme().color),core.Q6J("innerHTML",core.lcZ(2,6,null!==(tmp_2_0=row_r4.html)&&void 0!==tmp_2_0?tmp_2_0:""),core.oJD)}}function HomeComponent_section_2_div_2_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"div",8),core.YNc(1,HomeComponent_section_2_div_2_div_1_Template,3,9,"div",9),core.YNc(2,HomeComponent_section_2_div_2_div_2_Template,4,13,"div",10),core.YNc(3,HomeComponent_section_2_div_2_div_3_Template,2,5,"div",11),core.YNc(4,HomeComponent_section_2_div_2_div_4_Template,2,5,"div",11),core.YNc(5,HomeComponent_section_2_div_2_div_5_Template,2,5,"div",11),core.YNc(6,HomeComponent_section_2_div_2_div_6_Template,3,8,"div",12),core.qZA()),2&rf){const row_r4=ctx.$implicit;let tmp_0_0;core.xp6(1),core.Q6J("ngIf",""!=(null!==(tmp_0_0=row_r4.text)&&void 0!==tmp_0_0?tmp_0_0:"").trim()),core.xp6(1),core.Q6J("ngIf",0==row_r4.type),core.xp6(1),core.Q6J("ngIf",1==row_r4.type),core.xp6(1),core.Q6J("ngIf",3==row_r4.type),core.xp6(1),core.Q6J("ngIf",4==row_r4.type),core.xp6(1),core.Q6J("ngIf",2==row_r4.type)}}function HomeComponent_section_2_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"section",5),core.TgZ(1,"div",6),core.YNc(2,HomeComponent_section_2_div_2_Template,7,6,"div",7),core.qZA(),core.qZA()),2&rf){const ctx_r1=core.oxw();let tmp_1_0;core.Udp("background-color",ctx_r1.selectedTheme().bg_color),core.xp6(2),core.Q6J("ngForOf",null!==(tmp_1_0=ctx_r1.homeRows)&&void 0!==tmp_1_0?tmp_1_0:core.DdM(4,_c0))}}function HomeComponent_section_3_Template(rf,ctx){if(1&rf){const _r45=core.EpF();core.TgZ(0,"section",42),core.TgZ(1,"div",43),core.TgZ(2,"div",13),core.TgZ(3,"p",14),core._uU(4," COMING SOON "),core.qZA(),core.qZA(),core.TgZ(5,"div"),core.TgZ(6,"div",44),core.TgZ(7,"div",45),core.TgZ(8,"a",46),core.NdJ("click",__name(function(){return core.CHM(_r45),core.oxw().routeToAbout()},"HomeComponent_section_3_Template_a_click_8_listener")),core._UZ(9,"img",47),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA()}if(2&rf){const ctx_r2=core.oxw();let tmp_4_0;core.Udp("background-color",ctx_r2.selectedTheme().bg_color),core.xp6(2),core.Udp("color",ctx_r2.selectedTheme().color),core.xp6(1),core.Gre("text-center text-",ctx_r2.storeInfo().colorStyle.text_code,""),core.Udp("font-family",ctx_r2.storeInfo().fontName),core.xp6(6),core.s9C("src",null!==(tmp_4_0=null==ctx_r2.storeInfo().homeLink?null:ctx_r2.storeInfo().homeLink.toString())&&void 0!==tmp_4_0?tmp_4_0:"",core.LSH)}}__name(HomeComponent_section_2_div_2_div_2_Template,"HomeComponent_section_2_div_2_div_2_Template"),__name(HomeComponent_section_2_div_2_div_3_div_1_Template,"HomeComponent_section_2_div_2_div_3_div_1_Template"),__name(HomeComponent_section_2_div_2_div_3_Template,"HomeComponent_section_2_div_2_div_3_Template"),__name(HomeComponent_section_2_div_2_div_4_div_1_a_1_Template,"HomeComponent_section_2_div_2_div_4_div_1_a_1_Template"),__name(HomeComponent_section_2_div_2_div_4_div_1_Template,"HomeComponent_section_2_div_2_div_4_div_1_Template"),__name(HomeComponent_section_2_div_2_div_4_Template,"HomeComponent_section_2_div_2_div_4_Template"),__name(HomeComponent_section_2_div_2_div_5_div_1_Template,"HomeComponent_section_2_div_2_div_5_div_1_Template"),__name(HomeComponent_section_2_div_2_div_5_Template,"HomeComponent_section_2_div_2_div_5_Template"),__name(HomeComponent_section_2_div_2_div_6_Template,"HomeComponent_section_2_div_2_div_6_Template"),__name(HomeComponent_section_2_div_2_Template,"HomeComponent_section_2_div_2_Template"),__name(HomeComponent_section_2_Template,"HomeComponent_section_2_Template"),__name(HomeComponent_section_3_Template,"HomeComponent_section_3_Template");class HomeComponent{constructor(platformID,cdr,router2,titleService,metaService,loadService,rootComponent,_router,spinner,injector,routingService,sanitizer,location){this.platformID=platformID,this.cdr=cdr,this.router=router2,this.titleService=titleService,this.metaService=metaService,this.loadService=loadService,this.rootComponent=rootComponent,this._router=_router,this.spinner=spinner,this.injector=injector,this.routingService=routingService,this.sanitizer=sanitizer,this.location=location,this.homeRows=[],this.isSpinning=!1,this.storeProducts=void 0}storeInfo(){return globals.O.storeInfo}availableCurrencies(){return globals.O.availableCurrencies}selectedCurrency(){return globals.O.selectedCurrency}templates(){return globals.O.availableTemplates}availableTemplates(){return globals.O.availableTemplates}getLinkImg(name){return globals.O.socials.filter(obj=>obj.name==name)[0].img}matchingStyle(style){return 0==style?"rounded-pill":1==style?"rounded":2==style?"rounded-0":"rounded-circle"}autoCoupon(product){var _a;return null===(_a=this.storeInfo().coupons)||void 0===_a?void 0:_a.filter(coupon=>coupon.products.includes(product.productID)&&coupon.auto).sort(function(a,b){return a.amt<b.amt?1:a.amt>b.amt?-1:0})[0]}fontSize(row){var _a,_b;return this.rootComponent.isMobile()||(null!==(_a=row.grid_row)&&void 0!==_a?_a:1)>=2?"inherit":.5/(null!==(_b=row.grid_row)&&void 0!==_b?_b:1)*100}titleFontSize(row){var _a,_b;return this.rootComponent.isMobile()||(null!==(_a=row.grid_row)&&void 0!==_a?_a:1)>=2?"inherit":.3/(null!==(_b=row.grid_row)&&void 0!==_b?_b:1)*100}products(smartProducts,products){if(void 0!==smartProducts){if(0==smartProducts)return this.newArrivalProducts();if(1==smartProducts)return this.featuredProducts()}var prod=Array();return null==products||products.forEach(p=>{var _a;let pro=null===(_a=this.storeProducts)||void 0===_a?void 0:_a.find(pr=>pr.productID==p);pro&&prod.push(pro)}),prod}mainPrice(product){var _a,_b,_c,_d,_e;let coupon=this.autoCoupon(product);if(coupon){if(0==coupon.style)return(null!==(_a=product.price)&&void 0!==_a?_a:0)/100-(null!==(_b=product.price)&&void 0!==_b?_b:0)/100*coupon.amt;if(1==coupon.style)return(null!==(_c=product.price)&&void 0!==_c?_c:0)/100-100*(null!==(_d=coupon.amt)&&void 0!==_d?_d:0)}return(null!==(_e=product.price)&&void 0!==_e?_e:0)/100}openSocial(l){const link=document.createElement("a");link.target="_blank";let url="";/^http[s]?:\/\//.test(l)||(url+="http://"),url+=l,link.href=url,link.setAttribute("visibility","hidden"),link.click(),link.remove()}newArrivalProducts(){var _a;return null===(_a=this.storeProducts)||void 0===_a?void 0:_a.sort(function(a,b){return a.timestamp>b.timestamp?-1:a.timestamp<b.timestamp?1:0}).slice(0,4)}featuredProducts(){var _a;return null===(_a=this.storeProducts)||void 0===_a?void 0:_a.sort(function(a,b){return a.likes>b.likes?-1:a.likes<b.likes?1:0}).slice(0,4)}imgLinkPressed(link){this.rootComponent.routeToImgLink(link)}ngOnDestroy(){this.loadService.adminComponent=void 0}ngOnInit(){this.loadService.homeComponent=this,this.init()}routeToProduct(productID){this.rootComponent.routeToProduct(productID)}routeToShop(){this.rootComponent.routeToShop()}routeToAbout(){this.rootComponent.routeToAbout()}selectedIndicator(){var _a,_b,_c,_d,_e,_f;let co=null===(_b=null===(_a=globals.O.storeInfo)||void 0===_a?void 0:_a.loading)||void 0===_b?void 0:_b.color,bco=null===(_d=null===(_c=globals.O.storeInfo)||void 0===_c?void 0:_c.loading)||void 0===_d?void 0:_d.bg_color;return{name:null===(_f=null===(_e=globals.O.storeInfo)||void 0===_e?void 0:_e.loading)||void 0===_f?void 0:_f.name,color:"rgba("+co[0]+","+co[1]+","+co[2]+","+co[3]+")",bg_color:"rgba("+bco[0]+","+bco[1]+","+bco[2]+","+bco[3]+")"}}showSpinner(){this.isSpinning||(this.isSpinning=!0,(0,common.NF)(this.platformID)&&this.spinner.show(),setTimeout(()=>{this.spinner.hide()},1500))}selectedTheme(){var _a,_b,_c,_d,_e,_f;let co=null===(_b=null===(_a=globals.O.storeInfo)||void 0===_a?void 0:_a.colorStyle)||void 0===_b?void 0:_b.btn_color,bco=null===(_d=null===(_c=globals.O.storeInfo)||void 0===_c?void 0:_c.colorStyle)||void 0===_d?void 0:_d.bg_color;return{name:null===(_f=null===(_e=globals.O.storeInfo)||void 0===_e?void 0:_e.colorStyle)||void 0===_f?void 0:_f.name,color:"rgba("+co[0]+","+co[1]+","+co[2]+","+co[3]+")",bg_color:"rgba("+bco[0]+","+bco[1]+","+bco[2]+","+bco[3]+")"}}hideSpinner(){this.isSpinning&&(this.isSpinning=!1)}callback(){var _a,_b,_c,_d,_e,_f,_g,_h;if(globals.O.storeInfo.username){this.rootComponent.setFavIcon(null!==(_b=null===(_a=globals.O.storeInfo.profileLink)||void 0===_a?void 0:_a.toString())&&void 0!==_b?_b:"");const storeID=this.router.snapshot.paramMap.get("page");let rows=null!==(_e=null===(_d=null===(_c=globals.O.storeInfo.pages)||void 0===_c?void 0:_c.find(p=>p.url==storeID))||void 0===_d?void 0:_d.rows)&&void 0!==_e?_e:[];this.homeRows=rows,this.addTags(null!==(_f=globals.O.storeInfo.fullName)&&void 0!==_f?_f:"Thred",(null!==(_g=globals.O.storeInfo.profileLink)&&void 0!==_g?_g:new URL("https://shopmythred.com")).toString(),null!==(_h=globals.O.storeInfo.bio)&&void 0!==_h?_h:"Check out my Thred Store!","shopmythred.com/"+globals.O.storeInfo.username),(0,common.NF)(this.platformID)&&(this.showSpinner(),this.loadService.logView(),this.rootComponent.setOptions()),null==globals.O.userInfo&&(0,common.NF)(this.platformID)?this.loadService.getCustomer():0==globals.O.availableCurrencies.length&&(0,common.NF)(this.platformID)?this.loadService.getCountries():0==globals.O.templates.length&&(0,common.NF)(this.platformID)?this.loadService.getTemplates():null==this.storeProducts?this.loadService.getPosts(products=>{this.storeProducts=products}):this.rootComponent.cdr.detectChanges()}else this.routingService.routeTo404(this.getStoreName().isCustom)}init(){const storeInfo=this.getStoreName();this.downloadAllStoreInfo(storeInfo.link,storeInfo.isCustom)}isBrowser(){return(0,common.NF)(this.platformID)}downloadAllStoreInfo(storeName,isCustom=!1){this.loadService.myCallback=()=>this.callback(),this.loadService.getUser(storeName,void 0,isCustom)}rowText(row){var _a;let replaced=null!==(_a=row.html)&&void 0!==_a?_a:"";return this.sanitizer.bypassSecurityTrustHtml(replaced)}getStoreName(){var request="";if("localhost:4200"!=(request=(0,common.PM)(this.platformID)?globals.O.URL:globalThis.location.host)&&"shopmythred.com"!=request)return{isCustom:!0,link:request};return{isCustom:!1,link:this.router.snapshot.paramMap.get("user")}}open(e,item){}formatPrice(price){var priceAsString=new String((price*globals.O.selectedCurrency.rate).toFixed(2));switch(priceAsString.indexOf(".")){case priceAsString.length-1:priceAsString+="00";break;case priceAsString.length-2:priceAsString+="0"}return this.numberWithCommas(this.getCurrencyForCountry(globals.O.selectedCurrency,"US"!=globals.O.selectedCurrency.name)+priceAsString)}numberWithCommas(x){return x.replace(/\B(?=(\d{3})+(?!\d))/g,",")}getCurrencyForCountry(country,shouldShowName){var returnItem=country.currency_symbol;return shouldShowName&&(returnItem=country.name+" "+returnItem),returnItem}addTags(title,imgUrl,description,url){this.metaService.updateTag({property:"og:title",content:title+" - Home"}),this.metaService.updateTag({property:"og:image:width",content:"200"}),this.metaService.updateTag({property:"og:image:height",content:"200"}),this.metaService.updateTag({property:"og:image",content:imgUrl}),this.metaService.updateTag({property:"og:url",content:url}),this.metaService.updateTag({property:"og:description",content:description}),this.titleService.setTitle(title),this.metaService.updateTag({name:"description",content:description})}}__name(HomeComponent,"HomeComponent"),HomeComponent.\u0275fac=__name(function(t){return new(t||HomeComponent)(core.Y36(core.Lbi),core.Y36(core.sBO),core.Y36(router.gz),core.Y36(platform_browser.Dx),core.Y36(platform_browser.h_),core.Y36(load_service.J),core.Y36(app_component.y),core.Y36(router.F0),core.Y36(ngx_spinner.t2),core.Y36(core.zs3),core.Y36(routing_service.Z),core.Y36(platform_browser.H7),core.Y36(common.lw))},"HomeComponent_Factory"),HomeComponent.\u0275cmp=core.Xpm({type:HomeComponent,selectors:[["app-home"]],decls:4,vars:3,consts:[["size","large",3,"bdColor","color","type","fullScreen",4,"ngIf"],["class","py-5 pt-0",3,"background-color",4,"ngIf"],["class","py-5",3,"background-color",4,"ngIf"],["size","large",3,"bdColor","color","type","fullScreen"],[1,"text-center","mt-5"],[1,"py-5","pt-0"],[1,"w-100"],["class","w-100 mb-5",4,"ngFor","ngForOf"],[1,"w-100","mb-5"],["class","d-flex align-items-center justify-content-center pb-1 mb-5","style","height: 50px; font-weight: bold; font-size: 30px",3,"color",4,"ngIf"],["class","w-100",4,"ngIf"],[3,"class",4,"ngIf"],["class","w-100 mx-0",4,"ngIf"],[1,"d-flex","align-items-center","justify-content-center","pb-1","mb-5",2,"height","50px","font-weight","bold","font-size","30px"],[2,"line-height","1.2em"],["class","col mb-3",4,"ngFor","ngForOf"],[1,"col","mb-3"],["role","button",3,"href","click"],["alt","ok",1,"card-img-top",3,"src"],[1,"card-body","p-2","pb-0"],[1,"text-center"],[1,"fw-bolder"],["role","button",2,"text-decoration","none",3,"href","click"],[1,"card-footer","p-4","pt-0","pt-0","pb-4","border-top-0","bg-transparent"],["class","text-center fw-bolder d-flex justify-content-center align-items-center","style","font-size: 15px",3,"font-family",4,"ngIf"],[1,"text-center","d-flex","justify-content-center","align-items-center","w-100"],["role","button",2,"font-weight","bold","max-width","50vh",3,"href","click"],[1,"text-center","fw-bolder","d-flex","justify-content-center","align-items-center",2,"font-size","15px"],[1,"old-price"],["class","col mb-1",4,"ngFor","ngForOf"],[1,"col","mb-1"],[1,"d-block","align-items-center","text-center","text-sm-start","w-100"],["role","button",1,"ms-0","me-0",3,"click"],["alt","Product",2,"width","100%","height","auto",3,"src"],["class","col text-center mt-3",4,"ngFor","ngForOf"],[1,"col","text-center","mt-3"],["role","button","style","text-decoration: none",3,"class","background-color","color","click",4,"ngIf"],["role","button",2,"text-decoration","none",3,"click"],["role","button",1,"ms-0","me-0"],["width","100%",2,"aspect-ratio","16/9",3,"src"],[1,"w-100","mx-0"],[1,"p-3",3,"innerHTML"],[1,"py-5"],[1,"container","mt-5"],[1,"d-block","align-items-center","pt-0"],[1,"d-block","align-items-center","text-center","text-sm-start"],["role","button",1,"mx-auto","me-sm-4",3,"click"],["alt","Product",2,"max-width","100%","height","auto",3,"src"]],template:__name(function(rf,ctx){if(1&rf&&(core._UZ(0,"router-outlet"),core.YNc(1,HomeComponent_ngx_spinner_1_Template,3,10,"ngx-spinner",0),core.YNc(2,HomeComponent_section_2_Template,3,5,"section",1),core.YNc(3,HomeComponent_section_3_Template,10,12,"section",2)),2&rf){let tmp_1_0,tmp_2_0;core.xp6(1),core.Q6J("ngIf",ctx.isBrowser()),core.xp6(1),core.Q6J("ngIf",ctx.isBrowser()&&(null==(tmp_1_0=ctx.storeInfo())?null:tmp_1_0.active)&&0!=(null==ctx.storeProducts?null:ctx.storeProducts.length)),core.xp6(1),core.Q6J("ngIf",ctx.isBrowser()&&(null==(tmp_2_0=ctx.storeInfo())?null:tmp_2_0.username)&&(!(null!=(tmp_2_0=ctx.storeInfo())&&tmp_2_0.active)||0==(null==ctx.storeProducts?null:ctx.storeProducts.length)))}},"HomeComponent_Template"),styles:[".centered[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.cover[_ngcontent-%COMP%]{color:#fff;position:relative;background-repeat:no-repeat;background-position-x:center;background-position-y:top;background-size:cover}.low[_ngcontent-%COMP%]{color:#a5652a}.bad[_ngcontent-%COMP%]{font-size:inherit}.mid[_ngcontent-%COMP%]{color:silver}.high[_ngcontent-%COMP%]{color:gold}.old-price[_ngcontent-%COMP%]{text-decoration:line-through;-webkit-text-decoration-style:solid;text-decoration-style:solid;color:gray}.new-price[_ngcontent-%COMP%]{text-decoration:none}.middle[_ngcontent-%COMP%]{color:#fff;position:relative;background-repeat:no-repeat;background-position-x:center;background-position-y:center;background-size:cover}"]});var card=__webpack_require__(38182),icon=__webpack_require__(74848),applicationPipes_module=__webpack_require__(72283),products_pipe_pipe=__webpack_require__(53189),store_checker_pipe=__webpack_require__(57987),safe_url_pipe=__webpack_require__(91009),video_pipe_pipe=__webpack_require__(40049),safe_text_rows_pipe=__webpack_require__(49311);const routes=[{path:"",component:HomeComponent}];class HomeModule{}__name(HomeModule,"HomeModule"),HomeModule.\u0275fac=__name(function(t){return new(t||HomeModule)},"HomeModule_Factory"),HomeModule.\u0275mod=core.oAB({type:HomeModule,bootstrap:[HomeComponent]}),HomeModule.\u0275inj=core.cJS({providers:[globals.O],imports:[[common.ez,card.QW,icon.Ps,ngx_spinner.ef,router.Bz.forChild(routes),applicationPipes_module.G]]}),core.B6R(HomeComponent,[router.lC,common.O5,ngx_spinner.Ro,common.sg],[products_pipe_pipe.H,store_checker_pipe.U,safe_url_pipe.Q,video_pipe_pipe.y,safe_text_rows_pipe.L])},53189:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>ProductsPipePipe});var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(89724);class ProductsPipePipe{transform(_,data={}){var _a;if(void 0!==data.row.smart_products){if(0==data.row.smart_products)return this.newArrivalProducts(data.products);if(1==data.row.smart_products)return this.featuredProducts(data.products);if(2==data.row.smart_products)return this.allProducts(data.products)}var prod=Array();return null===(_a=data.row.products)||void 0===_a||_a.forEach(p=>{var _a2;let pro=null===(_a2=data.products)||void 0===_a2?void 0:_a2.find(pr=>pr.productID==p);pro&&prod.push(pro)}),prod}newArrivalProducts(products){return null==products?void 0:products.sort(function(a,b){return a.timestamp>b.timestamp?-1:a.timestamp<b.timestamp?1:0}).slice(0,4)}featuredProducts(products){return null==products?void 0:products.sort(function(a,b){return a.likes>b.likes?-1:a.likes<b.likes?1:0}).slice(0,4)}allProducts(products){return products}}__name(ProductsPipePipe,"ProductsPipePipe"),ProductsPipePipe.\u0275fac=__name(function(t){return new(t||ProductsPipePipe)},"ProductsPipePipe_Factory"),ProductsPipePipe.\u0275pipe=_angular_core__WEBPACK_IMPORTED_MODULE_0__.Yjl({name:"productsPipe",type:ProductsPipePipe,pure:!0})},49311:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>SafeTextRowsPipe});var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(89724),_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(14800);class SafeTextRowsPipe{constructor(sanitizer){this.sanitizer=sanitizer}transform(value,format=!1){let replaced=null!=value?value:"";return format&&(replaced=replaced.replace(/px/g,"; font-size: 8px; ").replace(/style="/g,'style="word-wrap:break-word; word-break: break-all; text-overflow: ellipsis; margin-right: 5px; ')),this.sanitizer.bypassSecurityTrustHtml(replaced.replace(/style="/g,'style="white-space: initial; '))}}__name(SafeTextRowsPipe,"SafeTextRowsPipe"),SafeTextRowsPipe.\u0275fac=__name(function(t){return new(t||SafeTextRowsPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Y36(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.H7,16))},"SafeTextRowsPipe_Factory"),SafeTextRowsPipe.\u0275pipe=_angular_core__WEBPACK_IMPORTED_MODULE_0__.Yjl({name:"safeTextRows",type:SafeTextRowsPipe,pure:!0})},91009:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>SafeUrlPipe});var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(89724),_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(14800);class SafeUrlPipe{constructor(sanitizer){this.sanitizer=sanitizer}transform(value){return this.sanitizer.bypassSecurityTrustResourceUrl(value)}}__name(SafeUrlPipe,"SafeUrlPipe"),SafeUrlPipe.\u0275fac=__name(function(t){return new(t||SafeUrlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Y36(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.H7,16))},"SafeUrlPipe_Factory"),SafeUrlPipe.\u0275pipe=_angular_core__WEBPACK_IMPORTED_MODULE_0__.Yjl({name:"safeUrl",type:SafeUrlPipe,pure:!0})},40049:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>VideoPipePipe});var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(89724);class VideoPipePipe{transform(value){return value.replace("youtu.be","youtube.com/embed").replace("watch?v=","embed/")}}__name(VideoPipePipe,"VideoPipePipe"),VideoPipePipe.\u0275fac=__name(function(t){return new(t||VideoPipePipe)},"VideoPipePipe_Factory"),VideoPipePipe.\u0275pipe=_angular_core__WEBPACK_IMPORTED_MODULE_0__.Yjl({name:"videoPipe",type:VideoPipePipe,pure:!0})}};