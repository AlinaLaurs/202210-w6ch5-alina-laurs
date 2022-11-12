import { configureStore } from '@reduxjs/toolkit';
import { JacketsReducer } from '../../features/ecommerce/reducerJackets/reducerJackets';
import { DressesReducer } from '../../features/ecommerce/reducerDresses/reducerDresses';

export const appStore = configureStore({
    reducer: {
        jackets: JacketsReducer,
        dresses: DressesReducer,
    },
});

export type rootStore = typeof appStore;
export type rootState = ReturnType<typeof appStore.getState>;
