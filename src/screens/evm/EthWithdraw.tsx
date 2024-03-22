import { CoinflowWithdraw } from "@coinflowlabs/react";
import { useHeightHandler } from "../../hooks/useHeightHandler.tsx";
import { Blockchain, COINFLOW_ENV, MERCHANT_ID } from "../../types.ts";
import { useEthWallet } from "../../wallets/EthWallet.tsx";
import { useTheme } from "../../hooks/useTheme.tsx";

export function EthWithdraw() {
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

  const wallet = useEthWallet();

  if (!wallet) return null;

  return (
    <div className={"mt-10"} style={{ height }}>
      <CoinflowWithdraw
        wallet={wallet}
        merchantId={MERCHANT_ID}
        env={COINFLOW_ENV}
        onSuccess={() => console.log("Withdraw Success")}
        blockchain={Blockchain.Eth}
        theme={{
          primary,
          background,
          backgroundAccent2,
          backgroundAccent,
          textColor,
          textColorAccent,
          textColorAction,
        }}
        loaderBackground={background}
        handleHeightChange={handleHeightChange}
      />
    </div>
  );
}
