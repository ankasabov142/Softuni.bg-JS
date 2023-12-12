function isPalindrom(arr) {
  let palindrom = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][i] == arr[arr.length - i][arr.length - i]) {
      palindrom = true;
      console.log(palindrom);
    } else {
      palindrom = false;

      console.log(palindrom);
    }
  }
}
isPalindrom([123, 323, 421, 121]);
