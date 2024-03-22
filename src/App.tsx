import "./App.css";
import LogoDark from "./assets/logo-dark.png";
import LogoLight from "./assets/logo-light.png";
import FlowLogoLight from "./assets/flow-logo-light.png";
import FlowLogoDark from "./assets/flow-logo-dark.png";
import { BlockchainSelector } from "./wallets/BlockchainSelector.tsx";
import { BlockchainLogo } from "./wallets/BlockchainLogo.tsx";
import { Blockchain } from "./types.ts";
import { useBlockchainStore } from "./stores/BlockchainStore.tsx";
import { SolanaWithdraw } from "./screens/solana/SolanaWithdraw.tsx";
import { EthWithdraw } from "./screens/evm/EthWithdraw.tsx";
import { PolygonWithdraw } from "./screens/evm/PolygonWithdraw.tsx";
import { ContextWrapper } from "./layout/ContextWrapper.tsx";
import { WalletSelector } from "./wallets/WalletSelector.tsx";
import { Theme, useThemeStore } from "./stores/ThemeStore.tsx";
import { WalletEmptyState } from "./wallets/WalletEmptyState.tsx";

function App() {
  const { blockchain } = useBlockchainStore();
  const { theme, toggle } = useThemeStore();

  return (
    <div
      className={`${theme} min-h-screen h-screen bg-white dark:bg-gray-950 relative`}
    >
      <ContextWrapper>
        <div
          className={`${blockchain ? "" : "hidden"} fixed md:hidden bottom-0 right-0 left-0 flex space-x-3 justify-end p-3 backdrop-filter backdrop-blur-xl bg-white/60 dark:bg-gray-950/60 border-t-[0.5px] border-gray-950/10 dark:border-white/5`}
        >
          <BlockchainSelector />
          <WalletSelector />
        </div>
        <div
          className={"w-screen flex flex-col flex-1 bg-white dark:bg-gray-950"}
        >
          <div
            className={`sticky top-0 left-0 right-0 backdrop-filter backdrop-blur-xl bg-white/60 dark:bg-gray-950/60`}
          >
            <div
              className={`max-w-full md:max-w-xl flex items-center mx-auto space-x-4 `}
            >
              <div
                className={`flex flex-col flex-1 mt-4 ${blockchain ? "p-5" : "pt-16 items-center"}`}
              >
                <img
                  src={FlowLogoDark}
                  className={`h-9 object-contain hidden dark:flex ${blockchain ? "self-start" : "self-center"}`}
                  alt={"logo"}
                />
                <img
                  src={FlowLogoLight}
                  className={`h-9 object-contain dark:hidden ${blockchain ? "self-start" : "self-center"}`}
                  alt={"logo"}
                />
                <div
                  className={`flex items-center space-x-1 pl-9 ${blockchain ? "" : "hidden"}`}
                >
                  <span
                    className={
                      "pl-[1px] text-gray-700 dark:text-gray-200 font-medium text-[12px]"
                    }
                  >
                    by
                  </span>
                  <span
                    className={
                      "text-gray-700 dark:text-gray-200 font-medium text-[12px]"
                    }
                  >
                    Coinflow
                  </span>
                  <img
                    src={LogoLight}
                    className={"h-5  dark:hidden"}
                    alt={"logo"}
                  />
                  <img
                    src={LogoDark}
                    className={"h-5 dark:flex"}
                    alt={"logo"}
                  />
                </div>
              </div>
              <div className={"items-center space-x-4 hidden md:flex"}>
                <BlockchainSelector />
                <WalletSelector />
              </div>

              {blockchain ? (
                <button
                  className={
                    "hover:opacity-80 !mr-4 md:mr-0 h-4 transition outline-none bg-gray-950/5 dark:bg-white/5 rounded-2xl !h-11 w-11 flex items-center justify-center"
                  }
                  onClick={() => toggle()}
                >
                  <i
                    className={`text-gray-900 dark:text-gray-200 bx ${theme === Theme.Light ? "bx-moon" : "bxs-sun"}`}
                  />
                </button>
              ) : null}
            </div>
          </div>

          <div className={"max-w-xl w-full mx-auto"}>
            <BlockchainIntro />
            <WalletEmptyState />
          </div>
        </div>
      </ContextWrapper>
    </div>
  );
}

function BlockchainIntro() {
  const { setBlockchain, blockchain } = useBlockchainStore();

  if (blockchain === Blockchain.Solana) return <SolanaWithdraw />;
  else if (blockchain === Blockchain.Polygon) return <PolygonWithdraw />;
  else if (blockchain === Blockchain.Eth) return <EthWithdraw />;

  return (
    <>
      <div className={"flex flex-col w-full pt-10"}>
        <span
          className={
            "text-base text-center font-medium text-gray-900 dark:text-gray-200"
          }
        >
          Offramp crypto to a bank account or debit card
        </span>
        <a
          target={"_blank"}
          href={"https://coinflow.cash"}
          className={
            "flex justify-center decoration-0 outline-none whitespace-nowrap items-center space-x-1 mb-10 opacity-80 hover:opacity-100 transition mt-2"
          }
        >
          <span
            className={"text-gray-700 dark:text-gray-200 font-medium text-xs"}
          >
            powered by
          </span>

          <span
            className={
              "text-gray-700 dark:text-gray-200 underline font-medium text-xs"
            }
          >
            Coinflow
          </span>
          <img src={LogoLight} className={"h-6 dark:hidden"} alt={"logo"} />
          <img src={LogoDark} className={"h-6 dark:flex"} alt={"logo"} />
        </a>
        <div className={"flex flex-col space-y-10"}>
          <button
            onClick={() => setBlockchain(Blockchain.Solana)}
            className={
              "outline-none transition rounded-2xl text-gray-950 dark:text-white text-lg font-medium w-full p-8 flex space-x-5 items-center ring-[0.5px] ring-gray-950/5 dark:ring-white/5 bg-gradient-to-b from-white dark:from-gray-950 hover:to-teal-500/10 to-teal-500/5 dark:to-teal-500/5"
            }
          >
            <BlockchainLogo height={6} blockchain={Blockchain.Solana} />
            <span className={"flex-1 text-start"}>Solana</span>
            <i className={"bx bx-chevron-right"} />
          </button>

          <button
            onClick={() => setBlockchain(Blockchain.Polygon)}
            className={
              "outline-none transition-all duration-500 rounded-2xl text-gray-950 dark:text-white text-lg font-medium w-full p-8 flex space-x-5 items-center ring-[0.5px] ring-gray-950/5 dark:ring-white/5 bg-gradient-to-b from-white dark:from-gray-950 hover:to-purple-500/10 to-purple-500/5 dark:to-purple-500/5"
            }
          >
            <BlockchainLogo height={6} blockchain={Blockchain.Polygon} />
            <span className={"flex-1 text-start"}>Polygon</span>
            <i className={"bx bx-chevron-right"} />
          </button>
          <button
            onClick={() => setBlockchain(Blockchain.Eth)}
            className={
              "outline-none transition-all duration-500 rounded-2xl text-gray-950 dark:text-white text-lg font-medium w-full p-8 flex space-x-5 items-center ring-[0.5px] ring-gray-950/5 dark:ring-white/5 bg-gradient-to-b from-white dark:from-gray-950 hover:to-gray-500/10 to-gray-500/5 dark:to-gray-500/5"
            }
          >
            <BlockchainLogo height={6} blockchain={Blockchain.Eth} />
            <span className={"flex-1 text-start"}>Ethereum</span>
            <i className={"bx bx-chevron-right"} />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
