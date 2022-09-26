import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeName } from '../store/slices/userName.slice';

const UserInput = () => {

    const dispatch = useDispatch()

    const [userInput, setUserInput] = useState('')

    const navigate= useNavigate()

    const userDispatch = () => {
        dispatch(changeName(userInput))
        navigate('/characters')
    }

    return (
        <div className='route'>
            <h1>User input</h1>
            <form className="input-container">
                <input type="text" value={userInput} onChange={ e => setUserInput( e.target.value)}/>
                <button onClick={userDispatch} >Login</button>
            </form>
        </div>
    );
};

export default UserInput;