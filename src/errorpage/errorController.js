import render from "./errorView";

export default class ErrorController {

    showPage(error) {
        render(error.message);
    }

}