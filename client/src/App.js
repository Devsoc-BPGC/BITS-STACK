import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import './App.css';
import PostQuestion from './components/postQuestionPage';
import PrimarySearchAppBar from './components/navbar/navbar';

function App() {
  return (
    <div className='App'>
    <Router>
      <Switch>
        <Route exact path="/" component={PrimarySearchAppBar} />
        <Route exact path="/PostQuestion" component={PostQuestion} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
