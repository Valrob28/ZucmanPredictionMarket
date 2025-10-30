import { useState } from "react";

export default function CreateBet() {
  const [question, setQuestion] = useState("");

  return (
    <form
      className="bg-cardboard rounded-xl shadow-xl p-8 max-w-lg mx-auto flex flex-col gap-6"
      onSubmit={e => { e.preventDefault(); /* handle send to chain */ }}
    >
      <h1 className="text-2xl font-bold text-primary mb-4">Créer un pari 🔥</h1>
      <input
        className="p-4 rounded-xl bg-dark text-white placeholder:text-gray-400 focus:ring-2 ring-primary outline-none"
        placeholder="Décris la question du pari !"
        value={question}
        onChange={e => setQuestion(e.target.value)}
        required
      />
      <button type="submit" className="bg-primary text-dark font-bold p-4 rounded-xl hover:scale-105 transition">
        Déposer 50 USDC & Créer
      </button>
    </form>
  );
}

