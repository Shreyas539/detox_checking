import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <header className="container">
        <Navbar/>
        <LandingPage />
      </header>
    </div>
  );
}

export default App;
