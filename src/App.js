import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch, faCheck, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import './App.css';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className='contener'>
      <div className='header'>
        <FontAwesomeIcon icon={faArrowLeft} className='arrow'></FontAwesomeIcon>
        <h1 className='chatbox'>Chat Box</h1>
      </div>
      <FontAwesomeIcon icon={faSearch} className='Search'></FontAwesomeIcon>
      <input className='input' type='text' name='search' placeholder='Search By Name'></input>
      <div className='conteners'>
      <Link to="/Chat">
        <div className='namebox'>
         <img className='boximg'></img>
         <div className='nametext'>
            <h1 className='nikita'>Mrs.Nikita Sathe</h1>
            <h2 className='sub'>Subject: English</h2>
            <div className='available'>
                <FontAwesomeIcon icon="faCheck" className='check'></FontAwesomeIcon>
                <h1 className='Available'>Available</h1>
            </div>
         </div>
        </div>
        </Link>
        <div className='namebox'>
         <img className='boximg'></img>
         <div className='nametext'>
            <h1 className='nikita'>Mrs.Priyanka Chature</h1>
            <h2 className='sub'>Subject: English</h2>
            <div className='unavailable'>
                <h1 className='Available'>UnAvailable</h1>
            </div>
         </div>
        </div>
      </div>
    </div>        
  );
}

export default App;

