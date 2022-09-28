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
    const [page, setPage] = useState(1)


    const lastPokemonIndex = page * pokemonPerPage
    const firstPokemonIndex = lastPokemonIndex - pokemonPerPage
    const pageSelected = charactersList.slice(firstPokemonIndex, lastPokemonIndex)

    const pagesNumber = [];

    for (let i = 1; i <= lastPage; i++) {
        pagesNumber.push(i)
    }

    return (
        <>
            <h2 className='pokedex' data-text='&nbsp;POKÉDEX&nbsp;'>&nbsp;POKÉDEX&nbsp;</h2>

            <header className='header-container'>
                <nav className="gretings-container">
                    <h3 className='gretings'>¡Bienvenido {userName}!</h3>
                </nav>
                <form className="input-container">
                    <input type="text" value={inputName} onChange={e => setInputName(e.target.value)} placeholder='type pokemon name here' />
                    <input type='submit' value='Search' onClick={searchName} />
                </form>
            </header>
            <select className='container_type-pokemon' onChange={(e) => typeSelected(e.target.value)}>
                <option className='type-pokemon' value="Hola">Select a pokemon type</option>
                {
                    type.map(type => (
                        <option className='type-pokemon' key={type.url} value={type.url}>{type.name}</option>
                    ))
                }
            </select>
            <div className="pagination">
                <button className='change-page' onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                >Prev Pag</button>
                
                {
                    pagesNumber.map(number => (
                        <button className='page-number' key={number} onClick={() =>setPage(number)}>{number}</button>
                    ))
                }
                <button className='change-page' onClick={() => setPage(page + 1)}
                    disabled={page === lastPage}
                >Next Pag</button>
            </div>
            <ul className='pokemons-container'>
                {
                    pageSelected?.map(character => (
                        <CharacterCard
                            key={character.url ? character.url : character.pokemon.url}
                            url={character.url ? character.url : character.pokemon.url} />

                    ))
                }
            </ul>
            <div className="pagination">
                <button className='change-page' onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                >Prev Pag</button>
                {
                    pagesNumber.map(number => (
                        <button className='page-number' key={number} onClick={() => setPage(number)}>{number}</button>
                    ))
                }
                <button className='change-page' onClick={() => setPage(page + 1)}
                    disabled={page === lastPage}
                >Next Pag</button>
            </div>
        </>
    );
};

export default Characters;