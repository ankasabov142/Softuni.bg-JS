function fruit(fruit,weight,price){
    const inKilos=weight/1000;
    const inDollars=price*inKilos;
console.log(`I need $${inDollars.toFixed(2)} to buy ${inKilos.toFixed(2)} kilograms ${fruit}.`)

}
fruit('apple', 1563, 2.35)