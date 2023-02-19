import './App.css';
import Guideline from './BoardList/Guideline.js';
import React, {useEffect, useState} from 'react';
import axios from 'axios'; // 백엔드와 연결하기 위한 axios 임포트

function App() {
   const [hello, setHello] = useState('') // hello에 백엔드 데이터를 받아올 예정

    useEffect(() => {
        axios.get('/api/hello') // '/api/hello'에 데이터 요청
        .then(response => setHello(response.data)) // hello 변수에 응답 데이터 저장
        .catch(error => console.log(error)) // 에러 캐치
    }, []);

    return (
        <div className="App">
            백엔드에서 가져온 데이터입니다 : {hello} 
            <Guideline/>
        </div>
    );
}

export default App;