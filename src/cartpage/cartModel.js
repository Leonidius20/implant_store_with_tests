export default function getItemsInCart() {
    return JSON.parse(window.localStorage.getItem('cart')) || {};
}

export function removeFromCart(productId) {
    const cart = JSON.parse(window.localStorage.getItem('cart')) || {};
    delete cart[productId];
    window.localStorage.setItem('cart', JSON.stringify(cart));
    return Object.keys(cart).length;
}