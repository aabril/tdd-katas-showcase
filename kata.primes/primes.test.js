const primes = require('./primes')

test("1 should return []", () => {
    expect(primes(1)).toStrictEqual([])
})