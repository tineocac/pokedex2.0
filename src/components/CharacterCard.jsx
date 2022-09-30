import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoader } from '../store/slices/isLoading';

const CharacterCard = ({ url }) => {

    const [character, setCharacter] = useState({});
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const lookForImgs = () => {
        if( character?.sprites?.other.home?.front_default)
        return character?.sprites?.other.home?.front_default
        else return character?.sprites?.front_default
    }

    useEffect(() => {
        dispatch(setLoader(true))
        axios
            .get(url)
            .then(res => setCharacter(res.data))
            .finally(res => dispatch(setLoader(false)))

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
                <img className='pokemon-img' src={`https://cdn.traction.one/pokedex/pokemon/${character.id}.png`} 
                onError={({target}) => {
                    target.onerror = null;
                    target.src=lookForImgs()
                }} 
                alt="pokemon-img" />
            </div>

        </div>

    );
};

export default CharacterCard;