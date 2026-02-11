export enum Direction {
  LONG = "LONG",
  SHORT = "SHORT",
}

export type TStock = {
  id: number;
  symbol: string;
  pattern: string;
  price: number;
  changePercent: number;
  entry: number;
  target: number;
  stopLoss: number;
  reason: string;
  direction: Direction.LONG | Direction.SHORT;
  confidence: number;
  created_at: Date;
};
