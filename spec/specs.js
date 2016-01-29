describe("Pizza", function(){
  it("returns the size of a pizza", function() {
    var testPizza = new Pizza("small");
    expect(testPizza.pizzaSize).to.equal("small");
  });
  it("returns a price of a small pizza", function () {
    var testPizza = new Pizza("small");
    expect(testPizza.sizePrice("small")).to.equal(5);
  });
  it("returns a price of a medium pizza", function () {
    var testPizza =  new Pizza("medium");
    expect(testPizza.sizePrice("medium")).to.equal(10);
  });
  it("returns a price of a large pizza", function () {
    var testPizza = new Pizza("large");
    expect(testPizza.sizePrice("large")).to.equal(15);
  });
});

describe("Toppings", function () {
  it("returns a topping choosen by user" ,function()  {
    var testTopping = new Toppings("canadian bacon");
    expect(testTopping.topping).to.equal("canadian bacon");
  });
  it("returns a toppings choosen by user", function() {
    var testTopping = new Toppings("canadian bacon");
    expect(testTopping.totalToppings("canadian bacon")).to.eql(["canadian bacon"]);
  });
  it("returns price of the toppings selected", function() {
    var testTopping = new Toppings("canadian bacon");
    expect(testTopping.toppingsPrice(["mushroom"])).to.equal(1);
    expect(testTopping.toppingsPrice(["canadian bacon"])).to.equal(2);
    expect(testTopping.toppingsPrice(["pineapple"])).to.equal(3);
    expect(testTopping.toppingsPrice(["canadian bacon" , "mushroom", "pineapple"])).to.equal(6);
  });
});

describe("priceOfSinglePizza", function () {
  it("returns a total price of a single pizza" ,function()  {
    expect(priceOfSinglePizza(10, 6)).to.equal(16);
  });
});

describe("priceOfSinglePizza", function () {
  it("returns a total price of an order" ,function()  {
    expect(totalPrice(16, 2)).to.equal(32);
  });
});
