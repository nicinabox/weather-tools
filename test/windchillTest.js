import expect from 'unexpected'
import windchill from '../src/windchill'

describe('windchill', () => {
  it('calculates the windchill from windspeed and temp (F)', () => {
    expect(windchill.us(40, 10), 'to equal', 34)
    expect(windchill.us(20, 35), 'to equal', 0)
  })

  it('does not calculate for out of bounds numbers', function () {
    expect(windchill.us(51, 0), 'to equal', undefined)
  })

  it('supports SI units', function () {
    expect(windchill.si(10, 20), 'to equal', 7)
  })

  it('returns bounds used in formulas', function () {
    expect(windchill.bounds, 'to have keys', [
      'SI_SPEED_MIN',
      'SI_TEMP_MAX',
      'US_SPEED_MIN',
      'US_TEMP_MAX'
    ])
  })
})
