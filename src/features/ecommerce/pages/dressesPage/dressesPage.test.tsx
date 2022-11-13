import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../../infrastructure/store/store';
import Dresses from './dressesPage';

describe('Given DressesPage component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <Router>
                    <Provider store={appStore}>
                        <Dresses />
                    </Provider>
                </Router>
            );
        });
        test('Then it should display the title', () => {
            const element = screen.getByText(/Dresses/i);
            expect(element).toBeInTheDocument();
        });
    });
});
