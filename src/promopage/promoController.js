import render from './promoView';
import { getPromo } from '../dao/promos';
import BaseController from "../base/baseController";

export default class PromoController extends BaseController {

    constructor(promoId) {
        super();
        this.promoId = promoId;
    }

    supplyData() {
        return getPromo(this.promoId).then(promo => render(promo));
    }

}