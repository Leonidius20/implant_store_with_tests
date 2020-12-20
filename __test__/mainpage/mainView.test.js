import render from "../../src/mainpage/mainView";
import populatedTemplate from './mainTemplatePopulated.html';

/*jest.mock('../../mainpage/templates/mainTemplate.html', () => {
    return '<div class="carousel carousel-inner">${promos}</div><div>${featuredItems}</div>'
});

jest.mock('../../mainpage/templates/carouselItemTemplate.html', () => {
    return '<div class="carousel-item"><h5>${name}</h5><p>${short_description}</p></div>';
});

jest.mock('../../catalog/templates/productCardTemplate.html', () => {
   return '<div class="product_card"><h5>${name}</h5><h6>${price}</h6><h6>${id}</h6></div>';
});*/

jest.mock('../../src/mainpage/mainView', () => {
    return {
        ...jest.requireActual('')
    }
})

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
        }

        const mockSetter = jest.fn();

        Object.defineProperty(document.getElementById('container'), 'innerHTML', {
            set: mockSetter
        });



        Object.defineProperty(document, 'getElementsByClassName', {
            value: () => {
                return [
                    {
                        children: [
                            {
                                classList: {
                                    add: () => {}
                                }
                            }
                        ]
                    }
                ]
            }
        });

        Object.defineProperty(window, '$', {
            value: () => {
                return {
                    carousel: () => {}
                }
            }
        });

        render(params);

        expect(mockSetter).toHaveBeenCalledWith(populatedTemplate);
    });
})