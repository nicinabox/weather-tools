import expect from 'unexpected'
import windchill from '../src/windchill'

describe('windchill', () => {
  it('calculates the windchill from windspeed and temp (F)', () => {
    expect(windchill(40, 10), 'to equal', 34)
    expect(windchill(20, 35), 'to equal', 0)
  })
})
