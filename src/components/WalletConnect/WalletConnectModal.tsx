import React from "react";
import { useWallet } from "./hooks";

export const WalletConnectModal: React.FC<{ open: boolean; onClose: () => void }> = ({
  open,
  onClose,
}) => {
  const { connectMetaMask, connectWalletConnect } = useWallet();

  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl w-96 shadow-xl">
        <h2 className="text-xl font-semibold mb-4">Cüzdanı Seçin</h2>
        <button
          onClick={() => {
            connectMetaMask();
            onClose();
          }}
          className="w-full mb-2 px-4 py-2 rounded-lg bg-yellow-500 text-white"
        >
          MetaMask
        </button>
        <button
          onClick={() => {
            connectWalletConnect();
            onClose();
          }}
          className="w-full px-4 py-2 rounded-lg bg-blue-700 text-white"
        >
          WalletConnect
        </button>
        <button onClick={onClose} className="mt-4 w-full text-gray-600 hover:text-gray-900">
          İptal
        </button>
      </div>
    </div>
  );
};
