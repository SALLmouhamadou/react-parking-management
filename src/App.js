import logo from './logo.svg';
import './App.css';
import Navigation from './components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
      <Navigation/>
      </Router>
    </div>
  );
}

export default App;
