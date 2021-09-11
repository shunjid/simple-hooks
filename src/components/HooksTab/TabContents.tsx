import React from 'react';
import {HookTab} from "./types";

const TabContents = ({tabs}: { tabs: HookTab[] }): JSX.Element => {
    return (
        <div className="tab-content" id="nav-tabContent">
            {
                tabs.map((tab: HookTab, index: number) =>
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
            }
        </div>
    )
}

export default TabContents;
