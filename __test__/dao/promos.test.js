import {getPromo} from "../../src/dao/promos";
import 'regenerator-runtime/runtime';

jest.mock('../../src/dao/base', () => {
    return {
        fetchFromEndpoint: () => Promise.resolve([
            { id: 1, name: 'Promo1' },
            { id: 2, name: 'Promo2' },
        ])
    };
});

describe('PromoDao', () => {
    it('should find a promo with a set id', async () => {
        const promo2 = await getPromo(2);

        expect(promo2).toEqual({ id: 2, name: 'Promo2' });
    });

    it('should throw error when product with specified id is not found', async () => {
        const mockFunction = jest.fn();

        try {
            await getPromo(3);
            mockFunction();
        } catch (e) {
            expect(e).not.toBeNull();
        }

        expect(mockFunction).not.toHaveBeenCalled();
    });
});