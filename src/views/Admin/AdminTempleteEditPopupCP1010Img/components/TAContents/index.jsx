import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";

import CTI2A from '../CTI2A';
import CTI2B from '../CTI2B';
import CTI3A from '../CTI3A';
import CTI3B from '../CTI3B';
// import CTI4A from '../CTI4A';
// import CTI4B from '../CTI4B';
import TATitle from '../TATitle';
import TabMenu from '../TabMenu';

class TAContents extends Component {

    render() {
        return (
            <div className="ta_contents">

                {/* 탭영역 */}
                <div className="tab_area_templete">
                    <div className="noOpacity">
                        {/* 탭 타이틀 */}
                        <TabMenu />

                        {/* 탭 컨텐츠 */}
                        <div className="ta_tab_content">
                            {/* 2 정렬 */}
                            <div className="card_area">
                                <div className="flex mg14">
                                    <CTI2A/>
                                    <CTI2B/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="edit_btn_box">
                        {/* Button에 on클래스 있으면 버튼 활성화, on클래스 없으면 버튼 비활성화 됩니다 */}
                        <Button className="edit_btn edit_see on"><Icon/></Button> {/* 보이기 */}
                        <Button className="edit_btn edit_unsee"><Icon/></Button>{/* 숨기기 */}
                        <Button className="edit_btn edit_edit on">수정</Button>{/* 수정 */}
                        <Button className="edit_btn edit_up on"><Icon/></Button>{/* 위로 */}
                        <Button className="edit_btn edit_down on"><Icon/></Button>{/* 아래로 */}
                        <Button className="edit_btn edit_delete on"><Icon/></Button>{/* 삭제 */}
                    </div>
                </div>


                <div className="card_area">
                    <div className="opacity">
                        <TATitle />
                        <div className="flex mg14">
                            <CTI3A/>
                            <CTI3B/>
                            <CTI3A/>
                            <CTI3B/>
                            <CTI3A/>
                            <CTI3B/>
                        </div>
                    </div>
                    <div className="edit_btn_box">
                        {/* Button에 on클래스 있으면 버튼 활성화, on클래스 없으면 버튼 비활성화 됩니다 */}
                        <Button className="edit_btn edit_see on"><Icon/></Button> {/* 보이기 */}
                        <Button className="edit_btn edit_unsee"><Icon/></Button>{/* 숨기기 */}
                        <Button className="edit_btn edit_edit on">수정</Button>{/* 수정 */}
                        <Button className="edit_btn edit_up on"><Icon/></Button>{/* 위로 */}
                        <Button className="edit_btn edit_down on"><Icon/></Button>{/* 아래로 */}
                        <Button className="edit_btn edit_delete on"><Icon/></Button>{/* 삭제 */}
                    </div>
                </div>


                <div className="btn_add_component">
                    <Button>+ 컴포넌트 추가</Button>
                </div>
            </div>
        );
    }
}

export default TAContents;
