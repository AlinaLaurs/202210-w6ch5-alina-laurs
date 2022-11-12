import { DressesType } from '../../models/dresses';

export class DressesApi {
    // Es la que va a interactuar con el servidor
    public url: string;
    constructor() {
        this.url =
            'https://202211w6ch1saramireyapatricia-production.up.railway.app/dresses';
    }

    getDresses(): Promise<Array<DressesType>> {
        return fetch(this.url).then((response) => response.json());
    }
}
