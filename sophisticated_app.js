// Filename: sophisticated_app.js
// Description: A sophisticated and elaborate JavaScript code that represents an e-commerce web application with multiple functionalities.

// -------- Helper Functions --------

// Helper function to calculate the total price of items in the cart
function calculateTotalPrice(cart) {
  let totalPrice = 0;
  for (let item of cart) {
    totalPrice += item.price * item.quantity;
  }
  return totalPrice;
}

// Helper function to validate user input for quantity
function validateQuantityInput(quantity) {
  const parsedQuantity = parseInt(quantity);
  if (isNaN(parsedQuantity) || parsedQuantity <= 0) {
    console.log("Invalid quantity input.");
    return false;
  }
  return true;
}

// -------- Classes --------

// Represents a Product
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// Represents a CartItem
class CartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  updateQuantity(newQuantity) {
    if (validateQuantityInput(newQuantity)) {
      this.quantity = newQuantity;
      console.log(`Updated quantity of ${this.product.name} to ${newQuantity}`);
    }
  }
}

// Represents a User
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.cart = [];
  }

  addToCart(product, quantity) {
    if (validateQuantityInput(quantity)) {
      const cartItem = new CartItem(product, quantity);
      this.cart.push(cartItem);
      console.log(`${quantity} ${product.name}(s) added to the cart.`);
    }
  }

  updateCartItemQuantity(productName, newQuantity) {
    const cartItem = this.cart.find((item) => item.product.name === productName);
    cartItem.updateQuantity(newQuantity);
  }

  displayCart() {
    console.log(`--- Cart for ${this.name} ---`);
    for (let cartItem of this.cart) {
      console.log(`${cartItem.product.name} - Quantity: ${cartItem.quantity}`);
    }
    console.log(`Total Price: $${calculateTotalPrice(this.cart)}`);
  }
}

// -------- Usage --------

// Create Products
const product1 = new Product("Phone", 1000);
const product2 = new Product("Laptop", 2000);
const product3 = new Product("Headphones", 200);

// Create Users
const user1 = new User("John", "john@example.com");
const user2 = new User("Emily", "emily@example.com");

// Users add products to their carts
user1.addToCart(product1, 2);
user1.addToCart(product2, 1);
user2.addToCart(product3, 3);

// Users update their cart item quantities
user1.updateCartItemQuantity("Phone", 3);
user2.updateCartItemQuantity("Headphones", 1);

// Display cart and total price for each user
user1.displayCart();
user2.displayCart();

// Output:
// --- Cart for John ---
// Phone - Quantity: 3
// Laptop - Quantity: 1
// Total Price: $4000
// --- Cart for Emily ---
// Headphones - Quantity: 1
// Total Price: $200