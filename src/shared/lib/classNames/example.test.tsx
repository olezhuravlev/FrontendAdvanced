import { square } from './example'

describe('Example tests', () => {
    test('Test square function', () => {
        expect(square(2)).toBe(4)
    })
    test('Test mocked Math.pow', () => {
        const spy = jest.spyOn(Math, 'pow')

        square(0)
        expect(spy).toBeCalledTimes(0)

        square(1)
        expect(spy).toBeCalledTimes(0)

        square(2)
        expect(spy).toBeCalledTimes(1)
    })
    test('Test mocked Math.pow again (check mock counter dropped) ', () => {
        const spy = jest.spyOn(Math, 'pow')

        square(0)
        expect(spy).toBeCalledTimes(0)
    })

    afterEach(() => {
        // To reset mock counter of functions' invocations.
        jest.clearAllMocks()
    })
})
