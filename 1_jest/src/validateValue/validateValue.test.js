const validateValueTest = require('./validateValue')

test('Валидное значение', () => {
    expect(validateValueTest(50)).toBe(true)
})

describe( 'validateValue', () => {
    test('Корректное значение', () => {
        expect(validateValueTest(50)).toBe(true)
    })
    test('Меньше корректного', () => {
        expect(validateValueTest(-1)).toBe(false)
    })
    test('Больше корректного', () => {
        expect(validateValueTest(101)).toBe(false)
    })
    test('Пограничное значение снизу', () => {
        expect(validateValueTest(0)).toBe(true)
    })
    test('Пограничное значение сверху', () => {
        expect(validateValueTest(100)).toBe(true)
    })
})