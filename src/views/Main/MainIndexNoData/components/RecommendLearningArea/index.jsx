import React, {Component} from 'react';
import {
    Segment, Label, Button
} from "semantic-ui-react";
import classNames from 'classnames';
import RecommendChannelList from '../RecommendChannelList';

class RecommendLearningArea extends Component {

    state = {
        channelSelected : true
    }

    channelSelect = () => this.setState({ channelSelected : !this.state.channelSelected })

    render() {

        const { channelSelected } = this.state;

        return (
            <>
                <div className="recommend-channel">
                    <Segment className="full">
                        {/*left*/}
                        <div className="recommend-tab-area">
                            <h2 className="title">추천채널</h2>
                            <div className="title-text">
                                AI/DT Literacy 채널에서<br/>김유니님께 추천하는<br/>과정입니다.
                            </div>
                            {/*채널명*/}
                            <div className="channel-wrap">
                                <Label as='button' className={classNames('ch', { 'active' : channelSelected })} onClick={this.channelSelect}>AI/DT Literacy</Label>
                                <Label as='button' className='ch'>AI Fundamentals</Label>
                                <Label as='button' className='ch'>AI Tech.Essential</Label>
                                <Label as='button' className='ch'>Computer Vision AI</Label>
                                <Label as='button' className='ch'>Language AI</Label>
                                <Label as='button' className='ch'>Speech AI</Label>
                                <Label as='button' className='ch'>Post Corona Perspectives</Label>
                                <Label as='button' className='ch'>HR</Label>
                                <Label as='button' className='ch'>주요 국가의 이해_이슈 및 트랜드</Label>
                            </div>
                        </div>

                        {/*right*/}
                        <RecommendChannelList/>

                        {/*paging*/}
                        <div className="paging">
                            <Button className='page-prev' disabled><span className='blind'>이전</span></Button>
                            <span className='current'>1</span>
                            <span className='all'>/3</span>
                            <Button className='page-next'><span className='blind'>다음</span></Button>
                        </div>

                    </Segment>
                </div>
            </>
        )
    }
}

export default RecommendLearningArea