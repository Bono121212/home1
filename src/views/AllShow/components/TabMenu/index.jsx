import React from 'react'
import { Tab } from "semantic-ui-react";
// import TabMenuSub from './components/TabMenuSub';

const panes = [
    {
        menuItem : 'tab01',
        render : () =>(
            <Tab.Pane>
                <div>tabContent02</div>
            </Tab.Pane>
        ),
    },

    {
        menuItem : 'tab02',
        render : () =>(
            <Tab.Pane>
                <div>tabContent02</div>
            </Tab.Pane>
        ),
    },
]
const TabMenu = () => <Tab panes={panes} className="tab-area-01" />;

export default TabMenu;