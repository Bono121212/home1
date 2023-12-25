import React, {Component} from 'react'
import {
    Button,
    Modal,
} from 'semantic-ui-react'
// import ButtonGroup from "../ButtonGroup";
// import ClearInputBox from "../ClearInputBox";
// import Editor from "../Editor";



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
                        {/*Class Series Detail*/}문제보기
                    </Modal.Header>
                    <Modal.Content className='modal-view-content'>
                         <div className='modal-view-wrapper'>
                            <div className="view-header-point">
                                <h3>현장 내부협업 부임자 과정</h3>
                                <span>출제자<strong>이빛나</strong></span>
                                <span>객관식<strong>100점</strong></span>
                                <span>주관식<strong>0점</strong></span>
                                <span>총점<strong>80점</strong></span>
                            </div>
                            <div className="view-body-point">
                                <div className="point-num">1</div>
                                <div className="point-text">
                                    <h4>현장 내부협업의 부임자 교육과정에 대한 설명으로 적절하지 않은 것은? (10점)</h4>
                                    <div className="radio-wrap">
                                        <div className="ui radio checkbox pop-view">
                                            <input type="radio" className='hidden' name='radioGroup' id='radio01'/>
                                            <label for='radio01'>현장 조직간의 업무 Process 및 R&amp;R을 명확히 한다.</label>
                                        </div>
                                        <div className="ui radio checkbox pop-view">
                                            <input type="radio" className='hidden' name='radioGroup' id='radio02'/>
                                            <label for='radio02'>현장 조직 간의 Cross Check를 통한 현장 업무 빈틈을 사전에 제거한다.</label>
                                        </div>
                                        <div className="ui radio checkbox pop-view">
                                            <input type="radio" className='hidden' name='radioGroup' id='radio03'/>
                                            <label for='radio03'>구성원의 협업을 통한 업무 투명성 및 자정기능을 확대한다.</label>
                                        </div>
                                        <div className="ui checked radio checkbox pop-view">
                                            <input type="radio" className='hidden' name='radioGroup' id='radio04'/>
                                            <label for='radio04'>구성원 간의 견제와 감시를 통한 업무 효율성 증대하고자 한다.</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         </div>
                         <div className='modal-view-wrapper'>
                            <div className="view-header-point">
                                <h3>발전기본설계의 이해_배관</h3>
                                <span>출제자<strong>이빛나</strong></span>
                                <span>객관식<strong>100점</strong></span>
                                <span>주관식<strong>0점</strong></span>
                                <span>총점<strong>80점</strong></span>
                            </div>
                            <div className="view-body-point">
                                <div className="point-num">2</div>
                                <div className="point-text">
                                    <h4>현장 내부협업의 부임자 교육과정에 대한 설명으로 적절하지 않은 것은? (10점)</h4>
                                    <div className="radio-wrap">
                                        <div className="ui radio checkbox pop-view">
                                            <input type="radio" className='hidden' name='radioGroup2'  id='radio05'/>
                                            <label for='radio05'>현장 조직간의 업무 Process 및 R&amp;R을 명확히 한다.</label>
                                        </div>
                                        <div className="ui radio checkbox pop-view">
                                            <input type="radio" className='hidden' name='radioGroup2'  id='radio06'/>
                                            <label for='radio06'>현장 조직 간의 Cross Check를 통한 현장 업무 빈틈을 사전에 제거한다.</label>
                                        </div>
                                        <div className="ui radio checkbox pop-view">
                                            <input type="radio" className='hidden' name='radioGroup2'  id='radio07'/>
                                            <label for='radio07'>구성원의 협업을 통한 업무 투명성 및 자정기능을 확대한다.</label>
                                        </div>
                                        <div className="ui radio checkbox pop-view ">
                                            <input type="radio" className='hidden' name='radioGroup2'  id='radio08'/>
                                            <label for='radio08'>구성원 간의 견제와 감시를 통한 업무 효율성 증대하고자 한다.</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         </div>
                         <div className='modal-view-wrapper'>
                            <div className="view-header-point">
                                <h3>발전기본설계의 이해_배관</h3>
                                <span>출제자<strong>이빛나</strong></span>
                                <span>객관식<strong>100점</strong></span>
                                <span>주관식<strong>0점</strong></span>
                                <span>총점<strong>80점</strong></span>
                            </div>
                            <div className="view-body-point">
                                <div className="point-num">3</div>
                                <div className="point-text">
                                    <h4>현장 내부협업의 부임자 교육과정에 대한 설명으로 적절하지 않은 것은? (10점)</h4>
                                    <div className="radio-wrap">
                                        <div className="ui radio checkbox pop-view">
                                            <input type="radio" className='hidden' name='radioGroup3'  tabindex='8' id='radio09'/>
                                            <label for='radio09'>현장 조직간의 업무 Process 및 R&amp;R을 명확히 한다.</label>
                                        </div>
                                        <div className="ui radio checkbox pop-view">
                                            <input type="radio" className='hidden' name='radioGroup3'  tabindex='9' id='radio10'/>
                                            <label for='radio10'>현장 조직 간의 Cross Check를 통한 현장 업무 빈틈을 사전에 제거한다.</label>
                                        </div>
                                        <div className="ui radio checkbox pop-view">
                                            <input type="radio" className='hidden' name='radioGroup3'  tabindex='10' id='radio11'/>
                                            <label for='radio11'>구성원의 협업을 통한 업무 투명성 및 자정기능을 확대한다.</label>
                                        </div>
                                        <div className="ui checked radio checkbox pop-view">
                                            <input type="radio" className='hidden' name='radioGroup3'  tabindex='11' id='radio12'/>
                                            <label for='radio12'>구성원 간의 견제와 감시를 통한 업무 효율성 증대하고자 한다.</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         </div>
                    </Modal.Content>
                    <Modal.Actions className="actions">
                        <Button className='w190 pop d' onClick={this.close}>닫기</Button>
                    </Modal.Actions>
                </Modal>
            </>
        )
    }
}

export default ClassSeriesDetailModal;
