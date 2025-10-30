import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreateBet from "./pages/CreateBet";
import Bet from "./pages/Bet";
import Admin from "./pages/Admin";

const App = () => {
  return (
    <div className="min-h-screen bg-dark text-accent font-sans">
      <header className="flex items-center justify-between p-4 bg-cardboard shadow-md">
        <Link to="/" className="text-2xl font-bold text-primary">PumpBet</Link>
        <nav className="flex gap-4">
          <Link className="hover:text-accent transition" to="/create">Créer un pari</Link>
          <Link className="hover:text-primary transition" to="/admin">Admin</Link>
        </nav>
      </header>
      <main className="p-4 max-w-2xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateBet />} />
          <Route path="/bet/:id" element={<Bet />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
    </div>
  );
};
export default App;
