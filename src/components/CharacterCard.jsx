import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CharacterCard = ({ url }) => {
    const [character, setCharacter] = useState({});

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(url).then(res => setCharacter(res.data))
    }, [])

    // console.log(character);

    return (
        <div className='pokemon-card' onClick={() => navigate(`/characters/${character.id}`)}>
            <h1>{character.name}</h1>
            <img className='pokemon-img' src={character.sprites?.other.dream_world.front_default} alt="pokemon-img" />
        </div>
    );
};

export default CharacterCard;