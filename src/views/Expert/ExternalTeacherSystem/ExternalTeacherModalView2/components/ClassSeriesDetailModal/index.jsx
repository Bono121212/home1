import React, {Component} from 'react'
import {
    Button,
    Modal,
    Select
} from 'semantic-ui-react'
// import ButtonGroup from "../ButtonGroup";
import ClearInputBox from "../ClearInputBox";
import ClearTextareaBox from "../ClearTextareaBox";
// import Editor from "../Editor";
import SelectCheck01 from "../SelectCheck01";

const selectOptions = [
    {key:"opt01", value:"opt01", text:"리더에게는 선택이 아닌 필수"},
    {key:"opt02", value:"opt02", text:"리더에게는 선택이 아닌 필수"},
    {key:"opt03", value:"opt03", text:"리더에게는 선택이 아닌 필수"},
    {key:"opt04", value:"opt04", text:"리더에게는 선택이 아닌 필수"}
];


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
                        <Select
                            className='modal-view-selector'
                            defaultValue={selectOptions[0].value}
                            options={selectOptions}
                        />
                         <div className='modal-view-wrapper'>
                            <div className="view-header-point">
                                <h3>리더에게는 선택이 아닌 필수 (10문항)</h3>
                                <span>출제자<strong>이빛나</strong></span>
                                <span>객관식<strong>100점</strong></span>
                                <span>주관식<strong>0점</strong></span>
                                <span>총점<strong>80점</strong></span>
                            </div>
                            <div className="view-body-point">
                                <div className="view-question-box">
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
                                <div className="view-explain">
                                    <p>
                                        문제 등록시 입력한 해설이 이곳에 표시 됩니다.<br/>
                                        두줄 확인이 가능하고 이 후 스크롤 제공 됩니다.
                                    </p>
                                </div>
                                <div className="view-question-box">
                                    <div className="point-num">2</div>
                                    <div className="point-text">
                                        <h4>편도체가 기능을 상실하면 어떠한 일이 벌어지는지 모두 고르세요. (10점)</h4>
                                        <div className="radio-wrap">
                                            <div className='ol-answer'>
                                                <SelectCheck01/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="view-explain">
                                    <p>
                                        문제 등록시 입력한 해설이 이곳에 표시 됩니다.<br/>
                                        두줄 확인이 가능하고 이 후 스크롤 제공 됩니다.
                                    </p>
                                </div>
                                <div className="view-question-box">
                                    <div className="point-num">3</div>
                                    <div className="point-text">
                                        <h4>다음 중 실시 설계 시 배관이 기계로부터 받아야 하는 Information 은 무엇인가요? (10점)</h4>
                                        <div className="radio-wrap">
                                            <div className='ol-answer'>
                                                <ClearInputBox/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="view-explain">
                                    <p>
                                        문제 등록시 입력한 해설이 이곳에 표시 됩니다.<br/>
                                        두줄 확인이 가능하고 이 후 스크롤 제공 됩니다.
                                    </p>
                                </div>
                                <div className="view-question-box">
                                    <div className="point-num">4</div>
                                    <div className="point-text">
                                        <h4>서술형 문제입니다. (10점)</h4>
                                        <div className="point-text-section">
                                            서술형 문제 들어가는 영역입니다.<br/>
                                            서술형 문제 들어가는 영역입니다.서술형 문제 들어가는 영역입니다.<br/>
                                            서술현 문제 들어가는 영엽입니다.
                                        </div>
                                        <div className="radio-wrap">
                                            <div className='ol-answer ht170'>
                                                <ClearTextareaBox/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="view-explain">
                                    <p>
                                        문제 등록시 입력한 해설이 이곳에 표시 됩니다.<br/>
                                        두줄 확인이 가능하고 이 후 스크롤 제공 됩니다.
                                    </p>
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
