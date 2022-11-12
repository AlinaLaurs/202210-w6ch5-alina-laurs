import { DressRepository } from './dressRepository';

const mockDress = {
    id: 30,
    image: 'https://www.allsaints.com/dw/image/v2/BHHD_PRD/on/demandware.static/-/Sites-allsaints-emea-master-catalog/default/dwf1097f95/images/large/WD267X/79/WD267X-79-1.jpg?sw=2400&sh=3000&sm=fit&q=70',
    name: 'Dazzle Oversized Jumper Dress',
    brand: 'AllSaints',
    color: 'Gold',
    price: '169',
    onSale: false,
};

describe('Given DressRepository Service', () => {
    describe('When we instantiate it', () => {
        let service: DressRepository;
        beforeEach(() => {
            service = new DressRepository();
        });

        test('Then if i use service.error(), it should return an error', () => {
            const error = service.createError(
                new Response('Error', {
                    status: 400,
                    statusText: 'error',
                })
            );
            const result = new Error('Error 400: error');
            result.name = 'HTTPError';
            expect(error).toEqual(result);
        });

        // get
        test(`Then if I use service.getDress() 
            it should return a Promise of an Array of Dresses`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue([]),
            });
            const result = await service.getDresses();
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([]);
        });

        // getAll
        test(`Then if I use service.getAllDress() 
            it should not return a Promise of an Array of Dresses`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue([]),
            });
            const result = await service.getAll();
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([]);
        });
        test(`Then if I use service.getAllDress() 
            it should return a Promise of an Array of Dresses`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: 'error',
            });
            const expectedResult = await service.getAll();
            const result = new Error('Error 400: error');
            result.name = 'HTTPError';
            expect(expectedResult).toBe(result.toString());
        });

        // create / post
        test(`Then if I use service.createDress()
                it should return a Promise of the created dress`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockDress),
            });
            const result = await service.create(mockDress);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockDress);
        });
        test(`Then if I use service.createDress()
                it should not return a Promise of the created dress`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: 'error',
            });
            const expectedResult = await service.getAll();
            const result = new Error('Error 400: error');
            result.name = 'HTTPError';
            expect(expectedResult).toBe(result.toString());
        });

        // delete
        test(`Then if I use service.deleteDress()
                it should not return a Promise of the created dress`, async () => {
            global.fetch = jest.fn().mockResolvedValue(mockDress);
            const result = await service.delete(mockDress.id);
            expect(fetch).toHaveBeenCalled();
            expect(result).toBeUndefined();
        });
        test(`Then if I use service.deleteDress()
                it should return a Promise of the created dress`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: 'Error',
            });
            const expectedResult = await service.delete(mockDress.id);
            const result = new Error('Error 400: error');
            result.name = 'HTTPError';
            expect(expectedResult).toBe(result.toString());
        });

        // uptate / patch
        test(`Then if I use service.updateDress()
                it should return a Promise of the created dress`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockDress),
            });
            const result = await service.update(mockDress);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockDress);
        });
        test(`Then if I use service.updateDress()
                it should not return a Promise of the created dress`, async () => {
            const partialMock = {
                name: 'Curro',
            };
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: 'error',
            });
            const expectedResult = await service.update(partialMock);
            const result = new Error('Error 400: error');
            result.name = 'HTTPError';
            expect(expectedResult).toBe(result.toString());
        });
    });
});
