import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Dresses from './dressesPage';

describe('Given DressesPage component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <Router>
                    <Dresses />
                </Router>
            );
        });
        test('Then it should display the title', () => {
            const element = screen.getByText(/Dresses/i);
            expect(element).toBeInTheDocument();
        });
    });
});
