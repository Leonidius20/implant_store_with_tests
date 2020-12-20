import {updateCartSize} from "../index";
import {getProduct} from "../dao/products";
import {isInCart, putToCart} from "../dao/cart";
import BaseController from "../base/baseController";
import ProductView from "./productView";

export default class ProductController extends BaseController {

    constructor(productId) {
        super();
        this.productId = productId;
        this.view = new ProductView(this);
    }

    supplyData() {
        return getProduct(this.productId).then(product => {
            Object.assign(product, {isInCart: isInCart(this.productId)});
            this.view.render(product);
        });
    }

    addToCart(productId, amount) {
        putToCart(productId, amount);
        updateCartSize();
    }

}
