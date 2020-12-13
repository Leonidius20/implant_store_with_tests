import html from './loader.html';
import './loader.css';

let loader = null;

export function showLoader() {
    if (loader === null) {
        loader = new DOMParser().parseFromString(html, 'text/html').body.firstChild;
    }
    document.body.appendChild(loader);
    document.body.style.overflow = 'hidden';
}

export function hideLoader() {
    document.body.removeChild(loader);
    document.body.style.removeProperty('overflow');
}