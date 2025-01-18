import React from 'react';
import WalletConnectButton from "./WalletConnectButton";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-4 bg-gray-800 text-white">
      <div className="text-lg font-bold">Solana dApp</div>
      <WalletConnectButton />
    </nav>
  );
};

export default Navbar;
