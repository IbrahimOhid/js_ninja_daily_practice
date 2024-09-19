const filterEle = document.querySelector("#filter");
const productNameEle = document.querySelector("#productName");
const productPriceEle = document.querySelector("#productPrice");
const formEle = document.querySelector("form");
const msgEle = document.querySelector("#msg");
const addProductsEle = document.querySelector("#addProducts");

let products = [];

function receiveInput() {
  const productName = productNameEle.value;
  const productPrice = productPriceEle.value;
  return { productName, productPrice };
}

function clearMessage() {
  msgEle.textContent = "";
}

function showMessage(msg, action = 'success') {
  const textMsg = `<div class="alert alert-${action}" role="alert">${msg}</div>`;
  msgEle.insertAdjacentHTML("afterbegin", textMsg);
  setTimeout(() => {
    clearMessage();
  }, 2000);
}

function inputValidation(productName, productPrice) {
  let isValid = true;
  if (productName === "" || productPrice === "") {
    showMessage("Please Provide Necessary Input", 'danger');
    isValid = false;
  }
  if (Number(productPrice) !== Number(productPrice)) {
    showMessage("Please Provide Product Price Number Digit", 'danger');
    isValid = false;
  }
  return isValid;
}

function resetInput() {
  productNameEle.value = "";
  productPriceEle.value = "";
}

function addProduct(productName, productPrice){
  const product = {
      id: products.length + 1,
      productName,
      productPrice
    }
    products.push(product);
    return product;
}

function showProductUi(addProduct){
  const {id, productName, productPrice} = addProduct;
  const newAddProduct = `<div class="d-flex flex-row justify-content-between mb-3 align-items-center" style="background-color: aliceblue; padding: 8px 7px;" data-productId = ${id}>
              <div>
                <span>${productName} -</span> <span>$${productPrice}</span>
              </div>
              <div class="d-flex gap-3">
                <span style="cursor: pointer;"><i class="bi bi-pencil-square text-success editProduct"></i></span>
                <span style="cursor: pointer;"><i class="bi bi-trash3 text-danger deleteProduct"></i></span>
              </div>
            </div>`;
            addProductsEle.insertAdjacentHTML('afterbegin', newAddProduct);
            showMessage("Product Added Successful")
}



function handelSubmitForm(e) {
  e.preventDefault();
  const { productName, productPrice } = receiveInput();
  const isValid = inputValidation(productName, productPrice);
  if (!isValid) return;
  resetInput();
  const product = addProduct(productName, productPrice);
  showProductUi(product);
}

function removeId(e){
  const divEle = e.target.parentElement.parentElement.parentElement;
  const id = Number(divEle.getAttribute('data-productId'));
  return id;
}

function removeItem(id){
 products = products.filter(product => product.id !== id);
}

function deleteProductUi(id){
  document.querySelector(`[data-productId = '${id}']`).remove();
}

function handelDeleteProduct(e){
  if(e.target.classList.contains('deleteProduct')){
   const id = removeId(e);
   removeItem(id);
   deleteProductUi(id);
  }
}

formEle.addEventListener("submit", handelSubmitForm);
addProductsEle.addEventListener('click', handelDeleteProduct);
