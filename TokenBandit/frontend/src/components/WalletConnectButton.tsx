import React from "react";
import useWallet from "../hooks/useWallet";

const WalletConnectButton = () => {
  const { wallet, loading, error, disconnectWallet } = useWallet();

  return (
    <button className="bg-green-500 p-2 rounded" onClick={loading ? undefined : disconnectWallet}>
      {loading ? "Connecting..." : wallet ? `Connected: ${wallet.toString().slice(0, 6)}...` : "Connect Wallet"}
      {error && <span className="text-red-500">{error}</span>}
    </button>
  );
};

export default WalletConnectButton;
