// orbital year equivalents on other planets
const ORBITS = {
  MERCURY: 0.2408467,
  VENUS: 0.61519726,
  MARS: 1.8808158,
  JUPITER: 11.862615,
  SATURN: 29.447498,
  URANUS: 84.016846,
  NEPTUNE: 164.79132,
  PLUTO: 248.00
}

// number of average units in a year
const EARTH = {
  years: 1,
  months: 12,
  weeks: 52.04, // (4 *  7 * 52 +1) / 28  since leap years every 28 years make another week
  days: 365.25,
  hours: 8766,
  minutes: 525960,
  seconds: 31557600,
}

export {ORBITS, EARTH}
