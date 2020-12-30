import './styles/mainStyle.css';
import  '../catalog/templates/categoryStyles.css';
import getHtml from "./mainTemplate";
import BaseView from "../base/baseView";

export default class MainView extends BaseView {

    constructor(controller) {
        super(controller);
    }

    getHtml() {
        return getHtml(this.controller.promos, this.controller.featuredItems);
    }

    postRender() {
        document.querySelector('.carousel-item').classList.add('active');
        $('.carousel').carousel();
    }

}