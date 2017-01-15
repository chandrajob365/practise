function convertToNestedArray(arr){
  var noOfPairs = Math.ceil(arr.length/2);
  var nestedArr=[];
  for(var i =0 , j=0; i < arr.length , j<noOfPairs ; j++ ){
    nestedArr[j]=[];
    for(var k =0 ; k<2 ; k++){
      console.log('arr[',i,'] = ',arr[i] , 'nestedArr[',j,'] = ',nestedArr[j]);
      if(arr[i]!==undefined){
        nestedArr[j].push(arr[i]);
        i++;
      }
    }
  }
return nestedArr;
}

console.log(convertToNestedArray([2,4,5,7,8,9,11]));
