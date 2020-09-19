import React from 'react';
import Header from './header/Header'
import { 
  BrowserRouter as Router,
  Route,
  Switch } from 'react-router-dom';
import Home from './home/Home';
import Contact from './contact/Contact';
import Experience from './experience/Experience';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/experience" component={Experience} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
