import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CharacterCard = ({ url }) => {
    const [character, setCharacter] = useState({});

    const navigate = useNavigate()

    useEffect(() => {
        axios
            .get(url)
            .then(res => setCharacter(res.data))

        // axios
        //     .get('https://pokeapi.co/api/v2/stat/1/')
        //     .then(res => console.log(res.data.results))

    }, [])



    // console.log(character);


    return (
        <div className='pokemon-card' onClick={() => navigate(`/characters/${character.id}`)}>
            <h1 className='pokemon-name'>{character.name}</h1>
            <h3><b>Types: </b>{character.types?.map(type => <p key={type.type.name}>{type.type.name}</p>)}</h3>
            <div className="info-container">
                <ul className="characteristics">

                </ul>
                <img className='pokemon-img' src={character.sprites?.other.dream_world.front_default} alt="pokemon-img" />
            </div>
            
        </div>

    );
};

export default CharacterCard;