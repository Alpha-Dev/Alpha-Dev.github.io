export class AppearOnScroll{
  constructor(offset){
    this.offset = offset;
  }
  getAppearOnScrollElements(){
    this.x = document.getElementsByClassName("appear-on-scroll");
    return this.x;
  }
  AppearanceCheck(){
    for(let a = 0;a<this.x.length;a++){
      let page_scroll = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
      if(page_scroll >= this.x[a].offsetTop+this.offset){
        this.x[a].classList.remove("appear-on-scroll");
      }
    }
  }
}
