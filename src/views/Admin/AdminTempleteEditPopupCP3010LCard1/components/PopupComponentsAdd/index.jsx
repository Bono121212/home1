import React, { Component } from "react";
import { Button, Icon, Input, Checkbox, Image } from "semantic-ui-react";

//import CheckRadio from "../CheckRadio";

import BUp from "../../../../../images/all/btn-control-top-26-px-white.svg"
import BDown from "../../../../../images/all/btn-control-down-26-px-white.svg"
import BDelete from "../../../../../images/all/btn-control-delete-26-px-white2.png"


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
                                <strong className="add_title">
                                    콘텐츠 표시 옵션
                                    <Button className="b_slt">+ 추천 과정 선택</Button>
                                </strong>
                                <ul className="options_list style_step">
                                    <li className="grid active">
                                        <div className="option_th">1</div>
                                        <div className="option_td flex">
                                            <p className="board_tit ellipsis">데이터의 패턴 파악 데이터의 패턴 파악 데이터의 패턴 파악 데이터의 패턴 파악</p>
                                            <div className="control">
                                                <Button className="btn_down"><Image src={BDown} alt="아래로가기"/></Button>
                                                <Button className="btn_up"><Image src={BUp} alt="위로가기"/></Button>
                                                <Button className="btn_delete"><Image src={BDelete} alt="삭제하기"/></Button>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="grid active">
                                        <div className="option_th">2</div>
                                        <div className="option_td flex">
                                            <p className="board_tit ellipsis">데이터의 패턴 파악 역량- 2편</p>
                                            <div className="control">
                                                <Button className="btn_down"><Image src={BDown} alt="아래로가기"/></Button>
                                                <Button className="btn_up"><Image src={BUp} alt="위로가기"/></Button>
                                                <Button className="btn_delete"><Image src={BDelete} alt="삭제하기"/></Button>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="grid active">
                                        <div className="option_th">3</div>
                                        <div className="option_td flex">
                                            <p className="board_tit ellipsis">데이터의 패턴 파악 역량- 3편</p>
                                            <div className="control">
                                                <Button className="btn_down"><Image src={BDown} alt="아래로가기"/></Button>
                                                <Button className="btn_up"><Image src={BUp} alt="위로가기"/></Button>
                                                <Button className="btn_delete"><Image src={BDelete} alt="삭제하기"/></Button>
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
                            <Button className="next">다음</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PopupComponentsAdd;
