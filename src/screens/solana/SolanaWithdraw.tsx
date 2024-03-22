import { useConnection } from "@solana/wallet-adapter-react";
import { CoinflowWithdraw } from "@coinflowlabs/react";
import { useTheme } from "../../hooks/useTheme.tsx";
import { useSolanaWallet } from "../../wallets/SolanaWallet.tsx";
import { useHeightHandler } from "../../hooks/useHeightHandler.tsx";
import { Blockchain, COINFLOW_ENV, MERCHANT_ID } from "../../types.ts";

export function SolanaWithdraw() {
  const { handleHeightChange, height } = useHeightHandler();

  const {
    primary,
    background,
    backgroundAccent2,
    backgroundAccent,
    textColorAccent,
    textColor,
    textColorAction,
  } = useTheme();

  const solanaWallet = useSolanaWallet();
  const { connection } = useConnection();

  return (
    <>
      <div className={"mt-10"} style={{ height }}>
        <CoinflowWithdraw
          wallet={solanaWallet}
          merchantId={MERCHANT_ID}
          env={COINFLOW_ENV}
          connection={connection}
          onSuccess={() => console.log("Withdraw Success")}
          blockchain={Blockchain.Solana}
          loaderBackground={background}
          theme={{
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            style: "rounded",
            primary,
            background,
            backgroundAccent2,
            backgroundAccent,
            textColor,
            textColorAccent,
            textColorAction,
          }}
          handleHeightChange={handleHeightChange}
          supportsVersionedTransactions={true}
        />
      </div>
    </>
  );
}
