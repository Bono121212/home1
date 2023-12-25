import React, {Component} from 'react';
import { Segment } from "semantic-ui-react";
import HotTopicLoop from '../HotTopicLoop';
import KeywordTags from '../KeywordTags';


class HotTopicSection extends Component {
    render() {
        return (
            <>
                <Segment className="full learning-section type5">
                    <div className="section-head">
                        <div className="sec-tit-txt">구성원이 찾는 <strong>인기키워드</strong></div>
                        <KeywordTags/>
                    </div>
                    <div className="section-body">
                        <div className="sec-tit-txt"><strong>Hot Topic</strong></div>
                        <div className="sec-tit-btn"><button className="btn-more">전체보기</button></div>
                        <HotTopicLoop swipeName="swiperHopTopic"/>
                    </div>
                </Segment>
            </>
        )
    }

}

export default HotTopicSection