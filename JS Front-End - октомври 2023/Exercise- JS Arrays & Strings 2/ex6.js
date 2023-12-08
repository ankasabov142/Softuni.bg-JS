function solve(string) {
  let stringArr = string.split(" ");
  for (let el of stringArr) {
    if (el[0] === "#" && el[1] != undefined) {
      let buff = "";
      for (let char of el) {
        if (char !== "#") {
          if (isNaN(char)) {
            buff += char;
          } else {
            buff = "";
            break;
          }
        }
      }
      if (buff != "") {
        console.log(buff);
      }
    }
  }
}
solve(
  "The symbol # is known #variously in English-speaking #regio7ns as the #number sign"
);
