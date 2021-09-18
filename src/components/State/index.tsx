import React, {useState} from 'react';

import {CardTheme} from './types';
import {themes, defaultTheme} from './data';

const StateComponent = (): JSX.Element => {
    const [cardTitle, cardDescription, cardSelectLabel]: [
        cardTitle: string,
        cardDescription: string,
        cardSelectLabel: string
    ] = [
        'Sample Card',
        'When you select a color, then the theme of this card changes',
        'Select a color'
    ];
    const [theme, setTheme]: [
        theme: CardTheme,
        setTheme: React.Dispatch<React.SetStateAction<CardTheme>>
    ] = useState<CardTheme>(defaultTheme);

    const cardStyle: Record<string, string> = {
        cardRoot: (() =>
            `card text-${theme.foreground} bg-${
                theme.background || defaultTheme.foreground
            } mb-3`)(),
    };

    const getSelectedTheme = (selectedThemeBackground: string): CardTheme => {
        return themes.filter(
            (eachTheme: CardTheme) => eachTheme.background === selectedThemeBackground
        )[0];
    }

    return (
        <div className={cardStyle.cardRoot} style={{maxWidth: '18rem'}}>
            <div className='card-body'>
                <h5 className='card-title'>{cardTitle}</h5>
                <p className='card-text'>{cardDescription}</p>
                <label>{cardSelectLabel}</label>
                <select
                    className='custom-select mx-1'
                    defaultValue={defaultTheme.background}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        setTheme(getSelectedTheme(e.target.value))
                    }
                    onBlur={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        setTheme(getSelectedTheme(e.target.value))
                    }
                >
                    {themes.map((eachTheme: CardTheme) => {
                        return (
                            <option value={eachTheme.background} key={eachTheme.background}>
                                {eachTheme.name}
                            </option>
                        );
                    })}
                </select>
            </div>
        </div>
    );
};

export default StateComponent;
