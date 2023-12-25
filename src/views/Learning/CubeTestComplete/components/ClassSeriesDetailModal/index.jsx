import React, {Component} from 'react'
import {
    Modal,
} from 'semantic-ui-react'
import TestRadio01 from "../TestRadio01";
import TestRadio03 from "../TestRadio03";
import TestRadio04 from "../TestRadio04";
import ClearInputBox from "../ClearInputBox";
import testImg from "../../../../../images/all/img.png"
import ContentsCheckbox01 from "../ContentsCheckbox01";
import ClosePopup from "../../../../../images/all/icon-close-player-28-px.png";


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

                <Modal size={size} open={open} onClose={this.close} className='base w1010 inner-scroll'>

                    <Modal.Header className='res pop'>
                        {/*Class Series Detail*/}발전기본설계의 이해_배관
                        <button className="admin_popup_close test_pop" onClick={this.close}>
                            <img src={ClosePopup} alt="" />
                            <span>Close</span>
                        </button>
                    </Modal.Header>
                    <Modal.Content className="test-content-modal">
                    <div className="test-text ver2">
                        <div className="test-text-box pop-sty">
                        <span>이수기준</span>
                        <span> <strong>30점</strong></span>
                        </div>
                        <div className="test-text-box pop-sty">
                        <span>총점</span>
                        <span><strong>90점</strong></span>
                        </div>
                        <div className="test-text-box pop-sty">
                            <span>내점수</span>
                            <span><em>50점</em></span>
                        </div>
                    </div>
                    <div className="course-info-detail responsive-course test-pop">
                        <div className="course-detail-center">
                            <div className="main-wrap">
                                <div>
                                    <div className=" test-complete">
                                    {/* 맞았을 때 correct 클래스 추가 */}
                                    <div className="course-radio-survey correct">
                                        <p>
                                        <span>1</span>두려움을 느끼게 될 때 생기는 일이라 하기 어려운
                                        것은? (10점)
                                        </p>
                                        <TestRadio01 />
                                        <div className="survey-explain">
                                            <button class="ui icon button right btn-blue">
                                                정답보기
                                                <i aria-hidden="true" class="icon icon morelink more2 view-down"></i>
                                            </button>
                                        </div>
                                    </div>
                                    {/* 틀렸을 때 wrong 클래스 추가 */}
                                    <div className="course-radio-survey wrong">
                                        <p>
                                        <span>2</span>
                                        <span className="copy">
                                            편도체가 기능을 상실하면 어떠한 일이 벌어지는지 모두 고르세요. (10점)
                                        </span>
                                        </p>
                                        <ContentsCheckbox01 />
                                        <div className="survey-explain">
                                            <button class="ui icon button right btn-blue">
                                                정답보기
                                                <i aria-hidden="true" class="icon icon morelink more2 view-down"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="course-radio-survey survey-radio-img correct">
                                        <p>
                                        <span>3</span>
                                        <span className="copy">아래의 그림을 보고 누락된 형태를 선택하세요. (10점)</span>
                                        </p>
                                        <img src={testImg} className='test-pop-img' alt="" />
                                        <TestRadio03 />
                                        <div className="survey-explain">
                                            <button class="ui icon button right btn-blue">
                                                정답보기
                                                <i aria-hidden="true" class="icon icon morelink more2 view-down"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="course-radio-survey survey-text correct">
                                        <p>
                                        <span>4</span>다음 중 실시 설계 시 배관이 기계로부터 받아야
                                        하는 Information 은 무엇인가요? (10점)
                                        </p>

                                        {/* .right-top-count (우측 상단 카운팅) 추가 */}
                                        <ClearInputBox />
                                        <div className="survey-explain">
                                            <button class="ui icon button right btn-blue">
                                                정답보기
                                                <i aria-hidden="true" class="icon icon morelink more2 view-down"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="course-radio-survey course-pop survey-radio-img wrong">
                                        <p>
                                        <span>5</span>마음근력훈련은 어느장소에서 하는 것이 가장
                                        효과적인가요? (10점)
                                        </p>
                                        <TestRadio04 />
                                        <div className="survey-explain">
                                            <button class="ui icon button right btn-blue">
                                                정답보기
                                                <i aria-hidden="true" class="icon icon morelink more2 view-down"></i>
                                            </button>
                                        </div>
                                    </div>
                                    {/*<div className="course-radio-survey">
                                        <p>
                                        <span>6</span>본 과정의 학습 내용은 개인적으로나 업무에
                                        적용가능 한가요? (10점)
                                        </p>
                                        <div className="preview">
                                        <div
                                            className="lms-toggle init"
                                            style={{ position: "relative", top: "0" }}
                                        >
                                            처음 로딩시 className="lms-switch init"
                                            클릭이후  className="lms-switch"
                                            <label htmlFor="sld2" className="lms-switch init">
                                            <input type="checkbox" id="sld2" />
                                            <span className="slider"></span>
                                            <span className="lms-radio-text"></span>
                                            </label>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="course-radio-survey">
                                        <p>
                                        <span>7</span>본 과정을 통한 만족도를 선택해 주세요. (10점)
                                        </p>
                                        <CourseTable />
                                    </div>
                                    <div className="course-radio-survey">
                                        <p>
                                        <span>8</span>생년월일을 선택해 주세요.
                                        </p>
                                        <Calendar />
                                    </div>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Modal.Content>
                </Modal>
            </>
        )
    }
}

export default ClassSeriesDetailModal;
