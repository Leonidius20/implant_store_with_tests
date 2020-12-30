export default class BaseView {

    constructor(controller) {
        this.controller = controller;
    }

    render() {
        this.rerender();
        this.postRender();
    }

    rerender() {
        document.getElementById('container').innerHTML = this.getHtml();
    }

    postRender() {}

}