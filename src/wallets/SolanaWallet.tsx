import { ReactNode, useMemo } from "react";
import {
  ConnectionProvider,
  useWallet,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  UnsafeBurnerWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { Connection, Transaction, VersionedTransaction } from "@solana/web3.js";

export function SolanaWallet({ children }: { children: ReactNode }) {
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new UnsafeBurnerWalletAdapter(),
    ],
    [],
  );

  return (
    <ConnectionProvider endpoint={import.meta.env.VITE_SOLANA_RPC_URL}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export function useSolanaWallet() {
  const wallet = useWallet();

  const sendTransaction = async (
    transaction: Transaction | VersionedTransaction,
    connection: Connection,
  ) => {
    const serialized = transaction.serialize({
      verifySignatures: false,
      requireAllSignatures: false,
    });
    console.log(
      "Serialized Transaction: ",
      Buffer.from(serialized).toString("base64"),
    );
    return wallet.sendTransaction(transaction, connection);
  };

  return {
    ...wallet,
    sendTransaction,
  };
}
