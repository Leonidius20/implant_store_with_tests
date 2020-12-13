import render from "./promoView";
import getPromo from "./promoModel";
import ErrorController from "../errorpage/errorController";
import {hideLoader} from "../loader/loader";

export default class PromoController {

    showPage(promoId) {
        getPromo(promoId)
            .then(promo => render(promo))
            .catch(error => new ErrorController().showPage(error))
            .finally(hideLoader);
    }

}