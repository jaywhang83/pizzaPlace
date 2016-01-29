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

Toppings.prototype.totalToppings = function (toppingSelected) {
  var choosenToppings = [];
  choosenToppings.push(toppingSelected);
  console.log("toppint array is: " + choosenToppings);
  return choosenToppings;
};

Toppings.prototype.toppingsPrice = function (totalselectedToppings) {
  var toppingPrice = 0;
  totalselectedToppings.forEach(function (topping) {
    if (topping === "mushroom" || topping === "onion") {
      toppingPrice += 1;
    }
    else if (topping === "pepperoni" || topping === "canadian bacon" || topping === "italian sausage") {
      toppingPrice += 2;
    }
    else {
      toppingPrice += 3;
    };
  });
  return toppingPrice;
};

function priceOfSinglePizza(pizzaSizePrice, toppingPrice) {
  var priceOfSinglePizza = 0;
  priceOfSinglePizza = pizzaSizePrice + toppingPrice;
  return priceOfSinglePizza;
}

function totalPrice(priceOfAPizza, quantity) {
  return priceOfAPizza * quantity;
}


$(document).ready(function() {
    $("input.size").click(function () {
      var size = new Pizza(this.value);
      var pricePerSize = size.sizePrice(size.pizzaSize);
      console.log(size);
      console.log(pricePerSize);
    });
    $("input.topping").click(function () {
      var selectedtoppings = [];
      var topping = this.value;
      selectedtoppings.push(topping);
      //selectedtoppings += topping;
      console.log(selectedtoppings);
      // var totalToppings = topping.totalToppings(topping.topping);

    });
});
