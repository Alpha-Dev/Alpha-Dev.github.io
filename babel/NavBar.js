class NavBar{
  constructor(element){
    this.element = element;
    this.navbar_state = 0;
  }
  getNavBarState(){
    return this.navbar_state;
  }
  OpenNavBar(){
    this.navbar_state = 1;
    $(this.element).animate({
      height:"150px"
    },100)
  }
  CloseNavBar(){
    this.navbar_state = 0;
    $(this.element).animate({
      height:"0px"
    },100)
  }
}
