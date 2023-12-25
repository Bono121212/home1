import React, {Component} from 'react';
import { Select, Label } from 'semantic-ui-react';

class NoteTitle1 extends Component {
    render() {
        const FolderOptions = [
            { key: '폴더 미지정', value: '폴더 미지정', text: '폴더 미지정' },
            { key: '폴더 1', value: '폴더 1', text: '폴더 1' },
        ]
        return (
            <div className="note_title">
                <div className="tit">
                    <Label color='purple'>AI</Label>
                    <strong className="header">AI/DT 고객 경험 디자인 2021</strong>
                    <p>AI/DT 시대의 고객 경험 디자인, 통계부터 머신러닝까지 하루만에 끝내기 2-  미래예측 살펴보기</p>
                </div>
                
                <div className="option_box">
                    <Select placeholder ="폴더 미지정"  options={FolderOptions} />
                </div>
            </div>
        )
    }
}


export default NoteTitle1
