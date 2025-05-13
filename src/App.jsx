import { useState } from 'react';
import '../src/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Componentes/Navbar';
import Footer from './Componentes/Footer';
import Home from './Componentes/Home';
import Card from './Componentes/Cards';
import './Style/Home.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="home">
        <Home />
      </div>
      <div className="cards">
        <Card />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
