import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useBlockchainStore } from "../stores/BlockchainStore.tsx";
import { BlockchainLogo } from "./BlockchainLogo.tsx";
import { Blockchain } from "../types.ts";

export function BlockchainSelector() {
  const { blockchain, setBlockchain } = useBlockchainStore();

  if (!blockchain) return null;

  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="px-4 h-11 rounded-2xl bg-gray-950/10 dark:bg-white/5 flex items-center space-x-2 outline-none">
            <BlockchainLogo height={4} blockchain={blockchain} />
            <i className={"bx bx-chevron-down text-gray-950 dark:text-white"} />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 dark:divide-gray-800 rounded-xl bg-white dark:bg-gray-900 shadow-xl ring-[0.5px] ring-black/5 dark:ring-white/5 focus:outline-none">
            <div className="p-2">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => setBlockchain(Blockchain.Solana)}
                    className={`${
                      active ? "bg-gray-100 dark:bg-gray-800" : ""
                    } group flex w-full text-gray-900 dark:text-white space-x-2 items-center rounded-md p-3 text-sm`}
                  >
                    <BlockchainLogo blockchain={Blockchain.Solana} height={4} />
                    <span>Solana</span>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => setBlockchain(Blockchain.Polygon)}
                    className={`${
                      active ? "bg-gray-100 dark:bg-gray-800" : ""
                    } group flex w-full text-gray-900 dark:text-white space-x-2 items-center rounded-md p-3 text-sm`}
                  >
                    <BlockchainLogo
                      blockchain={Blockchain.Polygon}
                      height={4}
                    />
                    <span>Polygon</span>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => setBlockchain(Blockchain.Eth)}
                    className={`${
                      active ? "bg-gray-100 dark:bg-gray-800" : ""
                    } group flex w-full text-gray-900 dark:text-white space-x-2 items-center rounded-md p-3 text-sm`}
                  >
                    <BlockchainLogo blockchain={Blockchain.Eth} height={4} />
                    <span>Ethereum</span>
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
