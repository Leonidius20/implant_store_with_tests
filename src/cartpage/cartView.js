import populateTemplate from '../templater';
import cartItemTemplate from './templates/cartItemTemplate.html';
import cartPageTemplate from './templates/cartPageTemplate.html';
import cartContentTemplate from './templates/cartContentTemplate.html';
import ErrorController from '../errorpage/errorController';

export default class CartView {

    constructor(controller) {
        this.controller = controller;
    }

    render({total, products}) {
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

            globalThis.onRemoveItemFromCartClicked = this.onRemoveItemFromCartClicked.bind(this);
        }
    }

    onRemoveItemFromCartClicked(element, productId) {
        this.controller.removeFromCart(productId);

        element.parentElement.parentElement.remove();

        this.controller.loadAndRender()
            .catch(error => {
                new ErrorController().showPage(error);
            });
    }

}