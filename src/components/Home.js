import React from 'react';
import PizzaForm from './PizzaForm'
import { Route,Link }from 'react-router-dom'
import styled from 'styled-components'


function Home (){
    return(
        <StyledContainer className='home'>
           
            <StyledLink to='/pizzaForm'>Pizza?</StyledLink>
            <Route path='/pizzaForm' component={PizzaForm} />
        </StyledContainer>
    )
}

export default Home


const StyledLink = styled(Link)`
    text-decoration: none;
    border: solid 2px black;
    padding: 18px 35px;
    color: #fafafc;
    margin: 25px;
    border-radius: 12px;
    background-color: #efac31;
    font-weight: bold;
    font-size: 1.5rem;
`;

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-image: url('https://cdn.pixabay.com/photo/2016/07/21/12/14/food-1532380_1280.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    color: fafafc;

`;