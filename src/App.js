import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from "./pages/Home"
import WhiteShark from './components/White_Shark';
import HumpbackWhale from "./components/Humpback_Whale"
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/whiteShark' exact component={WhiteShark} />
        <Route path='/humpbackWhale' exact component={HumpbackWhale} />
        <Redirect to="/" />
      </Switch>
      <Chatbot />
      <Footer />

    </Router>
  );
}

export default App;
