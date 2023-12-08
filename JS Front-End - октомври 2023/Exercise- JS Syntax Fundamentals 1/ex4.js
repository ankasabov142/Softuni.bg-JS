function solve(a, b) {
  let total = 0;
  let textBuff = `${a}`;
  for (let i = a; i <= b; i++) {
    total += i;
    if (i != a) {
      textBuff += ` ${i}`;
    }
  }
  console.log(textBuff);
  console.log(`Sum: ${total}`);
}
solve(50, 60);
