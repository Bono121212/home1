import React, { Component } from "react";
import { Button, Icon, Select } from "semantic-ui-react";

//import CheckRadio from "../CheckRadio";

class PopupComponentsAdd extends Component {
    render() {
        const ArrayOptions = [
            { key: '3', value: '3', text: '3' },
            { key: '2', value: '2', text: '2' },
            { key: '1', value: '1', text: '1' },
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
                                    <li className="focus">
                                        <Button>
                                            <Icon className="slt_style"/>
                                            <span>스타일 선택</span>
                                        </Button>
                                    </li>
                                    <li>
                                        <Button>
                                            <Icon className="slt_content"/>
                                            <span>콘텐츠 선택</span>
                                        </Button>
                                    </li>
                                </ol>
                            </div>
                            <div className="add_box">
                                <strong className="add_title">콘텐츠 배열</strong>
                                <ul className="options_list">
                                    <li>
                                        <div className="option_th">가로</div>
                                        <div className="option_td">
                                            <Select placeholder="3"  options={ArrayOptions} />
                                            <span>개</span>
                                        </div>
                                        <div className="option_th">세로</div>
                                        <div className="option_td">
                                            <Select placeholder="3"  options={ArrayOptions} />
                                            <span>줄</span>
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
                            <Button className="next">다음</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PopupComponentsAdd;
