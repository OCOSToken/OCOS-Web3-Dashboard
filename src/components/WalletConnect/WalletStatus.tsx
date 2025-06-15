import React from "react";
import { useWallet } from "./hooks";

export const WalletStatus: React.FC = () => {
  const { isConnected, address, disconnect } = useWallet();

  if (!isConnected) return null;

  return (
    <div className="flex items-center gap-3 px-4 py-2 bg-gray-100 rounded-xl shadow">
      <span className="text-sm font-mono">{address}</span>
      <button
        onClick={disconnect}
        className="px-3 py-1 bg-red-500 text-white rounded-lg text-xs"
      >
        Ayır
      </button>
    </div>
  );
};
