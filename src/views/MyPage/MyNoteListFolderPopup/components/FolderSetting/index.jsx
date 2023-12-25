import React, {Component} from 'react';
import { Input, Button, Image } from 'semantic-ui-react';
import IconDelete from '../../../.././../images/all/icon-note-delete-24-px.svg';


class FolderSetting extends Component {
    render() {
        return (
            <div className="folder_setting">
                <Button className="delete"><Image src={IconDelete} alt="삭제"/></Button>
                <Input 
                    placeholder="폴더명"
                />
                <span class="txt_cnt">
                    <span class="txt_now">00</span>
                    /
                    <span>20</span>
                </span>

                <span>총 <strong>13개의 Note</strong></span>

                <div class="folder_btn">
                    <button class="ui button cancel">취소</button>
                    <button class="ui button save">저장</button>
                </div>
            </div>
        )
    }
}


export default FolderSetting
