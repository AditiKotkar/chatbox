import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import './Chat.css';
function Chat() {
  return (
    <div className='contener'>
      <div className='header'>
      <FontAwesomeIcon icon={faArrowLeft} className='arrow'></FontAwesomeIcon>
        <img></img>
        <div className='name'>
          <h1 className='niki'>Nikita Sathe</h1>
          <h2 className='online'>online</h2>
        </div>
      </div>
      <div className='chat'>
        <div className='conten'>
          <img className='sendimg'></img>
          <div className='sendmsg'></div>
        </div>
        <div className='conten'>
          <div className='replymsg'></div>
          <img className='replyimg'></img>
        </div>
      </div>
      <div className='text'>
      <textarea className='write' rows="3" placeholder="Say Something..."></textarea>
      <FontAwesomeIcon icon={faMicrophone} className='microphone'></FontAwesomeIcon>
      </div>
    </div>        
  );
}

export default Chat;
