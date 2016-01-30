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

describe("toppingsPrice", function () {
  it("returns a total price of a single pizza" ,function()  {
    expect(toppingsPrice(["mushroom, candian bacon"])).to.equal(3);
  });
});

describe("priceOfSinglePizza", function () {
  it("returns a total price of an order" ,function()  {
    expect(totalPrice(10, 6, 2)).to.equal(32);
  });
});
