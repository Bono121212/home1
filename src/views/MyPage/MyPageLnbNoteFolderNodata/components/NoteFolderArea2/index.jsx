import React, {Component} from 'react';
import {Button, Icon} from 'semantic-ui-react';

class NoteFolderArea2 extends Component {
    
    render() {
        return (
            <div>
                <div className="folder_area">
                    <div className="folder_inner">
                        <div className="folder_new"><Button>+ 새폴더</Button></div>
                        <div className="folder_box">
                            <p>폴더를 생성하여 등록된 노트를 관리할 수 있습니다.</p>
                        </div>
                    </div>
                   
                    <Button className="toggle"><Icon /></Button>
                </div>
            </div>
        )
    }
}


export default NoteFolderArea2
