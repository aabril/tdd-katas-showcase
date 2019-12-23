const StringCalculator = require('./string.calculator')

test("An empty string should returns zero '' => 0", () => {
    const result = StringCalculator.add('')
    expect(result).toBe(0);
})

test("A single number returns the value '1' => 1 '2' => 2", () => {
    const resultOne = StringCalculator.add('1')
    expect(typeof resultOne).toBe("number");
    expect(resultOne).toBe(1)

    const resultTwo = StringCalculator.add('2')
    expect(typeof resultTwo).toBe("number");
    expect(resultTwo).toBe(2)    
})

test("comma delimited, returns the sum '1,2' => 3 '10,20' => 30", () => {
    expect(StringCalculator.add("1,2")).toBe(3)
})

test("Two numbers, newline delimited, returns the sum '1\n2' => 3", () => {
    expect(StringCalculator.add("1\n2")).toBe(3)
})