import { ChangeDetectorRef, Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from 'src/app/models/product.model';

import { Router, ActivatedRoute } from '@angular/router';
import { Country } from '../models/shipping-country.model';
import { Title, Meta } from '@angular/platform-browser';  
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { LoadService, Dict } from '../services/load.service';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ModelViewerComponent } from '../model-viewer/model-viewer.component';
import { Globals } from '../globals';
import { ProductInCart } from '../models/product-in-cart.model';
import { LoginComponent } from '../login/login.component';
import { AppComponent } from '../app.component';
import { NgxSpinnerService } from "ngx-spinner";
import { RoutingService } from '../services/routing.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, AfterViewInit {

  storeInfo(){return Globals.storeInfo}
  availableCurrencies(){return Globals.availableCurrencies}
  selectedCurrency(){return Globals.selectedCurrency}
  templates(){return Globals.availableTemplates}
  availableTemplates(){return Globals.availableTemplates}
  selectedTemplate(){return Globals.selectedTemplate}
  selectedProduct(){return this.productToBuy.product}


  productToBuy = new ProductInCart()
  
  quantityNumbers: Array<number> = []

  
  constructor(    
    @Inject(PLATFORM_ID) private platformID: Object,
    private cdr: ChangeDetectorRef,
    private db: AngularFirestore,
    private router: ActivatedRoute,
    private titleService: Title, 
    private metaService: Meta,
    private loadService: LoadService,
    private modalService: NgbModal,
    private route: Router,
    private rootComponent: AppComponent,
    private _router: Router,
    private spinner: NgxSpinnerService,
    private routingService: RoutingService,
  ) { 
    this.productToBuy.product = undefined
    Globals.selectedTemplate = undefined
    Globals.selectedCurrency = undefined
    Globals.storeInfo.uid = undefined
  }

  getLinkImg(name: string){
    return Globals.socials.filter(obj => { 
      return obj.name == name
    })[0].img
  }

  openSocial(l: string){
    const link = document.createElement('a');
    link.target = '_blank';

    let url: string = '';
    if (!/^http[s]?:\/\//.test(l)) {
      url += 'http://';
    }

    url += l

    link.href = url
    
    link.setAttribute('visibility', 'hidden')
    link.click()
    link.remove()
  }

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

  routeToAbout(){
    this.rootComponent.routeToAbout()
  }

  ngOnInit(): void {
    const productID = this.getProductID()

    this.loadService.myCallback = () => this.checkLoad()

    this.loadService.getPost(productID, () => {
      this.checkLoad()
    }, undefined, undefined, undefined, this.productToBuy)


    for (let i = 0; i < 9; i++) {
        this.quantityNumbers.push(i + 1)
    }
    // this.route.navigate([], {
    //   queryParams: {
    //     id: productID
    //   },
    //   queryParamsHandling: 'merge',
    // });
  }

  ngAfterViewInit(): void{
    
  }


  open() {
    if (isPlatformBrowser(this.platformID) && this.has3D()){
      
      const modalRef = this.modalService.open(ModelViewerComponent, {size : "lg"});
      modalRef.componentInstance.data = {
        "template": this.selectedTemplate(),
        "product": this.selectedProduct()
      };
    }
  }

  has3D(){
    return this.selectedTemplate()?.has3D ?? false
  }

  nextweek(){
    var d = new Date();
    return this.format(new Date(d.getFullYear(), d.getMonth(), d.getDate() + 10))
  }

  format(d: Date) {
    return Globals.days[d.getDay()] + ', ' + Globals.months[d.getMonth()] + " " + d.getDate()
  }

  formattedInfo(){
    return this.selectedTemplate()?.moreInfo.replace(/\\n/g, "<br>") ?? "";
  }

  sizes(popFirst: boolean){
    if (popFirst){
      return this.selectedTemplate()?.sizes.slice(1) ?? []
    }
    return this.selectedTemplate()?.sizes ?? []
  }

  isBrowser(){
    return isPlatformBrowser(this.platformID)
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


  isSpinning = false

    showSpinner(){
      if (!this.isSpinning){
        this.isSpinning = true
        if (isPlatformBrowser(this.platformID)){
          this.spinner.show()
        };
  
        setTimeout(() => {
            this.spinner.hide()
        }, 1000);
      }
    }
  
    hideSpinner(){
      if (this.isSpinning){
        this.isSpinning = false
        // this.spinner.hide()
      }
    }

  
    getStoreName(){
      var request = ""
      if (isPlatformServer(this.platformID)){
        request = Globals.URL
        console.log(request)
      }
      else{
        request = globalThis.location.host
      }  
      if (request != 'localhost:4200' && request != 'shopmythred.com'){
        return {
          isCustom: true,
          link: request
        }
      }
      const routeParams = this.router.snapshot.paramMap;
      const storeID = routeParams.get('user') as string;
      return {
        isCustom: false,
        link: storeID
      }
    }

  checkLoad(){

    if (this.productToBuy.product) {
        if (!(this.productToBuy.product.isAvailable)){
          this.addTags(this.productToBuy.product.name, this.productToBuy.product.url.toString(), "* PRODUCT UNAVAILABLE *", "https://shopmythred.com")
          if (isPlatformBrowser(this.platformID)){
            this.routingService.routeToStore404(this.getStoreName().link, this.getStoreName().isCustom)
          }
          return
        }
        this.addTags(this.productToBuy.product.name, this.productToBuy.product.url.toString(), this.formatPrice(this.productToBuy.product.price / 100) + ". " + this.productToBuy.product.description, "https://shopmythred.com")
        if (isPlatformBrowser(this.platformID)){
          if (Globals.storeInfo.uid == undefined){
            const storeInfo = this.getStoreName()
            this.loadService.getUser(storeInfo.link, undefined, storeInfo.isCustom)
          }
          else{
            this.showSpinner()
            this.rootComponent.setFavIcon(Globals.storeInfo.profileLink!.toString())

            if (Globals.storeInfo.uid != this.productToBuy.product.uid){
              this.routingService.routeToStore404(this.getStoreName().link, this.getStoreName().isCustom)
            }
            else if (Globals.userInfo == undefined && isPlatformBrowser(this.platformID)){
              this.loadService.getCustomer()
            }
            else if (Globals.selectedTemplate == undefined){
              this.rootComponent.setOptions()
              this.loadService.getTemplate(this.productToBuy.product.productType ?? "")
            }
            else if (Globals.selectedCurrency == undefined){
              this.loadService.getCountries()
            }
            else{
  
              if (isPlatformBrowser(this.platformID)){
                this.loadService.logView()
              }
  
              this.cdr.detectChanges()
            }
          }
        }
      }
  }


  selectSize(size: string, $event: { target: any; srcElement: any; }){


    this.productToBuy.size = size
    let clickedElement = $event.target || $event.srcElement;

    if( clickedElement.nodeName === "BUTTON" ) {

      let isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector(".active");
      // if a Button already has Class: .active
      if( isCertainButtonAlreadyActive ) {
        isCertainButtonAlreadyActive.classList.remove("active");
      }
      clickedElement.className += " active";
    }
  }
  selectQuantity(qty?: number){

    this.productToBuy.quantity = Number(qty)
  }

  quantity(){

    return this.productToBuy.quantity ?? "1"
  }

  closeBtn(){
    console.log("Getting Cart")
    this.rootComponent.cart = undefined
    this.rootComponent.getCart()
    this.addToCart()

  }

  async addToCart(){
        
    if (this.productToBuy.product! == undefined)return;


    this.productToBuy.product = JSON.parse(JSON.stringify(this.productToBuy.product))

    let product = JSON.parse(JSON.stringify(this.productToBuy)) as ProductInCart

    let mappedData = {
        "UID" : product.product?.uid,
        "Size" : product.size,
        "Qty" : product.quantity,
        "Timestamp" : new Date(),
        "Post_ID" : product.product?.productID
    }
    
    if (await this.loadService.authenticated()){
      await this.loadService.addToCart(mappedData)
    }
    else{
      let ngbModalOptions: NgbModalOptions = {
        size: "lg"
      };

      const modalRef = this.modalService.open(LoginComponent, ngbModalOptions);
      
      let sub = modalRef.dismissed.subscribe((result: string) => {
        if (result == "success"){
          this.closeBtn()
        }
        sub.unsubscribe()
      })

      modalRef.componentInstance.authMode = 1
    }









    // let data = {
    //     "Cart_List" : FieldValue.arrayUnion([mappedData])
    // }
    
    // // Analytics.logEvent("added_to_cart", parameters: [
    // //     "name": "Add to Cart",
    // //     "full_text": "User added to cart"
    // // ])
    
    // Firestore.firestore().collection("Users/\(uid)/Cart_Info").document("Cart_List").setData(data, merge: true, completion: { error in
    //     if let err = error{
    //         completed()
    //         print(err.localizedDescription)
    //     }
    //     else{
    //         completed()
    //     }
    // })
}

  addTags(title: string, imgUrl: string, description: string, url: string){
    this.metaService.updateTag({property: 'og:title', content: title});
    this.metaService.updateTag({property: 'og:image', content: imgUrl});
    this.metaService.updateTag({property: 'og:url', content: url})
    this.metaService.updateTag({property: 'og:description', content: description})
    var newTitle = title
    if (Globals.storeInfo.fullName){
      newTitle += " - " + Globals.storeInfo?.fullName ?? ""
    }
    this.titleService.setTitle(newTitle)
    this.metaService.updateTag({property: 'description', content: description})
  }


  formatPrice(price: number){
    var priceAsString = new String((price * (this.selectedCurrency()?.rate ?? 1)).toFixed(2))
    // var priceAsString = new String(Number((price * (this.selectedCurrency()?.rate ?? 1)).toFixed(2)).toLocaleString('en'))

    let index = priceAsString.indexOf(".")

    switch (index){
    case priceAsString.length - 1:
        priceAsString += "00"
        break
    case priceAsString.length - 2:
        priceAsString += "0"
        break
    default:

        break
    }
    return this.numberWithCommas(this.getCurrencyForCountry((this.selectedCurrency()?.name ?? "US") != "US", this.selectedCurrency()) + priceAsString)
  }

  numberWithCommas(x: string) {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

getURL(uid: string, productID: string){
  return 'https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Users%2F' + uid + '%2FProducts%2F' + productID + '%2Flink_' + productID + '.png?alt=media'
}


getCurrencyForCountry(shouldShowName: boolean, country?: Country){

  var returnItem = country?.currency_symbol ?? "$"
  if (shouldShowName) returnItem = (country?.name ?? "US") + " " + returnItem

  return returnItem
}

  getProductID(){
    const routeParams = this.router.snapshot.paramMap;
    const productID = routeParams.get('product') as string;

  // Find the product that correspond with the id provided in route.
    return productID
  }

}
