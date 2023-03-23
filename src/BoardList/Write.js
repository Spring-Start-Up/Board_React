import './Write.css';
import Header from './Header.js';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Write() {

    const [response, setResponse] = useState('')

    useEffect(() => {
        axios.post('/write')
        .then(response => setResponse(response.data))
        .catch(error => console.log(error))
    }, []);

    return (
        <div>
            <Header/>
            <div className='write__title'>
                <textarea type="text" placeholder="제목을 입력하세요." autofocus/>
            </div>
            <div className='write__content'>
                <textarea type="text" placeholder="내용을 입력하세요."/>
            </div>
            <button className='submit__button'>완료</button>
        </div>
    );
}

export default Write;
