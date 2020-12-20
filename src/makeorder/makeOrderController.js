import {getItemsInCart} from '../dao/cart';
import {hideLoader, showLoader} from '../loader/loader';
import {postOrder} from "../dao/orders";
import {clearCart} from '../dao/cart';
import BaseCartListController from "../cartlist/baseCartListController";
import MakeOrderView from "./makeOrderView";
import {updateCartSize} from "../index";
import showErrorScreen from "../errorpage/errorController";
import ViewOrderController from "../vieworder/viewOrderController";

export default class MakeOrderController extends BaseCartListController {

    constructor() {
        super();
        this.view = new MakeOrderView(this);
    }

    submitOrder(data) {
        showLoader();
        data['products'] = getItemsInCart();
        postOrder(data)
            .then(order => {
                clearCart();
                updateCartSize();
                new ViewOrderController(order).showPage();
            }).catch(error => {
                showErrorScreen(error);
            }).finally(hideLoader);
    }

}