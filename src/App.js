import React from "react";
import Home from './components/Home';
import PizzaForm from './components/PizzaForm'
import {Route, Link,Switch } from 'react-router-dom'
import styled from 'styled-components';
import './App.css'


const App = () => {
  return (
    <AppContainer>
      <StyledNav className='nav-container'>
      <h1>Lambda Eats</h1>
        <StyledLink to='/components/home'>Home</StyledLink>
        <StyledLink>Help</StyledLink>
      </StyledNav>
    
    <StyledDiv>
    <Switch>
      <Route path='/pizzaForm' component={PizzaForm} />
      <Route path='/' component={Home} />
    </Switch>
    </StyledDiv>
    </AppContainer>
  );
};
export default App;


const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25%;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #28283e;
  padding: 25px;
  color: #fafafc;
`;

const StyledLink =styled(Link)`
  margin: 10px;
  text-decoration: none;
  color: #fafafc;
  font-weight: bolder;


`;
const AppContainer = styled.div`

`;


