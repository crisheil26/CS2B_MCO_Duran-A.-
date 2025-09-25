//create empty array to insert items to add to cart
let cart=[];

//add to cart function
function addToCart(item) {
  cart.push(item);
  alert(item + " has been added to your cart!");
  showCart();
}

//function to show cart
function showCart() {
  if (cart.length === 0) {
    console.log("Your cart is empty.");
    alert("Your cart is empty."); //if there are nothing in cart
  } else {
    //shows items in cart
    let cartList = "🛒 Your Cart:\n";
    cart.forEach((item, i) => {
      cartList += i + 1 + ". " + item + "\n";
    });
    alert(cartList);
  }
}
