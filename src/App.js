import React from "react";
import Home from './components/Home';
import PizzaForm from './components/PizzaForm'
import {Route, Link,Switch } from 'react-router-dom'
import './App.css'


const App = () => {
  return (
    <div className='/App.css'>
    <div>
      <nav className='nav-container'>
        <Link to='/components/home'>Home</Link>
        <Link to='/pizzaForm'>Pizza</Link>
      </nav>
    </div>
    
    <Switch>
      <Route path='/pizzaForm' component={PizzaForm} />
      <Route path='/' component={Home} />
    </Switch>
    </div>
  );
};
export default App;
