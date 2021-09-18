import React from 'react';
import './App.css';

import Navbar from './Navbar';
import {HooksTab} from './HooksTab';

const App = (): JSX.Element => {
    return (
        <div className='App'>
            <Navbar/>
            <HooksTab />
        </div>
    );
}

export default App;
