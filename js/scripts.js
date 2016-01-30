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

var toppingsPrice = function (totalselectedToppings) {
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

function totalPrice(pizzaSizePrice, toppingPrice, priceOfAPizza, quantity) {
  return (pizzaSizePrice + toppingPrice) * quantity;
}


$(document).ready(function() {
      var pricePerSize = 0;
    $("input.size").click(function () {
      var size = new Pizza(this.value);
      pricePerSize = size.sizePrice(size.pizzaSize);
    });

    var selectedtoppings = [];
    $("input[type='checkbox']").click(function () {
      var topping = $(this).val();
      if($(this).is(":checked")) {
        selectedtoppings.push(topping);
      }
      else if (!($(this).is(":checked"))) {
        var index = selectedtoppings.indexOf(topping);
        selectedtoppings.splice(index, index);
        if (selectedtoppings.includes(topping)) {
         selectedtoppings.pop(topping);
        }
      }
      console.log(selectedtoppings);
       return selectedtoppings
  });

  var toppingPrice = 0;
  $("#continue").click(function() {
    console.log(pricePerSize);
    toppingPrice = toppingsPrice(selectedtoppings);
    console.log(toppingPrice);
  });

  $("#checkOut").click(function() {
    var qty = parseInt($("input#qty").val());
    console.log(qty);
    var total = totalPrice(pricePerSize, toppingPrice, qty);
    console.log(total);
  });

});
