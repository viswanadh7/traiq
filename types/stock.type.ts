type TClose = {
  price: number;
  changePercent: number;
};

export type TStock = {
  id: number;
  symbol: string;
  pattern: string;
  close: TClose;
  entry: number;
  target: number;
  stopLoss: number;
  reason: string;
  created_at: Date;
};
