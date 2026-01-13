import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutUs";
import Blog from "./pages/Blog";
import NavBar from "./components/navigation/NavBar";
import Footer from "components/footer/Footer";
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
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
