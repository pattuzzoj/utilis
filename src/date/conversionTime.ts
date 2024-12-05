type TimeUnit = "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | "milliseconds";

export default function conversionTime(time: number, from: TimeUnit, to: TimeUnit): number {
  const conversionFactors: Record<TimeUnit, number> = {
    milliseconds: 1,
    seconds: 1000,
    minutes: 60 * 1000,
    hours: 60 * 60 * 1000,
    days: 24 * 60 * 60 * 1000,
    weeks: 7 * 24 * 60 * 60 * 1000,
    months: 30.416 * 24 * 60 * 60 * 1000,
    years: 365 * 24 * 60 * 60 * 1000
  };

  const timeInMilliseconds = time * conversionFactors[from];

  return Math.floor(timeInMilliseconds / conversionFactors[to]);
}