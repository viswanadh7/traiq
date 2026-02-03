export const calculatePotential = (entry: number, target: number): number => {
  const potential = ((target - entry) / entry) * 100;
  return Number(potential.toFixed(2));
};

export const calculateRR = (
  entry: number,
  target: number,
  stopLoss: number,
): number => {
  const rr = (target - entry) / Math.abs(entry - stopLoss);
  return Number(rr.toFixed(2));
};
