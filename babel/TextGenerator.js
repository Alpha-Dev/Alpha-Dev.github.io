/*jshint esnext: true */
export class TextShadowGenerator {
    generate_shadowd(length,b_dif,color){
    	let strng = "";
    	let b = 1;
      if(length > 0){
      	for(let a = 1;a<=length;a+=2){
      		strng +=a+"px "+b+"px 0 " + color;
      		if(a+2 <length){
      			strng+=",";
      		}
      		b+=b_dif;
      	}
      }
      else{
        b = 5;
        for(let a = 0;a>=length;a-=2){
      		strng +=a+"px "+b+"px 0 " + color;
      		if(a >length){
      			strng+=",";
      		}
      		b+=b_dif;
      	}
      }
    	return strng;
    }
}
