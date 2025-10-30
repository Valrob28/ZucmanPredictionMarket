import { useParams } from "react-router-dom";

export default function Bet() {
  const { id } = useParams();
  // En vrai : fetch sur la blockchain par l'id
  const bet = {
    question: "Exemple : BTC > 75k avant 2026 ?",
    poolYes: 1200,
    poolNo: 900
  };
  const total = bet.poolYes + bet.poolNo;
  return (
    <div className="flex flex-col gap-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold text-primary mb-2">{bet.question}</h1>
      <div className="flex gap-4 justify-between bg-cardboard rounded-xl p-6 items-center">
        <div className="flex flex-col items-center gap-2 flex-1">
          <span className="text-green-400 font-bold text-lg">Yes</span>
          <span className="text-2xl">{bet.poolYes} USDC</span>
          <span className="text-accent">{Math.round(100*bet.poolYes/total)}% chance</span>
        </div>
        <div className="flex flex-col items-center gap-2 flex-1">
          <span className="text-pink-400 font-bold text-lg">No</span>
          <span className="text-2xl">{bet.poolNo} USDC</span>
          <span className="text-accent">{Math.round(100*bet.poolNo/total)}% chance</span>
        </div>
      </div>
      <div className="flex gap-4 mt-2">
        <button className="flex-1 bg-green-400 text-dark font-bold p-4 rounded-xl hover:scale-105 transition">Parier Yes</button>
        <button className="flex-1 bg-pink-400 text-dark font-bold p-4 rounded-xl hover:scale-105 transition">Parier No</button>
      </div>
    </div>
  );
}

