import { JacketsType } from './../models/jackets';
import { JacketsReducer } from './reducerJackets';
import { actionTypesJackets } from './actionTypesJackets';

describe('Given the function JacketsReducer', () => {
    const jacketMock: JacketsType = {
        id: 20,
        image: 'https://www.allsaints.com/dw/image/v2/BHHD_PRD/on/demandware.static/-/Sites-allsaints-emea-master-catalog/default/dw7c129890/images/large/WL112X/4/WL112X-4-1.jpg?sw=2400&sh=3000&sm=fit&q=70',
        name: 'Bronte Shearling Jacket',
        brand: 'AllSaints',
        color: 'Red',
        price: '1.199',
        onSale: false,
    };

    let action: { type: string; payload: unknown };
    let state: Array<JacketsType>;

    describe('When the action is load', () => {
        beforeEach(() => {
            action = {
                type: actionTypesJackets.load,
                payload: [jacketMock],
            };
            state = [];
        });
        test('Then the returned state should be the action payload', () => {
            const result = JacketsReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });

    describe('When the action is add', () => {
        beforeEach(() => {
            action = {
                type: actionTypesJackets.add,
                payload: jacketMock,
            };
            state = [];
        });
        test('Then the returned state should include the action payload', () => {
            const result = JacketsReducer(state, action);
            expect(result).toContainEqual(action.payload);
        });
    });

    describe('When the action is update', () => {
        beforeEach(() => {
            action = {
                type: actionTypesJackets.update,
                payload: { ...jacketMock, title: 'Update jacket' },
            };
            state = [jacketMock];
        });
        test('Then the returned state should include the action payload', () => {
            const result = JacketsReducer(state, action);
            expect(result).toContainEqual(action.payload);
        });
    });

    describe('When the action is update and the id is not valid', () => {
        beforeEach(() => {
            action = {
                type: actionTypesJackets.update,
                payload: { ...jacketMock, id: '20', title: 'Update jacket' },
            };
            state = [jacketMock];
        });
        test('Then the returned state should be the original state', () => {
            const result = JacketsReducer(state, action);
            expect(result).toEqual(state);
        });
    });

    describe('When the action is delete', () => {
        beforeEach(() => {
            action = {
                type: actionTypesJackets.delete,
                payload: jacketMock,
            };
            state = [jacketMock];
        });
        test('Then the returned state should not include the action payload', () => {
            const result = JacketsReducer(state, action);
            expect(result).toEqual([jacketMock]);
        });
    });

    describe('When the action is delete and the id is not valid', () => {
        beforeEach(() => {
            action = {
                type: actionTypesJackets.delete,
                payload: { ...jacketMock, id: '20' },
            };
            state = [jacketMock];
        });
        test('Then the returned state should be the original state', () => {
            const result = JacketsReducer(state, action);
            expect(result).toEqual(state);
        });
    });

    describe('When the action is any other', () => {
        beforeEach(() => {
            action = {
                type: '',
                payload: null,
            };
            state = [jacketMock];
        });
        test('Then the returned state should be ...', () => {
            const result = JacketsReducer(state, action);
            expect(result).toEqual(state);
        });
    });
});
