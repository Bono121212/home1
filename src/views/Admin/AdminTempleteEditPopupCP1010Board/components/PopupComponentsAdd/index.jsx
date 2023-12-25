import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";

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
                                    <li className="focus">
                                        <Button>
                                            <Icon className="slt_component"/>
                                            <span>컴포넌트 선택</span>
                                        </Button>
                                    </li>
                                    <li>
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
                                <strong className="add_title">컴포넌트 유형</strong>
                                <ul className="compo_step">
                                    <li>
                                        <Button>
                                            <Icon className="img"/>
                                            <span>이미지</span>
                                        </Button>
                                    </li>
                                    <li className="active">
                                        <Button>
                                            <Icon className="board"/>
                                            <span>게시판</span>
                                        </Button>
                                    </li>
                                    <li>
                                        <Button>
                                            <Icon className="html"/>
                                            <span>HTML</span>
                                        </Button>
                                    </li>
                                    <li>
                                        <Button>
                                            <Icon className="vod"/>
                                            <span>동영상</span>
                                        </Button>
                                    </li>
                                    <li>
                                        <Button>
                                            <Icon className="tab"/>
                                            <span>주제 분류탭</span>
                                        </Button>
                                    </li>
                                    <li>
                                        <Button>
                                            <Icon className="card"/>
                                            <span>학습카드</span>
                                        </Button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="popup_bottom">
                        <div className="btn_box">
                            <Button className="prev hidden">이전</Button>
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
