import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../../../infrastructure/store/store';
import { useJackets } from '../../../hooks/hookJackets/useJackets';
import { JacketsType } from '../../../models/jackets';
import { JacketItem } from './jacketItem';

jest.mock('../../../hooks/hookJackets/useJackets');

describe('Given JacketItem component', () => {
    describe('When we render the component', () => {
        test('Then it should display', async () => {
            const jacketMock: JacketsType = {
                id: 1,
                image: '',
                name: 'Dalby Suede Biker Jacket',
                brand: '',
                color: '',
                price: '',
                onSale: false,
            };
            (useJackets as jest.Mock).mockReturnValue({
                products: [jacketMock],
            });
            render(
                <Router>
                    <Provider store={appStore}>
                        <JacketItem item={jacketMock} />
                    </Provider>
                </Router>
            );
            const element = await screen.findByText(/Dalby/i);
            expect(element).toBeInTheDocument();
        });
    });
});
