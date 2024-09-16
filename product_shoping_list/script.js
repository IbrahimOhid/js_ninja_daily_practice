const filterEle = document.querySelector("#filter");
const productNameEle = document.querySelector("#productName");
const productPriceEle = document.querySelector("#productPrice");
const formEle = document.querySelector("form");
const msgEle = document.querySelector("#msg");
const addProductsEle = document.querySelector("#addProducts");

let products = [];

function receivedInput() {
  const productName = productNameEle.value;
  const productPrice = productPriceEle.value;
  return { productName, productPrice };
}

function clearMsg() {
  msgEle.textContent = "";
}

function showMessage(msg, action='success') {
  const textMsg = `<div class="alert alert-${action}" role="alert">${msg}</div>`;
  msgEle.insertAdjacentHTML("afterbegin", textMsg);
  setTimeout(() => {
    clearMsg();
  }, 2000);
}

function validationInput(productName, productPrice) {
  let isValid = true;
  if (productName === "" || productPrice === "") {
    isValid = false;
    showMessage("Please Provide Necessary Input", 'danger');
  }
  if (Number(productPrice) !== Number(productPrice)) {
    isValid = false;
    showMessage("Please Provide Product Price Number", 'danger');
  }
  return isValid;
}

function resetInput() {
  productNameEle.value = "";
  productPriceEle.value = "";
}

function inputProduct(productName, productPrice) {
  const product = {
    id: products.length + 1,
    productName,
    productPrice,
  };
  products.push(product);
  return product;
}

function showProductUi(inputProduct) {
  const { id, productName, productPrice } = inputProduct;
  const newProductAdd = `
                  <div class="d-flex flex-row justify-content-between mb-3 align-items-center" style="background-color: aliceblue; padding: 8px 7px;" data-productId ="${id}">
                    <div>
                      <span>${productName} -</span> <span>$${productPrice}</span>
                    </div>
                    <div class="d-flex gap-3">
                      <span style="cursor: pointer;"><i class="bi bi-pencil-square text-success"></i></span>
                      <span style="cursor: pointer;"><i class="bi bi-trash3 text-danger"></i></span>
                    </div>
                  </div>`;
  addProductsEle.insertAdjacentHTML("beforebegin", newProductAdd);
  showMessage("Product Added Successfully");
}

formEle.addEventListener("submit", (e) => {
  e.preventDefault();
  const { productName, productPrice } = receivedInput();
  const isValid = validationInput(productName, productPrice);
  if (!isValid) return;
  resetInput();
  const product = inputProduct(productName, productPrice);
  showProductUi(product);
});
