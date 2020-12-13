import populateTemplate from '../templater';
import cartItemTemplate from './templates/cartItemTemplate.html';
import cartPageTemplate from './templates/cartPageTemplate.html';
import cartContentTemplate from './templates/cartContentTemplate.html';
import {removeFromCart} from './cartModel';
import ErrorController from '../errorpage/errorController';
import {loadAndRender} from './cartController';

export default function render({total, products}) {
    if (products.length === 0) {
        document.getElementById('container').innerHTML
            = populateTemplate(cartPageTemplate, {
                cart_content: '<p>There are no items in the cart. You can choose some of our products from the <a href="#catalog">catalog</a>.</p>',
            });
    } else {
        let cartItems = '';
        for (const product of products) {
            cartItems += populateTemplate(cartItemTemplate, product);
        }

        const cart_content = populateTemplate(cartContentTemplate,
            { total, cartItems });

        document.getElementById('container').innerHTML
            = populateTemplate(cartPageTemplate, { cart_content });

        globalThis.onRemoveItemFromCartClicked = onRemoveItemFromCartClicked;
    }
}

function onRemoveItemFromCartClicked(element, productId) {
    const cartSize = removeFromCart(productId);
    document.getElementById('cart-number-of-items').innerText
        = cartSize.toString();

    element.parentElement.parentElement.remove();

    loadAndRender()
        .catch(error => {
            new ErrorController().showPage(error);
        });
}