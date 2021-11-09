exports.id=658,exports.ids=[658],exports.modules={95658:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ProductModule:()=>ProductModule});var common=__webpack_require__(38583),globals=__webpack_require__(37503),card=__webpack_require__(93738),ngx_spinner=__webpack_require__(79866),asyncToGenerator=__webpack_require__(16304),core=__webpack_require__(37716),model_viewer_component=__webpack_require__(5142),product_in_cart_model=__webpack_require__(49991),login_component=__webpack_require__(98458),ngx_drag_scroll=__webpack_require__(93494),angular_fire_firestore=__webpack_require__(56717),router=__webpack_require__(95987),platform_browser=__webpack_require__(39075),load_service=__webpack_require__(83847),ng_bootstrap=__webpack_require__(90674),app_component=__webpack_require__(55041),routing_service=__webpack_require__(78078),icon=__webpack_require__(76627);const _c0=["carousel"];function ProductComponent_ngx_spinner_1_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"ngx-spinner",3),core.TgZ(1,"h3",4),core._uU(2),core.qZA(),core.qZA()),2&rf){const ctx_r0=core.oxw();let tmp_6_0;core.Udp("color",ctx_r0.selectedIndicator().color),core.s9C("bdColor",ctx_r0.selectedIndicator().bg_color),core.s9C("color",ctx_r0.selectedIndicator().color),core.s9C("type",ctx_r0.selectedIndicator().name),core.Q6J("fullScreen",!0),core.xp6(1),core.Udp("font-family",ctx_r0.storeInfo().fontName),core.xp6(1),core.hij("",null==(tmp_6_0=ctx_r0.storeInfo())?null:tmp_6_0.fullName,"\n")}}function ProductComponent_section_2_div_9_Template(rf,ctx){if(1&rf){const _r14=core.EpF();core.TgZ(0,"div",43),core.TgZ(1,"div",44),core.TgZ(2,"a",45),core.NdJ("click",function ProductComponent_section_2_div_9_Template_a_click_2_listener(){const i_r12=core.CHM(_r14).index;return core.oxw(2).scrollTo(i_r12)}),core._UZ(3,"img",46),core.qZA(),core.qZA(),core.qZA()}if(2&rf){const img_r11=ctx.$implicit,i_r12=ctx.index,ctx_r5=core.oxw(2);core.xp6(1),core.Gre("h-100 w-100 rounded bg-",ctx_r5.storeInfo().colorStyle.text_code,""),core.xp6(2),core.ekj("selected",ctx_r5.selectedIndex==i_r12),core.Q6J("src",img_r11.img,core.LSH)}}function ProductComponent_section_2_a_12_Template(rf,ctx){if(1&rf){const _r16=core.EpF();core.TgZ(0,"a",47),core.NdJ("click",function ProductComponent_section_2_a_12_Template_a_click_0_listener(){core.CHM(_r16);return core.oxw(2).open()}),core.TgZ(1,"mat-icon",48),core.TgZ(2,"span",49),core._uU(3," view_in_ar "),core.qZA(),core.qZA(),core._uU(4," VIEW IN 3D "),core.qZA()}if(2&rf){const ctx_r6=core.oxw(2);core.Gre("d-inline-flex btn btn-outline-",ctx_r6.storeInfo().colorStyle.text_code," rounded-pill  align-items-center justify-content-center fw-bold"),core.Udp("font-family",ctx_r6.storeInfo().fontName),core.Q6J("hidden",null==ctx_r6.selectedTemplate()),core.xp6(1),core.Udp("color",ctx_r6.selectedTheme().color)}}function ProductComponent_section_2_ng_template_13_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"a",50),core.TgZ(1,"mat-icon",48),core.TgZ(2,"span",51),core._uU(3," crop_free "),core.qZA(),core.qZA(),core._uU(4," 3D Not Supported "),core.qZA()),2&rf){const ctx_r8=core.oxw(2);core.Gre("d-inline-flex btn btn-outline-",ctx_r8.storeInfo().colorStyle.text_code," rounded-pill mb-2 align-items-center justify-content-center fw-bold"),core.Udp("font-family",ctx_r8.storeInfo().fontName),core.Q6J("hidden",null==ctx_r8.selectedTemplate()),core.xp6(1),core.Udp("color",ctx_r8.selectedTheme().color)}}function ProductComponent_section_2_button_38_Template(rf,ctx){if(1&rf){const _r19=core.EpF();core.TgZ(0,"button",52),core.NdJ("click",function ProductComponent_section_2_button_38_Template_button_click_0_listener(){const num_r17=core.CHM(_r19).$implicit;return core.oxw(2).selectQuantity(num_r17)}),core._uU(1),core.qZA()}if(2&rf){const num_r17=ctx.$implicit,ctx_r9=core.oxw(2);core.Udp("font-family",ctx_r9.storeInfo().fontName)("color",ctx_r9.selectedTheme().color),core.xp6(1),core.Oqu(num_r17)}}function ProductComponent_section_2_button_47_Template(rf,ctx){if(1&rf){const _r22=core.EpF();core.TgZ(0,"button",36),core.NdJ("click",function ProductComponent_section_2_button_47_Template_button_click_0_listener($event){const size_r20=core.CHM(_r22).$implicit;return core.oxw(2).selectSize(size_r20,$event)}),core._uU(1),core.qZA()}if(2&rf){const size_r20=ctx.$implicit,ctx_r10=core.oxw(2);core.Gre("btn btn-outline-",ctx_r10.storeInfo().colorStyle.text_code," my-1 mx-1"),core.Udp("font-family",ctx_r10.storeInfo().fontName),core.xp6(1),core.Oqu(size_r20)}}function ProductComponent_section_2_Template(rf,ctx){if(1&rf){const _r24=core.EpF();core.TgZ(0,"section",5),core.TgZ(1,"div",6),core.TgZ(2,"div",7),core.TgZ(3,"div",8),core.TgZ(4,"div"),core.TgZ(5,"a",9),core.NdJ("click",function ProductComponent_section_2_Template_a_click_5_listener(){core.CHM(_r24);return core.oxw().open()}),core._UZ(6,"img",10),core.qZA(),core.TgZ(7,"drag-scroll",11,12),core.YNc(9,ProductComponent_section_2_div_9_Template,4,6,"div",13),core.qZA(),core.TgZ(10,"div",14),core.TgZ(11,"div",15),core.YNc(12,ProductComponent_section_2_a_12_Template,5,9,"a",16),core.YNc(13,ProductComponent_section_2_ng_template_13_Template,5,9,"ng-template",null,17,core.W1O),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.TgZ(15,"div",8),core.TgZ(16,"div",18),core.TgZ(17,"div"),core.TgZ(18,"div",19),core.TgZ(19,"div",20),core.TgZ(20,"h5",21),core._uU(21),core.qZA(),core.qZA(),core.qZA(),core.TgZ(22,"div",22),core.TgZ(23,"div",23),core.TgZ(24,"div",24),core.TgZ(25,"div",20),core._UZ(26,"h5",25),core.qZA(),core.qZA(),core.TgZ(27,"div",26),core.TgZ(28,"h5",27),core._uU(29),core.qZA(),core.qZA(),core.TgZ(30,"div",24),core.TgZ(31,"div",23),core._UZ(32,"h5",28),core._UZ(33,"h5",29),core.qZA(),core.TgZ(34,"div",30),core.TgZ(35,"button",31),core._uU(36),core.qZA(),core.TgZ(37,"div",32),core.YNc(38,ProductComponent_section_2_button_38_Template,2,6,"button",33),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.TgZ(39,"div",34),core.TgZ(40,"div",20),core.TgZ(41,"div",24),core.TgZ(42,"div",23),core._UZ(43,"h5",25),core.qZA(),core.qZA(),core.qZA(),core.TgZ(44,"div",35),core.TgZ(45,"button",36),core.NdJ("click",function ProductComponent_section_2_Template_button_click_45_listener($event){core.CHM(_r24);const ctx_r25=core.oxw();return ctx_r25.selectSize(ctx_r25.sizes(!1)[0],$event)}),core._uU(46),core.qZA(),core.YNc(47,ProductComponent_section_2_button_47_Template,2,6,"button",37),core.qZA(),core.qZA(),core.TgZ(48,"div",38),core.TgZ(49,"a",39),core.NdJ("click",function ProductComponent_section_2_Template_a_click_49_listener(){core.CHM(_r24);return core.oxw().addToCart()}),core._uU(50," ADD TO BAG "),core.TgZ(51,"mat-icon",40),core.TgZ(52,"span",41),core._uU(53," local_mall "),core.qZA(),core.qZA(),core.qZA(),core.TgZ(54,"div",20),core.TgZ(55,"a",42),core._uU(56),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA()}if(2&rf){const _r7=core.MAs(14),ctx_r1=core.oxw();let tmp_4_0,tmp_6_0,tmp_14_0,tmp_19_0,tmp_22_0;core.Udp("background-color",ctx_r1.selectedTheme().bg_color),core.xp6(2),core.Q6J("hidden",null==ctx_r1.selectedProduct()||null==ctx_r1.selectedTemplate()),core.xp6(2),core.Gre("card h-100 bg-",ctx_r1.storeInfo().colorStyle.back_code,""),core.ekj("border-secondary","light"==ctx_r1.storeInfo().colorStyle.text_code),core.xp6(2),core.s9C("src",null!==(tmp_4_0=ctx_r1.selectedProduct().images[ctx_r1.selectedIndex].img)&&void 0!==tmp_4_0?tmp_4_0:"",core.LSH),core.xp6(1),core.Q6J("scrollbar-hidden",!0),core.xp6(2),core.Q6J("ngForOf",null==(tmp_6_0=ctx_r1.selectedProduct())?null:tmp_6_0.images),core.xp6(3),core.Q6J("ngIf",ctx_r1.has3D())("ngIfElse",_r7),core.xp6(4),core.Gre("card h-100 bg-",ctx_r1.storeInfo().colorStyle.back_code,""),core.ekj("border-secondary","light"==ctx_r1.storeInfo().colorStyle.text_code),core.Q6J("hidden",null==ctx_r1.selectedTemplate()),core.xp6(4),core.Udp("font-family",ctx_r1.storeInfo().fontName)("color",ctx_r1.selectedTheme().color),core.xp6(1),core.Oqu(null!==(tmp_14_0=null==(tmp_14_0=ctx_r1.selectedProduct())?null:tmp_14_0.name)&&void 0!==tmp_14_0?tmp_14_0:""),core.xp6(4),core.Udp("color",ctx_r1.selectedTheme().color),core.xp6(1),core.Udp("font-family",ctx_r1.storeInfo().fontName),core.Q6J("innerHTML","Details",core.oJD),core.xp6(2),core.Udp("font-family",ctx_r1.storeInfo().fontName),core.xp6(1),core.Oqu(ctx_r1.formatPrice((null!==(tmp_19_0=null==(tmp_19_0=ctx_r1.selectedProduct())?null:tmp_19_0.price)&&void 0!==tmp_19_0?tmp_19_0:0)/100)),core.xp6(3),core.Udp("font-family",ctx_r1.storeInfo().fontName)("color",ctx_r1.selectedTheme().color),core.Q6J("innerHTML",null!==(tmp_22_0=null==(tmp_22_0=ctx_r1.selectedProduct())?null:tmp_22_0.description)&&void 0!==tmp_22_0?tmp_22_0:"",core.oJD),core.xp6(1),core.Udp("font-family",ctx_r1.storeInfo().fontName)("color",ctx_r1.selectedTheme().color),core.Q6J("innerHTML",ctx_r1.formattedInfo(),core.oJD),core.xp6(2),core.Gre("btn btn-outline-",ctx_r1.storeInfo().colorStyle.text_code," btn-sm mb-5"),core.Udp("font-family",ctx_r1.storeInfo().fontName),core.xp6(1),core.hij("Qty: ",ctx_r1.quantity(),""),core.xp6(1),core.Udp("background-color",ctx_r1.selectedTheme().bg_color),core.ekj("border-secondary","light"==ctx_r1.storeInfo().colorStyle.text_code),core.xp6(1),core.Q6J("ngForOf",ctx_r1.quantityNumbers),core.xp6(5),core.Udp("color",ctx_r1.selectedTheme().color)("font-family",ctx_r1.storeInfo().fontName),core.Q6J("innerHTML","Choose Your Size",core.oJD),core.xp6(2),core.Gre("btn btn-outline-",ctx_r1.storeInfo().colorStyle.text_code," active my-1 mx-1"),core.Udp("font-family",ctx_r1.storeInfo().fontName),core.xp6(1),core.Oqu(ctx_r1.sizes(!1)[0]),core.xp6(1),core.Q6J("ngForOf",ctx_r1.sizes(!0)),core.xp6(2),core.Udp("font-family",ctx_r1.storeInfo().fontName)("color",ctx_r1.selectedTheme().bg_color)("background-color",ctx_r1.selectedTheme().color),core.xp6(2),core.Udp("color",ctx_r1.selectedTheme().bg_color),core.xp6(4),core.Udp("font-family",ctx_r1.storeInfo().fontName)("color",ctx_r1.selectedTheme().color),core.xp6(1),core.hij("\ud83d\ude80 Order now and get it before ",ctx_r1.nextweek(),"")}}function ProductComponent_section_3_Template(rf,ctx){if(1&rf){const _r28=core.EpF();core.TgZ(0,"section",5),core.TgZ(1,"div",53),core.TgZ(2,"div",54),core.TgZ(3,"p",55),core._uU(4," COMING SOON "),core.qZA(),core.qZA(),core.TgZ(5,"div"),core.TgZ(6,"div",56),core.TgZ(7,"div",57),core.TgZ(8,"a",58),core.NdJ("click",function ProductComponent_section_3_Template_a_click_8_listener(){core.CHM(_r28);return core.oxw().routeToAbout()}),core._UZ(9,"img",59),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA()}if(2&rf){const ctx_r2=core.oxw();let tmp_4_0;core.Udp("background-color",ctx_r2.selectedTheme().bg_color),core.xp6(2),core.Udp("color",ctx_r2.selectedTheme().color),core.xp6(1),core.Gre("text-center text-",ctx_r2.storeInfo().colorStyle.text_code,""),core.Udp("font-family",ctx_r2.storeInfo().fontName),core.xp6(6),core.s9C("src",null!==(tmp_4_0=null==ctx_r2.storeInfo().homeLink?null:ctx_r2.storeInfo().homeLink.toString())&&void 0!==tmp_4_0?tmp_4_0:"",core.LSH)}}function ProductComponent_footer_4_div_22_Template(rf,ctx){if(1&rf){const _r32=core.EpF();core.TgZ(0,"div",76),core.TgZ(1,"a",9),core.NdJ("click",function ProductComponent_footer_4_div_22_Template_a_click_1_listener(){const social_r30=core.CHM(_r32).$implicit;return core.oxw(2).openSocial(social_r30.link)}),core._UZ(2,"img",77),core.qZA(),core.qZA()}if(2&rf){const social_r30=ctx.$implicit,ctx_r29=core.oxw(2);core.Udp("width",45,"px"),core.xp6(2),core.Udp("width",45,"px"),core.Q6J("src",ctx_r29.getLinkImg(social_r30.name),core.LSH)}}function ProductComponent_footer_4_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"footer"),core.TgZ(1,"div",60),core.TgZ(2,"div",61),core.TgZ(3,"div",62),core.TgZ(4,"a",63),core._UZ(5,"img",64),core.qZA(),core.qZA(),core.TgZ(6,"div",65),core.TgZ(7,"a",63),core._UZ(8,"img",66),core.qZA(),core.qZA(),core.TgZ(9,"div",65),core.TgZ(10,"a",63),core._UZ(11,"img",67),core.qZA(),core.qZA(),core.TgZ(12,"div",65),core.TgZ(13,"a",63),core._UZ(14,"img",68),core.qZA(),core.qZA(),core.TgZ(15,"div",65),core.TgZ(16,"a",63),core._UZ(17,"img",69),core.qZA(),core.qZA(),core.TgZ(18,"div",65),core.TgZ(19,"a",63),core._UZ(20,"img",70),core.qZA(),core.qZA(),core.qZA(),core.TgZ(21,"div",71),core.YNc(22,ProductComponent_footer_4_div_22_Template,3,5,"div",72),core.qZA(),core.TgZ(23,"div",73),core._UZ(24,"div",74),core._UZ(25,"div",74),core._UZ(26,"div",74),core._UZ(27,"div",74),core._UZ(28,"div",74),core.qZA(),core.qZA(),core.TgZ(29,"div",75),core.TgZ(30,"p"),core._uU(31),core.qZA(),core.qZA(),core.TgZ(32,"div",75),core.TgZ(33,"p"),core._uU(34,"Powered by Thred"),core.qZA(),core.qZA(),core.qZA()),2&rf){const ctx_r3=core.oxw();core.Gre("py-5 bg-",ctx_r3.storeInfo().colorStyle.back_code,""),core.xp6(3),core.Udp("width",50,"px"),core.xp6(2),core.Udp("width",50,"px"),core.xp6(1),core.Udp("width",50,"px"),core.xp6(2),core.Udp("width",50,"px"),core.xp6(1),core.Udp("width",50,"px"),core.xp6(2),core.Udp("width",50,"px"),core.xp6(1),core.Udp("width",50,"px"),core.xp6(2),core.Udp("width",50,"px"),core.xp6(1),core.Udp("width",50,"px"),core.xp6(2),core.Udp("width",50,"px"),core.xp6(1),core.Udp("width",50,"px"),core.xp6(2),core.Udp("width",50,"px"),core.xp6(2),core.Q6J("ngForOf",ctx_r3.storeInfo().socials),core.xp6(2),core.Udp("width",50,"px"),core.xp6(1),core.Udp("width",50,"px"),core.xp6(1),core.Udp("width",50,"px"),core.xp6(1),core.Udp("width",50,"px"),core.xp6(1),core.Udp("width",50,"px"),core.xp6(2),core.Gre("m-0 text-center text-",ctx_r3.storeInfo().colorStyle.text_code,""),core.Udp("font-family",ctx_r3.storeInfo().fontName),core.xp6(1),core.hij("\xa9 ",ctx_r3.storeInfo().fullName," 2021"),core.xp6(2),core.Gre("m-0 text-center text-",ctx_r3.storeInfo().colorStyle.text_code,""),core.Udp("font-family",ctx_r3.storeInfo().fontName)}}class ProductComponent{constructor(platformID,cdr,db,router,titleService,metaService,loadService,modalService,route,rootComponent,_router,spinner,routingService){this.platformID=platformID,this.cdr=cdr,this.db=db,this.router=router,this.titleService=titleService,this.metaService=metaService,this.loadService=loadService,this.modalService=modalService,this.route=route,this.rootComponent=rootComponent,this._router=_router,this.spinner=spinner,this.routingService=routingService,this.selectedIndex=0,this.productToBuy=new product_in_cart_model.P,this.quantityNumbers=[],this.isSpinning=!1,this.productToBuy.product=void 0,globals.O.selectedTemplate=void 0,globals.O.selectedCurrency=void 0,globals.O.storeInfo.uid=void 0}storeInfo(){return globals.O.storeInfo}availableCurrencies(){return globals.O.availableCurrencies}selectedCurrency(){return globals.O.selectedCurrency}templates(){return globals.O.availableTemplates}availableTemplates(){return globals.O.availableTemplates}selectedTemplate(){return globals.O.selectedTemplate}selectedProduct(){return this.productToBuy.product}getLinkImg(name){return globals.O.socials.filter(obj=>obj.name==name)[0].img}openSocial(l){const link=document.createElement("a");link.target="_blank";let url="";/^http[s]?:\/\//.test(l)||(url+="http://"),url+=l,link.href=url,link.setAttribute("visibility","hidden"),link.click(),link.remove()}selectedIndicator(){var _a,_b,_c,_d,_e,_f;let co=null===(_b=null===(_a=globals.O.storeInfo)||void 0===_a?void 0:_a.loading)||void 0===_b?void 0:_b.color,bco=null===(_d=null===(_c=globals.O.storeInfo)||void 0===_c?void 0:_c.loading)||void 0===_d?void 0:_d.bg_color;return{name:null===(_f=null===(_e=globals.O.storeInfo)||void 0===_e?void 0:_e.loading)||void 0===_f?void 0:_f.name,color:"rgba("+co[0]+","+co[1]+","+co[2]+","+co[3]+")",bg_color:"rgba("+bco[0]+","+bco[1]+","+bco[2]+","+bco[3]+")"}}routeToAbout(){this.rootComponent.routeToAbout()}ngOnInit(){const productID=this.getProductID();this.loadService.myCallback=()=>this.checkLoad(),this.loadService.getPost(productID,()=>{this.selectedIndex=0,this.checkLoad()},void 0,void 0,void 0,this.productToBuy);for(let i=0;i<9;i++)this.quantityNumbers.push(i+1)}ngAfterViewInit(){}open(){if((0,common.NF)(this.platformID)&&this.has3D()){this.modalService.open(model_viewer_component.a,{size:"lg"}).componentInstance.data={template:this.selectedTemplate(),product:this.selectedProduct()}}}has3D(){var _a,_b;return null!==(_b=null===(_a=this.selectedTemplate())||void 0===_a?void 0:_a.has3D)&&void 0!==_b&&_b}nextweek(){var d=new Date;return this.format(new Date(d.getFullYear(),d.getMonth(),d.getDate()+10))}format(d){return globals.O.days[d.getDay()]+", "+globals.O.months[d.getMonth()]+" "+d.getDate()}scrollTo(i){this.selectedIndex=i}formattedInfo(){var _a,_b;return null!==(_b=null===(_a=this.selectedTemplate())||void 0===_a?void 0:_a.moreInfo.replace(/\\n/g,"<br>"))&&void 0!==_b?_b:""}sizes(popFirst){var _a,_b,_c,_d;return popFirst?null!==(_b=null===(_a=this.selectedTemplate())||void 0===_a?void 0:_a.sizes.slice(1))&&void 0!==_b?_b:[]:null!==(_d=null===(_c=this.selectedTemplate())||void 0===_c?void 0:_c.sizes)&&void 0!==_d?_d:[]}isBrowser(){return(0,common.NF)(this.platformID)}selectedTheme(){var _a,_b,_c,_d,_e,_f;let co=null===(_b=null===(_a=globals.O.storeInfo)||void 0===_a?void 0:_a.colorStyle)||void 0===_b?void 0:_b.btn_color,bco=null===(_d=null===(_c=globals.O.storeInfo)||void 0===_c?void 0:_c.colorStyle)||void 0===_d?void 0:_d.bg_color;return{name:null===(_f=null===(_e=globals.O.storeInfo)||void 0===_e?void 0:_e.colorStyle)||void 0===_f?void 0:_f.name,color:"rgba("+co[0]+","+co[1]+","+co[2]+","+co[3]+")",bg_color:"rgba("+bco[0]+","+bco[1]+","+bco[2]+","+bco[3]+")"}}showSpinner(){this.isSpinning||(this.isSpinning=!0,(0,common.NF)(this.platformID)&&this.spinner.show(),setTimeout(()=>{this.spinner.hide()},1e3))}hideSpinner(){this.isSpinning&&(this.isSpinning=!1)}getStoreName(){var request="";if((0,common.PM)(this.platformID)?(request=globals.O.URL,console.log(request)):request=globalThis.location.host,"localhost:4200"!=request&&"shopmythred.com"!=request)return{isCustom:!0,link:request};return{isCustom:!1,link:this.router.snapshot.paramMap.get("user")}}checkLoad(){var _a;if(this.productToBuy.product){if(console.log(this.productToBuy.product),!this.productToBuy.product.isAvailable)return this.addTags(this.productToBuy.product.name,this.productToBuy.product.url.toString(),"* PRODUCT UNAVAILABLE *","https://shopmythred.com"),void((0,common.NF)(this.platformID)&&this.routingService.routeToStore404(this.getStoreName().link,this.getStoreName().isCustom));if(this.addTags(this.productToBuy.product.name,this.productToBuy.product.url.toString(),this.formatPrice(this.productToBuy.product.price/100)+". "+this.productToBuy.product.description,"https://shopmythred.com"),(0,common.NF)(this.platformID))if(null==globals.O.storeInfo.uid){const storeInfo=this.getStoreName();this.loadService.getUser(storeInfo.link,void 0,storeInfo.isCustom)}else this.showSpinner(),this.rootComponent.setFavIcon(globals.O.storeInfo.profileLink.toString()),globals.O.storeInfo.uid!=this.productToBuy.product.uid?this.routingService.routeToStore404(this.getStoreName().link,this.getStoreName().isCustom):null==globals.O.userInfo&&(0,common.NF)(this.platformID)?this.loadService.getCustomer():null==globals.O.selectedTemplate?(this.rootComponent.setOptions(),this.loadService.getTemplate(null!==(_a=this.productToBuy.product.productType)&&void 0!==_a?_a:"")):null==globals.O.selectedCurrency?this.loadService.getCountries():((0,common.NF)(this.platformID)&&this.loadService.logView(),this.cdr.detectChanges())}}selectSize(size,$event){this.productToBuy.size=size;let clickedElement=$event.target||$event.srcElement;if("BUTTON"===clickedElement.nodeName){let isCertainButtonAlreadyActive=clickedElement.parentElement.querySelector(".active");isCertainButtonAlreadyActive&&isCertainButtonAlreadyActive.classList.remove("active"),clickedElement.className+=" active"}}selectQuantity(qty){this.productToBuy.quantity=Number(qty)}quantity(){var _a;return null!==(_a=this.productToBuy.quantity)&&void 0!==_a?_a:"1"}closeBtn(){console.log("Getting Cart"),this.rootComponent.cart=void 0,this.rootComponent.getCart(),this.addToCart()}addToCart(){var _this=this;return(0,asyncToGenerator.Z)(function*(){var _a,_b;if(null==_this.productToBuy.product)return;_this.productToBuy.product=JSON.parse(JSON.stringify(_this.productToBuy.product));let product=JSON.parse(JSON.stringify(_this.productToBuy)),mappedData={UID:null===(_a=product.product)||void 0===_a?void 0:_a.uid,Size:product.size,Qty:product.quantity,Timestamp:new Date,Post_ID:null===(_b=product.product)||void 0===_b?void 0:_b.productID};if(yield _this.loadService.authenticated())yield _this.loadService.addToCart(mappedData);else{let ngbModalOptions={size:"lg"};const modalRef=_this.modalService.open(login_component.G,ngbModalOptions);let sub=modalRef.dismissed.subscribe(result=>{"success"==result&&_this.closeBtn(),sub.unsubscribe()});modalRef.componentInstance.authMode=1}})()}addTags(title,imgUrl,description,url){var _a,_b;this.metaService.updateTag({property:"og:title",content:title}),this.metaService.updateTag({property:"og:image",content:imgUrl}),this.metaService.updateTag({property:"og:url",content:url}),this.metaService.updateTag({property:"og:description",content:description});var newTitle=title;globals.O.storeInfo.fullName&&(newTitle+=null!==(_b=" - "+(null===(_a=globals.O.storeInfo)||void 0===_a?void 0:_a.fullName))&&void 0!==_b?_b:""),this.titleService.setTitle(newTitle),this.metaService.updateTag({property:"description",content:description})}formatPrice(price){var _a,_b,_c,_d,priceAsString=new String((price*(null!==(_b=null===(_a=this.selectedCurrency())||void 0===_a?void 0:_a.rate)&&void 0!==_b?_b:1)).toFixed(2));switch(priceAsString.indexOf(".")){case priceAsString.length-1:priceAsString+="00";break;case priceAsString.length-2:priceAsString+="0"}return this.numberWithCommas(this.getCurrencyForCountry("US"!=(null!==(_d=null===(_c=this.selectedCurrency())||void 0===_c?void 0:_c.name)&&void 0!==_d?_d:"US"),this.selectedCurrency())+priceAsString)}numberWithCommas(x){return x.replace(/\B(?=(\d{3})+(?!\d))/g,",")}getURL(uid,productID){return"https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Users%2F"+uid+"%2FProducts%2F"+productID+"%2Flink_"+productID+".png?alt=media"}getCurrencyForCountry(shouldShowName,country){var _a,_b,returnItem=null!==(_a=null==country?void 0:country.currency_symbol)&&void 0!==_a?_a:"$";return shouldShowName&&(returnItem=(null!==(_b=null==country?void 0:country.name)&&void 0!==_b?_b:"US")+" "+returnItem),returnItem}getProductID(){return this.router.snapshot.paramMap.get("product")}}ProductComponent.\u0275fac=function ProductComponent_Factory(t){return new(t||ProductComponent)(core.Y36(core.Lbi),core.Y36(core.sBO),core.Y36(angular_fire_firestore.ST),core.Y36(router.gz),core.Y36(platform_browser.Dx),core.Y36(platform_browser.h_),core.Y36(load_service.J),core.Y36(ng_bootstrap.FF),core.Y36(router.F0),core.Y36(app_component.y),core.Y36(router.F0),core.Y36(ngx_spinner.t2),core.Y36(routing_service.Z))},ProductComponent.\u0275cmp=core.Xpm({type:ProductComponent,selectors:[["app-product"]],viewQuery:function ProductComponent_Query(rf,ctx){if(1&rf&&core.Gf(_c0,5,ngx_drag_scroll.HU),2&rf){let _t;core.iGM(_t=core.CRH())&&(ctx.ds=_t.first)}},decls:5,vars:4,consts:[["size","large",3,"bdColor","color","type","fullScreen",4,"ngIf"],["class","py-5",3,"background-color",4,"ngIf"],[3,"class",4,"ngIf"],["size","large",3,"bdColor","color","type","fullScreen"],[1,"text-center","mt-5"],[1,"py-5"],[1,"container","px-4","px-lg-5","mt-0"],[1,"row","gx-4","gx-lg-1","row-cols-1","row-cols-md-2","row-cols-xl-2","justify-content-center","align-items-center","h-100",3,"hidden"],[1,"col","mb-1","h-100"],["role","button",3,"click"],["alt","ok","onerror","this.src='https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Resources%2Flink_empty.jpeg?alt=media';",1,"card-img-top",3,"src"],[1,"w-100","mt-1","px-1",2,"height","60px",3,"scrollbar-hidden"],["carousel",""],["drag-scroll-item","","class","p-1","style","height: 60px; width: 60px;",4,"ngFor","ngForOf"],[1,"card-footer","p-4","pt-3","pb-3","border-top-0","bg-transparent"],[1,"mx-auto","d-flex","justify-content-center","align-items-center"],["role","button","style","font-size: 15px;",3,"hidden","font-family","class","click",4,"ngIf","ngIfElse"],["elseBlock",""],[3,"hidden"],[1,"card-body","p-4","pb-0","order-3","order-sm-1"],[1,"text-center"],[1,"fw-bolder",2,"font-size","34px","line-height","1.4em"],[1,"card-body","p-4","pb-0","mt-0","order-4","order-sm-2"],[1,"text-left"],[1,"card-body","p-0","pb-0"],[1,"fw-bolder",2,"font-size","17px",3,"innerHTML"],[1,"text-left","mt-5","mb-0",2,"color","rgb(190, 6, 6)"],[1,"fw-bolder",2,"font-size","35px"],[1,"fw-normal",2,"font-size","14px","font-style","italic",3,"innerHTML"],[1,"fw-normal",2,"font-size","11px",3,"innerHTML"],["ngbDropdown","","container","body",1,"d-inline"],["ngbDropdownToggle",""],["ngbDropdownMenu",""],["ngbDropdownItem","",3,"font-family","color","click",4,"ngFor","ngForOf"],[1,"container","px-4","mt-3","order-1","order-sm-3"],[1,"row","gx-4","gx-lg-1","row-cols-5","row-cols-md-4","row-cols-xl-6","justify-content-center"],["type","button","id","size",2,"font-weight","bold","font-size","12px",3,"click"],["type","button","style","font-weight:bold; font-size:12px;","id","size",3,"font-family","class","click",4,"ngFor","ngForOf"],[1,"card-footer","p-4","pt-sm-5","pb-3","border-top-0","bg-transparent","order-2","order-sm-4"],["role","button",1,"d-flex","btn","rounded-pill","mb-2","align-items-center","justify-content-center","fw-bold",2,"font-size","25px",3,"click"],[1,"ms-2","mb-2"],[1,"material-icons-outlined",2,"font-size","30px"],[1,"btn","mt-auto","d-flex","flex-wrap",2,"font-weight","bold","font-size","13px","justify-content","center"],["drag-scroll-item","",1,"p-1",2,"height","60px","width","60px"],["id","back",2,"aspect-ratio","1/1"],["role","button",2,"pointer-events","auto",3,"click"],["alt","ok","onerror","this.src='https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Resources%2Flink_empty.jpeg?alt=media';",1,"img-responsive","h-100","w-100","rounded",2,"object-fit","contain","aspect-ratio","1/1",3,"src"],["role","button",2,"font-size","15px",3,"hidden","click"],[1,"me-2"],[1,"material-icons-outlined",2,"font-size","25px"],["role","button",2,"font-size","12px",3,"hidden"],[1,"material-icons-outlined",2,"font-size","23px"],["ngbDropdownItem","",3,"click"],[1,"container","mt-5"],[1,"d-flex","align-items-center","justify-content-center","pb-1","mb-5",2,"height","50px","font-weight","bold","font-size","30px"],[2,"line-height","1.2em"],[1,"d-block","align-items-center","pt-0"],[1,"d-block","align-items-center","text-center","text-sm-start"],["role","button",1,"mx-auto","me-sm-4",3,"click"],["alt","Product",2,"max-width","100%","height","auto",3,"src"],[1,"container","w-100","d-block","justify-content-center"],[1,"w-100","row","row-cols-1","row-cols-md-7","row-cols-xl-7","justify-content-center","justify-content-sm-start","mb-5"],[1,"col","mb-","mx-2"],["role","button"],["alt","ok","src","assets/visacard.png",2,"object-fit","contain"],[1,"col","mb-2","mx-2"],["alt","ok","src","assets/mastercard.png",2,"object-fit","contain"],["alt","ok","src","assets/amexcard.png",2,"object-fit","contain"],["alt","ok","src","assets/applecard.png",2,"object-fit","contain"],["alt","ok","src","assets/googlecard.png",2,"object-fit","contain"],["alt","ok","src","assets/microsoftcard.png",2,"object-fit","contain"],[1,"w-100","row","row-cols-2","row-cols-md-4","row-cols-xl-4","justify-content-center"],["class","col mb-4 mx-3",3,"width",4,"ngFor","ngForOf"],[1,"w-100","row","row-cols-4","row-cols-md-7","row-cols-xl-7","justify-content-end"],[1,"col","mb-4","mx-2"],[1,"container"],[1,"col","mb-4","mx-3"],["alt","ok",1,"rounded-circle",2,"object-fit","contain",3,"src"]],template:function ProductComponent_Template(rf,ctx){if(1&rf&&(core._UZ(0,"router-outlet"),core.YNc(1,ProductComponent_ngx_spinner_1_Template,3,10,"ngx-spinner",0),core.YNc(2,ProductComponent_section_2_Template,57,89,"section",1),core.YNc(3,ProductComponent_section_3_Template,10,12,"section",1),core.YNc(4,ProductComponent_footer_4_Template,35,49,"footer",2)),2&rf){let tmp_1_0,tmp_2_0;core.xp6(1),core.Q6J("ngIf",ctx.isBrowser()),core.xp6(1),core.Q6J("ngIf",ctx.isBrowser()&&(null==(tmp_1_0=ctx.storeInfo())?null:tmp_1_0.active)),core.xp6(1),core.Q6J("ngIf",ctx.isBrowser()&&!(null!=(tmp_2_0=ctx.storeInfo())&&tmp_2_0.active)),core.xp6(1),core.Q6J("ngIf",ctx.isBrowser())}},directives:[router.lC,common.O5,ngx_spinner.Ro,ngx_drag_scroll.HU,common.sg,ng_bootstrap.jt,ng_bootstrap.iD,ng_bootstrap.Vi,icon.Hw,ngx_drag_scroll.$Z,ng_bootstrap.TH],styles:["apple-pay-button[_ngcontent-%COMP%]{--apple-pay-button-width:140px;--apple-pay-button-height:30px;--apple-pay-button-border-radius:5px;--apple-pay-button-padding:5px 0px}.selected[_ngcontent-%COMP%]{opacity:.5}"]});var http=__webpack_require__(91841),input=__webpack_require__(80414),fesm2015_button=__webpack_require__(51095),fesm2015_select=__webpack_require__(67441);const routes=[{path:"",component:ProductComponent}];class ProductModule{}ProductModule.\u0275fac=function ProductModule_Factory(t){return new(t||ProductModule)},ProductModule.\u0275mod=core.oAB({type:ProductModule,bootstrap:[ProductComponent]}),ProductModule.\u0275inj=core.cJS({providers:[globals.O],imports:[[common.ez,card.QW,icon.Ps,input.c,fesm2015_button.ot,fesm2015_select.LD,http.JF,ngx_spinner.ef,ng_bootstrap.IJ,ngx_drag_scroll.l1,router.Bz.forChild(routes)]]})}};