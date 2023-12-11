function printCharactersInRange(char1, char2) {
  let start = char1.charCodeAt(0);
  let end = char2.charCodeAt(0);

  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }

  for (let i = start + 1; i < end; i++) {
    process.stdout.write(String.fromCharCode(i) + " ");
  }

  process.stdout.write("\n");
}
