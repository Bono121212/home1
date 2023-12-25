import React, {Component} from 'react'
import {
    Button,
    Modal,
    Form,
    Icon,
    Checkbox
} from 'semantic-ui-react'
// import ButtonGroup from "../ButtonGroup";
// import ClearInputBox from "../ClearInputBox";
import Editor from "../Editor";
// import IconUrl from "../../../../../../images/all/icon-url.png";
// import down from "../../../../../../images/all/icon-down-type-4-24-px.png";



class ClassSeriesDetailModal extends Component {
    state = {open: true};
    show = size => () => this.setState({size, open: true});
    close = () => this.setState({open: false});

    handleChange = (e, {value}) => this.setState({value});

    render() {
        const {open, size} = this.state;

        return (
            <>
                {/*<Button onClick={this.show('fullscreen')} basic>보기</Button>*/}

                <Modal size={size} open={open} onClose={this.close} className='base w1000 inner-scroll'>

                    <Modal.Header className='res'>
                        {/*Class Series Detail*/}채점하기
                    </Modal.Header>
                    <Modal.Content className='opinion-content'>
                         <Form.Field>
                            <h2 className='opinion-subtitle'>과제 제출</h2>
                            <label className="opinion-sub">제출 답안</label>
                            <div className="ui editor-wrap opinion-box">
                                <textarea placeholder='내용을 입력해 주세요'></textarea>
                            </div>
                            <label className="opinion-sub mt30">제출 파일</label>
                            <div className="down">
                                <Checkbox
                                className="base"
                                label="mySUNI 프로그램북_New format_20년 3분기(오타수정).pdf"
                                value=""
                                />
                                <Icon className="icon-down-type4" />
                            </div>
                        </Form.Field>
                         <Form.Field>
                            <h2 className='opinion-subtitle'>과제 평가</h2>
                            <label className="opinion-sub">평가 의견</label>
                            <div className="ui editor-wrap opinion-box">
                                <Editor/>
                            </div>
                            <label className="opinion-sub mt30">첨부파일</label>
                            <div className="ui form opinion-box">
                                <div className="ui w624 input file">
                                    <input type="text" readOnly placeholder="문서 및 이미지 파일을 업로드 가능합니다."/>
                                    <Icon className='clear link'/>
                                    <label htmlFor="hidden-new-file" className="ui button">파일찾기</label>
                                    <input type="file" id="hidden-new-file"/>
                                </div>
                            </div>
                        </Form.Field>
                        <Form.Field>
                            <h2 className='opinion-subtitle'>최종 평가</h2>
                            <label className="opinion-sub">과제점수</label>
                            <div className="ui editor-wrap opinion-box text4">
                                <input type="text"/>
                                <span>점</span>
                            </div>
                            <div className="final-evaluation">
                                <span className='final-condition fail'>FAIL</span>
                                <span className='final-condition pass active' >PASS</span>
                            </div>
                        </Form.Field>
                    </Modal.Content>
                    <Modal.Actions className="actions">
                        <Button className='w190 pop d' onClick={this.close}>등록</Button>
                        <Button className='w190 pop p' onClick={this.close}>취소</Button>
                    </Modal.Actions>
                </Modal>
            </>
        )
    }
}

export default ClassSeriesDetailModal;
