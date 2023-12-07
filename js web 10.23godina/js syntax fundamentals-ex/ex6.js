function digits(a) {
  let text = a.toString();
  let buffArr = [];
  let result = 0;
  for (char of text) {
    buffArr.push(char);
  }
  for (char of buffArr) {
    result += Number(char);
  }

  console.log(result);
}
digits(97561);
