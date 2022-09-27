import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeName } from '../store/slices/userName.slice';

const UserInput = () => {

    const dispatch = useDispatch()

    const [userInput, setUserInput] = useState('')

    const navigate = useNavigate()

    const userDispatch = () => {
        dispatch(changeName(userInput))
        navigate('/characters')
    }

    return (
        <>
            <>
                <h2 data-text='&nbsp;POKÉDEX&nbsp;'>&nbsp;POKÉDEX&nbsp;</h2>
            </>
            <div className='route'>

                <div className="gretings-container">
                    <h3 className='gretings'>¡Hi trainer!</h3>
                    <p>In order to get started, please enter your name below</p>
                </div>
                <form className="input-container">
                    <input type="text" value={userInput} onChange={e => setUserInput(e.target.value)} placeholder='type your name here...' />
                    <input type='submit' value='Login' onClick={userDispatch} />
                </form>
            </div>
        </>
    );
};

export default UserInput;