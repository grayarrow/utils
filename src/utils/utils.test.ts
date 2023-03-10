import InstrumentationStatistics from './InstrumentationStatistics'
import { safeJsonToString } from './skky'

describe('Instrumentation Statistics', () => {
  test('string2', () => {
    const msg = 'string'

    const istats = new InstrumentationStatistics()
    istats.addProcessed(msg)

    expect(istats.messageString()).toContain('Processed 1')
    expect(istats.messageString()).toContain('Messages:')
    expect(istats.messageString()).toContain('string')
  })

  test('string array', () => {
    const msg = ['string', 'array']

    const istats = new InstrumentationStatistics()
    istats.addProcessed(msg)

    expect(istats.messageString()).toContain('Processed 1')
    expect(istats.messageString()).toContain(`
Messages:
`)
    expect(istats.messageString()).toContain(`string
`)
    expect(istats.messageString()).toContain('array')
  })

  test('object', () => {
    const msg = { id: 'string', ts: 2234443 }

    const istats = new InstrumentationStatistics()
    istats.addProcessed(safeJsonToString(msg))

    expect(istats.messageString()).toContain('Processed 1')
    expect(istats.messageString()).toContain(`
Messages:
`)
    expect(istats.messageString()).toContain('"string"')
    expect(istats.messageString()).toContain('"ts":2234443')
  })
})
