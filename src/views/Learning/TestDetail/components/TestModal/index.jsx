import React, {Component} from 'react'
import {
    Button,
    Modal,
    List,
} from 'semantic-ui-react'
import SelectRadio01 from "../SelectRadio01";
import SelectCheck01 from "../SelectCheck01";
import ClearInputBox from "../ClearInputBox";

class TestModal extends Component {
    state = {open: true};
    show = size => () => this.setState({size, open: true});
    close = () => this.setState({open: false});

    handleChange = (e, {value}) => this.setState({value});

    render() {
        const {open, size} = this.state;

        return (
            <>
                {/*<Button onClick={this.show('fullscreen')} basic>보기</Button>*/}

                <Modal size={size} open={open} onClose={this.close} className='base w1000 inner-scroll test-modal'>

                    <Modal.Header className='res'>
                        AI 101 TEST
                    </Modal.Header>
                    <Modal.Content>
                        <div className="scrolling-80vh">
                            <div className="content-wrap1">
                                <div className="title-area">
                                    <div className="title-inner">
                                        <div className="sub-info">
                                            합격점 : 0점 | 객관식 : 75점 | 주관식 : 25점 | 총 점 : 100점
                                        </div>
                                    </div>
                                </div>

                                <List as='ol' className='num-list'>
                                    <List.Item as='li'>
                                        <div className="ol-title">
                                            딥러닝의 아버지 중 한 명으로 불리고, 페이스북 AI 리서치를 설립한 뉴욕대학교 얀 르쿤 교수가 학생들과 함께 연구하고 개발한
                                            CNN(Convolutional Neural Network) 기술은 1990년대 중후반까지는 컴퓨터 성능과 데이터의 부족으로 별다른
                                            성과를 내지 못하고
                                            있었다. <span className='q-score'>(30점)</span>
                                        </div>
                                        <div className='ol-answer'>
                                            <ClearInputBox/>
                                        </div>
                                    </List.Item>


                                    <List.Item as='li'>
                                        <div className="ol-title">
                                            딥러닝의 아버지 중 한 명으로 불리고, 페이스북 AI 리서치를 설립한 뉴욕대학교 얀 르쿤 교수가 학생들과 함께 연구하고 개발한
                                            CNN(Convolutional Neural Network) 기술은 1990년대 중후반까지는 컴퓨터 성능과 데이터의 부족으로 별다른
                                            성과를 내지 못하고
                                            있었다. <span className='q-score'>(20점)</span>
                                        </div>
                                        <div className='ol-answer'>
                                            <div className="ui right-top-count input">
                                                {/* .error // */}
                                                <span className="count"><span className="now">0</span>/<span
                                                    className="max">1000</span></span>
                                                <textarea placeholder="답변을 입력해주세요."/>
                                                <span className="validation">You can enter up to 1000 characters.</span>
                                            </div>
                                        </div>
                                    </List.Item>

                                    <List.Item as='li'>
                                        <div className="ol-title">
                                            현대 컴퓨터 과학의 아버지로 불리는 영국의 과학자로 컴퓨터 프로그래밍의 원리를 처음으로 제시했고, 독일의 암호화 기계였던 에니그마의
                                            암호를 깰 수 있는
                                            기계인 더밤을 개발하여 연합군의 승전에 큰 공헌을 학자는 누구인가? <span className='q-score'>(25점)</span>
                                        </div>
                                        <div className='ol-answer'>
                                            <SelectRadio01/>
                                        </div>
                                    </List.Item>

                                    <List.Item as='li'>
                                        <div className="ol-title">
                                            현대 컴퓨터 과학의 아버지로 불리는 영국의 과학자로 컴퓨터 프로그래밍의 원리를 처음으로 제시했고, 독일의 암호화 기계였던 에니그마의
                                            암호를 깰 수 있는
                                            기계인 더밤을 개발하여 연합군의 승전에 큰 공헌을 학자는 누구인가? <span className='q-score'>(25점)</span>
                                        </div>
                                        <div className='ol-answer'>
                                            <SelectCheck01/>
                                        </div>
                                    </List.Item>
                                </List>
                            </div>
                        </div>
                    </Modal.Content>
                    <Modal.Actions className="actions">
                        <Button className='w190 pop d' onClick={this.close}>취소</Button>
                        <Button className='w190 pop s' onClick={this.close}>저장</Button>
                        <Button className='w190 pop p' onClick={this.close}>제출</Button>
                    </Modal.Actions>
                </Modal>
            </>
        )
    }
}

export default TestModal;
