import { DressesType } from '../../models/dresses';

export class DressRepository {
    public url: string;
    constructor() {
        this.url =
            'https://202211w6ch1saramireyapatricia-production.up.railway.app/dresses';
    }

    getDresses(): Promise<Array<DressesType>> {
        return fetch(this.url).then((response) => response.json());
    }

    createError(response: Response) {
        const message = `Error ${response.status}: ${response.statusText}`;
        const error = new Error(message);
        error.name = 'HTTPError';
        return error;
    }

    // read / get
    getAll(): Promise<Array<DressesType>> {
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
    create(dress: Partial<DressesType>): Promise<DressesType> {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(dress),
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
    update(partialDress: Partial<DressesType>): Promise<DressesType> {
        return fetch(`${this.url}/${partialDress.id}`, {
            method: 'PATCH',
            body: JSON.stringify(partialDress),
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
