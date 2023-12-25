import React, {Component} from 'react';
import { Icon, Image } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import IconClock from '../../../../../images/all/icon-card-time-16-px-green.svg';
import IconGo from '../../../../../images/all/icon-go-a.svg';



class NoteList1 extends Component {
    render() {
        return (
            <div className="mynote">
                <div className="note_info">
                    <Link className="time">
                        <Icon><Image src={IconClock}/></Icon> 
                        12:34
                        <Icon className="icongo"><Image src={IconGo}/></Icon>
                    </Link>
                    <span className="date">2021년 5월 4일 작성</span>
                </div>
                <p className="note">디자인 역량은 Why thinking 과정을 통해 기를 수 있다! 여기서 말하는 Deep change란 ? 디자인 영역에서 중요한 요소. 디자인의 시작은 변화에서 나오며, 사소한 것에서 부터 생각하는 사고력과 변화를 추구하는 창의력이 중요하다. 디자인은 사소한 것에서 부터 시작한다. 우리의 일상과 연관되어 있는 부분이다. 다른 시각에서 바라보는 연습을 시작하면 창의력을 기를 수 있지 않을까. Why thinking 과정을 통해 기를 수 있다! 여기서 말하는 Deep change란 ? 디자인 영역에서 중요한 요소. 디자인의 시작은 변화에서 나오며, 사소한 것에서 부터 생각하는 사고력과 변화를 추구하는 창의력이 중요하다.</p>
            </div>
        )
    }
}


export default NoteList1
