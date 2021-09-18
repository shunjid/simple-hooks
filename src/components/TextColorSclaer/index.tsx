import {useReducer} from 'react';
import {ScalerAction, ScalerState} from './types';

const step: number = 50;
const limitRGB = (num: number) => (num < 0 ? 0 : num > 255 ? 255 : num);

const reducer = (state: ScalerState, action: ScalerAction) => {
    switch (action.type) {
        case 'INCREMENT_R':
            return {...state, ...{r: limitRGB(state.r + step)}};
        case 'DECREMENT_R':
            return {...state, ...{r: limitRGB(state.r - step)}};
        case 'INCREMENT_G':
            return {...state, ...{g: limitRGB(state.g + step)}};
        case 'DECREMENT_G':
            return {...state, ...{g: limitRGB(state.g - step)}};
        case 'INCREMENT_B':
            return {...state, ...{b: limitRGB(state.b + step)}};
        case 'DECREMENT_B':
            return {...state, ...{b: limitRGB(state.b - step)}};
        default:
            return state;
    }
};

const TextColorScaler = (): JSX.Element => {
    const [{r, g, b}, dispatch] = useReducer(reducer, {r: 0, g: 0, b: 0});

    return (
        <div>
            <h1 style={{color: `rgb(${r}, ${g}, ${b})`}}>useReducer Example</h1>
            <div className='mb-3'>
                <button onClick={() => dispatch({type: 'INCREMENT_R'})}
                        className='btn btn-outline-danger mx-3'>+
                </button>
                <button onClick={() => dispatch({type: 'DECREMENT_R'})}
                        className='btn btn-outline-danger mx-3'>-
                </button>
            </div>
            <div className='mb-3'>
                <button onClick={() => dispatch({type: 'INCREMENT_G'})}
                        className='btn btn-outline-success mx-3'>+
                </button>
                <button onClick={() => dispatch({type: 'DECREMENT_G'})}
                        className='btn btn-outline-success mx-3'>-
                </button>
            </div>
            <div className='mb-3'>
                <button onClick={() => dispatch({type: 'INCREMENT_B'})}
                        className='btn btn-outline-primary mx-3'>+
                </button>
                <button onClick={() => dispatch({type: 'DECREMENT_B'})}
                        className='btn btn-outline-primary mx-3'>-
                </button>
            </div>
        </div>
    );
};

export default TextColorScaler;
