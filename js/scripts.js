function Pizza(size, topping1, topping2, topping3) {
  this.size = size;
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
  this.price = 0;
}

Pizza.prototype.pizzaPrice = function() {
  if (this.size === "personal") {
    this.price += 10;
  } else if (this.size === "medium") {
    this.price += 15;
  } else if (this.size === "large") {
    this.price += 20;
  } else if (this.size === "extra-large") {
    this.price += 25;
  }
  if (this.topping1 !== undefined) {
    this.price += 2;
  } else if (this.topping2 !== undefined) {
    this.price += 2;
  } else if (this.topping3 !== undefined) {
    this.price += 2;
  }
  return this.price;
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    let newPizza = new Pizza($("#size").val());
    newPizza.pizzaPrice();
    $("#new-pizza").text(newPizza.price);
  })
})