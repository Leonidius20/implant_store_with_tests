import './assets/bootstrap.min.css';
import './assets/footer.css';
import 'regenerator-runtime/runtime.js'; // for babel
import 'core-js'; // polyfills
import MainController from './mainpage/mainController';
import CatalogController from './catalog/catalogController';
import {showLoader} from './loader/loader';
import PromoController from './promopage/promoController';
import categoryController from './categorypage/categoryController';
import makeOrderController from './makeorder/makeOrderController';
import { getCartSize } from './dao/cart';
import ProductController from "./productpage/productController";
import CartController from "./cartpage/cartController";
import CategoryController from "./categorypage/categoryController";

let ignoreHashChange = false;

// map of button ids to callbacks (can be)

window.onload = () => {
    navigate();
    updateCartSize();
};

window.onhashchange = () => {
    if (!ignoreHashChange) navigate();
};

export function navigate() {
    const hash = window.location.hash.slice(1);

    deselectAllNavbarItems();

    const pathAndId = hash.split('/');
    const path = pathAndId[0];
    const id = pathAndId[1];

    switch (path) {
    case '':
        showMainPage();
        break;
    case 'catalog':
        if (id == null) {
            showCatalog();
        } else {
            new CategoryController(parseInt(id)).showPage();
        }
        break;
    case 'promo':
        showLoader();
        if (id == null) {
            window.location.hash = '';
        } else {
            new PromoController(id).showPage();
        }
        break;
    case 'product':
        if (id == null) { // no id specified
            window.location.hash = '';
        } else {
            new ProductController(parseInt(id)).showPage();
        }
        break;
    case 'cart':
        new CartController().showPage();
        break;
    case 'order':
        if (id == null) {
            if (getCartSize() === 0) {
                window.location.hash = 'catalog';
            } else {
                showLoader();
                makeOrderController();
            }
        } else window.location.hash = 'catalog';
        break;
    default:
        window.location.hash = '';
        break;
    }
    scroll(0, 0);

    // collapsing mobile navbar
    document.getElementById('navbarColor02').classList.remove('show');
}

export function showMainPage() {
    new MainController().showPage();
    selectNavbarItem('nav-item-home');
}

function showCatalog() {
    new CatalogController().showPage();
    selectNavbarItem('nav-item-catalog');
}

export function setIgnoreHashChange(value) {
    ignoreHashChange = value;
}

function deselectAllNavbarItems() {
    const navbarItems = document.getElementsByClassName('nav-item');
    for (let i = 0; i < navbarItems.length; i++) {
        navbarItems.item(i).classList.remove('active');
    }
}

function selectNavbarItem(elementId) {
    document.getElementById(elementId).classList.add('active');
}

export function updateCartSize() {
    document.getElementById('cart-number-of-items').innerText
        = getCartSize().toString();
}