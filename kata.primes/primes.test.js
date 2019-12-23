const primes = require('./primes')

test("1 should return []", () => {
    expect(primes(1)).toStrictEqual([])
})

test("2 should return [2]", () => {
    expect(primes(2)).toStrictEqual([2])
})