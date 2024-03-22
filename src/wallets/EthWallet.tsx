import { useCallback } from "react";
import { providers } from "ethers";
import {
  useAccount,
  useSendTransaction,
  useSignMessage,
  useSignTypedData,
} from "wagmi";
import { EthWallet } from "@coinflowlabs/react";

export function useEthWallet(): EthWallet {
  const { address } = useAccount();
  const { sendTransactionAsync } = useSendTransaction();
  const { signTypedDataAsync } = useSignTypedData();
  const { signMessageAsync } = useSignMessage();

  const sendTransactionWallet = useCallback(
    async (request: providers.TransactionRequest & { to: string }) => {
      const hash = await sendTransactionAsync(request as never);
      return { hash };
    },
    [sendTransactionAsync],
  );

  const signMessageWallet = useCallback(
    async (message: string) => {
      try {
        console.log("signMessageWallet", { message });
        const signedTypeData = JSON.parse(message);
        console.log("signMessageWallet", { signedTypeData });

        return await signTypedDataAsync(signedTypeData).catch((e) => {
          console.error("signTypedData error", e);
          throw e;
        });
      } catch (e) {
        return await signMessageAsync({ message }).catch((e) => {
          console.error("signMessageAsync error", e);
          throw e;
        });
      }
    },
    [signMessageAsync, signTypedDataAsync],
  );

  return {
    address,
    signMessage: signMessageWallet,
    sendTransaction: sendTransactionWallet,
  };
}
