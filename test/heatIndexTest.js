import expect from 'unexpected'
import * as noaaHeatIndex from '../src/heatIndex'

describe('noaaHeatIndex', () => {
  it('calculates the heat index from temp (F) and relative humidity', () => {
    expect(noaaHeatIndex.heatIndex(90, 85), 'to equal', 117.47008589999976)
  })

  it('returns the heat shade', () => {
    let temp = noaaHeatIndex.heatIndex(90, 85)
    let shade = noaaHeatIndex.heatShade(temp)
    expect(shade, 'to equal', 'DANGER')
  })

  it('returns the shade effects', () => {
    let temp = noaaHeatIndex.heatIndex(90, 85)
    let shade = noaaHeatIndex.heatShade(temp)
    let effects = noaaHeatIndex.effects[shade]
    expect(effects, 'to equal', noaaHeatIndex.effects['DANGER'])
  })
})
