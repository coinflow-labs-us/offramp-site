import { ReactNode } from "react";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SolanaWallet } from "../wallets/SolanaWallet.tsx";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi";
import { mainnet, polygon, polygonMumbai, sepolia } from "wagmi/chains";

export const WagmiProjectId = "2383b9beda863a0b895ff5603b28bd04";

// 0. Setup queryClient
const queryClient = new QueryClient();

// 2. Create wagmiConfig
const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [sepolia, polygonMumbai, polygon, mainnet] as const;
export const WagmiConfig = defaultWagmiConfig({
  chains, // required
  projectId: WagmiProjectId, // required
  metadata, // required
  enableWalletConnect: true, // Optional - true by default
  enableInjected: true, // Optional - true by default
  enableEIP6963: true, // Optional - true by default
  enableCoinbase: true, // Optional - true by default
});

createWeb3Modal({
  wagmiConfig: WagmiConfig,
  projectId: WagmiProjectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
});

export function ContextWrapper({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={WagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <SolanaWallet> {children} </SolanaWallet>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
