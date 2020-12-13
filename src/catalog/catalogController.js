import render from "./catalogView";
import ErrorController from "../errorpage/errorController";
import {hideLoader} from "../loader/loader";
import {getCategoriesAndProducts} from "./catalogModel";

export default class CatalogController {

    showPage() {
        return getCategoriesAndProducts().then(params => {
            render(params);
        }).catch(error => {
            new ErrorController().showPage(error);
        }).finally(hideLoader);
    }

}