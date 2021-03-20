import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import PostQuestion from './pages/postQuestion';
import FilterPage from './pages/filterPage';
import ForumPage from './pages/forumPage';

function App() {
  return (
    <div className='App'>
    <Router>
      <Switch>
        <Route exact path="/" component={FilterPage} />
        <Route exact path="/forums" component={ForumPage} />
        <Route exact path="/post" component={PostQuestion} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
