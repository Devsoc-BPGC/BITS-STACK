import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
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
