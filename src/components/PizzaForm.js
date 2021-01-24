import React, { useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import styled from 'styled-components'
import '../App.css'

function PizzaForm(){

    const initialFormState={
        name: '',
        size: '',
        extraCheese: '',
        pepperoni: '',
        sausage: '',
        vCheese: '',
        allMeats: '',
        allVeggies: '',
        specialInstructions: ''  
    }

    const [serverError, setServerError] = useState("");
    const [post, setPost] = useState([]);
    const [formState, setFormState] = useState(initialFormState);
    const [errors, setErrors] = useState(initialFormState);


    const formSchema = yup.object().shape({
        name: yup.string().required("Name must be at least two characters long"),
        size: yup.string(['s','m','l','xl']),
        extraCheese: yup.boolean([true], 'extra cheese'),
        pepperoni: yup.boolean([true], 'pepperoni'),
        sausage: yup.boolean([true], 'sausage'),
        vCheese: yup.boolean([true], 'vChesse'),
        allMeats: yup.boolean([true], 'allMeats'),
        allVeggies: yup.boolean([true], 'all Veggies'),
        specialInstructions: yup.string()
    })

    const validateChange = (e) =>{
        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then((valid)=>{
                setErrors({...errors, [e.target.name]: ""})
            })
            .catch((err)=>{
                console.log("error!", err);
                setErrors({...errors, [e.target.name]: err.errors[0]})
            })
    }

    const inputChange = (e) =>{
        e.persist();
        const newFormData ={
            ...formState, 
            [e.target.name]:e.target.value
        }
        validateChange(e);
        setFormState(newFormData)

        console.log(newFormData)
    }


    const formSubmit = (e)=>{
        e.preventDefault();
        console.log('submit!')
        //POST request 
        axios
        .post("https://reqres.in/api/users", formState)
        .then((response) =>{
            setPost(response.data)
            setFormState(initialFormState);
            setServerError(null);
        })
        .catch((err) =>{
            setServerError("Server Error")
        })
    }


    return(
        <StyledContainer>
            <Heading>Build Your Own Pizza</Heading>
            <StyledForm onSubmit={formSubmit}>
                <Label htmlFor='name'> Name for the Order:</Label>
                    <Input type='text' name='name' data-cy='name' value={formState.name} onChange={inputChange} />
                    {errors.name.length >= 2 ? <p className="error">{errors.name}</p> :null}
                
                    
                <Label htmlFor='size'>Choose a Pizza Size:</Label>
                    <Select name='size'  data-cy='size' value={formState.size} onChange={inputChange}
                        data={['s','m','l','xl']}>
                        <option value="">--Select--</option>
                        <option value="s">Small</option>
                        <option value="m">Medium</option>
                        <option value="l">Large</option>
                        <option value="xl">Extra Large</option>
                    </Select>
                
                
                <ToppingsHeading><strong>Toppings</strong><br />
                <em>Please choose at least one:</em> </ToppingsHeading>
                <ToppingChoice>

                <CheckInput htmlFor='extraCheese'>Extra Cheese
                    <input type='checkbox' name='extraCheese' data-cy='extraCheese' checked={formState.extraCheese} onChange={inputChange} />
                    </CheckInput>

                <CheckInput>Pepperoni
                    <input type='checkbox' name='pepperoni' data-cy='pepperoni' checked={formState.pepperoni} onChange={inputChange} />
                </CheckInput>

                <CheckInput>Sausage
                    <input type='checkbox' name='sausage' data-cy='sausage' checked={formState.sausage} onChange={inputChange} />
                </CheckInput>

                <CheckInput>Vegan Cheese
                    <input type='checkbox' name='vCheese' data-cy='vCheese' checked={formState.vCheese} onChange={inputChange} />
                </CheckInput>

                <CheckInput>All the Meats
                    <input type='checkbox' name='allMeats'  data-cy='allMeats'checked={formState.allMeats} onChange={inputChange} />
                </CheckInput>

                <CheckInput>All the Veggies
                    <input type='checkbox' name='allVeggies' data-cy='allVeggies' checked={formState.allVeggies} onChange={inputChange} />
                </CheckInput>

            </ToppingChoice>

                <label>
                    <TextArea name='specialInstructions' data-cy='specialInstructions'  placeholder='Special Instructions' value={formState.specialInstructions}  onChange={inputChange}/>
                </label>

                
                <Button  type='submit' data-cy='submit' >Order!</Button>
                <pre>{JSON.stringify(post, null, 2)}</pre>
            </StyledForm>
        </StyledContainer>
    )
}
export default PizzaForm


const StyledForm =styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 10px;
`;

const StyledContainer = styled.div`
text-align: justify;
border: solid 2px black;
width: 35%;
background-color: #fafafc;
background-image: none;
`;

const Heading = styled.h1`
background-color: #28283e;
color: #fafafc;
height: 50px;
margin: 0 auto;
padding: 10px;

`;
const ToppingsHeading =styled.p`
    background-color: dimgray;
    width: 95%;
    padding: 10px;
    color: #fcfcfa;
`;

const ToppingChoice =styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 20px;
`;
const Label = styled.label`
    background-color: dimgray;
    width: 95%;
    padding: 10px;
    color: #fcfcfa;
    font-weight: bold;
`;

const Input = styled.input`
    margin: 10px 0 ;
    padding: 5px 0;
    width: 98%;

`;

const Select = styled.select`
    margin: 10px 0;
    padding 5px 0;
    width: 98%;
`;

const CheckInput= styled.label`
    margin: 10px;
    text-align: left;

`;

const TextArea = styled.textarea`
    align-object: center;
    padding 15px;
    margin: 10px 100px;
`
const Button = styled.button`
    padding: 10px 20px;
    margin: 10px 150px
`;