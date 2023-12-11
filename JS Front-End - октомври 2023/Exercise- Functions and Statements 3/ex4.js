function oddAndEven(a) {
  let stringA = a.toString();
  let even = 0;
  let odd = 0;
  for (let char of stringA) {
    if (char % 2 == 0) {
      even += Number(char);
    } else {
      odd += Number(char);
    }
  }
  console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}
oddAndEven(3495892137259234);
