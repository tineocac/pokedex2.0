import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CharacterCard from './CharacterCard';

const Characters = () => {
    const userName = useSelector(state => state.userName);

    const [charactersList, setCharacterList] = useState([])
    const [type, setType] = useState([])
    const [inputName, setInputName] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        axios
            .get('https://pokeapi.co/api/v2/type/')
            .then(res => setType(res.data.results))

        axios
            .get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1155')
            .then(res => setCharacterList(res.data.results))


    }, []);

    const searchName = () => {
        navigate(`/characters/${inputName}`)
    }

    const typeSelected = (typeUrl) => {
        axios
            .get(typeUrl)
            .then(res => setCharacterList(res.data.pokemon));
            setPage(1)
    }

    const pokemonPerPage = 10
    const lastPage = Math.ceil(charactersList.length / pokemonPerPage)
    const [ page, setPage] = useState(1)
   

    const lastPokemonIndex = page * pokemonPerPage
    const firstPokemonIndex = lastPokemonIndex - pokemonPerPage
    const pageSelected = charactersList.slice(firstPokemonIndex, lastPokemonIndex)

    const pagesNumber = [];

    for ( let i = 1; i <= lastPage; i++){
            pagesNumber.push(i)
    }

    return (
        <div className='route'>
            <h1>Characters</h1>
            <h2>Bienvenido {userName}</h2>
            <form className="input-container">
                <input type="text" value={inputName} onChange={e => setInputName(e.target.value)} />
                <button onClick={searchName}>Search</button>
            </form>
            <select onChange={(e) => typeSelected(e.target.value)}>
                <option value="Hola">Select a pokemon type</option>
                {
                    type.map(type => (
                        <option key={type.url} value={type.url}>{type.name}</option>
                    ))
                }
            </select>
            <div className="buttons">
                <button onClick={() => setPage(page - 1)}
                disabled={page === 1}
                >Prev Pag</button>
                {
                    pagesNumber.map( number => (
                        <button key={number} onClick={() => setPage(number)}>{number}</button>
                    ))
                }
                <button onClick={() => setPage( page + 1)}
                disabled={page === lastPage}
                >Next Pag</button>
            </div>
            <ul>
                {
                    pageSelected?.map(character => (
                        <CharacterCard
                            key={character.url ? character.url : character.pokemon.url}
                            url={character.url ? character.url : character.pokemon.url} />

                    ))
                }
            </ul>
            <div className="buttons">
                <button onClick={() => setPage(page - 1)}
                disabled={page === 1}
                >Prev Pag</button>
                {
                    pagesNumber.map( number => (
                        <button key={number} onClick={() => setPage(number)}>{number}</button>
                    ))
                }
                <button onClick={() => setPage( page + 1)}
                disabled={page === lastPage}
                >Next Pag</button>
            </div>
            
        </div>
    );
};

export default Characters;