import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './Compnents/Navigation/Navigation';
import Players from './Compnents/Players/Players';
import Footer from './Compnents/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Navigation/>
     <Players/>
     <Footer/>
    </div>
  );
}

export default App;
