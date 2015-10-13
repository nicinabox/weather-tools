export default (temp, speed) => {
  var rawTemp = 35.74 + (0.6215 * temp) - 35.75 * Math.pow(speed, 0.16) + (0.4275 * temp) * Math.pow(speed, 0.16)
  return Math.round(rawTemp, 0);
}
