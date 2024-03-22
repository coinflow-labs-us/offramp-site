import { useSolanaWallet } from "./SolanaWallet.tsx";
import { useEthWallet } from "./EthWallet.tsx";
import { WalletSelector } from "./WalletSelector.tsx";
import { useBlockchainStore } from "../stores/BlockchainStore.tsx";
import { Blockchain } from "../types.ts";

export function WalletEmptyState() {
  const solanaWallet = useSolanaWallet();
  const evmWallet = useEthWallet();

  const { blockchain } = useBlockchainStore();

  if (
    (blockchain === Blockchain.Solana && !solanaWallet?.publicKey) ||
    (blockchain !== Blockchain.Solana && !evmWallet?.address)
  ) {
    return (
      <div className={"w-full p-6 flex items-center justify-center "}>
        <div
          className={
            "p-8 bg-white dark:bg-gray-950 rounded-3xl flex flex-col items-center ring-[0.5px] ring-gray-200 dark:ring-gray-900"
          }
        >
          <div
            className={
              "w-14 h-14 rounded-3xl flex items-center justify-center bg-gradient-to-b from-white dark:from-gray-950 to-teal-600/5 dark:to-teal-500/5 mb-4"
            }
          >
            <i
              className={"bx bxs-wallet bx-sm text-gray-800 dark:text-gray-200"}
            />
          </div>
          <span
            className={
              "text-gray-900 dark:text-gray-200 font-medium text-sm mb-6"
            }
          >
            Connect your wallet to start
          </span>
          <WalletSelector />
        </div>
      </div>
    );
  }

  return null;
}
