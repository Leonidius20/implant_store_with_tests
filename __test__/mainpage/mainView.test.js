import render from "../../src/mainpage/mainView";
import getHtml from "../../src/mainpage/mainTemplate";

describe('MainView', () => {
    document.body.innerHTML = '<div id="container"></div>';

    it('should render promos and featured items', () => {
        const params = {
            promos: [
                {
                    name: 'Promo1',
                    short_description: 'Promo1'
                },
                {
                    name: 'Promo2',
                    short_description: 'Promo2'
                },
            ],
            featuredItems: [
                {
                    id: 1,
                    name: 'Item1',
                    price: '200$'
                },
                {
                    id: 2,
                    name: 'Item2',
                    price: '300$'
                }
            ],
        };

        const html = getHtml(params);
        render(params);

        expect(document.getElementById('container').innerHTML).toBe(html);

        //expect(mockSetter).toHaveBeenCalledWith(populatedTemplate);
    });
})