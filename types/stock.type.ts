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

export type THistory = {
  id: number;
  symbol: string;
  price: number;
  entry: number;
  target: number;
  stopLoss: number;
  isTargetHit: boolean;
  isStopLossHit: boolean;
  isActive: boolean;
};
