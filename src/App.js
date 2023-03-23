import './App.css';
import BoardList from './BoardList/BoardList.js';
import Write from './BoardList/Write.js';
import { BrowserRouter as Routes, Route, Switch } from 'react-router-dom';

function App() {
    return (
        <div>
            <Routes>
                <Switch>
                    <Route path='/write' component={Write} />
                    <Route path='/' component={BoardList} />
                </Switch>
            </Routes>
        </div>
    );
}

export default App;