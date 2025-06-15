export interface WalletState {
  isConnected: boolean;
  address: string;
}

export type WalletProviderType = "MetaMask" | "WalletConnect";
