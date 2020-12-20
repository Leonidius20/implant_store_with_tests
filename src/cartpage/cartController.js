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
    }

}