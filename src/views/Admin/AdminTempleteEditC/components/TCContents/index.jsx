import React, { Component } from "react";
import { Icon, Button } from "semantic-ui-react";

//import Banner from "../../../../../images/all/promotion-1200-x-240.jpg";
//import thumb1 from "../../../../../images/all/matter01.png"

//import TCCardLeft from '../TCCardLeft';
import TitleLink from '../TitleLink';
import TitleNoLink from '../TitleNoLink';
import CVod4A from '../CVod4A';
import CVod4B from '../CVod4B';
import CTILeft3A from '../CTILeft3A';
import CTILeft3B from '../CTILeft3B';
//import CImg1 from '../CImg1';
import CImg2 from '../CImg2';
//import CImg3 from '../CImg3';
//import CImg4 from '../CImg4';
import CardBelt from '../CardBelt';

class TCContents extends Component {

    render() {
        return (
            <div className="tc_contents">

                <div className="card_area">
                    <div className="opacity edit">
                        <TitleNoLink />
                        <div className="mg14 flex">
                            <CVod4A />
                            <CVod4B />
                            <CVod4A />
                            <CVod4B />
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
                        <div className="t_img_area">
                            <TitleNoLink />
                            <div className="mg14 flex">
                                {/* <CImg1 /> */}

                                <CImg2 />
                                <CImg2 />

                                {/* <CImg3 />
                                <CImg3 />
                                <CImg3 /> */}
                                {/* 
                                <CImg4 />
                                <CImg4 />
                                <CImg4 />
                                <CImg4 /> */}
                            </div>
                            
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
                        <TitleNoLink />
                        <div className="mg14 flex">
                            <CTILeft3A/>
                            <CTILeft3B/>
                            <CTILeft3A/>
                            <CTILeft3B/>
                            <CTILeft3A/>
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
                        <div className="section">
                            <CardBelt swipeName='nav01'/>
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
                        <div className="section">
                            <CardBelt swipeName='nav02'/>
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
                        <div className="section">
                            <CardBelt swipeName='nav03'/>
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

export default TCContents;
