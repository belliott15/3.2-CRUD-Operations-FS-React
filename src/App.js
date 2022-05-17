import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import AuthPage from './AuthPage';
import BookList from './BookList';
import CreateBook from './CreateBook';
import UpdateBook from './UpdateBook';
import { logout, getUser } from './services/fetch.utils';
import './App.css';


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
    <Router className='App'>
      <div >
        { token || user ?
          <nav className='App-header'>
            <ul className='navigation'>
              <li>
                <Link to='/books'>Home</Link>
              </li>
              <li>
                <Link to='/add'>Add Book</Link>
              </li>
              <li>
                <div className='logout'>
                  <p>Welcome {email}</p>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              </li>
            </ul>
          </nav> 
          : ''}
        <Switch>
          <Route exact path='/'>
            {token ? 
              <Redirect to='/books' />
              : <AuthPage setEmail={setEmail} setToken={setToken} />
            }
          </Route>
          <Route exact path='/books'>
            {token ? 
              <BookList /> 
              : <Redirect to='/' /> 
            }
          </Route>
          <Route exact path='/add'>
            {token ? 
              <CreateBook /> 
              : <Redirect to='/' /> 
            }
          </Route>
          <Route exact path='/update/:id'>
            {token ? <UpdateBook /> 
              : <Redirect to='/' />
            }
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
