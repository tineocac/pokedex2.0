import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Settings.css'
import darkMode from '../helpers/darkMode';

const Settings = () => {

    const navigate = useNavigate();

    return (
        <>
            <h2 className='settings' data-text='&nbsp;Settings&nbsp;'>&nbsp;Settings&nbsp;</h2>

            <i className="fa-solid fa-circle-arrow-left" onClick={() => navigate(-1)}></i>
            <div className="settings-container">
                <div className="theme-container">
                    <h1>Theme</h1>
                    
                    <label className='toggle' >
                        <p>Dark</p>
                        <input type="checkbox"  onClick={darkMode}/>
                        <span className='check'></span>
                        <p>Light</p>
                    </label>
                    
                </div>
                <div className="items-container">
                    <h1>Items per page</h1>
                    <select className='container_type-pokemon proof' name="" id="">
                        <option value=""> 4 items</option>
                        <option value=""> 8 items</option>
                        <option value=""> 16 items</option>
                        <option value=""> 20 items</option>
                    </select>
                </div>
            </div>

        </>
    );
};

export default Settings;