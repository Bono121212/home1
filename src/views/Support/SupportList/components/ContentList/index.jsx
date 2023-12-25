import React from 'react'
import {Tab, Label, Menu, Button} from 'semantic-ui-react'
import FAQTabLiist from '../FAQTabLiist'
import NoticeList from '../NoticeList'
import QATabLiist from '../QATabLiist'

const panes = [
    {
        menuItem: (
            <Menu.Item key='messages'>
                Notice<Label color='red'>N</Label>
            </Menu.Item>
        ),
        render: () => (
            <Tab.Pane>
                <NoticeList/>
            </Tab.Pane>
        ),
    },
    {
        menuItem: (
            <Menu.Item key='messages'>
                FAQ
            </Menu.Item>
        ),
        render: () => (
            <Tab.Pane>
                <FAQTabLiist/>
            </Tab.Pane>
        ),
    },
    {
        menuItem: (
            <Menu.Item key='messages'>
                Q&A<Label color='red'>N</Label>
            </Menu.Item>
        ),
        render: () => (
            <Tab.Pane>
                <div className='btn-group'>
                    <div className="right">
                        <Button basic>모두보기</Button>
                        <Button basic>답변대기</Button>
                        <Button basic>답변완료</Button>
                        <Button basic>Contact US</Button>
                    </div>
                </div>
                <QATabLiist/>
            </Tab.Pane>
        ),
    },
]
const ContentList = () => <Tab panes={panes}/>

export default ContentList
