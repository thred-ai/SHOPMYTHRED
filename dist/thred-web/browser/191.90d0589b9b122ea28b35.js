(self.webpackChunkthred_web=self.webpackChunkthred_web||[]).push([[191],{15191:(e,t,o)=>{"use strict";o.r(t),o.d(t,{CheckoutModule:()=>q});var n=o(38583),i=o(37503),r=o(93738),l=o(79866),s=o(16304),d=o(37716),a=o(72284),u=o(25917),c=o(95987),p=o(39075),h=o(12303),m=o(97430),g=o(78078);function v(e,t){if(1&e&&(d.TgZ(0,"ngx-spinner",3),d.TgZ(1,"h3",4),d._uU(2),d.qZA(),d.qZA()),2&e){const e=d.oxw();d.Udp("color",e.selectedIndicator().color),d.s9C("bdColor",e.selectedIndicator().bg_color),d.s9C("color",e.selectedIndicator().color),d.s9C("type",e.selectedIndicator().name),d.Q6J("fullScreen",!0),d.xp6(1),d.Udp("font-family",e.storeInfo().fontName),d.xp6(1),d.hij(" ",e.loadingName,"\n")}}function f(e,t){if(1&e&&(d.TgZ(0,"header",5),d._UZ(1,"img",6),d.qZA()),2&e){const e=d.oxw();d.Gre("bg-",e.storeInfo().colorStyle.back_code," py-6"),d.xp6(1),d.Q6J("src",null==e.storeInfo().themeLink?null:e.storeInfo().themeLink.toString(),d.LSH)}}function y(e,t){if(1&e){const e=d.EpF();d.TgZ(0,"div",33),d.TgZ(1,"div",34),d.TgZ(2,"a",35),d.NdJ("click",function(){const t=d.CHM(e).$implicit;return d.oxw(2).routeToProduct(t.product.productID)}),d._UZ(3,"img",36),d.qZA(),d.TgZ(4,"div",37),d.TgZ(5,"p"),d.TgZ(6,"a",38),d.NdJ("click",function(){const t=d.CHM(e).$implicit;return d.oxw(2).routeToProduct(t.product.productID)}),d._uU(7),d.qZA(),d.qZA(),d.TgZ(8,"div",39),d.TgZ(9,"span",40),d._uU(10,"Size:"),d.qZA(),d._uU(11),d.qZA(),d.TgZ(12,"div",39),d.TgZ(13,"span",40),d._uU(14,"Color:"),d.qZA(),d._uU(15),d.qZA(),d.TgZ(16,"div",41),d._uU(17),d.qZA(),d.qZA(),d.qZA(),d.TgZ(18,"div",42),d.TgZ(19,"label",43),d._uU(20,"Quantity"),d.qZA(),d.TgZ(21,"input",44,45),d.NdJ("change",function(){const t=d.CHM(e).$implicit,o=d.MAs(22);return d.oxw(2).updateProductQty(t,o.value)}),d.qZA(),d.TgZ(23,"button",46),d.NdJ("click",function(){const t=d.CHM(e).$implicit;return d.oxw(2).updateProductQty(t,"0")}),d._UZ(24,"i",47),d.TgZ(25,"span",48),d._uU(26,"Remove"),d.qZA(),d.qZA(),d.qZA(),d.qZA()}if(2&e){const e=t.$implicit,o=d.oxw(2);let n,i,r;d.xp6(3),d.s9C("src",e.product.url,d.LSH),d.xp6(3),d.Gre("text-",o.storeInfo().colorStyle.text_code," text-decoration-none"),d.Udp("font-family",o.storeInfo().fontName)("color",o.selectedTheme().color),d.xp6(1),d.Oqu(null!==(n=null==e.product?null:e.product.name)&&void 0!==n?n:""),d.xp6(1),d.Udp("font-family",o.storeInfo().fontName)("color",o.selectedTheme().color),d.xp6(3),d.Oqu(null!==(i=e.size)&&void 0!==i?i:"M"),d.xp6(1),d.Udp("font-family",o.storeInfo().fontName)("color",o.selectedTheme().color),d.xp6(3),d.Oqu(o.getColor(e.product)),d.xp6(1),d.Udp("font-family",o.storeInfo().fontName)("color",o.selectedTheme().color),d.xp6(1),d.Oqu(o.formatPrice(o.mainPrice(e.product))),d.xp6(2),d.Udp("font-family",o.storeInfo().fontName)("color",o.selectedTheme().color),d.xp6(2),d.Udp("font-family",o.storeInfo().fontName)("background-color",o.selectedTheme().bg_color)("color",o.selectedTheme().color),d.s9C("value",null!==(r=e.quantity)&&void 0!==r?r:1),d.xp6(2),d.Udp("font-family",o.storeInfo().fontName)}}function T(e,t){if(1&e){const e=d.EpF();d.TgZ(0,"a",49),d.NdJ("click",function(t){return d.CHM(e),d.oxw(2).placeOrder(t)}),d.qZA()}if(2&e){const e=d.oxw(2);d.Udp("font-family",e.storeInfo().fontName)("background-color",e.selectedTheme().color)("color",e.selectedTheme().bg_color),d.Q6J("innerHTML","Place Order",d.oJD)}}function b(e,t){if(1&e){const e=d.EpF();d.TgZ(0,"ngx-stripe-payment-request-button",50),d.NdJ("paymentMethod",function(t){return d.CHM(e),d.oxw(2).onPaymentMethod(t)}),d.qZA()}if(2&e){const e=d.oxw(2);d.Q6J("paymentOptions",e.paymentRequestOptions)}}function x(e,t){if(1&e&&(d.TgZ(0,"div",26),d.TgZ(1,"h3",27),d._uU(2,"Discount:"),d.qZA(),d.TgZ(3,"h3",51),d._uU(4),d.qZA(),d.qZA()),2&e){const e=d.oxw(2);d.xp6(1),d.Udp("color",e.selectedTheme().color),d.xp6(3),d.hij("-",e.formatPrice(e.orderNum(!0)-e.orderNum()),"")}}function Z(e,t){if(1&e){const e=d.EpF();d.TgZ(0,"section",7),d.TgZ(1,"div",8),d.TgZ(2,"div",9),d.TgZ(3,"section",10),d.TgZ(4,"div"),d.TgZ(5,"div",11),d.TgZ(6,"div",12),d.TgZ(7,"h2",13),d._uU(8,"1. Shipping Address"),d.qZA(),d.TgZ(9,"h3",14),d._uU(10),d.qZA(),d.TgZ(11,"h3",14),d._uU(12),d.qZA(),d.TgZ(13,"h3",14),d._uU(14),d.qZA(),d.TgZ(15,"p"),d.TgZ(16,"a",15),d.NdJ("click",function(){return d.CHM(e),d.oxw().routeToShipping()}),d._uU(17,"Change"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(18,"div"),d.TgZ(19,"div",11),d.TgZ(20,"div",12),d.TgZ(21,"h2",13),d._uU(22,"2. Payment Method "),d.qZA(),d.TgZ(23,"h3",14),d._uU(24),d.qZA(),d.TgZ(25,"p"),d.TgZ(26,"a",15),d.NdJ("click",function(){return d.CHM(e),d.oxw().routeToBilling()}),d._uU(27,"Change"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(28,"div"),d.TgZ(29,"h2",16),d._uU(30,"3. Review Order"),d.qZA(),d.TgZ(31,"div",17),d.YNc(32,y,27,44,"div",18),d.qZA(),d.qZA(),d.qZA(),d.TgZ(33,"aside",19),d.TgZ(34,"div",20),d.TgZ(35,"div",17),d.TgZ(36,"p",21),d._uU(37),d.qZA(),d.TgZ(38,"div",22),d.YNc(39,T,1,9,"a",23),d.qZA(),d.YNc(40,b,1,1,"ngx-stripe-payment-request-button",24),d.TgZ(41,"div",25),d.TgZ(42,"div",26),d.TgZ(43,"h3",27),d._uU(44),d.qZA(),d.TgZ(45,"h3",28),d._uU(46),d.qZA(),d.qZA(),d.TgZ(47,"div",26),d.TgZ(48,"h3",27),d._uU(49,"Shipping & Handling:"),d.qZA(),d.TgZ(50,"h3",28),d._uU(51),d.qZA(),d.qZA(),d.TgZ(52,"div",26),d.TgZ(53,"h3",27),d._uU(54,"Sales Tax:"),d.qZA(),d.TgZ(55,"h3",28),d._uU(56),d.qZA(),d.qZA(),d.YNc(57,x,5,4,"div",29),d.qZA(),d.TgZ(58,"div",30),d.TgZ(59,"h3",27),d._uU(60,"Order Total:"),d.qZA(),d.TgZ(61,"h3",28),d._uU(62),d.qZA(),d.qZA(),d.TgZ(63,"div",31),d._UZ(64,"img",32),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA()}if(2&e){const e=d.oxw();let t;d.Udp("background-color",e.selectedTheme().bg_color),d.Q6J("hidden",e.stillLoadingProducts()),d.xp6(4),d.Gre("bg-",e.storeInfo().colorStyle.back_code," rounded-3 shadow-lg p-2 pb-1"),d.xp6(2),d.Q6J("hidden",e.stillLoadingProducts()),d.xp6(1),d.Udp("font-family",e.storeInfo().fontName)("color",e.selectedTheme().color),d.xp6(2),d.Udp("font-family",e.storeInfo().fontName)("color",e.selectedTheme().color),d.xp6(1),d.Oqu(e.getShippingAddressFirst()),d.xp6(1),d.Udp("font-family",e.storeInfo().fontName)("color",e.selectedTheme().color),d.xp6(1),d.Oqu(e.getShippingAddressSecond()),d.xp6(1),d.Udp("font-family",e.storeInfo().fontName)("color",e.selectedTheme().color),d.xp6(1),d.Oqu(e.getShippingAddressThird()),d.xp6(2),d.Udp("font-family",e.storeInfo().fontName)("color",e.selectedTheme().color),d.xp6(2),d.Gre("bg-",e.storeInfo().colorStyle.back_code," rounded-3 shadow-lg p-2 pt-3 pb-1 mt-3"),d.xp6(2),d.Q6J("hidden",e.stillLoadingProducts()),d.xp6(1),d.Udp("font-family",e.storeInfo().fontName)("color",e.selectedTheme().color),d.xp6(2),d.Udp("font-family",e.storeInfo().fontName)("color",e.selectedTheme().color),d.xp6(1),d.Oqu(e.getBillingAddressFirst()),d.xp6(2),d.Udp("font-family",e.storeInfo().fontName)("color",e.selectedTheme().color),d.xp6(2),d.Gre("bg-",e.storeInfo().colorStyle.back_code," rounded-3 shadow-lg p-4 pt-3 mt-3"),d.xp6(1),d.Udp("font-family",e.storeInfo().fontName)("color",e.selectedTheme().color),d.xp6(3),d.Q6J("ngForOf",e.cart()),d.xp6(2),d.Gre("bg-",e.storeInfo().colorStyle.back_code," rounded-3 shadow-lg p-4 pb-0"),d.Q6J("hidden",e.stillLoading()),d.xp6(2),d.Udp("font-family",e.storeInfo().fontName),d.Q6J("hidden",""==e.err),d.xp6(1),d.hij(" ",e.err," "),d.xp6(2),d.Q6J("ngIf",!e.useOtherPaymentMethod),d.xp6(1),d.Q6J("ngIf",e.isBrowser()&&null!=e.tax()&&null!=(null==(t=e.billingAddress())?null:t.admin_area)&&""!=(null==(t=e.billingAddress())?null:t.admin_area)),d.xp6(3),d.Udp("color",e.selectedTheme().color),d.xp6(1),d.hij("Items (",e.itemCount(),"):"),d.xp6(1),d.Udp("color",e.selectedTheme().color),d.xp6(1),d.Oqu(e.formatPrice(e.d_total(!0))),d.xp6(2),d.Udp("color",e.selectedTheme().color),d.xp6(2),d.Udp("color",e.selectedTheme().color),d.xp6(1),d.Oqu(e.shipping()),d.xp6(2),d.Udp("color",e.selectedTheme().color),d.xp6(2),d.Udp("color",e.selectedTheme().color),d.xp6(1),d.Oqu(e.productTax(!0)),d.xp6(1),d.Q6J("ngIf",e.cartDiscount()),d.xp6(2),d.Udp("color",e.selectedTheme().color),d.xp6(2),d.Udp("color",e.selectedTheme().color),d.xp6(1),d.Oqu(e.orderTotal()),d.xp6(2),d.Udp("height",60,"px")}}let C=(()=>{class e{constructor(e,t,o,n,r,l,s,d,a,u,c,p){var h;this.platformID=e,this.stripeKey=t,this.cdr=o,this.router=n,this._router=r,this.titleService=l,this.metaService=s,this.loadService=d,this.spinner=a,this.rootComponent=u,this.stripeService=c,this.routingService=p,this.useCard=!1,this.err="",this.loadingName="",this.isSpinning=!1,this.useOtherPaymentMethod=!1,this.paymentRequestOptions={country:"US",currency:"usd",total:{label:"Thred Apps Inc.",amount:0},requestPayerName:!1,requestPayerEmail:!1},this.useOtherPaymentMethod=null!==(h=i.O.useOtherPaymentMethod)&&void 0!==h&&h}storeInfo(){return i.O.storeInfo}availableCurrencies(){return i.O.availableCurrencies}selectedCurrency(){return i.O.selectedCurrency}templates(){return i.O.availableTemplates}availableTemplates(){return i.O.availableTemplates}selectedTemplate(){return i.O.selectedTemplate}shippingAddress(){return i.O.shippingInfo}billingAddress(){return i.O.billingInfo}tax(){return i.O.shippingTax}cartLength(){var e,t;return 0==(null===(e=this.rootComponent.cart)||void 0===e?void 0:e.length)?"":null===(t=this.rootComponent.cart)||void 0===t?void 0:t.length}cart(){var e;return null!==(e=this.rootComponent.cart)&&void 0!==e?e:[]}routeToCart(){this.rootComponent.routeToCart()}productTax(e=!1){var t;let o=null!==(t=this.productTaxNum(e))&&void 0!==t?t:0;return o>0?this.numberWithCommas(this.formatPrice(null!=o?o:0)):"N/A"}productTaxNum(e=!1){var t,o;return console.log(this.d_total(e)),console.log(Math.round(this.shippingNum())),console.log(null!==(t=this.tax())&&void 0!==t?t:0),(this.d_total(e)+Math.round(this.shippingNum()))*(null!==(o=this.tax())&&void 0!==o?o:0)}orderTotal(e=!1){return this.numberWithCommas(this.formatPrice(this.orderNum(e)))}orderNum(e=!1){return this.total(e)+this.shippingNum()+this.productTaxNum(e)}getColor(e){var t,o,n;let r=null===(t=i.O.templates.find(t=>t.productCode==(null==e?void 0:e.productType)))||void 0===t?void 0:t.colors;return null!==(n=null===(o=null==r?void 0:r.find(t=>t.code==(null==e?void 0:e.templateColor)))||void 0===o?void 0:o.display)&&void 0!==n?n:"White"}stillLoadingProducts(){var e,t;return 0!=(null===(t=null===(e=this.rootComponent.cart)||void 0===e?void 0:e.filter(e=>{var t;return null==(null===(t=e.product)||void 0===t?void 0:t.price)}))||void 0===t?void 0:t.length)}stillLoading(){var e,t,o,n;return 0!=(null===(t=null===(e=this.rootComponent.cart)||void 0===e?void 0:e.filter(e=>{var t;return null==(null===(t=e.product)||void 0===t?void 0:t.price)}))||void 0===t?void 0:t.length)||0!=(null===(n=null===(o=i.O.availableCurrencies)||void 0===o?void 0:o.filter(e=>null==e.shipping_rate_usd))||void 0===n?void 0:n.length)||null==i.O.shippingTax}calculateShipping(e){this.selectedCountry=e.target.options[e.target.options.selectedIndex].text}onKey(e){this.selectedCode=e.target.value}calculateDiscount(){}updateProductQty(e,t){var o=this;return(0,s.Z)(function*(){var n,i,r;e.quantity=Number(t);let l=[],s=[];null===(n=o.rootComponent.cart)||void 0===n||n.forEach((e,t)=>{var o,n,i;if((null!==(o=e.quantity)&&void 0!==o?o:0)>0){let t={UID:null===(n=e.product)||void 0===n?void 0:n.uid,Size:e.size,Qty:e.quantity,Timestamp:e.timestamp,Post_ID:null===(i=e.product)||void 0===i?void 0:i.productID};l.push(t)}else s.push(e)}),o.rootComponent.cart=null===(i=o.rootComponent.cart)||void 0===i?void 0:i.filter(e=>!s.includes(e)),yield o.loadService.changeCart(l),0!=(null===(r=o.rootComponent.cart)||void 0===r?void 0:r.length)?(o.updatePayBtnOptions(),o.cdr.detectChanges()):o.routeToCart()})()}calculate(){this.cdr.detectChanges()}shipping(){var e,t;let o=(null!==(t=null===(e=i.O.availableCurrencies.find(e=>{var t,o,n,r,l;return(null===(t=e.name_full)||void 0===t?void 0:t.toLowerCase())==(null===(n=null===(o=i.O.shippingInfo)||void 0===o?void 0:o.country)||void 0===n?void 0:n.toLowerCase().trim())||(null===(r=e.name)||void 0===r?void 0:r.toLowerCase())==(null===(l=this.selectedCountry)||void 0===l?void 0:l.toLowerCase().trim())}))||void 0===e?void 0:e.shipping_rate_usd)&&void 0!==t?t:0)/100;return o>0?this.numberWithCommas(this.formatPrice(o)):"FREE"}shippingNum(){var e,t;return(null!==(t=null===(e=i.O.availableCurrencies.find(e=>{var t,o,n;return(null===(t=e.name_full)||void 0===t?void 0:t.toLowerCase())==(null===(n=null===(o=i.O.shippingInfo)||void 0===o?void 0:o.country)||void 0===n?void 0:n.toLowerCase().trim())}))||void 0===e?void 0:e.shipping_rate_usd)&&void 0!==t?t:0)/100}autoCoupon(e){var t;return null===(t=this.storeInfo().coupons)||void 0===t?void 0:t.filter(t=>t.products.includes(e.productID)&&t.auto).sort(function(e,t){return e.amt<t.amt?1:e.amt>t.amt?-1:0})[0]}cartDiscount(){var e;return null===(e=this.storeInfo().coupons)||void 0===e?void 0:e.filter(e=>{var t;return"order_qty"==e.type&&this.totalLength()>=e.threshold||"order_val"==e.type&&(null!==(t=this.total(!0))&&void 0!==t?t:0)>=e.threshold&&e.auto}).sort(function(e,t){return e.amt<t.amt?1:e.amt>t.amt?-1:0})[0]}mainPrice(e,t=!1){var o,n,i,r,l,s,d,a;let u=this.autoCoupon(e);if(u&&(!this.cartDiscount()||1==(null===(o=this.cartDiscount())||void 0===o?void 0:o.style)&&1==u.style)){if(0==u.style)return(null!==(n=e.price)&&void 0!==n?n:0)/100-(null!==(i=e.price)&&void 0!==i?i:0)/100*u.amt;if(1==u.style)return(null!==(r=e.price)&&void 0!==r?r:0)/100-100*(null!==(l=u.amt)&&void 0!==l?l:0)}if(t){let t=this.cartDiscount();if(t&&0==t.style)return(null!==(s=e.price)&&void 0!==s?s:0)/100-(null!==(d=e.price)&&void 0!==d?d:0)/100*t.amt}return(null!==(a=e.price)&&void 0!==a?a:0)/100}total(e=!1){var t,o,n,i=0;return null===(t=this.rootComponent.cart)||void 0===t||t.forEach(t=>{var o,r,l,s,d,a,u,c;if(e){var p=this.autoCoupon(t.product);i+=0==(null==p?void 0:p.style)?Math.round((null!==(r=null===(o=t.product)||void 0===o?void 0:o.price)&&void 0!==r?r:0)*(null!==(l=t.quantity)&&void 0!==l?l:1)):Math.round(((null!==(d=null===(s=t.product)||void 0===s?void 0:s.price)&&void 0!==d?d:0)-1e4*(null!==(a=null==p?void 0:p.amt)&&void 0!==a?a:0))*(null!==(u=t.quantity)&&void 0!==u?u:1))}else{i+=Math.round(100*this.mainPrice(t.product,!0)*(null!==(c=t.quantity)&&void 0!==c?c:1));let e=this.cartDiscount();1==(null==e?void 0:e.style)&&(n=e)}}),e?i/100:i/100-100*(null!==(o=null==n?void 0:n.amt)&&void 0!==o?o:0)}d_total(e=!1){var t,o=0;return null===(t=this.rootComponent.cart)||void 0===t||t.forEach(t=>{var n,i;o+=e?Math.round(100*this.mainPrice(t.product,!1)*(null!==(n=t.quantity)&&void 0!==n?n:1)):Math.round(100*this.mainPrice(t.product,!0)*(null!==(i=t.quantity)&&void 0!==i?i:1))}),o/100}format(e){return i.O.months[e.getMonth()].substring(0,3)+" "+e.getDate()+" "+e.getFullYear()}hasCart(){var e,t;return null!==(t=0!=(null===(e=this.rootComponent.cart)||void 0===e?void 0:e.length))&&void 0!==t&&t}callback(){var e=this;return(0,s.Z)(function*(){var t,o,r,l,s,d,a,u,c,p,h,m,g,v,f,y;if(yield e.loadService.authenticated())if(i.O.storeInfo.username)if(e.loadingName=null!==(o=null===(t=e.storeInfo())||void 0===t?void 0:t.fullName)&&void 0!==o?o:"",e.showSpinner(),e.rootComponent.setFavIcon(null!==(l=null===(r=i.O.storeInfo.profileLink)||void 0===r?void 0:r.toString())&&void 0!==l?l:""),e.rootComponent.setOptions(),e.addTags(null!==(s=i.O.storeInfo.fullName)&&void 0!==s?s:"Thred",(null!==(d=i.O.storeInfo.profileLink)&&void 0!==d?d:new URL("https://shopmythred.com")).toString(),null!==(a=i.O.storeInfo.bio)&&void 0!==a?a:"Check out my Thred Store!","shopmythred.com/"+i.O.storeInfo.username),null==i.O.userInfo&&(0,n.NF)(e.platformID))e.loadService.getCustomer();else{if(0==(null===(u=e.rootComponent.cart)||void 0===u?void 0:u.length)&&(0,n.NF)(e.platformID))return void e.routeToCart();if(null==i.O.shippingInfo&&(0,n.NF)(e.platformID))e.loadService.getShippingAddress();else{if((""==(null===(c=i.O.shippingInfo)||void 0===c?void 0:c.email)||null==(null===(p=i.O.shippingInfo)||void 0===p?void 0:p.email))&&(0,n.NF)(e.platformID))return void e.routeToCart();if(!e.useOtherPaymentMethod&&null==i.O.billingInfo&&(0,n.NF)(e.platformID))e.loadService.getBillingInfo();else{if(!(e.useOtherPaymentMethod||""!=(null===(h=i.O.billingInfo)||void 0===h?void 0:h.number)&&null!=(null===(m=i.O.billingInfo)||void 0===m?void 0:m.number))&&(0,n.NF)(e.platformID))return void e.routeToBilling();0==i.O.availableCurrencies.length&&(0,n.NF)(e.platformID)?e.loadService.getCountries():0==i.O.templates.length&&(0,n.NF)(e.platformID)?e.loadService.getTemplates():null==(null===(g=i.O.billingInfo)||void 0===g?void 0:g.admin_area)||""==(null===(v=i.O.billingInfo)||void 0===v?void 0:v.admin_area)&&(0,n.NF)(e.platformID)?e.loadService.getBillingAddress():null==i.O.shippingTax&&(null===(f=i.O.billingInfo)||void 0===f?void 0:f.admin_area)&&""!=(null===(y=i.O.billingInfo)||void 0===y?void 0:y.admin_area)&&(0,n.NF)(e.platformID)?e.loadService.getTax(e.billingAddress()):(e.updatePayBtnOptions(),e.cdr.detectChanges())}}}else e.routingService.routeTo404(e.getStoreName().isCustom);else e.routeToCart()})()}updatePayBtnOptions(){var e,t,o,n;let r=null===(e=i.O.availableCurrencies)||void 0===e?void 0:e.filter(e=>{var t;return e.name_full==(null===(t=i.O.billingInfo)||void 0===t?void 0:t.country)});if(r&&0!=r.length){const e=Math.round(100*(null!==(t=(this.total()+this.shippingNum()+this.productTaxNum())*r[0].rate)&&void 0!==t?t:1));this.paymentRequestOptions={country:r[0].name,currency:r[0].currency_name.toLowerCase(),total:{label:null!==(o=i.O.storeInfo.fullName)&&void 0!==o?o:"Thred Apps Inc.",amount:e},requestPayerName:!0,requestPayerEmail:!0}}else{const e=Math.round(100*(this.total()+this.shippingNum()+this.productTaxNum()));this.paymentRequestOptions={country:"US",currency:"usd",total:{label:null!==(n=i.O.storeInfo.fullName)&&void 0!==n?n:"Thred Apps Inc.",amount:e},requestPayerName:!0,requestPayerEmail:!0}}}theme(){return"light"==this.storeInfo().colorStyle.back_code?"dark":"light"}selectedIndicator(){var e,t,o,n,r,l;let s=null===(t=null===(e=i.O.storeInfo)||void 0===e?void 0:e.loading)||void 0===t?void 0:t.color,d=null===(n=null===(o=i.O.storeInfo)||void 0===o?void 0:o.loading)||void 0===n?void 0:n.bg_color;return{name:null===(l=null===(r=i.O.storeInfo)||void 0===r?void 0:r.loading)||void 0===l?void 0:l.name,color:"rgba("+s[0]+","+s[1]+","+s[2]+","+s[3]+")",bg_color:"rgba("+d[0]+","+d[1]+","+d[2]+","+d[3]+")"}}selectedTheme(){var e,t,o,n,r,l;let s=null===(t=null===(e=i.O.storeInfo)||void 0===e?void 0:e.colorStyle)||void 0===t?void 0:t.btn_color,d=null===(n=null===(o=i.O.storeInfo)||void 0===o?void 0:o.colorStyle)||void 0===n?void 0:n.bg_color;return{name:null===(l=null===(r=i.O.storeInfo)||void 0===r?void 0:r.colorStyle)||void 0===l?void 0:l.name,color:"rgba("+s[0]+","+s[1]+","+s[2]+","+s[3]+")",bg_color:"rgba("+d[0]+","+d[1]+","+d[2]+","+d[3]+")"}}showSpinner(){this.isSpinning||(this.isSpinning=!0,(0,n.NF)(this.platformID)&&this.spinner.show(),setTimeout(()=>{this.spinner.hide()},1500))}hideSpinner(){this.isSpinning&&(this.isSpinning=!1)}routeToProduct(e){this.rootComponent.routeToProduct(e)}routeToShipping(){this.rootComponent.routeToShipping()}routeToBilling(){this.rootComponent.routeToBilling()}routeToShop(){this.rootComponent.routeToShop()}placeOrder(e){this.loadingName="Placing Order...",(0,n.NF)(this.platformID)&&this.spinner.show(),e.target.disabled=!0;let t=this.storeInfo().uid;this.loadService.createPayment(t,!0,(e,t,o)=>{this.spinner.hide(),o?this.err=o:this.finishedOrder(e,t)},this.cartDiscount())}finishedOrder(e,t){this.loadingName="",(0,n.NF)(this.platformID)&&this.spinner.hide(),this.rootComponent.routeToOrder(e)}init(){i.O.shippingInfo=void 0,i.O.billingInfo=void 0,i.O.shippingTax=void 0;const e=this.getStoreName();this.downloadAllStoreInfo(e.link,e.isCustom)}downloadAllStoreInfo(e,t=!1){this.loadService.myCallback=()=>this.callback(),this.loadService.getUser(e,void 0,t)}getStoreName(){var e;return"localhost:4200"!=(e=(0,n.PM)(this.platformID)?i.O.URL:globalThis.location.host)&&"shopmythred.com"!=e?{isCustom:!0,link:e}:{isCustom:!1,link:this.router.snapshot.paramMap.get("user")}}onPaymentMethod(e){let t=this.storeInfo().uid;this.loadService.createPayment(t,!1,(t,o,n)=>this.stripeService.confirmCardPayment(o,{payment_method:e.paymentMethod.id},{handleActions:!1}).subscribe(i=>i.error?(this.err=n,e.complete("fail"),console.log(i.error),(0,u.of)({error:new Error("Error Confirming the payment")})):(e.complete("success"),this.finishedOrder(t,o))))}getShippingAddressSecond(){var e,t,o=null===(e=this.shippingAddress())||void 0===e?void 0:e.street,n=null===(t=this.shippingAddress())||void 0===t?void 0:t.unit;return n&&(o+=". "+n),o}getShippingAddressThird(){var e,t,o;return(null===(e=this.shippingAddress())||void 0===e?void 0:e.city)+", "+(null===(t=this.shippingAddress())||void 0===t?void 0:t.admin_area)+". "+(null===(o=this.shippingAddress())||void 0===o?void 0:o.postal)}itemCount(){var e,t=0;return null===(e=this.rootComponent.cart)||void 0===e||e.forEach(e=>{var o;t+=null!==(o=e.quantity)&&void 0!==o?o:0}),t}getShippingAddressFirst(){var e,t,o=null===(e=this.shippingAddress())||void 0===e?void 0:e.name,n=null===(t=this.shippingAddress())||void 0===t?void 0:t.company;return n&&(o+=" - "+n),o}getBillingAddressFirst(){var e,t,o,n,i=null!==(n=this.titleCase(null!==(t=null===(e=this.billingAddress())||void 0===e?void 0:e.brand)&&void 0!==t?t:"")+" ending in "+(null===(o=this.billingAddress())||void 0===o?void 0:o.number))&&void 0!==n?n:"";return this.useOtherPaymentMethod&&(i=""),i}totalLength(){var e,t=0;return null===(e=this.rootComponent.cart)||void 0===e||e.forEach(e=>{var o;t+=null!==(o=e.quantity)&&void 0!==o?o:1}),t}titleCase(e=""){for(var t=e.toLowerCase().split(" "),o=0;o<t.length;o++)t[o]=t[o].charAt(0).toUpperCase()+t[o].substring(1);return t.join(" ")}isBrowser(){return(0,n.NF)(this.platformID)}formatPrice(e){var t=new String((e*i.O.selectedCurrency.rate).toFixed(2));switch(t.indexOf(".")){case t.length-1:t+="00";break;case t.length-2:t+="0"}return this.numberWithCommas(this.getCurrencyForCountry(i.O.selectedCurrency,"US"!=i.O.selectedCurrency.name)+t)}numberWithCommas(e){return e.replace(/\B(?=(\d{3})+(?!\d))/g,",")}getCurrencyForCountry(e,t){var o=e.currency_symbol;return t&&(o=e.name+" "+o),o}addTags(e,t,o,n){this.metaService.updateTag({property:"og:title",content:e+" - Checkout"}),this.metaService.updateTag({property:"og:image:width",content:"200"}),this.metaService.updateTag({property:"og:image:height",content:"200"}),this.metaService.updateTag({property:"og:image",content:t}),this.metaService.updateTag({property:"og:url",content:n}),this.metaService.updateTag({property:"og:description",content:o}),this.titleService.setTitle(e),this.metaService.updateTag({property:"description",content:o})}ngAfterViewInit(){}ngOnInit(){this.init()}}return e.\u0275fac=function(t){return new(t||e)(d.Y36(d.Lbi),d.Y36(a.QZ),d.Y36(d.sBO),d.Y36(c.gz),d.Y36(c.F0),d.Y36(p.Dx),d.Y36(p.h_),d.Y36(h.J),d.Y36(l.t2),d.Y36(m.y),d.Y36(a.tJ),d.Y36(g.Z))},e.\u0275cmp=d.Xpm({type:e,selectors:[["app-checkout"]],decls:4,vars:3,consts:[["size","large",3,"bdColor","color","type","fullScreen",4,"ngIf"],["style","height: fit-content;",3,"class",4,"ngIf"],["class","py-5",3,"hidden","background-color",4,"ngIf"],["size","large",3,"bdColor","color","type","fullScreen"],[1,"text-center","mt-5"],[2,"height","fit-content"],[1,"w-100","h-100",3,"src"],[1,"py-5",3,"hidden"],[1,"container","pb-5","mb-2","mb-md-4"],[1,"row"],[1,"col-lg-8","order-2","order-sm-1"],[1,"py-0","px-xl-2"],[1,"text-accent",3,"hidden"],[1,"h6","mb-3","pb-1","ps-4","mt-2"],[1,"fw-normal","ps-4",2,"font-style","italic"],["role","button",1,"text-primary","text-decoration-none","ps-4",2,"font-weight","bold",3,"click"],[1,"h6","mb-1","pb-1","ps-2","mt-2"],[1,"py-2","px-xl-2"],["class","d-sm-flex justify-content-between align-items-center pb-3 pt-3",4,"ngFor","ngForOf"],[1,"col-lg-4","pb-2","pb-sm-0","ps-xl-5","order-1","order-sm-2"],[3,"hidden"],[1,"text-center","mt-1","mb-3",2,"line-height","1.0em","font-size","12px","height","15px","font-weight","normal","color","red",3,"hidden"],[1,"text-center","mt-2"],["class","btn mb-4 d-flex flex-wrap","style","font-weight:bold; font-size:20px; justify-content: center;",3,"font-family","background-color","color","innerHTML","click",4,"ngIf"],["class","mb-4",3,"paymentOptions","paymentMethod",4,"ngIf"],[1,"text-center","mt-4","pt-3","border-top","border-bottom"],[1,"d-flex","justify-content-between"],[1,"fw-bold",2,"font-size","9"],[1,"fw-normal",2,"font-size","9"],["class","d-flex justify-content-between",4,"ngIf"],[1,"d-flex","justify-content-between","pt-2","mt-2"],[1,"w-100","d-flex","justify-content-end","my-1","mb-4"],["alt","ok","src","assets/secure.png",1,"rounded",2,"object-fit","contain"],[1,"d-sm-flex","justify-content-between","align-items-center","pb-3","pt-3"],[1,"d-block","d-sm-flex","align-items-center","text-center","text-sm-start"],["role","button",1,"d-inline-block","flex-shrink-0","mx-auto","me-sm-4",3,"click"],["onerror","this.src='https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Resources%2Flink_empty.jpeg?alt=media';","width","160","alt","Product",2,"border-radius","2.5%",3,"src"],[1,"pt-2"],["role","button",2,"font-weight","bold",3,"click"],[1,"fs-sm"],[1,"text-muted","me-2"],[1,"fs-lg","text-accent","pt-2"],[1,"pt-2","pt-sm-0","ps-sm-3","mx-auto","mx-sm-0","text-center","text-sm-start",2,"max-width","5.5rem"],["for","quantity_i",1,"form-label"],["type","number","id","quantity_i","min","1",1,"form-control",3,"value","change"],["qtyChooser",""],["type","button",1,"btn","btn-link","px-0","text-danger",3,"click"],[1,"ci-close-circle","me-0"],[1,"fs-sm",2,"font-size","10px"],[1,"btn","mb-4","d-flex","flex-wrap",2,"font-weight","bold","font-size","20px","justify-content","center",3,"innerHTML","click"],[1,"mb-4",3,"paymentOptions","paymentMethod"],[1,"fw-normal",2,"font-size","9","color","rgb(192, 19, 19)"]],template:function(e,t){1&e&&(d._UZ(0,"router-outlet"),d.YNc(1,v,3,10,"ngx-spinner",0),d.YNc(2,f,2,4,"header",1),d.YNc(3,Z,65,107,"section",2)),2&e&&(d.xp6(1),d.Q6J("ngIf",t.isBrowser()),d.xp6(1),d.Q6J("ngIf",t.isBrowser()),d.xp6(1),d.Q6J("ngIf",t.isBrowser()&&t.hasCart()&&null!=t.storeInfo().username))},directives:[c.lC,n.O5,l.Ro,n.sg,a.T1],styles:[".centered[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.cover[_ngcontent-%COMP%]{color:#fff;position:relative;background-repeat:no-repeat;background-position-x:center;background-position-y:center;background-size:cover}"]}),e})();var I=o(76627);const O=[{path:"",component:C}];let q=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d.oAB({type:e,bootstrap:[C]}),e.\u0275inj=d.cJS({providers:[i.O],imports:[[n.ez,r.QW,I.Ps,l.ef,c.Bz.forChild(O),a.lO.forRoot("pk_live_m7nEWhyTHoxGspcxtJAci6pu002LUiOnJK")]]}),e})()}}]);