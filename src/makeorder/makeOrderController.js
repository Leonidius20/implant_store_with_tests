import getItemsInCart from '../cartpage/cartModel';
import getProduct from '../productpage/productModel';
import render from './makeOrderView';
import ErrorController from '../errorpage/errorController';
import {hideLoader, showLoader} from '../loader/loader';
import postOrder from './makeOrderModel';
import viewOrderController from '../vieworder/viewOrderController';
import {clearCart} from '../vieworder/viewOrderModel';

export default function showPage() {
    loadAndRender()
        .catch(error => {
            new ErrorController().showPage(error);
        }).finally(hideLoader);
}

async function loadAndRender() {
    let total = 0;
    const products = [];
    const itemsInCart = getItemsInCart();
    for (const productIdString in itemsInCart) {
        const productId = parseInt(productIdString);
        const amount = itemsInCart[productId];
        const product = await getProduct(productId);
        const price = parseInt(product['price'].substring(0, product['price'].length - 1));
        const cost = price * amount;
        total += cost;
        const name = product['name'];
        products.push({ name, amount, cost, productId });
    }
    render({ total, products });
}

export function submitOrder(data) {
    showLoader();
    data['products'] = getItemsInCart();
    clearCart();
    postOrder(data)
        .then(order => {
            return viewOrderController(order);
        }).catch(error => {
            new ErrorController().showPage(error);
        }).finally(hideLoader);
}