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
  YEARS: 1,
  MONTHS: 12,
  WEEKS: 52.04, // (4 *  7 * 52 +1) / 28  SINCE LEAP YEARS EVERY 28 YEARS MAKE ANOTHER WEEK
  DAYS: 365.25,
  HOURS: 8766,
  MINUTES: 525960,
  SECONDS: 31557600,
}

export {ORBITS, EARTH}
