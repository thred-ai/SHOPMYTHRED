
export class StoreTheme {
  name: string
  back_code: string
  text_code: string
  bg_color: Array<number>
  btn_color: Array<number> 
  constructor(
    name: string,
    back_code: string,
    text_code: string,
    bg_color: Array<number>,
    btn_color: Array<number>,
    ) {

    this.name = name ?? ""
    this.back_code = back_code ?? "";
    this.text_code = text_code ?? "";
    this.bg_color = bg_color ?? [];
    this.btn_color = btn_color ?? [];

  }
}