function updateSubtotal(product) {
  const priceTag = product.querySelector('.price span')
  const priceValue = priceTag.textContent

  const quantityTag = product.querySelector('.quantity input')
  const quantityValue = quantityTag.value

  const subtotal = quantityValue * priceValue

  const subtotalTag = product.querySelector('.subtotal span')
  subtotalTag.textContent = subtotal

  return subtotal
}

function calculateAll() {

  const productTags = document.querySelectorAll('.product')

  let totalPrice = 0

  productTags.forEach(eachProduct => {
    const value = updateSubtotal(eachProduct)
    totalPrice += value
  })

  document.querySelector('#total-value span').textContent = totalPrice
}

function removeProduct(event) {
  const target = event.currentTarget
  const product = target.parentNode.parentNode

  console.log(product)

  document.querySelector('tbody').removeChild(product)
}


function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.querySelector('#calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const buttons = document.querySelectorAll('.btn-remove')
  buttons.forEach(eachButton => eachButton.onclick = removeProduct)


  //... your code goes here
});
