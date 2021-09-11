import React from 'react';
import {HookTab} from "./types";

const TabNavigations = ({tabs}: { tabs: HookTab[] }): JSX.Element => {
    return (
        <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                {
                    tabs.map((tab: HookTab, index: number) =>
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
                }
            </div>
        </nav>
    )
}

export default TabNavigations;
