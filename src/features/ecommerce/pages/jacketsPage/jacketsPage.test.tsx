import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Jackets from './jacketsPage';

describe('Given JacketsPage component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <Router>
                    <Jackets />
                </Router>
            );
        });
        test('Then it should display the title', () => {
            const element = screen.getByText(/Jackets/i);
            expect(element).toBeInTheDocument();
        });
    });
});
