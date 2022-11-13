import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { rootState } from '../../../../infrastructure/store/store';
import { JacketsType } from '../../models/jackets';
import * as ac from '../../reducerJackets/actionCreatorsJackets';
import { JacketRepository } from '../../services/jacketsServices/jacketRepository';

export const useJackets = () => {
    const jackets = useSelector((state: rootState) => state.jackets);
    const dispatcher = useDispatch();
    const apiJacket = useMemo(() => new JacketRepository(), []);

    useEffect(() => {
        apiJacket
            .getAll()
            .then((jackets) => dispatcher(ac.loadActionCreator(jackets)))
            .catch((error: Error) => console.log(error.name, error.message));
    }, [apiJacket, dispatcher]);

    const handleAdd = (newJacket: JacketsType) => {
        apiJacket
            .create(newJacket)
            .then((jacket: JacketsType) =>
                dispatcher(ac.addActionCreator(jacket))
            )
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleUpdate = (updateJacket: Partial<JacketsType>) => {
        apiJacket
            .update(updateJacket)
            .then((jacket: JacketsType) =>
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
        jackets,
        handleAdd,
        handleUpdate,
        handleDelete,
    };
};
