function Pizza (pizzaSize) {
  this.pizzaSize = pizzaSize;
};
Pizza.prototype.sizePrice = function (sizeOfPizza) {
  var priceforSizeOfPizza = 0;
  if (sizeOfPizza === "large") {
    //priceforSizeOfPizza = 15;
    return 15;
  };
  //return priceforSizeOfPizza;
};
