export class AppearOnScroll{
  constructor(offset){
    this.offset = offset;
  }
  getAppearOnScrollElements(){
    this.x = $(".appear-on-scroll").toArray();
    return this.x;
  }
  AppearanceCheck(){
    this.x.forEach(element=>{
      if($(document).scrollTop() >= element.offsetTop+this.offset){
        element.classList.remove("appear-on-scroll");
      }
    });
  }
}
