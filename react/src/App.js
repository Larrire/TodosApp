import React from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import './App.css';
import Login from './pages/Login'
import Home from './pages/Home'
import ToDos from './pages/ToDos'

const isLogged = true;

const PrivateRoute = ( {children, ...rest} ) => {
  return (
    <Route {...rest}>
      { isLogged ? children : <Redirect path="/" />  }
    </Route>
  )
}

function App() {
  return (
    <>
        <BrowserRouter>
        
          <Switch>
            
            <Route exact path="/">
              { 
                isLogged === false
                ? <Login /> 
                : <Home />
              }
            </Route>

            <PrivateRoute path="/home">
              <Home />
            </PrivateRoute>

            <PrivateRoute path="/todos">
              <ToDos />
            </PrivateRoute>

          </Switch>

        </BrowserRouter>
    </>
  );
}

export default App;
