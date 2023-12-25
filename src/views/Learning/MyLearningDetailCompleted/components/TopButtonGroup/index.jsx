import React, {Component} from 'react';
import {Button, Icon} from 'semantic-ui-react';

class TopButtonGroup extends Component {
    //
    render() {
        return (
            <div className="left-wrap">{/* 
                <Button icon className="left post delete btn-left">
                    <Icon className="del24"/>
                    Delete
                </Button> */}
                <Button icon className="left post excel-down ml8">
                    <Icon className="excel-down"/>
                    엑셀 다운로드
                </Button>
                <div className="list-number">
                    총 <strong>20개</strong>의 리스트가 있습니다.
                </div>
            </div>
        )
    }

}

export default TopButtonGroup;