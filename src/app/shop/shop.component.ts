import { ChangeDetectorRef, Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from 'src/app/models/product.model';

import { ActivatedRoute, Router } from '@angular/router';
import { Template } from '../models/template.model';
import { Country } from '../models/shipping-country.model';
import { Title, Meta } from '@angular/platform-browser';  
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { LoadService, Dict } from '../services/load.service';
import { AppComponent } from '../app.component';
import { Globals } from '../globals';
import { NgxSpinnerService } from "ngx-spinner";
import { RoutingService } from '../services/routing.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit, OnDestroy {

  isImgLoaded = false;


  storeInfo(){return Globals.storeInfo}

  availableCurrencies(){return Globals.availableCurrencies}

  selectedCurrency(){return Globals.selectedCurrency}

  templates(){return Globals.availableTemplates}

  availableTemplates(){return Globals.availableTemplates}


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

    
  
  constructor(
    @Inject(PLATFORM_ID) private platformID: Object,
    private cdr: ChangeDetectorRef,
    private router: ActivatedRoute,
    private titleService: Title, 
    private metaService: Meta,
    private loadService: LoadService,
    private rootComponent: AppComponent,
    private _router: Router,
    private spinner: NgxSpinnerService,
    private routingService: RoutingService,
  ) {
  }


  ngOnDestroy(): void {
    this.loadService.shopComponent = undefined
  }
  
  ngOnInit(): void {
    //Globals.siteTitle = "jojo"
    
    this.loadService.shopComponent = this

    this.init();
  }


  isBrowser(){
    return isPlatformBrowser(this.platformID)
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
        }, 1500);
      }
    }
  
    hideSpinner(){
      if (this.isSpinning){
        this.isSpinning = false
        // this.spinner.hide()
      }
    }

    autoCoupon(product: Product){
      var autoCoupon = this.storeInfo().coupons?.filter(coupon => { return coupon.products.includes(product.productID) && coupon.auto}).sort(function(a, b){
        if(a.amt < b.amt) { return 1; }
        if(a.amt > b.amt) { return -1; }
        return 0;
      })[0]
      return autoCoupon
    }
  
    mainPrice(product: Product){
      
      let coupon = this.autoCoupon(product)
      if (coupon){
        return ((product.price ?? 0) / 100) - (((product.price ?? 0) / 100) * coupon.amt)
      }
      return (product.price ?? 0) / 100
    }

    routeToProduct(productID: string){
      this.rootComponent.routeToProduct(productID)
    }

    routeToAbout(){
      this.rootComponent.routeToAbout()
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

    storeProducts?: Array<Product> = undefined

    callback(){
      if (Globals.storeInfo.username){
        this.rootComponent.setFavIcon(Globals.storeInfo.profileLink!.toString())
        this.addTags(Globals.storeInfo.fullName ?? "Thred", (Globals.storeInfo.profileLink ?? new URL("https://shopmythred.com")).toString(), Globals.storeInfo.bio ?? "Check out my Thred Store!", "shopmythred.com/" + Globals.storeInfo.username)
        if (isPlatformBrowser(this.platformID)){
          this.showSpinner()
          this.loadService.logView()
          this.rootComponent.setOptions()
        }
        if (Globals.userInfo == undefined && isPlatformBrowser(this.platformID)){
          this.loadService.getCustomer()
        }
        else if (Globals.availableCurrencies.length == 0 && isPlatformBrowser(this.platformID)){
          this.loadService.getCountries()
        }
        else if (Globals.templates.length == 0 && isPlatformBrowser(this.platformID)){
          this.loadService.getTemplates()
        }
        else if (this.storeProducts == undefined){
          this.loadService.getPosts(products => {
            this.storeProducts = products
          })
        }
        else{
          this.rootComponent.cdr.detectChanges()
        }
      }
      else{
        this.routingService.routeTo404(this.getStoreName().isCustom)
      }
    }

  selectedIndicator(){
    
    let co = Globals.storeInfo?.loading?.color
    let bco = Globals.storeInfo?.loading?.bg_color
    let name = Globals.storeInfo?.loading?.name

    let color = "rgba(" + co[0] + "," + co[1] + "," + co[2] + "," + co[3] + ")"

    let bg_color = "rgba(" + bco[0] + "," + bco[1] + "," + bco[2] + "," + bco[3] + ")"

    var indicator: Dict<string> = {
      "name": name,
      "color": color,
      "bg_color": bg_color
    }
    return indicator
  }
  
  init() {
    const storeInfo = this.getStoreName()
    this.downloadAllStoreInfo(storeInfo.link, storeInfo.isCustom)
  }

  downloadAllStoreInfo(storeName: string, isCustom = false){
    this.loadService.myCallback = () => this.callback()
    this.loadService.getUser(storeName, undefined, isCustom)
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

  mode(){
      return this.rootComponent.mode
  }


  open(e: Event, item: Product){



    
  }


  addTags(title: string, imgUrl: string, description: string, url: string){
    this.metaService.updateTag({property: 'og:title', content: title  + " - " + "Products"});
    this.metaService.updateTag({property: 'og:image:width', content: '200'});
    this.metaService.updateTag({property: 'og:image:height', content: '200'});
    this.metaService.updateTag({property: 'og:image', content: imgUrl});
    this.metaService.updateTag({property: 'og:url', content: url})
    this.metaService.updateTag({property: 'og:description', content: description})
    this.titleService.setTitle(title)
    this.metaService.updateTag({property: 'description', content: description})

  }


  formatPrice(price: number){
    var priceAsString = new String((price * Globals.selectedCurrency!.rate).toFixed(2))
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
    return this.getCurrencyForCountry(Globals.selectedCurrency!, Globals.selectedCurrency!.name != "US") + priceAsString
}
  
getCurrencyForCountry(country: Country, shouldShowName: boolean){

  var returnItem = country.currency_symbol
  if (shouldShowName) returnItem = country.name + " " + returnItem

  return returnItem
}

  
  titleCase(str: string) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    // Directly return the joined string
    return splitStr.join(' '); 
 }

  

}
