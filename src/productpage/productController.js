import ErrorController from '../errorpage/errorController';
import {hideLoader} from '../loader/loader';
import render, {hideAmountSelector, updateCartSize} from './productView';
import getProduct, {putToCart} from './productModel';

export default function showPage(productId) {
    getProduct(productId).then(product => {
        render(product);
    }).catch(error => {
        new ErrorController().showPage(error);
    }).finally(hideLoader);
}

export function addToCart(productId, amount) {
    const cartSize = putToCart(productId, amount);
    updateCartSize(cartSize);
    hideAmountSelector();
}
