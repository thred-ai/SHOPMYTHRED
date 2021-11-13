import { Component, OnInit, PLATFORM_ID, Inject, ChangeDetectorRef } from '@angular/core';
import * as AOS from 'aos';
import { LoadService } from '../services/load.service';
import { Globals } from '../globals';
import { Router, ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  signedIn: any = undefined
  affiliate?: string = undefined

  constructor(
    private loadService: LoadService,
    @Inject(PLATFORM_ID) private platformID: Object,
    private _router: Router,
    private router: ActivatedRoute,
    private rootComponent: AppComponent,
    private titleService: Title, 
    private metaService: Meta,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    
    if (isPlatformBrowser(this.platformID)){
      AOS.init();
      this.isSignedIn()
      this.router.queryParams
      .subscribe(params => {
        console.log(params); // { orderby: "price" }
        this.affiliate = params.affiliate as string ?? ""
        this.cdr.detectChanges()
        console.log(this.affiliate)
      })
    } 

    // if (!Globals.userInfo?.username){
      this.addTags("Thred - Get Started", "https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Resources%2Flanding_page.png?alt=media", "Start your store in 30 seconds, free.", "shopmythred.com")
    // }
  }

  isBrowser(){
    return isPlatformBrowser(this.platformID)
  }

  async isSignedIn(){
    if (await this.loadService.authenticated() && !((await this.loadService.isLoggedIn())?.isAnonymous)){
      this.signedIn = true
    }
    else{
      this.signedIn = false
    }
    this.cdr.detectChanges()
  }

  addTags(title: string, imgUrl: string, description: string, url: string){
    this.metaService.updateTag({property: 'og:title', content: title});
    this.metaService.updateTag({property: 'og:image', content: imgUrl});
    this.metaService.updateTag({property: 'og:url', content: url})
    this.metaService.updateTag({property: 'og:description', content: description})
    this.titleService.setTitle(title)
    this.metaService.updateTag({property: 'description', content: description})
  }

  async route(signedIn: boolean){
    if (signedIn){
      if (await this.loadService.authenticated() && !((await this.loadService.isLoggedIn())?.isAnonymous)){
        // this.routeToProfile()
        this.loadService.myCallback = () => {

          Globals.storeInfo = JSON.parse(JSON.stringify(Globals.userInfo))
          this.rootComponent.routeToProfile()
        }
        await this.loadService.getCustomer()
      }
      else{
        window.location.href = "shopmythred.com/thred/home"
      }
    }
    else{
      window.scrollTo(0, 0);
    }
  }


  myInnerHeight(){
    let height = window.screen.height
    let width = window.screen.width

    if (width < height){
      console.log(window)
      return width * 0.8
    }
    else{
      return height * 0.8
    }
  }

  routeToHome(){
    this.rootComponent.routeToHome()
  }

  getStarted(){
    if(this.signedIn){
      this.route(true)
    }
    else{
      window.scrollTo(0, 0);
    }
  }

}