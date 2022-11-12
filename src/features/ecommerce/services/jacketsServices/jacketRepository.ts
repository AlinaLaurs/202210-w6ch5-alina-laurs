import { JacketsType } from '../../models/jackets';

export class JacketRepository {
    public url: string;
    constructor() {
        this.url =
            'https://202211w6ch1saramireyapatricia-production.up.railway.app/jackets';
    }

    getJackets(): Promise<Array<JacketsType>> {
        return fetch(this.url).then((response) => response.json());
    }

    createError(response: Response) {
        const message = `Error ${response.status}: ${response.statusText}`;
        const error = new Error(message);
        error.name = 'HTTPError';
        return error;
    }

    // read / get
    getAll(): Promise<Array<JacketsType>> {
        return fetch(this.url)
            .then((response) => {
                if (response.ok) return response.json();
                throw this.createError(response);
            })
            .catch((error) => {
                return `${error}`;
            });
    }

    // create / post
    create(jacket: Partial<JacketsType>): Promise<JacketsType> {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(jacket),
            headers: {
                'content-type': 'application/json',
            },
        })
            .then((response) => {
                if (response.ok) return response.json();
                throw this.createError(response);
            })
            .catch((error) => {
                return `${error}`;
            });
    }

    // delete
    delete(id: number): Promise<void> {
        return fetch(`${this.url}/${id}`, {
            method: 'DELETE',
        })
            .then((response) => {
                if (!response.ok) throw this.createError(response);
            })
            .catch((error) => {
                return `${error}` as unknown as void;
            });
    }

    // uptate / patch
    update(partialJacket: Partial<JacketsType>): Promise<JacketsType> {
        return fetch(`${this.url}/${partialJacket.id}`, {
            method: 'PATCH',
            body: JSON.stringify(partialJacket),
            headers: {
                'content-type': 'application/json',
            },
        })
            .then((response) => {
                if (response.ok) return response.json();
                throw this.createError(response);
            })
            .catch((error) => {
                return `${error}`;
            });
    }
}
