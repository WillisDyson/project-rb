import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutUs";
import NavBar from "./components/navigation/NavBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
