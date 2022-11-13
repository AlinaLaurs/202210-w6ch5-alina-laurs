import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Sales from './salesPage';

describe('Given SalesPage component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <Router>
                    <Sales />
                </Router>
            );
        });
        test('Then it should display the title', () => {
            const element = screen.getByText(/Sales/i);
            expect(element).toBeInTheDocument();
        });
    });
});
