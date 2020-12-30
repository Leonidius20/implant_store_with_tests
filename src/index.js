import 'bootstrap';
import './assets/bootstrap.min.css';
import './assets/footer.css';
import 'regenerator-runtime/runtime.js'; // for babel
import 'core-js'; // polyfills
import MainController from './mainpage/mainController';
import CatalogController from './catalog/catalogController';
import PromoController from './promopage/promoController';
import { getCartSize } from './dao/cart';
import ProductController from "./productpage/productController";
import CartController from "./cartpage/cartController";
import CategoryController from "./categorypage/categoryController";
import Router from "./router";
import MakeOrderController from "./makeorder/makeOrderController";

let router;

export function getRouter() {
    return router;
}

window.onload = () => {
    router = new Router();

    router.path('', () => {
        new MainController().showPage();
        selectNavbarItem('nav-item-home');
    });

    router.path('catalog', (id) => {
        if (id) new CategoryController(id).showPage();
        else {
            new CatalogController().showPage();
            selectNavbarItem('nav-item-catalog');
        }
    });

    router.path('promo', (id) => {
        if (id) new PromoController(id).showPage();
        else router.goTo('');
    });

    router.path('product', (id) => {
        if (id) new ProductController(id).showPage();
        else router.goTo('');
    });

    router.path('cart', () => {
        new CartController().showPage();
    });

    router.path('order', (id) => {
        if (id) router.goTo('catalog');
        else {
            if (getCartSize() === 0) {
                router.goTo('catalog');
            } else {
                new MakeOrderController().showPage();
            }
        }
    });

    router.apply();
    router.navigate();

    updateCartSize();
};

function selectNavbarItem(elementId) {
    document.getElementById(elementId).classList.add('active');
}

export function updateCartSize() {
    document.getElementById('cart-number-of-items').innerText
        = getCartSize().toString();
}