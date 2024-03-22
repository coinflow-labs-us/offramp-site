import { useEffect } from "react";
import { Blockchain } from "../types.ts";
import { useSwitchChain } from "wagmi";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useBlockchainStore } from "../stores/BlockchainStore.tsx";

export function WalletSelector() {
  const { blockchain } = useBlockchainStore();
  const { chains, switchChain } = useSwitchChain();

  useEffect(() => {
    if (!switchChain) return;

    if (blockchain === Blockchain.Polygon) {
      const polygonId = chains.find((chain) => chain.name === "Polygon")?.id;
      if (!polygonId) return;
      switchChain({ chainId: polygonId });
    }

    if (blockchain === Blockchain.Eth) {
      const mainnetId = chains.find((chain) => chain.name === "Ethereum")?.id;
      if (!mainnetId) return;
      switchChain({ chainId: mainnetId });
    }
  }, [blockchain, chains, switchChain]);

  // return null;

  if (blockchain === Blockchain.Solana) return <WalletMultiButton />;
  if (blockchain === Blockchain.Eth) return <Web3Button />;
  if (blockchain === Blockchain.Polygon) return <Web3Button />;
  return null;
}

function Web3Button() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return <w3m-button balance={"hide"} />;
}
