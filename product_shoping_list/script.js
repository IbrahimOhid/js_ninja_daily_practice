const filterEle = document.querySelector('#filter');
const productNameEle = document.querySelector('#productName');
const productPriceEle = document.querySelector('#productPrice');
const formEle = document.querySelector('form');

function receivedInput(){
    const productName = productNameEle.value;
    console.log(productName);
    const productPrice = productPriceEle.value;
    console.log(productPrice);
    return {productName, productPrice};
}


formEle.addEventListener('submit', (e)=>{
    e.preventDefault();
    receivedInput();
})