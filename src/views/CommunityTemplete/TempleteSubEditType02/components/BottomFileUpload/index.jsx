import React, { Component } from "react";
import { Button, Form, Icon, Popup } from "semantic-ui-react";

class BottomFileUpload extends Component {
    render(){
        return(
            <div className="bottom_file_area">
                <Form>
                    <Form.Field>
                        <label className="field_tit">
                            썸네일 이미지 등록{' '}
                            <Popup
                                trigger={<Icon className="info20"/>}
                                content={'이미지 등록 시 최적 사이즈는\n가로 279px, 세로 209px입니다.'}
                                position='top left'
                                className="popup_text"
                                />
                        </label>
                        <div className="ui action input file_input">
                            <input readOnly placeholder="썸네일 이미지를 등록하세요." type="text" />
                            <label for="hidden-file-thumb" type="button" className="ui button">파일찾기</label>
                            <input type="file" id="hidden-file-thumb" hidden/>
                            {/* file name */}
                            {/* <div className="file_name_list">
                                <span>marble_210526210526210526210526210526.jpg</span>
                                <a className="del"><Icon className="del"/></a>
                            </div> */}
                        </div>
                    </Form.Field>
                    <Form.Field className="flex sp_bt">
                        <label className="field_tit">
                            파일 등록{' '}
                            <Popup
                                trigger={<Icon className="info20"/>}
                                content={'영상 파일은 AVI, MP4 확장자로\n최대 100MB까지 등록 가능합니다.'}
                                position='top left'
                                className="popup_text"
                                />
                        </label>
                        <Button className="add_file" icon>+ 추가</Button>
                        <div className="ui action input file_input">
                            <input readOnly placeholder="첨부할 파일을 등록하세요." type="text" />             
                            <label for="hidden-file" type="button" className="ui button">파일찾기</label>
                            <input type="file" id="hidden-file" hidden/>
                            {/* file name */}
                            {/* <div className="file_name_list">
                                <span>인프라_스트리밍_20200920.pdf</span>
                                <em>1.6MB</em>
                                <a className="del"><Icon className="del"/></a>
                            </div> */}
                            {/* progressbar */}
                            {/* <div className="progress_bar_area">
                                <span>0%</span>
                                <Progress percent={80} size="tiny" className="orange"/>
                                <a className="done" aria-disabled>등록완료</a>
                            </div> */}
                        </div>
                    </Form.Field>
                </Form>
                
            </div>
        )
    }
}

export default BottomFileUpload;