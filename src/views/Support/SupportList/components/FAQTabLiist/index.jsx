import React from 'react'
import {Tab} from 'semantic-ui-react'

import FAQAccordion from '../FAQAccordion'

const panes = [
    {
        menuItem: '학습문의',
        render: () => (
            <Tab.Pane attached={false} basic>
                <FAQAccordion/>
            </Tab.Pane>
        ),
    },
    {
        menuItem: '이수시간',
        render: () => (
            <Tab.Pane attached={false} basic>
                <FAQAccordion/>
            </Tab.Pane>
        ),
    },
    {
        menuItem: '회원정보',
        render: () => (
            <Tab.Pane attached={false} basic>
                <FAQAccordion/>
            </Tab.Pane>
        ),
    },
    {
        menuItem: '결제, 환불',
        render: () => (
            <Tab.Pane attached={false} basic>
                <FAQAccordion/>
            </Tab.Pane>
        ),
    },
]

const FAQList = () => (
    <Tab menu={{secondary: true}} panes={panes}/>
)

export default FAQList
