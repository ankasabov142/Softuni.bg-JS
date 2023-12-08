function rotate(arr, n) {
    let steps=n;
  let resArr = [];

  for (let el of arr) {
    resArr.push(el);
  }
  for (let i = 0; i < steps; i++) {
    if(i>=arr.length){
        steps=i-arr.length;
        i=0;
    }
    resArr.shift();
    resArr.push(arr[i]);
  }
  let buff=''
  for(let el of resArr){
    buff+=` ${el.toString()}`
  }
  buff.trim()
  console.log(buff)
}
rotate([51, 47, 32, 61, 21], 2);
rotate([32, 21, 61, 1], 4);
rotate([2, 4, 15, 31], 5);
