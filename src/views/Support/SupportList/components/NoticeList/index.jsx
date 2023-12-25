import React from 'react'
import { Icon, Segment } from 'semantic-ui-react'
import ButtonGroup from "../ButtonGroup";


const NoticeList = () => (
    <div>
        <Segment>
            <Icon className='exclamation circle' color='red'/>
            SK University 오픈
            <div className="fl-right">
                <span>33명 읽음</span> | <span>2020.01.15</span>
            </div>
        </Segment>
        <Segment>
            <Icon className='exclamation circle' color='red'/>
            SK University 오픈
            <div className="fl-right">
                <span>33명 읽음</span> | <span>2020.01.15</span>
            </div>
        </Segment>
        <Segment>
            SK University 오픈
            <div className="fl-right">
                <span>33명 읽음</span> | <span>2020.01.15</span>
            </div>
        </Segment>
        <Segment>
            SK University 오픈
            <div className="fl-right">
                <span>33명 읽음</span> | <span>2020.01.15</span>
            </div>
        </Segment>
        <ButtonGroup/>
    </div>
)

export default NoticeList
