import BaseView from "../../src/base/baseView";

describe('BaseView', () => {
    it('should render data and call postRender()', () => {
        const view = new BaseView(null);
        view.rerender = jest.fn();
        view.postRender = jest.fn();

        view.render();

        expect(view.rerender).toHaveBeenCalled();
        expect(view.postRender).toHaveBeenCalled();
    });

    it('should set html', () => {
        document.body.innerHTML = '<div id="container"></div>';

        const view = new BaseView(null);
        view.getHtml = () => '<p>example</p>';

        view.rerender();

        expect(document.body.innerHTML).toEqual('<div id="container"><p>example</p></div>');
    });

});