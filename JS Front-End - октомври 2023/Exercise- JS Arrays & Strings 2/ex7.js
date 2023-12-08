function solve(word, text) {
  const buff = text.split(" ");
  let searchedText = [];
  for (let el of buff) {
    searchedText.push(el.toLowerCase());
  }
  if (searchedText.includes(word)) {
    console.log(word);
  } else {
    console.log(`${word} not found!`);
  }
}
solve("javascripts", "JavaScript is the best programming language");
