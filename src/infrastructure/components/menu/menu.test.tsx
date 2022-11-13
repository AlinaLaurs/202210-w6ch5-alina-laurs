import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Menu } from './menu';

describe('Given Layout component', () => {
    describe('When we render the component', () => {
        test('Then it should display "Jackets"', () => {
            render(
                <Router>
                    <Menu />
                </Router>
            );
            const element = screen.getByText(/Jackets/i);
            expect(element).toBeInTheDocument();
        });
    });
});
