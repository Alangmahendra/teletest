import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import Call from './pages/Call'
import {Route,Switch,BrowserRouter as Router} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/call" component={(props)=> <Call {...props} credentials={this.props.credentials} />}/>
            </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
