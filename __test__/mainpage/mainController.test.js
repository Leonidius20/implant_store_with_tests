import MainController from "../../src/mainpage/mainController";
import 'regenerator-runtime/runtime';
import render from "../../src/mainpage/mainView";

jest.mock('../../src/dao/promos', () => {
    return {
        getPromos: () => Promise.resolve([
            {id: 1, name: 'promo1'}, {id: 2, name: 'promo2'}
        ])
    }
});

jest.mock('../../src/dao/products', () => {
    return {
        getFeaturedProducts: () => Promise.resolve([
            {id: 1, name: 'product1', recommended: true},
            {id: 2, name: 'product2', recommended: true}
        ])
    }
});

jest.mock('../../src/mainpage/mainView');

describe('MainController', () => {
    it('should supply data to MainView', async () => {
        await new MainController().supplyData();

        expect(render).toHaveBeenCalledWith({
            promos: [
                {id: 1, name: 'promo1'}, {id: 2, name: 'promo2'}
            ],
            featuredItems: [
                {id: 1, name: 'product1', recommended: true},
                {id: 2, name: 'product2', recommended: true}
            ]
        });

    });
})