import { JacketsType } from '../models/jackets';
import { createAction } from '@reduxjs/toolkit';
import { actionTypesJackets } from './actionTypesJackets';

export const loadActionCreator = createAction<JacketsType[]>(
    actionTypesJackets.load
);

export const addActionCreator = createAction<JacketsType>(
    actionTypesJackets.add
);

export const updateActionCreator = createAction<JacketsType>(
    actionTypesJackets.update
);

export const deleteActionCreator = createAction<JacketsType['id']>(
    actionTypesJackets.delete
);
