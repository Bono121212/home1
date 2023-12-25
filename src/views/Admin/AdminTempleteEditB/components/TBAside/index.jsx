import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";

//import thumb1 from "../../../../../images/all/matter01.png"

//import CTIAside1 from "../CTIAside1";
import CTIAside2A from "../CTIAside2A";
import CTIAside2B from "../CTIAside2B";
import CTILeftAside from "../CTILeftAside";
import TitleNoLink from "../TitleNoLink";


class TBAside extends Component {

    render() {
        return (
            <div className="tb_aside edit">

                <div className="tb_aside_box">
                    <div className="opacity edit">
                        <TitleNoLink />
                        {/* 가로 2xn */}
                        <div className="mg7 flex">
                            <CTIAside2A />
                            <CTIAside2B />
                            <CTIAside2B />
                            <CTIAside2A />
                        </div>

                        {/* 가로 1xn */}
                        {/* <div className="mg7">
                            <CTIAside1 />
                        </div> */}
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

                <div className="tb_aside_box">
                    <div className="opacity edit">
                        <div className="mg7">
                            <CTILeftAside /> 
                            <CTILeftAside /> 
                            <CTILeftAside /> 
                            <CTILeftAside /> 
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
                        
                <div class="btn_add_component"><Button>+ 컴포넌트 추가</Button></div>
                
            </div>
        );
    }
}

export default TBAside;
