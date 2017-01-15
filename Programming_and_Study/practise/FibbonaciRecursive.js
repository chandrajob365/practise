function normalFibbonacci(n){
  var a = 0 , b=1;
  var i =2;
  var show =0;
  while(i<n){
    show = a + b;
    a = b;
    b = show;
    i++;
  }
  return show;
}

console.log(normalFibbonacci(7));

function recursiveFibbo(n){
  if(n==1){
    return [0,1];
  }else{
    var s = recursiveFibbo(n-1);
    s.push(s[s.length-2]+s[s.length-1]);
    return s;
  }
}

console.log(recursiveFibbo(7)[6]);
