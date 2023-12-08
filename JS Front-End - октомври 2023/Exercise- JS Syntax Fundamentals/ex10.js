function same(a) {
  let buffString = a.toString();
  let arr = [];
  let res = 0;
  let bool = true;
  for (char of buffString) {
    arr.push(char);
    res += Number(char);
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] == arr[i - 1]) {
      bool = true;
    } else {
      bool = false;
      break;
    }
  }
  console.log(bool);
  console.log(res);
}
same(2222222);
same(1234);
