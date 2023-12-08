function splitter(text) {
  let resultArr = [];
  for (let i = 0; i < text.length; i++) {
    let buff = "";
    if (text[i] === text[i].toUpperCase() && text[i] != undefined) {
      buff += text[i];
      if (i + 1 != undefined) {
        for (
          let m = i + 1;
          text[m] != undefined && text[m] != text[m].toUpperCase();
          m++
        ) {
          buff += text[m];
          if (m + 1 == undefined) {
            break;
          }
        }
      }
      resultArr.push(buff);
    } else {
      buff = "";
    }
  }
  console.log(resultArr.join(", "));
}
splitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
