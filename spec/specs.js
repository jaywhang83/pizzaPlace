describe("Pizza", function(){
  it("returns the size of the pizza", function() {
    var testPizza = new Pizza("small");
    expect(testPizza.pizzaSize).to.equal("small");
  });
});
