const pow = Math.pow
const CAUTION = 'CAUTION'
const EXTREME_CAUTION = 'EXTREME_CAUTION'
const DANGER = 'DANGER'
const EXTREME_DANGER = 'EXTREME_DANGER'

const constants = [
  null,
  -42.379,
  2.04901523,
  10.14333127,
  -0.22475541,
  -6.83783 * pow(10, -3),
  -5.481717 * pow(10, -2),
  1.22874 * pow(10, -3),
  8.5282 * pow(10, -4),
  -1.99 * pow(10, -6)
]

export const heatIndex = (T, R) => {
  const c = constants

  return c[1] + c[2] * T + c[3] * R + c[4] * T * R + c[5] * pow(T, 2) +
    c[6] * pow(R, 2) + c[7] * pow(T, 2) * R + c[8] * T * pow(R, 2) +
    c[9] * pow(T, 2) * pow(R, 2)
}

export const heatShade = (T) => {
  if (T >= 80 && T < 90) {
    return CAUTION
  }

  if (T >= 90 && T < 105) {
    return EXTREME_CAUTION
  }

  if (T >= 105 && T < 130) {
    return DANGER
  }

  if (T >= 130) {
    return EXTREME_DANGER
  }
}

export const effects = {
  [CAUTION]: 'Fatigue is possible with prolonged exposure and activity. Continuing activity could result in heat cramps.',
  [EXTREME_CAUTION]: 'Heat cramps and heat exhaustion are possible. Continuing activity could result in heat stroke.',
  [DANGER]: 'Heat cramps and heat exhaustion are likely; heat stroke is probable with continued activity.',
  [EXTREME_DANGER]: 'Heat stroke is imminent.',
}
