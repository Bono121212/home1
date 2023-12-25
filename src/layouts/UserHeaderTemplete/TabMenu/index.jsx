import React from 'react'
import { Tab } from "semantic-ui-react";

const panes = [
    {
        menuItem : '커뮤니티 정보',
        render : () =>(
            <Tab.Pane>
                <ul className='tab-list'>
                    <li>
                        방문
                        <strong>13,502</strong>
                    </li>
                    <li>
                        게시글
                        <strong>169</strong>
                    </li>
                    <li>
                        즐겨찾기한 멤버
                        <strong>13</strong>
                    </li>
                </ul>
            </Tab.Pane>
        ),
    },

    {
        menuItem : '내 활동',
        render : () =>(
            <Tab.Pane>
                <ul className='tab-list'>
                    <li>
                        방문
                        <strong>311</strong>
                    </li>
                    <li>
                        게시글
                        <strong>10</strong>
                    </li>
                    <li>
                        댓글
                        <strong>25</strong>
                    </li>
                </ul>
            </Tab.Pane>
        ),
    },
]
const TabMenu = () => <Tab panes={panes} className="tab_area" />;

export default TabMenu;