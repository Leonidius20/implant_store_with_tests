export function clearCart() {
    window.localStorage.setItem('cart', JSON.stringify({}));
    document.getElementById('cart-number-of-items').innerText = '0';
}