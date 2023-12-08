function cook(a, op1, op2, op3, op4, op5) {
  const operations = [op1, op2, op3, op4, op5];
  let res = Number(a);
  for (let operation of operations) {
    switch (operation) {
      case "chop":
        res /= 2;
        console.log(res);
        break;
        
      case "dice":
        res = Math.sqrt(res);
        console.log(res);
        break;

      case "spice":
        res++;
        console.log(res);
        break;

      case "bake":
        res *= 3;
        console.log(res);
        break;

      case "fillet":
        res -= res * 0.2;
        console.log(res);
        break;
    }
  }
}
cook("32", "chop", "chop", "chop", "chop", "chop");
cook("9", "dice", "spice", "chop", "bake", "fillet");
