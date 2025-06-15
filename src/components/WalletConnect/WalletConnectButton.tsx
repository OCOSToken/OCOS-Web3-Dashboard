import React from "react";
import { useWallet } from "./hooks";

export const WalletConnectButton: React.FC = () => {
  const { connect, isConnected, disconnect, address } = useWallet();

  return (
    <button
      onClick={isConnected ? disconnect : connect}
      className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold shadow-lg transition"
    >
      {isConnected ? `${address.slice(0, 6)}...${address.slice(-4)} | Ayır` : "Cüzdanı Bağla"}
    </button>
  );
};
