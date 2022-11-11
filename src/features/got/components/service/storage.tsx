import { CharacterType } from '../../models/character';

const store = 'CharactersData';

export const getStore = (): CharacterType[] => {
    const dataString = localStorage.getItem(store);
    if (!dataString) return [];
    return JSON.parse(dataString);
};

export const setStore = (data: CharacterType[]) => {
    localStorage.setItem(store, JSON.stringify(data));
};
