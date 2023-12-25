import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";


class TabMenu extends Component {

    render() {
        return (
            <div className="ta_tab">
                <div className="opacity">
                    <div className="ta_tab_inner">
                        <div className="tab active"><Button>필환경 친환경</Button></div>
                        <div className="tab"><Button>에너지 산업 동향 및 전망</Button></div>
                        <div className="tab"><Button>플로깅 Go!</Button></div>
                    </div>

                </div>
                <div className="edit_btn_box">
                    {/* Button에 on클래스 있으면 버튼 활성화, on클래스 없으면 버튼 비활성화 됩니다 */}
                    <Button className="edit_btn edit_see on"><Icon/></Button> {/* 보이기 */}
                    <Button className="edit_btn edit_unsee"><Icon/></Button>{/* 숨기기 */}
                    <div className="b_right">
                        <Button className="edit_btn edit_down on"><Icon/></Button>{/* 아래로 */}
                        <Button className="edit_btn edit_up on"><Icon/></Button>{/* 위로 */}
                        <Button className="edit_btn edit_edit on">수정</Button>{/* 수정 */}
                        <Button className="edit_btn edit_delete on"><Icon/></Button>{/* 삭제 */}
                    </div>
                </div>
            </div>
        );
    }
}

export default TabMenu;
