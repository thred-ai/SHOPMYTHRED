import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Template } from '../models/template.model';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { Color } from '../models/color.model';
import { TemplateSide } from '../models/template-side.model';
import { CropperComponent } from '../cropper/cropper.component';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Globals } from '../globals';
import { Validators, FormBuilder } from '@angular/forms';
import { Dict, LoadService } from '../services/load.service';
import * as html2canvas from 'html2canvas'
import { NgxSpinnerService } from 'ngx-spinner';
import { CurrencyMaskInputMode } from "ngx-currency";
import { Product } from '../models/product.model';
import { PopupDialogComponent } from '../popup-dialog/popup-dialog.component';
import { Inventory } from '../models/inventory.model';


@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {

  mode = "create"

  product?: Product
  inventory: Array<Inventory> = []


  myInnerHeight(){
    let height = window.innerHeight
    let width = window.innerWidth

    if (width < height){
      return width * 0.98
    }
    else{
      if (this.step == 0){
        return height * 0.70
      }
      return height * 0.70
    }
  }

  customCurrencyMaskConfig = {
    align: "left",
    allowNegative: false,
    allowZero: true,
    decimal: ".",
    precision: 2,
    prefix: "$ ",
    suffix: "",
    thousands: ",",
    min: 0,
    inputMode: CurrencyMaskInputMode.NATURAL
  };

  

  templates?: Array<Template>
  selectedTemplate?: Template

  frontImg?: any
  linkImg?: any
  backImg?: any


  selectedColor?: Color
  selectedSide?: number = 0
  step?: number = 0

  openCrop = false

  storeInfo(){return Globals.storeInfo}

  availableCurrencies(){return Globals.availableCurrencies}

  selectedCurrency(){return Globals.selectedCurrency}



  selectedIndicator(){

    

    let co = Globals.storeInfo?.loading?.color
    let bco = Globals.storeInfo?.loading?.bg_color
    let name = Globals.storeInfo?.loading?.name
    
    let color = "rgba(" + co[0] + "," + co[1] + "," + co[2] + "," + co[3] + ")"

    let bg_color = "rgba(" + bco[0] + "," + bco[1] + "," + bco[2] + "," + bco[3] + ")"

    let indicator: Dict<string> = {
      "name": name,
      "color": color,
      "bg_color": bg_color
    }
    return indicator
  }



  async takeSnap(){

    if (this.frontImg == undefined && this.backImg == undefined){
      return
    }
    this.spinner.show("designSpinner")

    

    setTimeout(() => {
      this.selectedSide = 0
      if (this.frontImg == undefined){
        this.selectedSide = 1
      }
      this.cdr.detectChanges()
      let element = document.querySelector("#capture") as HTMLElement
  
      html2canvas.default(element).then(async (canvas) => {
        this.linkImg = canvas.toDataURL()
        if (this.inventory.find(inv => { return inv.code == this.selectedTemplate?.productCode})){

        }
        var amt = this.selectedTemplate!.minPrice / 100
        if (this.inventory.find(inv => { return inv.code == this.selectedTemplate?.productCode && inv.amount > 0})){
          amt = this.selectedTemplate!.bulkSuggestPrice / 100
        }
        if (this.backImg && this.frontImg){
          amt += this.selectedTemplate!.extraCost / 100
        }
        this.designForm.controls.price.setValue(amt)
        this.spinner.hide("designSpinner")
        this.step = 1
      })
    }, 500);


  }

  async createDesign(){

    let nameField = this.designForm.controls.name
    let priceField = this.designForm.controls.price
    let descField = this.designForm.controls.description

    var amt = this.selectedTemplate!.minPrice

    if (this.inventory.find(inv => { return inv.code == this.selectedTemplate?.productCode && inv.amount > 0})){
      amt = 0
    }

    if (this.backImg && this.frontImg){
      amt += this.selectedTemplate!.extraCost
    }

    if (nameField.invalid){

      return
    }
    else if (priceField.invalid || (priceField.value * 100) < amt){

      return
    }
    else if (descField.invalid){

      return
    }


    this.spinner.show("productSpinner")

    let name = nameField.value as string
    let price = (priceField.value as number) * 100
    let desc = descField.value as string ?? ""

    if (this.mode == "create"){
      var displaySide = "front"
      var sides = new Array<string>()
      var images: Array<Dict<any>> = [
        {
          img: this.linkImg,
          type: "link_"
        }
      ]
  
  
      if (this.frontImg){
        sides.push("Front")
        images.push({
          img: this.frontImg,
          type: ""
        })
      }
      else{
        displaySide = "back"
      }
  
      if (this.backImg){
        sides.push("Back")
        images.push({
          img: this.backImg,
          type: "BACK_"
        })
      }
  
      if (sides.length == 0){
        sides.push("Front")
        images = [
          {
            img: this.linkImg,
            type: "link_"
          },
          {
            img: this.frontImg,
            type: ""
          }
        ]
      }
  
  
      let mappedData = {
        name: name ?? "Post",
        price: price ?? 2000,
        description: desc ?? "",
        productType: this.selectedTemplate?.productCode ?? "ATC1000",
        displaySide: displaySide,
        templateColor: this.selectedColor?.code ?? "white",
        sides: sides,
        images: images
      }
  
      await this.loadService.createProduct(mappedData)
    }
    else{
      let mappedData = {
        name: name ?? "Post",
        price: price ?? 2000,
        description: desc ?? "",
        available: true,
        productID: this.product?.productID ?? ""
      }
      await this.loadService.updateProduct(mappedData)
    }    

    this.modalService.dismissAll()

    
    return this.spinner.hide("productSpinner")



  }
  

  selectedTheme(){
    
    let co = Globals.storeInfo?.colorStyle?.btn_color
    let bco = Globals.storeInfo?.colorStyle?.bg_color
    let name = Globals.storeInfo?.colorStyle?.name

    let color = "rgba(" + co[0] + "," + co[1] + "," + co[2] + "," + co[3] + ")"

    let bg_color = "rgba(" + bco[0] + "," + bco[1] + "," + bco[2] + "," + bco[3] + ")"

    var theme: Dict<string> = {
      "name": name,
      "color": color,
      "bg_color": bg_color
    }
    return theme
  }

  designForm = this.fb.group({
    name: [null, Validators.required],
    description: null,
    price: [null, [Validators.required]],
  });


  sanitizer?: DomSanitizer

  @ViewChild('carousel', {read: DragScrollComponent}) ds?: DragScrollComponent;
  @ViewChild('productTemplates', {read: DragScrollComponent}) dsp?: DragScrollComponent;

  shouldShowCanvas(){
    if (this.selectedSide == 0){
      if (this.frontImg == undefined){
        return true
      }
      return false
    }
    if (this.backImg == undefined){
      return true
    }
    return false
  }

  minimumPrice(){
    return (this.selectedTemplate?.minPrice ?? 0) / 100
  }

  selectedImage(){
    console.log(this.selectedSide)
    if (this.selectedSide == 0){
      return this.frontImg
    }
    return this.backImg
  }

  moveLeft() {
    if (this.ds?.currIndex != 0){
      this.ds?.moveLeft();
    }
  }

  moveRight() {
    if (this.ds?.currIndex != (this.selectedTemplate?.colors.length ?? 0) - 1){
      this.ds?.moveRight();
    }
  }

  didMove() {
    this.selectedColor = this.selectedTemplate?.colors[this.ds?.currIndex ?? 0]
  }


  getTypeImages(template: Template) {

    var len = template.colors.filter(obj => {
      return obj.code == "black"
    })
    var img: any
    if (len.length == 0){
      img = template.colors.filter(obj => {
        return obj.code == "white"
      })[0].img
    }
    else{
      img = len[0].img
    }
    return this.sanitizer!.bypassSecurityTrustResourceUrl("data:image/jpeg;base64," + img)
  }

  sideName(){
    var side = this.selectedSide
    if (side == undefined){
      side = 0
    }
    return ("Click To Add " + this.selectedTemplate?.supportedSides[side].name + " design").toUpperCase()
  }

  cancel(){
    if (this.frontImg == undefined && this.backImg == undefined || this.mode == 'edit'){
      this.activeModal.dismiss()
      return
    }
    this.openPopup()
  }

  openPopup() {
    
    if (this.linkImg == undefined){
      let element = document.querySelector("#capture") as HTMLElement
      html2canvas.default(element).then(async (canvas) => {
        const modalRef = this.modalService.open(PopupDialogComponent, {size : "sm", centered: true});

        let img = canvas.toDataURL()
        modalRef.componentInstance.yesBtn = "Yes"
        modalRef.componentInstance.noBtn = "No"
        modalRef.componentInstance.message = "You will lose your product."
        modalRef.componentInstance.title = "ARE YOU SURE?"
        modalRef.componentInstance.img = img

        let sub = modalRef.dismissed.subscribe((resp: any) => {
          sub.unsubscribe()
          if (resp.Success){
        
            this.activeModal.dismiss()
          }
        })
      })
    }
    else{
      const modalRef = this.modalService.open(PopupDialogComponent, {size : "sm", centered: true});
      modalRef.componentInstance.yesBtn = "Yes"
      modalRef.componentInstance.noBtn = "No"
      modalRef.componentInstance.message = "You will lose your product."
      modalRef.componentInstance.title = "ARE YOU SURE?"
      modalRef.componentInstance.img = this.linkImg

      let sub = modalRef.dismissed.subscribe((resp: any) => {
        sub.unsubscribe()
        if (resp.Success){
      
          this.activeModal.dismiss()
        }
      })
    }
  }

  fileChangeEvent(event: any, type = this.selectedSide ?? 0): void {


    this.openCrop = true

    const modalRef = this.modalService.open(CropperComponent, {size : "md"});
    
    modalRef.componentInstance.imageChangedEvent = event



    var width = 1125
    var height = 1742

    if (this.selectedTemplate?.supportedSides[type].useReverseAspect){
      width = 1742
      height = 1125
    }

    modalRef.componentInstance.ratio = this.selectedTemplate?.supportedSides[type].reversedAspectRatio()

    modalRef.componentInstance.width = width
    modalRef.componentInstance.height = height

    let sub = modalRef.dismissed.subscribe((img: string) => {
      sub.unsubscribe()
      this.openCrop = false
      console.log(img)
      if (img != '0'){
        event.srcElement.value = ""
        event.target.value = ""
        if (type == 0){
          this.frontImg = img
        }
        else{
          this.backImg = img
        }
      }
      this.cdr.detectChanges()
    })
  }

  getColorSide(side?: number, color?: Color) {

    if (side == undefined){
      side = this.selectedSide
    }
    if (color == undefined){
      color = this.selectedColor
    }

    var img = color!.img

    if (side == 1){
      img = color!.imgBack
    }
 
    return this.sanitizer!.bypassSecurityTrustResourceUrl("data:image/jpeg;base64," + img)
  }


  getProductImages(type: string) {

    if (type == "prev"){
      if (this.ds?.currIndex == 0){
        return ''
      }
      return this.sanitizer!.bypassSecurityTrustResourceUrl("data:image/jpeg;base64," + this.selectedTemplate?.colors[(this.ds?.currIndex ?? 1) - 1].img)
    }
    if (this.ds?.currIndex == (this.selectedTemplate?.colors.length ?? 1) - 1){
      return ''
    }
    return this.sanitizer!.bypassSecurityTrustResourceUrl("data:image/jpeg;base64," + this.selectedTemplate?.colors[(this.ds?.currIndex ?? 1) + 1].img)
  }

  getProductColor(type: string){
    if (type == "prev"){
      if (this.ds?.currIndex == 0){
        return ''
      }
      return this.getColor(this.selectedTemplate?.colors[(this.ds?.currIndex ?? 1) - 1]!)
    }

    if (this.ds?.currIndex == (this.selectedTemplate?.colors.length ?? 1) - 1){
      return ''
    }
    return this.getColor(this.selectedTemplate?.colors[(this.ds?.currIndex ?? 1) + 1]!)
  }

  nextStep(){
    this.takeSnap()
    
  }

  moveColors(index: number) {
    this.ds?.moveTo(index);
  }

  moveTo(index: number) {
    this.dsp?.moveTo(index);
  }

  selectSide(side: number){
    this.selectedSide = side
  }

  selectTemplate(template: Template){

    this.selectedTemplate = template
    this.selectedColor = template.colors[0]
    this.selectedSide = 0

    let index = this.templates?.indexOf(template) ?? 0
    this.moveTo(index)
    this.moveColors(0)

  }

  getColor(color: Color){
    let r = color.rgb[0] * 255
    let g = color.rgb[1] * 255
    let b = color.rgb[2] * 255


    return "rgb(" + r + "," + g + "," + b + ")" 
  }


  templateNum(){
    if (this.selectedTemplate){
      return this.templates?.indexOf(this.selectedTemplate)
    }
    return 0
  }



  constructor(
    sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef,
    private modalService: NgbModal,
    private activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private loadService: LoadService,

  ) { 
    this.sanitizer = sanitizer
  }

  ngOnInit(): void {
    

    this.loadTemplate()


  }

  calculateHeight(){
    return this.calculateWidth() * this.selectedTemplate!.supportedSides[this.selectedSide ?? 0].regularAspectRatio()
  }

  calculateWidth(){
    let frame = document.getElementById("frame")?.getBoundingClientRect()
    let width = (frame?.width ?? 0) + 10
    return width * (this.selectedTemplate!.supportedSides[this.selectedSide ?? 0].widthMultiplier ?? 0)
  }

  calculateCenterY(){
    let frame = document.getElementById("frame")?.getBoundingClientRect()
    let width = (frame?.width ?? 0)
    let back = document.getElementById("back")?.getBoundingClientRect()
    let height = (back?.height ?? 0)

    return ((height / 2) + (this.selectedTemplate!.supportedSides[this.selectedSide ?? 0].centerYConst * (width / 375))) - (this.calculateHeight()) / 2
  }

  calculateColor(color: Color){
    if (color.code == "white"){
      return {
        text_color: "secondary",
        border_color: "#808080"
      }
    }
    return {
      text_color: "light",
      border_color: "#ffffff"
    }
  }

  loadTemplate() {
    
    this.selectedTemplate = this.templates![0]
    this.selectedColor = this.selectedTemplate!.colors[0]
    this.cdr.detectChanges()
    // var unsafeImageUrl = this.sanitizer.

    // this.base64Data = this.sanitizer.bypassSecurityTrustUrl(unsafeImageUrl);
  }

}

