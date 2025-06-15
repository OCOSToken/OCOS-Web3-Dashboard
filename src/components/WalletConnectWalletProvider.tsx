import React, { createContext, useContext, useState } from "react";
import { ethers } from "ethers";

interface WalletContextType {
  isConnected: boolean;
  address: string;
  connect: () => void;
  disconnect: () => void;
  connectMetaMask: () => void;
  connectWalletConnect: () => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [address, setAddress] = useState<string>("");
  const [isConnected, setIsConnected] = useState<boolean>(false);

  // Əsas connect/disconnect funksiyaları (demo üçün)
  const connectMetaMask = async () => {
    if ((window as any).ethereum) {
      const provider = new ethers.BrowserProvider((window as any).ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      setAddress(await signer.getAddress());
      setIsConnected(true);
    } else {
      alert("Metamask qurulmayıb!");
    }
  };

  const connectWalletConnect = () => {
    alert("WalletConnect inteqrasiyası əlavə ediləcək!");
  };

  const connect = connectMetaMask;
  const disconnect = () => {
    setAddress("");
    setIsConnected(false);
  };

  return (
    <WalletContext.Provider
      value={{
        isConnected,
        address,
        connect,
        disconnect,
        connectMetaMask,
        connectWalletConnect,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

// Custom hook
export const useWalletContext = () => {
  const context = useContext(WalletContext);
  if (!context) throw new Error("useWalletContext must be used within WalletProvider");
  return context;
};
