import render from './catalogView';
import {getCategoriesAndProducts} from './catalogModel';
import BaseController from "../base/baseController";

export default class CatalogController extends BaseController {

    supplyData() {
        return getCategoriesAndProducts().then(params => render(params));
    }

}