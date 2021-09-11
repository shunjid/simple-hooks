import React, {useState} from 'react';

import {CardTheme} from './types';
import {themes, defaultTheme} from './data';

const StateComponent = (): JSX.Element => {
    const [theme, setTheme] = useState<CardTheme>(defaultTheme);

    const cardStyle: Record<string, string> = {
        cardRoot: (() => `card text-${theme.foreground} bg-${theme.background || defaultTheme.foreground} mb-3`)(),
    };

    return (
        <div className={cardStyle.cardRoot} style={{maxWidth: '18rem'}}>
            <div className='card-body'>
                <h5 className='card-title'>Sample Card</h5>
                <p className='card-text'>When you select a color, then the theme of this card changes</p>

                <label>Select a color</label>
                <select
                    className='custom-select mx-1'
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setTheme(themes.filter((eachTheme: CardTheme) => eachTheme.background === e.target.value)[0])}
                    onBlur={(e: React.ChangeEvent<HTMLSelectElement>) => setTheme(themes.filter((eachTheme: CardTheme) => eachTheme.background === e.target.value)[0])}
                    defaultValue={defaultTheme.background}
                >
                    {themes.map((eachTheme: CardTheme) => <option value={eachTheme.background} key={eachTheme.background}>{eachTheme.name}</option>)}
                </select>
            </div>
        </div>
    );
};

export default StateComponent;
