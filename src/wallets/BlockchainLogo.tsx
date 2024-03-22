import sol from "../assets/chains/sol.png";
import eth from "../assets/chains/eth.png";
import poly from "../assets/chains/polygon.png";
import { Blockchain } from "../types.ts";

export function BlockchainLogo({
  blockchain,
  height = 10,
  className,
}: {
  blockchain: Blockchain;
  height?: number;
  className?: string;
}) {
  if (blockchain === Blockchain.Solana)
    return (
      <img
        src={sol}
        alt={sol}
        className={`object-contain h-${height} ${className}`}
      />
    );
  if (blockchain === Blockchain.Eth)
    return (
      <img
        src={eth}
        alt={eth}
        className={`object-contain h-${height} ${className}`}
      />
    );
  if (blockchain === Blockchain.Polygon)
    return (
      <img
        src={poly}
        alt={poly}
        className={`object-contain h-${height} ${className}`}
      />
    );
  return null;
}
