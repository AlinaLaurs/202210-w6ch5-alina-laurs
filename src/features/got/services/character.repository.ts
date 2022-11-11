import { CharacterType } from '../models/character';
import { Repository } from './repository';

export class CharacterTypeRepository implements Repository<CharacterType> {
    url: string;
    constructor(url = '') {
        this.url = url ? url : (process.env.REACT_APP_URL_CHARACTERS as string);
    }

    createError(response: Response) {
        const message = `Error ${response.status}: ${response.statusText}`;
        const error = new Error(message);
        error.name = 'HTTPError';
        return error;
    }

    // read / get
    getAll(): Promise<Array<CharacterType>> {
        return fetch(this.url).then((response) => {
            if (response.ok) return response.json();
            throw this.createError(response);
        });
    }

    // create / post
    create(character: Partial<CharacterType>): Promise<CharacterType> {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(character),
            headers: {
                'content-type': 'application/json',
            },
        }).then((response) => {
            if (response.ok) return response.json();
            throw this.createError(response);
        });
    }

    // delete
    delete(id: number): Promise<void> {
        return fetch(`${this.url}/${id}`, {
            method: 'DELETE',
        }).then((response) => {
            if (!response.ok) throw this.createError(response);
        });
    }

    // uptate / patch
    update(partialCharacter: Partial<CharacterType>): Promise<CharacterType> {
        return fetch(`${this.url}/${partialCharacter.id}`, {
            method: 'PATCH',
            body: JSON.stringify(partialCharacter),
            headers: {
                'content-type': 'application/json',
            },
        }).then((response) => {
            if (response.ok) return response.json();
            throw this.createError(response);
        });
    }
}
