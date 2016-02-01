describe("Pizza", function(){
  it("returns the size of a pizza", function() {
    var testPizza = new Pizza("small");
    expect(testPizza.pizzaSize).to.equal("small");
  });
  it("returns a price of a small pizza", function () {
    var testPizza = new Pizza("small", ["mushroom", "canadian bacon"]);
    expect(testPizza.priceOfPizza()).to.equal(8);
  });
  it("returns a total price of a single pizza" ,function()  {
    var testPizza = new Pizza("small", ["mushroom", "canadian bacon"]);
    var newPizza = testPizza.priceOfPizza();
    expect(calculatePricePerOrder(newPizza, 2)).to.equal(16);
  });
});

describe("orderList", function () {
  it("returns a list of pizz order" ,function()  {
    var shoppingCart = {
                        1:{size:" small",
                          toppings: ["mushroom", "canadian bacon"],
                          quantity: 1,
                          "price of this pizza": 8}
                        };
    expect(orderList(shoppingCart)).to.equal("Order number 1",
                                              "1 size:  small",
                                              "toppings: mushroom,canadian bacon",
                                              "quantity: 1",
                                              "price of this pizza: 8");
  });
});

describe("orderTotal", function () {
  it("returns total price of an order" ,function()  {
    var shoppingCart = {
                        1:{size:" small",
                          toppings: ["mushroom", "canadian bacon"],
                          quantity: 1,
                          "price of this pizza": 8},
                        2:{size:" small",
                          toppings: ["mushroom", "canadian bacon"],
                          quantity: 2,
                          "price of this pizza": 16}
                        };
    expect(orderTotal(shoppingCart)).to.equal(24);
  });
});
