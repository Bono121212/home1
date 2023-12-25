import React, { Component } from "react";
import { Button, Icon, Select, Input, Checkbox } from "semantic-ui-react";

//import CheckRadio from "../CheckRadio";

class PopupComponentsAdd extends Component {
    render() {
        const ArrayFontSize = [
            { key: '20', value: '20', text: '20' },
        ]

        const ArrayFont = [
            { key: '기본서체', value: '기본서체', text: '기본서체' },
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
                                <strong className="add_title">콘텐츠 표시 옵션</strong>
                                <ul className="options_list">
                                    <li>
                                        <div className="option_th">표시배열</div>
                                        <div className="option_td">
                                            슬라이드형 3개, 높이 300px
                                        </div>
                                    </li>
                                </ul>   
                                
                                <ul className="options_list mgt10">
                                    <li>
                                        <div className="option_th">1</div>
                                        <div className="option_td">
                                            <div className="search_file">
                                                <label for="fileSearch" className="file_upload">
                                                    <input type="text" placeholder="이미지를 등록하세요."/>
                                                    <input type="file" />
                                                    <span class="search_txt">파일찾기</span>
                                                </label>
                                            </div>
                                            <div className="search_link mgt10">
                                                <Input placeholder="https://"/>
                                            </div>
                                            <div className="edit_txt mgt10">
                                                <Input type="text" placeholder="이미지에 텍스트를 입력하세요."/>
                                                <Button className="b_edit ing">편집</Button>
                                            </div>
                                        </div>
                                    </li>
                                    {/* 편집영역 edit_ing */}
                                    <li className="edit_ing">
                                        <div className="top">
                                            <Select placeholder="기본서체"  options={ArrayFont} className="s_font"/>
                                            <Select placeholder="20"  options={ArrayFontSize} className="s_fontSize"/>
                                            {/* b_bold 선택되었을 경우, on 클래스 추가되면 폰트 색상이 바뀝니다. */}
                                            <Button className="b_bold on">B</Button>
                                            <Button className="b_color"></Button>
                                        </div>
                                        <div className="body">
                                            <textarea name="" id="" cols="30" rows="10">테스트 텍스트</textarea>
                                        </div>
                                        <div className="bottom flex">
                                            <div className="button_1">
                                                <Button className="b_top on"><Icon/></Button>
                                                <Button className="b_middle"><Icon/></Button>
                                                <Button className="b_bottom"><Icon/></Button>
                                            </div>
                                            <div className="button_1">
                                                <Button className="b_left on"><Icon/></Button>
                                                <Button className="b_center"><Icon/></Button>
                                                <Button className="b_right"><Icon/></Button>
                                            </div>

                                            <div className="button_2">
                                                <Button className="b_cancel">취소</Button>
                                                <Button className="b_chk">확인</Button>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="option_th">2</div>
                                        <div className="option_td">
                                            <div className="search_file">
                                                <label for="fileSearch" className="file_upload">
                                                    <Input type="text" placeholder="이미지를 등록하세요."/>
                                                    <Input type="file" />
                                                    <span class="search_txt">파일찾기</span>
                                                </label>
                                            </div>
                                            <div className="search_link mgt10">
                                                <Input placeholder="https://"/>
                                            </div>
                                            <div className="edit_txt mgt10">
                                                <Input type="text" placeholder="이미지에 텍스트를 입력하세요."/>
                                                <Button className="b_edit">편집</Button>
                                                <Button className="b_del"><Icon /></Button>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="option_th">3</div>
                                        <div className="option_td">
                                            <div className="search_file">
                                                <label for="fileSearch" className="file_upload">
                                                    <Input type="text" placeholder="이미지를 등록하세요."/>
                                                    <Input type="file" />
                                                    <span class="search_txt">파일찾기</span>
                                                </label>
                                            </div>
                                            <div className="search_link mgt10">
                                                <Input placeholder="https://"/>
                                            </div>
                                            <div className="edit_txt mgt10">
                                                <Input type="text" placeholder="이미지에 텍스트를 입력하세요."/>
                                                <Button className="b_edit">편집</Button>
                                                <Button className="b_del"><Icon /></Button>
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
