import './assets/bootstrap.min.css';
import './assets/footer.css';
import 'regenerator-runtime/runtime.js'; // for babel
import 'core-js'; // polyfills
import MainController from './mainpage/mainController';
import CatalogController from './catalog/catalogController';
import {showLoader} from './loader/loader';
import PromoController from './promopage/promoController';
import productController from './productpage/productController';
import categoryController from './categorypage/categoryController';
import cartController from './cartpage/cartController';
import makeOrderController from './makeorder/makeOrderController';

export const API_URL = 'https://my-json-server.typicode.com/Leonidius20/implant_store/';

let ignoreHashChange = false;

// map of button ids to callbacks (can be)

window.onload = () => {
    navigate();
    document.getElementById('cart-number-of-items').innerText
        = getCartSize().toString();
};
window.onhashchange = () => {
    if (!ignoreHashChange) navigate();
};

function navigate() {
    const hash = window.location.hash.slice(1);

    deselectAllNavbarItems();

    const pathAndId = hash.split('/');
    const path = pathAndId[0];

    switch (path) {
    case '':
        showLoader();
        new MainController().showPage();
        selectNavbarItem('nav-item-home');
        break;
    case 'catalog':
        showLoader();
        if (pathAndId[1] == null) {
            new CatalogController().showPage();
            selectNavbarItem('nav-item-catalog');
        } else {
            categoryController(parseInt(pathAndId[1]));
        }
        break;
    case 'promo':
        showLoader();
        if (pathAndId[1] == null) { // no id specified
            window.location.hash = '';
        } else {
            new PromoController().showPage(pathAndId[1]);
        }
        break;
    case 'product':
        showLoader();
        if (pathAndId[1] == null) { // no id specified
            window.location.hash = '';
        } else {
            productController(parseInt(pathAndId[1]));
        }
        break;
    case 'cart':
        showLoader();
        cartController();
        break;
    case 'order':
        if (pathAndId[1] == null) {
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
    document.getElementById('navbarColor02').classList.remove('show');
}

export function setIgnoreHashChange(value) {
    ignoreHashChange = value;
}

function getCartSize() {
    return Object.keys(JSON.parse(window.localStorage.getItem('cart')) || {}).length;
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