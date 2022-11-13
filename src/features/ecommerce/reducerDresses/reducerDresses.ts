import { createReducer } from '@reduxjs/toolkit';
import { DressesType } from '../models/dresses';
import * as ac from './actionCreatorsDresses';

const initialState: DressesType[] = [];

export const DressesReducer = createReducer(initialState, (builder) => {
    builder.addCase(ac.loadActionCreator, (_state, action) => action.payload);
    builder.addCase(ac.addActionCreator, (state, action) => [
        ...state,
        action.payload,
    ]);
    builder.addCase(ac.updateActionCreator, (state, action) =>
        state.map((item) =>
            item.id === action.payload.id ? action.payload : item
        )
    );
    builder.addCase(ac.deleteActionCreator, (state, action) =>
        state.filter((item) => item.id !== action.payload)
    );
    builder.addDefaultCase((state) => state);
});
