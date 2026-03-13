import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Club } from './pages/Club';
import Privacy from './pages/Privacy';
import { CookieBanner } from './components/CookieBanner';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/club" element={<Club />} />
          <Route path="/privacidad" element={<Privacy />} />
        </Routes>
        <CookieBanner />
      </div>
    </Router>
  );
}

export default App;
