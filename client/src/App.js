import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import './App.css';
import PostQuestion from './pages/postQuestion/page';


function App() {
  return (
    <div className='App'>
    <Router>
      <Switch>
        <Route exact path="/" component={PostQuestion} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
