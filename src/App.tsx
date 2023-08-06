import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <Router>
      <>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;