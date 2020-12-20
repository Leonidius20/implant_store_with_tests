import getHtml from "./cartTemplate";

export default class CartView {

    constructor(controller) {
        this.controller = controller;
    }

    render(params) {
        document.getElementById('container').innerHTML
            = getHtml(params);

        if (params.products.length > 0) {
            globalThis.onRemoveItemFromCartClicked = this.onRemoveItemFromCartClicked.bind(this);
        }
    }

    onRemoveItemFromCartClicked(element, productId) {
        this.controller.removeFromCart(productId);

        element.parentElement.parentElement.remove();

        this.render({
            total: this.controller.total,
            products: this.controller.products
        });
    }

}