describe("Pizza", function(){
  it("returns the size of a pizza", function() {
    var testPizza = new Pizza("small");
    expect(testPizza.pizzaSize).to.equal("small");
  });
  it("returns a price of a pizza depend on the size", function () {
    var testPizza = new Pizza("large");
    expect(testPizza.sizePrice("large")).to.equal(15);
  });
});
