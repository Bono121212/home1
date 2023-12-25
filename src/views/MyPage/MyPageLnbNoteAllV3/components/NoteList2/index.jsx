import React, {Component} from 'react';
import { Icon, Image } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import IconClock from '../../../../../images/all/icon-card-time-16-px-green.svg';
import IconGo from '../../../../../images/all/icon-go-a.svg';


class NoteList2 extends Component {
    render() {
        return (
            <div className="mynote">
                <div className="note_info">
                    <Link className="time">
                        <Icon><Image src={IconClock} alt="시계이미지"/></Icon> 
                        23:45
                        <Icon className="icongo"><Image src={IconGo} alt="새로고침"/></Icon>
                    </Link>
                    <span className="date">2021년 5월 4일 작성</span>
                </div>
            </div>
        )
    }
}


export default NoteList2
