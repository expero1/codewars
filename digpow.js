function digPow(n, p){
  // ...
  nArray = n.toString().split("")
  let magicNumber=0;
  for (let i = 0; i<nArray.length;i++){
    magicNumber = magicNumber + Math.pow(nArray[i],p++);
    
  }
  let div = magicNumber/n;
  if ((div - Math.floor(div) === 0)) return div;
      return -1
}
