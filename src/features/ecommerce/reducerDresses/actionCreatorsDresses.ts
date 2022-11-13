import { DressesType } from '../models/dresses';
import { createAction } from '@reduxjs/toolkit';
import { actionTypesDresses } from './actionTypesDresses';

export const loadActionCreator = createAction<DressesType[]>(
    actionTypesDresses.load
);

export const addActionCreator = createAction<DressesType>(
    actionTypesDresses.add
);

export const updateActionCreator = createAction<DressesType>(
    actionTypesDresses.update
);

export const deleteActionCreator = createAction<DressesType['id']>(
    actionTypesDresses.delete
);
