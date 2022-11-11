import { CharacterType } from '../models/jackets';
import { createAction } from '@reduxjs/toolkit';
import { actionTypes } from './action.types';

export const loadActionCreator = createAction<CharacterType[]>(
    actionTypes.load
);

export const addActionCreator = createAction<CharacterType>(actionTypes.add);

export const updateActionCreator = createAction<CharacterType>(
    actionTypes.update
);

export const deleteActionCreator = createAction<CharacterType>(
    actionTypes.delete
);
