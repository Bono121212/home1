import React, {Component} from 'react';
import { Select, Label } from 'semantic-ui-react';

class NoteTitle2 extends Component {
    render() {
        const FolderOptions = [
            { key: '폴더 미지정', value: '폴더 미지정', text: '폴더 미지정' },
            { key: '폴더 1', value: '폴더 1', text: '폴더 1' },
        ]
        return (
            <div className="note_title">
                <div className="tit">
                    <Label color='teal'>Management</Label>
                    <strong className="header">COVID19가 바꾼 우리의 삶은?</strong>
                    <p>사회적 가치 실현을 위한 DBL Double Bottom Line</p>
                </div>
                
                <div className="option_box">
                    <Select placeholder ="폴더 미지정"  options={FolderOptions} />
                </div>
            </div>
        )
    }
}


export default NoteTitle2
