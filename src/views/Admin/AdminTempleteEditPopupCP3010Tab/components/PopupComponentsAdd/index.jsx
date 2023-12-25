import React, { Component } from "react";
import { Button, Icon, Input } from "semantic-ui-react";

//import CheckRadio from "../CheckRadio";
//import CheckRadio2 from "../CheckRadio2";

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
                                <ol className="process step2">
                                    <li className="after">
                                        <Button>
                                            <Icon className="slt_component"/>
                                            <span>컴포넌트 선택</span>
                                        </Button>
                                    </li>
                                    <li className="after hidden">
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
                                    콘텐츠 표시옵션

                                    <Button className="b_add">+추가</Button>
                                </strong>

                                <ul className="options_list">
                                    <li>
                                        <div className="option_th">타이틀 1</div>
                                        <div className="option_td">
                                            <div className="name_input">
                                                <Input
                                                    placeholder="탭 타이틀을 입력해주세요."
                                                />
                                                <span className="txt_cnt">
                                                    <span className="now">7</span>/ 15
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="option_th">타이틀 2</div>
                                        <div className="option_td">
                                            <div className="name_input">
                                                <Input
                                                    placeholder="탭 타이틀을 입력해주세요."
                                                />
                                                <span className="txt_cnt">
                                                    <span className="now">0</span>/ 15
                                                </span>
                                            </div>

                                        </div>
                                    </li>
                                    <li>
                                        <div className="option_th">타이틀 3</div>
                                        <div className="option_td">
                                            <div className="name_input type1">
                                                <Input
                                                    placeholder="탭 타이틀을 입력해주세요."
                                                />
                                                <span className="txt_cnt">
                                                    <span className="now">0</span>/ 15
                                                </span>
                                                <Button className="b_del"><Icon/></Button>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="option_th">타이틀 4</div>
                                        <div className="option_td">
                                            <div className="name_input type1">
                                                <Input
                                                    placeholder="탭 타이틀을 입력해주세요."
                                                />
                                                <span className="txt_cnt">
                                                    <span className="now">0</span>/ 15
                                                </span>
                                                <Button className="b_del"><Icon/></Button>
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
