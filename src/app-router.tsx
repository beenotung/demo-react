import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { HomePage } from './pages/home-page';
import { Page1 } from './pages/page-1';
import { Page2 } from './pages/page-2';
export function AppRouter() {
  return (
    <Router>
      <div className="App-menu">
        <Link to="/">Home Page </Link>
        <Link to="/1">Page 1</Link>
        <Link to="/2">Page 2</Link>
      </div>
      <Switch>
        <Route path="/1"><Page1/></Route>
        <Route path="/2"><Page2/></Route>
        {/* The root path must be placed at the last item */}
        <Route path="/"><HomePage/></Route> 
      </Switch>
    </Router>
  );
}
