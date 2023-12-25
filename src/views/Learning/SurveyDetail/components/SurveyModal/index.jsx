import React, {Component} from 'react'
import {
    Button,
    Modal,
    List,
} from 'semantic-ui-react'
import SelectRadio01 from "../SelectRadio01";
import SelectRadio02 from "../SelectRadio02";
import SelectCheck01 from "../SelectCheck01";
import ClearInputBox from "../ClearInputBox";
// import ActionButtons from "../ActionButtons";

class SurveyModal extends Component {
    state = {open: true};
    show = size => () => this.setState({size, open: true});
    close = () => this.setState({open: false});

    handleChange = (e, {value}) => this.setState({value});

    render() {
        const {open, size} = this.state;

        return (
            <>
                {/*<Button onClick={this.show('fullscreen')} basic>보기</Button>*/}

                <Modal size={size} open={open} onClose={this.close} className='base w1000 inner-scroll survey-modal'>

                    <Modal.Header className='res'>
                        설문조사
                    </Modal.Header>
                    <Modal.Content>
                        <div className="scrolling-80vh">
                            <div className="content-wrap1">
                                <List as='ol' className='num-list'>
                                    <List.Item as='li'>
                                        <div className="ol-title">
                                            척도 설문 항목입니다.
                                        </div>
                                        <div className='ol-answer'>
                                            <SelectRadio01/>
                                        </div>
                                    </List.Item>

                                    <List.Item as='li'>
                                        <div className="ol-title">
                                            단수 객관식 질문입니다.
                                        </div>
                                        <div className='ol-answer'>
                                            <SelectRadio02/>
                                        </div>
                                    </List.Item>

                                    <List.Item as='li'>
                                        <div className="ol-title">
                                            복수 객관식 질문입니다.
                                        </div>
                                        <div className='ol-answer'>
                                            <SelectCheck01/>
                                        </div>
                                    </List.Item>

                                    <List.Item as='li'>
                                        <div className="ol-title">
                                            주관식 질문입니다.
                                        </div>
                                        <div className='ol-answer'>
                                            <ClearInputBox/>
                                        </div>
                                    </List.Item>

                                    <List.Item as='li'>
                                        <div className="ol-title">
                                            서술형 질문입니다.
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
                                </List>
                            </div>
                        </div>
                    </Modal.Content>
                    <Modal.Actions className="actions">
                        <Button className='w190 pop d' onClick={this.close}>Cancel</Button>
                        <Button className='w190 pop p' onClick={this.close}>OK</Button>
                    </Modal.Actions>
                </Modal>
            </>
        )
    }
}

export default SurveyModal;
