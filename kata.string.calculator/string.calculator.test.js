const StringCalculator = require('./string.calculator')

test("An empty string should returns zero '' => 0", () => {
    const result = StringCalculator.add('')
    expect(result).toBe(0);
})