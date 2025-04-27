import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import MatchesPage from './pages/MatchesPage';
import './styles/App.css';
import './styles/index.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/events" component={EventsPage} />
          <Route path="/matches" component={MatchesPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;