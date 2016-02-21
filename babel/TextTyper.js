export class TextTyper{
  constructor(element){
    this.element = document.querySelector(element);
    this.transitioning = false;
  }
  getTransition(){
    return this.transitioning;
  }
  setTransition(x){
    this.transitioning = x;
  }
  writeWord(word){
    let length = word.length;
    let element = this.element;
    let thing = this;
    let a = 0;
    if(!this.getTransition())
      Looper();
    function Looper(){
      thing.setTransition(true);
      setTimeout(()=>{
      element.innerHTML+=word.charAt(a);
      if(a<=length)
        Looper();
      else
        thing.setTransition(false);
      a++;
    },200);
    }
  }
  clearWord(callback){
    let length = this.element.innerHTML.length;
    let element = this.element;
    let a = length;
    let thing = this;
    if(!thing.getTransition())
      Looper();
    function Looper(){
      thing.setTransition(true);
      setTimeout(()=>{
      element.innerHTML = element.innerHTML.substring(0,a);
      if(a>=0)
        Looper();
      else{
        thing.setTransition(false);
        callback();
      }
      a--;
      },100);
    }
  }
}
