import React from 'react';
import '../App.css'

function PizzaForm(){

    return(
        <div className='pizzaComponent'>
            <h1>Pizza</h1>
            <form className='pizzaForm'>
                <label> 
                    <input />
                </label>
                    <input />
                <label>

                </label>
                        
                <label>
                    <input type='checkbox' />
                </label>

                <label>
                    <input type='checkbox' />
                </label>

                <label>
                    <input type='checkbox' />
                </label>

                <label>
                    <input type='checkbox' />
                </label>

                <label>
                    <textarea />
                </label>

                <button>Order!</button>
            </form>
        </div>
    )
}
export default PizzaForm