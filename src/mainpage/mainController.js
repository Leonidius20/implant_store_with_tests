import render from "./mainView";
import {getFeaturedItems, getPromos} from "./mainModel";
import ErrorController from "../errorpage/errorController";
import {hideLoader} from "../loader/loader";

export default class MainController {

    showPage() {
        const promosPromise = getPromos();
        const featuredPromise = getFeaturedItems();

        return Promise.all([promosPromise, featuredPromise]).then(values => {
            render({
                promos: values[0],
                featuredItems: values[1],
            });
        }).catch(error => {
            new ErrorController().showPage(error);
        }).finally(hideLoader);
    }

}