import { configureStore } from '@reduxjs/toolkit';
import { CharacterReducer } from '../../features/ecommerce/reducerJackets/reducerJackets';

export const appStore = configureStore({
    reducer: {
        characters: CharacterReducer,
    },
});

export type rootStore = typeof appStore;
export type rootState = ReturnType<typeof appStore.getState>;
