(self.webpackChunkthred_web=self.webpackChunkthred_web||[]).push([[988],{73988:(e,t,o)=>{"use strict";o.r(t),o.d(t,{ProductModule:()=>M});var r=o(38583),i=o(37503),n=o(93738),l=o(79866),s=o(16304),a=o(81454),d=o(37716),c=o(36083),p=o(91841),u=o(39075),m=o(90674);function g(e,t){if(1&e&&(d.TgZ(0,"div",3),d.TgZ(1,"ngx-spinner",4),d.TgZ(2,"h3",5),d._uU(3,"Launching Model Viewer...\n"),d.qZA(),d.qZA(),d.qZA()),2&e){const e=d.oxw();d.xp6(1),d.Udp("color",e.selectedIndicator().color),d.s9C("bdColor",e.selectedIndicator().bg_color),d.s9C("color",e.selectedIndicator().color),d.s9C("type",e.selectedIndicator().name),d.Q6J("fullScreen",!1)("disableAnimation",!0),d.xp6(1),d.Udp("font-family",e.storeInfo().fontName)}}let f=(()=>{class e{constructor(e,t,o,r,i){this.http=e,this.sanitizer=t,this.modalService=o,this.platformID=r,this.spinner=i,this.myHtmlTemplate="",this.data={template:new c.Y,product:new a.x},this.template=new c.Y,this.product=new a.x,this.isSpinning=!1}ngAfterViewInit(){}ngOnInit(){this.template=this.data.template,this.product=this.data.product,this.showSpinner(),this.openModel()}getModelUrl(e){switch(e){case"ATC Hoodie":return"https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Models%2FHoodies%2Fhoodie_model.glb?alt=media";case"MUG":return"https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Models%2FMugs%2Fmug_model2.glb?alt=media";default:return"https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Models%2FTShirts%2Fshirt_model.glb?alt=media"}}getModelTextureUrl(e,t){switch(e){case"ATC Hoodie":return"https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Models%2FHoodies%2FTextures%2F"+t+".jpg?alt=media";case"MUG":return"https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Models%2FMugs%2FTextures%2F"+t+".jpg?alt=media";default:return"https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Models%2FTShirts%2FTextures%2F"+t+".jpg?alt=media"}}getSkyBoxUrl(e,t){var o="TShirts";switch(e){case"ATC Hoodie":o="Hoodies";break;case"MUG":o="Mugs";break;default:o="TShirts"}return"https://storage.googleapis.com/clothingapp-ed125.appspot.com/Models/"+o+"/Skyboxes/"+t+".hdr"}openBtn(){console.log("ok"),this.modalService.dismissAll("success")}isBrowser(){return(0,r.NF)(this.platformID)}selectedIndicator(){var e,t,o,r,n,l;let s=null===(t=null===(e=i.O.storeInfo)||void 0===e?void 0:e.loading)||void 0===t?void 0:t.color,a=null===(r=null===(o=i.O.storeInfo)||void 0===o?void 0:o.loading)||void 0===r?void 0:r.bg_color;return{name:null===(l=null===(n=i.O.storeInfo)||void 0===n?void 0:n.loading)||void 0===l?void 0:l.name,color:"rgba("+s[0]+","+s[1]+","+s[2]+","+s[3]+")",bg_color:"rgba("+a[0]+","+a[1]+","+a[2]+","+a[3]+")"}}storeInfo(){return i.O.storeInfo}selectedTheme(){var e,t,o,r,n,l;let s=null===(t=null===(e=i.O.storeInfo)||void 0===e?void 0:e.colorStyle)||void 0===t?void 0:t.btn_color,a=null===(r=null===(o=i.O.storeInfo)||void 0===o?void 0:o.colorStyle)||void 0===r?void 0:r.bg_color;return{name:null===(l=null===(n=i.O.storeInfo)||void 0===n?void 0:n.colorStyle)||void 0===l?void 0:l.name,color:"rgba("+s[0]+","+s[1]+","+s[2]+","+s[3]+")",bg_color:"rgba("+a[0]+","+a[1]+","+a[2]+","+a[3]+")"}}showSpinner(){this.isSpinning||(this.isSpinning=!0,(0,r.NF)(this.platformID)&&this.spinner.show(),setTimeout(()=>{(0,r.NF)(this.platformID)&&(this.hideSpinner(),this.spinner.hide())},2e3))}hideSpinner(){this.isSpinning&&(this.isSpinning=!1)}openModel(){var e,t,o,r="",i=this.getSkyBoxUrl(this.product.productType,"room"),n=this.getModelTextureUrl(this.product.productType,this.product.templateColor),l=this.getModelUrl(this.product.productType);let s=null!==(e=this.product.getUrl(!0))&&void 0!==e?e:"",a=null!==(t=this.product.getUrl(!1))&&void 0!==t?t:"",d=this.template.colors.find(e=>e.code==this.product.templateColor);if(d){var c=[1,1,1,1];switch(d.rgb.forEach((e,t)=>{c[t]=e}),null!==(o=this.template.productCode)&&void 0!==o?o:"ATC1000"){case"ATC1000":r="<!doctype html><html lang='en'><head></head><title>&lt;model-viewer&gt; template</title><meta charset='utf-8'><meta name='description' content='&lt;model-viewer&gt; template'><meta name='viewport' content='width=device-width, initial-scale=1'><script src='https://unpkg.com/focus-visible@5.0.2/dist/focus-visible.js' defer><\/script></head><body><model-viewer camera-controls skybox-image='"+i+"'environment-image='"+i+"'alt='A 3D astronaut model depicted within a forest'src='"+l+"'></model-viewer><script type='module'>const onProgress = (event) => {if (event.detail.totalProgress === 1) {const modelViewerColor = document.querySelector('model-viewer');modelViewerColor.environmentImage = 'neutral';const materials = modelViewerColor.model.materials;for (let i = 0; i < materials.length; i++) {if (i === 0){let material = modelViewerColor.model.materials[i];material.pbrMetallicRoughness.baseColorTexture.texture.source.setURI('"+n+"');}else if (i === 1){let material = modelViewerColor.model.materials[i];material.pbrMetallicRoughness.baseColorTexture.texture.source.setURI('"+a+"');}console.log(materials[i])}}};document.querySelector('model-viewer').addEventListener('progress', onProgress);<\/script><script type='module' src='https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js'><\/script><style>:not(:defined) > * {display: none;}body {margin: 0;padding: 0;width: 100vw;height: 100vh;}model-viewer {width: 100%;height: 100%;background-color: #baf7fd;display: flex;justify-content: center;align-items: center;}.progress-bar {display: block;width: 33%;height: 10%;max-height: 2%;position: absolute;left: 50%;top: 50%;transform: translate3d(-50%, -50%, 0);border-radius: 25px;box-shadow: 0px 3px 10px 3px #baf7fd, 0px 0px 5px 1px #baf7fd;border: 1px solid #baf7fd;}.progress-bar.hide {visibility: hidden;transition: visibility 0.3s;}.update-bar {background-color: #baf7fd;width: 0%;height: 100%;border-radius: 25px;float: left;transition: width 0.3s;}#ar-button {background-image: url(ar_icon.png);background-repeat: no-repeat;background-size: 20px 20px;background-position: 12px 50%;background-color: #baf7fd;position: absolute;left: 50%;transform: translateX(-50%);white-space: nowrap;bottom: 132px;padding: 0px 16px 0px 40px;font-family: Roboto Regular, Helvetica Neue, sans-serif;font-size: 14px;color:#baf7fd;height: 36px;line-height: 36px;border-radius: 18px;border: 1px solid #baf7fd;}#ar-button:active {background-color: #baf7fd;}#ar-button:focus {outline: none;}#ar-button:focus-visible {outline: 1px solid #baf7fd;}@keyframes circle {from { transform: translateX(-50%) rotate(0deg) translateX(50px) rotate(0deg); }to   { transform: translateX(-50%) rotate(360deg) translateX(50px) rotate(-360deg); }}@keyframes elongate {from { transform: translateX(100px); }to   { transform: translateX(-100px); }}model-viewer > #ar-prompt {position: absolute;left: 50%;bottom: 175px;animation: elongate 2s infinite ease-in-out alternate;display: none;}model-viewer[ar-status='session-started'] > #ar-prompt {display: block;}model-viewer > #ar-prompt > img {animation: circle 4s linear infinite;}</style></body></html>";break;case"ATC Hoodie":r="<!doctype html><html lang='en'><head></head><title>&lt;model-viewer&gt; template</title><meta charset='utf-8'><meta name='description' content='&lt;model-viewer&gt; template'><meta name='viewport' content='width=device-width, initial-scale=1'><script src='https://unpkg.com/focus-visible@5.0.2/dist/focus-visible.js' defer><\/script></head><body><model-viewer camera-controls skybox-image='"+i+"'environment-image='"+i+"'alt='A 3D astronaut model depicted within a forest'src='"+l+"'></model-viewer><script type='module'>const onProgress = (event) => {if (event.detail.totalProgress === 1) {const modelViewerColor = document.querySelector('model-viewer');modelViewerColor.environmentImage = 'neutral';const materials = modelViewerColor.model.materials;for (let i = 0; i < materials.length; i++) {if (materials[i].name === 'Left Cap' || materials[i].name === 'Right Cap' || materials[i].name == 'String Holes (Interior)'){materials[i].pbrMetallicRoughness.setBaseColorFactor(["+c[0]+", "+c[1]+", "+c[2]+", "+c[3]+"]);}else if (materials[i].name === 'String Holes'){materials[i].pbrMetallicRoughness.setBaseColorFactor([0.7,0.7,0.7,1]);}else if (materials[i].name === 'Draw Strings' || materials[i].name === 'Body' || materials[i].name == 'Front Canvas'){materials[i].pbrMetallicRoughness.baseColorTexture.texture.source.setURI('"+n+"');}else if (materials[i].name === 'Front Image'){console.log(materials[i]);materials[i].pbrMetallicRoughness.baseColorTexture.texture.source.setURI('"+a+"');}else if (materials[i].name === 'Back Image'){materials[i].pbrMetallicRoughness.baseColorTexture.texture.source.setURI('"+s+"');}console.log(materials[i].name)}}};document.querySelector('model-viewer').addEventListener('progress', onProgress);<\/script><script type='module' src='https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js'><\/script><style>:not(:defined) > * {display: none;}body {margin: 0;padding: 0;width: 100vw;height: 100vh;}model-viewer {width: 100%;height: 100%;background-color: #baf7fd;display: flex;justify-content: center;align-items: center;}.progress-bar {display: block;width: 33%;height: 10%;max-height: 2%;position: absolute;left: 50%;top: 50%;transform: translate3d(-50%, -50%, 0);border-radius: 25px;box-shadow: 0px 3px 10px 3px #baf7fd, 0px 0px 5px 1px #baf7fd;border: 1px solid #baf7fd;}.progress-bar.hide {visibility: hidden;transition: visibility 0.3s;}.update-bar {background-color: #baf7fd;width: 0%;height: 100%;border-radius: 25px;float: left;transition: width 0.3s;}#ar-button {background-image: url(ar_icon.png);background-repeat: no-repeat;background-size: 20px 20px;background-position: 12px 50%;background-color: #baf7fd;position: absolute;left: 50%;transform: translateX(-50%);white-space: nowrap;bottom: 132px;padding: 0px 16px 0px 40px;font-family: Roboto Regular, Helvetica Neue, sans-serif;font-size: 14px;color:#baf7fd;height: 36px;line-height: 36px;border-radius: 18px;border: 1px solid #baf7fd;}#ar-button:active {background-color: #baf7fd;}#ar-button:focus {outline: none;}#ar-button:focus-visible {outline: 1px solid #baf7fd;}@keyframes circle {from { transform: translateX(-50%) rotate(0deg) translateX(50px) rotate(0deg); }to   { transform: translateX(-50%) rotate(360deg) translateX(50px) rotate(-360deg); }}@keyframes elongate {from { transform: translateX(100px); }to   { transform: translateX(-100px); }}model-viewer > #ar-prompt {position: absolute;left: 50%;bottom: 175px;animation: elongate 2s infinite ease-in-out alternate;display: none;}model-viewer[ar-status='session-started'] > #ar-prompt {display: block;}model-viewer > #ar-prompt > img {animation: circle 4s linear infinite;}</style></body></html>";break;case"MUG":r="<!doctype html><html lang='en'><head></head><title>&lt;model-viewer&gt; template</title><meta charset='utf-8'><meta name='description' content='&lt;model-viewer&gt; template'><meta name='viewport' content='width=device-width, initial-scale=1'><script src='https://unpkg.com/focus-visible@5.0.2/dist/focus-visible.js' defer><\/script></head><body><model-viewer camera-controls skybox-image='"+i+"'environment-image='"+i+"'alt='A 3D astronaut model depicted within a forest'src='"+l+"'></model-viewer><script type='module'>const onProgress = (event) => {if (event.detail.totalProgress === 1) {const modelViewerColor = document.querySelector('model-viewer');modelViewerColor.environmentImage = 'neutral';const materials = modelViewerColor.model.materials;for (let i = 0; i < materials.length; i++) {if (materials[i].name == 'DefaultMaterial.001'){materials[i].pbrMetallicRoughness.baseColorTexture.texture.source.setURI('');materials[i].pbrMetallicRoughness.baseColorTexture.texture.source.setURI('"+n+"');}else if (materials[i].name == 'Design'){let material = modelViewerColor.model.materials[i];material.pbrMetallicRoughness.baseColorTexture.texture.source.setURI('"+a+"');}else if (materials[i].name == 'Design_Back'){let material = modelViewerColor.model.materials[i];material.pbrMetallicRoughness.baseColorTexture.texture.source.setURI('"+s+"');}console.log(materials[i])}}};document.querySelector('model-viewer').addEventListener('progress', onProgress);<\/script><script type='module' src='https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js'><\/script><style>:not(:defined) > * {display: none;}body {margin: 0;padding: 0;width: 100vw;height: 100vh;}model-viewer {width: 100%;height: 100%;background-color: #baf7fd;display: flex;justify-content: center;align-items: center;}.progress-bar {display: block;width: 33%;height: 10%;max-height: 2%;position: absolute;left: 50%;top: 50%;transform: translate3d(-50%, -50%, 0);border-radius: 25px;box-shadow: 0px 3px 10px 3px #baf7fd, 0px 0px 5px 1px #baf7fd;border: 1px solid #baf7fd;}.progress-bar.hide {visibility: hidden;transition: visibility 0.3s;}.update-bar {background-color: #baf7fd;width: 0%;height: 100%;border-radius: 25px;float: left;transition: width 0.3s;}#ar-button {background-image: url(ar_icon.png);background-repeat: no-repeat;background-size: 20px 20px;background-position: 12px 50%;background-color: #baf7fd;position: absolute;left: 50%;transform: translateX(-50%);white-space: nowrap;bottom: 132px;padding: 0px 16px 0px 40px;font-family: Roboto Regular, Helvetica Neue, sans-serif;font-size: 14px;color:#baf7fd;height: 36px;line-height: 36px;border-radius: 18px;border: 1px solid #baf7fd;}#ar-button:active {background-color: #baf7fd;}#ar-button:focus {outline: none;}#ar-button:focus-visible {outline: 1px solid #baf7fd;}@keyframes circle {from { transform: translateX(-50%) rotate(0deg) translateX(50px) rotate(0deg); }to   { transform: translateX(-50%) rotate(360deg) translateX(50px) rotate(-360deg); }}@keyframes elongate {from { transform: translateX(100px); }to   { transform: translateX(-100px); }}model-viewer > #ar-prompt {position: absolute;left: 50%;bottom: 175px;animation: elongate 2s infinite ease-in-out alternate;display: none;}model-viewer[ar-status='session-started'] > #ar-prompt {display: block;}model-viewer > #ar-prompt > img {animation: circle 4s linear infinite;}</style></body></html>";break;default:return void(r="")}this.myHtmlTemplate=this.sanitizer.bypassSecurityTrustHtml(r)}}}return e.\u0275fac=function(t){return new(t||e)(d.Y36(p.eN),d.Y36(u.H7),d.Y36(m.FF),d.Y36(d.Lbi),d.Y36(l.t2))},e.\u0275cmp=d.Xpm({type:e,selectors:[["app-model-viewer"]],decls:5,vars:10,consts:[["type","submit",2,"width","100%","height","10%","display","block","border","none","font-weight","bold","cursor","pointer",3,"click"],[2,"z-index","1","position","absolute","border","0","width","100%","height","600px","overflow","auto",3,"srcdoc"],["style","z-index: 2; position: absolute; border: 0; width:100%; height: 600px; overflow: auto;",4,"ngIf"],[2,"z-index","2","position","absolute","border","0","width","100%","height","600px","overflow","auto"],["size","medium",3,"bdColor","color","type","fullScreen","disableAnimation"],[1,"mt-5"]],template:function(e,t){1&e&&(d.TgZ(0,"div"),d.TgZ(1,"button",0),d.NdJ("click",function(){return t.openBtn()}),d._uU(2," CLOSE "),d.qZA(),d._UZ(3,"iframe",1),d.YNc(4,g,4,10,"div",2),d.qZA()),2&e&&(d.Gre("card-body p-0 pb-0 bg-",t.storeInfo().colorStyle.back_code,""),d.xp6(1),d.Gre("btn text-",t.storeInfo().colorStyle.text_code,""),d.Udp("font-family",t.storeInfo().fontName),d.xp6(2),d.Q6J("srcdoc",t.myHtmlTemplate,d.oJD),d.xp6(1),d.Q6J("ngIf",t.isSpinning))},directives:[r.O5,l.Ro],styles:[""]}),e})();var h=o(49991),b=o(98458),v=o(83403),x=o(95987),y=o(80406),w=o(96625);function T(e,t){if(1&e){const e=d.EpF();d.TgZ(0,"div",34),d.TgZ(1,"a",35),d.NdJ("click",function(){return d.CHM(e),d.oxw(2).open()}),d._uU(2,"VIEW IN 3D"),d.qZA(),d.qZA()}if(2&e){const e=d.oxw(2);d.Q6J("hidden",null==e.selectedTemplate()),d.xp6(1),d.Gre("btn btn-outline-",e.storeInfo().colorStyle.text_code," mt-auto"),d.Udp("font-family",e.storeInfo().fontName)}}function I(e,t){if(1&e&&(d.TgZ(0,"div",34),d.TgZ(1,"a",36),d._uU(2,"Product does not support 3D"),d.qZA(),d.qZA()),2&e){const e=d.oxw(2);d.Q6J("hidden",null==e.selectedTemplate()),d.xp6(1),d.Gre("btn btn-outline-",e.storeInfo().colorStyle.text_code," mt-auto"),d.Udp("font-family",e.storeInfo().fontName)}}function Z(e,t){if(1&e){const e=d.EpF();d.TgZ(0,"button",37),d.NdJ("click",function(){const t=d.CHM(e).$implicit;return d.oxw(2).selectQuantity(t)}),d._uU(1),d.qZA()}if(2&e){const e=t.$implicit,o=d.oxw(2);d.Udp("font-family",o.storeInfo().fontName)("color",o.selectedTheme().color),d.xp6(1),d.Oqu(e)}}function S(e,t){if(1&e){const e=d.EpF();d.TgZ(0,"button",29),d.NdJ("click",function(t){const o=d.CHM(e).$implicit;return d.oxw(2).selectSize(o,t)}),d._uU(1),d.qZA()}if(2&e){const e=t.$implicit,o=d.oxw(2);d.Gre("btn btn-outline-",o.storeInfo().colorStyle.text_code," my-1 mx-1"),d.Udp("font-family",o.storeInfo().fontName),d.xp6(1),d.Oqu(e)}}function k(e,t){if(1&e){const e=d.EpF();d.TgZ(0,"section",2),d.TgZ(1,"div",3),d.TgZ(2,"div",4),d.TgZ(3,"div",5),d.TgZ(4,"div"),d.TgZ(5,"a",6),d.NdJ("click",function(){return d.CHM(e),d.oxw().open()}),d._UZ(6,"img",7),d.qZA(),d.TgZ(7,"div",8),d.YNc(8,T,3,6,"div",9),d.YNc(9,I,3,6,"ng-template",null,10,d.W1O),d.qZA(),d.qZA(),d.qZA(),d.TgZ(11,"div",5),d.TgZ(12,"div",11),d.TgZ(13,"div",12),d.TgZ(14,"div",13),d.TgZ(15,"h5",14),d._uU(16),d.qZA(),d.qZA(),d.qZA(),d.TgZ(17,"div",15),d.TgZ(18,"div",16),d.TgZ(19,"div",17),d.TgZ(20,"div",13),d._UZ(21,"h5",18),d.qZA(),d.qZA(),d.TgZ(22,"div",19),d.TgZ(23,"h5",20),d._uU(24),d.qZA(),d.qZA(),d.TgZ(25,"div",17),d.TgZ(26,"div",16),d._UZ(27,"h5",21),d._UZ(28,"h5",22),d.qZA(),d.TgZ(29,"div",23),d.TgZ(30,"button",24),d._uU(31),d.qZA(),d.TgZ(32,"div",25),d.YNc(33,Z,2,6,"button",26),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(34,"div",27),d.TgZ(35,"div",13),d.TgZ(36,"div",17),d.TgZ(37,"div",16),d._UZ(38,"h5",18),d.qZA(),d.qZA(),d.qZA(),d.TgZ(39,"div",28),d.TgZ(40,"button",29),d.NdJ("click",function(t){d.CHM(e);const o=d.oxw();return o.selectSize(o.sizes(!1)[0],t)}),d._uU(41),d.qZA(),d.YNc(42,S,2,6,"button",30),d.qZA(),d.qZA(),d.TgZ(43,"div",31),d.TgZ(44,"div",13),d.TgZ(45,"a",32),d.NdJ("click",function(){return d.CHM(e),d.oxw().addToCart()}),d.qZA(),d.qZA(),d.TgZ(46,"div",13),d.TgZ(47,"a",33),d._uU(48),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA()}if(2&e){const e=d.MAs(10),t=d.oxw();let o,r,i,n;d.Udp("background-color",t.selectedTheme().bg_color),d.Q6J("hidden",null==t.storeInfo().username),d.xp6(2),d.Q6J("hidden",null==t.selectedProduct()||null==t.selectedTemplate()),d.xp6(2),d.Gre("card h-100 bg-",t.storeInfo().colorStyle.back_code,""),d.ekj("border-secondary","light"==t.storeInfo().colorStyle.text_code),d.xp6(2),d.s9C("src",null!==(o=null==(o=t.selectedProduct())?null:o.url)&&void 0!==o?o:"",d.LSH),d.xp6(2),d.Q6J("ngIf",t.has3D())("ngIfElse",e),d.xp6(4),d.Gre("card h-80 bg-",t.storeInfo().colorStyle.back_code,""),d.ekj("border-secondary","light"==t.storeInfo().colorStyle.text_code),d.Q6J("hidden",null==t.selectedTemplate()),d.xp6(3),d.Udp("font-family",t.storeInfo().fontName)("color",t.selectedTheme().color),d.xp6(1),d.Oqu(null!==(r=null==(r=t.selectedProduct())?null:r.name)&&void 0!==r?r:""),d.xp6(4),d.Udp("color",t.selectedTheme().color),d.xp6(1),d.Udp("font-family",t.storeInfo().fontName),d.Q6J("innerHTML","Details",d.oJD),d.xp6(2),d.Udp("font-family",t.storeInfo().fontName),d.xp6(1),d.Oqu(t.formatPrice((null!==(i=null==(i=t.selectedProduct())?null:i.price)&&void 0!==i?i:0)/100)),d.xp6(3),d.Udp("font-family",t.storeInfo().fontName)("color",t.selectedTheme().color),d.Q6J("innerHTML",null!==(n=null==(n=t.selectedProduct())?null:n.description)&&void 0!==n?n:"",d.oJD),d.xp6(1),d.Udp("font-family",t.storeInfo().fontName)("color",t.selectedTheme().color),d.Q6J("innerHTML",t.formattedInfo(),d.oJD),d.xp6(2),d.Gre("btn btn-outline-",t.storeInfo().colorStyle.text_code," btn-sm mb-5"),d.Udp("font-family",t.storeInfo().fontName),d.xp6(1),d.hij("Qty: ",t.quantity(),""),d.xp6(1),d.Udp("background-color",t.selectedTheme().bg_color),d.ekj("border-secondary","light"==t.storeInfo().colorStyle.text_code),d.xp6(1),d.Q6J("ngForOf",t.quantityNumbers),d.xp6(5),d.Udp("color",t.selectedTheme().color)("font-family",t.storeInfo().fontName),d.Q6J("innerHTML","Choose Your Size",d.oJD),d.xp6(2),d.Gre("btn btn-outline-",t.storeInfo().colorStyle.text_code," active my-1 mx-1"),d.Udp("font-family",t.storeInfo().fontName),d.xp6(1),d.Oqu(t.sizes(!1)[0]),d.xp6(1),d.Q6J("ngForOf",t.sizes(!0)),d.xp6(3),d.Udp("font-family",t.storeInfo().fontName)("background-color",t.selectedTheme().color)("color",t.selectedTheme().bg_color),d.Q6J("innerHTML","ADD TO BAG",d.oJD),d.xp6(2),d.Udp("font-family",t.storeInfo().fontName)("color",t.selectedTheme().color),d.xp6(1),d.hij("\ud83d\ude80 Order now and get it before ",t.nextweek(),"")}}function C(e,t){if(1&e&&(d.TgZ(0,"footer",38),d.TgZ(1,"div",39),d.TgZ(2,"p"),d._uU(3),d.qZA(),d.qZA(),d.TgZ(4,"div",39),d.TgZ(5,"p"),d._uU(6,"Made with Thred"),d.qZA(),d.qZA(),d.qZA()),2&e){const e=d.oxw();d.xp6(2),d.Gre("m-0 text-center text-",e.storeInfo().colorStyle.text_code,""),d.Udp("font-family",e.storeInfo().fontName),d.xp6(1),d.hij("Copyright \xa9 ",e.storeInfo().fullName," 2021"),d.xp6(2),d.Gre("m-0 text-center text-",e.storeInfo().colorStyle.text_code,""),d.Udp("font-family",e.storeInfo().fontName)}}let O=(()=>{class e{constructor(e,t,o,r,i,n,l,s,a,d,c,p){this.platformID=e,this.cdr=t,this.db=o,this.router=r,this.titleService=i,this.metaService=n,this.loadService=l,this.modalService=s,this.route=a,this.rootComponent=d,this._router=c,this.spinner=p,this.productToBuy=new h.P,this.quantityNumbers=[],this.isSpinning=!1}storeInfo(){return i.O.storeInfo}availableCurrencies(){return i.O.availableCurrencies}selectedCurrency(){return i.O.selectedCurrency}templates(){return i.O.availableTemplates}availableTemplates(){return i.O.availableTemplates}selectedTemplate(){return i.O.selectedTemplate}products(){return i.O.products}selectedProduct(){return i.O.selectedProduct}cart(){return i.O.cart}selectedIndicator(){var e,t,o,r,n,l;let s=null===(t=null===(e=i.O.storeInfo)||void 0===e?void 0:e.loading)||void 0===t?void 0:t.color,a=null===(r=null===(o=i.O.storeInfo)||void 0===o?void 0:o.loading)||void 0===r?void 0:r.bg_color;return{name:null===(l=null===(n=i.O.storeInfo)||void 0===n?void 0:n.loading)||void 0===l?void 0:l.name,color:"rgba("+s[0]+","+s[1]+","+s[2]+","+s[3]+")",bg_color:"rgba("+a[0]+","+a[1]+","+a[2]+","+a[3]+")"}}ngOnInit(){const e=this.getProductID();i.O.selectedProduct=void 0,i.O.selectedTemplate=void 0,i.O.selectedCurrency=void 0,i.O.storeInfo.uid=void 0,i.O.cart=void 0,this.loadService.myCallback=()=>this.checkLoad(e,!1),this.checkLoad(e,!1);for(let t=0;t<9;t++)this.quantityNumbers.push(t+1)}ngAfterViewInit(){}open(){(0,r.NF)(this.platformID)&&this.has3D()&&(this.modalService.open(f,{size:"lg"}).componentInstance.data={template:this.selectedTemplate(),product:this.selectedProduct()})}has3D(){var e,t;return null!==(t=null===(e=this.selectedTemplate())||void 0===e?void 0:e.has3D)&&void 0!==t&&t}nextweek(){var e=new Date;return this.format(new Date(e.getFullYear(),e.getMonth(),e.getDate()+10))}format(e){return i.O.days[e.getDay()]+", "+i.O.months[e.getMonth()]+" "+e.getDate()}formattedInfo(){var e,t;return null!==(t=null===(e=this.selectedTemplate())||void 0===e?void 0:e.moreInfo.replace(/\\n/g,"<br>"))&&void 0!==t?t:""}sizes(e){var t,o,r,i;return e?null!==(o=null===(t=this.selectedTemplate())||void 0===t?void 0:t.sizes.slice(1))&&void 0!==o?o:[]:null!==(i=null===(r=this.selectedTemplate())||void 0===r?void 0:r.sizes)&&void 0!==i?i:[]}isBrowser(){return(0,r.NF)(this.platformID)}selectedTheme(){var e,t,o,r,n,l;let s=null===(t=null===(e=i.O.storeInfo)||void 0===e?void 0:e.colorStyle)||void 0===t?void 0:t.btn_color,a=null===(r=null===(o=i.O.storeInfo)||void 0===o?void 0:o.colorStyle)||void 0===r?void 0:r.bg_color;return{name:null===(l=null===(n=i.O.storeInfo)||void 0===n?void 0:n.colorStyle)||void 0===l?void 0:l.name,color:"rgba("+s[0]+","+s[1]+","+s[2]+","+s[3]+")",bg_color:"rgba("+a[0]+","+a[1]+","+a[2]+","+a[3]+")"}}routeTo404(){const e=this.getStoreName();this._router.navigateByUrl(e+"/not-found")}routeToMain404(){this._router.navigateByUrl("not-found")}showSpinner(){this.isSpinning||(this.isSpinning=!0,(0,r.NF)(this.platformID)&&this.spinner.show(),setTimeout(()=>{this.spinner.hide()},1e3))}hideSpinner(){this.isSpinning&&(this.isSpinning=!1)}checkLoad(e,t){var o;if(null==i.O.selectedProduct)i.O.selectedProduct=new a.x,this.loadService.getPost(e),this.productToBuy.product=i.O.selectedProduct;else{if(!i.O.selectedProduct.isAvailable)return this.routeTo404(),void console.log("OFOFOF");if(console.log(i.O.selectedProduct),this.addTags(i.O.selectedProduct.name,i.O.selectedProduct.url.toString(),this.formatPrice(i.O.selectedProduct.price/100)+". "+i.O.selectedProduct.description,"https://shopmythred.com"),(0,r.NF)(this.platformID)){if(null==i.O.storeInfo.uid){const e=this.getStoreName();return void this.loadService.getUser(e)}if(this.showSpinner(),i.O.storeInfo.uid!=i.O.selectedProduct.uid)this.routeToMain404();else if(null==i.O.userInfo&&(0,r.NF)(this.platformID))this.loadService.getCustomer();else{if(null==i.O.selectedTemplate)return this.rootComponent.setOptions(),void this.loadService.getTemplate(null!==(o=i.O.selectedProduct.productType)&&void 0!==o?o:"");if(null==i.O.selectedCurrency)return console.log("countries"),void this.loadService.getCountries();null==i.O.cart?(console.log("ok"),i.O.cart=[],this.loadService.getCart()):(null!=t&&t&&(console.log("ho"),this.addToCart()),this.cdr.detectChanges())}}}}selectSize(e,t){this.productToBuy.size=e,console.log(e);let o=t.target||t.srcElement;if(console.log(o.nodeName),"BUTTON"===o.nodeName){let e=o.parentElement.querySelector(".active");e&&e.classList.remove("active"),o.className+=" active"}}selectQuantity(e){this.productToBuy.quantity=Number(e)}quantity(){var e;return null!==(e=this.productToBuy.quantity)&&void 0!==e?e:"1"}closeBtn(){this.modalService.dismissAll("success"),i.O.cart=void 0,this.loadService.myCallback=()=>this.checkLoad(i.O.selectedProduct.productID,!0),this.checkLoad(this.getProductID(),!0)}addToCart(){var e=this;return(0,s.Z)(function*(){var t,o,r;if(null==i.O.selectedProduct)return;e.productToBuy.product=JSON.parse(JSON.stringify(i.O.selectedProduct));let n=JSON.parse(JSON.stringify(e.productToBuy)),l={UID:null===(t=n.product)||void 0===t?void 0:t.uid,Size:n.size,Qty:n.quantity,Timestamp:new Date,Post_ID:null===(o=n.product)||void 0===o?void 0:o.productID};(yield e.loadService.authenticated())?(console.log("gogog"),yield e.loadService.addToCart(l),null===(r=i.O.cart)||void 0===r||r.push(n),e.rootComponent.cdr.detectChanges()):(e.loadService.myCallback=()=>e.closeBtn(),e.modalService.open(b.G,{size:"lg"}).componentInstance.authMode=1)})()}addTags(e,t,o,r){var n,l;this.metaService.updateTag({property:"og:title",content:e}),this.metaService.updateTag({property:"og:image",content:t}),this.metaService.updateTag({property:"og:url",content:r}),this.metaService.updateTag({property:"og:description",content:o});var s=e;i.O.storeInfo.fullName&&(s+=null!==(l=" - "+(null===(n=i.O.storeInfo)||void 0===n?void 0:n.fullName))&&void 0!==l?l:""),this.titleService.setTitle(s),this.metaService.updateTag({property:"description",content:o})}formatPrice(e){var t,o,r,i,n=new String((e*(null!==(o=null===(t=this.selectedCurrency())||void 0===t?void 0:t.rate)&&void 0!==o?o:1)).toFixed(2));switch(n.indexOf(".")){case n.length-1:n+="00";break;case n.length-2:n+="0"}return this.numberWithCommas(this.getCurrencyForCountry("US"!=(null!==(i=null===(r=this.selectedCurrency())||void 0===r?void 0:r.name)&&void 0!==i?i:"US"),this.selectedCurrency())+n)}numberWithCommas(e){return e.replace(/\B(?=(\d{3})+(?!\d))/g,",")}getURL(e,t){return"https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Users%2F"+e+"%2FProducts%2F"+t+"%2Flink_"+t+".png?alt=media"}getCurrencyForCountry(e,t){var o,r,i=null!==(o=null==t?void 0:t.currency_symbol)&&void 0!==o?o:"$";return e&&(i=(null!==(r=null==t?void 0:t.name)&&void 0!==r?r:"US")+" "+i),i}getStoreName(){const e=this.router.snapshot.paramMap,t=e.get("user"),o=e.get("product");return console.log(t),console.log(o),t}getProductID(){const e=this.router.snapshot.paramMap.get("product");return console.log(e),e}}return e.\u0275fac=function(t){return new(t||e)(d.Y36(d.Lbi),d.Y36(d.sBO),d.Y36(v.ST),d.Y36(x.gz),d.Y36(u.Dx),d.Y36(u.h_),d.Y36(y.J),d.Y36(m.FF),d.Y36(x.F0),d.Y36(w.y),d.Y36(x.F0),d.Y36(l.t2))},e.\u0275cmp=d.Xpm({type:e,selectors:[["app-product"]],decls:3,vars:2,consts:[["class","py-5",3,"hidden","background-color",4,"ngIf"],["class","py-5 bg-dark",4,"ngIf"],[1,"py-5",3,"hidden"],[1,"container","px-4","px-lg-5","mt-0"],[1,"row","gx-4","gx-lg-1","row-cols-1","row-cols-md-2","row-cols-xl-2","justify-content-center",3,"hidden"],[1,"col","mb-1"],["role","button",3,"click"],["alt","ok","onerror","this.src='https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Resources%2Flink_empty.jpeg?alt=media';",1,"card-img-top",3,"src"],[1,"card-footer","p-4","pt-3","pb-3","border-top-0","bg-transparent"],["class","text-center",3,"hidden",4,"ngIf","ngIfElse"],["elseBlock",""],[3,"hidden"],[1,"card-body","p-4","pb-0"],[1,"text-center"],[1,"fw-bolder",2,"font-size","34px","line-height","1.4em"],[1,"card-body","p-4","pb-0","mt-0"],[1,"text-left"],[1,"card-body","p-0","pb-0"],[1,"fw-bolder",2,"font-size","17px",3,"innerHTML"],[1,"text-left","mt-5","mb-0",2,"color","rgb(190, 6, 6)"],[1,"fw-bolder",2,"font-size","35px"],[1,"fw-normal",2,"font-size","14px","font-style","italic",3,"innerHTML"],[1,"fw-normal",2,"font-size","11px",3,"innerHTML"],["ngbDropdown","","container","body",1,"d-inline"],["ngbDropdownToggle",""],["ngbDropdownMenu",""],["ngbDropdownItem","",3,"font-family","color","click",4,"ngFor","ngForOf"],[1,"container","px-4","mt-3"],[1,"row","gx-4","gx-lg-1","row-cols-5","row-cols-md-4","row-cols-xl-6","justify-content-center"],["type","button","id","size",2,"font-weight","bold","font-size","12px",3,"click"],["type","button","style","font-weight:bold; font-size:12px;","id","size",3,"font-family","class","click",4,"ngFor","ngForOf"],[1,"card-footer","p-4","pt-5","pb-3","border-top-0","bg-transparent"],[1,"btn","mt-auto","d-flex","flex-wrap",2,"font-weight","bold","font-size","25px","justify-content","center",3,"innerHTML","click"],[1,"btn","mt-auto","d-flex","flex-wrap",2,"font-weight","bold","font-size","13px","justify-content","center"],[1,"text-center",3,"hidden"],[2,"font-weight","bold","font-size","15px",3,"click"],[2,"font-weight","bold","font-size","12px"],["ngbDropdownItem","",3,"click"],[1,"py-5","bg-dark"],[1,"container"]],template:function(e,t){1&e&&(d._UZ(0,"router-outlet"),d.YNc(1,k,49,86,"section",0),d.YNc(2,C,7,11,"footer",1)),2&e&&(d.xp6(1),d.Q6J("ngIf",t.isBrowser()),d.xp6(1),d.Q6J("ngIf",t.isBrowser()))},directives:[x.lC,r.O5,m.jt,m.iD,m.Vi,r.sg,m.TH],styles:[""]}),e})();var U=o(76627),q=o(80414),A=o(51095),_=o(67441);const N=[{path:"",component:O}];let M=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d.oAB({type:e,bootstrap:[O]}),e.\u0275inj=d.cJS({providers:[i.O],imports:[[r.ez,n.QW,U.Ps,q.c,A.ot,_.LD,p.JF,l.ef,m.IJ,x.Bz.forChild(N)]]}),e})()}}]);