import React, { Component } from 'react'
import CardValueDefaultTypeList from '../CardValueDefaultTypeList'
import CardValueDefaultTypeList02 from '../ForPreview/CardValueDefaultTypeList02'
import CardValueDefaultTypeList03 from '../ForPreview/CardValueDefaultTypeList03'
import CardValueDefaultTypeList04 from '../ForPreview/CardValueDefaultTypeList04'
import OthersTopicLoop from '../OthersTopicLoop'


class ContentsArea extends Component {
    render() {
        return (
            <div className="topic-content topic-content2">
                <div className="list-area">
                    <div className="topic-list-wrap">
                        <CardValueDefaultTypeList/>
                        <CardValueDefaultTypeList02/>
                        <CardValueDefaultTypeList03/>
                        <CardValueDefaultTypeList04/>
                        <CardValueDefaultTypeList/>
                        <CardValueDefaultTypeList02/>
                        <CardValueDefaultTypeList03/>
                        <CardValueDefaultTypeList04/>
                    </div>
                </div>
                <div className="side-area">
                    <div className="aside-inner">
                        <div className="aside-tit"><strong>김써니 님</strong><br/>
                        다른 Hot Topic은 어떠세요?</div>
                        <OthersTopicLoop swipeName="swiperOtherTopics"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContentsArea