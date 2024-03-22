import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Blockchain } from "../types.ts";

interface BlockchainState {
  blockchain: Blockchain | null;
  setBlockchain: (b: Blockchain) => void;
}

export const useBlockchainStore = create<BlockchainState>()(
  devtools(
    persist(
      (set) => ({
        blockChain: Blockchain.Solana,
        setBlockchain: (b: Blockchain) =>
          set(() => ({
            blockchain: b,
          })),
      }),
      {
        name: "theme-storage",
      },
    ),
  ),
);
