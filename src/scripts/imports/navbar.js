export class navbar{
  constructor(element){
    this.element = document.querySelector(element);
    console.log(this.element)
    this.open = 0;
    this.touchTarget = document.querySelector(".taptarget");
    this.dropDown = document.querySelector(".mobile");
    this.lastScroll = 0;
    let _this = this;
    this.touchTarget.addEventListener("click",function(e){
      _this.touchTargetOnClick();
    });
    document.addEventListener("scroll",function(e){
      _this.changeNavPlace(window.scrollY);
    },_this.isPassiveEventListenerSupported()?{passive:true}:false);

  }
  isPassiveEventListenerSupported() {
      var isSupported = false;
      try {
         var options = Object.defineProperty({}, 'passive', {
            get: function() {
               isSupported = true;
            }
         });

         window.addEventListener('', null, options);
      } catch(ex) {}

      return isSupported;
   }
  changeNavPlace(pos){
    if(pos > this.lastScroll)
      this.element.classList.add("nav-up")
    else
      this.element.classList.remove("nav-up")
    this.lastScroll = pos;
  }
  touchTargetOnClick(){
    if(this.open){
      this.toggleDropDown();
      this.open = 0;
      this.touchTarget.classList.remove("taptarget-open");
    }
    else{
      this.toggleDropDown();
      this.open = 1;
      this.touchTarget.classList.add("taptarget-open");
    }
  }
  toggleDropDown(){
    if(this.open){
      this.dropDown.classList.remove("mobile-open");
    }
    else{
      this.dropDown.classList.add("mobile-open");
    }
  }
}
