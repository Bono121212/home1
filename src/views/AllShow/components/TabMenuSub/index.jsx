import React from "react";

import {Button, Image, Segment, Tab} from "semantic-ui-react";
import {Link} from 'react-router-dom';


const panes = [
    {
        menuItem : 'tabSub01',
        render : () =>(
            <Tab.Pane>
               <div>tabContent01</div>

            </Tab.Pane>
        ),
    },

    {
        menuItem : 'tabSub02',
        render : () =>(
            <Tab.Pane>
                <div>tabContent02</div>
            </Tab.Pane>
        ),
    },
]
const TabMenuSub = () => <Tab panes={panes} className="tab-area-sub" />;

export default TabMenuSub;