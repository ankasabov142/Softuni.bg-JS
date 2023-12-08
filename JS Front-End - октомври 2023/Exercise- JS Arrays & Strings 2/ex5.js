function replace(word, string) {
  const words = word.split(", ");
  let starsArr = [];
  for (let el of words) {
    let buff = "";
    for (let i = 0; i < el.length; i++) {
      buff += "*";
    }
    starsArr.push(buff);
  }
  let newString = string;
  let i = 0;
  for (let el of starsArr) {
    newString = newString.replace(`${el}`, `${words[i]}`);
    i++;
  }
  console.log(newString);
}
replace(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
