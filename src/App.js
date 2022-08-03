import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Pool from "./components/Pool";
import Swap from "./components/Swap";
function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/header" element={<Header />} />
            <Route path="/swap" element={<Swap />} />
            <Route path="/pool" element={<Pool />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
