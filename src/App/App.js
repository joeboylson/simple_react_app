import React from 'react';

// react router
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// styling
import './App.css'
import '../Pages/Pages.css'

// nav
import Nav from '../Nav/Nav';

// pages
import Home from '../Pages/Home';
import About from '../Pages/About';


function App () {
  return (
    <main>
      <BrowserRouter>

        <Nav />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/about"><About /></Route>
        </Switch>

      </BrowserRouter>

    </main>
  );
}

export default App;
