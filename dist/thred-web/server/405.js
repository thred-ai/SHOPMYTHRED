exports.id=405,exports.ids=[405],exports.modules={51405:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ShippingAddressModule:()=>ShippingAddressModule});var common=__webpack_require__(38583),globals=__webpack_require__(37503),card=__webpack_require__(93738),ngx_spinner=__webpack_require__(79866),asyncToGenerator=__webpack_require__(16304),core=__webpack_require__(37716),fesm2015_forms=__webpack_require__(3679),shipping_address_model=__webpack_require__(37927),router=__webpack_require__(95987),platform_browser=__webpack_require__(39075),load_service=__webpack_require__(56105),app_component=__webpack_require__(97430),routing_service=__webpack_require__(78078),form_field=__webpack_require__(98295),input=__webpack_require__(80414),fesm2015_select=__webpack_require__(67441),fesm2015_button=__webpack_require__(51095),fesm2015_core=__webpack_require__(72458);function ShippingAddressComponent_ngx_spinner_1_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"ngx-spinner",3),core.TgZ(1,"h3",4),core._uU(2," Updating Shipping Address...\n"),core.qZA(),core.qZA()),2&rf){const ctx_r0=core.oxw();core.Udp("color",ctx_r0.selectedIndicator().color),core.s9C("bdColor",ctx_r0.selectedIndicator().bg_color),core.s9C("color",ctx_r0.selectedIndicator().color),core.s9C("type",ctx_r0.selectedIndicator().name),core.Q6J("fullScreen",!0),core.xp6(1),core.Udp("font-family",ctx_r0.storeInfo().fontName)}}function ShippingAddressComponent_header_2_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"header",5),core._UZ(1,"img",6),core.qZA()),2&rf){const ctx_r1=core.oxw();core.Gre("bg-",ctx_r1.storeInfo().colorStyle.back_code," py-6"),core.xp6(1),core.Q6J("src",null==ctx_r1.storeInfo().themeLink?null:ctx_r1.storeInfo().themeLink.toString(),core.LSH)}}function ShippingAddressComponent_section_3_mat_error_16_Template(rf,ctx){1&rf&&(core.TgZ(0,"mat-error"),core._uU(1," First name is "),core.TgZ(2,"strong"),core._uU(3,"required"),core.qZA(),core.qZA())}function ShippingAddressComponent_section_3_mat_error_22_Template(rf,ctx){1&rf&&(core.TgZ(0,"mat-error"),core._uU(1," First name is "),core.TgZ(2,"strong"),core._uU(3,"required"),core.qZA(),core.qZA())}function ShippingAddressComponent_section_3_mat_error_31_Template(rf,ctx){1&rf&&(core.TgZ(0,"mat-error"),core._uU(1," Email address is "),core.TgZ(2,"strong"),core._uU(3,"required"),core.qZA(),core.qZA())}function ShippingAddressComponent_section_3_mat_error_32_Template(rf,ctx){1&rf&&(core.TgZ(0,"mat-error"),core._uU(1," Email address is "),core.TgZ(2,"strong"),core._uU(3,"invalid"),core.qZA(),core.qZA())}function ShippingAddressComponent_section_3_mat_error_44_Template(rf,ctx){1&rf&&(core.TgZ(0,"mat-error"),core._uU(1," Address is "),core.TgZ(2,"strong"),core._uU(3,"required"),core.qZA(),core.qZA())}function ShippingAddressComponent_section_3_div_45_Template(rf,ctx){if(1&rf){const _r18=core.EpF();core.TgZ(0,"div",12),core.TgZ(1,"div",13),core.TgZ(2,"button",59),core.NdJ("click",function ShippingAddressComponent_section_3_div_45_Template_button_click_2_listener(){core.CHM(_r18);const ctx_r17=core.oxw(2);return ctx_r17.hasUnitNumber=!ctx_r17.hasUnitNumber}),core._uU(3," + Add C/O, Apt, Suite, Unit "),core.qZA(),core.qZA(),core.qZA()}if(2&rf){const ctx_r8=core.oxw(2);core.xp6(2),core.Gre("text-",ctx_r8.storeInfo().colorStyle.text_code,"")}}function ShippingAddressComponent_section_3_div_46_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"div",12),core.TgZ(1,"div",13),core.TgZ(2,"mat-form-field",14),core._UZ(3,"textarea",60),core.TgZ(4,"mat-placeholder",16),core._uU(5,"Address 2"),core.qZA(),core.qZA(),core.qZA(),core.qZA()),2&rf){const ctx_r9=core.oxw(2);core.xp6(3),core.Gre("text-",ctx_r9.storeInfo().colorStyle.text_code,""),core.xp6(1),core.Udp("color",ctx_r9.selectedTheme().color)}}function ShippingAddressComponent_section_3_mat_option_53_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"mat-option",61),core._uU(1),core.qZA()),2&rf){const country_r19=ctx.$implicit,ctx_r10=core.oxw(2);core.MT6("not-empty-select text-",ctx_r10.storeInfo().colorStyle.text_code," bg-",ctx_r10.storeInfo().colorStyle.back_code,""),core.Q6J("value",country_r19.name),core.xp6(1),core.hij(" ",country_r19.name," ")}}function ShippingAddressComponent_section_3_mat_error_56_Template(rf,ctx){1&rf&&(core.TgZ(0,"mat-error"),core._uU(1," Country is "),core.TgZ(2,"strong"),core._uU(3,"required"),core.qZA(),core.qZA())}function ShippingAddressComponent_section_3_mat_error_62_Template(rf,ctx){1&rf&&(core.TgZ(0,"mat-error"),core._uU(1," City is "),core.TgZ(2,"strong"),core._uU(3,"required"),core.qZA(),core.qZA())}function ShippingAddressComponent_section_3_mat_error_68_Template(rf,ctx){1&rf&&(core.TgZ(0,"mat-error"),core._uU(1," State is "),core.TgZ(2,"strong"),core._uU(3,"required"),core.qZA(),core.qZA())}function ShippingAddressComponent_section_3_mat_error_84_Template(rf,ctx){1&rf&&(core.TgZ(0,"mat-error"),core._uU(1," Phone Number is "),core.TgZ(2,"strong"),core._uU(3,"required"),core.qZA(),core.qZA())}function ShippingAddressComponent_section_3_mat_error_85_Template(rf,ctx){1&rf&&(core.TgZ(0,"mat-error"),core._uU(1," Phone Number is "),core.TgZ(2,"strong"),core._uU(3,"invalid"),core.qZA(),core.qZA())}function ShippingAddressComponent_section_3_Template(rf,ctx){if(1&rf){const _r21=core.EpF();core.TgZ(0,"section",7),core.TgZ(1,"div",8),core.TgZ(2,"div",9),core.TgZ(3,"section",10),core.TgZ(4,"form",11),core.TgZ(5,"mat-card"),core.TgZ(6,"mat-card-header"),core.TgZ(7,"mat-card-title"),core._uU(8,"Shipping Information"),core.qZA(),core.qZA(),core.TgZ(9,"mat-card-content"),core.TgZ(10,"div",12),core.TgZ(11,"div",13),core.TgZ(12,"mat-form-field",14),core._UZ(13,"input",15),core.TgZ(14,"mat-placeholder",16),core._uU(15,"First name"),core.qZA(),core.YNc(16,ShippingAddressComponent_section_3_mat_error_16_Template,4,0,"mat-error",17),core.qZA(),core.qZA(),core.TgZ(17,"div",13),core.TgZ(18,"mat-form-field",14),core._UZ(19,"input",18),core.TgZ(20,"mat-placeholder",16),core._uU(21,"Last name"),core.qZA(),core.YNc(22,ShippingAddressComponent_section_3_mat_error_22_Template,4,0,"mat-error",17),core.qZA(),core.qZA(),core.qZA(),core.TgZ(23,"div",12),core.TgZ(24,"div",13),core.TgZ(25,"mat-form-field",14),core._UZ(26,"input",19),core.TgZ(27,"mat-placeholder",16),core._uU(28,"Email Address"),core.qZA(),core.TgZ(29,"mat-hint",20),core._uU(30,"Required for Shipment Tracking"),core.qZA(),core.YNc(31,ShippingAddressComponent_section_3_mat_error_31_Template,4,0,"mat-error",17),core.YNc(32,ShippingAddressComponent_section_3_mat_error_32_Template,4,0,"mat-error",17),core.qZA(),core.qZA(),core.TgZ(33,"div",13),core.TgZ(34,"mat-form-field",14),core._UZ(35,"input",21),core.TgZ(36,"mat-placeholder",16),core._uU(37,"Company (Optional)"),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.TgZ(38,"div",12),core.TgZ(39,"div",13),core.TgZ(40,"mat-form-field",14),core._UZ(41,"input",22),core.TgZ(42,"mat-placeholder",16),core._uU(43,"Address"),core.qZA(),core.YNc(44,ShippingAddressComponent_section_3_mat_error_44_Template,4,0,"mat-error",17),core.qZA(),core.qZA(),core.qZA(),core.YNc(45,ShippingAddressComponent_section_3_div_45_Template,4,3,"div",23),core.YNc(46,ShippingAddressComponent_section_3_div_46_Template,6,5,"div",23),core.TgZ(47,"div",12),core.TgZ(48,"div",13),core.TgZ(49,"mat-form-field",24),core.TgZ(50,"mat-select",25),core.TgZ(51,"mat-select-trigger"),core._uU(52),core.qZA(),core.YNc(53,ShippingAddressComponent_section_3_mat_option_53_Template,2,6,"mat-option",26),core.qZA(),core.TgZ(54,"mat-placeholder",16),core._uU(55,"Country"),core.qZA(),core.YNc(56,ShippingAddressComponent_section_3_mat_error_56_Template,4,0,"mat-error",17),core.qZA(),core.qZA(),core.TgZ(57,"div",13),core.TgZ(58,"mat-form-field",14),core._UZ(59,"input",27),core.TgZ(60,"mat-placeholder",16),core._uU(61,"City"),core.qZA(),core.YNc(62,ShippingAddressComponent_section_3_mat_error_62_Template,4,0,"mat-error",17),core.qZA(),core.qZA(),core.TgZ(63,"div",13),core.TgZ(64,"mat-form-field",14),core._UZ(65,"input",28),core.TgZ(66,"mat-placeholder",16),core._uU(67,"Province/State"),core.qZA(),core.YNc(68,ShippingAddressComponent_section_3_mat_error_68_Template,4,0,"mat-error",17),core.qZA(),core.qZA(),core.qZA(),core.TgZ(69,"div",12),core.TgZ(70,"div",13),core.TgZ(71,"mat-form-field",14),core._UZ(72,"input",29,30),core.TgZ(74,"mat-placeholder",16),core._uU(75),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.TgZ(76,"div",12),core.TgZ(77,"div",13),core.TgZ(78,"mat-form-field",14),core._UZ(79,"input",31),core.TgZ(80,"mat-placeholder",16),core._uU(81,"Phone Number"),core.qZA(),core.TgZ(82,"mat-hint",20),core._uU(83,"Required for Shipment Tracking"),core.qZA(),core.YNc(84,ShippingAddressComponent_section_3_mat_error_84_Template,4,0,"mat-error",17),core.YNc(85,ShippingAddressComponent_section_3_mat_error_85_Template,4,0,"mat-error",17),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.TgZ(86,"aside",32),core.TgZ(87,"div"),core.TgZ(88,"div",33),core.TgZ(89,"div",34),core.TgZ(90,"h2",35),core._uU(91,"Subtotal"),core.qZA(),core.TgZ(92,"h3",36),core._uU(93),core.qZA(),core.qZA(),core.TgZ(94,"p",37),core._uU(95),core.qZA(),core.TgZ(96,"div",38),core.TgZ(97,"a",39),core.NdJ("click",function ShippingAddressComponent_section_3_Template_a_click_97_listener(){core.CHM(_r21);return core.oxw().save()}),core.qZA(),core.qZA(),core.TgZ(98,"div",40),core.TgZ(99,"div",41),core.TgZ(100,"h3",42),core.TgZ(101,"a",43),core._uU(102,"Shipping estimates"),core.qZA(),core.qZA(),core.TgZ(103,"div",44),core.TgZ(104,"div",45),core.TgZ(105,"form",46),core.TgZ(106,"div",47),core.TgZ(107,"h2",48),core._uU(108),core.qZA(),core.TgZ(109,"select",49),core.NdJ("change",function ShippingAddressComponent_section_3_Template_select_change_109_listener($event){core.CHM(_r21);return core.oxw().calculateShipping($event)}),core.TgZ(110,"option",50),core._uU(111,"Choose your country"),core.qZA(),core.TgZ(112,"option",51),core._uU(113,"United States"),core.qZA(),core.TgZ(114,"option",52),core._uU(115,"Canada"),core.qZA(),core.TgZ(116,"option",53),core._uU(117,"United Kingdom"),core.qZA(),core.TgZ(118,"option",54),core._uU(119,"Australia"),core.qZA(),core.qZA(),core.TgZ(120,"div",55),core._uU(121,"Please choose your country!"),core.qZA(),core.qZA(),core.TgZ(122,"button",56),core.NdJ("click",function ShippingAddressComponent_section_3_Template_button_click_122_listener(){core.CHM(_r21);return core.oxw().calculate()}),core._uU(123,"Calculate shipping"),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.TgZ(124,"div",57),core._UZ(125,"img",58),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA()}if(2&rf){const ctx_r2=core.oxw();core.Udp("background-color",ctx_r2.selectedTheme().bg_color),core.xp6(4),core.Q6J("formGroup",ctx_r2.addressForm),core.xp6(1),core.Gre("shipping-card bg-",ctx_r2.storeInfo().colorStyle.back_code," mt-0"),core.xp6(2),core.Gre("text-",ctx_r2.storeInfo().colorStyle.text_code,""),core.Udp("font-family",ctx_r2.storeInfo().fontName),core.xp6(6),core.Gre("text-",ctx_r2.storeInfo().colorStyle.text_code,""),core.xp6(1),core.Udp("color",ctx_r2.selectedTheme().color),core.xp6(2),core.Q6J("ngIf",ctx_r2.addressForm.controls.firstName.hasError("required")),core.xp6(3),core.Gre("text-",ctx_r2.storeInfo().colorStyle.text_code,""),core.xp6(1),core.Udp("color",ctx_r2.selectedTheme().color),core.xp6(2),core.Q6J("ngIf",ctx_r2.addressForm.controls.lastName.hasError("required")),core.xp6(4),core.Gre("text-",ctx_r2.storeInfo().colorStyle.text_code,""),core.Q6J("email",!0),core.xp6(1),core.Udp("color",ctx_r2.selectedTheme().color),core.xp6(2),core.Udp("color",ctx_r2.selectedTheme().color),core.xp6(2),core.Q6J("ngIf",ctx_r2.addressForm.controls.email.hasError("required")),core.xp6(1),core.Q6J("ngIf",ctx_r2.addressForm.controls.email.hasError("email")),core.xp6(3),core.Gre("text-",ctx_r2.storeInfo().colorStyle.text_code,""),core.xp6(1),core.Udp("color",ctx_r2.selectedTheme().color),core.xp6(5),core.Gre("text-",ctx_r2.storeInfo().colorStyle.text_code,""),core.xp6(1),core.Udp("color",ctx_r2.selectedTheme().color),core.xp6(2),core.Q6J("ngIf",ctx_r2.addressForm.controls.address.hasError("required")),core.xp6(1),core.Q6J("ngIf",!ctx_r2.hasUnitNumber),core.xp6(1),core.Q6J("ngIf",ctx_r2.hasUnitNumber),core.xp6(5),core.Gre("text-",ctx_r2.storeInfo().colorStyle.text_code,""),core.xp6(1),core.hij(" ",ctx_r2.addressForm.controls.country.value," "),core.xp6(1),core.Q6J("ngForOf",ctx_r2.countries()),core.xp6(1),core.Udp("color",ctx_r2.selectedTheme().color),core.xp6(2),core.Q6J("ngIf",ctx_r2.addressForm.controls.country.hasError("required")),core.xp6(3),core.Gre("text-",ctx_r2.storeInfo().colorStyle.text_code,""),core.xp6(1),core.Udp("color",ctx_r2.selectedTheme().color),core.xp6(2),core.Q6J("ngIf",ctx_r2.addressForm.controls.city.hasError("required")),core.xp6(3),core.Gre("text-",ctx_r2.storeInfo().colorStyle.text_code,""),core.xp6(1),core.Udp("color",ctx_r2.selectedTheme().color),core.xp6(2),core.Q6J("ngIf",ctx_r2.addressForm.controls.state.hasError("required")),core.xp6(4),core.Gre("text-",ctx_r2.storeInfo().colorStyle.text_code,""),core.xp6(2),core.Udp("color",ctx_r2.selectedTheme().color),core.xp6(1),core.Oqu(ctx_r2.getZipFieldName(ctx_r2.addressForm.controls.country.value)),core.xp6(4),core.Gre("text-",ctx_r2.storeInfo().colorStyle.text_code,""),core.xp6(1),core.Udp("color",ctx_r2.selectedTheme().color),core.xp6(2),core.Udp("color",ctx_r2.selectedTheme().color),core.xp6(2),core.Q6J("ngIf",ctx_r2.addressForm.controls.phone.hasError("required")),core.xp6(1),core.Q6J("ngIf",null==ctx_r2.addressForm.controls.phone.errors?null:ctx_r2.addressForm.controls.phone.errors.pattern),core.xp6(2),core.Gre("bg-",ctx_r2.storeInfo().colorStyle.back_code," rounded-3 shadow-lg p-4"),core.xp6(2),core.Q6J("hidden",ctx_r2.stillLoadingProducts()),core.xp6(1),core.Udp("font-family",ctx_r2.storeInfo().fontName)("color",ctx_r2.selectedTheme().color),core.xp6(2),core.Udp("font-family",ctx_r2.storeInfo().fontName)("color",ctx_r2.selectedTheme().color),core.xp6(1),core.Oqu(ctx_r2.formatPrice(ctx_r2.total())),core.xp6(1),core.Udp("font-family",ctx_r2.storeInfo().fontName),core.Q6J("hidden",""==ctx_r2.err),core.xp6(1),core.hij(" ",ctx_r2.err," "),core.xp6(2),core.Udp("font-family",ctx_r2.storeInfo().fontName)("background-color",ctx_r2.selectedTheme().color)("color",ctx_r2.selectedTheme().bg_color),core.Q6J("innerHTML","Continue",core.oJD),core.xp6(2),core.Udp("background-color",ctx_r2.selectedTheme().bg_color)("color",ctx_r2.selectedTheme().color),core.xp6(1),core.Udp("font-family",ctx_r2.storeInfo().fontName)("color",ctx_r2.selectedTheme().color),core.xp6(1),core.Udp("background-color",ctx_r2.selectedTheme().bg_color)("color",ctx_r2.selectedTheme().color),core.xp6(6),core.Udp("font-family",ctx_r2.storeInfo().fontName)("color",ctx_r2.selectedTheme().color),core.xp6(1),core.hij("Shipping: ",ctx_r2.shipping(),""),core.xp6(1),core.Udp("color",ctx_r2.selectedTheme().color)("background-color",ctx_r2.selectedTheme().bg_color),core.xp6(13),core.Udp("font-family",ctx_r2.storeInfo().fontName),core.xp6(3),core.Udp("height",60,"px")}}class ShippingAddressComponent{constructor(platformID,cdr,router,titleService,metaService,loadService,fb,_router,rootComponent,spinner,routingService){this.platformID=platformID,this.cdr=cdr,this.router=router,this.titleService=titleService,this.metaService=metaService,this.loadService=loadService,this.fb=fb,this._router=_router,this.rootComponent=rootComponent,this.spinner=spinner,this.routingService=routingService,this.addressForm=this.fb.group({company:null,firstName:[null,fesm2015_forms.kI.required],lastName:[null,fesm2015_forms.kI.required],address:[null,fesm2015_forms.kI.required],address2:null,country:[null,[fesm2015_forms.kI.required]],email:[null,[fesm2015_forms.kI.required,fesm2015_forms.kI.email]],phone:[null,[fesm2015_forms.kI.required,fesm2015_forms.kI.pattern("^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$")]],city:[null,fesm2015_forms.kI.required],state:[null,fesm2015_forms.kI.required],postalCode:[null,[fesm2015_forms.kI.required,fesm2015_forms.kI.minLength(2),fesm2015_forms.kI.maxLength(8)]],shipping:["free"]}),this.hasUnitNumber=!1,this.err=""}states(country){return"canada"==(country=null==country?void 0:country.toLowerCase())?globals.O.caProvinces:"united states"==country?globals.O.usStates:"united kingdom"==country?globals.O.ukNations:"australia"==country?globals.O.auNations:globals.O.usStates}countries(){return globals.O.countries}getStateFieldName(country){return"canada"==(country=null==country?void 0:country.toLowerCase())?"Province":"united states"==country?"State":"united kingdom"==country?"Region":"australia"==country?"Province":"State"}getZipFieldName(country){return"canada"==(country=null==country?void 0:country.toLowerCase())?"Postal Code":"united states"==country?"Zip Code":"united kingdom"==country||"australia"==country?"Postal Code":"Zip Code"}storeInfo(){return globals.O.storeInfo}availableCurrencies(){return globals.O.availableCurrencies}selectedCurrency(){return globals.O.selectedCurrency}templates(){return globals.O.availableTemplates}availableTemplates(){return globals.O.availableTemplates}selectedTemplate(){return globals.O.selectedTemplate}cartLength(){var _a,_b;return 0==(null===(_a=this.rootComponent.cart)||void 0===_a?void 0:_a.length)?"":null===(_b=this.rootComponent.cart)||void 0===_b?void 0:_b.length}cart(){return this.rootComponent}shippingI(){return globals.O.shippingInfo}firstName(){var _a;return null===(_a=globals.O.shippingInfo)||void 0===_a?void 0:_a.name.split(" ").slice(0,-1).join(" ")}lastName(){var _a;return null===(_a=globals.O.shippingInfo)||void 0===_a?void 0:_a.name.split(" ").slice(-1).join(" ")}selectedTheme(){var _a,_b,_c,_d,_e,_f;let co=null===(_b=null===(_a=globals.O.storeInfo)||void 0===_a?void 0:_a.colorStyle)||void 0===_b?void 0:_b.btn_color,bco=null===(_d=null===(_c=globals.O.storeInfo)||void 0===_c?void 0:_c.colorStyle)||void 0===_d?void 0:_d.bg_color;return{name:null===(_f=null===(_e=globals.O.storeInfo)||void 0===_e?void 0:_e.colorStyle)||void 0===_f?void 0:_f.name,color:"rgba("+co[0]+","+co[1]+","+co[2]+","+co[3]+")",bg_color:"rgba("+bco[0]+","+bco[1]+","+bco[2]+","+bco[3]+")"}}save(){var _a,_b;if(console.log(this.addressForm.controls.state.value),this.addressForm.valid){let f=this.addressForm.controls,name=f.firstName.value+" "+f.lastName.value;globals.O.shippingInfo=new shipping_address_model.p(name,f.company.value,f.address.value,f.city.value,f.country.value,f.state.value,null!==(_b=null===(_a=f.address2)||void 0===_a?void 0:_a.value)&&void 0!==_b?_b:"",f.postalCode.value,f.phone.value,"",f.email.value),(0,common.NF)(this.platformID)&&this.spinner.show(),this.loadService.linkAddress(err=>{this.spinner.hide(),err?this.err=err:(this.err="",globals.O.billingInfo=void 0,this.routeToBilling())})}else console.log("ello")}getColor(product){var _a,_b,_c;let colors=null===(_a=globals.O.templates.find(template=>template.productCode==(null==product?void 0:product.productType)))||void 0===_a?void 0:_a.colors;return null!==(_c=null===(_b=null==colors?void 0:colors.find(color=>color.code==(null==product?void 0:product.templateColor)))||void 0===_b?void 0:_b.display)&&void 0!==_c?_c:"White"}stillLoadingProducts(){var _a,_b;return 0!=(null===(_b=null===(_a=this.rootComponent.cart)||void 0===_a?void 0:_a.filter(product=>{var _a;return null==(null===(_a=product.product)||void 0===_a?void 0:_a.price)}))||void 0===_b?void 0:_b.length)}calculateShipping($event){let country=$event.target.options[$event.target.options.selectedIndex].text;this.selectedCountry=country}onKey(event){const inputValue=event.target.value;this.selectedCode=inputValue}calculateDiscount(){}updateProductQty(product,newQty){var _a,_b;product.quantity=Number(newQty);let mappedData=[],dataToRemove=[];null===(_a=this.rootComponent.cart)||void 0===_a||_a.forEach((cartProduct,index)=>{var _a,_b,_c;if((null!==(_a=cartProduct.quantity)&&void 0!==_a?_a:0)>0){let data={UID:null===(_b=cartProduct.product)||void 0===_b?void 0:_b.uid,Size:cartProduct.size,Qty:cartProduct.quantity,Timestamp:cartProduct.timestamp,Post_ID:null===(_c=cartProduct.product)||void 0===_c?void 0:_c.productID};mappedData.push(data)}else dataToRemove.push(cartProduct)}),this.rootComponent.cart=null===(_b=this.rootComponent.cart)||void 0===_b?void 0:_b.filter(cartProduct=>!dataToRemove.includes(cartProduct)),this.loadService.changeCart(mappedData),this.cdr.detectChanges()}calculate(){this.cdr.detectChanges()}selectedIndicator(){var _a,_b,_c,_d,_e,_f;let co=null===(_b=null===(_a=globals.O.storeInfo)||void 0===_a?void 0:_a.loading)||void 0===_b?void 0:_b.color,bco=null===(_d=null===(_c=globals.O.storeInfo)||void 0===_c?void 0:_c.loading)||void 0===_d?void 0:_d.bg_color;return{name:null===(_f=null===(_e=globals.O.storeInfo)||void 0===_e?void 0:_e.loading)||void 0===_f?void 0:_f.name,color:"rgba("+co[0]+","+co[1]+","+co[2]+","+co[3]+")",bg_color:"rgba("+bco[0]+","+bco[1]+","+bco[2]+","+bco[3]+")"}}shipping(){var _a,_b;let shipping=(null!==(_b=null===(_a=globals.O.availableCurrencies.find(country=>country.name_full==this.selectedCountry))||void 0===_a?void 0:_a.shipping_rate_usd)&&void 0!==_b?_b:0)/100;return shipping>0?this.formatPrice(shipping):"FREE"}autoCoupon(product){var _a;return null===(_a=this.storeInfo().coupons)||void 0===_a?void 0:_a.filter(coupon=>coupon.products.includes(product.productID)&&coupon.auto).sort(function(a,b){return a.amt<b.amt?1:a.amt>b.amt?-1:0})[0]}mainPrice(product){var _a,_b,_c,_d,_e;let coupon=this.autoCoupon(product);if(coupon){if(0==coupon.style)return(null!==(_a=product.price)&&void 0!==_a?_a:0)/100-(null!==(_b=product.price)&&void 0!==_b?_b:0)/100*coupon.amt;if(1==coupon.style)return(null!==(_c=product.price)&&void 0!==_c?_c:0)/100-100*(null!==(_d=coupon.amt)&&void 0!==_d?_d:0)}return(null!==(_e=product.price)&&void 0!==_e?_e:0)/100}total(){var _a,total=0;return null===(_a=this.rootComponent.cart)||void 0===_a||_a.forEach(product=>{var _a;total+=100*this.mainPrice(product.product)*(null!==(_a=product.quantity)&&void 0!==_a?_a:1)}),total/100}format(d){return globals.O.months[d.getMonth()].substring(0,3)+" "+d.getDate()+" "+d.getFullYear()}setForm(){var _a,_b,_c,_d,_e,_f,_g,_h,_j,_k,_l,_m,_o,_p,_q,_r,_s,_t;this.addressForm.controls.company.setValue(null!==(_b=null===(_a=globals.O.shippingInfo)||void 0===_a?void 0:_a.company)&&void 0!==_b?_b:""),this.addressForm.controls.firstName.setValue(this.firstName()),this.addressForm.controls.lastName.setValue(this.lastName()),this.addressForm.controls.address.setValue(null!==(_d=null===(_c=globals.O.shippingInfo)||void 0===_c?void 0:_c.street)&&void 0!==_d?_d:""),this.addressForm.controls.address2.setValue(null!==(_f=null===(_e=globals.O.shippingInfo)||void 0===_e?void 0:_e.unit)&&void 0!==_f?_f:""),this.addressForm.controls.country.setValue(null!==(_h=null===(_g=globals.O.shippingInfo)||void 0===_g?void 0:_g.country)&&void 0!==_h?_h:""),this.addressForm.controls.email.setValue(null!==(_k=null===(_j=globals.O.shippingInfo)||void 0===_j?void 0:_j.email)&&void 0!==_k?_k:"ok"),this.addressForm.controls.phone.setValue(null!==(_m=null===(_l=globals.O.shippingInfo)||void 0===_l?void 0:_l.phone_num)&&void 0!==_m?_m:""),this.addressForm.controls.city.setValue(null!==(_p=null===(_o=globals.O.shippingInfo)||void 0===_o?void 0:_o.city)&&void 0!==_p?_p:""),this.addressForm.controls.state.setValue(null!==(_r=null===(_q=globals.O.shippingInfo)||void 0===_q?void 0:_q.admin_area)&&void 0!==_r?_r:""),this.addressForm.controls.postalCode.setValue(null!==(_t=null===(_s=globals.O.shippingInfo)||void 0===_s?void 0:_s.postal)&&void 0!==_t?_t:"")}callback(){var _this=this;return(0,asyncToGenerator.Z)(function*(){var _a,_b,_c,_d,_e;(yield _this.loadService.authenticated())?globals.O.storeInfo.username?(_this.rootComponent.setOptions(),_this.rootComponent.setFavIcon(null!==(_b=null===(_a=globals.O.storeInfo.profileLink)||void 0===_a?void 0:_a.toString())&&void 0!==_b?_b:""),_this.addTags(null!==(_c=globals.O.storeInfo.fullName)&&void 0!==_c?_c:"Thred",(null!==(_d=globals.O.storeInfo.profileLink)&&void 0!==_d?_d:new URL("https://shopmythred.com")).toString(),null!==(_e=globals.O.storeInfo.bio)&&void 0!==_e?_e:"Check out my Thred Store!","shopmythred.com/"+globals.O.storeInfo.username),null==globals.O.shippingInfo&&(0,common.NF)(_this.platformID)?_this.loadService.getShippingAddress():null==globals.O.userInfo&&(0,common.NF)(_this.platformID)?_this.loadService.getCustomer():0==globals.O.availableCurrencies.length&&(0,common.NF)(_this.platformID)?_this.loadService.getCountries():0==globals.O.templates.length&&(0,common.NF)(_this.platformID)?_this.loadService.getTemplates():(_this.setForm(),_this.cdr.detectChanges())):_this.routingService.routeTo404(_this.getStoreName().isCustom):_this.routeToCart()})()}routeToCart(){this.rootComponent.routeToCart()}routeToBilling(){var _a;this.loadService.myCallback=()=>this.routeToBilling(),null==globals.O.billingInfo?this.loadService.getBillingAddress():(null===(_a=globals.O.billingInfo)||void 0===_a?void 0:_a.name)?((0,common.NF)(this.platformID)&&this.spinner.hide(),this.rootComponent.routeToReview()):((0,common.NF)(this.platformID)&&this.spinner.hide(),this.rootComponent.routeToBilling())}init(){globals.O.shippingInfo=void 0;const storeInfo=this.getStoreName();this.downloadAllStoreInfo(storeInfo.link,storeInfo.isCustom)}downloadAllStoreInfo(storeName,isCustom=!1){this.loadService.myCallback=()=>this.callback(),this.loadService.getUser(storeName,void 0,isCustom)}getStoreName(){var request="";if((0,common.PM)(this.platformID)?(request=globals.O.URL,console.log(request)):request=globalThis.location.host,"localhost:4200"!=request&&"shopmythred.com"!=request)return{isCustom:!0,link:request};return{isCustom:!1,link:this.router.snapshot.paramMap.get("user")}}isBrowser(){return(0,common.NF)(this.platformID)}formatPrice(price){var priceAsString=new String((price*globals.O.selectedCurrency.rate).toFixed(2));switch(priceAsString.indexOf(".")){case priceAsString.length-1:priceAsString+="00";break;case priceAsString.length-2:priceAsString+="0"}return this.getCurrencyForCountry(globals.O.selectedCurrency,"US"!=globals.O.selectedCurrency.name)+priceAsString}getCurrencyForCountry(country,shouldShowName){var returnItem=country.currency_symbol;return shouldShowName&&(returnItem=country.name+" "+returnItem),returnItem}addTags(title,imgUrl,description,url){this.metaService.updateTag({property:"og:title",content:title+" - Checkout"}),this.metaService.updateTag({property:"og:image:width",content:"200"}),this.metaService.updateTag({property:"og:image:height",content:"200"}),this.metaService.updateTag({property:"og:image",content:imgUrl}),this.metaService.updateTag({property:"og:url",content:url}),this.metaService.updateTag({property:"og:description",content:description}),this.titleService.setTitle(title),this.metaService.updateTag({property:"description",content:description})}ngOnInit(){this.init()}onSubmit(){alert("Thanks!")}}ShippingAddressComponent.\u0275fac=function ShippingAddressComponent_Factory(t){return new(t||ShippingAddressComponent)(core.Y36(core.Lbi),core.Y36(core.sBO),core.Y36(router.gz),core.Y36(platform_browser.Dx),core.Y36(platform_browser.h_),core.Y36(load_service.J),core.Y36(fesm2015_forms.qu),core.Y36(router.F0),core.Y36(app_component.y),core.Y36(ngx_spinner.t2),core.Y36(routing_service.Z))},ShippingAddressComponent.\u0275cmp=core.Xpm({type:ShippingAddressComponent,selectors:[["app-shipping-address"]],decls:4,vars:3,consts:[["size","large",3,"bdColor","color","type","fullScreen",4,"ngIf"],["style","height: fit-content;",3,"class",4,"ngIf"],["class","py-5",3,"background-color",4,"ngIf"],["size","large",3,"bdColor","color","type","fullScreen"],[1,"text-center","mt-5"],[2,"height","fit-content"],[1,"w-100","h-100",3,"src"],[1,"py-5"],[1,"container","pb-5","mb-2","mb-md-4"],[1,"row","mt-3"],[1,"col-lg-8"],["novalidate","",3,"formGroup"],[1,"row"],[1,"col"],[1,"full-width"],["matInput","","formControlName","firstName"],[1,"placeholder"],[4,"ngIf"],["matInput","","formControlName","lastName"],["matInput","","type","email","name","email","formControlName","email",3,"email"],["align","end"],["matInput","","formControlName","company"],["matInput","","formControlName","address"],["class","row",4,"ngIf"],[1,"full-width","labels"],["formControlName","country",1,"labels"],[3,"class","value",4,"ngFor","ngForOf"],["matInput","","formControlName","city"],["matInput","","formControlName","state"],["matInput","","maxlength","10","formControlName","postalCode"],["postalCode",""],["matInput","","name","phone","formControlName","phone"],[1,"col-lg-4","pt-4","pt-lg-0","ps-xl-5"],[1,"py-2","px-xl-2"],[1,"text-center","mb-4","pb-3","border-bottom",3,"hidden"],[1,"h6","mb-3","pb-1"],[1,"fw-normal"],[1,"text-center","mt-3","mb-3",2,"line-height","1.0em","font-size","12px","height","15px","font-weight","normal","color","red",3,"hidden"],[1,"text-center","mt-2"],[1,"btn","my-2","d-flex","flex-wrap",2,"font-weight","bold","font-size","20px","justify-content","center",3,"innerHTML","click"],["id","order-options",1,"accordion"],[1,"accordion-item"],[1,"accordion-header"],["href","#shipping-estimates","role","button","data-bs-toggle","collapse","aria-expanded","true","aria-controls","shipping-estimates",1,"accordion-button","collapsed"],["id","shipping-estimates","data-bs-parent","#order-options",1,"accordion-collapse","collapse"],[1,"accordion-body"],["novalidate","novalidate",1,"needs-validation"],[1,"mb-3"],[1,"h5","mb-3","pb-1"],["required","required",1,"form-select",3,"change"],["value",""],["value","United States"],["value","Canada"],["value","United Kingdom"],["value","Australia"],[1,"invalid-feedback"],["type","button",1,"btn","btn-primary","d-block","w-100",3,"click"],[1,"w-100","d-flex","justify-content-end","mt-2","mb-0"],["alt","ok","src","assets/secure.png",1,"rounded",2,"object-fit","contain"],["mat-button","","type","button",3,"click"],["matInput","","formControlName","address2"],[3,"value"]],template:function ShippingAddressComponent_Template(rf,ctx){1&rf&&(core._UZ(0,"router-outlet"),core.YNc(1,ShippingAddressComponent_ngx_spinner_1_Template,3,9,"ngx-spinner",0),core.YNc(2,ShippingAddressComponent_header_2_Template,2,4,"header",1),core.YNc(3,ShippingAddressComponent_section_3_Template,126,143,"section",2)),2&rf&&(core.xp6(1),core.Q6J("ngIf",ctx.isBrowser()),core.xp6(1),core.Q6J("ngIf",ctx.isBrowser()),core.xp6(1),core.Q6J("ngIf",ctx.isBrowser()&&null!=ctx.storeInfo().username))},directives:[router.lC,common.O5,ngx_spinner.Ro,fesm2015_forms._Y,fesm2015_forms.JL,fesm2015_forms.sg,card.a8,card.dk,card.n5,card.dn,form_field.KE,input.Nt,fesm2015_forms.Fj,fesm2015_forms.JJ,fesm2015_forms.u,form_field.UY,fesm2015_forms.on,form_field.bx,fesm2015_select.gD,fesm2015_select.$L,common.sg,fesm2015_forms.nD,fesm2015_forms.YN,fesm2015_forms.Kr,form_field.TO,fesm2015_button.lW,fesm2015_core.ey],styles:[".placeholder[_ngcontent-%COMP%]{color:#639}.not-empty-select.mat-selected[_ngcontent-%COMP%]{color:grey!important}.full-width[_ngcontent-%COMP%]{width:100%}.shipping-card[_ngcontent-%COMP%]{min-width:120px;margin:20px auto}.mat-radio-button[_ngcontent-%COMP%]{display:block;margin:5px 0}.row[_ngcontent-%COMP%]{display:flex;flex-direction:row}.col[_ngcontent-%COMP%]{flex:1;margin-right:20px}.col[_ngcontent-%COMP%]:last-child{margin-right:0}.centered[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.cover[_ngcontent-%COMP%]{color:#fff;position:relative;background-repeat:no-repeat;background-position-x:center;background-position-y:center;background-size:cover}"]});var fesm2015_radio=__webpack_require__(82613),icon=__webpack_require__(76627);const routes=[{path:"",component:ShippingAddressComponent}];class ShippingAddressModule{}ShippingAddressModule.\u0275fac=function ShippingAddressModule_Factory(t){return new(t||ShippingAddressModule)},ShippingAddressModule.\u0275mod=core.oAB({type:ShippingAddressModule,bootstrap:[ShippingAddressComponent]}),ShippingAddressModule.\u0275inj=core.cJS({providers:[globals.O],imports:[[common.ez,input.c,fesm2015_button.ot,fesm2015_select.LD,fesm2015_radio.Fk,card.QW,icon.Ps,ngx_spinner.ef,input.c,fesm2015_forms.UX,fesm2015_radio.Fk,router.Bz.forChild(routes)]]})}};