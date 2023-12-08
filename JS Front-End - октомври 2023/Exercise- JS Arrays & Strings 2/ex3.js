function list(names) {
  let resArr = names.sort();
  let i = 1;
  for (let name of resArr) {
    console.log(`${i}.${name}`);
    i++;
  }
}
list(["John", "Bob", "Christina", "Ema"]);
