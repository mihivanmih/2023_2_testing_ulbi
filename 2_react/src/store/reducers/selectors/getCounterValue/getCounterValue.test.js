import { getCounterValue } from './getCounterValue'


describe('getCounterValue', () => {
    test('work with empty state', async () => {
        expect(getCounterValue({})).toBe(0)
    })
    test('work with filled state', async () => {
        expect(getCounterValue({
            counter: {
                value: 1000
            }
        })).toBe(1000)
    })
})