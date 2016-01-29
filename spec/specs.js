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
  it("returns a toppings choosen by uer", function() {
    var testTopping = new Toppings("canadian bacon");
    expect(testTopping.toppingPrice("canadian bacon")).to.eql(["canadian bacon"]);
  })
});
