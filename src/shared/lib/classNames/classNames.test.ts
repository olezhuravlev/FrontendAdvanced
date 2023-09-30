import { myClassNames } from './classNames'

describe('Test: classNames', () => {
    test('Function myClassNames - first param only', () => {
        expect(myClassNames('someClass')).toBe('someClass')
    })

    test('Function myClassNames - additional classes', () => {
        const expected = 'someClass testClass1 testClass2'
        expect(myClassNames('someClass', {}, ['testClass1', 'testClass2'])).toBe(expected)
    })

    test('Function myClassNames - additional classes & mods', () => {
        const expected = 'someClass testClass1 testClass2 hovered scrollable'
        expect(myClassNames('someClass', {
            hovered: true,
            scrollable: true,
            notNeeded: false,
            notDefined: undefined
        }, ['testClass1', 'testClass2'])).toBe(expected)
    })
})
