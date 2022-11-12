import { JacketRepository } from './jacketRepository';

const mockJacket = {
    id: 40,
    image: 'https://www.allsaints.com/dw/image/v2/BHHD_PRD/on/demandware.static/-/Sites-allsaints-emea-master-catalog/default/dwf1097f95/images/large/WD267X/79/WD267X-79-1.jpg?sw=2400&sh=3000&sm=fit&q=70',
    name: 'Dazzle Oversized Jumper Dress',
    brand: 'AllSaints',
    color: 'Gold',
    price: '169',
    onSale: false,
};

describe('Given JacketRepository Service', () => {
    describe('When we instantiate it', () => {
        let service: JacketRepository;
        beforeEach(() => {
            service = new JacketRepository();
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

        //get
        test(`Then if I use service.getFountainpensType()
            it should return a Promise of an Array of FountainpensType`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue([]),
            });
            const result = await service.getJackets();
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([]);
        });

        // getAll
        test(`Then if I use service.getFountainpensType()
            it should not return a Promise of an Array of FountainpensType`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue([]),
            });
            const result = await service.getAll();
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([]);
        });
        test(`Then if I use service.getFountainpensType()
            it should not return a Promise of an Array of Jackets`, async () => {
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
        test(`Then if I use service.createFountainpensType()
                it should return a Promise of the crated fountainpen`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockJacket),
            });
            const result = await service.create(mockJacket);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockJacket);
        });
        test(`Then if I use service.createFountainpensType()
                it should return a Promise of the created fountainpen`, async () => {
            const partialMock = {
                name: 'paco',
            };
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: 'error',
            });
            const expectedResult = await service.create(partialMock);
            const result = new Error('Error 400: error');
            result.name = 'HTTPError';
            expect(expectedResult).toBe(result.toString());
        });

        // delete
        test(`Then if I use service.deleteFountainpensType()
                it should return a Promise of the deleted fountainpen`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                mockJacket,
            });
            const result = await service.delete(mockJacket.id);
            expect(fetch).toHaveBeenCalled();
            expect(result).toBeUndefined();
        });
        test(`Then if I use service.deleteFountainpensType()
                it should return a Promise of the delete fountainpen`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: 'error',
            });
            const expectedResult = await service.delete(mockJacket.id);
            const result = new Error('Error 400: error');
            result.name = 'HTTPError';
            expect(expectedResult).toBe(result.toString());
        });

        // update
        test(`Then if I use service.updateFountainpensType(), if something goes wrong, then
            it should return an error of FountainpensType`, async () => {
            const partialMock = {
                name: 'paco',
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
        test(`Then if I use service.updateFountainpensType()
                it should return a Promise of the updated fountainpen`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockJacket),
            });
            const result = await service.update(mockJacket);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockJacket);
        });
    });
});
