import {
  Component,
  OnInit,
  Inject,
  ViewChild,
  OnDestroy,
  ElementRef,
  ChangeDetectorRef,
  SecurityContext,
  PLATFORM_ID,
} from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Order } from '../models/order.model';
import { Globals } from '../globals';
import { Country } from '../models/shipping-country.model';
import { Product } from '../models/product.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Row } from '../models/row.model';
import { AppComponent } from '../app.component';
import { Dict, LoadService } from '../services/load.service';
import { AdminViewComponent } from '../admin-view/admin-view.component';
import { Banner } from '../models/banner.model';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CropperComponent } from '../cropper/cropper.component';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Button } from '../models/button.model';
import { SummernoteOptions } from 'ngx-summernote/lib/summernote-options';

@Component({
  selector: 'app-layout-builder',
  templateUrl: './layout-builder.component.html',
  styleUrls: ['./layout-builder.component.css'],
})
export class LayoutBuilderComponent implements OnInit, OnDestroy {
  rootComponent?: AppComponent;
  admin?: AdminViewComponent;
  loaded = false;
  separatorKeysCodes: number[] = [ENTER, COMMA];

  editingBlock?: number;

  storeInfo = Globals.storeInfo;

  animations(){
    return Globals.rowAnimations
  }

  layoutForm = this.fb.group({
    rows: [[]],
    name: [null, [Validators.required]],
    url: [null, [Validators.required]]
  });

  rowForm = this.fb.group({
    title: [null],
    htmlText: [null],
    imgs: [[]],
    type: [null],
    grid: [null],
    buttons: [null],
    animations: [null]
  });

  config: SummernoteOptions = {
    placeholder: '',
    tabsize: 2,
    height: 200,
    toolbar: [
        ['misc', ['undo', 'redo']],
        [['bold', 'italic', 'underline', 'clear']],
        ['font', ['bold', 'italic', 'underline', 'strikethrough', 'clear']],
        ['fontsize', ['fontname', 'fontsize', 'color']],
        ['para', ['style', 'ul', 'ol', 'paragraph', 'height']],
        ['insert', ['table', 'hr']]
    ],
    fontNames: this.storeFonts()
  }

  title = 'LAUNCHING LAYOUT BUILDER';

  prods: Array<string> = [];


  storeFonts(){

    var fonts: Array<string> = []

    Globals.fonts.forEach(font => {
      fonts.push(font)
    })
    return fonts
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value != '0' && value != '1' && value != '2') {
      this.prods.push(value);
    } else {
      this.prods = [value];
      console.log('smart');
    }
    // Clear the input value
    event.chipInput!.clear();
    this.setRow();
    this.productCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.prods.indexOf(fruit);

    if (index >= 0) {
      this.prods.splice(index, 1);
    }
    this.setRow();
  }

  hoverIndex?: number = undefined;

  changeStyle($event: Event, index: number) {
    // this.color = $event.type == 'mouseover' ? 'yellow' : 'red';
    let p = document.getElementById('p-' + index);

    if ($event.type == 'mouseover') {
      this.hoverIndex = index;
      setTimeout(async () => {
        if (p) {
          p.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'start',
          });
        } else {
          console.log('blamk');
        }
      }, 0);
    } else {
      this.hoverIndex = undefined;
    }
  }

  productName(id: any) {
    if (id === '1') {
      return 'HOTTEST PRODUCTS';
    } else if (id === '0') {
      return 'NEWEST PRODUCTS';
    }
    else if (id === '2') {
      return 'ALL PRODUCTS';
    }
    return this.admin?.storeProducts?.find((product) => {
      return product.productID == id;
    })?.name;
  }

  allSelected() {
    return this.prods.find((j) => {
      return j == '1' || j == '0' || j == '2';
    });
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    if (event.option.value != '0' && event.option.value != '1' && event.option.value != '2') {
      this.prods.push(event.option.value);
    } else {
      this.prods = [event.option.value];
      console.log('smart');
    }

    this.productInput!.nativeElement.value = '';

    this.setRow();
    this.productCtrl.setValue(null);
  }

  private _filter(value: string): Product[] {
    const filterValue = ((value as string) ?? '').toLowerCase();

    return (this.admin!.storeProducts ?? []).filter((product) =>
      product.name?.toLowerCase().includes(filterValue)
    );
  }

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<LayoutBuilderComponent>,
    private spinner: NgxSpinnerService,
    private modalService: NgbModal,
    private loadService: LoadService,
    private cdr: ChangeDetectorRef,
    public sanitizer: DomSanitizer,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformID: Object
  ) {
    this.admin = data.admin;
    this.rootComponent = data.rootComponent;

    this.spinner.show('loader');

    for (let i = 1; i < 5; i++) {
      for (let j = 1; j < 5; j++) {
        this.grid.push({
          name: String(i) + 'x' + String(j),
          row: i,
          col: j,
        });
      }
    }
    this.filteredProducts = this.productCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) =>
        fruit ? this._filter(fruit) : (this.admin?.storeProducts ?? []).slice()
      )
    );
  }

  selectable = true;
  removable = true;
  productCtrl = new FormControl();
  filteredProducts: Observable<Product[]>;
  @ViewChild('productInput') productInput?: ElementRef<HTMLInputElement>;

  types = [
    {
      name: 'Button Block',
      code: 3,
    },
    {
      name: 'Text Block',
      code: 2,
    },
    {
      name: 'Image Block',
      code: 1,
    },
    {
      name: 'Product Block',
      code: 0,
    },
  ];

  btnTypes = [
    {
      name: 'Pill',
      code: 0,
    },
    {
      name: 'Rounded Corners',
      code: 1,
    },
    {
      name: 'Square Corners',
      code: 2,
    },
    {
      name: 'Circle',
      code: 3,
    },
  ];

  images = new Array<{
    isActive: boolean,
    img: string,
    link: string
  }>();

  buttons = new Array<Button>();

  grid: Array<{
    name: string;
    row: number;
    col: number;
  }> = [];

  matchingType(type: number) {
    return this.types.find((t) => {
      return t.code == type;
    });
  }

  ngOnDestroy(): void {
    this.interval = undefined;
    this.aRow.index = undefined;
    this.aRow.row = undefined;
    this.rowForm.reset();
    this.layoutForm.reset();
    this.admin = undefined;
    this.rootComponent = undefined;
  }

  selectedTheme: Dict<any> = {}


  ngOnInit(): void {
    console.log('a');
    this.selectedTheme = this.selectedThemeFn()


    this.layoutForm.controls.rows.setValue(
      Object.assign([], this.data.page?.rows ?? [])
    );

    this.layoutForm.controls.name.setValue(
      this.data.page?.title
    );

    this.layoutForm.controls.url.setValue(
      this.data.page?.url ? this.data.page?.url : null
    );

    setTimeout(() => {
      this.loaded = true;
      this.spinner.hide('loader');
    }, 500);
    if (this.storeInfo?.banners.length > 0) {
      this.setInterval();
    }
    this.cdr.detectChanges();
    this.onValueChanges();
  }

  closeDialog() {
    this.interval = undefined;
    this.dialogRef.close();
  }

  removeRows(index: number) {
    (this.layoutForm.controls.rows.value ?? [])?.splice(index, 1);
    this.cdr.detectChanges();
  }

  

  async edit(index: number) {
    if (this.editingBlock == index) {
      return;
    }
    this.editingBlock = index;

    this.cdr.detectChanges();

    let matchingRow = ((this.layoutForm.controls.rows.value as Array<Row>) ??
      [])[index];

    this.rowForm.controls.title.setValue(matchingRow.text ?? '');

    if (matchingRow.products ?? []) {
      this.prods = matchingRow.products ?? [];
    }

    if (matchingRow.buttons ?? []) {
      this.buttons = matchingRow.buttons ?? [];
    }

    if (matchingRow.smart_products != undefined) {
      this.prods = [String(matchingRow.smart_products)];
    }

    this.rowForm.controls.htmlText.setValue(matchingRow.html ?? '');

    this.rowForm.controls.type.setValue(matchingRow.type ?? 0);

    const promises = (matchingRow.imgs ?? []).map(async (image: string, index: number) => {
      let img = {
        isActive: true,
        img: image.toString(),
        link: (matchingRow.imgLinks ?? [])[index]?.toString() ?? ''
      };
      console.log(img)
      this.images.push(img);
    });
    await Promise.all(promises);

    let row = matchingRow.grid_row ?? 1;
    console.log(matchingRow)
    let count = Math.ceil((this.images ?? []).length / row);

    if (count == 0) {
      count = Math.ceil(
        (
          this.products(
            Number((this.prods as Array<string>)[0]),
            (this.prods as Array<string>) ?? []
          ) ?? []
        ).length / row
      );
    }
    if (count == 0) {
      count = Math.ceil((this.buttons ?? []).length / row);
    }

    if (count == 0) {
      count = 1;
    }

    let name = String(row) + 'x' + String(count);

    console.log(name);
    this.rowForm.controls.grid.setValue(name);

    if (matchingRow.type == 1) {
      let matchGrid = this.grid.find((g) => g.name == name);

      let diff =
        (matchGrid?.row ?? 1) * (matchGrid?.col ?? 1) - this.images.length;
      if (diff > 0) {
        for (let i = 0; i < diff; i++) {
          this.images.push({
            isActive: false,
            img: '',
            link: ''
          });
        }
      }
    }
    if (matchingRow.type == 3) {
      let matchGrid = this.grid.find((g) => g.name == name);

      let diff =
        (matchGrid?.row ?? 1) * (matchGrid?.col ?? 1) - this.buttons.length;
      if (diff > 0) {
        for (let i = 0; i < diff; i++) {
          this.buttons.push(new Button(this.selectedTheme.bg_color, '', this.selectedTheme.color, 0, ''));
        }
      }
    }
    setTimeout(async () => {
      let p = document.getElementById('p-' + index);
      if (p) {
        p.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'start',
        });
      } else {
        console.log('blamk');
      }
    }, 100);
  }

  height() {
    let matchGrid = this.grid.find(
      (g) => g.name == this.rowForm.controls.grid.value ?? '1x1'
    );

    return (
      (document.getElementById('label')?.offsetHeight ?? 0) /
      ((matchGrid?.row ?? 1) * (matchGrid?.col ?? 1))
    );
  }

  removeImg(img: { isActive: boolean; img: string, link: string }) {
    img.img = '';
    img.isActive = false;

    let index = this.images.indexOf(img);
    this.setRow();
    moveItemInArray(this.images, index, this.images.length - 1);
    
  }

  fileChangeEvent(
    event: any,
    image: {
      isActive: boolean;
      img: string;
      link: string
    }
  ): void {
    const modalRef = this.modalService.open(CropperComponent, { size: 'lg' });
    modalRef.componentInstance.imageChangedEvent = event;

    modalRef.componentInstance.width = 2560;
    modalRef.componentInstance.height = 2560;

    let sub = modalRef.dismissed.subscribe((img: string) => {
      sub.unsubscribe();
      if (img != '0') {
        image.img = img;
        image.isActive = true;
      }
      this.setRow();
    });
  }


  canCancel(isBtn = false) {
    if (isBtn){
      return (
        this.buttons.filter((btn) => {
          return (btn.text ?? '').trim() != ''
        }).length > 1
      ); 
    }
    return (
      this.images.filter((img) => {
        return img.isActive;
      }).length > 1
    );
  }

  onValueChanges(): void {
    this.rowForm.valueChanges.subscribe((val) => {
      this.setRow();
      this.cdr.detectChanges();
    });
  }

  removeBtn(btn: Button){
    let index = this.buttons.indexOf(btn);
    this.buttons[index] = new Button(this.selectedTheme.bg_color, '', this.selectedTheme.color, 0, '')
    this.setRow();
    moveItemInArray(this.images, index, this.images.length - 1);
  }

  matchingStyle(style: number){
    if (style == 0){
      return 'rounded-pill'
    }
    if (style == 1){
      return 'rounded'
    }
    if (style == 2){
      return 'rounded-0'
    }
    return 'rounded-circle'
  }

  changed(event?: any) {
    let type = this.rowForm.controls.type.value ?? 1;

    if (type == 1) {
      let matchGrid = this.grid.find((g) => g.name == event.value);

      let newSize = (matchGrid?.row ?? 1) * (matchGrid?.col ?? 1);

      console.log(newSize);

      if (newSize > this.images.length) {
        for (let i = 0; i < newSize; i++) {
          if (!this.images[i]) {
            this.images.push({
              isActive: false,
              img: '',
              link: ''
            });
          }
        }
      } else if (newSize < this.images.length) {
        this.images = this.images.slice(0, newSize);
      }
    }
    else if (type == 3){
      let matchGrid = this.grid.find((g) => g.name == event.value);

      let newSize = (matchGrid?.row ?? 1) * (matchGrid?.col ?? 1);


      if (newSize > this.buttons.length) {
        console.log('bigger');
        console.log(newSize);
        console.log(this.buttons.length)
        for (let i = 0; i < newSize; i++) {
          if (!this.buttons[i]) {
            this.buttons.push(new Button(this.selectedTheme.bg_color, '', this.selectedTheme.color, 0, ''));
          }
        }
      } else if (newSize < this.buttons.length) {
        console.log('smaller');
        console.log(newSize);
        console.log(this.buttons.length)
        this.buttons = this.buttons.slice(0, newSize);
      }
      console.log(this.buttons)
    }
    this.setRow()
  }

  finishedEditing(isDelete: boolean = false) {
    if (this.editingBlock == undefined) {
      return;
    }

    let rows = (this.layoutForm.controls.rows.value as Array<Row>) ?? [];

    switch (isDelete) {
      // @ts-ignore
      case false:
        let name = (this.rowForm.controls.title.value as string) ?? '';
        let type = (this.rowForm.controls.type.value as number) ?? 0;
        let html = (this.rowForm.controls.htmlText.value ?? '').replace(
          /style="/g,
          'style="overflow-wrap: break-word;'
        );

        let imgs = (this.images ?? [])
          .filter((i) => i.img != undefined && i.img.trim() != '')
          .map((i) => i.img);
        let btns = this.buttons ?? []
        let imgLinks = (this.images ?? [])
          .filter((i) => i.link != undefined && i.link.trim() != '')
          .map((i) => i.link);

        let products = this.prods ?? [];

        if (
          !(
            (type == 0 && products.length == 0) ||
            (type == 1 && imgs.length == 0) ||
            (type == 2 && html.trim() == '')
          )
        ) {
          let grid = (this.rowForm.controls.grid.value as string) ?? '1x1';

          let matchGrid = this.grid.find((g) => g.name == grid)?.row;

          let row = new Row(
            name,
            Object.assign([], products),
            undefined,
            type,
            Object.assign([], imgs),
            matchGrid,
            html,
            '',
            imgLinks,
            btns
          );

          console.log(products)

          if (
            products.find((i) => i == '0') ||
            products.find((i) => i == '1') || 
            products.find((i) => i == '2')
          ) {
            row.products = [];
            row.smart_products = parseInt(products[0]);
            console.log(row.smart_products)

          }

          if (this.editingBlock != undefined) {
            rows[this.editingBlock] = row;
          }

          console.log(row);

          this.layoutForm.controls.rows.setValue(rows);
          break;
        }
      default:
        if (rows[this.editingBlock] != undefined)
          this.removeRows(this.editingBlock);
    }

    this.rowForm.reset();
    this.prods = [];
    this.images = [];
    this.buttons = []
    this.editingBlock = undefined;
    this.aRow.row = undefined;
    this.aRow.index = undefined;
  }

  aRow: {
    row?: Row;
    index?: number;
  } = {
    row: undefined,
    index: undefined,
  };

  rowText(row: string) {

      let replaced = row
        .replace(/px/g, '15px')
        .replace(
          /style="/g,
          'style="word-wrap:break-word; word-break: break-all; text-overflow: ellipsis; margin-right: 5px; '
        );

        return replaced
  }


  

  setRow(gridVal?: string) {
    let name = (this.rowForm.controls.title.value as string) ?? '';
    let type = (this.rowForm.controls.type.value as number) ?? 0;
    let html = (this.rowForm.controls.htmlText.value ?? '').replace(
      /style="/g,
      'style="overflow-wrap: break-word;'
    );

    let imgs = (this.images ?? [])
      .filter((i) => i.img != undefined && i.img.trim() != '')
      .map((i) => i.img);

    let imgLinks = (this.images ?? [])
      .filter((i) => i.link != undefined && i.link.trim() != '')
      .map((i) => i.link);

    let btns = this.buttons ?? []



    let products = this.prods ?? [];


    let grid = gridVal ?? (this.rowForm.controls.grid.value as string) ?? '1x1';

    let matchGrid = this.grid.find((g) => g.name == grid)?.row;

    let row = new Row(
      name,
      Object.assign([], products),
      undefined,
      type,
      Object.assign([], imgs),
      matchGrid,
      html,
      '',
      imgLinks,
      btns
    );

    if (products.find((i) => i == '0') || products.find((i) => i == '1') || products.find((i) => i == '2')) {
      row.products = [];
      row.smart_products = parseInt(products[0]);
      console.log('smart2');
    }

    this.aRow.row = row;
    this.aRow.index = this.editingBlock;
  }

  addBlock() {
    let rows = (this.layoutForm.controls.rows.value as Array<Row>) ?? [];
    rows.push(new Row('', [], undefined, 0, [], 1));
    this.layoutForm.controls.rows.setValue(rows);

    this.edit(rows.length - 1);
  }

  selectedIndicator() {
    let co = Globals.storeInfo?.loading?.color;
    let bco = Globals.storeInfo?.loading?.bg_color;
    let name = Globals.storeInfo?.loading?.name;

    let color = 'rgba(' + co[0] + ',' + co[1] + ',' + co[2] + ',' + co[3] + ')';

    let bg_color =
      'rgba(' + bco[0] + ',' + bco[1] + ',' + bco[2] + ',' + bco[3] + ')';

    var indicator: Dict<string> = {
      name: name,
      color: color,
      bg_color: bg_color,
    };
    return indicator;
  }

  async close() {
    this.finishedEditing();

    let rowInfo = (this.layoutForm.controls.rows.value as Array<Row>) ?? [];
    let name = (this.layoutForm.controls.name.value as String) ?? 'Page';
    let url = (this.layoutForm.controls.url.value as String) ?? 'new-page';

    console.log(rowInfo)
    // this.spinner.show('loader');
    // this.title = 'SAVING LAYOUT';

    this.dialogRef.close({
      rows: rowInfo,
      url: url,
      name: name
    });

  
  }

  drop(event: any, isImage = false, isButton = false) {
    if (isImage) {
      moveItemInArray(this.images, event.previousIndex, event.currentIndex);
      return;
    }
    if (isButton){
      moveItemInArray(this.buttons, event.previousIndex, event.currentIndex);
      return

    }
    let arr = this.layoutForm.controls.rows.value;
    moveItemInArray(arr, event.previousIndex, event.currentIndex);
    this.layoutForm.controls.rows.setValue(arr);
  }

  formatPrice(price: number, short = false, order?: Order) {
    var priceAsString = new String(
      Number(
        (price * (Globals.selectedCurrency?.rate ?? 1)).toFixed(2)
      ).toLocaleString('en')
    );
    if (!short) {
      priceAsString = new String(
        Number((price * (Globals.selectedCurrency?.rate ?? 1)).toFixed(2))
      );
    }
    let index = priceAsString.indexOf('.');

    switch (index) {
      case priceAsString.length - 1:
        priceAsString += '00';
        break;
      case -1:
        priceAsString += '.00';
        break;
      case priceAsString.length - 2:
        priceAsString += '0';
        break;
      default:
        break;
    }
    return (
      this.getCurrencyForCountry(
        Globals.selectedCurrency?.name != 'US',
        Globals.selectedCurrency
      ) + priceAsString
    );
  }

  autoCoupon(product: Product) {
    var autoCoupon = this.storeInfo
      .coupons?.filter((coupon) => {
        return coupon.products.includes(product.productID) && coupon.auto;
      })
      .sort(function (a, b) {
        if (a.amt < b.amt) {
          return 1;
        }
        if (a.amt > b.amt) {
          return -1;
        }
        return 0;
      })[0];
    return autoCoupon;
  }

  mainPrice(product: Product) {
    let coupon = this.autoCoupon(product);
    if (coupon) {
      if (coupon.style == 0) {
        return (
          (product.price ?? 0) / 100 - ((product.price ?? 0) / 100) * coupon.amt
        );
      } else if (coupon.style == 1) {
        return (product.price ?? 0) / 100 - (coupon.amt ?? 0) * 100;
      }
    }
    return (product.price ?? 0) / 100;
  }

  getCurrencyForCountry(shouldShowName: boolean, country?: Country) {
    var returnItem = country?.currency_symbol ?? '$';
    if (shouldShowName) returnItem = (country?.name ?? '') + ' ' + returnItem;

    return returnItem;
  }

  fontSize(row: Row) {
    if (this.rootComponent?.isMobile() || (row.grid_row ?? 1) >= 2) {
      return 12;
    }
    return (0.5 / (row.grid_row ?? 1)) * 100;
  }

  titleFontSize(row: Row) {
    if (this.rootComponent?.isMobile() || (row.grid_row ?? 1) >= 2) {
      return 12;
    }
    return (0.3 / (row.grid_row ?? 1)) * 100;
  }

  // widthM(){
  //   return (1680 / window.innerWidth) * window.innerWidth

  // }

  // heightM(){
  //   return (939 / window.innerHeight) * window.innerHeight
  // }

  products(smartProducts?: number, products?: Array<string>) {
    if (smartProducts !== undefined) {
      if (smartProducts == 0) {
        return this.newArrivalProducts();
      } else if (smartProducts == 1) {
        return this.featuredProducts();
      }
    }
    var prod = Array<Product>();
    products?.forEach((p) => {
      let pro = this.admin?.storeProducts?.find((pr) => {
        return pr.productID == p;
      });
      if (pro) {
        prod.push(pro);
      }
    });
    return prod;
  }

  selectedThemeFn() {
    let co = Globals.storeInfo?.colorStyle?.btn_color;
    let bco = Globals.storeInfo?.colorStyle?.bg_color;
    let name = Globals.storeInfo?.colorStyle?.name;

    let color = 'rgba(' + co[0] + ',' + co[1] + ',' + co[2] + ',' + co[3] + ')';

    let bg_color =
      'rgba(' + bco[0] + ',' + bco[1] + ',' + bco[2] + ',' + bco[3] + ')';

    var theme: Dict<string> = {
      name: name,
      color: color,
      bg_color: bg_color,
    };
    return theme;
  }

  @ViewChild('carousel', { read: DragScrollComponent })
  ds?: DragScrollComponent;

  moveLeft() {
    this.ds!.moveLeft();
  }

  moveRight() {
    if (this.ds?.currIndex == (this.storeInfo.banners?.length ?? 0) - 1) {
      this.ds?.moveTo(0);
    } else {
      this.ds?.moveRight();
    }
  }

  didMove() {
    // this.selectedColor = this.selectedTemplate?.colors[this.ds?.currIndex ?? 0]
  }

  interval: any;

  setInterval() {
    if (this.interval) {
      return;
    }
    if (Globals.storeInfo.bannerStyle == 0) {
      this.interval = setInterval(() => {
        this.moveRight();
      }, 3000);
    } else {
      this.initScroll();
    }
  }

  initScroll() {
    this.interval = 0;
    let outer = document.querySelector('#outer') as HTMLElement;

    if (outer) {
      let content = outer.querySelector('#content') as HTMLElement;

      this.repeatContent(content, outer.offsetWidth);

      let el = outer.querySelector('#loop');
      if (el) {
        el.innerHTML = el.innerHTML + el.innerHTML;
      }
    }
  }

  repeatContent(el: HTMLElement, till: number) {
    let html = el.innerHTML;
    let counter = 0; // prevents infinite loop

    while (el.offsetWidth < till && counter < 100) {
      el.innerHTML += html;
      counter += 1;
    }
  }

  arrLength() {
    if (this.storeInfo.banners.length == 0) {
      return [];
    }

    return Array(12 / this.storeInfo.banners.length).fill(0);
  }

  

  newArrivalProducts() {
    return this.admin?.storeProducts
      ?.sort(function (a, b) {
        if (a.timestamp > b.timestamp) {
          return -1;
        }
        if (a.timestamp < b.timestamp) {
          return 1;
        }
        return 0;
      })
      .slice(0, 4);
  }

  featuredProducts() {
    return this.admin?.storeProducts
      ?.sort(function (a, b) {
        if (a.likes > b.likes) {
          return -1;
        }
        if (a.likes < b.likes) {
          return 1;
        }
        return 0;
      })
      .slice(0, 4);
  }

  allProducts() {
    return this.admin?.storeProducts
  }
}
