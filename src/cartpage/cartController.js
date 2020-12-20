import {removeFromCart} from "../dao/cart";
import {updateCartSize} from "../index";
import CartView from "./cartView";
import BaseCartListController from "../cartlist/baseCartListController";

export default class CartController extends BaseCartListController {

    constructor() {
        super();
        this.view = new CartView(this);
    }

    removeFromCart(productId) {
        removeFromCart(productId);
        updateCartSize();
        const product = this.products.find(product => product.productId === productId);
        this.total -= product.cost;
        this.products.splice(this.products.indexOf(product), 1);
    }

}