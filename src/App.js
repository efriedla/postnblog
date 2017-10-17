import React, { Component } from 'react';

import Homepage from './Homepage';
import Main from './Main';
import Movie from './Movie';
import Food from './Food';
import About from './About';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (

      <Router>
        <div>
        <nav className="App-title App ">
        <Link to="/">Home</Link>{' '}
         <Link to="/Main">See Our Main blog</Link>{' '}
         <Link to="/Movie">See Our Movie blog!</Link>
         <Link to="/Food">See Our Food blog!</Link>
         <Link to="/About">About!</Link>
        </nav>
          <Route exact path="/" component={Homepage} />
          <Route path="/main" component={Main} />
          <Route path="/movie" component={Movie} />
          <Route path="/food" component={Food} />
          <Route path="/about" component={About} />

        </div>
      </Router>
    )
  }
}


export default App;
