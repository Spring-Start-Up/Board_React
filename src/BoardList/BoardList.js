import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import WriteButton from './WriteButton.js';
import Header from './Header.js';
import './BoardList.css';

function BoardList() {

  const [boardList, setBoardList] = useState('')

  useEffect(() => {
      axios.get('/board/list')
      .then(response => setBoardList(response.data))
      .catch(error => console.log(error))
      console.log(boardList);
  }, []);

  return (
    <div>
      <Header/>
      <div className='board__header'>
        <div className='board__user'>
          <i><FontAwesomeIcon icon={faUser} size="2x" /></i>
          <p>공대생</p>
          <p className='board__date'>2023-02-21</p>
        </div>
          <div className='board__icons'>
            <i><FontAwesomeIcon icon={faHeart}/> 5 </i>
            <i><FontAwesomeIcon icon={faStar}/> 5 </i>
          </div>
      </div>
      <div className='board'>
        <div className='board__title'>
            <h4>코딩 꿀팁 공유합니다.</h4>
        </div>
        <div className='board__content'>
          <p>사실 그런 건 없지롱 블라블라 블라블라 블라블라 블라블라</p>
        </div>
      </div>
      <hr></hr>
      <WriteButton/>
    </div>
  );
}

export default BoardList;

