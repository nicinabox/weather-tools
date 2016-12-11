const SI_TEMP_MAX = 10
const SI_SPEED_MIN = 4.8
const US_TEMP_MAX = 50
const US_SPEED_MIN = 3

const round = (n) => Math.round(n, 0)

const si = (temp, speed, clamp = true) => {
  if (clamp && (temp > SI_TEMP_MAX || speed < SI_SPEED_MIN)) return
  return round(13.12 + (0.6215 * temp) - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16))
}

const us = (temp, speed, clamp = true) => {
  if (clamp && (temp > US_TEMP_MAX || speed < US_SPEED_MIN)) return
  return round(35.74 + (0.6215 * temp) - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16))
}

export default {
  us,
  si,
  bounds: {
    SI_SPEED_MIN,
    SI_TEMP_MAX,
    US_SPEED_MIN,
    US_TEMP_MAX
  }
}
