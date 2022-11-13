import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from './footer';

describe('Given Footer component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(<Footer />);
        });
        test('Then it should display "ISDI"', () => {
            const element = screen.getByText(/Alina/i);
            expect(element).toBeInTheDocument();
        });
    });
});
