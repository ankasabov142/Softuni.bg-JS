function solve(arr, n) {
  let resArr = [];
  let counter = 0;
  for (let i = 0; i < arr.length; i += n) {
    resArr.push(arr[i]);
  }
  console.log(resArr);
}
solve(["1", "2", "3", "4", "5"], 6);
