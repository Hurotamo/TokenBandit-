import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";
import WalletConnectButton from "../components/WalletConnectButton";

export default function Dashboard() {
  const [tradingStats, setTradingStats] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTradingStats = async () => {
      try {
        const response = await fetch('https://api.example.com/trading-stats', {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTradingStats(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTradingStats();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="p-4">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <WalletConnectButton />
        {tradingStats && (
          <div>
            <h2 className="text-2xl font-bold">Trading Stats</h2>
            <ul>
              {Object.keys(tradingStats).map((key) => (
                <li key={key}>
                  <span className="font-bold">{key}:</span> {tradingStats[key]}
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </div>
  );
}