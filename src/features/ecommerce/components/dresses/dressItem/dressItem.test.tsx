import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../../../infrastructure/store/store';
import { useDresses } from '../../../hooks/hookDresses/useDresses';
import { DressesType } from '../../../models/dresses';
import { DressItem } from './dressItem';

jest.mock('../../../hooks/hookDresses/useDresses');

describe('Given DressItem component', () => {
    describe('When we render the component', () => {
        test('Then it should display', async () => {
            const dressMock: DressesType = {
                id: 2,
                image: '',
                name: 'Dress',
                brand: '',
                color: '',
                price: '',
                onSale: false,
            };
            (useDresses as jest.Mock).mockReturnValue({
                products: [dressMock],
            });
            render(
                <Router>
                    <Provider store={appStore}>
                        <DressItem item={dressMock} />
                    </Provider>
                </Router>
            );
            const element = await screen.findByText(/Dress/i);
            expect(element).toBeInTheDocument();
        });
    });
});
