import {getFromLocalStorage, putToLocalStorage} from "./base";

export function getItemsInCart() {
    return getFromLocalStorage('cart');
}

export function getCartSize() {
    return Object.keys(getItemsInCart()).length;
}

export function putToCart(productId, amount) {
    const cart = getItemsInCart();
    cart[productId] = amount;
    putToLocalStorage('cart', cart);
}

export function removeFromCart(productId) {
    const cart = getItemsInCart();
    delete cart[productId];
    putToLocalStorage('cart', cart);
}

export function isInCart(productId) {
    return getItemsInCart()[productId] != null;
}

export function clearCart() {
    putToLocalStorage('cart', JSON.stringify({}));
}