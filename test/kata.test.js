const Greeter = require('../src/kata')
const LegacyDate = Date

test('should return a greeting as "Hello <name>"', () => {
    const greeter = new Greeter('Albert')
    expect(greeter.greet()).toBe("Hello Albert");
})

test('should trim the input', () => {
    const greeter = new Greeter('   Albert ')
    expect(greeter.greet()).toBe("Hello Albert");
})

test('should capitalize the first letter of the name', () => {
    const greeter = new Greeter('   albert ')
    expect(greeter.greet()).toBe("Hello Albert");
})

test('greet returns Good morning <name> when the time is 06:00-12:00', () => {
    const constantDateMorning = new LegacyDate('2019-12-23T09:31:53')
    Date = jest.fn(() => constantDateMorning)
    const greeter = new Greeter('   albert ')
    expect(greeter.greet()).toBe("Good morning Albert");
})

test('greet returns Good morning <name> when the time is 18:00-22:00', () => {
    const constantDateEvening = new LegacyDate('2019-12-23T21:01:53')
    Date = jest.fn(() => constantDateEvening)
    const greeter = new Greeter('   albert ')
    expect(greeter.greet()).toBe("Good evening Albert");
})

test('greet returns Good night <name> when the time is 22:00-06:00 before midnight', () => {
    const constantDateNightBeforeMidnight = new LegacyDate('2019-12-23T23:01:53')
    Date = jest.fn(() => constantDateNightBeforeMidnight)
    const greeter = new Greeter('   albert ')
    expect(greeter.greet()).toBe("Good night Albert");
})

test('greet returns Good night <name> when thetime is 22:00-06:00 after midnight', () => {
    const constantDateNightAfterMidnight = new LegacyDate('2019-12-23T02:01:53')
    Date = jest.fn(() => constantDateNightAfterMidnight)
    const greeter = new Greeter('   albert ')
    expect(greeter.greet()).toBe("Good night Albert");
})

test('greet returns Hello <name> when the time is not defined', () => {
    const constantDateDefaults = new LegacyDate('2019-12-23T14:01:53')
    Date = jest.fn(() => constantDateDefaults)
    const greeter = new Greeter('   albert ')
    expect(greeter.greet()).toBe("Hello Albert");
})
