import React, {Component} from 'react'
import {
    List,
    Segment,
} from 'semantic-ui-react'

import ActionButtons from "../ActionButtons";
import SelectRadio01 from "../SelectRadio01";
import SelectRadio02 from "../SelectRadio02";
import SelectCheck01 from "../SelectCheck01";
import ClearInputBox from "../ClearInputBox";

class ContentsArea extends Component {
    render() {
        return (
            <Segment className='full'>
                <div className="content-area">
                    <div className="content-inner">

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

                <ActionButtons/>

            </Segment>
        )
    }
}


export default ContentsArea
