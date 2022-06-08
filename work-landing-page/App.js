import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components';
import About from './components/AboutComponents';
import Services from './components/ServiceComponents';
import Contact from './components/ContactComponents';
import Download from './components/DownloadComponents';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/AboutComponents' component={About} />
        <Route path='/ServiceComponents' component={Services} />
        <Route path='/ContactComponents' component={Contact} />
        <Route path='/DownloadComponents' component={Download} />
      </Switch>
    </Router>
  );
}

export default App;