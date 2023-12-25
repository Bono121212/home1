import React, { Component } from "react";
import { Button, Icon, Input,Checkbox } from "semantic-ui-react";

import CheckRadio from "../CheckRadio";
import CheckRadio2 from "../CheckRadio2";

class PopupComponentsAdd extends Component {
    render() {
        return (
            <div className="popup_add">
                <div className="popup_inner">
                    <div className="popup_top">
                        <strong>컴포넌트 추가</strong>
                        <Button className="close"><Icon/></Button>
                    </div>
                    
                    <div className="popup_body">
                        <div className="scroll">
                            <div className="popup_process">
                                <ol className="process">
                                    <li className="after">
                                        <Button>
                                            <Icon className="slt_component"/>
                                            <span>컴포넌트 선택</span>
                                        </Button>
                                    </li>
                                    <li className="after">
                                        <Button>
                                            <Icon className="slt_style"/>
                                            <span>스타일 선택</span>
                                        </Button>
                                    </li>
                                    <li className="focus">
                                        <Button>
                                            <Icon className="slt_content"/>
                                            <span>콘텐츠 선택</span>
                                        </Button>
                                    </li>
                                </ol>
                            </div>
                            <div className="add_box">
                                <strong className="add_title">
                                    콘텐츠 타이틀
                                    <Checkbox 
                                        label="사용"
                                        className="useChk"
                                    />
                                </strong>
                                <ul className="options_list">
                                    <li>
                                        <div className="option_th">타이틀</div>
                                        <div className="option_td">
                                            <Input 
                                                placeholder="최대 20자까지 입력할 수 있습니다."
                                            />
                                        </div>
                                    </li>
                                </ul>    
                            </div>

                            <div className="add_box">
                                <strong className="add_title">콘텐츠 표시옵션</strong>
                                <ul className="options_list">
                                    <li>
                                        <div className="option_th">표시 배열</div>
                                        <div className="option_td">
                                            가로 1개 X 세로 1줄
                                        </div>
                                    </li>
                                    <li>
                                        <div className="option_th">등록 방식</div>
                                        <div className="option_td">
                                            <CheckRadio />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="option_th">상세 정보</div>
                                        <div className="option_td">
                                            <CheckRadio2 />
                                        </div>
                                        <p className="note top82">&#183; 상세 정보 : 콘텐츠 제목, 작성일, 조회수, 작성자 정보</p>
                                    </li>
                                </ul>   
                                <ul className="options_list mgt50">
                                    <li>
                                        <div className="option_th">1</div>
                                        <div className="option_td">
                                            <div className="search_link">
                                                <Input 
                                                    placeholder="Youtube 주소를 입력하세요."
                                                />
                                            </div>
                                            <div className="search_link mgt10">
                                                <Input 
                                                    placeholder="제목을 입력하세요."
                                                />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="popup_bottom">
                        <div className="btn_box">
                            <Button className="prev">이전</Button>
                            <Button className="done">완료</Button>
                            <Button className="next hidden">다음</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PopupComponentsAdd;
