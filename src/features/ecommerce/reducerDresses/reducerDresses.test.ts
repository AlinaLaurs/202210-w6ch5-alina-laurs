import { DressesType } from '../models/dresses';
import { actionTypesDresses } from './actionTypesDresses';
import { DressesReducer } from './reducerDresses';

describe('Given the function DressesReducer', () => {
    const dressMock: DressesType = {
        id: 21,
        image: 'https://www.allsaints.com/dw/image/v2/BHHD_PRD/on/demandware.static/-/Sites-allsaints-emea-master-catalog/default/dwf1097f95/images/large/WD267X/79/WD267X-79-1.jpg?sw=2400&sh=3000&sm=fit&q=70',
        name: 'Dazzle Oversized Jumper Dress',
        brand: 'AllSaints',
        color: 'Gold',
        price: '169',
        onSale: false,
    };

    let action: { type: string; payload: unknown };
    let state: Array<DressesType>;

    describe('When the action is load', () => {
        beforeEach(() => {
            action = {
                type: actionTypesDresses.load,
                payload: [dressMock],
            };
            state = [];
        });
        test('Then the returned state should be the action payload', () => {
            const result = DressesReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });

    describe('When the action is add', () => {
        beforeEach(() => {
            action = {
                type: actionTypesDresses.add,
                payload: dressMock,
            };
            state = [];
        });
        test('Then the returned state should include the action payload', () => {
            const result = DressesReducer(state, action);
            expect(result).toContainEqual(action.payload);
        });
    });

    describe('When the action is update', () => {
        beforeEach(() => {
            action = {
                type: actionTypesDresses.update,
                payload: { ...dressMock, title: 'Update dress' },
            };
            state = [dressMock];
        });
        test('Then the returned state should include the action payload', () => {
            const result = DressesReducer(state, action);
            expect(result).toContainEqual(action.payload);
        });
    });

    describe('When the action is update and the id is not valid', () => {
        beforeEach(() => {
            action = {
                type: actionTypesDresses.update,
                payload: { ...dressMock, id: '21', title: 'Update dress' },
            };
            state = [dressMock];
        });
        test('Then the returned state should be the original state', () => {
            const result = DressesReducer(state, action);
            expect(result).toEqual(state);
        });
    });

    describe('When the action is delete', () => {
        beforeEach(() => {
            action = {
                type: actionTypesDresses.delete,
                payload: dressMock,
            };
            state = [dressMock];
        });
        test('Then the returned state should not include the action payload', () => {
            const result = DressesReducer(state, action);
            expect(result).toEqual([dressMock]);
        });
    });

    describe('When the action is delete and the id is not valid', () => {
        beforeEach(() => {
            action = {
                type: actionTypesDresses.delete,
                payload: { ...dressMock, id: '21' },
            };
            state = [dressMock];
        });
        test('Then the returned state should be the original state', () => {
            const result = DressesReducer(state, action);
            expect(result).toEqual(state);
        });
    });

    describe('When the action is any other', () => {
        beforeEach(() => {
            action = {
                type: '',
                payload: null,
            };
            state = [dressMock];
        });
        test('Then the returned state should be ...', () => {
            const result = DressesReducer(state, action);
            expect(result).toEqual(state);
        });
    });
});
