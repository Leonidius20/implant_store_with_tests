import getHtml from "./cartTemplate";
import BaseView from "../base/baseView";

export default class CartView extends BaseView {

    constructor(controller) {
        super(controller);
    }

    getHtml() {
        return getHtml(this.controller.total, this.controller.products);
    }

    postRender() {
        if (this.controller.products.length > 0) {
            globalThis.onRemoveItemFromCartClicked = this.onRemoveItemFromCartClicked.bind(this);
        }
    }

    onRemoveItemFromCartClicked(element, productId) {
        this.controller.removeFromCart(productId);

        element.parentElement.parentElement.remove();

        if (this.controller.products.length === 0) {
            this.rerender();
        } else {
            document.getElementById('total').innerText =
                `${this.controller.total}$`;
        }

        this.rerender();
    }

}