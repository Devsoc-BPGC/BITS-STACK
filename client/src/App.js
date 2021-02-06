import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import './App.css';
import PostQuestion from './components/PostQuestion/postQuestionPage';
import PrimarySearchAppBar from './components/navbar/navbar';
import DashBoard from './components/DashBoard/DashBoard';

function App() {
  return (
    <div className='App'>
    <Router>
      <Switch>
        <Route exact path="/" component={DashBoard} />
        <Route exact path="/PostQuestion" component={PostQuestion} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
