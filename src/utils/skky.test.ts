import { arrayFirst, safestr, timeDifferenceString } from './skky'

describe('index', () => {
  describe('myPackage', () => {
    it('should return a string containing the message', () => {
      const message = 'hello'

      const result = arrayFirst(['hello', 'bb'])

      expect(result).toMatch(message)
    })
  })
})

describe('Helpers', () => {
  test('Time Difference', () => {
    const dtNow = new Date()
    const startDate = new Date(+dtNow)

    startDate.setSeconds(startDate.getSeconds() - 2)
    const str = timeDifferenceString(startDate)

    // console.log('Time Difference:', str)
    expect(safestr(str).length).toBeGreaterThan(1)
  })
})
