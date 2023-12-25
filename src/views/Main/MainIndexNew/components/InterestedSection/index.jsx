import React, {Component} from 'react';
import { Segment, Button, Icon } from "semantic-ui-react";
import InterestedTags from '../InterestedTags';
import LearningLoopType1B from '../LearningLoopType1B';


class InterestedSection extends Component {
    render() {
        return (
            <>
                <Segment className="full learning-section type1">
                    <div className="section-head">
                        <div className="sec-tit-txt">
                            <span><strong>김써니님</strong>의 관심채널</span>
                            <Button icon className="img-icon setting">
                                <Icon className='setting30'/><span className="blind">설정</span>
                            </Button>
                        </div>
                        <div className="sec-tit-btn"><button className="btn-more">전체보기</button></div>
                    </div>
                    <div className="section-body">
                        <InterestedTags/>
                        <LearningLoopType1B swipeName="swiperInterested"/>
                    </div>
                </Segment>
            </>
        )
    }

}

export default InterestedSection