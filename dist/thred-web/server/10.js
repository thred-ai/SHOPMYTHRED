exports.id=10,exports.ids=[10],exports.modules={56010:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{InvalidPageModule:()=>InvalidPageModule});var common=__webpack_require__(38583),globals=__webpack_require__(37503),card=__webpack_require__(93738),ngx_spinner=__webpack_require__(79866),core=__webpack_require__(37716),router=__webpack_require__(95987),platform_browser=__webpack_require__(39075),load_service=__webpack_require__(83847),app_component=__webpack_require__(55041),routing_service=__webpack_require__(78078);function InvalidPageComponent_header_1_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"header"),core.TgZ(1,"div",1),core.TgZ(2,"div",2),core.TgZ(3,"div"),core.TgZ(4,"p",3),core._uU(5," THIS PAGE DOESN'T EXIST "),core.qZA(),core.TgZ(6,"p",4),core.TgZ(7,"a",5),core._uU(8,"BACK TO SHOP"),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA()),2&rf){const ctx_r0=core.oxw();core.Gre("bg-",ctx_r0.storeInfo().colorStyle.back_code," py-6"),core.xp6(1),core.Udp("background-image","url("+ctx_r0.storeInfo().themeLink.toString()+")"),core.xp6(6),core.MGl("href","/",ctx_r0.storeInfo().username,"/products",core.LSH)}}function InvalidPageComponent_footer_2_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"footer"),core.TgZ(1,"div",6),core.TgZ(2,"p"),core._uU(3),core.qZA(),core.qZA(),core.TgZ(4,"div",6),core.TgZ(5,"p"),core._uU(6,"Powered by Thred"),core.qZA(),core.qZA(),core.qZA()),2&rf){const ctx_r1=core.oxw();core.Gre("py-5 bg-",ctx_r1.storeInfo().colorStyle.back_code,""),core.xp6(2),core.Gre("m-0 text-center text-",ctx_r1.storeInfo().colorStyle.text_code,""),core.Udp("font-family",ctx_r1.storeInfo().fontName),core.xp6(1),core.hij("\xa9 ",ctx_r1.storeInfo().fullName," 2021"),core.xp6(2),core.Gre("m-0 text-center text-",ctx_r1.storeInfo().colorStyle.text_code,""),core.Udp("font-family",ctx_r1.storeInfo().fontName)}}class InvalidPageComponent{constructor(platformID,cdr,router,titleService,metaService,loadService,rootComponent,_router,routingService){this.platformID=platformID,this.cdr=cdr,this.router=router,this.titleService=titleService,this.metaService=metaService,this.loadService=loadService,this.rootComponent=rootComponent,this._router=_router,this.routingService=routingService}storeInfo(){return globals.O.storeInfo}availableCurrencies(){return globals.O.availableCurrencies}selectedCurrency(){return globals.O.selectedCurrency}templates(){return globals.O.availableTemplates}availableTemplates(){return globals.O.availableTemplates}isBrowser(){return(0,common.NF)(this.platformID)}ngOnInit(){this.init()}callback(){var _a,_b,_c;globals.O.storeInfo.username?(this.rootComponent.setOptions(),this.rootComponent.setFavIcon(globals.O.storeInfo.profileLink.toString()),this.addTags(null!==(_a=globals.O.storeInfo.fullName)&&void 0!==_a?_a:"Thred",(null!==(_b=globals.O.storeInfo.profileLink)&&void 0!==_b?_b:new URL("https://shopmythred.com")).toString(),null!==(_c=globals.O.storeInfo.bio)&&void 0!==_c?_c:"Check out my Thred Store!","shopmythred.com/"+globals.O.storeInfo.username),(0,common.NF)(this.platformID)&&this.cdr.detectChanges()):this.routingService.routeTo404(this.getStoreName().isCustom)}selectedTheme(){var _a,_b,_c,_d,_e,_f;let co=null===(_b=null===(_a=globals.O.storeInfo)||void 0===_a?void 0:_a.colorStyle)||void 0===_b?void 0:_b.btn_color,bco=null===(_d=null===(_c=globals.O.storeInfo)||void 0===_c?void 0:_c.colorStyle)||void 0===_d?void 0:_d.bg_color;return{name:null===(_f=null===(_e=globals.O.storeInfo)||void 0===_e?void 0:_e.colorStyle)||void 0===_f?void 0:_f.name,color:"rgba("+co[0]+","+co[1]+","+co[2]+","+co[3]+")",bg_color:"rgba("+bco[0]+","+bco[1]+","+bco[2]+","+bco[3]+")"}}init(){const storeInfo=this.getStoreName();this.downloadAllStoreInfo(storeInfo.link,storeInfo.isCustom)}downloadAllStoreInfo(storeName,isCustom=!1){this.loadService.myCallback=()=>this.callback(),this.loadService.getUser(storeName,void 0,isCustom)}getStoreName(){var request="";if((0,common.PM)(this.platformID)?(request=globals.O.URL,console.log(request)):request=globalThis.location.host,"localhost:4200"!=request&&"shopmythred.com"!=request)return{isCustom:!0,link:request};return{isCustom:!1,link:this.router.snapshot.paramMap.get("user")}}addTags(title,imgUrl,description,url){this.metaService.updateTag({property:"og:title",content:title+" - 404"}),this.metaService.updateTag({property:"og:image:width",content:"200"}),this.metaService.updateTag({property:"og:image:height",content:"200"}),this.metaService.updateTag({property:"og:image",content:imgUrl}),this.metaService.updateTag({property:"og:url",content:url}),this.metaService.updateTag({property:"og:description",content:description}),this.titleService.setTitle(title),this.metaService.updateTag({property:"description",content:description})}}InvalidPageComponent.\u0275fac=function InvalidPageComponent_Factory(t){return new(t||InvalidPageComponent)(core.Y36(core.Lbi),core.Y36(core.sBO),core.Y36(router.gz),core.Y36(platform_browser.Dx),core.Y36(platform_browser.h_),core.Y36(load_service.J),core.Y36(app_component.y),core.Y36(router.F0),core.Y36(routing_service.Z))},InvalidPageComponent.\u0275cmp=core.Xpm({type:InvalidPageComponent,selectors:[["app-invalid-page"]],decls:3,vars:2,consts:[[3,"class",4,"ngIf"],[1,"cover",2,"background-image","url(https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Resources%2FSample-Walls%2FHome%2F1.jpg?alt=media)"],[1,"d-flex","align-items-center","justify-content-center",2,"height","800px","font-weight","bold","font-size","35px"],[1,"text-center",2,"line-height","1.2em","text-shadow","2px 2px #42424281"],[1,"text-center","px-5","mx-5",2,"font-size","30px","line-height","1.2em","font-weight","bold","text-shadow","2px 2px #42424281"],[1,"btn","btn-outline-light",2,"font-weight","bold",3,"href"],[1,"container"]],template:function InvalidPageComponent_Template(rf,ctx){1&rf&&(core._UZ(0,"router-outlet"),core.YNc(1,InvalidPageComponent_header_1_Template,9,6,"header",0),core.YNc(2,InvalidPageComponent_footer_2_Template,7,14,"footer",0)),2&rf&&(core.xp6(1),core.Q6J("ngIf",ctx.isBrowser()),core.xp6(1),core.Q6J("ngIf",ctx.isBrowser()))},directives:[router.lC,common.O5],styles:[".centered[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.cover[_ngcontent-%COMP%]{color:#fff;position:relative;background-repeat:no-repeat;background-position-x:center;background-position-y:center;background-size:cover}"]});const routes=[{path:"",component:InvalidPageComponent}];class InvalidPageModule{}InvalidPageModule.\u0275fac=function InvalidPageModule_Factory(t){return new(t||InvalidPageModule)},InvalidPageModule.\u0275mod=core.oAB({type:InvalidPageModule,bootstrap:[InvalidPageComponent]}),InvalidPageModule.\u0275inj=core.cJS({providers:[globals.O],imports:[[common.ez,card.QW,ngx_spinner.ef,router.Bz.forChild(routes),router.Bz.forChild(routes)]]})}};