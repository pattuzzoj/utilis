type TimeUnit = "hours" | "minutes" | "seconds" | "milliseconds";

interface Options {
  maxUnit?: TimeUnit;
  minUnit?: TimeUnit;
  pad?: boolean;
}

export default function formatTime(totalMilliseconds: number, options: Options, separator: string = ":"): string {
  const { maxUnit = "hours", minUnit = "seconds", pad = true } = options;

  const hours = Math.floor(totalMilliseconds / 3_600_000);
  const minutes = Math.floor((totalMilliseconds % 3_600_000) / 60_000);
  const seconds = Math.floor((totalMilliseconds % 60_000) / 1000);
  const milliseconds = totalMilliseconds % 1000;

  const units = {
    hours: pad ? hours.toString().padStart(2, "0") : hours,
    minutes: pad ? minutes.toString().padStart(2, "0") : minutes,
    seconds: pad ? seconds.toString().padStart(2, "0") : seconds,
    milliseconds: pad ? milliseconds.toString().padStart(3, "0") : milliseconds,
  }

  const unitsOrder = ["hours", "minutes", "seconds", "milliseconds"];

  const activeUnits = unitsOrder.slice(unitsOrder.indexOf(maxUnit), unitsOrder.indexOf(minUnit) + 1);

  return activeUnits.map(unit => units[unit]).join(":");
}