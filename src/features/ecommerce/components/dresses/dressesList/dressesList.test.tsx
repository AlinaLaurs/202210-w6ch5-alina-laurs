import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { DressList } from '../dressesList/dressesList';
import { DressesType } from '../../../models/dresses';

describe('Given the DressesList component', () => {
    describe('When we render the component', () => {
        test('then it should display the Dresses list', () => {
            const dressMock: DressesType[] = [
                {
                    id: 1,
                    image: '',
                    name: 'Dress',
                    brand: '',
                    color: '',
                    price: '',
                    onSale: false,
                },
            ];
            render(
                <>
                    <Router>
                        <DressList item={dressMock}></DressList>
                    </Router>
                </>
            );
            const element = screen.getByText(/Dress/i);
            expect(element).toBeInTheDocument();
        });
    });
});
