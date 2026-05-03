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

export type Signal = {
  id: string;
  symbol: string;
  direction: Direction.LONG | Direction.SHORT;
  pattern: string;

  entry_price: number;
  stop_loss: number;
  target: number;
  rr_ratio: number;

  confluence_score: number;
  confluence_flags: string[];

  vwap: number;
  ema9: number;
  ema21: number;

  rvol: number;
  adr_percent: number;
  adr_used_percent: number;

  session_window: string;
  fired_at: string;
};
