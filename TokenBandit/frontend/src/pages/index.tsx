import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <Navbar />
      <main className="p-4 mt-12 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Solana dApp</h1>
        <p className="text-lg">Connect your wallet and explore the world of Solana.</p>
      </main>
    </div>
  );
}