import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../../infrastructure/store/store';
import Jackets from './jacketsPage';

describe('Given JacketsPage component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <Router>
                    <Provider store={appStore}>
                        <Jackets />
                    </Provider>
                </Router>
            );
        });
        test('Then it should display the title', () => {
            const element = screen.getByText(/page/i);
            expect(element).toBeInTheDocument();
        });
    });
});
