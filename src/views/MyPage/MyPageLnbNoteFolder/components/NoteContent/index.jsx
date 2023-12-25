import React, {Component} from 'react';
import { Icon, Button } from 'semantic-ui-react';
import NoteList1 from '../NoteList1';
import NoteList2 from '../NoteList2';
import NoteWrite from '../NoteWrite';


class NoteContent extends Component {
    render() {
        return (
            <div className="note_content">
                <div className="note_content_total">
                    <strong className="txt">작성한 노트</strong>
                    <span className="cnt">2개</span>

                   {/* 노트 작성 시작하게되면 폰트 색상 및 아이콘 변경이 있습니다.  active 클래스 추가될 경우 폰트 색상(회색--> 청록색 ) 변경됩니다 */}
                   <Button className="btn_write active"><Icon /><span>Note</span></Button>
                </div>

                <NoteWrite />

                <NoteList2 />
                
                <NoteList1 />
            </div>
        )
    }
}


export default NoteContent
