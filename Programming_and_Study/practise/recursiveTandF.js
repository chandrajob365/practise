var testArr=[];
function mapper(arr,func){
  if(arr.length>0){
    if(func(arr[0])){
      testArr.push('T');
    }else{
      testArr.push('F');
    }
    mapper(arr.slice(1,arr.length),func);
  }
}

function func(n){
  if(n%2==0){
    return true;
  }else{
    return false;
  }
}

mapper([3],func);
console.log(testArr);
