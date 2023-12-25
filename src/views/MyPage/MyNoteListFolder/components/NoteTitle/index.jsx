import React, {Component} from 'react';
import { Select, Label } from 'semantic-ui-react';

class NoteTitle extends Component {
    render() {
        const FolderOptions = [
            { key: '시험대비 벼락치기 폴더', value: '시험대비 벼락치기 폴더', text: '시험대비 벼락치기 폴더' },
            { key: '테스트테스트테스트테스트테스트테스트', value: '테스트테스트테스트테스트테스트테스트', text: '테스트테스트테스트테스트테스트테스트' },
        ]
        return (
            <div className="note_title">
                <div className="tit">
                    <Label color='blue'>Leadership</Label>
                    <strong className="header">AI/DT 고객 경험 디자인 2021 </strong>
                    <p>AI/DT 시대의 고객 경험 디자인, 통계부터 머신러닝까지 하루만에 끝내기 2-  미래예측 살펴보기</p>
                </div>
                
                <div className="option_box">
                    <Select placeholder ="시험대비 벼락치기 폴더"  options={FolderOptions} />
                </div>
            </div>
        )
    }
}


export default NoteTitle
