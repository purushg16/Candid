import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Team from '../components/Team/Team';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </div>
  );
}

export default App;
