import pageTemplate from './templates/productPageTemplate.html';
import addToCartTemplate from './templates/addToCartTemplate.html';
import {inputSpinner} from 'bootstrap-input-spinner';
import './templates/productPageStyle.css';
import populateTemplate from '../templater';

export default class ProductView {

    constructor(controller) {
        this.controller = controller;
    }

    render(params) {
        let addToCart;
        if (params['isInCart']) {
            addToCart = '<p class="text-muted">This item is in the cart.</p>';
        } else {
            addToCart = populateTemplate(addToCartTemplate, params);
        }

        document.getElementById('container').innerHTML =
            populateTemplate(pageTemplate, Object.assign({
                add_to_cart: addToCart
            }, params));

        // TODO: replace with window.onclick
        globalThis.onAddToCartClicked = this.onAddToCartClicked.bind(this);

        $('#amount').inputSpinner({
            groupClass: 'amount-selector',
            buttonsClass: 'btn-primary',
        });
    }

    onAddToCartClicked(productId) {
        const amount = parseInt($('#amount').val());
        this.controller.addToCart(productId, amount);
        this.hideAmountSelector();
    }

    hideAmountSelector() {
        const addedText = document.createElement('p');
        addedText.innerText = 'This item is in the cart.';
        addedText.classList.add('text-muted');

        document.getElementById('addToCartBlock').parentElement.replaceChild(
            addedText, document.getElementById('addToCartBlock'));
    }

}