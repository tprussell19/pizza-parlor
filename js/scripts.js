function Pizza(size, topping1, topping2, topping3) {
  this.size = size;
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
  this.price = 0;
}

let newPizza = new Pizza("large");

Pizza.prototype.pizzaPrice = function(object) {
  this.price = object.price;
  this.size = object.size;
  console.log(this.price);
  if (this.size === "personal") {
    this.price += 10;
    console.log(this.price);
  } else if (this.size === "medium") {
    this.price += 15;
    console.log(this.price);
  } else if (this.size === "large") {
    this.price += 20;
    console.log(this.price);
  } else if (this.size === "extra-large") {
    this.price += 25;
    console.log(this.price);
  }
  console.log(this.price);
  return this.price;
}