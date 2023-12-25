import React, {Component} from 'react';
import { TextArea, Icon, Image, Button, Form } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import IconDelete from '../../../.././../images/all/icon-list-delete-24-px.svg';
import IconClock from '../../../../../images/all/icon-card-time-16-px-green.svg';
import IconGo from '../../../../../images/all/icon-go-a.svg';


class NoteWrite extends Component {
    render() {
        return (
            <div className="mynote mynote_write">
                <div className="note_info">
                    <Link className="time">
                        <Icon><Image src={IconClock}/></Icon> 
                        15:04
                        <Icon className="icongo"><Image src={IconGo}/></Icon>
                    </Link>
                    <span className="date">2021년 5월 4일 작성</span>
                </div>
                <Form>
                    <TextArea placeholder='내용을 입력하시오' />
                </Form>
                
                <div className="note_btn">
                    <Button className="delete"><Image src={IconDelete}/></Button>
                    <Button className="cancel">취소</Button>
                    <Button className="save">저장</Button>
                    <span className="txt_cnt">
                        <span className="txt_now">00</span>
                        /<span>1000</span>
                    </span>
                </div>
            </div>
        )
    }
}


export default NoteWrite
