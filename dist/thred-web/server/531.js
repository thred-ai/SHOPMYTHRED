exports.id=531,exports.ids=[531],exports.modules={21531:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AboutModule:()=>AboutModule});var common=__webpack_require__(38583),core=__webpack_require__(37716),globals=__webpack_require__(37503),router=__webpack_require__(95987),platform_browser=__webpack_require__(39075),load_service=__webpack_require__(56105),routing_service=__webpack_require__(78078),app_component=__webpack_require__(55041),ngx_spinner=__webpack_require__(79866);function AboutComponent_ngx_spinner_1_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"ngx-spinner",3),core.TgZ(1,"h3",4),core._uU(2),core.qZA(),core.qZA()),2&rf){const ctx_r0=core.oxw();let tmp_6_0;core.Udp("color",ctx_r0.selectedIndicator().color),core.s9C("bdColor",ctx_r0.selectedIndicator().bg_color),core.s9C("color",ctx_r0.selectedIndicator().color),core.s9C("type",ctx_r0.selectedIndicator().name),core.Q6J("fullScreen",!0),core.xp6(1),core.Udp("font-family",ctx_r0.storeInfo().fontName),core.xp6(1),core.hij("",null==(tmp_6_0=ctx_r0.storeInfo())?null:tmp_6_0.fullName,"\n")}}function AboutComponent_header_2_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"header"),core.TgZ(1,"div",5),core.TgZ(2,"div",6),core.TgZ(3,"p",7),core._uU(4," ABOUT US "),core.qZA(),core.qZA(),core.qZA(),core.qZA()),2&rf){const ctx_r1=core.oxw();core.Gre("bg-",ctx_r1.storeInfo().colorStyle.back_code," py-6"),core.xp6(1),core.Udp("background-image","url("+ctx_r1.storeInfo().themeLink.toString()+")"),core.xp6(2),core.Gre("text-center text-",ctx_r1.storeInfo().colorStyle.text_code,""),core.Udp("font-family",ctx_r1.storeInfo().fontName)}}function AboutComponent_section_3_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"section",8),core._UZ(1,"img",9),core.TgZ(2,"p",10),core._uU(3," Our Story "),core.qZA(),core.TgZ(4,"div",11),core._UZ(5,"p",12),core.qZA(),core.qZA()),2&rf){const ctx_r2=core.oxw();core.Udp("background-color",ctx_r2.selectedTheme().bg_color),core.xp6(1),core.s9C("src",ctx_r2.storeInfo().profileLink,core.LSH),core.xp6(1),core.Gre("text-center text-",ctx_r2.storeInfo().colorStyle.text_code," px-5 mx-5 mb-5"),core.Udp("font-family",ctx_r2.storeInfo().fontName)("color",ctx_r2.selectedTheme().color),core.xp6(3),core.Udp("font-family",ctx_r2.storeInfo().fontName)("color",ctx_r2.selectedTheme().color),core.Q6J("innerHTML",ctx_r2.storeBio(),core.oJD)}}class AboutComponent{constructor(platformID,cdr,router,titleService,metaService,loadService,routingService,rootComponent,_router,spinner){this.platformID=platformID,this.cdr=cdr,this.router=router,this.titleService=titleService,this.metaService=metaService,this.loadService=loadService,this.routingService=routingService,this.rootComponent=rootComponent,this._router=_router,this.spinner=spinner,this.defaultBio="Hello! <br/><br/>FULL9NAME was made for creative trail blazers like you. The dreamers who seek new adventures that warp reality and transcend time. Our lust for life lives on through our unique pieces. Here\u2019s your chance to display inspiration, love, heartache, vibes in the form of a unique piece of clothing/accessory not found anywhere else in the world but here\u2026 <br/><br/>With a purchase of FULL9NAME you show the world that you are a free thinker, and belong to the tribe of dreamers. We welcome you with open arms. <br/><br/> We are FULL9NAME.",this.isSpinning=!1}storeInfo(){return globals.O.storeInfo}availableCurrencies(){return globals.O.availableCurrencies}selectedCurrency(){return globals.O.selectedCurrency}templates(){return globals.O.availableTemplates}availableTemplates(){return globals.O.availableTemplates}getLinkImg(name){return globals.O.socials.filter(obj=>obj.name==name)[0].img}openSocial(l){const link=document.createElement("a");link.target="_blank";let url="";/^http[s]?:\/\//.test(l)||(url+="http://"),url+=l,link.href=url,link.setAttribute("visibility","hidden"),link.click(),link.remove()}isBrowser(){return(0,common.NF)(this.platformID)}selectedIndicator(){var _a,_b,_c,_d,_e,_f;let co=null===(_b=null===(_a=globals.O.storeInfo)||void 0===_a?void 0:_a.loading)||void 0===_b?void 0:_b.color,bco=null===(_d=null===(_c=globals.O.storeInfo)||void 0===_c?void 0:_c.loading)||void 0===_d?void 0:_d.bg_color;return{name:null===(_f=null===(_e=globals.O.storeInfo)||void 0===_e?void 0:_e.loading)||void 0===_f?void 0:_f.name,color:"rgba("+co[0]+","+co[1]+","+co[2]+","+co[3]+")",bg_color:"rgba("+bco[0]+","+bco[1]+","+bco[2]+","+bco[3]+")"}}selectedTheme(){var _a,_b,_c,_d,_e,_f;let co=null===(_b=null===(_a=globals.O.storeInfo)||void 0===_a?void 0:_a.colorStyle)||void 0===_b?void 0:_b.btn_color,bco=null===(_d=null===(_c=globals.O.storeInfo)||void 0===_c?void 0:_c.colorStyle)||void 0===_d?void 0:_d.bg_color;return{name:null===(_f=null===(_e=globals.O.storeInfo)||void 0===_e?void 0:_e.colorStyle)||void 0===_f?void 0:_f.name,color:"rgba("+co[0]+","+co[1]+","+co[2]+","+co[3]+")",bg_color:"rgba("+bco[0]+","+bco[1]+","+bco[2]+","+bco[3]+")"}}storeBio(){var _a,_b,_c;let bio=this.storeInfo().bio;return""==bio||null==bio?this.defaultBio.replace(/FULL9NAME/g,null!==(_b=null===(_a=this.storeInfo().fullName)||void 0===_a?void 0:_a.trim())&&void 0!==_b?_b:"This brand"):null!==(_c=bio.replace(/\n/g,"<br>"))&&void 0!==_c?_c:""}ngOnInit(){this.init()}showSpinner(){this.isSpinning||(this.isSpinning=!0,(0,common.NF)(this.platformID)&&this.spinner.show(),setTimeout(()=>{this.spinner.hide()},1500))}hideSpinner(){this.isSpinning&&(this.isSpinning=!1)}callback(){var _a,_b,_c;globals.O.storeInfo.username?(this.showSpinner(),this.rootComponent.setOptions(),this.rootComponent.setFavIcon(globals.O.storeInfo.profileLink.toString()),this.addTags(null!==(_a=globals.O.storeInfo.fullName)&&void 0!==_a?_a:"Thred",(null!==(_b=globals.O.storeInfo.profileLink)&&void 0!==_b?_b:new URL("https://shopmythred.com")).toString(),null!==(_c=globals.O.storeInfo.bio)&&void 0!==_c?_c:"Check out my Thred Store!","shopmythred.com/"+globals.O.storeInfo.username),(0,common.NF)(this.platformID)&&this.loadService.logView(),null==globals.O.userInfo&&(0,common.NF)(this.platformID)?this.loadService.getCustomer():(0,common.NF)(this.platformID)&&this.cdr.detectChanges()):this.routingService.routeTo404(this.getStoreName().isCustom)}addTags(title,imgUrl,description,url){this.metaService.updateTag({property:"og:title",content:title+" - About"}),this.metaService.updateTag({property:"og:image:width",content:"200"}),this.metaService.updateTag({property:"og:image:height",content:"200"}),this.metaService.updateTag({property:"og:image",content:imgUrl}),this.metaService.updateTag({property:"og:url",content:url}),this.metaService.updateTag({property:"og:description",content:description}),this.titleService.setTitle(title),this.metaService.updateTag({property:"description",content:description})}init(){const storeInfo=this.getStoreName();this.downloadAllStoreInfo(storeInfo.link,storeInfo.isCustom)}downloadAllStoreInfo(storeName,isCustom=!1){this.loadService.myCallback=()=>this.callback(),this.loadService.getUser(storeName,void 0,isCustom)}getStoreName(){var request="";if((0,common.PM)(this.platformID)?(request=globals.O.URL,console.log(request)):request=globalThis.location.host,"localhost:4200"!=request&&"shopmythred.com"!=request)return{isCustom:!0,link:request};return{isCustom:!1,link:this.router.snapshot.paramMap.get("user")}}}AboutComponent.\u0275fac=function AboutComponent_Factory(t){return new(t||AboutComponent)(core.Y36(core.Lbi),core.Y36(core.sBO),core.Y36(router.gz),core.Y36(platform_browser.Dx),core.Y36(platform_browser.h_),core.Y36(load_service.J),core.Y36(routing_service.Z),core.Y36(app_component.y),core.Y36(router.F0),core.Y36(ngx_spinner.t2))},AboutComponent.\u0275cmp=core.Xpm({type:AboutComponent,selectors:[["app-about"]],decls:4,vars:3,consts:[["size","large",3,"bdColor","color","type","fullScreen",4,"ngIf"],[3,"class",4,"ngIf"],["class","py-5",3,"background-color",4,"ngIf"],["size","large",3,"bdColor","color","type","fullScreen"],[1,"text-center","mt-5"],[1,"cover",2,"background-image","url(https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Resources%2FSample-Walls%2FHome%2F1.jpg?alt=media)"],[1,"d-flex","align-items-center","justify-content-center",2,"height","300px","font-weight","bold","font-size","35px"],[2,"line-height","1.2em","text-shadow","2px 2px 4px #42424281"],[1,"py-5"],[1,"mx-auto","d-block","mb-5",3,"src"],[2,"font-size","30px","line-height","1.2em","font-weight","bold"],[1,"text-left","px-sm-5","px-0"],[1,"px-5","mx-2",2,"font-size","20px","line-height","1.2em",3,"innerHTML"]],template:function AboutComponent_Template(rf,ctx){if(1&rf&&(core._UZ(0,"router-outlet"),core.YNc(1,AboutComponent_ngx_spinner_1_Template,3,10,"ngx-spinner",0),core.YNc(2,AboutComponent_header_2_Template,5,10,"header",1),core.YNc(3,AboutComponent_section_3_Template,6,18,"section",2)),2&rf){let tmp_1_0,tmp_2_0;core.xp6(1),core.Q6J("ngIf",ctx.isBrowser()),core.xp6(1),core.Q6J("ngIf",ctx.isBrowser()&&null!=(null==(tmp_1_0=ctx.storeInfo())?null:tmp_1_0.username)),core.xp6(1),core.Q6J("ngIf",ctx.isBrowser()&&null!=(null==(tmp_2_0=ctx.storeInfo())?null:tmp_2_0.username))}},directives:[router.lC,common.O5,ngx_spinner.Ro],styles:[".centered[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.cover[_ngcontent-%COMP%]{color:#fff;position:relative;background-repeat:no-repeat;background-position-x:center;background-position-y:center;background-size:cover}"]});const routes=[{path:"",component:AboutComponent}];class AboutModule{}AboutModule.\u0275fac=function AboutModule_Factory(t){return new(t||AboutModule)},AboutModule.\u0275mod=core.oAB({type:AboutModule,bootstrap:[AboutComponent]}),AboutModule.\u0275inj=core.cJS({providers:[globals.O],imports:[[common.ez,ngx_spinner.ef,router.Bz.forChild(routes)]]})}};