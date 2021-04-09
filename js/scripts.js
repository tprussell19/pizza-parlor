function Pizza(size, topping1, topping2, topping3) {
  this.size = size;
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
  this.price = 0;
}

Pizza.prototype.pizzaPrice = function() {
  if (this.size === "Personal") {
    this.price += 10;
  } else if (this.size === "Medium") {
    this.price += 15;
  } else if (this.size === "Large") {
    this.price += 20;
  } else if (this.size === "Extra-large") {
    this.price += 25;
  }
  if (this.topping1 === 0) {
    this.price += 0;
  } else {
    this.price += 2;
  }
  if (this.topping2 === 0) {
    this.price += 0;
  } else {
    this.price += 2;
  }
  if (this.topping3 === 0) {
    this.price += 0;
  } else {
    this.price += 2;
  }
  return this.price;
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    let orderPrice = new Pizza($("#size").val(), parseInt($("#topping-1").val()), parseInt($("#topping-2").val()), parseInt($("#topping-3").val()));
    let pizzaOrder = new Pizza($("#size").val(), $("#topping-1").val(), $("#topping-2").val(), $("#topping-3").val());
    console.log(orderPrice, pizzaOrder);
    orderPrice.pizzaPrice();
    if (orderPrice.size === "select") {
      $("#select-a-size").show();
      $("#completed-order").hide();
    } else {
      $("#completed-order").show();
      $("#order-size").text(`Size: ${pizzaOrder.size}`);
      if (pizzaOrder.topping1 !== "0") {
        $("#order-topping-1").text(`Topping #1: ${pizzaOrder.topping1}`);
      }
      if (pizzaOrder.topping2 !== "0") {
        $("#order-topping-2").text(`Topping #2: ${pizzaOrder.topping2}`);
      }
      if (pizzaOrder.topping3 !== "0") {
        $("#order-topping-3").text(`Topping #3: ${pizzaOrder.topping3}`);
      }
      $("#new-pizza").text(`Your Total: $${orderPrice.price}`)
    }
  })
})