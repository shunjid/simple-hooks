import React from 'react';
import './App.css';

import Navbar from './Navbar';
import {Hooks} from './Hooks';

const App = (): JSX.Element => {
    return (
        <div className='App'>
            <Navbar/>
            <Hooks />
        </div>
    );
}

export default App;
