import React from 'react';
import State from '../State';
import {HookTab} from "./types";

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
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        {
                            tabs.map((tab, index: number) => {
                                return (
                                    <button
                                        className={`nav-link ${index === 0 ? 'active' : ''}`}
                                        id={`nav-${tab.link}-tab`}
                                        data-bs-toggle="tab"
                                        data-bs-target={`#nav-${tab.link}`}
                                        type="button"
                                        role="tab"
                                        aria-controls={`nav-${tab.link}`}
                                        aria-selected={index === 0}
                                        key={tab.title + tab.link}
                                    >
                                        {tab.title}
                                    </button>
                                )
                            })
                        }
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    {
                        tabs.map((tab, index: number) => {
                            return (
                                <div
                                    className={`tab-pane fade show ${index === 0 ? 'active' : ''}`}
                                    id={`nav-${tab.link}`}
                                    role='tabpanel'
                                    aria-labelledby={`nav-${tab.link}-tab`}
                                    key={tab.link}
                                >
                                    {tab.component}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
