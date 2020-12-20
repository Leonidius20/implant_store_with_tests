import './styles/mainStyle.css';
import  '../catalog/templates/categoryStyles.css';
import getHtml from "./mainTemplate";

export default function render(params) {
    document.getElementById('container').innerHTML = getHtml(params);

    document.getElementsByClassName('carousel-inner')[0].children[0].classList.add('active');

    $('.carousel').carousel();
}