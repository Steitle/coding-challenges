import sut from '.'

describe('sortByStringLength', () => {
    describe('sad path', () => {
        it('should return an empty array when passed an empty array', () => {
            const result = sut([])
            const expected = []

            expect(result).toEqual(expected)
        })

        it('should not mutate the input array', () => {
            const input = []
            const result = sut(input)

            expect(result).not.toBe(input)
        })

        it('should filter out non-strings', () => {
            const input = [1, 'dork', true, 'hello', false, 'hi', null, 'a', 'pie']
            const result = sut(input)
            const expected = ['a', 'hi', 'pie', 'dork', 'hello']

            expect(result).toEqual(expected)
        })
    })

    describe('sorting ascending (default)', () => {
        it('should return an array sorted by length shortest to longest', () => {
            const input = ['dork', 'hello', 'hi', 'a', 'pie']
            const result = sut(input)
            const expected = ['a', 'hi', 'pie', 'dork', 'hello']

            expect(result).toEqual(expected)
        })
    })

    describe('sorting descending (optional)', () => {
        it('should return an array sorted by length shortest to longest', () => {
            const input = ['dork', 'hello', 'hi', 'a', 'pie']
            const result = sut(input, true)
            const expected = ['hello', 'dork', 'pie', 'hi', 'a']

            expect(result).toEqual(expected)
        })
    })
})
