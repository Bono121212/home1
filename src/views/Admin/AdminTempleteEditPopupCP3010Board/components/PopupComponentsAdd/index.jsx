import React, { Component } from "react";
import { Button, Icon, Select, Input,Checkbox } from "semantic-ui-react";

import CheckRadio from "../CheckRadio";

class PopupComponentsAdd extends Component {
    render() {
        const ArrayOptions = [
            { key: '연동할 게시판을 선택하세요.', value: '연동할 게시판을 선택하세요.', text: '연동할 게시판을 선택하세요.' },
            { key: '게시판1', value: '게시판1', text: '게시판1' },
            { key: '게시판2', value: '게시판2', text: '게시판2' },
        ]
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
                                            가로 1개 X 세로 3줄
                                        </div>
                                    </li>
                                    <li>
                                        <div className="option_th">등록 방식</div>
                                        <div className="option_td">
                                            <CheckRadio />
                                        </div>
                                        <p className="note">&#183; 등록 방식 :선택한 게시판의 최신 게시글을 표시합니다.</p>
                                    </li>
                                </ul>   
                                <ul className="options_list mgt50">    
                                    <li>
                                        <div className="option_th">게시판</div>
                                        <div className="option_td">
                                            <Select placeholder="연동할 게시판을 선택하세요."  options={ArrayOptions} className="width100"/>
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
