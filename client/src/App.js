import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Ring from './components/Ring/Ring'
import Erring from './components/Erring/Erring'
import Bracel from './components/bracel/Bracel'
import Chain from './components/chain/Chain'
import Details from './components/Details'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css';

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Header} />
          <Route path="/cart" component={Cart} />
          <Route path="/ring" component={Ring} />
          <Route path="/erring" component={Erring} />
          <Route path="/bracel" component={Bracel} />
          <Route path="/chain" component={Chain} />
          <Route path="/details/:id" component={Details} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} />

        </Switch>
      </Router>
    </div>
  )
}

export default App
