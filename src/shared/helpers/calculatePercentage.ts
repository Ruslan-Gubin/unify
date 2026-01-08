export const calculatePercentage = (value: number, total: number): number =>
  total === 0 || typeof value !== "number" || typeof total !== "number"
    ? 0
    : Math.ceil(Math.min((value / total) * 100, 100));
