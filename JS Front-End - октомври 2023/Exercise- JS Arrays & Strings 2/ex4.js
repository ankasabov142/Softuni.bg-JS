function sort(arr) {
  let buffArr = [];
  let resultArr = [];
  for (let el of arr) {
    resultArr.push(el);
  }
  resultArr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (resultArr[0] != undefined) {
      let a = resultArr.shift();
      let b = resultArr.pop();
      buffArr.push(a);
      buffArr.push(b);
    } else {
      break;
    }
  }
  return buffArr
}
sort([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
//10
