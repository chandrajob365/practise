var a = [5,6,11];
var b = [3,6,10];
function comapreTriplet(a0_temp,b0_temp){
  var pointA =0 ;
  var pointB = 0 ;
  for(var i =0 ; i < a0_temp.length ; i++){
        if(a0_temp[i]<b0_temp[i]){
            pointB++;
        }else if(a0_temp[i]>b0_temp[i]){
            pointA++;
        }
    }
    console.log(pointA , pointB);
}

comapreTriplet(a,b);
