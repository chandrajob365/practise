function concatNestedArray(arr){
  return arr.reduce(function(curr,next){
    return curr.concat(next);
  });
}

console.log(concatNestedArray([[2,3],[4,5],21,[7,8],[20]]));
