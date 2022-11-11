import { SyntheticEvent, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { rootState } from '../../../../infrastructure/store/store';
import * as ac from '../../reducer/action.creators';
import { CharactersData } from '../../data/data';
import { List } from '../list/list';
import { getStore, setStore } from '../service/storage';

export function View() {
    // const [first, setfirst] = useState([]);
    const characters = useSelector((state: rootState) => state.characters);
    const dispatcher = useDispatch();

    useEffect(() => {
        dispatcher(
            ac.loadActionCreator(
                getStore().length === 0 ? CharactersData : getStore()
            )
        );
    }, [dispatcher]);

    useEffect(() => {
        setStore(characters);
    }, [characters]);

    const initialForm = {
        id: 0,
        name: '',
        family: '',
        age: '',
        lifeStatus: true,
    };

    const [form, setForm] = useState(initialForm);

    const handleClick = (ev: SyntheticEvent) => {
        ev.preventDefault();
        if (form.name === '' || form.family === '') {
            return;
        }
        dispatcher(ac.addActionCreator(form));
        setForm(initialForm);
    };

    const handleForm = (ev: SyntheticEvent) => {
        const target = ev.target as HTMLFormElement;
        setForm({
            ...form,
            [target.name]: target.value,
        });
    };

    return (
        <div>
            <h1>Game of Thrones</h1>
            <List data={characters} dispatcher={dispatcher}></List>
            <form>
                <div>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        value={form.name}
                        onInput={handleForm}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="family"
                        id="family"
                        placeholder="Family"
                        value={form.family}
                        onInput={handleForm}
                    />
                </div>
                <div>
                    <input
                        type="number"
                        name="age"
                        id="age"
                        placeholder="Age"
                        value={form.age}
                        onInput={handleForm}
                    />
                </div>
                <div>
                    {' '}
                    Is alive?
                    <input type="checkbox" id="isAlive" onInput={handleForm} />
                </div>
                <button type="submit" onClick={handleClick}>
                    SAVE
                </button>
            </form>
        </div>
    );
}
