// ITERATION 1

function updateSubtotal(product) {

let priceElement = product.querySelector('.price span');

console.log(priceElement);

let price = Number(priceElement.innerText);

console.log(price);

let quantityElemet = product.querySelector('.quantity input');

let quantity = Number(quantityElemet.value);

let subtotal = price * quantity;

let subtotalElemt = product.querySelector('.subtotal span');

subtotal.Element.innerText = subtotal;

return subtotalElemt.innerText;



console.log('Calculating subtotal, yey!');


}

function calculateAll() {



  
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  let subtotal = subtotalElemt(singleProduct);
  let totlaElemet = document.querySelector('#total-value span');
  totlaElemet.innerText = subtotal;
  // end of test

  // ITERATION 2
  const allItems = document.querySelectorAll(".product");
  allItems.forEach((intem)=> {
    let subtotal = updateSubtotal(item);
    sumtorio += subtotal
  })
    

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
