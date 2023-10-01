import { mapArrToStrings } from './mapArrToStrings'

describe('Test mapArrToStrings', () => {
    test('Convertion to strings', () => {
        const result = mapArrToStrings([1, 2, 3])
        expect(result).toEqual(['1', '2', '3'])
    }
    )
})
