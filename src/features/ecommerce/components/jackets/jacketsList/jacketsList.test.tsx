import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { JacketList } from '../jacketsList/jacketsList';
import { JacketsType } from '../../../models/jackets';

describe('Given the JacketsList component', () => {
    describe('When we render the component', () => {
        test('then it should display the Jackets list', () => {
            const jacketMock: JacketsType[] = [
                {
                    id: 1,
                    image: '',
                    name: 'Dalby Suede Biker Jacket',
                    brand: '',
                    color: '',
                    price: '',
                    onSale: false,
                },
            ];
            render(
                <>
                    <Router>
                        <JacketList item={jacketMock}></JacketList>
                    </Router>
                </>
            );
            const element = screen.getByText(/Jacket/i);
            expect(element).toBeInTheDocument();
        });
    });
});
