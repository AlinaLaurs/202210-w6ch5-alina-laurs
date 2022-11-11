import { AnyAction, Dispatch } from 'redux';
import { CharacterType } from '../../models/jackets';
import { setStore } from '../service/storage';
import * as ac from '../../reducer/actionCreatorsDresses';

export function ListItem({
    item,
    dispatcher,
    characters,
}: {
    item: CharacterType;
    dispatcher: Dispatch<AnyAction>;
    characters: CharacterType[];
}) {
    const handleDelete = () => {
        dispatcher(ac.deleteActionCreator(item));
        setStore(characters);
    };

    return (
        <div>
            <h2>{item.name}</h2>
            <p>{item.family}</p>
            <p>Age: {item.age}</p>
            <p>Life status: {item.lifeStatus}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}
