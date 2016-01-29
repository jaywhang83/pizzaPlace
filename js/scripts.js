function Pizza (pizzaSize) {
  this.pizzaSize = pizzaSize;
};

Pizza.prototype.sizePrice = function(sizeOfPizza) {
  var priceforSizeOfPizza = 0;
  if (sizeOfPizza === "small") {
    priceforSizeOfPizza = 5;
  }
  else if(sizeOfPizza === "medium") {
    priceforSizeOfPizza = 10;
  }
  else if (sizeOfPizza === "large") {
    priceforSizeOfPizza = 15;
  };
  return priceforSizeOfPizza;
};


function Toppings(topping) {
  this.topping = topping;
};

Toppings.prototype.totalToppingPrice = function (toppingSelected) {
  var choosenToppings = [];
  var toppingPrice = 0;
  choosenToppings.push(toppingSelected);
  return choosenToppings;
};

// for (var i = 0 ; i <= choosenToppings.length; i++) {
//
//     if (choosenToppings[i] === "pepperoni" || choosenToppings[i] === "canandian bacon" || choosenToppings[i] === "italian sausage"){
//       toppingPrice += 2;
//     }
// }
// return toppingPrice;
