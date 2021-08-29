import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from "./pages/Home"
import WhiteShark from './components/White_Shark';
import HumpbackWhale from "./components/Humpback_Whale"
import HammerHead from "./components/Hammer_Head"
import CaribbeanReef from "./components/Caribbean_Reef"
import TigerShark from "./components/Tiger_Shark"
import Turtle from "./components/Turtle"
import Seal from "./components/Seal"
import Chatbot from './components/Chatbot';

function Main() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/whiteShark' exact component={WhiteShark} />
        <Route path='/humpbackWhale' exact component={HumpbackWhale} />
        <Route path='/hammerHead' exact component={HammerHead} />
        <Route path='/caribbeanReef' exact component={CaribbeanReef} />
        <Route path='/tigerShark' exact component={TigerShark} />
        <Route path='/turtle' exact component={Turtle} />
        <Route path='/seal' exact component={Seal} />
        <Redirect to="/" />
      </Switch>
      <Chatbot />
    </Router>
  );
}

export default Main;
