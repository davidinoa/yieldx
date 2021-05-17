/**
 * Calculates number of days that have passed since the input date
 * @param {string} timeAsString - String representation of a time value.
 * @return {number} Number of days difference from current date
 */
import dayjs from "dayjs";

export function calculateDaysSince(timeAsString: string) {
  const inputTime = dayjs(timeAsString);
  return dayjs().diff(inputTime, "day");
}
