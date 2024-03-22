import { CoinflowWithdraw } from "@coinflowlabs/react";
import { useTheme } from "../../hooks/useTheme.tsx";
import { useEthWallet } from "../../wallets/EthWallet.tsx";
import { Blockchain, COINFLOW_ENV, MERCHANT_ID } from "../../types.ts";
import { useHeightHandler } from "../../hooks/useHeightHandler.tsx";

export function PolygonWithdraw() {
  const {
    primary,
    background,
    backgroundAccent2,
    backgroundAccent,
    textColorAccent,
    textColor,
    textColorAction,
  } = useTheme();

  const { handleHeightChange, height } = useHeightHandler();

  const wallet = useEthWallet();

  if (!wallet) return null;

  return (
    <div className={"mt-10"} style={{ height }}>
      <CoinflowWithdraw
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
        wallet={wallet}
        merchantId={MERCHANT_ID}
        env={COINFLOW_ENV}
        onSuccess={() => console.log("Withdraw Success")}
        blockchain={Blockchain.Polygon}
        loaderBackground={background}
        handleHeightChange={handleHeightChange}
      />
    </div>
  );
}
