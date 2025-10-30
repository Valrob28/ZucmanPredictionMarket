import { Link } from "react-router-dom";

const dummyBets = [
  { id: 1, question: "BTC > 75k avant 2026 ?", poolYes: 1200, poolNo: 800 },
  { id: 2, question: "SOL > 500$ avant fin décembre ?", poolYes: 2500, poolNo: 1300 }
];

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl md:text-5xl text-primary font-bold mb-4">PumpBet 🔮</h1>
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <button className="bg-primary text-dark px-6 py-3 rounded-xl font-bold shadow-xl hover:scale-105 transition">Se connecter Wallet</button>
        <button className="bg-accent text-dark px-6 py-3 rounded-xl font-bold shadow-xl hover:scale-105 transition">X / Twitter</button>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {dummyBets.map(bet => (
          <Link key={bet.id} to={`/bet/${bet.id}`} className="bg-cardboard rounded-xl p-6 cursor-pointer hover:scale-105 transition duration-200 shadow-lg flex flex-col gap-4">
            <div className="text-xl font-semibold text-white">{bet.question}</div>
            <div className="flex gap-4 items-center">
              <div className="flex-1">
                <div className="text-green-400">Yes : {bet.poolYes} USDC</div>
                <div className="text-pink-400">No : {bet.poolNo} USDC</div>
              </div>
              <div className="text-md text-accent font-bold bg-dark px-4 py-1 rounded-full">
                {Math.round(100*bet.poolYes/(bet.poolYes+bet.poolNo))}% Oui
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

