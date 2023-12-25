import React, {Component} from 'react';
import { TextArea, Icon, Image, Button, Form } from 'semantic-ui-react';
import IconDelete from '../../../.././../images/all/icon-note-delete-24-px.svg';
import IconNote from '../../../../../images/all/btn-lms-note-14-px.svg';

class NoteWrite extends Component {
    render() {
        return (
            <div className="mynote mynote_write">
                <div className="note_info">
                    <span className="time">
                        <Icon><Image src={IconNote} alt="노트이미지"/></Icon> 
                        Note 2
                    </span>
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
