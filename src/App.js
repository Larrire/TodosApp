import React from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import './App.css';
import Login from './pages/Login'
import Home from './pages/Home'
import ToDos from './pages/ToDos'

let isLogged = true;

const PrivateRoute = ( {children, ...rest} ) => {
  return (
    <Route {...rest}>
      { isLogged ? children : <Redirect to="/login" />  }
    </Route>
  )
}

function App() {
  return (
    <>
        <BrowserRouter>
          <Switch>
            
            <Route exact path="/">
              <Redirect to="/home"/>
            </Route>

            <Route path="/login">
              {
                (!isLogged)
                ? <Login />
                : <Redirect to="/home"/>
              }
            </Route>

            <PrivateRoute path="/home">
              <Home />
            </PrivateRoute>

            <PrivateRoute path="/todos">
              <ToDos />
            </PrivateRoute>

            <Route path="*">
              Page not found
            </Route>

          </Switch>
        </BrowserRouter>
    </>
  );
}

export default App;
