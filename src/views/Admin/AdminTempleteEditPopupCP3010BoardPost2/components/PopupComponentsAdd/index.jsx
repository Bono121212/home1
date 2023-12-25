import React, { Component } from "react";
import { Button, Icon, Input } from "semantic-ui-react";

import CheckRadio from "../CheckRadio";

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
                                <strong className="add_title">콘텐츠 타이틀</strong>
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
                                        <p className="note">&#183; 등록 방식: 커뮤니티 게시글을 검색하여 특정 위치에 표시합니다.</p>
                                    </li>
                                </ul>
                                <ul className="options_list mgt50">
                                    <li>
                                        <div className="option_th">1</div>
                                        <div className="option_td">
                                            <div className="search_board">
                                                <Input type="text" placeholder="등록할 게시글을 검색하세요."/>
                                                <Button className="search_btn">검색</Button>
                                            </div>
                                            <div className="search_file mgt10">
                                                <label for="fileSearch" className="file_upload">
                                                    <input type="text" placeholder="이미지를 등록하세요."/>
                                                    <input type="file" />
                                                    <span class="search_txt">파일찾기</span>
                                                </label>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="option_th">2</div>
                                        <div className="option_td">
                                            <div className="search_board">
                                                <Input type="text" placeholder="등록할 게시글을 검색하세요."/>
                                                <Button className="search_btn">검색</Button>
                                            </div>
                                            <div className="search_file mgt10">
                                                <label for="fileSearch" className="file_upload">
                                                    <input type="text" placeholder="이미지를 등록하세요."/>
                                                    <input type="file" />
                                                    <span class="search_txt">파일찾기</span>
                                                </label>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="option_th">3</div>
                                        <div className="option_td">
                                            <div className="search_board">
                                                <Input type="text" placeholder="등록할 게시글을 검색하세요."/>
                                                <Button className="search_btn">검색</Button>
                                            </div>
                                            <div className="search_file mgt10">
                                                <label for="fileSearch" className="file_upload">
                                                    <input type="text" placeholder="이미지를 등록하세요."/>
                                                    <input type="file" />
                                                    <span class="search_txt">파일찾기</span>
                                                </label>
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
