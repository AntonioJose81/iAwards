import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Club } from './pages/Club';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/club" element={<Club />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
