import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { setLoader } from '../store/slices/isLoading';

const CharacterDetail = () => {

    const [character, setCharcater] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setLoader(false))
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setCharcater(res.data))
            .finally(res => dispatch(setLoader(false)))
    }, [])

    const { id } = useParams()

    const navigate = useNavigate();

    return (
        <>
            <h2 data-text='&nbsp;PoKéMoN&nbsp;'>&nbsp;PoKéMoN&nbsp;</h2>
            <i className="fa-solid fa-circle-arrow-left" onClick={() => navigate(-1)}></i>

            <div className='pokemon-detail'>

                <img className='pokemon-img_detail' src={character.sprites?.other.dream_world.front_default} alt="" />
                <div className="characteristic">
                    <ul className='wandh'>
                        <li>Weight <b>{character.weight}</b></li>
                        <li>Height <b>{character.height}</b></li>
                    </ul>
                    <h3>{character.name}</h3>
                    <hr />
                    <h3 className='number-pokemon'><span>#</span> {id}</h3>
                </div>
                <i className="fa-solid fa-sliders" onClick={() => navigate('/settings')}></i>
            </div>
        </>

    );
};

export default CharacterDetail;