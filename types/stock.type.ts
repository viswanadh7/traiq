type TClose = {
  price: number;
  changePercent: number;
};

export enum Direction {
  LONG = "LONG",
  SHORT = "SHORT",
}

export type TStock = {
  id: number;
  symbol: string;
  pattern: string;
  close: TClose;
  entry: number;
  target: number;
  stopLoss: number;
  reason: string;
  direction: Direction.LONG | Direction.SHORT;
  confidence: number;
  created_at: Date;
};
