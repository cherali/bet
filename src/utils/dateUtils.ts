export function timeSince(timestamp: number) {
  const now = Date.now();
  const secondsAgo = Math.floor((now - timestamp) / 1000);

  const timeUnits: Array<{
    unit: Intl.RelativeTimeFormatUnit;
    seconds: number;
  }> = [
    { unit: "year", seconds: 60 * 60 * 24 * 365 }, // Approximation of a year
    { unit: "month", seconds: 60 * 60 * 24 * 30 }, // Approximation of a month
    { unit: "week", seconds: 60 * 60 * 24 * 7 },
    { unit: "day", seconds: 60 * 60 * 24 },
    { unit: "hour", seconds: 60 * 60 },
    { unit: "minute", seconds: 60 },
    { unit: "second", seconds: 1 },
  ];

  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  for (const { unit, seconds } of timeUnits) {
    const count = Math.floor(secondsAgo / seconds);
    if (count > 0) {
      return rtf.format(-count, unit);
    }
  }

  return "Just Now";
}
