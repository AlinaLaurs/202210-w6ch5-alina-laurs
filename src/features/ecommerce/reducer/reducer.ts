import { CharactersData } from '../data/data';
import { CharacterType } from '../models/jackets';
import { createReducer } from '@reduxjs/toolkit';
import * as ac from './action.creators';

const initialState: CharacterType[] = CharactersData;

export const CharacterReducer = createReducer(initialState, (builder) => {
    builder.addCase(ac.loadActionCreator, (_state, action) => action.payload);
    builder.addCase(ac.addActionCreator, (state, action) => [
        ...state,
        action.payload,
    ]);
    builder.addCase(ac.updateActionCreator, (state, action) =>
        state.map((item) =>
            item.name === action.payload.name ? action.payload : item
        )
    );
    builder.addCase(ac.deleteActionCreator, (state, action) =>
        state.filter((item) => item.name !== action.payload.name)
    );
    builder.addDefaultCase((state) => state);
});
