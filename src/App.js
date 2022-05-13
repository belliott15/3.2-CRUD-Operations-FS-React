import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import AuthPage from './AuthPage';
import BookList from './BookList';
import CreateBook from './CreateBook';
import { logout, getUser } from './services/fetch.utils';
import UpdateBook from './UpdateBook';

export default function App() {
  // tracking state
  const [email, setEmail] = useState();
  const [token, setToken] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    async function fetchUser(){
      const user = await getUser();
      setUser(user);
    }
    fetchUser();
  }, []);

  async function handleLogout(){
    await logout();
    setEmail('');
    setToken('');
    setUser('');
  }
  return (
    <Router>
      <div>
        {/* { token ? */}
        <nav>
          <ul className='navigation'>
            <li>
              <Link to='/books'>Home</Link>
            </li>
            <li>
              <Link to='/add'>Add Book</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </nav> 
        {/* : ''} */}
        <Switch>
          <Route exact path='/'>
            {/* {user ?  */}
            <AuthPage setEmail={setEmail} setToken={setToken} />
            {/* // } */}
          </Route>
          <Route exact path='/books'>
            {/* {user ?  */}
            <BookList /> 
            {/* } */}
          </Route>
          <Route exact path='/add'>
            {/* {user ?  */}
            <CreateBook /> 
            {/* // } */}
          </Route>
          <Route exact path='/update/:id'>
            {user ? <UpdateBook /> : <Redirect to='/' />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
