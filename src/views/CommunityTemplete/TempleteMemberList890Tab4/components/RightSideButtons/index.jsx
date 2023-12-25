import React, { Component } from "react";
import { Button, Icon  } from 'semantic-ui-react';

class RightSideButtons extends Component {
    render(){
        return(
            <>
                <Button className="member_btn select_all" icon><Icon className="addinfo"/>전체선택</Button>
                <Button className="member_btn sl_reject" icon><Icon className="reject"/>가입반려</Button>
                <Button className="member_btn sl_app" icon><Icon className="approval"/>가입승인</Button>
            </>
        )
    }
}
export default RightSideButtons