const productsQuantity = document.querySelector('#products-quantity');
const productsPrice = document.querySelector('#products-price');
const productsTotal = document.querySelector('#products-total');

const ordersQuantity = document.querySelector('#orders-quantity');
const ordersPrice = document.querySelector('#orders-price');
const ordersTotal = document.querySelector('#orders-total');

const package = document.querySelector('#package');
const packagePrice = document.querySelector('#package-price');
const packageTotal = document.querySelector('#package-total');

const accPrice = document.querySelector('#calculator-acc-price');
const terminalPrice = document.querySelector('#calculator-terminal-price');
const totalPrice = document.querySelector('#total-price');

const invisibleProducts = document.querySelector('.invisible-products');
const invisibleOrders = document.querySelector('.invisible-orders');
const invisiblePackage = document.querySelector('.invisible-package');
const invisibleAcc = document.querySelector('.invisible-acc');
const invisibleTerminal = document.querySelector('.invisible-terminal');

let totalCounter = 0;

const handleProductsQuantity = (e) => {
    let productsCounter = 0;
    if (e.target.value <= 0 ||  e.target.value === '') {
        productsTotal.innerText = '';
        productsPrice.innerHTML = '';
        productsCounter = 0;
        totalPrice.innerHTML = String(totalCounter);
        return invisibleProducts.className = 'calculator-element invisible';
    }
    invisibleProducts.className = 'calculator-element visible';
    productsPrice.innerHTML = e.target.value + ' * $0.5';
    productsTotal.innerHTML = String(e.target.value * 0.5);
    productsCounter = +productsTotal;

    totalPrice.innerText = productsCounter;
};

const handleOrdersQuantity = (e) => {
    let ordersCounter = 0;
    if (e.target.value <= 0 || e.target.value === '') {
        ordersTotal.innerText = 0;
        ordersPrice.innerHTML = '';
        totalPrice.innerText = totalCounter;
        return invisibleOrders.className = 'calculator-element invisible';
    }
    invisibleOrders.className = 'calculator-element visible';
    ordersPrice.innerHTML = e.target.value + ' * $0.25';
    ordersTotal.innerHTML = String(e.target.value * 0.25);

    totalPrice.innerHTML = String(+productsTotal.innerHTML + +ordersTotal.innerHTML);
};

const handlePackage = (e) => {
    if (e.target.value === 'Basic') {
        packagePrice.innerHTML = 'Basic';
        packageTotal.innerHTML = '$0';
    } else if (e.target.value === 'Professional') {
        packagePrice.innerHTML = 'Professional';
        packageTotal.innerHTML = '$25';
    } else if (e.target.value === 'Premium') {
        packagePrice.innerHTML = 'Premium';
        packageTotal.innerHTML = '$60';
    }
};

productsQuantity.addEventListener('input', handleProductsQuantity);
ordersQuantity.addEventListener('input', handleOrdersQuantity);
package.addEventListener('input', handlePackage);

