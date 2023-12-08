function holiday(quantity, typeOfPeople, day) {
  let group = quantity;
  let pricePerMan = 0;
  let total = 0;
  let discount = 0;
  if (typeOfPeople == "Students") {
    if (quantity >= 30) {
      discount = 0.85;
    }
    switch (day) {
      case "Friday":
        pricePerMan = 8.45;
        break;
      case "Saturday":
        pricePerMan = 9.8;
        break;

      case "Sunday":
        pricePerMan = 10.46;
        break;
    }
  } else if (typeOfPeople == "Business") {
    if (quantity >= 100) {
      group -= 10;
    }
    switch (day) {
      case "Friday":
        pricePerMan = 10.9;
        break;

      case "Saturday":
        pricePerMan = 15.6;
        break;
      case "Sunday":
        pricePerMan = 16;
        break;
    }
  } else if (typeOfPeople == "Regular") {
    if (quantity >= 10 && quantity <= 20) {
      discount = 0.95;
    }
    switch (day) {
      case "Friday":
        pricePerMan = 15;
        break;

      case "Saturday":
        pricePerMan = 20;
        break;

      case "Sunday":
        pricePerMan = 22.5;
        break;
    }
  }

  if (discount > 0) {
    total = group * pricePerMan * discount;
  } else {
    total = group * pricePerMan;
  }
  console.log(`Total price: ${total.toFixed(2)}`);
}

holiday(40, "Regular", "Saturday");
