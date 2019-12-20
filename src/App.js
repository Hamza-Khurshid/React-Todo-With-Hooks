import React from 'react';
import './App.css';
import Home from './components/Home';
import AddTask from './components/AddTask';
import EditTask from './components/EditTask';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/add">
            <AddTask />
          </Route>
          <Route path="/edit">
            <EditTask />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
