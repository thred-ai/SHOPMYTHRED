(self.webpackChunkthred_web=self.webpackChunkthred_web||[]).push([[191],{15191:(e,t,o)=>{"use strict";o.r(t),o.d(t,{CheckoutModule:()=>C});var n=o(38583),r=o(37503),i=o(93738),l=o(79866),s=o(16304),d=o(37716),a=o(72284),c=o(25917),u=o(95987),p=o(39075),m=o(21952),h=o(55041),g=o(78078),f=o(76627);function v(e,t){if(1&e&&(d.TgZ(0,"ngx-spinner",3),d.TgZ(1,"h3",4),d._uU(2),d.qZA(),d.qZA()),2&e){const e=d.oxw();d.Udp("color",e.selectedIndicator().color),d.s9C("bdColor",e.selectedIndicator().bg_color),d.s9C("color",e.selectedIndicator().color),d.s9C("type",e.selectedIndicator().name),d.Q6J("fullScreen",!0),d.xp6(1),d.Udp("font-family",e.storeInfo().fontName),d.xp6(1),d.hij(" ",e.loadingName,"\n")}}function T(e,t){if(1&e&&(d.TgZ(0,"header",5),d.TgZ(1,"div",6),d.TgZ(2,"div",7),d.TgZ(3,"div"),d.TgZ(4,"p",8),d._uU(5," REVIEW ORDER "),d.qZA(),d.TgZ(6,"p",9),d._uU(7," SECURE CHECKOUT "),d.TgZ(8,"mat-icon",10),d._uU(9," lock "),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA()),2&e){const e=d.oxw();d.Gre("bg-",e.storeInfo().colorStyle.back_code," py-6"),d.Q6J("hidden",e.stillLoadingProducts()),d.xp6(1),d.Udp("background-image","url("+e.storeInfo().themeLink.toString()+")"),d.xp6(3),d.Udp("font-family",e.storeInfo().fontName),d.xp6(2),d.Udp("font-family",e.storeInfo().fontName),d.xp6(2),d.Q6J("inline",!0)}}function x(e,t){if(1&e){const e=d.EpF();d.TgZ(0,"div",34),d.TgZ(1,"div",35),d.TgZ(2,"a",36),d.NdJ("click",function(){const t=d.CHM(e).$implicit;return d.oxw(2).routeToProduct(t.product.productID)}),d._UZ(3,"img",37),d.qZA(),d.TgZ(4,"div",38),d.TgZ(5,"p"),d.TgZ(6,"a",39),d.NdJ("click",function(){const t=d.CHM(e).$implicit;return d.oxw(2).routeToProduct(t.product.productID)}),d._uU(7),d.qZA(),d.qZA(),d.TgZ(8,"div",40),d.TgZ(9,"span",41),d._uU(10,"Size:"),d.qZA(),d._uU(11),d.qZA(),d.TgZ(12,"div",40),d.TgZ(13,"span",41),d._uU(14,"Color:"),d.qZA(),d._uU(15),d.qZA(),d.TgZ(16,"div",42),d._uU(17),d.qZA(),d.qZA(),d.qZA(),d.TgZ(18,"div",43),d.TgZ(19,"label",44),d._uU(20,"Quantity"),d.qZA(),d.TgZ(21,"input",45,46),d.NdJ("change",function(){const t=d.CHM(e).$implicit,o=d.MAs(22);return d.oxw(2).updateProductQty(t,o.value)}),d.qZA(),d.TgZ(23,"button",47),d.NdJ("click",function(){const t=d.CHM(e).$implicit;return d.oxw(2).updateProductQty(t,"0")}),d._UZ(24,"i",48),d.TgZ(25,"span",49),d._uU(26,"Remove"),d.qZA(),d.qZA(),d.qZA(),d.qZA()}if(2&e){const e=t.$implicit,o=d.oxw(2);let n,r,i;d.xp6(3),d.s9C("src",e.product.url,d.LSH),d.xp6(3),d.Gre("text-",o.storeInfo().colorStyle.text_code," text-decoration-none"),d.Udp("font-family",o.storeInfo().fontName)("color",o.selectedTheme().color),d.xp6(1),d.Oqu(null!==(n=null==e.product?null:e.product.name)&&void 0!==n?n:""),d.xp6(1),d.Udp("font-family",o.storeInfo().fontName)("color",o.selectedTheme().color),d.xp6(3),d.Oqu(null!==(r=e.size)&&void 0!==r?r:"M"),d.xp6(1),d.Udp("font-family",o.storeInfo().fontName)("color",o.selectedTheme().color),d.xp6(3),d.Oqu(o.getColor(e.product)),d.xp6(1),d.Udp("font-family",o.storeInfo().fontName)("color",o.selectedTheme().color),d.xp6(1),d.Oqu(o.formatPrice(e.product.price/100)),d.xp6(2),d.Udp("font-family",o.storeInfo().fontName)("color",o.selectedTheme().color),d.xp6(2),d.Udp("font-family",o.storeInfo().fontName)("background-color",o.selectedTheme().bg_color)("color",o.selectedTheme().color),d.s9C("value",null!==(i=e.quantity)&&void 0!==i?i:1),d.xp6(2),d.Udp("font-family",o.storeInfo().fontName)}}function y(e,t){if(1&e){const e=d.EpF();d.TgZ(0,"a",50),d.NdJ("click",function(t){return d.CHM(e),d.oxw(2).placeOrder(t)}),d.qZA()}if(2&e){const e=d.oxw(2);d.Udp("font-family",e.storeInfo().fontName)("background-color",e.selectedTheme().color)("color",e.selectedTheme().bg_color),d.Q6J("innerHTML","Place Order",d.oJD)}}function b(e,t){if(1&e){const e=d.EpF();d.TgZ(0,"ngx-stripe-payment-request-button",51),d.NdJ("paymentMethod",function(t){return d.CHM(e),d.oxw(2).onPaymentMethod(t)}),d.qZA()}if(2&e){const e=d.oxw(2);d.Q6J("paymentOptions",e.paymentRequestOptions)("options",e.cardOptions)}}function Z(e,t){if(1&e){const e=d.EpF();d.TgZ(0,"section",11),d.TgZ(1,"div",12),d.TgZ(2,"div",13),d.TgZ(3,"section",14),d.TgZ(4,"div"),d.TgZ(5,"div",15),d.TgZ(6,"div",16),d.TgZ(7,"h2",17),d._uU(8,"1. Shipping Address"),d.qZA(),d.TgZ(9,"h3",18),d._uU(10),d.qZA(),d.TgZ(11,"h3",18),d._uU(12),d.qZA(),d.TgZ(13,"h3",18),d._uU(14),d.qZA(),d.TgZ(15,"p"),d.TgZ(16,"a",19),d.NdJ("click",function(){return d.CHM(e),d.oxw().routeToShipping()}),d._uU(17,"Change"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(18,"div"),d.TgZ(19,"div",15),d.TgZ(20,"div",16),d.TgZ(21,"h2",17),d._uU(22,"2. Payment Method "),d.qZA(),d.TgZ(23,"h3",18),d._uU(24),d.qZA(),d.TgZ(25,"p"),d.TgZ(26,"a",20),d.NdJ("click",function(){return d.CHM(e),d.oxw().routeToBilling()}),d._uU(27,"Change"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(28,"div"),d.TgZ(29,"h2",21),d._uU(30,"3. Review Order"),d.qZA(),d.TgZ(31,"div",22),d.YNc(32,x,27,44,"div",23),d.qZA(),d.qZA(),d.qZA(),d.TgZ(33,"aside",24),d.TgZ(34,"div",5),d.TgZ(35,"div",22),d.TgZ(36,"p",25),d._uU(37),d.qZA(),d.TgZ(38,"div",26),d.YNc(39,y,1,9,"a",27),d.qZA(),d.YNc(40,b,1,2,"ngx-stripe-payment-request-button",28),d.TgZ(41,"div",29),d.TgZ(42,"div",30),d.TgZ(43,"h3",31),d._uU(44),d.qZA(),d.TgZ(45,"h3",32),d._uU(46),d.qZA(),d.qZA(),d.TgZ(47,"div",30),d.TgZ(48,"h3",31),d._uU(49,"Shipping & Handling:"),d.qZA(),d.TgZ(50,"h3",32),d._uU(51),d.qZA(),d.qZA(),d.TgZ(52,"div",30),d.TgZ(53,"h3",31),d._uU(54,"Sales Tax:"),d.qZA(),d.TgZ(55,"h3",32),d._uU(56),d.qZA(),d.qZA(),d.qZA(),d.TgZ(57,"div",33),d.TgZ(58,"h3",31),d._uU(59,"Order Total:"),d.qZA(),d.TgZ(60,"h3",32),d._uU(61),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA()}if(2&e){const e=d.oxw();let t;d.Udp("background-color",e.selectedTheme().bg_color),d.Q6J("hidden",e.stillLoadingProducts()),d.xp6(4),d.Gre("bg-",e.storeInfo().colorStyle.back_code," rounded-3 shadow-lg p-2 pb-1"),d.xp6(2),d.Q6J("hidden",e.stillLoadingProducts()),d.xp6(1),d.Udp("font-family",e.storeInfo().fontName)("color",e.selectedTheme().color),d.xp6(2),d.Udp("font-family",e.storeInfo().fontName)("color",e.selectedTheme().color),d.xp6(1),d.Oqu(e.getShippingAddressFirst()),d.xp6(1),d.Udp("font-family",e.storeInfo().fontName)("color",e.selectedTheme().color),d.xp6(1),d.Oqu(e.getShippingAddressSecond()),d.xp6(1),d.Udp("font-family",e.storeInfo().fontName)("color",e.selectedTheme().color),d.xp6(1),d.Oqu(e.getShippingAddressThird()),d.xp6(2),d.Udp("font-family",e.storeInfo().fontName)("color",e.selectedTheme().color),d.MGl("href","/",e.storeInfo().username,"/shipping-address",d.LSH),d.xp6(2),d.Gre("bg-",e.storeInfo().colorStyle.back_code," rounded-3 shadow-lg p-2 pt-3 pb-1 mt-3"),d.xp6(2),d.Q6J("hidden",e.stillLoadingProducts()),d.xp6(1),d.Udp("font-family",e.storeInfo().fontName)("color",e.selectedTheme().color),d.xp6(2),d.Udp("font-family",e.storeInfo().fontName)("color",e.selectedTheme().color),d.xp6(1),d.Oqu(e.getBillingAddressFirst()),d.xp6(2),d.Udp("font-family",e.storeInfo().fontName)("color",e.selectedTheme().color),d.xp6(2),d.Gre("bg-",e.storeInfo().colorStyle.back_code," rounded-3 shadow-lg p-4 pt-3 mt-3"),d.xp6(1),d.Udp("font-family",e.storeInfo().fontName)("color",e.selectedTheme().color),d.xp6(3),d.Q6J("ngForOf",e.cart()),d.xp6(2),d.Gre("bg-",e.storeInfo().colorStyle.back_code," rounded-3 shadow-lg p-4 pb-0"),d.Q6J("hidden",e.stillLoading()),d.xp6(2),d.Udp("font-family",e.storeInfo().fontName),d.Q6J("hidden",""==e.err),d.xp6(1),d.hij(" ",e.err," "),d.xp6(2),d.Q6J("ngIf",!e.useOtherPaymentMethod),d.xp6(1),d.Q6J("ngIf",e.isBrowser()&&null!=e.tax()&&null!=(null==(t=e.billingAddress())?null:t.admin_area)&&""!=(null==(t=e.billingAddress())?null:t.admin_area)),d.xp6(3),d.Udp("color",e.selectedTheme().color),d.xp6(1),d.hij("Items (",e.itemCount(),"):"),d.xp6(1),d.Udp("color",e.selectedTheme().color),d.xp6(1),d.Oqu(e.formatPrice(e.total())),d.xp6(2),d.Udp("color",e.selectedTheme().color),d.xp6(2),d.Udp("color",e.selectedTheme().color),d.xp6(1),d.Oqu(e.shipping()),d.xp6(2),d.Udp("color",e.selectedTheme().color),d.xp6(2),d.Udp("color",e.selectedTheme().color),d.xp6(1),d.Oqu(e.productTax()),d.xp6(2),d.Udp("color",e.selectedTheme().color),d.xp6(2),d.Udp("color",e.selectedTheme().color),d.xp6(1),d.Oqu(e.orderTotal())}}let I=(()=>{class e{constructor(e,t,o,n,i,l,s,d,a,c,u,p){var m;this.platformID=e,this.stripeKey=t,this.cdr=o,this.router=n,this._router=i,this.titleService=l,this.metaService=s,this.loadService=d,this.spinner=a,this.rootComponent=c,this.stripeService=u,this.routingService=p,this.useCard=!1,this.err="",this.loadingName="",this.isSpinning=!1,this.useOtherPaymentMethod=!1,this.paymentRequestOptions={country:"US",currency:"usd",total:{label:"Thred Apps Inc.",amount:0},requestPayerName:!1,requestPayerEmail:!1},this.cardOptions={style:{paymentRequestButton:{theme:"dark"}}},this.useOtherPaymentMethod=null!==(m=r.O.useOtherPaymentMethod)&&void 0!==m&&m}storeInfo(){return r.O.storeInfo}availableCurrencies(){return r.O.availableCurrencies}selectedCurrency(){return r.O.selectedCurrency}templates(){return r.O.availableTemplates}availableTemplates(){return r.O.availableTemplates}selectedProduct(){return r.O.selectedProduct}selectedTemplate(){return r.O.selectedTemplate}shippingAddress(){return r.O.shippingInfo}billingAddress(){return r.O.billingInfo}tax(){return r.O.shippingTax}cartLength(){var e,t;return 0==(null===(e=this.rootComponent.cart)||void 0===e?void 0:e.length)?"":null===(t=this.rootComponent.cart)||void 0===t?void 0:t.length}cart(){var e;return null!==(e=this.rootComponent.cart)&&void 0!==e?e:[]}routeToCart(){this.rootComponent.routeToCart()}productTax(){var e;let t=null!==(e=this.productTaxNum())&&void 0!==e?e:0;return t>0?this.numberWithCommas(this.formatPrice(null!=t?t:0)):"N/A"}productTaxNum(){var e;return(this.total()+this.shippingNum())*(null!==(e=this.tax())&&void 0!==e?e:0)}orderTotal(){return this.numberWithCommas(this.formatPrice(this.total()+this.shippingNum()+this.productTaxNum()))}getColor(e){var t,o,n;let i=null===(t=r.O.templates.find(t=>t.productCode==(null==e?void 0:e.productType)))||void 0===t?void 0:t.colors;return null!==(n=null===(o=null==i?void 0:i.find(t=>t.code==(null==e?void 0:e.templateColor)))||void 0===o?void 0:o.display)&&void 0!==n?n:"White"}stillLoadingProducts(){var e,t;return 0!=(null===(t=null===(e=this.rootComponent.cart)||void 0===e?void 0:e.filter(e=>{var t;return null==(null===(t=e.product)||void 0===t?void 0:t.price)}))||void 0===t?void 0:t.length)}stillLoading(){var e,t,o,n;return 0!=(null===(t=null===(e=this.rootComponent.cart)||void 0===e?void 0:e.filter(e=>{var t;return null==(null===(t=e.product)||void 0===t?void 0:t.price)}))||void 0===t?void 0:t.length)||0!=(null===(n=null===(o=r.O.availableCurrencies)||void 0===o?void 0:o.filter(e=>null==e.shipping_rate_usd))||void 0===n?void 0:n.length)||null==r.O.shippingTax}calculateShipping(e){this.selectedCountry=e.target.options[e.target.options.selectedIndex].text}onKey(e){this.selectedCode=e.target.value}calculateDiscount(){}updateProductQty(e,t){var o=this;return(0,s.Z)(function*(){var n,r,i;e.quantity=Number(t);let l=[],s=[];null===(n=o.rootComponent.cart)||void 0===n||n.forEach((e,t)=>{var o,n,r;if((null!==(o=e.quantity)&&void 0!==o?o:0)>0){let t={UID:null===(n=e.product)||void 0===n?void 0:n.uid,Size:e.size,Qty:e.quantity,Timestamp:e.timestamp,Post_ID:null===(r=e.product)||void 0===r?void 0:r.productID};l.push(t)}else s.push(e)}),o.rootComponent.cart=null===(r=o.rootComponent.cart)||void 0===r?void 0:r.filter(e=>!s.includes(e)),yield o.loadService.changeCart(l),0!=(null===(i=o.rootComponent.cart)||void 0===i?void 0:i.length)?o.cdr.detectChanges():o.routeToCart()})()}calculate(){this.cdr.detectChanges()}shipping(){var e,t;let o=(null!==(t=null===(e=r.O.availableCurrencies.find(e=>e.name_full==this.selectedCountry))||void 0===e?void 0:e.shipping_rate_usd)&&void 0!==t?t:0)/100;return o>0?this.numberWithCommas(this.formatPrice(o)):"FREE"}shippingNum(){var e,t;return(null!==(t=null===(e=r.O.availableCurrencies.find(e=>e.name_full==this.selectedCountry))||void 0===e?void 0:e.shipping_rate_usd)&&void 0!==t?t:0)/100}total(){var e,t=0;return null===(e=this.rootComponent.cart)||void 0===e||e.forEach(e=>{var o,n,r;t+=(null!==(n=null===(o=e.product)||void 0===o?void 0:o.price)&&void 0!==n?n:0)*(null!==(r=e.quantity)&&void 0!==r?r:1)}),t/100}format(e){return r.O.months[e.getMonth()].substring(0,3)+" "+e.getDate()+" "+e.getFullYear()}hasCart(){var e,t;return null!==(t=0!=(null===(e=this.rootComponent.cart)||void 0===e?void 0:e.length))&&void 0!==t&&t}callback(){var e=this;return(0,s.Z)(function*(){var t,o,i,l,s,d,a,c,u,p,m,h,g,f,v,T,x,y;if(yield e.loadService.authenticated())if(r.O.storeInfo.username)if(e.cardOptions.style.paymentRequestButton.theme=e.theme(),e.loadingName=null!==(o=null===(t=e.storeInfo())||void 0===t?void 0:t.fullName)&&void 0!==o?o:"",e.showSpinner(),e.rootComponent.setFavIcon(r.O.storeInfo.profileLink.toString()),e.rootComponent.setOptions(),e.addTags(null!==(i=r.O.storeInfo.fullName)&&void 0!==i?i:"Thred",(null!==(l=r.O.storeInfo.profileLink)&&void 0!==l?l:new URL("https://shopmythred.com")).toString(),null!==(s=r.O.storeInfo.bio)&&void 0!==s?s:"Check out my Thred Store!","shopmythred.com/"+r.O.storeInfo.username),null==r.O.userInfo&&(0,n.NF)(e.platformID))e.loadService.getCustomer();else{if(0==(null===(d=e.rootComponent.cart)||void 0===d?void 0:d.length)&&(0,n.NF)(e.platformID))return void e.routeToCart();if(null==r.O.shippingInfo&&(0,n.NF)(e.platformID))e.loadService.getShippingAddress();else{if((""==(null===(a=r.O.shippingInfo)||void 0===a?void 0:a.email)||null==(null===(c=r.O.shippingInfo)||void 0===c?void 0:c.email))&&(0,n.NF)(e.platformID))return void e.routeToCart();if(!e.useOtherPaymentMethod&&null==r.O.billingInfo&&(0,n.NF)(e.platformID))e.loadService.getBillingInfo();else{if(!(e.useOtherPaymentMethod||""!=(null===(u=r.O.billingInfo)||void 0===u?void 0:u.number)&&null!=(null===(p=r.O.billingInfo)||void 0===p?void 0:p.number))&&(0,n.NF)(e.platformID))return void e.routeToBilling();if(0==r.O.availableCurrencies.length&&(0,n.NF)(e.platformID))e.loadService.getCountries();else if(0==r.O.templates.length&&(0,n.NF)(e.platformID))e.loadService.getTemplates();else if(null==(null===(m=r.O.billingInfo)||void 0===m?void 0:m.admin_area)||""==(null===(h=r.O.billingInfo)||void 0===h?void 0:h.admin_area)&&(0,n.NF)(e.platformID))e.loadService.getBillingAddress();else if(null==r.O.shippingTax&&(null===(g=r.O.billingInfo)||void 0===g?void 0:g.admin_area)&&""!=(null===(f=r.O.billingInfo)||void 0===f?void 0:f.admin_area)&&(0,n.NF)(e.platformID))e.loadService.getTax(e.billingAddress());else{console.log(r.O.billingInfo.country);let t=null===(v=r.O.availableCurrencies)||void 0===v?void 0:v.filter(e=>{var t;return e.name_full==(null===(t=r.O.billingInfo)||void 0===t?void 0:t.country)});if(t&&0!=t.length){const o=Math.round(100*(null!==(T=(e.total()+e.shippingNum()+e.productTaxNum())*t[0].rate)&&void 0!==T?T:1));console.log(t[0].currency_name),console.log(o),e.paymentRequestOptions={country:t[0].name,currency:t[0].currency_name.toLowerCase(),total:{label:null!==(x=r.O.storeInfo.fullName)&&void 0!==x?x:"Thred Apps Inc.",amount:o},requestPayerName:!0,requestPayerEmail:!0},console.log(e.paymentRequestOptions)}else{const o=Math.round(100*(e.total()+e.shippingNum()+e.productTaxNum()));console.log(t[0].currency_name),console.log(o),e.paymentRequestOptions={country:"US",currency:"usd",total:{label:null!==(y=r.O.storeInfo.fullName)&&void 0!==y?y:"Thred Apps Inc.",amount:o},requestPayerName:!0,requestPayerEmail:!0}}e.cdr.detectChanges()}}}}else e.routingService.routeTo404(e.getStoreName().isCustom);else e.routeToCart()})()}theme(){return"light"==this.storeInfo().colorStyle.back_code?"dark":"light"}selectedIndicator(){var e,t,o,n,i,l;let s=null===(t=null===(e=r.O.storeInfo)||void 0===e?void 0:e.loading)||void 0===t?void 0:t.color,d=null===(n=null===(o=r.O.storeInfo)||void 0===o?void 0:o.loading)||void 0===n?void 0:n.bg_color;return{name:null===(l=null===(i=r.O.storeInfo)||void 0===i?void 0:i.loading)||void 0===l?void 0:l.name,color:"rgba("+s[0]+","+s[1]+","+s[2]+","+s[3]+")",bg_color:"rgba("+d[0]+","+d[1]+","+d[2]+","+d[3]+")"}}selectedTheme(){var e,t,o,n,i,l;let s=null===(t=null===(e=r.O.storeInfo)||void 0===e?void 0:e.colorStyle)||void 0===t?void 0:t.btn_color,d=null===(n=null===(o=r.O.storeInfo)||void 0===o?void 0:o.colorStyle)||void 0===n?void 0:n.bg_color;return{name:null===(l=null===(i=r.O.storeInfo)||void 0===i?void 0:i.colorStyle)||void 0===l?void 0:l.name,color:"rgba("+s[0]+","+s[1]+","+s[2]+","+s[3]+")",bg_color:"rgba("+d[0]+","+d[1]+","+d[2]+","+d[3]+")"}}showSpinner(){this.isSpinning||(this.isSpinning=!0,(0,n.NF)(this.platformID)&&this.spinner.show(),setTimeout(()=>{this.spinner.hide()},1500))}hideSpinner(){this.isSpinning&&(this.isSpinning=!1)}routeToProduct(e){this.rootComponent.routeToProduct(e)}routeToShipping(){this.rootComponent.routeToShipping()}routeToBilling(){this.rootComponent.routeToBilling()}routeToShop(){this.rootComponent.routeToShop()}placeOrder(e){this.loadingName="Placing Order...",(0,n.NF)(this.platformID)&&this.spinner.show(),e.target.disabled=!0;let t=this.storeInfo().uid;this.loadService.createPayment(t,!0,(e,t,o)=>{this.spinner.hide(),o?this.err=o:this.finishedOrder(e,t)})}finishedOrder(e,t){this.loadingName="",(0,n.NF)(this.platformID)&&this.spinner.hide(),this.rootComponent.routeToOrder(e)}init(){r.O.shippingInfo=void 0,r.O.billingInfo=void 0,r.O.shippingTax=void 0;const e=this.getStoreName();this.downloadAllStoreInfo(e.link,e.isCustom)}downloadAllStoreInfo(e,t=!1){this.loadService.myCallback=()=>this.callback(),this.loadService.getUser(e,void 0,t)}getStoreName(){var e="";return(0,n.PM)(this.platformID)?(e=r.O.URL,console.log(e)):e=globalThis.location.host,"localhost:4200"!=e&&"shopmythred.com"!=e?{isCustom:!0,link:e}:{isCustom:!1,link:this.router.snapshot.paramMap.get("user")}}onPaymentMethod(e){let t=this.storeInfo().uid;this.loadService.createPayment(t,!1,(t,o,n)=>this.stripeService.confirmCardPayment(o,{payment_method:e.paymentMethod.id},{handleActions:!1}).subscribe(r=>r.error?(this.err=n,e.complete("fail"),console.log(r.error),(0,c.of)({error:new Error("Error Confirming the payment")})):(console.log("success"),e.complete("success"),this.finishedOrder(t,o))))}getShippingAddressSecond(){var e,t,o=null===(e=this.shippingAddress())||void 0===e?void 0:e.street,n=null===(t=this.shippingAddress())||void 0===t?void 0:t.unit;return n&&(o+=". "+n),o}getShippingAddressThird(){var e,t,o;return(null===(e=this.shippingAddress())||void 0===e?void 0:e.city)+", "+(null===(t=this.shippingAddress())||void 0===t?void 0:t.admin_area)+". "+(null===(o=this.shippingAddress())||void 0===o?void 0:o.postal)}itemCount(){var e,t=0;return null===(e=this.rootComponent.cart)||void 0===e||e.forEach(e=>{var o;t+=null!==(o=e.quantity)&&void 0!==o?o:0}),t}getShippingAddressFirst(){var e,t,o=null===(e=this.shippingAddress())||void 0===e?void 0:e.name,n=null===(t=this.shippingAddress())||void 0===t?void 0:t.company;return n&&(o+=" - "+n),o}getBillingAddressFirst(){var e,t,o=(null===(e=this.billingAddress())||void 0===e?void 0:e.brand)+" ending in "+(null===(t=this.billingAddress())||void 0===t?void 0:t.number);return this.useOtherPaymentMethod&&(o=""),o}isBrowser(){return(0,n.NF)(this.platformID)}formatPrice(e){var t=new String((e*r.O.selectedCurrency.rate).toFixed(2));switch(t.indexOf(".")){case t.length-1:t+="00";break;case t.length-2:t+="0"}return this.numberWithCommas(this.getCurrencyForCountry(r.O.selectedCurrency,"US"!=r.O.selectedCurrency.name)+t)}numberWithCommas(e){return e.replace(/\B(?=(\d{3})+(?!\d))/g,",")}getCurrencyForCountry(e,t){var o=e.currency_symbol;return t&&(o=e.name+" "+o),o}addTags(e,t,o,n){this.metaService.updateTag({property:"og:title",content:e+" - Home"}),this.metaService.updateTag({property:"og:image",content:t}),this.metaService.updateTag({property:"og:url",content:n}),this.metaService.updateTag({property:"og:description",content:o}),this.titleService.setTitle(e),this.metaService.updateTag({property:"description",content:o})}ngAfterViewInit(){}ngOnInit(){this.init()}}return e.\u0275fac=function(t){return new(t||e)(d.Y36(d.Lbi),d.Y36(a.QZ),d.Y36(d.sBO),d.Y36(u.gz),d.Y36(u.F0),d.Y36(p.Dx),d.Y36(p.h_),d.Y36(m.J),d.Y36(l.t2),d.Y36(h.y),d.Y36(a.tJ),d.Y36(g.Z))},e.\u0275cmp=d.Xpm({type:e,selectors:[["app-checkout"]],decls:4,vars:3,consts:[["size","large",3,"bdColor","color","type","fullScreen",4,"ngIf"],[3,"hidden","class",4,"ngIf"],["class","py-5",3,"hidden","background-color",4,"ngIf"],["size","large",3,"bdColor","color","type","fullScreen"],[1,"text-center"],[3,"hidden"],[1,"cover",2,"background-image","url(https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Resources%2FSample-Walls%2FHome%2F1.jpg?alt=media)"],[1,"d-flex","align-items-center","justify-content-center",2,"height","200px","font-weight","bold","font-size","35px"],[1,"text-center",2,"line-height","1.2em","text-shadow","2px 2px 4px #42424281"],[1,"text-center",2,"line-height","1.2em","font-size","25px","text-shadow","2px 2px 4px #42424281"],[3,"inline"],[1,"py-5",3,"hidden"],[1,"container","pb-5","mb-2","mb-md-4"],[1,"row"],[1,"col-lg-8"],[1,"py-0","px-xl-2"],[1,"text-accent",3,"hidden"],[1,"h6","mb-3","pb-1","ps-4","mt-2"],[1,"fw-normal","ps-4",2,"font-style","italic"],["role","button",1,"text-primary","text-decoration-none","ps-4",2,"font-weight","bold",3,"href","click"],["role","button",1,"text-primary","text-decoration-none","ps-4",2,"font-weight","bold",3,"click"],[1,"h6","mb-1","pb-1","ps-2","mt-2"],[1,"py-2","px-xl-2"],["class","d-sm-flex justify-content-between align-items-center pb-3 pt-3",4,"ngFor","ngForOf"],[1,"col-lg-4","pt-4","pt-lg-0","ps-xl-5"],[1,"text-center","mt-1","mb-3",2,"line-height","1.0em","font-size","12px","height","15px","font-weight","normal","color","red",3,"hidden"],[1,"text-center","mt-2"],["class","btn mb-4 d-flex flex-wrap","style","font-weight:bold; font-size:20px; justify-content: center;",3,"font-family","background-color","color","innerHTML","click",4,"ngIf"],["class","mb-4",3,"paymentOptions","options","paymentMethod",4,"ngIf"],[1,"text-center","mt-4","pt-3","border-top","border-bottom"],[1,"d-flex","justify-content-between"],[1,"fw-bold",2,"font-size","9"],[1,"fw-normal",2,"font-size","9"],[1,"d-flex","justify-content-between","pt-2","mt-2"],[1,"d-sm-flex","justify-content-between","align-items-center","pb-3","pt-3"],[1,"d-block","d-sm-flex","align-items-center","text-center","text-sm-start"],["role","button",1,"d-inline-block","flex-shrink-0","mx-auto","me-sm-4",3,"click"],["onerror","this.src='https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Resources%2Flink_empty.jpeg?alt=media';","width","160","alt","Product",2,"border-radius","2.5%",3,"src"],[1,"pt-2"],["role","button",2,"font-weight","bold",3,"click"],[1,"fs-sm"],[1,"text-muted","me-2"],[1,"fs-lg","text-accent","pt-2"],[1,"pt-2","pt-sm-0","ps-sm-3","mx-auto","mx-sm-0","text-center","text-sm-start",2,"max-width","5.5rem"],["for","quantity_i",1,"form-label"],["type","number","id","quantity_i","min","1",1,"form-control",3,"value","change"],["qtyChooser",""],["type","button",1,"btn","btn-link","px-0","text-danger",3,"click"],[1,"ci-close-circle","me-0"],[1,"fs-sm",2,"font-size","10px"],[1,"btn","mb-4","d-flex","flex-wrap",2,"font-weight","bold","font-size","20px","justify-content","center",3,"innerHTML","click"],[1,"mb-4",3,"paymentOptions","options","paymentMethod"]],template:function(e,t){1&e&&(d._UZ(0,"router-outlet"),d.YNc(1,v,3,10,"ngx-spinner",0),d.YNc(2,T,10,11,"header",1),d.YNc(3,Z,62,105,"section",2)),2&e&&(d.xp6(1),d.Q6J("ngIf",t.isBrowser()),d.xp6(1),d.Q6J("ngIf",t.isBrowser()&&t.hasCart()&&null!=t.storeInfo().username),d.xp6(1),d.Q6J("ngIf",t.isBrowser()&&t.hasCart()&&null!=t.storeInfo().username))},directives:[u.lC,n.O5,l.Ro,f.Hw,n.sg,a.T1],styles:[".centered[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.cover[_ngcontent-%COMP%]{color:#fff;position:relative;background-repeat:no-repeat;background-position-x:center;background-position-y:center;background-size:cover}"]}),e})();const O=[{path:"",component:I}];let C=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d.oAB({type:e,bootstrap:[I]}),e.\u0275inj=d.cJS({providers:[r.O],imports:[[n.ez,i.QW,f.Ps,l.ef,u.Bz.forChild(O),a.lO.forRoot("pk_live_m7nEWhyTHoxGspcxtJAci6pu002LUiOnJK")]]}),e})()}}]);