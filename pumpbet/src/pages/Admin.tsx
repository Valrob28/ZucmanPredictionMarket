const dummyBets = [
  { id: 1, question: "BTC > 75k avant 2026 ?" },
  { id: 2, question: "SOL > 500$ avant fin décembre ?" }
];

export default function Admin() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl text-primary font-bold mb-4">Admin : Résoudre les paris</h1>
      <div className="flex flex-col gap-6">
        {dummyBets.map(bet => (
          <div key={bet.id} className="bg-cardboard rounded-xl p-6 flex justify-between items-center">
            <div className="text-white font-semibold">{bet.question}</div>
            <button className="bg-accent text-dark rounded-lg px-6 py-2 font-bold hover:scale-105 transition">Résoudre</button>
          </div>
        ))}
      </div>
    </div>
  );
}

