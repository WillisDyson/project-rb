import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pagestemp/Homepage';
import NavBar from './components/navigation/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;