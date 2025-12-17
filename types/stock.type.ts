type TClose = {
  price: number;
  changePercent: number;
};

export type TStock = {
  symbol: string;
  pattern: string;
  close: TClose;
  entry: number;
  target: number;
  stopLoss: number;
  reason: string;
};
