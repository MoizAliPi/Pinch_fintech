import React, { Component } from 'react';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import LoginPage from './components/Login/index';
import UploadPage from './components/Upload/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact={ true } path="/" component={ LoginPage } />
            <Route path="/upload" component={ UploadPage } />
          </Switch>
        </div> 
      </Router>
    );
  }
}

export default App;
