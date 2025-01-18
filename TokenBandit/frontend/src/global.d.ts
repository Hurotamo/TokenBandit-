declare global {
  interface Window {
    solana: {
      isPhantom: boolean;
      connect: () => Promise<{ publicKey: string }>;
      disconnect: () => Promise<void>;
    };
  }
}

export {};
