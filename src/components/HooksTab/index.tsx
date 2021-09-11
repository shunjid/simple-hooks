import React from 'react';
import State from '../State';
import {HookTab} from "./types";
import TabNavigations from "./TabNavigations";
import TabContents from "./TabContents";

export const Hooks = (): JSX.Element => {
    const tabs: HookTab[] = [
        {
            link: 'home',
            title: 'useState',
            component: <State/>,
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
