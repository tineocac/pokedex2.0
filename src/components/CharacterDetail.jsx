import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const CharacterDetail = () => {

    const [ character, setCharcater ] = useState({});

    useEffect( () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then ( res => setCharcater( res.data))
    }, [])

    // console.log(character);

    const { id } = useParams()

    return (
        <div>
            <h1>Character Detail</h1>
            <h2> Character Number: {id}</h2>
            <h3>{character.name}</h3>
            <img src={character.sprites?.other.dream_world.front_default} alt="" />


        </div>
    );
};

export default CharacterDetail;