import React from 'react';
import State from '../State';
import DynamicClock from '../DynamicClock';
import {HookTab} from "./types";
import TabNavigations from "./TabNavigations";
import TabContents from "./TabContents";

export const HooksTab = (): JSX.Element => {
    const tabs: HookTab[] = [
        {
            link: 'home',
            title: 'useState',
            component: <State/>,
        },
        {
            link: 'dynamicClock',
            title: 'useEffect',
            component: <DynamicClock/>,
        }
    ]

    return (
        <div className='mx-3'>
            <div className='row'>
                <TabNavigations tabs={tabs}/>
                <TabContents tabs={tabs}/>
            </div>
        </div>
    )
}
