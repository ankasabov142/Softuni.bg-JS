function nums() {
  let resultArray = [];

  for (let i = 0; i < arguments.length; i++) {
    resultArray.push(arguments[i]);
  }
  resultArray.sort((a, b) => a - b);
  console.log(resultArray[0]);
}

nums(600, 342, 123);
