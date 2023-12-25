import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";

//import CTICross from '../CTICross';
import CTILeft from '../CTILeft';
import CTIRight from '../CTIRight';
import TitleLink from '../TitleLink';
import TBSlide from '../TBSlide';
import CardBelt from '../CardBelt';

class TBContents extends Component {

    render() {
        return (
            <div className="tb_contents edit">

                <TBSlide/>

                
                <div className="card_area">
                    <div className="opacity edit">
                        <TitleLink />
                        <div className="flex mg14">
                            {/* <CTICross/> */}
                            <CTILeft/>
                            <CTIRight/>
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

                <div className="card_area">
                    <div className="opacity edit">
                        <TitleLink />  
                        
                        <div className="flex">
                            <CardBelt/>
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

export default TBContents;
