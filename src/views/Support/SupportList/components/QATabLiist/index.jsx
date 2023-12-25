import React from 'react'
import {Tab} from 'semantic-ui-react'

import QAList from '../QAList'
// import ButtonGroup from "../ButtonGroup";

const panes = [
    {
        menuItem: '모두 보기',
        render: () => (
            <Tab.Pane attached={false} basic>
                <QAList/>
            </Tab.Pane>
        ),
    },
    {
        menuItem: '답변 완료',
        render: () => (
            <Tab.Pane attached={false} basic>
                <QAList/>
            </Tab.Pane>
        ),
    },
    {
        menuItem: '답변 대기',
        render: () => (
            <Tab.Pane attached={false} basic>
                <QAList/>
            </Tab.Pane>
        ),
    },
    {
        menuItem: 'Contact US',
        // render: () => (
        //     <Tab.Pane attached={false}>
        //         <QAList/>
        //     </Tab.Pane>
        // ),
    }
]

const QATabList = () => (
    <Tab menu={{secondary: true}} panes={panes}/>
)

export default QATabList
