import React, {Component} from 'react'
import {
    Button,
    Modal,
} from 'semantic-ui-react'
import TestRadio04 from "../TestRadio04";
// import ButtonGroup from "../ButtonGroup";
// import ClearInputBox from "../ClearInputBox";
import Editor from "../Editor";



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
                    <Modal.Content className='modal-view-content test-all'>
                         <div className='modal-view-wrapper'>
                            <div className="view-header-point">
                                <h3>리더에게는 선택이 아닌 필수 (10문항)</h3>
                                <span>출제자<strong>이빛나</strong></span>
                                <span>객관식<strong>100점</strong></span>
                                <span>주관식<strong>0점</strong></span>
                                <span>총점<strong>80점</strong></span>
                            </div>
                            <div className="test-complete">
                                <div className="course-radio-survey survey-radio-img test_all wrong">
                                    <p>
                                    <span>1</span>마음근력훈련은 어느장소에서 하는 것이 가장
                                    효과적인가요? (10점)
                                    </p>
                                    <TestRadio04 />
                                </div>
                                <div className="course-radio-survey survey-radio-img test_all correct">
                                        <p>
                                            <span>2</span>서술형으로 답안을 작성하세요. (10점)
                                        </p>
                                        <div className="test-all-prob">
                                            <input type="text" className='quiz-inp' placeholder='주관식 서술형 답안을 확인 합니다.'/>
                                            <input type="text" className='quiz-inp secon'/>
                                            <span>점</span>
                                        </div>
                                </div>
                            </div>
                            <div className="test-total-score">
                                <p>점수 합계</p>
                                <table>
                                    <colgroup>
                                        <col width='313px'/>
                                        <col width='313px'/>
                                        <col width='313px'/>
                                    </colgroup>
                                    <thead>
                                        <th>객관식 합계</th>
                                        <th>주관식 합계</th>
                                        <th>총 합계</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='table-orange'>70</td>
                                            <td className='table-blue'>15</td>
                                            <td>85</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="test-total-score">
                                <p>전체 코멘트를 작성하세요.</p>
                                <div className="ui editor-wrap test-editor">
                                    <Editor/>
                                </div>
                            </div>
                         </div>
                    </Modal.Content>
                    <Modal.Actions className="actions">
                        <Button className='w190 pop d' onClick={this.close}>취소</Button>
                        <Button className='w190 pop p' onClick={this.close}>완료</Button>
                    </Modal.Actions>
                </Modal>
            </>
        )
    }
}

export default ClassSeriesDetailModal;
