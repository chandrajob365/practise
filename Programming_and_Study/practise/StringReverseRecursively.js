function stringRev(str){
  if(str.length>0){
    console.log('str[str.length-1] = ',str[str.length-1] );
    console.log('str.substr(0,str.length-1) = ', str.substr(0,str.length-1));
    return str[str.length-1] + stringRev(str.substr(0,str.length-1));
  }else{
    return '';
  }
}

console.log(stringRev('apple'));
