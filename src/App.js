import logo from './logo.svg';
import './App.css';
import Navigation from './components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Add from './pages/Add';
import CheckCard from './pages/CheckCard';
import Compte from './pages/Compte';


function App() {
  return (
    <div className="App">
      <Router>
      <Navigation/>
      <div>
        <Routes>
          <Route path='/' Component={Dashboard}/>
          <Route path='/card/add' Component={Add}/>
          <Route path='/card/check' Component={CheckCard}/>
          <Route path='/compte' Component={Compte}/>
        </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;
