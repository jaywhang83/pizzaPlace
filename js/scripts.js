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
  // var choosenTopping = [];
  this.topping = topping;
  // choosenTopping.push(topping);
  // return choosenTopping;
};

Toppings.prototype.toppingPrice = function (toppingSelected) {
  var choosenTopping = [];
  choosenTopping.push(toppingSelected);
  return choosenTopping;
};
