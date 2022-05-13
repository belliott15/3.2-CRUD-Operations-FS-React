import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import AuthPage from './AuthPage';
import BookList from './BookList';
import CreateBook from './CreateBook';
import UpdateBook from './UpdateBook';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/books'>Home</Link>
            </li>
            <li>
              <Link to='/add'>Add Book</Link>
            </li>
            <li>
              <Link to='/update'>Update Book</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/'>
            <AuthPage />
          </Route>
          <Route path='/books'>
            <BookList />
          </Route>
          <Route path='/add'>
            <CreateBook />
          </Route>
          <Route path='/update'>
            <UpdateBook />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
