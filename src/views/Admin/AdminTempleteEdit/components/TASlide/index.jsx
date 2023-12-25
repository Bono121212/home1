import React, { Component } from "react";
import {Button, Icon, } from "semantic-ui-react";

// import slide from "../../../../../images/all/a-sample.png";
class TASlide extends Component {

    render() {
        return (
            <div className="t_slide_area">
                <div className="opacity edit">
                    <div className="inner">
                        <div className="t_slide">
                            <div className="slide">
                                {/* 이미지파일이 들어가는 영역입니다.
                                <Image src={slide} alt="슬라이드이미지"/> */}
                            </div>
                            <div className="slide">
                                {/* 이미지파일이 들어가는 영역입니다.
                                <Image src={slide} alt="슬라이드이미지"/> */}
                            </div>
                        </div>

                        <div className="t_control">
                            <Button className="prev"></Button>
                            <Button className="next"></Button>
                        </div>
                        <div className="t_pager">
                            <Button className="dot active"></Button>
                            <Button className="dot"></Button>
                            <Button className="dot"></Button>
                        </div>
                    </div>
                </div>

                <div className="edit_btn_box">
                    {/* Button에 on클래스 있으면 버튼 활성화, on클래스 없으면 버튼 비활성화 됩니다 */}
                    <Button className="edit_btn edit_see on"><Icon/></Button> {/* 보이기 */}
                    <Button className="edit_btn edit_unsee"><Icon/></Button>{/* 숨기기 */}
                    <div className="b_right">
                        <Button className="edit_btn edit_down"><Icon/></Button>{/* 아래로 */}
                        <Button className="edit_btn edit_up"><Icon/></Button>{/* 위로 */}
                        <Button className="edit_btn edit_edit on">수정</Button>{/* 수정 */}
                        <Button className="edit_btn edit_delete"><Icon/></Button>{/* 삭제 */}
                    </div>
                </div>
            </div>
        );
    }
}

export default TASlide;

