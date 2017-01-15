function timer(n){
  var arr =[];
  for(var i = 0; i<n ;i++){
    arr.push(function(){
      console.log(i);
      return i;
    }(i));
  }
  return arr;
}

var fs = timer(4);
console.log(fs);
