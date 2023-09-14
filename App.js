import './App.css';
import Header from './components/header/index';
import Grafico from './components/grafico/index';
import Card from './components/Card/card';
import Sobre from './components/sobre/index';
import Footer from './components/footer/index';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Grafico />
      <Card />
      <Sobre />
      <Footer />
    </div>
  );
}

export default App;
