function Pizza (pizzaSize, selectedToppings) {
  this.pizzaSize = pizzaSize;
  this.selectedToppings = selectedToppings;
};

Pizza.prototype.priceOfPizza = function() {
  var priceOfPizza = 0;
  this.selectedToppings.forEach(function (topping) {
    if (topping === "mushroom" || topping === "onion") {
      priceOfPizza += 1;
    }
    else if (topping === "pepperoni" || topping === "canadian bacon" || topping === "italian sausage") {
      priceOfPizza += 2;
    }
    else {
      priceOfPizza += 3;
    }
  });
  if (this.pizzaSize === "small") {
    priceOfPizza += 5;
  }
  else if(this.pizzaSize === "medium") {
    priceOfPizza += 10;
  }
  else if (this.pizzaSize === "large") {
    priceOfPizza += 15;
  }
  return priceOfPizza;
};

var shoppingCart = {
};

function calculatePricePerOrder(priceOfPizza, quantity) {
  return priceOfPizza * quantity;
};

function orderList(obj) {
  var orderItem = "";
  for(var property in shoppingCart) {
    orderItem += "\n" + "Order number " + property + "\n";
    for (var prop in shoppingCart[property]) {
      orderItem += prop + ": " + shoppingCart[property][prop] + "\n";
    }
  }
  return orderItem;
}

function orderTotal(obj) {
  var orderTotal = 0;
  for(var property in shoppingCart) {
    for (var prop in shoppingCart[property]) {
      if (prop === "price of this pizza") {
        orderTotal += shoppingCart[property][prop];
      }
    }
  }
  return orderTotal;
};


$(document).ready(function() {
    var pizzaSize;
    var selectedToppings = [];
    var priceOfPizza = 0;
    var qty = 0;
    var pricePerOrder = 0;
    var count = 0;
  $("#continue").click(function() {
    pizzaSize = $("input[type = 'radio']:checked").val();
    $("#size").text(pizzaSize);
    $("input[type = 'checkbox']:checked").each(function(topping) {
      selectedToppings[topping] = $(this).val();
    });

    selectedToppings.forEach(function(index) {
      $("ul").append("<li>" + index + "</li>");
    });

    var pizzaOrder = new Pizza(pizzaSize, selectedToppings);
    priceOfPizza = pizzaOrder.priceOfPizza();
    qty = parseInt($("input#qty").val());
    pricePerOrder = calculatePricePerOrder(priceOfPizza, qty);
    $("#totalThisOrder").text("$"+pricePerOrder);

    $("#result").slideDown();
  });

  $("#finishOrder").click(function() {
    count++;
    shoppingCart[count] = {size: pizzaSize, toppings: selectedToppings, quantity: qty, "price of this pizza": pricePerOrder};
    $("#order").text(orderList(shoppingCart));
    $("#total").text("$"+orderTotal(shoppingCart));
  });

  $("#orderMore").click(function() {
    count++;
    shoppingCart[count] = {size: pizzaSize, toppings: selectedToppings, quantity: qty, "price of this pizza": pricePerOrder};
    selectedToppings = [];
    $("#size").text("");
    $("input#qty").text("");
    $("#totalThisOrder").text("");
    $("ul li").remove();
  });
});
