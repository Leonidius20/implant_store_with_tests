import pageTemplate from './templates/productPageTemplate.html';
import addToCartTemplate from './templates/addToCartTemplate.html';
import {inputSpinner} from 'bootstrap-input-spinner';
import './templates/productPageStyle.css';
import populateTemplate from '../templater';
import {addToCart} from './productController';
import {isInCart} from './productModel';

export default function render(params) {
    let addToCart;
    if (isInCart(params['id'])) {
        addToCart = '<p class="text-muted">This item is in the cart.</p>';
    } else {
        addToCart = populateTemplate(addToCartTemplate, params);
    }

    document.getElementById('container').innerHTML =
        populateTemplate(pageTemplate, Object.assign({
            add_to_cart: addToCart
        }, params));
    globalThis.onAddToCartClicked = onAddToCartClicked;
    $('#amount').inputSpinner({
        groupClass: 'amount-selector',
        buttonsClass: 'btn-primary',
    });
}

function onAddToCartClicked(productId) {
    const amount = parseInt($('#amount').val());
    addToCart(productId, amount);

}

// could move to navbar view
export function updateCartSize(newSize) {
    document.getElementById('cart-number-of-items').innerText
        = newSize.toString();
}

export function hideAmountSelector() {
    const addedText = document.createElement('p');
    addedText.innerText = 'This item is in the cart.';
    addedText.classList.add('text-muted');

    document.getElementById('addToCartBlock').parentElement.replaceChild(
        addedText, document.getElementById('addToCartBlock'));
}