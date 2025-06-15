import { useContext } from "react";
import { useWalletContext } from "./WalletProvider";

// Bu hook bütün komponentlər üçün asan wallet çağırışı verir
export const useWallet = () => useWalletContext();
