import { WalletProvider } from "./components/WalletConnect/WalletProvider";
import { WalletConnectButton, WalletStatus } from "./components/WalletConnect";

function App() {
  return (
    <WalletProvider>
      <header className="p-4 flex justify-end">
        <WalletStatus />
        <WalletConnectButton />
      </header>
      {/* Qalan dashboard */}
    </WalletProvider>
  );
}
