const productsQuantity = document.querySelector('#products-quantity');
const productsPrice = document.querySelector('#products-price');
const productsTotal = document.querySelector('#products-total');

const ordersQuantity = document.querySelector('#orders-quantity');
const ordersPrice = document.querySelector('#orders-price');
const ordersTotal = document.querySelector('#orders-total');

const totalPrice = document.querySelector('#total-price');

const invisibleProducts = document.querySelector('.invisible-products');
const invisibleOrders = document.querySelector('.invisible-orders');


const handleInput = (e) => {
    let totalCounter = 0;


};

productsQuantity.addEventListener('input', handleInput);
ordersQuantity.addEventListener('input', handleInput);
package.addEventListener('input', handleInput);