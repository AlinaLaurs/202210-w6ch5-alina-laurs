import { JacketsType } from '../../models/jackets';

export class JacketApi {
    // Es la que va a interactuar con el servidor
    public url: string;
    constructor() {
        this.url =
            'https://202211w6ch1saramireyapatricia-production.up.railway.app/jackets';
    }

    getJackets(): Promise<Array<JacketsType>> {
        return fetch(this.url).then((response) => response.json());
    }
}
