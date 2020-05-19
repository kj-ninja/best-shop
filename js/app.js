const productsQuantity = document.querySelector('#products-quantity');
const productsPrice = document.querySelector('#products-price');
const productsTotal = document.querySelector('#products-total');

const ordersQuantity = document.querySelector('#orders-quantity');
const ordersPrice = document.querySelector('#orders-quantity');
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
const invisibleAcc = document.querySelector('.invisible-Acc');
const invisibleTerminal = document.querySelector('.invisible-terminal');
const invisibleTotal = document.querySelector('.invisible-total');

const handleProductsQuantity = (e) => {
    if (e.target.value <= 0) {
        productsTotal.innerHTML = '';
        productsPrice.innerHTML = '';
        return invisibleProducts.className = 'calculator-element invisible';
    }
    invisibleProducts.className = 'calculator-element visible';
    productsPrice.innerHTML = e.target.value + ' * $0.5';
    productsTotal.innerHTML = String(e.target.value * 0.5) + '$';

    invisibleTotal.className = 'calculator-total visible';
    totalPrice.innerHTML = productsTotal.innerHTML + ordersTotal.innerHTML + packageTotal.innerHTML;
};

const handleOrdersQuantity = (e) => {
    if (e.target.value <= 0) {
        ordersTotal.innerHTML = '';
        ordersPrice.innerHTML = '';
        return invisibleOrders.className = 'calculator-element invisible';
    }
    invisibleOrders.className = 'calculator-element visible';
    ordersQuantity.innerHTML = e.target.value + ' * $0.25';
    ordersTotal.innerHTML = String(e.target.value * 0.5) + '$';

    invisibleTotal.className = 'calculator-total visible';
    totalPrice.innerHTML = productsTotal.innerHTML + ordersTotal.innerHTML + packageTotal.innerHTML;
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

