export enum Blockchain {
  Solana = "solana",
  Polygon = "polygon",
  Eth = "eth",
}

export const MERCHANT_ID = "coinflow-offramp";
export const COINFLOW_ENV = "prod";
export const DarkTheme: CoinflowColors = {
  primary: "#2dd4bf",
  background: "#030712",
  backgroundAccent: "rgb(17,24,39)",
  backgroundAccent2: "rgb(17,24,39)",
  textColor: "#e5e7eb",
  textColorAccent: "#6b7280",
  textColorAction: "#030712",
};

export const LightTheme: CoinflowColors = {
  primary: "#0d9488",
  background: "#ffffff",
  backgroundAccent: "#f9fafb",
  backgroundAccent2: "#f3f4f6",
  textColor: "#111827",
  textColorAccent: "#6b7280",
  textColorAction: "#ffffff",
};

export interface CoinflowColors {
  primary: string;
  background: string;
  backgroundAccent2: string;
  backgroundAccent: string;
  textColorAccent: string;
  textColor: string;
  textColorAction: string;
}
