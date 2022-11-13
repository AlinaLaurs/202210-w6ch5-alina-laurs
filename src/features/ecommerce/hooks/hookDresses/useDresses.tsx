import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { rootState } from '../../../../infrastructure/store/store';
import { DressesType } from '../../models/dresses';
import * as ac from '../../reducerDresses/actionCreatorsDresses';
import { DressRepository } from '../../services/dressesServices/dressRepository';

export const useDresses = () => {
    const dresses = useSelector((state: rootState) => state.dresses);
    const dispatcher = useDispatch();
    const apiJacket = useMemo(() => new DressRepository(), []);

    useEffect(() => {
        apiJacket
            .getAll()
            .then((dresses) => dispatcher(ac.loadActionCreator(dresses)))
            .catch((error: Error) => console.log(error.name, error.message));
    }, [apiJacket, dispatcher]);

    const handleAdd = (newJacket: DressesType) => {
        apiJacket
            .create(newJacket)
            .then((jacket: DressesType) =>
                dispatcher(ac.addActionCreator(jacket))
            )
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleUpdate = (updateJacket: Partial<DressesType>) => {
        apiJacket
            .update(updateJacket)
            .then((jacket: DressesType) =>
                dispatcher(ac.updateActionCreator(jacket))
            )
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleDelete = (id: number) => {
        apiJacket
            .delete(id)
            .then(() => dispatcher(ac.deleteActionCreator(id)))
            .catch((error: Error) => console.log(error.name, error.message));
    };

    return {
        dresses,
        handleAdd,
        handleUpdate,
        handleDelete,
    };
};
