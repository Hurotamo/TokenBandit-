import { useState, useEffect } from 'react';
import { Connection, PublicKey } from '@solana/web3.js';

// Extend the Window interface to include the solana property
interface Window {
  solana: {
    isPhantom: boolean;
    connect: () => Promise<{ publicKey: PublicKey }>;
    disconnect: () => Promise<void>;
  };
}

const useWallet = () => {
  const [wallet, setWallet] = useState<PublicKey | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const connectWallet = async () => {
      setLoading(true);
      setError(null);
      
      try {
        if (window.solana && window.solana.isPhantom) {
          const response = await window.solana.connect();
          setWallet(response.publicKey);
        }
      } catch (err) {
        setError('Failed to connect wallet');
      } finally {
        setLoading(false);
      }
    };
    connectWallet();
  }, []);

  const disconnectWallet = async () => {
    if (window.solana && window.solana.isPhantom) {
      await window.solana.disconnect();
      setWallet(null);
    }
  };

  return { wallet, loading, error, disconnectWallet };
};

export default useWallet;
