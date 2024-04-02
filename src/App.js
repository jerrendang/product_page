import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import MainDescription from './components/MainDescription';
import TransitionPage from './components/TransitionPage';
import MissionPage from './components/MissionPage';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <MainDescription />
      <MissionPage />
      <TransitionPage />
      <Footer />
    </div>
  );
}

export default App;