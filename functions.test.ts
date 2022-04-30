const {shuffleArray} = require('./utils')

const testArr = [1,2,3,4]

describe('shuffleArray should', () => {
    it('check that an array is returned', () => {
        expect(Array.isArray(shuffleArray(testArr))).toBe(true)
    } )

    it('check that it returns an array of the same length as the argument sent in', () => {
        expect(shuffleArray(testArr)).toHaveLength(testArr.length)
    })
})