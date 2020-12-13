import mainTemplate from './templates/mainTemplate.html';
import carouselItemTemplate from './templates/carouselItemTemplate.html';
import './styles/mainStyle.css';
import  '../catalog/templates/categoryStyles.css';
import featuredItemTemplate from '../catalog/templates/productCardTemplate.html';
import populateTemplate from '../templater';

export default function render(params) {
    let carouselItems = '';
    for (const promo of params['promos']) {
        const item = populateTemplate(carouselItemTemplate, promo);
        carouselItems += item;
    }

    let featuredItems = '';
    for (const item of params['featuredItems']) {
        const card = populateTemplate(featuredItemTemplate, item);
        featuredItems += card;
    }

    const html = populateTemplate(mainTemplate, {
        carousel_items: carouselItems,
        featured_products: featuredItems,
    });

    document.getElementById('container').innerHTML = html;

    document.getElementsByClassName('carousel-inner')[0].children[0].classList.add('active');

    $('.carousel').carousel();
}